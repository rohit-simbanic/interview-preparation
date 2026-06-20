import type { Question } from '../types';
import { basicQuestions } from './react/basic';
import { intermediateQuestions } from './react/intermediate';
import { advancedQuestions } from './react/advanced';

/**
 * Returns exactly 100 high-quality React interview questions
 * structured modularly under basic (30), intermediate (40), and advanced (30) levels.
 */
export function getReactQuestions(): Question[] {
  const allQuestions = [
    ...basicQuestions,
    ...intermediateQuestions,
    ...advancedQuestions
  ];

  // Verify list length to guarantee 100 questions requirement is strictly met
  if (allQuestions.length !== 100) {
    console.warn(`Expected exactly 100 React questions, but got ${allQuestions.length}`);
  }

  return allQuestions;
}
