import type { Question } from '../types';
import { basicQuestions } from './nextjs/basic';
import { intermediateQuestions } from './nextjs/intermediate';
import { advancedQuestions } from './nextjs/advanced';

/**
 * Returns exactly 100 high-quality Next.js interview questions
 * structured modularly under basic (30), intermediate (40), and advanced (30) levels.
 */
export function getNextJSQuestions(): Question[] {
  const allQuestions = [
    ...basicQuestions,
    ...intermediateQuestions,
    ...advancedQuestions
  ];

  // Verify list length to guarantee 100 questions requirement is strictly met
  if (allQuestions.length !== 100) {
    console.warn(`Expected exactly 100 Next.js questions, but got ${allQuestions.length}`);
  }

  return allQuestions;
}
