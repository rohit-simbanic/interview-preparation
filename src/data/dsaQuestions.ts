import type { Question } from '../types';
import { basicQuestions } from './dsa/basic';
import { intermediateQuestions } from './dsa/intermediate';
import { advancedQuestions } from './dsa/advanced';

/**
 * Returns exactly 50 high-quality Data Structures & Algorithms interview questions
 * structured modularly under basic (15), intermediate (20), and advanced (15) levels.
 */
export function getDSAQuestions(): Question[] {
  const allQuestions = [
    ...basicQuestions,
    ...intermediateQuestions,
    ...advancedQuestions
  ];

  if (allQuestions.length !== 50) {
    console.warn(`Expected exactly 50 DSA questions, but got ${allQuestions.length}`);
  }

  return allQuestions;
}
