import Link from 'next/link';
import { lang } from 'next/root-params';
import { dictionary } from '@/data/dictionary';
import { ArrowLeft } from 'lucide-react';

export default async function NotFound() {
  const locale = (await lang()) === 'en' ? 'en' : 'es';
  const t = dictionary[locale];

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 pt-28 pb-16 text-center">
      <p className="font-mono text-7xl sm:text-8xl font-extrabold text-accent">404</p>
      <h1 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
        {t.notFound.title}
      </h1>
      <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-md">
        {t.notFound.description}
      </p>
      <Link
        href={`/${locale}`}
        className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 hover:opacity-90 transition-opacity shadow-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{t.notFound.backHome}</span>
      </Link>
    </div>
  );
}
