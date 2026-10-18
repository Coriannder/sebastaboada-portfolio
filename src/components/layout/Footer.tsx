import React from 'react';
import type { Dictionary } from '@/types/content';
import { BackToTop } from '@/components/ui/BackToTop';

export function Footer({ t }: { t: Dictionary }) {
  return (
    <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <p className="text-xs text-zinc-600 dark:text-zinc-400">
            {t.footer.builtWith}
          </p>
          <p className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
            © {new Date().getFullYear()} Sebastián Taboada. {t.footer.rights}
          </p>
        </div>

        <BackToTop title={t.a11y.backToTop} />
      </div>
    </footer>
  );
}
