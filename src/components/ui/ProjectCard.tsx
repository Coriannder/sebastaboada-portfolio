'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ProjectItem } from '@/types/content';
import { useLanguage } from '@/context/LanguageContext';
import { ExternalLink, Lock, CheckCircle, ArrowRight, ChevronDown } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { language, t } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="group rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-zinc-900/40 p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700 flex flex-col md:flex-row gap-6 items-start justify-between">
      {/* Content Side (Takes dominant space) */}
      <div className="flex-1 min-w-0 space-y-3 order-2 md:order-1 w-full">
        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
            0{index + 1} // Case Study
          </span>
          <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/60">
            {project.badge}
          </span>
          {project.isPrivate && (
            <span
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-200/80 dark:border-zinc-700/60"
              title={t.projects.privateRepo}
            >
              <Lock className="w-2.5 h-2.5" />
              <span>NDA / Enterprise</span>
            </span>
          )}
        </div>

        {/* Title & Tagline */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="mt-1 text-xs sm:text-sm font-medium text-accent font-mono">
            {project.tagline}
          </p>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 max-w-2xl">
          {project.description}
        </p>

        {/* Expandable Technical Details Button */}
        <div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors cursor-pointer"
          >
            <span>
              {expanded
                ? language === 'es'
                  ? 'Ocultar detalles técnicos'
                  : 'Hide technical details'
                : language === 'es'
                ? 'Ver desafío, arquitectura e impacto'
                : 'View challenge, architecture & impact'}
            </span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                expanded ? 'rotate-180 text-accent' : ''
              }`}
            />
          </button>
        </div>

        {/* Collapsible Details Content */}
        {expanded && (
          <div className="pt-2 space-y-3.5 animate-fadeIn max-w-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/70 dark:border-zinc-800/60">
              <div>
                <h4 className="text-[11px] font-mono font-semibold uppercase text-zinc-500 dark:text-zinc-400 tracking-wider mb-0.5">
                  {t.projects.problemLabel}
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>
              <div>
                <h4 className="text-[11px] font-mono font-semibold uppercase text-accent tracking-wider mb-0.5">
                  {t.projects.solutionLabel}
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Impact Highlights */}
            <div className="space-y-1.5">
              <h4 className="text-[11px] font-mono font-semibold uppercase text-zinc-400 dark:text-zinc-500 tracking-wider">
                {t.projects.impactLabel}
              </h4>
              <ul className="space-y-1">
                {project.impact.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                    <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Footer: Tech Pills & Action Buttons */}
        <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1">
            {project.stack.map((item) => (
              <span
                key={item}
                className="px-2 py-0.5 text-[10px] sm:text-[11px] font-mono rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 border border-zinc-200/70 dark:border-zinc-700/50"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 hover:opacity-90 transition-opacity shadow-2xs"
              >
                <span>{t.projects.viewDemo}</span>
                <ExternalLink className="w-3 h-3" />
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
                <ArrowRight className="w-3 h-3" />
              </a>
            )}
            {project.isPrivate && !project.demoUrl && (
              <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
                {t.projects.privateRepo}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Visual Corner Image (Compact thumbnail preview) */}
      <div className="w-full md:w-56 lg:w-64 h-36 sm:h-40 shrink-0 rounded-xl overflow-hidden relative border border-zinc-200/80 dark:border-zinc-800 shadow-xs group-hover:scale-[1.02] transition-transform order-1 md:order-2 bg-zinc-100 dark:bg-zinc-950">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 256px"
          className="object-cover object-top"
        />
      </div>
    </article>
  );
}


