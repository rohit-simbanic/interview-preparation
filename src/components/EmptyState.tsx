import { Search, RotateCcw, Sparkles } from 'lucide-react';

interface EmptyStateProps {
  onReset: () => void;
  onGenerateAI?: () => void;
  isGeneratingAI?: boolean;
  searchQuery?: string;
}

export function EmptyState({ onReset, onGenerateAI, isGeneratingAI, searchQuery }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-white p-12 text-center dark:border-slate-800 dark:bg-slate-900/20">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400">
        <Search className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
        No questions found
      </h3>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-sm">
        We couldn't find any questions matching your current search query, technology keywords, or difficulty filters.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={onReset}
          className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 cursor-pointer transition-colors"
        >
          <RotateCcw className="h-4 w-4" />
          <span>Reset filters</span>
        </button>

        {onGenerateAI && searchQuery && searchQuery.trim() !== '' && (
          <button
            onClick={onGenerateAI}
            disabled={isGeneratingAI}
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:from-indigo-500 hover:to-purple-500 disabled:opacity-50 cursor-pointer transition-all hover:scale-105 active:scale-95"
          >
            <Sparkles className={`h-4 w-4 ${isGeneratingAI ? 'animate-spin' : ''}`} />
            <span>{isGeneratingAI ? 'Generating question...' : 'Generate with Gemini Pro'}</span>
          </button>
        )}
      </div>
    </div>
  );
}
