"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

const emptySubscribe = () => () => {};

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div 
        aria-hidden="true"
        className={className || "flex h-11 w-11 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-zinc-200 bg-white/50 dark:border-zinc-800 dark:bg-zinc-950/50"}
      />
    );
  }

  const currentTheme = resolvedTheme || theme;
  const isDark = currentTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      className={
        className ||
        "flex h-11 w-11 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 hover:text-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 transition-colors dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:text-emerald-400 shadow-sm"
      }
    >
      {isDark ? (
        <FiSun className="h-5 w-5 rotate-0 scale-100 transition-transform duration-200" />
      ) : (
        <FiMoon className="h-5 w-5 rotate-0 scale-100 transition-transform duration-200" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
