"use client";

import React from "react";
import { LanguageSelector } from "./LanguageSelector";
import { ThemeToggle } from "./ThemeToggle";

export function HeaderControls() {
  return (
    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2 z-50">
      <LanguageSelector />
      <ThemeToggle />
    </div>
  );
}
