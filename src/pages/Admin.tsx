import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Lock,
  Trash2,
  Edit,
  LogOut,
  RefreshCw,
  X,
  Loader2,
  FolderOpen,
  Eye,
  EyeOff
} from 'lucide-react';
import { questionsBank, categoryDetails } from '../data/questions';
import { useCustomQuestionsStore } from '../store/customQuestionsStore';
import { useToastStore } from '../store/toastStore';
import { SearchBar } from '../components/SearchBar';
import { DifficultyBadge } from '../components/DifficultyBadge';
import { ConfirmModal } from '../components/ConfirmModal';
import { Pagination } from '../components/Pagination';
import { useFilteredQuestions } from '../hooks/useFilteredQuestions';
import type { Question } from '../types';

export function Admin() {
  const { showToast } = useToastStore();
  const {
    customQuestions,
    editedQuestions,
    deletedQuestionIds,
    deleteQuestion,
    editQuestion,
    resetAll
  } = useCustomQuestionsStore();

  // Authentication State
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return sessionStorage.getItem('devprep_admin_logged_in') === 'true';
  });
  const [passwordInput, setPasswordInput] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Lockout States
  const [failedAttempts, setFailedAttempts] = useState<number>(() => {
    const attempts = localStorage.getItem('devprep_failed_login_attempts');
    return attempts ? parseInt(attempts, 10) : 0;
  });
  const [blockedUntil, setBlockedUntil] = useState<number>(() => {
    const blockedTime = localStorage.getItem('devprep_login_blocked_until');
    return blockedTime ? parseInt(blockedTime, 10) : 0;
  });
  const [secondsRemaining, setSecondsRemaining] = useState<number>(0);

  // Confirm Modal State
  const [confirmConfig, setConfirmConfig] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    confirmText: string;
    cancelText: string;
    onConfirm: () => void;
    isDanger?: boolean;
  }>({
    isOpen: false,
    title: '',
    message: '',
    confirmText: 'Confirm',
    cancelText: 'Cancel',
    onConfirm: () => {},
    isDanger: false,
  });

  // Lockout countdown timer
  useEffect(() => {
    const checkLockout = () => {
      const now = Date.now();
      if (blockedUntil > now) {
        setSecondsRemaining(Math.ceil((blockedUntil - now) / 1000));
      } else {
        setSecondsRemaining(0);
        if (failedAttempts >= 3) {
          setFailedAttempts(0);
          localStorage.setItem('devprep_failed_login_attempts', '0');
          localStorage.removeItem('devprep_login_blocked_until');
        }
      }
    };

    checkLockout();
    const interval = setInterval(checkLockout, 1000);
    return () => clearInterval(interval);
  }, [blockedUntil, failedAttempts]);


  // Edit Modal States
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);
  const [editForm, setEditForm] = useState<Omit<Question, 'id'>>({
    title: '',
    difficulty: 'basic',
    category: 'react',
    tags: [],
    enAnswer: '',
    bnAnswer: '',
    enExplanation: '',
    bnExplanation: '',
    createdAt: 0,
  });
  const [isSavingEdit, setIsSavingEdit] = useState(false);
  const [isDeletingId, setIsDeletingId] = useState<string | null>(null);
  const [isResetting, setIsResetting] = useState(false);

  // Authentication Verification
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (Date.now() < blockedUntil) {
      showToast('Login blocked due to too many failed attempts.', 'error');
      return;
    }

    if (!passwordInput.trim()) {
      showToast('Please enter a password.', 'error');
      return;
    }

    setIsLoggingIn(true);
    // Simulate short verify delay for UX loading experience
    setTimeout(() => {
      const targetPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123';
      if (passwordInput === targetPassword) {
        setIsAdminLoggedIn(true);
        sessionStorage.setItem('devprep_admin_logged_in', 'true');
        
        // Reset lockout states on successful login
        setFailedAttempts(0);
        localStorage.setItem('devprep_failed_login_attempts', '0');
        localStorage.removeItem('devprep_login_blocked_until');
        setBlockedUntil(0);
        
        showToast('Admin access granted. Welcome to DevPrep Console!', 'success');
      } else {
        const nextAttempts = failedAttempts + 1;
        setFailedAttempts(nextAttempts);
        localStorage.setItem('devprep_failed_login_attempts', nextAttempts.toString());

        if (nextAttempts >= 3) {
          const blockEndTime = Date.now() + 10 * 60 * 1000; // 10 minutes lockout
          setBlockedUntil(blockEndTime);
          localStorage.setItem('devprep_login_blocked_until', blockEndTime.toString());
          showToast('Too many failed attempts. Access blocked for 10 minutes.', 'error');
        } else {
          showToast(`Invalid admin password. ${3 - nextAttempts} attempt(s) remaining.`, 'error');
        }
      }
      setIsLoggingIn(false);
    }, 600);
  };

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    sessionStorage.removeItem('devprep_admin_logged_in');
    showToast('Logged out of Admin Console successfully.', 'info');
  };

  // 1. Gather all active (non-deleted) questions
  const allActiveQuestions = useMemo(() => {
    const staticQuestions = Object.values(questionsBank).flat();
    const combined = [...staticQuestions, ...customQuestions];
    return combined
      .filter((q) => !deletedQuestionIds.includes(q.id))
      .map((q) => editedQuestions[q.id] || q);
  }, [customQuestions, editedQuestions, deletedQuestionIds]);

  // 2. Sort by creation time (latest first)
  const sortedQuestions = useMemo(() => {
    return [...allActiveQuestions].sort((a, b) => {
      const timeA = a.createdAt || 0;
      const timeB = b.createdAt || 0;
      if (timeB !== timeA) {
        return timeB - timeA; // Latest first
      }
      // Stable fallback sorting
      return a.id.localeCompare(b.id);
    });
  }, [allActiveQuestions]);

  // Use the custom hook for filtering and pagination
  const {
    searchQuery,
    setSearchQuery,
    currentPage,
    setCurrentPage,
    totalPages,
    filteredQuestions,
    paginatedQuestions,
    itemsPerPage,
  } = useFilteredQuestions(sortedQuestions, 10);

  // Delete Action
  const handleDelete = (id: string, title: string) => {
    setConfirmConfig({
      isOpen: true,
      title: 'Delete Question',
      message: `Are you sure you want to delete the question: "${title}"? This action cannot be undone.`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      isDanger: true,
      onConfirm: () => {
        setIsDeletingId(id);
        setTimeout(() => {
          deleteQuestion(id);
          showToast('Question deleted successfully.', 'success');
          setIsDeletingId(null);
          // Adjust page if deletion emptied page
          const newTotal = filteredQuestions.length - 1;
          const newPages = Math.max(1, Math.ceil(newTotal / itemsPerPage));
          if (currentPage > newPages) {
            setCurrentPage(newPages);
          }
        }, 400);
      },
    });
  };

  // Edit Action Setup
  const openEditModal = (q: Question) => {
    setEditingQuestion(q);
    setEditForm({
      title: q.title,
      difficulty: q.difficulty,
      category: q.category,
      tags: q.tags,
      enAnswer: q.enAnswer,
      bnAnswer: q.bnAnswer,
      enExplanation: q.enExplanation,
      bnExplanation: q.bnExplanation,
      createdAt: q.createdAt || Date.now(),
    });
  };

  const handleEditSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingQuestion) return;

    if (!editForm.title.trim() || !editForm.enAnswer.trim() || !editForm.bnAnswer.trim()) {
      showToast('Title and core answers in both languages are required.', 'error');
      return;
    }

    setIsSavingEdit(true);
    setTimeout(() => {
      const updatedQuestion: Question = {
        ...editingQuestion,
        ...editForm,
        createdAt: Date.now(), // Force update timestamp to now so it serializes at the top of sorted lists
      };
      editQuestion(updatedQuestion);
      showToast('Question updated successfully.', 'success');
      setIsSavingEdit(false);
      setEditingQuestion(null);
    }, 500);
  };

  // Factory Reset
  const handleFactoryReset = () => {
    setConfirmConfig({
      isOpen: true,
      title: 'Factory Reset Platform',
      message: 'WARNING: This will clear all admin deletions, question edits, and dynamic AI-generated questions, resetting the app to default factory presets. Proceed?',
      confirmText: 'Reset Presets',
      cancelText: 'Cancel',
      isDanger: true,
      onConfirm: () => {
        setIsResetting(true);
        setTimeout(() => {
          resetAll();
          showToast('Platform reset to factory default question banks.', 'success');
          setCurrentPage(1);
          setSearchQuery('');
          setIsResetting(false);
        }, 700);
      },
    });
  };

  // Login Screen render
  if (!isAdminLoggedIn) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-[75vh] px-4">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="relative w-full max-w-md overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-8 text-white shadow-2xl"
        >
          {/* Backdrop Glow */}
          <div className="absolute -top-12 -left-12 h-44 w-44 rounded-full bg-indigo-500/10 blur-3xl"></div>
          <div className="absolute -bottom-12 -right-12 h-44 w-44 rounded-full bg-purple-500/10 blur-3xl"></div>

          <div className="relative z-10 space-y-6 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.3, type: 'spring', stiffness: 200 }}
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-lg"
            >
              <Lock className="h-7 w-7" />
            </motion.div>

            <div className="space-y-2">
              <h1 className="text-2xl font-bold tracking-tight">Admin Console</h1>
              <p className="text-sm text-slate-400">
                Authenticate with your system password to customize questions, edit translations, or clear entries.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4 text-left">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Password
                </label>
                <div className="relative font-normal">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    disabled={secondsRemaining > 0 || isLoggingIn}
                    placeholder={
                      secondsRemaining > 0
                        ? 'Access temporarily blocked'
                        : 'Enter admin password...'
                    }
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 pr-12 pl-4 py-3 text-sm text-white placeholder:text-slate-655 focus:border-indigo-500 focus:outline-none transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  />
                  {secondsRemaining === 0 && (
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      disabled={isLoggingIn}
                      className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-200 focus:outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      title={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4.5 w-4.5" />
                      ) : (
                        <Eye className="h-4.5 w-4.5" />
                      )}
                    </button>
                  )}
                </div>
              </div>

              {secondsRemaining > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="rounded-xl border border-rose-950/40 bg-rose-950/20 p-4 text-xs text-rose-450 flex items-start gap-2.5 overflow-hidden"
                >
                  <Lock className="h-4 w-4 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-semibold uppercase tracking-wider">Lockout Block Active</p>
                    <p>
                      Access is temporarily blocked due to 3 incorrect attempts. Try again in{' '}
                      <span className="font-mono font-bold">
                        {Math.floor(secondsRemaining / 60)}m{' '}
                        {String(secondsRemaining % 60).padStart(2, '0')}s
                      </span>
                      .
                    </p>
                  </div>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={secondsRemaining > 0 || isLoggingIn}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 py-3 text-sm font-semibold text-white transition-all shadow-md shadow-indigo-500/20 active:scale-98 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {isLoggingIn ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Verifying...</span>
                  </>
                ) : (
                  <span>Access Dashboard</span>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }

  // Dashboard Control Panel render
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="space-y-8 flex-1 flex flex-col"
    >
      {/* Upper Control Bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Admin Console
          </h1>
          <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400 font-light">
            Manage preparation tracks. You can delete questions or edit English/Bangla answers.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleFactoryReset}
            disabled={isResetting}
            className="inline-flex items-center gap-1.5 rounded-xl border border-rose-200 dark:border-rose-900/30 bg-rose-50 dark:bg-rose-950/20 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-450 hover:bg-rose-100 transition-all cursor-pointer disabled:opacity-50"
          >
            {isResetting ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <RefreshCw className="h-3.5 w-3.5" />
            )}
            <span>Factory Reset</span>
          </button>

          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-655 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 transition-all cursor-pointer"
          >
            <LogOut className="h-3.5 w-3.5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Stats Summary Bar */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.3 }}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/40"
        >
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Active Question Count
          </p>
          <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
            {allActiveQuestions.length} Questions
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/40"
        >
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Edited Overrides
          </p>
          <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
            {Object.keys(editedQuestions).length} Questions
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.3 }}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/40"
        >
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Deleted Questions
          </p>
          <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white text-rose-500">
            {deletedQuestionIds.length} Hidden
          </h3>
        </motion.div>
      </div>

      {/* Search Input Bar */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search questions by ID, title, tech category, difficulty..."
        />
      </div>

      {/* Main Questions List */}
      <div className="flex-1 flex flex-col justify-between gap-6">
        {filteredQuestions.length > 0 ? (
          <div className="space-y-6 flex-1 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentPage}-${searchQuery}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="space-y-6"
              >
                {/* Desktop Table View */}
            <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/30">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm text-slate-500 dark:text-slate-400">
                  <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:bg-slate-900/50 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Creation Info</th>
                      <th className="px-6 py-4 font-semibold">ID</th>
                      <th className="px-6 py-4 font-semibold">Track & Difficulty</th>
                      <th className="px-6 py-4 font-semibold w-1/3">Question Title</th>
                      <th className="px-6 py-4 font-semibold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-950/20">
                    {paginatedQuestions.map((q) => {
                      const isEdited = !!editedQuestions[q.id];
                      const isCustom = q.id.startsWith('ai-');
                      const creationDate = q.createdAt
                        ? new Date(q.createdAt).toLocaleDateString(undefined, {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })
                        : 'Factory Base';

                      return (
                        <tr
                          key={q.id}
                          className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30 transition-colors"
                        >
                          <td className="px-6 py-4">
                            <div className="space-y-0.5">
                              <span className="text-xs text-slate-400">{creationDate}</span>
                              <div className="flex gap-1">
                                {isCustom && (
                                  <span className="inline-flex rounded-md bg-indigo-50 px-1.5 py-0.5 text-[10px] font-semibold text-indigo-650 dark:bg-indigo-500/10 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/30">
                                    AI-Gen
                                  </span>
                                )}
                                {isEdited && (
                                  <span className="inline-flex rounded-md bg-amber-50 px-1.5 py-0.5 text-[10px] font-semibold text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 border border-amber-100 dark:border-amber-900/30">
                                    Edited
                                  </span>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 font-mono text-xs font-semibold text-slate-700 dark:text-slate-350">
                            {q.id}
                          </td>
                          <td className="px-6 py-4">
                            <div className="space-y-1">
                              <span className="inline-flex rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-655 dark:bg-slate-800 dark:text-slate-400">
                                {categoryDetails[q.category]?.name || q.category}
                              </span>
                              <div>
                                <DifficultyBadge difficulty={q.difficulty} size="xs" />
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 font-medium text-slate-850 dark:text-slate-200 text-sm">
                            {q.title}
                          </td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex items-center justify-end gap-2.5">
                              <button
                                onClick={() => openEditModal(q)}
                                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-550 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                                title="Edit Question"
                              >
                                <Edit className="h-4 w-4" />
                              </button>
                              <button
                                onClick={() => handleDelete(q.id, q.title)}
                                disabled={isDeletingId === q.id}
                                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-550 hover:bg-rose-50 hover:text-rose-600 dark:border-slate-800 dark:hover:bg-rose-950/20 dark:hover:text-rose-450 transition-colors cursor-pointer disabled:opacity-50"
                                title="Delete Question"
                              >
                                {isDeletingId === q.id ? (
                                  <Loader2 className="h-4 w-4 animate-spin text-rose-500" />
                                ) : (
                                  <Trash2 className="h-4 w-4" />
                                )}
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Stacked Card View */}
            <div className="block md:hidden space-y-4">
              {paginatedQuestions.map((q) => {
                const isEdited = !!editedQuestions[q.id];
                const isCustom = q.id.startsWith('ai-');
                const creationDate = q.createdAt
                  ? new Date(q.createdAt).toLocaleDateString(undefined, {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })
                  : 'Factory Base';

                return (
                  <div
                    key={q.id}
                    className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4 dark:border-slate-800 dark:bg-slate-900/30"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-450 dark:text-slate-500 font-mono font-semibold">
                        {q.id}
                      </span>
                      <span className="text-xs text-slate-400">{creationDate}</span>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-slate-850 dark:text-slate-200 leading-relaxed">
                        {q.title}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="inline-flex rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-655 dark:bg-slate-800 dark:text-slate-400">
                          {categoryDetails[q.category]?.name || q.category}
                        </span>
                        <DifficultyBadge difficulty={q.difficulty} size="xs" />
                        {isCustom && (
                          <span className="inline-flex rounded-md bg-indigo-50 px-1.5 py-0.5 text-[10px] font-semibold text-indigo-650 dark:bg-indigo-500/10 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/30">
                            AI-Gen
                          </span>
                        )}
                        {isEdited && (
                          <span className="inline-flex rounded-md bg-amber-50 px-1.5 py-0.5 text-[10px] font-semibold text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 border border-amber-100 dark:border-amber-900/30">
                            Edited
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-100 dark:border-slate-800/60">
                      <button
                        onClick={() => openEditModal(q)}
                        className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold uppercase tracking-wider text-slate-650 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                      >
                        <Edit className="h-3.5 w-3.5" />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => handleDelete(q.id, q.title)}
                        disabled={isDeletingId === q.id}
                        className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold uppercase tracking-wider text-slate-650 hover:bg-rose-50 hover:text-rose-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-450 dark:hover:bg-rose-950/20 dark:hover:text-rose-405 transition-colors cursor-pointer disabled:opacity-50"
                      >
                        {isDeletingId === q.id ? (
                          <Loader2 className="h-3.5 w-3.5 animate-spin text-rose-500" />
                        ) : (
                          <Trash2 className="h-3.5 w-3.5" />
                        )}
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

            {/* Pagination controls */}
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 border-dashed py-16 px-4 dark:border-slate-800">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-400 dark:bg-slate-900 dark:text-slate-500 mb-4">
              <FolderOpen className="h-6 w-6" />
            </div>
            <h3 className="text-sm font-bold text-slate-850 dark:text-slate-200">
              No matching questions found
            </h3>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">
              Try refining your search keyword or resetting filters.
            </p>
          </div>
        )}
      </div>

      {/* Editing Backdrop Modal Form */}
      <AnimatePresence>
        {editingQuestion && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setEditingQuestion(null)}
              className="fixed inset-0 bg-slate-900/50 backdrop-blur-md dark:bg-slate-950/70"
            ></motion.div>

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
              className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900 flex flex-col gap-6 scrollbar-thin transition-all"
            >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 dark:border-slate-800">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Edit Question Details
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">ID: {editingQuestion.id}</p>
              </div>
              <button
                onClick={() => setEditingQuestion(null)}
                className="rounded-lg p-1.5 text-slate-450 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleEditSave} className="space-y-5 text-left">
              {/* Row 1: Title */}
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-450">
                  Question Title
                </label>
                <input
                  type="text"
                  value={editForm.title}
                  onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                  placeholder="Enter descriptive question title..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-500 focus:bg-white dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-100 dark:focus:border-indigo-500 dark:focus:bg-slate-950"
                  required
                />
              </div>

              {/* Row 2: Category & Difficulty */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-450">
                    Category Track
                  </label>
                  <select
                    value={editForm.category}
                    onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-500 focus:bg-white dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-100"
                  >
                    {Object.keys(categoryDetails).map((key) => (
                      <option key={key} value={key}>
                        {categoryDetails[key]?.name || key}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-450">
                    Difficulty Level
                  </label>
                  <select
                    value={editForm.difficulty}
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        difficulty: e.target.value as 'basic' | 'intermediate' | 'advanced',
                      })
                    }
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-500 focus:bg-white dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-100"
                  >
                    <option value="basic">Basic</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Tags (Comma Separated) */}
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-450">
                  Tags (Comma separated)
                </label>
                <input
                  type="text"
                  value={editForm.tags.join(', ')}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      tags: e.target.value.split(',').map((t) => t.trim()).filter(Boolean),
                    })
                  }
                  placeholder="e.g. react, hooks, performance"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-500 focus:bg-white dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-100 dark:focus:border-indigo-500 dark:focus:bg-slate-950"
                />
              </div>

              {/* Answers Grid (EN / BN) */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-450">
                    English Answer
                  </label>
                  <textarea
                    rows={3}
                    value={editForm.enAnswer}
                    onChange={(e) => setEditForm({ ...editForm, enAnswer: e.target.value })}
                    placeholder="Provide concise English answer..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-4 text-sm text-slate-900 outline-none focus:border-indigo-500 focus:bg-white dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-100"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-450">
                    Bangla Answer (বাংলা উত্তর)
                  </label>
                  <textarea
                    rows={3}
                    value={editForm.bnAnswer}
                    onChange={(e) => setEditForm({ ...editForm, bnAnswer: e.target.value })}
                    placeholder="বাংলায় সংক্ষিপ্ত উত্তর দিন..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-4 text-sm text-slate-900 outline-none focus:border-indigo-500 focus:bg-white dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-100"
                    required
                  />
                </div>
              </div>

              {/* Explanations Grid (EN / BN) */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-450">
                    English Explanation (Supports Markdown code/lists)
                  </label>
                  <textarea
                    rows={8}
                    value={editForm.enExplanation}
                    onChange={(e) => setEditForm({ ...editForm, enExplanation: e.target.value })}
                    placeholder="Provide standard structural headings:&#10;### Explanation&#10;[content]&#10;&#10;### Real-World Example&#10;[content]&#10;&#10;### Best Practice&#10;[content]&#10;&#10;### Common Mistakes&#10;[content]"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-4 font-mono text-xs text-slate-900 outline-none focus:border-indigo-500 focus:bg-white dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-100"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-450">
                    Bangla Explanation (Supports Markdown code/lists)
                  </label>
                  <textarea
                    rows={8}
                    value={editForm.bnExplanation}
                    onChange={(e) => setEditForm({ ...editForm, bnExplanation: e.target.value })}
                    placeholder="বাংলয়া সঠিক হেডারগুলো অন্তর্ভুক্ত করুন:&#10;### ব্যাখ্যা&#10;[content]&#10;&#10;### বাস্তব-ভিত্তিক উদাহরণ&#10;[content]&#10;&#10;### উত্তম অনুশীলন&#10;[content]&#10;&#10;### সাধারণ ভুল&#10;[content]"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-4 font-mono text-xs text-slate-900 outline-none focus:border-indigo-500 focus:bg-white dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-100"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 border-t border-slate-100 pt-4 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setEditingQuestion(null)}
                  className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 hover:scale-101 active:scale-99 transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSavingEdit}
                  className="flex items-center gap-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md shadow-indigo-500/20 hover:scale-101 active:scale-99 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSavingEdit ? (
                    <>
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      <span>Saving...</span>
                    </>
                  ) : (
                    <span>Save Changes</span>
                  )}
                </button>
              </div>
            </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Custom Confirmation Modal */}
      <ConfirmModal
        isOpen={confirmConfig.isOpen}
        title={confirmConfig.title}
        message={confirmConfig.message}
        confirmText={confirmConfig.confirmText}
        cancelText={confirmConfig.cancelText}
        isDanger={confirmConfig.isDanger}
        onConfirm={() => {
          setConfirmConfig((prev) => ({ ...prev, isOpen: false }));
          confirmConfig.onConfirm();
        }}
        onClose={() => setConfirmConfig((prev) => ({ ...prev, isOpen: false }))}
        isLoading={isResetting}
      />
    </motion.div>
  );
}
