'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import {
  Server,
  Database,
  Cpu,
  Layout,
  Activity,
  CheckCircle2,
  Layers,
} from 'lucide-react';

const categoryIcons = [
  Server,    // Backend
  Database,  // Databases
  Cpu,       // AI & Infrastructure
  Layout,    // Frontend
  Activity,  // HealthTech
];

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 mb-3 border border-zinc-200 dark:border-zinc-700">
            <Layers className="w-3.5 h-3.5 text-sky-500" />
            <span>{t.skills.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {t.skills.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.skills.categories.map((cat, idx) => {
            const Icon = categoryIcons[idx] || Server;
            return (
              <div
                key={cat.title}
                className={`relative rounded-xl p-6 border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-zinc-900/40 backdrop-blur-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200 shadow-2xs hover:shadow-xs flex flex-col justify-between ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-sky-50 dark:bg-sky-950/60 border border-sky-200/70 dark:border-sky-800/60 flex items-center justify-center text-sky-600 dark:text-sky-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                        {cat.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 leading-relaxed">
                    {cat.description}
                  </p>

                  <ul className="space-y-2">
                    {cat.skills.map((skill) => (
                      <li key={skill} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
                  <span>0{idx + 1} / 05</span>
                  <span>PRODUCTION READY</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
