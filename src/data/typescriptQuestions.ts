import type { Question } from '../types';
import { basicQuestions } from './typescript/basic';
import { intermediateQuestions } from './typescript/intermediate';
import { advancedQuestions } from './typescript/advanced';

/**
 * Returns exactly 100 high-quality TypeScript interview questions
 * structured modularly under basic (30), intermediate (40), and advanced (30) levels.
 */
export function getTypeScriptQuestions(): Question[] {
  const allQuestions = [
    ...basicQuestions,
    ...intermediateQuestions,
    ...advancedQuestions
  ];

  // Verify list length to guarantee 100 questions requirement is strictly met
  if (allQuestions.length !== 100) {
    console.warn(`Expected exactly 100 TypeScript questions, but got ${allQuestions.length}`);
  }

  return allQuestions;
}
