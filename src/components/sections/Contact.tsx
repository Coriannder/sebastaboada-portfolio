import React from 'react';
import type { Dictionary } from '@/types/content';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';
import { CopyEmailButton } from '@/components/ui/CopyEmailButton';
import {
  Mail,
  FileDown,
  MapPin,
  Globe2,
  MessageSquare,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

export function Contact({ t }: { t: Dictionary }) {
  const email = 'contacto@sebastaboada.com.ar';

  return (
    <section id="contact" className="py-20 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader
          icon={MessageSquare}
          badge={t.contact.badge}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Email Copy Action */}
          <Reveal className="p-6 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-zinc-900/40 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                {t.contact.emailTitle}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {t.contact.emailDescription}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/80 border border-zinc-200/80 dark:border-zinc-800">
                <span className="text-xs sm:text-sm font-mono text-zinc-800 dark:text-zinc-200 select-all truncate pr-2">
                  {email}
                </span>
                <CopyEmailButton
                  email={email}
                  copyLabel={t.contact.copyEmail}
                  copiedLabel={t.contact.copied}
                />
              </div>

              {/* Direct mailto link fallback */}
              <a
                href={`mailto:${email}`}
                className="block text-center text-xs text-accent hover:underline font-mono"
              >
                {t.contact.openMailClient}
              </a>
            </div>
          </Reveal>

          {/* Card 2: CV Downloads & Socials */}
          <Reveal delay={0.08} className="p-6 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-zinc-900/40 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                  {t.contact.resumeTitle}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  {t.contact.resumeDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href="/docs/cv-sebas-taboada-es.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-900/80 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors shadow-2xs"
                >
                  <FileDown className="w-4 h-4 text-accent" />
                  <span>{t.contact.downloadEs}</span>
                </a>
                <a
                  href="/docs/cv-sebas-taboada-en.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-900/80 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors shadow-2xs"
                >
                  <FileDown className="w-4 h-4 text-accent" />
                  <span>{t.contact.downloadEn}</span>
                </a>
              </div>
            </div>

            {/* Socials & Availability */}
            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  {t.contact.directSocials}
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/Coriannder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/sebastaboada"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 text-accent" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono text-zinc-400 dark:text-zinc-500 pt-1">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-zinc-400" />
                  <span>{t.contact.locationValue}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Globe2 className="w-3 h-3 text-accent" />
                  <span>{t.contact.availabilityValue}</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
