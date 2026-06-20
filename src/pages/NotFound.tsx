import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, Home, Code, Server, Binary } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-md w-full space-y-8 animate-in fade-in zoom-in-95 duration-350"
      >
        {/* Animated Icon */}
        <div className="flex justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400 shadow-md shadow-indigo-500/10"
          >
            <Compass className="h-10 w-10" />
          </motion.div>
        </div>

        {/* 404 Header */}
        <div className="space-y-3">
          <h1 className="text-7xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
            404
          </h1>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Page Not Found
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-light max-w-sm mx-auto leading-relaxed">
            Oops! The path you are looking for doesn't exist or has been moved to another location.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 text-sm font-semibold shadow-sm hover:shadow-indigo-500/20 active:scale-95 transition-all cursor-pointer"
          >
            <Home className="h-4 w-4" />
            <span>Go Back Home</span>
          </Link>
        </div>

        {/* Quick Links divider */}
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
          <span className="flex-shrink mx-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">
            Try Exploring
          </span>
          <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
        </div>

        {/* Suggestion Paths Grid */}
        <div className="grid grid-cols-3 gap-3">
          <Link
            to="/topic/react"
            className="flex flex-col items-center p-3 rounded-xl border border-slate-100 hover:border-indigo-500/30 bg-white/50 hover:bg-white dark:border-slate-800/40 dark:hover:border-indigo-500/20 dark:bg-slate-900/30 dark:hover:bg-slate-900 transition-all group"
          >
            <Code className="h-5 w-5 text-indigo-500 mb-1.5 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">React</span>
          </Link>
          <Link
            to="/topic/system-design"
            className="flex flex-col items-center p-3 rounded-xl border border-slate-100 hover:border-indigo-500/30 bg-white/50 hover:bg-white dark:border-slate-800/40 dark:hover:border-indigo-500/20 dark:bg-slate-900/30 dark:hover:bg-slate-900 transition-all group"
          >
            <Server className="h-5 w-5 text-cyan-500 mb-1.5 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Design</span>
          </Link>
          <Link
            to="/topic/dsa"
            className="flex flex-col items-center p-3 rounded-xl border border-slate-100 hover:border-indigo-500/30 bg-white/50 hover:bg-white dark:border-slate-800/40 dark:hover:border-indigo-500/20 dark:bg-slate-900/30 dark:hover:bg-slate-900 transition-all group"
          >
            <Binary className="h-5 w-5 text-orange-500 mb-1.5 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">DSA</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
