import { AlertTriangle, Loader2 } from 'lucide-react';

interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onClose: () => void;
  isDanger?: boolean;
  isLoading?: boolean;
}

export function ConfirmModal({
  isOpen,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm,
  onClose,
  isDanger = false,
  isLoading = false,
}: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop Blur */}
      <div onClick={onClose} className="fixed inset-0 bg-slate-900/50 backdrop-blur-md dark:bg-slate-950/70"></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900 text-center space-y-6 transition-all scale-100">
        {/* Warning Badge */}
        <div
          className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${
            isDanger
              ? 'bg-rose-50 text-rose-500 dark:bg-rose-950/30 dark:text-rose-400 border border-rose-100 dark:border-rose-900/30 shadow-md shadow-rose-500/5'
              : 'bg-indigo-50 text-indigo-505 dark:bg-indigo-950/30 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/30 shadow-md shadow-indigo-500/5'
          }`}
        >
          <AlertTriangle className="h-7 w-7" />
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">{message}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onClose}
            disabled={isLoading}
            className="flex-1 rounded-xl border border-slate-200 bg-white px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 hover:scale-101 active:scale-99 transition-all cursor-pointer text-center disabled:opacity-50"
          >
            {cancelText}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={isLoading}
            className={`flex-1 flex items-center justify-center gap-1 rounded-xl px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-md hover:scale-101 active:scale-99 transition-all cursor-pointer text-center disabled:opacity-50 ${
              isDanger ? 'bg-rose-600 hover:bg-rose-500 shadow-rose-500/25' : 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/25'
            }`}
          >
            {isLoading && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
            <span>{confirmText}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
