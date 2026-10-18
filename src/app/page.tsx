'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-zinc-900 focus:text-white dark:focus:bg-zinc-100 dark:focus:text-zinc-950 focus:text-sm focus:font-semibold focus:shadow-lg"
      >
        {t.a11y.skipToContent}
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
