import { useState, useMemo, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { questionsBank, categoryDetails } from '../data/questions';
import { Accordion } from '../components/Accordion';
import { Pagination } from '../components/Pagination';
import { EmptyState } from '../components/EmptyState';
import { useCustomQuestionsStore } from '../store/customQuestionsStore';
import { generateAIQuestion } from '../services/geminiService';
import { useToastStore } from '../store/toastStore';
import { findSimilarQuestion } from '../utils/similarity';
import { SearchBar } from '../components/SearchBar';
import { useFilteredQuestions } from '../hooks/useFilteredQuestions';

export function TopicPage() {
  const { topicId } = useParams<{ topicId: string }>();

  const { customQuestions, addQuestion, editedQuestions, deletedQuestionIds } = useCustomQuestionsStore();
  const { showToast } = useToastStore();
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);

  // Validate topicId exists in our database
  if (!topicId || !questionsBank[topicId]) {
    return <Navigate to="/" replace />;
  }

  const topicDetail = categoryDetails[topicId];

  // Merge static and custom questions for the current category, filtering out deleted ones and overriding with edited ones
  const allQuestions = useMemo(() => {
    const staticQuestions = questionsBank[topicId] || [];
    const topicCustomQuestions = customQuestions.filter((q) => q.category === topicId);
    const combined = [...staticQuestions, ...topicCustomQuestions];
    return combined
      .filter((q) => !deletedQuestionIds.includes(q.id))
      .map((q) => editedQuestions[q.id] || q);
  }, [topicId, customQuestions, editedQuestions, deletedQuestionIds]);

  // States
  const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);

  // Compute category statistics
  const categoryStats = useMemo(() => {
    const total = allQuestions.length;
    const basic = allQuestions.filter((q) => q.difficulty === 'basic').length;
    const intermediate = allQuestions.filter((q) => q.difficulty === 'intermediate').length;
    const advanced = allQuestions.filter((q) => q.difficulty === 'advanced').length;
    return { total, basic, intermediate, advanced };
  }, [allQuestions]);

  // Use custom hook for filters and pagination
  const {
    searchQuery,
    setSearchQuery,
    selectedDifficulties,
    handleDifficultyToggle,
    currentPage,
    setCurrentPage,
    totalPages,
    filteredQuestions,
    paginatedQuestions,
    resetFilters,
    itemsPerPage,
  } = useFilteredQuestions(allQuestions, 10);

  // Reset page when topic changes
  useEffect(() => {
    resetFilters();
  }, [topicId]);

  // Auto-expand first question when list or page changes (only when not searching)
  useEffect(() => {
    if (paginatedQuestions.length > 0 && searchQuery.trim() === '') {
      setOpenAccordionId(paginatedQuestions[0].id);
    } else {
      setOpenAccordionId(null);
    }
  }, [paginatedQuestions, currentPage, searchQuery]);

  const handleAccordionToggle = (id: string) => {
    setOpenAccordionId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-8 flex-1 flex flex-col">
      {/* Title Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {topicDetail.name} Questions
          </h1>
          <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400 font-light">
            Prepare for roles requiring {topicDetail.name} proficiency. Curated for developers with 3+ years experience.
          </p>
        </div>

        {/* Mini stats */}
        <div className="flex items-center gap-2 rounded-xl bg-slate-100 p-1.5 text-xs font-semibold uppercase text-slate-500 dark:bg-slate-900 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
          <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-950 text-indigo-600 dark:text-indigo-400 shadow-sm">
            {categoryStats.total} Total
          </span>
          <span className="px-1.5">{categoryStats.basic} Basic</span>
          <span className="h-3 w-px bg-slate-300 dark:bg-slate-700"></span>
          <span className="px-1.5">{categoryStats.intermediate} Inter</span>
          <span className="h-3 w-px bg-slate-300 dark:bg-slate-700"></span>
          <span className="px-1.5">{categoryStats.advanced} Adv</span>
        </div>
      </div>

      {/* Filter and Search controls */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
        <div className="flex flex-col gap-4 md:flex-row md:items-center justify-between">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder={`Search ${topicDetail.name} questions or topics...`}
            className="flex-1"
          />

          {/* Difficulty filters */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider dark:text-slate-400 mr-1">
              Difficulty:
            </span>
            {['basic', 'intermediate', 'advanced'].map((diff) => {
              const active = selectedDifficulties.includes(diff);
              return (
                <button
                  key={diff}
                  onClick={() => handleDifficultyToggle(diff)}
                  className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    active
                      ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/20'
                      : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      diff === 'basic'
                        ? 'bg-emerald-500'
                        : diff === 'intermediate'
                        ? 'bg-amber-500'
                        : 'bg-rose-500'
                    }`}
                  ></span>
                  <span>{diff}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Questions list container */}
      <div className="flex-1 flex flex-col justify-between gap-8">
        {filteredQuestions.length > 0 ? (
          <div className="space-y-8 flex-1 flex flex-col justify-between">
            {/* Animated Accordion List for Smooth Page Switch Transitions */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${topicId}-${currentPage}-${selectedDifficulties.join('-')}-${searchQuery}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="space-y-4"
              >
                <div className="text-xs font-medium text-slate-400 mb-2">
                  Showing {(currentPage - 1) * itemsPerPage + 1} -{' '}
                  {Math.min(currentPage * itemsPerPage, filteredQuestions.length)} of{' '}
                  {filteredQuestions.length} questions
                </div>
                <Accordion
                  questions={paginatedQuestions}
                  openId={openAccordionId}
                  onToggle={handleAccordionToggle}
                  searchQuery={searchQuery}
                />
              </motion.div>
            </AnimatePresence>

            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </div>
        ) : (
          <EmptyState
            onReset={resetFilters}
            searchQuery={searchQuery}
            isGeneratingAI={isGeneratingAI}
            onGenerateAI={async () => {
              if (searchQuery.trim() === '') return;
              
              // Pre-check
              const preCheck = findSimilarQuestion(searchQuery, allQuestions);
              if (preCheck) {
                showToast(`A similar question already exists: "${preCheck.title}". We've highlighted it for you!`, 'info');
                setSearchQuery(preCheck.title);
                return;
              }

              setIsGeneratingAI(true);
              try {
                const newQ = await generateAIQuestion(searchQuery, topicId);
                
                // Post-check
                const postCheck = findSimilarQuestion(newQ.title, allQuestions);
                if (postCheck) {
                  showToast(`A similar question is already covered by: "${postCheck.title}"!`, 'info');
                  setSearchQuery(postCheck.title);
                  return;
                }

                addQuestion(newQ);
                showToast(`AI generated question successfully added to ${topicDetail.name}!`, 'success');
                setSearchQuery(''); // Clear search so the user can see it
              } catch (err: any) {
                showToast(err.message || 'Failed to generate question. Please check your VITE_GEMINI_API_KEY configuration.', 'error');
              } finally {
                setIsGeneratingAI(false);
              }
            }}
          />
        )}
      </div>
    </div>
  );
}
