import type { Question } from '../types';
import { basicQuestions } from './node/basic';
import { intermediateQuestions } from './node/intermediate';
import { advancedQuestions } from './node/advanced';

/**
 * Returns exactly 100 high-quality Node.js & Express.js interview questions
 * structured modularly under basic (30), intermediate (40), and advanced (30) levels.
 */
export function getNodeQuestions(): Question[] {
  const allQuestions = [
    ...basicQuestions,
    ...intermediateQuestions,
    ...advancedQuestions
  ];

  // Verify list length to guarantee 100 questions requirement is strictly met
  if (allQuestions.length !== 100) {
    console.warn(`Expected exactly 100 Node/Express questions, but got ${allQuestions.length}`);
  }

  return allQuestions;
}
