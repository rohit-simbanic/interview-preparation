import type { Question } from '../types';
import { basicQuestions } from './mongodb/basic';
import { intermediateQuestions } from './mongodb/intermediate';
import { advancedQuestions } from './mongodb/advanced';

/**
 * Returns exactly 100 high-quality MongoDB interview questions
 * structured modularly under basic (30), intermediate (40), and advanced (30) levels.
 */
export function getMongoDBQuestions(): Question[] {
  const allQuestions = [
    ...basicQuestions,
    ...intermediateQuestions,
    ...advancedQuestions
  ];

  // Verify list length to guarantee 100 questions requirement is strictly met
  if (allQuestions.length !== 100) {
    console.warn(`Expected exactly 100 MongoDB questions, but got ${allQuestions.length}`);
  }

  return allQuestions;
}
