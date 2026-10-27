"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { TbLanguage } from "react-icons/tb";
import { useLanguage } from "../context/LanguageContext";
import { LANGUAGES, LanguageCode } from "../i18n/languages";

const emptySubscribe = () => () => {};

export function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const [liveAnnouncement, setLiveAnnouncement] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const openMenu = useCallback(() => {
    const activeIdx = LANGUAGES.findIndex((item) => item.code === language);
    setFocusedIndex(activeIdx >= 0 ? activeIdx : 0);
    setIsOpen(true);
  }, [language]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setFocusedIndex(-1);
  }, []);

  const toggleMenu = useCallback(() => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }, [isOpen, closeMenu, openMenu]);

  // Focus the active option element when focusedIndex changes while open
  useEffect(() => {
    if (isOpen && focusedIndex >= 0 && optionRefs.current[focusedIndex]) {
      optionRefs.current[focusedIndex]?.focus();
    }
  }, [isOpen, focusedIndex]);

  const handleSelect = useCallback((code: LanguageCode) => {
    setLanguage(code);
    closeMenu();
    const selectedItem = LANGUAGES.find((item) => item.code === code);
    if (selectedItem) {
      setLiveAnnouncement(`Language changed to ${selectedItem.label}`);
    }
    // Return focus to trigger button (Rule 9: Manage focus)
    triggerRef.current?.focus();
  }, [setLanguage, closeMenu]);

  // Handle outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeMenu]);

  // Keyboard navigation for WAI-ARIA Listbox Pattern (Rules 7, 8, 9)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openMenu();
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setFocusedIndex((prev) => (prev + 1) % LANGUAGES.length);
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedIndex((prev) => (prev - 1 + LANGUAGES.length) % LANGUAGES.length);
        break;
      case "Home":
        e.preventDefault();
        setFocusedIndex(0);
        break;
      case "End":
        e.preventDefault();
        setFocusedIndex(LANGUAGES.length - 1);
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (focusedIndex >= 0 && focusedIndex < LANGUAGES.length) {
          handleSelect(LANGUAGES[focusedIndex].code);
        }
        break;
      case "Escape":
        e.preventDefault();
        closeMenu();
        triggerRef.current?.focus();
        break;
      case "Tab":
        closeMenu();
        break;
    }
  };

  if (!mounted) {
    return (
      <div 
        aria-hidden="true"
        className="h-11 w-11 sm:h-9 sm:w-9 rounded-full border border-zinc-200 bg-white/50 dark:border-zinc-800 dark:bg-zinc-950/50"
      />
    );
  }

  return (
    <div 
      ref={containerRef} 
      className="relative inline-block text-left"
      onKeyDown={handleKeyDown}
    >
      {/* Rule 34: Polite live region for screen-reader status announcements */}
      <div 
        role="status" 
        aria-live="polite" 
        className="sr-only"
      >
        {liveAnnouncement}
      </div>

      {/* Trigger Button with Language Icon */}
      <button
        ref={triggerRef}
        type="button"
        onClick={toggleMenu}
        aria-label={t.nav.selectLanguage}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls="language-listbox"
        title={t.nav.selectLanguage}
        className={`flex h-11 w-11 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition-[transform,colors,box-shadow] duration-200 hover:text-emerald-500 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:text-emerald-400 shadow-sm cursor-pointer ${
          isOpen ? "border-emerald-500 text-emerald-500 ring-2 ring-emerald-500/20" : ""
        }`}
      >
        <TbLanguage className="h-5 w-5 transition-transform duration-200" aria-hidden="true" />
      </button>

      {/* Floating Vertical Disconnected Pills (Centered under trigger) */}
      {isOpen && (
        <div 
          id="language-listbox"
          role="listbox"
          tabIndex={-1}
          aria-label={t.nav.selectLanguage}
          aria-activedescendant={focusedIndex >= 0 ? `lang-opt-${LANGUAGES[focusedIndex].code}` : undefined}
          className="absolute right-0 sm:left-1/2 sm:-translate-x-1/2 top-full mt-2 flex flex-col items-end sm:items-center gap-1.5 z-50 focus:outline-none"
        >
          {LANGUAGES.map((item, index) => {
            const isSelected = item.code === language;
            const isFocused = index === focusedIndex;

            return (
              <button
                key={item.code}
                id={`lang-opt-${item.code}`}
                ref={(el) => {
                  optionRefs.current[index] = el;
                }}
                role="option"
                aria-selected={isSelected}
                tabIndex={isFocused ? 0 : -1}
                onClick={() => handleSelect(item.code)}
                className={`group relative inline-flex items-center justify-center gap-1.5 rounded-full px-3.5 py-1.5 min-h-[38px] text-xs font-medium cursor-pointer touch-manipulation whitespace-nowrap transition-[transform,colors,box-shadow,border-color] duration-150 ease-out hover:scale-105 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 border backdrop-blur-md ${
                  isSelected
                    ? "border-emerald-500 bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-semibold shadow-md shadow-emerald-500/10 ring-1 ring-emerald-500/30"
                    : "border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 text-zinc-700 dark:text-zinc-300 shadow-sm hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400"
                } ${isFocused && !isSelected ? "ring-2 ring-emerald-500/40 border-emerald-500/50" : ""}`}
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
      )}
    </div>
  );
}
