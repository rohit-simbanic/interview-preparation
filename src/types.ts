export interface Question {
  id: string;
  title: string;
  difficulty: 'basic' | 'intermediate' | 'advanced';
  category: string;
  tags: string[];
  enAnswer: string;
  bnAnswer: string;
  enExplanation: string;
  bnExplanation: string;
  createdAt?: number;
}
