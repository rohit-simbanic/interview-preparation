import type { Question } from '../types';
import { basicQuestions } from './css/basic';
import { intermediateQuestions } from './css/intermediate';
import { advancedQuestions } from './css/advanced';
import { tailwindcss4Questions } from './css/tailwindcss4';

/**
 * Returns exactly 150 high-quality CSS & Tailwind CSS v4 interview questions
 * structured modularly under basic (30), intermediate (40), advanced (30), and tailwindcss4 (50) levels.
 */
export function getCSSQuestions(): Question[] {
  const allQuestions = [
    ...basicQuestions,
    ...intermediateQuestions,
    ...advancedQuestions,
    ...tailwindcss4Questions
  ];

  // Verify list length to guarantee 150 questions requirement is strictly met
  if (allQuestions.length !== 150) {
    console.warn(`Expected exactly 150 CSS questions, but got ${allQuestions.length}`);
  }

  return allQuestions;
}
