import type { Question } from '../types';
import { getReactQuestions } from './reactQuestions';
import { getTypeScriptQuestions } from './typescriptQuestions';
import { getJavaScriptQuestions } from './javascriptQuestions';
import { getCSSQuestions } from './cssQuestions';
import { getNodeQuestions } from './nodeQuestions';
import { getMongoDBQuestions } from './mongodbQuestions';
import { getNextJSQuestions } from './nextjsQuestions';
import { getStateQueryQuestions } from './stateQueryQuestions';
import { getOtherTopicsQuestions } from './otherTopicsQuestions';
import { getSystemDesignQuestions } from './systemDesignQuestions';
import { getDSAQuestions } from './dsaQuestions';

// React question data is now managed in a separate file (reactQuestions.ts) for clean architecture.
// CSS concepts are managed in src/data/cssQuestions.ts
// Node.js questions are managed in src/data/nodeQuestions.ts


// Next.js questions are managed in src/data/nextjs/ directory and loaded via getNextJSQuestions()



// Question Bank Export
export const questionsBank: { [key: string]: Question[] } = {
  react: getReactQuestions(),
  typescript: getTypeScriptQuestions(),
  javascript: getJavaScriptQuestions(),
  css: getCSSQuestions(),
  'node-express': getNodeQuestions(),
  mongodb: getMongoDBQuestions(),
  nextjs: getNextJSQuestions(),
  'state-query': getStateQueryQuestions(),
  'other-topics': getOtherTopicsQuestions(),
  'system-design': getSystemDesignQuestions(),
  dsa: getDSAQuestions()
};

// Map of user-friendly names for sidebar/routing
export const categoryDetails: { [key: string]: { name: string; count: number } } = {
  react: { name: 'React', count: 100 },
  typescript: { name: 'TypeScript', count: 100 },
  javascript: { name: 'JavaScript', count: 100 },
  css: { name: 'CSS', count: 150 },
  'node-express': { name: 'Node.js & Express.js', count: 100 },
  mongodb: { name: 'MongoDB', count: 100 },
  nextjs: { name: 'Next.js', count: 100 },
  'state-query': { name: 'Zustand & Redux & Query', count: 100 },
  'other-topics': { name: 'Other Topics', count: 100 },
  'system-design': { name: 'System Design', count: 50 },
  dsa: { name: 'Data Structures & Algorithms', count: 50 }
};

