import { GoogleGenerativeAI } from '@google/generative-ai';
import type { Question } from '../types';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';

export async function generateAIQuestion(topic: string, category: string): Promise<Question> {
  if (!apiKey) {
    throw new Error('VITE_GEMINI_API_KEY is not configured in your environment.');
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  // Using gemini-2.5-flash for fast content generation
  const model = genAI.getGenerativeModel({
    model: 'gemini-2.5-flash',
    generationConfig: {
      responseMimeType: 'application/json',
    },
  });

  const isAll = category === 'all' || !category;
  const targetCategory = isAll ? 'Select the best fitting category for this question from: [react, typescript, javascript, css, node-express, mongodb, nextjs, state-query, other-topics, system-design, dsa]' : category;

  const prompt = `
    You are an expert developer interview prep assistant.
    
    CRITICAL GUARDRAIL: Evaluate if the topic "${topic}" is relevant to software development, programming, computer science, DevOps, system design, databases, or frontend/backend engineering. 
    If the topic is completely irrelevant or out of context (e.g. cooking, jokes, general knowledge, sports, personal advice, etc.), you MUST return the following JSON error object instead of a question:
    {
      "error": "This topic is not relevant to developer interview preparation. Please search for a software engineering or technical topic."
    }

    Otherwise, generate exactly ONE high-quality technical interview question and answer about the topic: "${topic}".
    The question must fit the category: "${targetCategory}".

    You MUST respond with a single, valid JSON object matching the following structure:
    {
      "id": "ai-question-${Date.now()}",
      "title": "A clear, descriptive question title about ${topic}",
      "difficulty": "basic",
      "category": "${isAll ? 'one of the categories listed above' : category}",
      "tags": ["custom", "ai"],
      "enAnswer": "A concise 1-2 sentence answer in English.",
      "bnAnswer": "A concise 1-2 sentence answer in Bangla.",
      "enExplanation": "### Explanation\\n[Detailed English explanation here]\\n\\n### Real-World Example\\n[English real-world example here]\\n\\n### Best Practice\\n[English best practice guidelines]\\n\\n### Common Mistakes\\n[Common English mistakes]\\n\\n### Code Example (TypeScript)\\n\`\`\`typescript\\n// include a relevant TypeScript code snippet demonstrating the concept\\n\`\`\`",
      "bnExplanation": "### ব্যাখ্যা\\n[বাংলাতে বিস্তারিত ব্যাখ্যা]\\n\\n### বাস্তব-ভিত্তিক উদাহরণ\\n[বাংলাতে বাস্তব উদাহরণ]\\n\\n### উত্তম অনুশীলন\\n[বাংলাতে বেস্ট প্র্যাকটিস]\\n\\n### সাধারণ ভুল\\n[বাংলাতে সাধারণ ভুলসমূহ]"
    }

    Strict Rules:
    1. The JSON must be well-formed and valid.
    2. The English explanation must have the headers: 'Explanation', 'Real-World Example', 'Best Practice', 'Common Mistakes'.
    3. The Bangla explanation must have the headers: 'ব্যাখ্যা', 'বাস্তব-ভিত্তিক উদাহরণ', 'উত্তম অনুশীলন', 'সাধারণ ভুল'.
    4. Code snippets must be formatted correctly inside code blocks. Set the difficulty level ('basic', 'intermediate', or 'advanced') according to the complexity of the topic.
  `;

  const result = await model.generateContent(prompt);
  const text = result.response.text();
  
  let data;
  try {
    let cleanedText = text.trim();
    if (cleanedText.startsWith('```')) {
      cleanedText = cleanedText.replace(/^```(?:json)?/i, '').trim();
      cleanedText = cleanedText.replace(/```$/, '').trim();
    }

    data = JSON.parse(cleanedText);
  } catch (err) {
    console.error('Failed to parse Gemini response as JSON:', text, err);
    throw new Error('Gemini response was not valid JSON. Please try again.');
  }

  // Handle guardrail validation error outside of JSON try-catch to prevent masking
  if (data.error) {
    throw new Error(data.error);
  }

  const question = data as Question;
  
  // Normalize category
  const validCategories = ['react', 'typescript', 'javascript', 'css', 'node-express', 'mongodb', 'nextjs', 'state-query', 'other-topics', 'system-design', 'dsa'];
  if (!question.category || !validCategories.includes(question.category)) {
    question.category = isAll ? 'other-topics' : category;
  }
  
  // Ensure the ID is populated and unique
  if (!question.id || !question.id.startsWith('ai-')) {
    question.id = `ai-${question.category}-${Date.now()}`;
  }
  
  return question;
}
