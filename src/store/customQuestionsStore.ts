import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Question } from '../types';

interface CustomQuestionsState {
  customQuestions: Question[];
  editedQuestions: { [id: string]: Question };
  deletedQuestionIds: string[];
  addQuestion: (question: Question) => void;
  deleteQuestion: (id: string) => void;
  editQuestion: (updated: Question) => void;
  clearCustomQuestions: () => void;
  resetAll: () => void;
}

export const useCustomQuestionsStore = create<CustomQuestionsState>()(
  persist(
    (set) => ({
      customQuestions: [],
      editedQuestions: {},
      deletedQuestionIds: [],
      addQuestion: (question) =>
        set((state) => ({
          customQuestions: [
            ...state.customQuestions,
            { ...question, createdAt: Date.now() }, // Always set to current time for sorting
          ],
        })),
      deleteQuestion: (id) =>
        set((state) => ({
          deletedQuestionIds: [...state.deletedQuestionIds, id],
        })),
      editQuestion: (updated) =>
        set((state) => {
          const isCustom = state.customQuestions.some((q) => q.id === updated.id);
          let newCustom = state.customQuestions;
          if (isCustom) {
            newCustom = state.customQuestions.map((q) =>
              q.id === updated.id ? { ...updated, createdAt: updated.createdAt || q.createdAt || Date.now() } : q
            );
          }
          return {
            customQuestions: newCustom,
            editedQuestions: { ...state.editedQuestions, [updated.id]: updated },
          };
        }),
      clearCustomQuestions: () => set({ customQuestions: [] }),
      resetAll: () =>
        set({
          customQuestions: [],
          editedQuestions: {},
          deletedQuestionIds: [],
        }),
    }),
    {
      name: 'devprep-custom-questions-v2', // v2 key to avoid conflicts with previous format
    }
  )
);
