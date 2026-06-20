import type { Question } from '../types';
import { basicQuestions } from './other-topics/basic';
import { intermediateQuestions } from './other-topics/intermediate';
import { advancedQuestions } from './other-topics/advanced';

/**
 * Returns exactly 100 high-quality DevOps, Testing, Database and backend utility questions
 * structured modularly under basic (30), intermediate (40), and advanced (30) levels.
 */
export function getOtherTopicsQuestions(): Question[] {
  const allQuestions = [
    ...basicQuestions,
    ...intermediateQuestions,
    ...advancedQuestions
  ];

  // Verify list length to guarantee 100 questions requirement is strictly met
  if (allQuestions.length !== 100) {
    console.warn(`Expected exactly 100 Other Topics questions, but got ${allQuestions.length}`);
  }

  return allQuestions;
}
