'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { 
  ArrowDown, 
  Mail, 
  FileDown, 
  Terminal, 
  Layers, 
  Cpu, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
  ExternalLink 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { Typewriter } from '@/components/ui/Typewriter';

export function Hero() {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'stack' | 'arch' | 'status'>('stack');

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Gradients & Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none -z-20" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] bg-accent/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          
          {/* Bento Item 1: Main Introduction & Title (8 cols on desktop) */}
          <div className="md:col-span-8 p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-md shadow-xs flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-4">
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-accent/10 text-accent border border-accent/20 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span>{t.hero.availableBadge}</span>
              </div>

              {/* Name & Dynamic Typewriter */}
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
                  {t.hero.name}
                </h1>
                <div className="mt-2.5 text-base sm:text-xl font-medium font-mono min-h-[1.75rem] flex items-center gap-2">
                  <span className="text-accent font-bold">&gt;</span>
                  <Typewriter
                    words={t.hero.roles || [t.hero.title]}
                    className="text-accent font-semibold"
                  />
                </div>
              </div>

              {/* Bio / Value Prop */}
              <p className="text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-300 max-w-2xl pt-1">
                {t.hero.subtitle}
              </p>
            </div>

            {/* CTAs & Socials */}
            <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 hover:opacity-90 transition-all shadow-sm active:scale-[0.98]"
              >
                <span>{t.hero.ctaProjects}</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800/60 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-2xs"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{t.hero.ctaContact}</span>
              </a>

              <a
                href={language === 'es' ? '/docs/cv-sebas-taboada-es.pdf' : '/docs/cv-sebas-taboada-en.pdf'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 text-xs sm:text-sm font-medium rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>{t.hero.ctaResume}</span>
              </a>

              <div className="flex items-center gap-1.5 ml-auto pl-2">
                <a
                  href="https://github.com/Coriannder"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/sebastaboada"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Bento Item 2: Visual Card (Photo & Bioengineering Edge - 4 cols on desktop) */}
          <div className="md:col-span-4 p-6 rounded-2xl bg-white/80 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-md shadow-xs flex flex-col items-center justify-between text-center relative overflow-hidden group">
            {/* Subtle card glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl -z-10 group-hover:bg-accent/20 transition-all" />

            <div className="relative mt-2">
              {/* Photo with clean minimal frame */}
              <div className="w-36 h-36 sm:w-44 sm:h-44 shrink-0 rounded-2xl overflow-hidden relative shadow-sm border border-zinc-200/80 dark:border-zinc-800 transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src="/images/profile.jpg"
                  alt="Sebastián Taboada"
                  fill
                  sizes="(max-width: 768px) 160px, 192px"
                  priority
                  className="object-cover object-[50%_5%] scale-110 origin-top"
                />
              </div>
            </div>

            {/* Quick meta badges */}
            <div className="w-full space-y-2 mt-5">
              <div className="flex items-center justify-center gap-2 text-xs text-zinc-600 dark:text-zinc-400 font-mono">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span>Tucumán, Argentina (UTC-3)</span>
              </div>
              <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/60 dark:border-zinc-700/50 text-left">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                  <Sparkles className="w-3.5 h-3.5 text-accent" />
                  <span>{language === 'es' ? 'Foco Diferencial' : 'Key Differentiator'}</span>
                </div>
                <p className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-1 leading-snug">
                  {language === 'es'
                    ? 'Bioingeniería aplicada al software: rigor metódico en datos, estándares y arquitecturas críticas.'
                    : 'Bioengineering applied to software: methodological rigor in data, standards & critical architectures.'}
                </p>
              </div>
            </div>
          </div>

          {/* Bento Item 3: Interactive Developer Terminal (7 cols on desktop) */}
          <div className="md:col-span-7 rounded-2xl bg-zinc-950 text-zinc-100 border border-zinc-800 shadow-md overflow-hidden flex flex-col">
            {/* Terminal Window Header */}
            <div className="px-4 py-2.5 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-zinc-700 inline-block" />
                <span className="w-3 h-3 rounded-full bg-zinc-700 inline-block" />
                <span className="w-3 h-3 rounded-full bg-zinc-700 inline-block" />
                <span className="text-xs font-mono text-zinc-400 ml-2 hidden sm:inline">sebas@fullstack-box:~</span>
              </div>
              {/* Tabs */}
              <div className="flex items-center gap-1">
                {(['stack', 'arch', 'status'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors ${
                      activeTab === tab
                        ? 'bg-zinc-800 text-accent font-semibold'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                    }`}
                  >
                    {tab === 'stack' ? 'stack.ts' : tab === 'arch' ? 'arch.md' : 'status.json'}
                  </button>
                ))}
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto min-h-[170px] flex items-center">
              {activeTab === 'stack' && (
                <div className="space-y-1 text-zinc-300">
                  <p className="text-zinc-500">// Modern Full Stack capabilities</p>
                  <p>
                    <span className="text-accent">const</span> <span className="text-zinc-100">stack</span> = &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-zinc-400">frontend:</span> [<span className="text-zinc-200">&quot;React 19&quot;</span>, <span className="text-zinc-200">&quot;Next.js 15&quot;</span>, <span className="text-zinc-200">&quot;Tailwind CSS&quot;</span>],
                  </p>
                  <p className="pl-4">
                    <span className="text-zinc-400">backend:</span> [<span className="text-zinc-200">&quot;Node.js&quot;</span>, <span className="text-zinc-200">&quot;Express&quot;</span>, <span className="text-zinc-200">&quot;MySQL&quot;</span>, <span className="text-zinc-200">&quot;MongoDB&quot;</span>],
                  </p>
                  <p className="pl-4">
                    <span className="text-zinc-400">ai_agents:</span> [<span className="text-accent">&quot;Model Context Protocol (MCP)&quot;</span>, <span className="text-accent">&quot;Automations&quot;</span>]
                  </p>
                  <p>&#125;;</p>
                </div>
              )}

              {activeTab === 'arch' && (
                <div className="space-y-1.5 text-zinc-300">
                  <p className="text-accent font-semibold">## Engineering Principles</p>
                  <p className="flex items-center gap-2">
                    <span className="text-accent">✔</span>
                    <span>Clean Architecture (3 Layers: Controller, Service, Repository)</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-accent">✔</span>
                    <span>Strict Type-Safety with TypeScript & Zod validation</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-accent">✔</span>
                    <span>Medical-grade quality assurance & Automated Testing</span>
                  </p>
                </div>
              )}

              {activeTab === 'status' && (
                <div className="space-y-1 text-zinc-300">
                  <p>&#123;</p>
                  <p className="pl-4">
                    <span className="text-zinc-400">&quot;role&quot;</span>: <span className="text-accent">&quot;Full Stack Developer / HealthTech&quot;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-zinc-400">&quot;availability&quot;</span>: <span className="text-accent">&quot;Immediate / Full-time Remote&quot;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-zinc-400">&quot;languages&quot;</span>: [<span className="text-zinc-200">&quot;Spanish (Native)&quot;</span>, <span className="text-zinc-200">&quot;English (B2/C1 Technical)&quot;</span>]
                  </p>
                  <p>&#125;</p>
                </div>
              )}
            </div>
          </div>

          {/* Bento Item 4: Quick Stack & Strengths (5 cols on desktop) */}
          <div className="md:col-span-5 p-5 sm:p-6 rounded-2xl bg-white/80 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-md shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-3">
                <Layers className="w-3.5 h-3.5 text-accent" />
                <span>{language === 'es' ? 'Stack en Producción' : 'Production Stack'}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'React & Next.js',
                  'TypeScript',
                  'Tailwind CSS',
                  'Node.js & Express',
                  'Clean Architecture',
                  'MySQL / MariaDB',
                  'Docker',
                  'MCP & AI Agents',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/70 dark:border-zinc-700/60 transition-colors hover:border-accent hover:text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-400 font-mono">
              <span className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-accent" />
                <span>APIs & Frontends</span>
              </span>
              <a 
                href="#skills" 
                className="text-accent hover:underline inline-flex items-center gap-1"
              >
                <span>{language === 'es' ? 'Ver todo el stack' : 'View all stack'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

