import { basicQuestions } from './system-design/basic';
import { intermediateQuestions } from './system-design/intermediate';
import { advancedQuestions } from './system-design/advanced';

export function getSystemDesignQuestions() {
  return [
    ...basicQuestions,
    ...intermediateQuestions,
    ...advancedQuestions
  ];
}
