"use client";

import React, { createContext, useContext, useSyncExternalStore, useCallback } from "react";
import { LanguageCode } from "../i18n/languages";
import { translations, TranslationSchema } from "../i18n/translations";

type LanguageContextType = {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: TranslationSchema;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "portfolio_preferred_language";
const CUSTOM_EVENT = "portfolio_language_change";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CUSTOM_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CUSTOM_EVENT, callback);
  };
}

function getSnapshot(): LanguageCode {
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as LanguageCode | null;
    if (saved && saved in translations) {
      return saved;
    }
  } catch {
    // ignore
  }
  return "en";
}

function getServerSnapshot(): LanguageCode {
  return "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLanguage = useCallback((lang: LanguageCode) => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
      window.dispatchEvent(new Event(CUSTOM_EVENT));
    } catch {
      // ignore
    }
  }, []);

  const t = translations[language] || translations.en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
