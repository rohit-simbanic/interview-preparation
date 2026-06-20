import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';
import { useToastStore } from '../store/toastStore';
import type { ToastType } from '../store/toastStore';

export function ToastContainer() {
  const { toasts, dismissToast } = useToastStore();

  const getIcon = (type: ToastType) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />;
      case 'error':
        return <AlertCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />;
      default:
        return <Info className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />;
    }
  };

  const getBgColor = (type: ToastType) => {
    switch (type) {
      case 'success':
        return 'bg-white/95 border-emerald-100 shadow-emerald-500/5 dark:bg-slate-900/95 dark:border-emerald-950';
      case 'error':
        return 'bg-white/95 border-rose-100 shadow-rose-500/5 dark:bg-slate-900/95 dark:border-rose-950';
      default:
        return 'bg-white/95 border-slate-100 shadow-slate-500/5 dark:bg-slate-900/95 dark:border-slate-900';
    }
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 flex flex-col gap-3 sm:max-w-md w-auto pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.15 } }}
            className={`pointer-events-auto flex items-start gap-3 rounded-2xl border p-4 shadow-xl w-full ${getBgColor(
              toast.type
            )} backdrop-blur-md transition-colors duration-300`}
          >
            {getIcon(toast.type)}
            <div className="flex-1 text-sm font-semibold text-slate-800 dark:text-slate-200 break-words leading-relaxed select-text">
              {toast.message}
            </div>
            <button
              onClick={() => dismissToast(toast.id)}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
