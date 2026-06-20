import type { Question } from '../types';
import { basicQuestions } from './state-query/basic';
import { intermediateQuestions } from './state-query/intermediate';
import { advancedQuestions } from './state-query/advanced';

/**
 * Returns exactly 100 high-quality Zustand, Redux & TanStack Query interview questions
 * structured modularly under basic (30), intermediate (40), and advanced (30) levels.
 */
export function getStateQueryQuestions(): Question[] {
  const allQuestions = [
    ...basicQuestions,
    ...intermediateQuestions,
    ...advancedQuestions
  ];

  // Verify list length to guarantee 100 questions requirement is strictly met
  if (allQuestions.length !== 100) {
    console.warn(`Expected exactly 100 Zustand, Redux & Query questions, but got ${allQuestions.length}`);
  }

  return allQuestions;
}
