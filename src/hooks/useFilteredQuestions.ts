import { useState, useMemo, useEffect } from 'react';
import type { Question } from '../types';

export function useFilteredQuestions(allQuestions: Question[], itemsPerPage: number = 10) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Reset page on search query change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // Toggle difficulty filters
  const handleDifficultyToggle = (difficulty: string) => {
    setSelectedDifficulties((prev) => {
      const next = prev.includes(difficulty)
        ? prev.filter((d) => d !== difficulty)
        : [...prev, difficulty];
      setCurrentPage(1); // Reset page on filter change
      return next;
    });
  };

  // Filtered list based on search and selected difficulties
  const filteredQuestions = useMemo(() => {
    return allQuestions.filter((q) => {
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === '' ||
        q.title.toLowerCase().includes(query) ||
        q.id.toLowerCase().includes(query) ||
        q.category.toLowerCase().includes(query) ||
        q.enAnswer.toLowerCase().includes(query) ||
        q.bnAnswer.toLowerCase().includes(query) ||
        q.tags.some((tag) => tag.toLowerCase().includes(query));

      const matchesDifficulty =
        selectedDifficulties.length === 0 || selectedDifficulties.includes(q.difficulty);

      return matchesSearch && matchesDifficulty;
    });
  }, [allQuestions, searchQuery, selectedDifficulties]);

  // Pagination totals
  const totalPages = Math.max(1, Math.ceil(filteredQuestions.length / itemsPerPage));

  // Paginated slice
  const paginatedQuestions = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredQuestions.slice(start, start + itemsPerPage);
  }, [filteredQuestions, currentPage, itemsPerPage]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedDifficulties([]);
    setCurrentPage(1);
  };

  const isFiltering = searchQuery.trim() !== '' || selectedDifficulties.length > 0;

  return {
    searchQuery,
    setSearchQuery,
    selectedDifficulties,
    handleDifficultyToggle,
    currentPage,
    setCurrentPage,
    totalPages,
    filteredQuestions,
    paginatedQuestions,
    resetFilters,
    isFiltering,
    itemsPerPage,
  };
}
