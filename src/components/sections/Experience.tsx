import React from 'react';
import type { Dictionary } from '@/types/content';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';
import { Briefcase, GraduationCap, CheckCircle2, Calendar, MapPin } from 'lucide-react';

export function Experience({ t }: { t: Dictionary }) {

  return (
    <section id="experience" className="py-20 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader
          icon={Briefcase}
          badge={t.experience.badge}
          title={t.experience.title}
          subtitle={t.experience.subtitle}
        />

        {/* Experience Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-zinc-200 dark:border-zinc-800 space-y-12">
          {t.experience.items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.06} className="relative group">
              {/* Dot indicator */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-zinc-950 border-2 border-accent group-hover:scale-125 transition-transform" />

              <div className="space-y-3">
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  <span className="flex items-center gap-1 text-accent font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </span>
                </div>

                {/* Role and Company */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    {item.role}
                  </h3>
                  <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
                    {item.company}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Accomplishments */}
                <ul className="space-y-1.5 pt-1">
                  {item.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 border border-zinc-200/80 dark:border-zinc-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Education Highlight Section */}
        <Reveal className="mt-16 pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              {t.experience.educationTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {t.experience.education.map((edu, eIdx) => (
              <div
                key={eIdx}
                className="rounded-2xl p-5 border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-zinc-900/40 shadow-2xs flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between text-[11px] font-mono text-zinc-400">
                    <span className="text-accent font-semibold">{edu.period}</span>
                    <span>{edu.location}</span>
                  </div>
                  <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                    {edu.degree}
                  </h4>
                  <p className="text-xs font-medium text-accent font-mono">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed pt-1">
                    {edu.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
