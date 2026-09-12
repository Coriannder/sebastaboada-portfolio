'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowDown, Mail, FileDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

export function Hero() {
  const { language, t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/10 dark:bg-sky-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Profile Picture */}
          <div className="relative group shrink-0">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden p-1 bg-gradient-to-b from-zinc-300 to-zinc-100 dark:from-zinc-700 dark:to-zinc-900 shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <Image
                  src="/images/profile.jpg"
                  alt="Sebastián Taboada"
                  fill
                  sizes="(max-width: 768px) 144px, 176px"
                  priority
                  className="object-cover object-center"
                />
              </div>
            </div>
            {/* Status indicator on avatar */}
            <div className="absolute -bottom-2 -right-2 bg-white dark:bg-zinc-900 p-1 rounded-full shadow-md border border-zinc-200 dark:border-zinc-800">
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
              </span>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center md:text-left space-y-4">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>{t.hero.availableBadge}</span>
            </div>

            {/* Name & Title */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
                {t.hero.name}
              </h1>
              <p className="mt-2 text-lg sm:text-xl font-medium text-sky-600 dark:text-sky-400 font-mono">
                {t.hero.title}
              </p>
            </div>

            {/* Subtitle / Bio */}
            <p className="text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-300 max-w-2xl">
              {t.hero.subtitle}
            </p>

            {/* Quick Tech Pills */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 pt-1">
              {[
                'TypeScript',
                'Node.js / Express',
                'Clean Architecture',
                'MySQL',
                'Next.js 15',
                'MCP & AI Agents',
                'Docker',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 text-xs font-mono rounded-md bg-zinc-100 dark:bg-zinc-800/70 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs and Links */}
            <div className="pt-3 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 hover:opacity-90 transition-opacity shadow-sm"
              >
                <span>{t.hero.ctaProjects}</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900/60 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors shadow-xs"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{t.hero.ctaContact}</span>
              </a>

              <a
                href={language === 'es' ? '/docs/cv-sebas-taboada-es.pdf' : '/docs/cv-sebas-taboada-en.pdf'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>{t.hero.ctaResume}</span>
              </a>

              {/* Quick Social Icons */}
              <div className="flex items-center gap-2 pl-2 border-l border-zinc-200 dark:border-zinc-800">
                <a
                  href="https://github.com/Coriannder"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/sebastaboada"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
