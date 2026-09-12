'use client';

import React, { createContext, useContext, useSyncExternalStore } from 'react';
import { Language, Dictionary } from '@/types/content';
import { dictionary } from '@/data/dictionary';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_CHANGE_EVENT = 'portfolio_language_change';

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener(LANGUAGE_CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener(LANGUAGE_CHANGE_EVENT, callback);
  };
}

function getSnapshot(): Language {
  if (typeof window === 'undefined') return 'es';
  const saved = localStorage.getItem('portfolio_lang') as Language;
  return saved === 'es' || saved === 'en' ? saved : 'es';
}

function getServerSnapshot(): Language {
  return 'es';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLanguage = (lang: Language) => {
    localStorage.setItem('portfolio_lang', lang);
    window.dispatchEvent(new Event(LANGUAGE_CHANGE_EVENT));
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: dictionary[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
