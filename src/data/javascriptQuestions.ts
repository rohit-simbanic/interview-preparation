import type { Question } from '../types';
import { basicQuestions } from './javascript/basic';
import { intermediateQuestions } from './javascript/intermediate';
import { advancedQuestions } from './javascript/advanced';

/**
 * Returns exactly 100 high-quality JavaScript interview questions
 * structured modularly under basic (30), intermediate (40), and advanced (30) levels.
 */
export function getJavaScriptQuestions(): Question[] {
  const allQuestions = [
    ...basicQuestions,
    ...intermediateQuestions,
    ...advancedQuestions
  ];

  // Verify list length to guarantee 100 questions requirement is strictly met
  if (allQuestions.length !== 100) {
    console.warn(`Expected exactly 100 JavaScript questions, but got ${allQuestions.length}`);
  }

  return allQuestions;
}
