"use client";

import React, { useState, useRef, useEffect } from "react";
import { TbLanguage } from "react-icons/tb";
import { FiCheck } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import { LANGUAGES, LanguageCode } from "../i18n/languages";

const emptySubscribe = () => () => {};

export function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!mounted) {
    return (
      <div 
        aria-hidden="true"
        className="h-9 w-9 rounded-full border border-zinc-200 bg-white/50 dark:border-zinc-800 dark:bg-zinc-950/50"
      />
    );
  }

  const handleSelect = (code: LanguageCode) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative inline-block text-left">
      {/* Trigger Button with Language Icon */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={t.nav.selectLanguage}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        title={t.nav.selectLanguage}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition-colors hover:text-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:text-emerald-400 shadow-sm"
      >
        <TbLanguage className="h-5 w-5" aria-hidden="true" />
      </button>

      {/* Language Dropdown Menu */}
      {isOpen && (
        <div 
          role="listbox"
          aria-label={t.nav.selectLanguage}
          className="absolute right-0 top-full mt-2 w-64 max-h-[75vh] overflow-y-auto rounded-none border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-1.5 shadow-2xl z-50 focus:outline-none"
        >
          <div className="px-3 py-2 text-[11px] font-semibold tracking-wider text-zinc-400 dark:text-zinc-500 uppercase border-b border-zinc-100 dark:border-zinc-800/80 mb-1">
            {t.nav.selectLanguage}
          </div>
          <div className="flex flex-col gap-0.5">
            {LANGUAGES.map((item) => {
              const isSelected = item.code === language;
              return (
                <button
                  key={item.code}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(item.code)}
                  className={`flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-xs transition-colors rounded-none ${
                    isSelected
                      ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold"
                      : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-white"
                  } focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500`}
                >
                  <div className="flex flex-col">
                    <span className="font-medium">{item.label}</span>
                    <span className="text-[11px] text-zinc-400 dark:text-zinc-500">
                      {item.nativeName}
                    </span>
                  </div>
                  {isSelected && (
                    <FiCheck className="h-4 w-4 text-emerald-500 shrink-0" aria-hidden="true" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
