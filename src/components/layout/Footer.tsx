'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1 px-3 py-1.5 text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          title="Volver al inicio"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
