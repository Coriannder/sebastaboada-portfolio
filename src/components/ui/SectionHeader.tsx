import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

interface SectionHeaderProps {
  icon: LucideIcon;
  badge: string;
  title: string;
  subtitle: string;
}

export function SectionHeader({ icon: Icon, badge, title, subtitle }: SectionHeaderProps) {
  return (
    <Reveal className="max-w-2xl mb-12">
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 mb-3 border border-zinc-200 dark:border-zinc-700">
        <Icon className="w-3.5 h-3.5 text-accent" />
        <span>{badge}</span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
        {title}
      </h2>
      <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
        {subtitle}
      </p>
    </Reveal>
  );
}
