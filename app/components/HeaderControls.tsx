"use client";

import React from "react";
import { LanguageSelector } from "./LanguageSelector";
import { ThemeToggle } from "./ThemeToggle";

export function HeaderControls() {
  return (
    <header 
      role="banner"
      className="absolute top-[max(1rem,env(safe-area-inset-top))] right-[max(1rem,env(safe-area-inset-right))] sm:top-6 sm:right-6 flex items-center gap-2 z-50"
    >
      <LanguageSelector />
      <ThemeToggle />
    </header>
  );
}
