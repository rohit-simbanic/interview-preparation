import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Sun,
  Moon,
  Home,
  BookOpen,
  Code,
  Layers,
  Database,
  Globe,
  ChevronRight,
  Sparkles,
  FileText,
  Heart,
  Server,
  Binary,
  Lock
} from 'lucide-react';
import { categoryDetails, questionsBank } from '../data/questions';
import { useFavoritesStore } from '../store/favoritesStore';
import { useCustomQuestionsStore } from '../store/customQuestionsStore';
import { useMemo } from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export function DashboardLayout({ children, theme, toggleTheme }: DashboardLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { favoriteIds } = useFavoritesStore();
  const { customQuestions, editedQuestions, deletedQuestionIds } = useCustomQuestionsStore();

  const categoryCounts = useMemo(() => {
    const counts: { [key: string]: number } = {};
    Object.keys(categoryDetails).forEach((cat) => {
      const staticQuestions = questionsBank[cat] || [];
      const topicCustomQuestions = customQuestions.filter((q) => q.category === cat);
      const combined = [...staticQuestions, ...topicCustomQuestions];
      const activeCount = combined.filter((q) => !deletedQuestionIds.includes(q.id)).length;
      counts[cat] = activeCount;
    });
    return counts;
  }, [customQuestions, editedQuestions, deletedQuestionIds]);

  // Mapping categories to nice icons
  const getCategoryIcon = (key: string) => {
    switch (key) {
      case 'react':
        return <Code className="h-5 w-5" />;
      case 'typescript':
        return <FileText className="h-5 w-5 text-blue-500" />;
      case 'javascript':
        return <FileText className="h-5 w-5 text-yellow-500" />;
      case 'css':
        return <Layers className="h-5 w-5 text-pink-500" />;
      case 'node-express':
        return <Globe className="h-5 w-5 text-emerald-500" />;
      case 'mongodb':
        return <Database className="h-5 w-5 text-green-500" />;
      case 'nextjs':
        return <Globe className="h-5 w-5 text-slate-800 dark:text-white" />;
      case 'state-query':
        return <Layers className="h-5 w-5 text-purple-500" />;
      case 'system-design':
        return <Server className="h-5 w-5 text-cyan-500" />;
      case 'dsa':
        return <Binary className="h-5 w-5 text-orange-500" />;
      default:
        return <BookOpen className="h-5 w-5 text-indigo-500" />;
    }
  };

  const categories = Object.keys(categoryDetails);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col transition-colors duration-300">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/80">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 focus:outline-none dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-200 lg:hidden"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-md shadow-indigo-500/25">
                <Sparkles className="h-5 w-5 text-white animate-pulse" />
              </div>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-indigo-600 bg-clip-text text-transparent dark:from-white dark:to-indigo-300">
                DevPrep.io
              </span>
            </Link>
          </div>

          {/* Quick links & Theme Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className={`hidden sm:flex items-center gap-1.5 text-sm font-medium transition-colors ${
                location.pathname === '/'
                  ? 'text-indigo-600 dark:text-indigo-400'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>

            <span className="hidden sm:inline h-4 w-px bg-slate-200 dark:bg-slate-800"></span>

            <button
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm hover:bg-slate-50 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 transition-all cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Outer container */}
      <div className="mx-auto flex w-full max-w-7xl flex-1 items-stretch px-4 sm:px-6 lg:px-8">
        {/* Sidebar for Desktop */}
        <aside data-lenis-prevent className="hidden w-64 shrink-0 border-r border-slate-200 py-8 pr-6 lg:block dark:border-slate-800 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="space-y-8 pb-8">
            <div>
              <span className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Navigation
              </span>
              <div className="mt-3 space-y-1">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-all group ${
                      isActive
                        ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-400'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900/60 dark:hover:text-slate-200'
                    }`
                  }
                >
                  <div className="flex items-center gap-2.5">
                    <Home className="h-5 w-5" />
                    <span>Dashboard Home</span>
                  </div>
                  <ChevronRight className="h-4 w-4 opacity-0 transition-transform duration-200 group-hover:opacity-100 group-hover:translate-x-0.5" />
                </NavLink>

                <NavLink
                  to="/favorites"
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-all group ${
                      isActive
                        ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-400'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900/60 dark:hover:text-slate-200'
                    }`
                  }
                >
                  <div className="flex items-center gap-2.5">
                    <Heart className="h-5 w-5 text-rose-500 fill-rose-500/20" />
                    <span>My Favorites</span>
                  </div>
                  {favoriteIds.length > 0 ? (
                    <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-rose-500 px-1.5 text-[10px] font-bold text-white shadow-sm shadow-rose-500/20">
                      {favoriteIds.length}
                    </span>
                  ) : (
                    <ChevronRight className="h-4 w-4 opacity-0 transition-transform duration-200 group-hover:opacity-100 group-hover:translate-x-0.5" />
                  )}
                </NavLink>

                <NavLink
                  to="/admin"
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-all group ${
                      isActive
                        ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-400'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900/60 dark:hover:text-slate-200'
                    }`
                  }
                >
                  <div className="flex items-center gap-2.5">
                    <Lock className="h-5 w-5" />
                    <span>Admin Panel</span>
                  </div>
                  <ChevronRight className="h-4 w-4 opacity-0 transition-transform duration-200 group-hover:opacity-100 group-hover:translate-x-0.5" />
                </NavLink>
              </div>
            </div>

            <div>
              <span className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Interview Topics
              </span>
              <div className="mt-3 space-y-1">
                {categories.map((key) => {
                  const detail = categoryDetails[key];
                  return (
                    <NavLink
                      key={key}
                      to={`/topic/${key}`}
                      className={({ isActive }) =>
                        `flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-all group ${
                          isActive
                            ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-400'
                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900/60 dark:hover:text-slate-200'
                        }`
                      }
                    >
                      <div className="flex items-center gap-2.5">
                        {getCategoryIcon(key)}
                        <span>{detail.name}</span>
                      </div>
                      <span className="inline-flex h-5 items-center justify-center rounded-full bg-slate-100 px-2 text-[10px] font-bold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                        {categoryCounts[key] ?? 0}
                      </span>
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </nav>
        </aside>

        {/* Mobile Sidebar (Drawer) */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex">
            {/* Backdrop */}
            <div
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm dark:bg-slate-950/60"
            ></div>

            {/* Sidebar drawer content */}
            <div className="relative flex w-full max-w-xs flex-col bg-white p-6 shadow-xl dark:bg-slate-900 transition-colors duration-300">
              <div className="flex items-center justify-between">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <span className="font-bold text-slate-900 dark:text-white">DevPrep.io</span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div data-lenis-prevent className="mt-8 flex-1 overflow-y-auto pr-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Navigation
                </span>
                <div className="mt-3 space-y-1 mb-6">
                  <Link
                    to="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                  >
                    <Home className="h-5 w-5" />
                    <span>Dashboard Home</span>
                  </Link>

                  <Link
                    to="/favorites"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                  >
                    <div className="flex items-center gap-2.5">
                      <Heart className="h-5 w-5 text-rose-500 fill-rose-500/20" />
                      <span>My Favorites</span>
                    </div>
                    {favoriteIds.length > 0 && (
                      <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-rose-500 px-1.5 text-[10px] font-bold text-white shadow-sm shadow-rose-500/20">
                        {favoriteIds.length}
                      </span>
                    )}
                  </Link>

                  <Link
                    to="/admin"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                  >
                    <Lock className="h-5 w-5" />
                    <span>Admin Panel</span>
                  </Link>
                </div>

                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Interview Topics
                </span>
                <div className="mt-3 space-y-1">
                  {categories.map((key) => {
                    const detail = categoryDetails[key];
                    return (
                      <Link
                        key={key}
                        to={`/topic/${key}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                      >
                        <div className="flex items-center gap-2.5">
                          {getCategoryIcon(key)}
                          <span>{detail.name}</span>
                        </div>
                        <span className="inline-flex h-5 items-center justify-center rounded-full bg-slate-100 px-2 text-[10px] font-bold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                          {categoryCounts[key] ?? 0}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Content Panel */}
        <main className="flex-1 py-8 overflow-hidden lg:pl-8 flex flex-col">
          {children}
        </main>
      </div>
    </div>
  );
}
