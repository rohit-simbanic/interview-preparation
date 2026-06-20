
export function LoadingSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/50"
        >
          <div className="flex justify-between items-start">
            <div className="space-y-3 w-3/4">
              <div className="flex gap-2">
                <div className="h-5 w-16 rounded-full bg-slate-200 dark:bg-slate-800"></div>
                <div className="h-5 w-24 rounded-full bg-slate-200 dark:bg-slate-800"></div>
              </div>
              <div className="h-6 w-full rounded bg-slate-200 dark:bg-slate-800"></div>
            </div>
            <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-800"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
