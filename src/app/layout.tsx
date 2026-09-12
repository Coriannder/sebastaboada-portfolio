import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { LanguageProvider } from '@/context/LanguageContext';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sebastián Taboada — Biomedical Engineer & Full Stack Developer',
  description:
    'Portfolio profesional de Sebastián Taboada. Especialista en HealthTech, arquitecturas limpias de backend con TypeScript/Node/MySQL, y agentes de IA con Model Context Protocol (MCP).',
  keywords: [
    'Sebastián Taboada',
    'Biomedical Engineer',
    'Full Stack Developer',
    'HealthTech',
    'TypeScript',
    'Node.js',
    'Next.js 15',
    'Model Context Protocol',
    'MCP',
    'Software Engineer',
  ],
  authors: [{ name: 'Sebastián Taboada', url: 'https://sebastaboada.com.ar' }],
  creator: 'Sebastián Taboada',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://sebastaboada.com.ar',
    title: 'Sebastián Taboada — Biomedical Engineer & Full Stack Developer',
    description:
      'Especialista en HealthTech, arquitecturas limpias de backend con TypeScript/Node/MySQL y agentes autónomos de IA.',
    siteName: 'Sebastián Taboada Portfolio',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 antialiased selection:bg-accent/20 selection:text-accent">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
