import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  // Generate smart pagination page range with ellipsis
  const getPageNumbers = () => {
    const delta = 1; // Number of pages to show on each side of current page
    const range: number[] = [];
    const rangeWithDots: (number | string)[] = [];
    let prev: number | undefined;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        range.push(i);
      }
    }

    for (const i of range) {
      if (prev !== undefined) {
        if (i - prev === 2) {
          rangeWithDots.push(prev + 1);
        } else if (i - prev > 2) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      prev = i;
    }

    return rangeWithDots;
  };

  const visiblePages = getPageNumbers();

  return (
    <div className="flex flex-row items-center justify-between gap-2 border-t border-slate-200 pt-6 dark:border-slate-800 w-full">
      {/* Prev Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white p-2 sm:px-3.5 sm:py-2 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:hover:bg-white dark:border-slate-800 dark:bg-slate-900 dark:text-slate-350 dark:hover:bg-slate-800/80 dark:disabled:hover:bg-slate-900 transition-colors cursor-pointer disabled:cursor-not-allowed min-w-[36px] sm:min-w-fit"
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="hidden sm:inline">Previous</span>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto max-w-full no-scrollbar">
        {visiblePages.map((page, index) => {
          if (page === '...') {
            return (
              <span
                key={`dots-${index}`}
                className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center text-sm font-medium text-slate-400 dark:text-slate-500"
              >
                ...
              </span>
            );
          }

          const isActive = page === currentPage;
          const pageNum = page as number;

          return (
            <button
              key={`page-${pageNum}`}
              onClick={() => onPageChange(pageNum)}
              className={`relative flex h-8 w-8 sm:h-10 sm:w-10 cursor-pointer items-center justify-center rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                isActive
                  ? 'text-white font-semibold'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activePaginationBox"
                  className="absolute inset-0 rounded-lg bg-indigo-600 dark:bg-indigo-500"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">
                {pageNum}
              </span>
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white p-2 sm:px-3.5 sm:py-2 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:hover:bg-white dark:border-slate-800 dark:bg-slate-900 dark:text-slate-350 dark:hover:bg-slate-800/80 dark:disabled:hover:bg-slate-900 transition-colors cursor-pointer disabled:cursor-not-allowed min-w-[36px] sm:min-w-fit"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
