"use client";

import React, { createContext, useContext, useSyncExternalStore, useCallback, useEffect } from "react";
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
  window.addEventListener("popstate", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CUSTOM_EVENT, callback);
    window.removeEventListener("popstate", callback);
  };
}

function getSnapshot(): LanguageCode {
  if (typeof window === "undefined") {
    return "en";
  }

  try {
    // 1. Check URL search param ?lang= (Rule 17: URL as state, Rule 30: Deep link)
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang") as LanguageCode | null;
    if (urlLang && urlLang in translations) {
      return urlLang;
    }

    // 2. Check localStorage
    const saved = localStorage.getItem(STORAGE_KEY) as LanguageCode | null;
    if (saved && saved in translations) {
      return saved;
    }

    // 3. Fallback to browser navigator languages (Rule 75: Prefer language settings over location)
    if (navigator.languages && navigator.languages.length > 0) {
      for (const userLang of navigator.languages) {
        const primary = userLang.toLowerCase().split("-")[0] as LanguageCode;
        if (primary in translations) {
          return primary;
        }
      }
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

      // Persist state in URL without full reload (Rule 17 & 30)
      const url = new URL(window.location.href);
      if (lang === "en") {
        url.searchParams.delete("lang");
      } else {
        url.searchParams.set("lang", lang);
      }
      window.history.replaceState({}, "", url.toString());

      window.dispatchEvent(new Event(CUSTOM_EVENT));
    } catch {
      // ignore
    }
  }, []);

  // Sync document html lang on initial client mount
  useEffect(() => {
    if (language) {
      document.documentElement.lang = language;
    }
  }, [language]);

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
