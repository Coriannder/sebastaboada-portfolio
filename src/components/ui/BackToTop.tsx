'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop({ title }: { title: string }) {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="flex items-center gap-1 px-3 py-1.5 text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
      title={title}
    >
      <span>Top</span>
      <ArrowUp className="w-3.5 h-3.5" />
    </button>
  );
}
