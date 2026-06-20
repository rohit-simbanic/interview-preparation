import type { Question } from '../types';

interface DifficultyBadgeProps {
  difficulty: Question['difficulty'];
  className?: string;
  size?: 'xs' | 'sm';
}

export function DifficultyBadge({ difficulty, className = '', size = 'sm' }: DifficultyBadgeProps) {
  const styles = {
    basic: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400',
    intermediate: 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400',
    advanced: 'bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400',
  };

  const sizeClasses = size === 'xs' ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-0.5 text-xs';

  return (
    <span
      className={`inline-flex items-center rounded-full font-bold uppercase tracking-wider transition-all duration-300 ${styles[difficulty]} ${sizeClasses} ${className}`}
    >
      {difficulty}
    </span>
  );
}
