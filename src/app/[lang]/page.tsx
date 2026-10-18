import { notFound } from 'next/navigation';
import { dictionary } from '@/data/dictionary';
import type { Language } from '@/types/content';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (lang !== 'es' && lang !== 'en') notFound();

  const locale: Language = lang;
  const t = dictionary[locale];

  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-zinc-900 focus:text-white dark:focus:bg-zinc-100 dark:focus:text-zinc-950 focus:text-sm focus:font-semibold focus:shadow-lg"
      >
        {t.a11y.skipToContent}
      </a>
      <Navbar lang={locale} nav={t.nav} a11y={t.a11y} />
      <main id="main" className="flex-1">
        <Hero lang={locale} t={t} />
        <Skills t={t} />
        <Projects t={t} />
        <Experience t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
