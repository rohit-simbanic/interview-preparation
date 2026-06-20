import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  BookOpen,
  Code,
  FileText,
  Layers,
  Database,
  Globe,
  ArrowRight,
  Server,
  Binary
} from 'lucide-react';
import { questionsBank, categoryDetails } from '../data/questions';
import { Accordion } from '../components/Accordion';
import { Pagination } from '../components/Pagination';
import { useFavoritesStore } from '../store/favoritesStore';
import { useCustomQuestionsStore } from '../store/customQuestionsStore';
import type { Question } from '../types';

export function Favorites() {
  const { favoriteIds } = useFavoritesStore();
  const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState<string>('');
  const itemsPerPage = 10;

  const { customQuestions, editedQuestions, deletedQuestionIds } = useCustomQuestionsStore();

  // Flatten all questions in the question bank for lookup, filtering out deleted ones and overriding with edited ones
  const allQuestions = useMemo(() => {
    const staticQuestions = Object.values(questionsBank).flat();
    const combined = [...staticQuestions, ...customQuestions];
    return combined
      .filter((q) => !deletedQuestionIds.includes(q.id))
      .map((q) => editedQuestions[q.id] || q);
  }, [customQuestions, editedQuestions, deletedQuestionIds]);

  // Filter for favorited questions
  const favoriteQuestions = useMemo(() => {
    return allQuestions.filter((q) => favoriteIds.includes(q.id));
  }, [allQuestions, favoriteIds]);

  // Group ALL favorites by category key
  const groupedFavorites = useMemo(() => {
    const groups: { [key: string]: Question[] } = {};
    favoriteQuestions.forEach((q) => {
      const cat = q.category;
      if (!groups[cat]) {
        groups[cat] = [];
      }
      groups[cat].push(q);
    });
    return groups;
  }, [favoriteQuestions]);

  const categoryKeys = useMemo(() => Object.keys(groupedFavorites), [groupedFavorites]);

  // Automatically select the first category if current activeTab is empty or no longer valid
  useEffect(() => {
    if (categoryKeys.length > 0) {
      if (!activeTab || !categoryKeys.includes(activeTab)) {
        setActiveTab(categoryKeys[0]);
        setCurrentPage(1);
      }
    } else {
      setActiveTab('');
    }
  }, [categoryKeys, activeTab]);

  // Get questions for the active category tab
  const activeQuestions = useMemo(() => {
    return activeTab ? (groupedFavorites[activeTab] || []) : [];
  }, [groupedFavorites, activeTab]);

  const totalPages = Math.max(1, Math.ceil(activeQuestions.length / itemsPerPage));

  // Reset page if current page exceeds total pages for active category
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  // Paginated slice of active category questions
  const paginatedQuestions = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return activeQuestions.slice(start, start + itemsPerPage);
  }, [activeQuestions, currentPage]);

  const handleAccordionToggle = (id: string) => {
    setOpenAccordionId((prev) => (prev === id ? null : id));
  };

  const handleTabChange = (tabKey: string) => {
    setActiveTab(tabKey);
    setCurrentPage(1);
    setOpenAccordionId(null);
  };

  const getCategoryIcon = (key: string) => {
    switch (key) {
      case 'react':
        return <Code className="h-5 w-5 text-indigo-500" />;
      case 'typescript':
        return <FileText className="h-5 w-5 text-blue-500" />;
      case 'javascript':
        return <FileText className="h-5 w-5 text-yellow-500" />;
      case 'css':
        return <Layers className="h-5 w-5 text-pink-500" />;
      case 'node-express':
        return <Globe className="h-5 w-5 text-emerald-500" />;
      case 'mongodb':
        return <Database className="h-5 w-5 text-green-500" />;
      case 'nextjs':
        return <Globe className="h-5 w-5 text-slate-800 dark:text-slate-200" />;
      case 'state-query':
        return <Layers className="h-5 w-5 text-purple-500" />;
      case 'system-design':
        return <Server className="h-5 w-5 text-cyan-500" />;
      case 'dsa':
        return <Binary className="h-5 w-5 text-orange-500" />;
      default:
        return <BookOpen className="h-5 w-5 text-indigo-500" />;
    }
  };

  return (
    <div className="space-y-8 flex-1 flex flex-col">
      {/* Title Header */}
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          My Saved Favorites
        </h1>
        <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400 font-light">
          Review and practice your bookmarked questions across all topic tracks.
        </p>
      </div>

      {/* Tabs list */}
      {categoryKeys.length > 0 && (
        <div className="flex border-b border-slate-200 dark:border-slate-800 overflow-x-auto no-scrollbar gap-2 pb-px">
          {categoryKeys.map((catKey) => {
            const categoryInfo = categoryDetails[catKey];
            const count = groupedFavorites[catKey]?.length || 0;
            const isTabActive = activeTab === catKey;

            return (
              <button
                key={catKey}
                onClick={() => handleTabChange(catKey)}
                className={`relative flex items-center gap-2 px-4 py-3.5 text-sm font-semibold tracking-wide whitespace-nowrap cursor-pointer transition-all ${
                  isTabActive
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                {getCategoryIcon(catKey)}
                <span>{categoryInfo?.name || catKey}</span>
                <span className={`inline-flex items-center justify-center px-2 py-0.5 text-[10px] font-bold rounded-full transition-colors ${
                  isTabActive
                    ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-400'
                    : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'
                }`}>
                  {count}
                </span>

                {isTabActive && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-400"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      )}

      <div className="flex-1 flex flex-col justify-between gap-8">
        {favoriteQuestions.length > 0 ? (
          <div className="space-y-8 flex-1 flex flex-col justify-between">
            <div className="space-y-4">
              <AnimatePresence mode="wait">
                {activeTab && (
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Accordion
                      questions={paginatedQuestions}
                      openId={openAccordionId}
                      onToggle={handleAccordionToggle}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </div>
        ) : (
          /* Empty State */
          <div className="flex-1 flex flex-col items-center justify-center py-16 px-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="flex h-20 w-20 items-center justify-center rounded-2xl bg-rose-50 text-rose-500 dark:bg-rose-950/20 dark:text-rose-400 border border-rose-100 dark:border-rose-900/30 shadow-md shadow-rose-500/5 mb-6"
            >
              <Heart className="h-10 w-10 fill-current animate-pulse" />
            </motion.div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white text-center">
              No saved questions yet
            </h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 text-center max-w-sm font-light">
              Tap the heart icon on any question card to save it here for customized reviews and practice.
            </p>
            <Link
              to="/"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-500/25 hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <span>Explore Topics</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
