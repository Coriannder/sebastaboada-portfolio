'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="flex-1">
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
