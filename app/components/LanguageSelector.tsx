"use client";

import React, { useState, useRef, useEffect } from "react";
import { TbLanguage } from "react-icons/tb";
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

  // Close when clicking outside or pressing Escape
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
        className={`flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition-[transform,colors,box-shadow] duration-200 hover:text-emerald-500 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:text-emerald-400 shadow-sm ${
          isOpen ? "border-emerald-500 text-emerald-500 ring-2 ring-emerald-500/20" : ""
        }`}
      >
        <TbLanguage className="h-5 w-5 transition-transform duration-200" aria-hidden="true" />
      </button>

      {/* Floating Disconnected Pills Popover */}
      {isOpen && (
        <div 
          role="listbox"
          aria-label={t.nav.selectLanguage}
          className="absolute right-0 top-full mt-2 w-[270px] sm:w-[310px] rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md p-3 shadow-2xl z-50 focus:outline-none transition-[opacity,transform] duration-200 ease-out"
        >
          {/* Subtle Header */}
          <div className="flex items-center justify-between px-1 pb-2 mb-2 border-b border-zinc-100 dark:border-zinc-800/80">
            <span className="text-[11px] font-semibold tracking-wider text-zinc-400 dark:text-zinc-500 uppercase">
              {t.nav.selectLanguage}
            </span>
            <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
              11
            </span>
          </div>

          {/* Floating Disconnected Pills Wrap */}
          <div className="flex flex-wrap gap-2 pt-0.5">
            {LANGUAGES.map((item) => {
              const isSelected = item.code === language;
              return (
                <button
                  key={item.code}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(item.code)}
                  className={`group relative inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium cursor-pointer touch-manipulation transition-[transform,colors,box-shadow,border-color] duration-200 ease-out hover:scale-105 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 border ${
                    isSelected
                      ? "border-emerald-500 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-semibold shadow-xs shadow-emerald-500/20 ring-1 ring-emerald-500/30"
                      : "border-zinc-200 dark:border-zinc-800 bg-zinc-50/90 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 shadow-xs hover:border-emerald-500/50 hover:bg-emerald-500/5 hover:text-emerald-600 dark:hover:text-emerald-400"
                  }`}
                >
                  {/* Active Indicator Pulse Dot */}
                  {isSelected && (
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    </span>
                  )}
                  <span translate="no" className="tracking-tight">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
