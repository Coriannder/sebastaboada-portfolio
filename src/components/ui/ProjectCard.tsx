'use client';

import React from 'react';
import Image from 'next/image';
import { ProjectItem } from '@/types/content';
import { useLanguage } from '@/context/LanguageContext';
import { ExternalLink, Lock, CheckCircle, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { t } = useLanguage();

  return (
    <article className="group rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-zinc-900/30 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col lg:flex-row">
      {/* Visual / Image Side */}
      <div className="relative w-full lg:w-5/12 min-h-[240px] sm:min-h-[280px] lg:min-h-full bg-zinc-100 dark:bg-zinc-950 overflow-hidden border-b lg:border-b-0 lg:border-r border-zinc-200/80 dark:border-zinc-800/80">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
        <div className="absolute top-4 left-4 z-10">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-zinc-900/80 text-zinc-100 backdrop-blur-md border border-zinc-700/60 shadow-xs">
            {project.badge}
          </span>
        </div>
      </div>

      {/* Content Side */}
      <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between space-y-6">
        <div>
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                Case Study 0{index + 1}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mt-0.5">
                {project.title}
              </h3>
            </div>
            {project.isPrivate ? (
              <span
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 shrink-0"
                title={t.projects.privateRepo}
              >
                <Lock className="w-3 h-3" />
                <span className="hidden sm:inline">Enterprise / NDA</span>
              </span>
            ) : null}
          </div>

          <p className="mt-2 text-xs sm:text-sm font-medium text-sky-600 dark:text-sky-400 font-mono">
            {project.tagline}
          </p>

          <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            {project.description}
          </p>

          {/* Technical Challenge & Solution */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/70 dark:border-zinc-800/60">
            <div>
              <h4 className="text-xs font-mono font-semibold uppercase text-zinc-500 dark:text-zinc-400 tracking-wider mb-1">
                {t.projects.problemLabel}
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div>
              <h4 className="text-xs font-mono font-semibold uppercase text-sky-600 dark:text-sky-400 tracking-wider mb-1">
                {t.projects.solutionLabel}
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Impact Highlights */}
          <div className="mt-5 space-y-2">
            <h4 className="text-xs font-mono font-semibold uppercase text-zinc-400 dark:text-zinc-500 tracking-wider">
              {t.projects.impactLabel}
            </h4>
            <ul className="space-y-1.5">
              {project.impact.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer with Stack & Action Links */}
        <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((item) => (
              <span
                key={item}
                className="px-2 py-0.5 text-[11px] font-mono rounded bg-zinc-100 dark:bg-zinc-800/90 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/50"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 hover:opacity-90 transition-opacity shadow-xs"
              >
                <span>{t.projects.viewDemo}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 transition-colors"
              >
                <span>{t.projects.viewCode}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            )}
            {project.isPrivate && !project.demoUrl && (
              <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                {t.projects.privateRepo}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
