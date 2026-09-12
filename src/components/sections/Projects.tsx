'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { FolderGit2 } from 'lucide-react';

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 mb-3 border border-zinc-200 dark:border-zinc-700">
            <FolderGit2 className="w-3.5 h-3.5 text-accent" />
            <span>{t.projects.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {t.projects.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            {t.projects.subtitle}
          </p>
        </div>

        {/* List of projects */}
        <div className="space-y-10">
          {t.projects.items.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
