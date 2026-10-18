'use client';

import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import { Sun, Moon, Globe, Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import type { Dictionary, Language } from '@/types/content';

interface NavbarProps {
  lang: Language;
  t: Dictionary;
}

const SECTION_IDS = ['skills', 'projects', 'experience', 'contact'] as const;

export function Navbar({ lang, t }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstDrawerLinkRef = useRef<HTMLAnchorElement>(null);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch {}
  };

  // React resets attributes it manages on <html> when the [lang] layout
  // re-renders on locale navigation (and on Strict Mode remounts in dev),
  // which would drop the `dark` class set by the inline script. Re-apply
  // the persisted theme before paint.
  useLayoutEffect(() => {
    const isDark = (() => {
      try {
        return localStorage.getItem('theme') !== 'light';
      } catch {
        return true;
      }
    })();
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
  }, [lang]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scrollspy: highlight the nav link of the section in view
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-25% 0px -65% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Focus management + Escape for the mobile drawer
  useEffect(() => {
    if (!mobileMenuOpen) return;
    firstDrawerLinkRef.current?.focus();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const otherLang: Language = lang === 'es' ? 'en' : 'es';

  const persistLangCookie = () => {
    document.cookie = `portfolio_lang=${otherLang};path=/;max-age=31536000;samesite=lax`;
  };

  const navLinks = [
    { href: '#skills', label: t.nav.skills },
    { href: '#projects', label: t.nav.projects },
    { href: '#experience', label: t.nav.experience },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          className="group flex items-center gap-2 text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 hover:opacity-80 transition-opacity"
        >
          <span className="w-7 h-7 rounded-md bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 flex items-center justify-center font-mono font-bold text-xs shadow-xs group-hover:scale-105 transition-transform">
            ST
          </span>
          <span className="hidden sm:inline-block font-mono text-xs text-zinc-500 dark:text-zinc-400">
            sebastaboada.com.ar
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={activeSection === link.href ? 'true' : undefined}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeSection === link.href
                  ? 'text-accent bg-accent/10'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 hover:bg-zinc-100/80 dark:hover:bg-zinc-800/50'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls (Lang, Theme, Resume) */}
        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          <Link
            href={`/${otherLang}`}
            onClick={persistLangCookie}
            className="flex items-center gap-1 px-2 py-1 text-xs font-mono font-medium rounded-md border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
            aria-label={t.a11y.toggleLanguage}
            title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="uppercase">{lang}</span>
          </Link>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-1.5 rounded-md border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
            aria-label={t.a11y.toggleTheme}
          >
            <Sun className="w-3.5 h-3.5 text-amber-400 hidden dark:block" />
            <Moon className="w-3.5 h-3.5 text-zinc-600 dark:hidden" />
          </button>

          {/* CV Button */}
          <a
            href={lang === 'es' ? '/docs/cv-sebas-taboada-es.pdf' : '/docs/cv-sebas-taboada-en.pdf'}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 hover:opacity-90 transition-opacity shadow-xs"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{t.nav.resume}</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            ref={menuButtonRef}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors cursor-pointer flex items-center justify-center min-w-[38px] min-h-[38px]"
            aria-label={mobileMenuOpen ? t.a11y.closeMenu : t.a11y.openMenu}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-nav" className="md:hidden bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800 px-4 py-4 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                ref={i === 0 ? firstDrawerLinkRef : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === link.href
                    ? 'text-accent bg-accent/10'
                    : 'text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-zinc-200/70 dark:border-zinc-800/70">
            <a
              href={lang === 'es' ? '/docs/cv-sebas-taboada-es.pdf' : '/docs/cv-sebas-taboada-en.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-3 py-2.5 text-sm font-medium rounded-xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 shadow-xs active:scale-[0.99] transition-transform"
            >
              <FileText className="w-4 h-4" />
              <span>{t.nav.resume}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
