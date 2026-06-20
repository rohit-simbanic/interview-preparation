import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Code, Languages, Heart } from 'lucide-react';
import type { Question } from '../types';
import { useFavoritesStore } from '../store/favoritesStore';
import { DifficultyBadge } from './DifficultyBadge';

interface AccordionProps {
  questions: Question[];
  openId: string | null;
  onToggle: (id: string) => void;
  searchQuery?: string;
}

export function Accordion({ questions, openId, onToggle, searchQuery }: AccordionProps) {
  const { favoriteIds, toggleFavorite } = useFavoritesStore();

  return (
    <div className="space-y-4">
      {questions.map((q) => {
        const isOpen = openId === q.id;
        const isFav = favoriteIds.includes(q.id);

        return (
          <div
            key={q.id}
            className={`overflow-hidden rounded-xl border transition-all duration-300 ${
              isOpen
                ? 'border-indigo-500 bg-white shadow-lg shadow-indigo-500/5 dark:border-indigo-500/50 dark:bg-slate-900'
                : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-slate-700'
            }`}
          >
            {/* Header / Trigger */}
            <button
              onClick={() => onToggle(q.id)}
              className="flex w-full items-center justify-between p-5 text-left focus:outline-none"
              aria-expanded={isOpen}
            >
              <div className="flex flex-col gap-2 flex-1 min-w-0 pr-4">
                <div className="flex flex-wrap items-center gap-2">
                  <DifficultyBadge difficulty={q.difficulty} />
                  {q.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                  {highlightText(q.title, searchQuery)}
                </h3>
              </div>
              <div className="flex items-center gap-2.5 shrink-0">
                {/* Heart Button */}
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(q.id);
                  }}
                  className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl border transition-all duration-300 hover:scale-105 active:scale-95 ${
                    isFav
                      ? 'border-rose-100 bg-rose-500/10 text-rose-500 dark:border-rose-950/40 dark:bg-rose-950/20 dark:text-rose-400'
                      : 'border-slate-200 bg-white text-slate-400 hover:border-slate-300 hover:text-rose-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-500 dark:hover:border-slate-700 dark:hover:text-rose-400'
                  }`}
                  title={isFav ? "Remove from favorites" : "Add to favorites"}
                >
                  <Heart className={`h-4.5 w-4.5 ${isFav ? 'fill-current' : ''}`} />
                </span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                >
                  <ChevronDown className="h-5 w-5" />
                </motion.div>
              </div>
            </button>

            {/* Content panel */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="border-t border-slate-200 p-6 dark:border-slate-800">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:divide-x lg:divide-slate-200 lg:dark:divide-slate-800">
                      {/* English Column */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
                          <Languages className="h-4 w-4" />
                          <span>English Answer</span>
                        </div>
                        <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
                          {highlightText(q.enAnswer, searchQuery)}
                        </p>
                        {q.enExplanation && (
                          <div className="mt-4 space-y-2">
                            <div className="flex items-center gap-2 text-xs font-semibold uppercase text-slate-400">
                              <Code className="h-3.5 w-3.5" />
                              <span>Explanation & Example</span>
                            </div>
                            <div className="text-sm prose dark:prose-invert max-w-none">
                              {renderMarkdownLike(q.enExplanation)}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Bangla Column */}
                      <div className="space-y-4 lg:pl-6">
                        <div className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
                          <Languages className="h-4 w-4" />
                          <span>বাংলা উত্তর</span>
                        </div>
                        <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300 font-normal">
                          {highlightText(q.bnAnswer, searchQuery)}
                        </p>
                        {q.bnExplanation && (
                          <div className="mt-4 space-y-2">
                            <div className="flex items-center gap-2 text-xs font-semibold uppercase text-slate-400">
                              <Code className="h-3.5 w-3.5" />
                              <span>ব্যাখ্যা এবং উদাহরণ</span>
                            </div>
                            <div className="text-sm prose dark:prose-invert max-w-none">
                              {renderMarkdownLike(q.bnExplanation)}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

// Simple helper to parse basic markdown code blocks and lists in descriptions
function renderMarkdownLike(text: string) {
  if (!text) return null;

  // Split by code blocks
  const parts = text.split(/(```[a-z]*\n[\s\S]*?\n```)/g);

  return parts.map((part, index) => {
    if (part.startsWith('```')) {
      // Code block
      const match = part.match(/```([a-z]*)\n([\s\S]*?)\n```/);
      const language = match ? match[1] : '';
      const code = match ? match[2] : part.replace(/```/g, '');

      return (
        <pre key={index} className="my-3 overflow-x-auto rounded-lg bg-slate-950 p-4 text-xs text-slate-200">
          <code className={`language-${language}`}>{code}</code>
        </pre>
      );
    }

    // Handle normal text paragraphs and lines
    return (
      <div key={index} className="whitespace-pre-wrap text-slate-600 dark:text-slate-400 leading-relaxed my-2">
        {part.split('\n').map((line, lIdx) => {
          if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
            return (
              <li key={lIdx} className="ml-4 list-disc text-slate-600 dark:text-slate-400">
                {line.substring(2)}
              </li>
            );
          }
          if (line.trim().match(/^\d+\.\s/)) {
            const content = line.replace(/^\d+\.\s/, '');
            return (
              <li key={lIdx} className="ml-4 list-decimal text-slate-600 dark:text-slate-400">
                {content}
              </li>
            );
          }
          return <p key={lIdx} className="mb-1">{line}</p>;
        })}
      </div>
    );
  });
}

function highlightText(text: string, highlight: string | undefined) {
  if (!highlight || !highlight.trim()) {
    return <>{text}</>;
  }
  const cleanHighlight = highlight.trim();
  const escapedHighlight = cleanHighlight.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const regex = new RegExp(`(${escapedHighlight})`, 'gi');
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-amber-200 dark:bg-amber-500/40 text-slate-950 dark:text-white px-0.5 rounded font-semibold">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
}
