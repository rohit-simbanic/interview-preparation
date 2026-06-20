import type { Question } from '../types';

/**
 * Normalizes a string by converting to lowercase, removing punctuation,
 * and replacing multiple spaces with a single space.
 */
function normalizeString(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Finds a similar or identical question from a list of questions using
 * exact normalization, substring containment, and Jaccard word similarity.
 * Returns the matching Question if found, otherwise null.
 */
export function findSimilarQuestion(title: string, allQuestions: Question[]): Question | null {
  const nTitle = normalizeString(title);
  if (!nTitle) return null;

  for (const q of allQuestions) {
    const nQTitle = normalizeString(q.title);

    // 1. Exact match after normalization
    if (nTitle === nQTitle) {
      return q;
    }

    // 2. Substring containment for descriptive titles
    if (nTitle.length > 12 && nQTitle.length > 12) {
      if (nTitle.includes(nQTitle) || nQTitle.includes(nTitle)) {
        return q;
      }
    }

    // 3. Jaccard word similarity (ignoring short grammar words)
    const words1 = nTitle.split(' ').filter((w) => w.length > 2);
    const words2 = nQTitle.split(' ').filter((w) => w.length > 2);

    if (words1.length > 0 && words2.length > 0) {
      const set2 = new Set(words2);
      const intersection = words1.filter((w) => set2.has(w));
      
      // We divide intersection size by the size of the larger word set to be extra strict
      const score = intersection.length / Math.max(words1.length, words2.length);
      
      // 75% match threshold
      if (score >= 0.75) {
        return q;
      }
    }
  }

  return null;
}
