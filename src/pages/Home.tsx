import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Award,
  Zap,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import { SearchBar } from '../components/SearchBar';
import { useFilteredQuestions } from '../hooks/useFilteredQuestions';
import { questionsBank, categoryDetails } from '../data/questions';
import { Accordion } from '../components/Accordion';
import { Pagination } from '../components/Pagination';
import { EmptyState } from '../components/EmptyState';
import { useCustomQuestionsStore } from '../store/customQuestionsStore';
import { generateAIQuestion } from '../services/geminiService';
import { useToastStore } from '../store/toastStore';
import { findSimilarQuestion } from '../utils/similarity';
import { TopicCard } from '../components/TopicCard';
import { TiltCard } from '../components/TiltCard';

export function Home() {
  const { customQuestions, addQuestion, editedQuestions, deletedQuestionIds } = useCustomQuestionsStore();
  const { showToast } = useToastStore();
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);
  const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);

  // Flatten all questions for global search, filtering out deleted ones and overriding with edited ones
  const allQuestions = useMemo(() => {
    const staticQuestions = Object.values(questionsBank).flat();
    const combined = [...staticQuestions, ...customQuestions];
    return combined
      .filter((q) => !deletedQuestionIds.includes(q.id))
      .map((q) => editedQuestions[q.id] || q);
  }, [customQuestions, editedQuestions, deletedQuestionIds]);

  // Compute statistics
  const stats = useMemo(() => {
    const total = allQuestions.length;
    const basic = allQuestions.filter((q) => q.difficulty === 'basic').length;
    const intermediate = allQuestions.filter((q) => q.difficulty === 'intermediate').length;
    const advanced = allQuestions.filter((q) => q.difficulty === 'advanced').length;
    return { total, basic, intermediate, advanced };
  }, [allQuestions]);

  // Use the custom hook for filtering and pagination
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
    isFiltering,
  } = useFilteredQuestions(allQuestions, 10);

  // Auto-expand first question when list changes (only when not searching)
  useEffect(() => {
    if (paginatedQuestions.length > 0 && searchQuery.trim() === '') {
      setOpenAccordionId(paginatedQuestions[0].id);
    } else {
      setOpenAccordionId(null);
    }
  }, [paginatedQuestions, searchQuery]);

  const handleAccordionToggle = (id: string) => {
    setOpenAccordionId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-10">
      {/* Intro Hero Section (Show when not searching) */}
      {!isFiltering && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 p-8 text-white shadow-xl dark:border dark:border-slate-800"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(129,140,248,0.15),transparent_50%)]"></div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.3 }}
              className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-indigo-300"
            >
              <Sparkles className="h-3.5 w-3.5 animate-spin" />
              <span>Full-Stack Preparation Hub</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white"
            >
              Ace Your Next <br />
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Developer Interview
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="text-lg text-slate-300 leading-relaxed max-w-2xl font-light"
            >
              Master frontend, backend, system designs, and database queries with over {stats.total} curated questions. Complete with side-by-side English and Bengali translations and developer-focused code examples.
            </motion.p>
          </div>
        </motion.div>
      )}

      {/* Global Search and Filter bar */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
        <div className="flex flex-col gap-4 md:flex-row md:items-center justify-between">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search by questions, keywords, tech tags, or difficulty..."
            className="flex-1"
          />

          {/* Difficulty pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider dark:text-slate-400 mr-1">
              Filter:
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

      {/* Main Content Area */}
      {isFiltering ? (
        // Render Search Results
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Search Results ({filteredQuestions.length})
            </h2>
            <button
              onClick={resetFilters}
              className="text-xs font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
            >
              Clear Search
            </button>
          </div>

          {filteredQuestions.length > 0 ? (
            <div className="space-y-6">
              <Accordion
                questions={paginatedQuestions}
                openId={openAccordionId}
                onToggle={handleAccordionToggle}
                searchQuery={searchQuery}
              />
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
                
                // Pre-check before calling API
                const preCheck = findSimilarQuestion(searchQuery, allQuestions);
                if (preCheck) {
                  showToast(`A similar question already exists: "${preCheck.title}". We've highlighted it for you!`, 'info');
                  setSearchQuery(preCheck.title);
                  return;
                }

                setIsGeneratingAI(true);
                try {
                  const newQ = await generateAIQuestion(searchQuery, 'all');
                  
                  // Post-check after generation
                  const postCheck = findSimilarQuestion(newQ.title, allQuestions);
                  if (postCheck) {
                    showToast(`A similar question is already covered by: "${postCheck.title}"!`, 'info');
                    setSearchQuery(postCheck.title);
                    return;
                  }

                  addQuestion(newQ);
                  showToast(`AI generated question successfully added to category: ${categoryDetails[newQ.category]?.name || newQ.category}`, 'success');
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
      ) : (
        // Render Dashboard Stats and Topics list
        <div className="space-y-10">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
            <TiltCard index={0}>
              <div style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Questions</p>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{stats.total}</h3>
                </div>
              </div>
            </TiltCard>

            <TiltCard index={1}>
              <div style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Basic Level</p>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{stats.basic}</h3>
                </div>
              </div>
            </TiltCard>

            <TiltCard index={2}>
              <div style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400 group-hover:scale-110 transition-transform">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Intermediate</p>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{stats.intermediate}</h3>
                </div>
              </div>
            </TiltCard>

            <TiltCard index={3}>
              <div style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Advanced Level</p>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{stats.advanced}</h3>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Topics Card List */}
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Explore Preparation Paths
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Object.keys(categoryDetails).map((key, index) => {
                const detail = categoryDetails[key];
                return (
                  <TopicCard
                    key={key}
                    categoryKey={key}
                    detail={detail}
                    index={index}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
