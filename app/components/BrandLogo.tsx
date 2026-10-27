"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FiDownload, FiCopy, FiCheck, FiExternalLink } from "react-icons/fi";

type BrandLogoProps = {
  className?: string;
  size?: number;
  priority?: boolean;
};

export function BrandLogo({ className = "", size = 64, priority = false }: BrandLogoProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [menuPos, setMenuPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close context menu on outside click or Escape
  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    }

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleOutside);
      document.addEventListener("keydown", handleKey);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, [menuOpen]);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      setMenuPos({
        x: Math.min(e.clientX - rect.left, 20),
        y: e.clientY - rect.top,
      });
    }
    setMenuOpen(true);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText("https://nathenaeltamirat.dev");
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setMenuOpen(false);
      }, 1200);
    } catch {
      // ignore
    }
  };

  return (
    <div ref={containerRef} className="relative inline-block select-none">
      <div
        onContextMenu={handleContextMenu}
        title="Nathenael Tamirat emblem (Right-click for brand assets)"
        aria-label="Nathenael Tamirat emblem. Right-click to access brand assets."
        className={`relative shrink-0 overflow-hidden rounded-full border border-zinc-200 dark:border-white/10 shadow-sm cursor-context-menu transition-[transform,border-color] duration-200 hover:scale-105 hover:border-emerald-500/50 ${className}`}
        style={{ width: size, height: size }}
      >
        <Image
          src="/logo.jpeg"
          alt="Nathenael Tamirat emblem logo"
          fill
          sizes={`${size}px`}
          priority={priority}
          className="object-cover"
        />
      </div>

      {/* Rule 82: Brand resources context menu on right-click */}
      {menuOpen && (
        <div
          ref={menuRef}
          role="menu"
          aria-label="Brand resources and assets"
          style={{ top: `${menuPos.y + 8}px`, left: `${menuPos.x}px` }}
          className="absolute z-50 min-w-[210px] rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 p-1.5 shadow-xl backdrop-blur-md text-xs animate-in fade-in zoom-in-95 duration-150 focus:outline-none"
        >
          <div className="px-2.5 py-1.5 text-[10px] font-semibold tracking-wider uppercase text-zinc-500 dark:text-zinc-400 border-b border-zinc-100 dark:border-zinc-800/80 mb-1">
            Brand Assets
          </div>

          <a
            role="menuitem"
            href="/logo.png"
            download="Nathenael-Tamirat-Logo.png"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2.5 rounded-md px-2.5 py-2 text-zinc-700 dark:text-zinc-200 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 transition-[background-color,color] duration-150 cursor-pointer min-h-[36px]"
          >
            <FiDownload size={14} className="shrink-0" />
            <span>Download Logo (PNG)</span>
          </a>

          <a
            role="menuitem"
            href="/logo.jpeg"
            download="Nathenael-Tamirat-Emblem.jpeg"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2.5 rounded-md px-2.5 py-2 text-zinc-700 dark:text-zinc-200 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 transition-[background-color,color] duration-150 cursor-pointer min-h-[36px]"
          >
            <FiDownload size={14} className="shrink-0" />
            <span>Download Emblem (JPEG)</span>
          </a>

          <a
            role="menuitem"
            href="/Nathenael.jpeg"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2.5 rounded-md px-2.5 py-2 text-zinc-700 dark:text-zinc-200 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 transition-[background-color,color] duration-150 cursor-pointer min-h-[36px]"
          >
            <FiExternalLink size={14} className="shrink-0" />
            <span>View Portrait Photo</span>
          </a>

          <button
            type="button"
            role="menuitem"
            onClick={handleCopyLink}
            className="w-full flex items-center gap-2.5 rounded-md px-2.5 py-2 text-zinc-700 dark:text-zinc-200 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 transition-[background-color,color] duration-150 cursor-pointer min-h-[36px]"
          >
            {copied ? (
              <>
                <FiCheck size={14} className="shrink-0 text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">Link Copied!</span>
              </>
            ) : (
              <>
                <FiCopy size={14} className="shrink-0" />
                <span>Copy Portfolio URL</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
