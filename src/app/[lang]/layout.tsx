import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { dictionary } from '@/data/dictionary';
import type { Language } from '@/types/content';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const LOCALES: Language[] = ['es', 'en'];
const SITE_URL = 'https://sebastaboada.com.ar';

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export const dynamicParams = false;

function toLocale(lang: string): Language {
  return lang === 'en' ? 'en' : 'es';
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = toLocale(lang);
  const t = dictionary[locale];
  const title = `${t.hero.name} — ${t.hero.title}`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description: t.meta.description,
    keywords: [
      'Sebastián Taboada',
      'Biomedical Engineer',
      'Full Stack Developer',
      'HealthTech',
      'TypeScript',
      'Node.js',
      'Next.js',
      'Model Context Protocol',
      'Software Engineer',
    ],
    authors: [{ name: 'Sebastián Taboada', url: SITE_URL }],
    creator: 'Sebastián Taboada',
    openGraph: {
      type: 'website',
      locale: locale === 'es' ? 'es_AR' : 'en_US',
      url: `${SITE_URL}/${locale}`,
      title,
      description: t.meta.description,
      siteName: 'Sebastián Taboada Portfolio',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: t.meta.description,
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        es: '/es',
        en: '/en',
        'x-default': '/es',
      },
    },
    icons: {
      icon: [
        { url: '/icon.svg', type: 'image/svg+xml' },
        { url: '/favicon.ico' },
      ],
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sebastián Taboada',
  url: SITE_URL,
  email: 'mailto:contacto@sebastaboada.com.ar',
  jobTitle: 'Biomedical Engineer & Full Stack Developer',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'San Miguel de Tucumán',
    addressCountry: 'AR',
  },
  sameAs: ['https://github.com/Coriannder', 'https://linkedin.com/in/sebastaboada'],
  knowsAbout: [
    'Full Stack Development',
    'TypeScript',
    'Node.js',
    'HealthTech',
    'Biomedical Engineering',
    'Model Context Protocol',
  ],
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const locale = toLocale(lang);

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 antialiased selection:bg-accent/20 selection:text-accent">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
