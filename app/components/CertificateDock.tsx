"use client";

import { useCallback, useRef, useState } from "react";
import { FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";

type Certificate = {
  title: string;
  subtitle: string;
  preview: string;
  link: string;
};

const certificates: Certificate[] = [
  {
    title: "Android Developer Fundamentals",
    subtitle: "Udacity",
    preview: "/certificates/udacity-android.png",
    link: "https://www.udacity.com/certificate/e/284fd838-0d6e-11f0-b8d4-3bb125f78943",
  },
  {
    title: "Artificial Intelligence",
    subtitle: "Udacity",
    preview: "/certificates/udacity-ai.png",
    link: "https://www.udacity.com/certificate/e/6c3de1ca-12d7-11f0-b448-43b9926fad29",
  },
  {
    title: "Data Analysis Fundamentals",
    subtitle: "Udacity",
    preview: "/certificates/udacity-data-analyst.png",
    link: "https://www.udacity.com/certificate/e/546eec08-1c80-11f0-9ff0-7f21adfdda5b",
  },
  {
    title: "Programming Fundamentals",
    subtitle: "Udacity",
    preview: "/certificates/udacity-tech-scholarship.png",
    link: "/certificates/udacity-tech-scholarship.pdf",
  },
  {
    title: "Code in Place",
    subtitle: "Stanford",
    preview: "/certificates/stanford-code-in-place.png",
    link: "/certificates/stanford-code-in-place.pdf",
  },
  {
    title: "ALX - Professional Foundation",
    subtitle: "ALX",
    preview: "/certificates/alx-professional-foundations.png",
    link: "https://savanna.alxafrica.com/certificates/7pLMPxrseN",
  },
];

const MAX_SCALE = 1.35;
const INFLUENCE = 240;
const VISIBLE = 2;

export default function CertificateDock() {
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [scales, setScales] = useState<number[]>(certificates.map(() => 1));
  const [active, setActive] = useState<number | null>(null);
  const [start, setStart] = useState(0);
  const [page, setPage] = useState(0);

  const handleMouseMove = useCallback((x: number) => {
    setScales(
      certificates.map((_, i) => {
        const el = cardRefs.current[i];
        if (!el) return 1;
        const r = el.getBoundingClientRect();
        const center = r.left + r.width / 2;
        const dist = Math.abs(x - center);
        if (dist > INFLUENCE) return 1;
        const t = 1 - dist / INFLUENCE;
        const eased = 1 - Math.pow(1 - t, 5);
        return 1 + (MAX_SCALE - 1) * eased;
      })
    );
  }, []);

  const go = (dir: 1 | -1) => {
    const n = certificates.length;
    setStart((s) => (s + dir + n) % n);
  };

  const step = () => setPage((p) => p + 1);

  return (
    <div
      className="relative w-full"
      onMouseMove={(e) => handleMouseMove(e.clientX)}
      onMouseLeave={() => {
        setScales(certificates.map(() => 1));
        setActive(null);
      }}
    >
      <div
        className="no-scrollbar flex items-stretch justify-center gap-6 px-14 py-2"
        key={page}
        style={{ animation: "none" }}
      >
        {Array.from({ length: VISIBLE }, (_, k) => {
          const idx = (start + k) % certificates.length;
          const cert = certificates[idx];
          const scale = scales[idx];
          const isActive = active === idx;
          return (
            <a
              key={idx + "-" + k}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              onMouseEnter={() => setActive(idx)}
              onMouseLeave={() => setActive(null)}
              className="group relative flex w-[calc(50%-12px)] shrink-0 snap-center flex-col items-center"
              style={{
                opacity: active !== null && !isActive ? 0.35 : 1,
                filter: active !== null && !isActive ? "brightness(0.7)" : "brightness(1)",
                transition: "opacity 200ms ease, filter 200ms ease",
              }}
            >
              <div
                className="relative z-10 w-full"
                style={{
                  transform: `scale(${scale})`,
                  transformOrigin: "top center",
                  transition: "transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                  zIndex: isActive ? 30 : 10,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cert.preview}
                  alt={cert.title}
                  className="w-full rounded-lg border border-zinc-200 object-cover shadow-md transition-shadow duration-300 group-hover:shadow-xl dark:border-zinc-700"
                />
              </div>
              <div className="pointer-events-none relative z-0 mt-3 flex flex-col items-center gap-1.5">
                <span className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
                  {cert.title}
                </span>
                <span className="flex items-center gap-1 text-lg font-medium text-emerald-600 dark:text-emerald-400">
                  {cert.subtitle} <FiExternalLink size={18} />
                </span>
              </div>
            </a>
          );
        })}
      </div>

      {/* Infinite-loop carousel controls */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => {
            go(-1);
            step();
          }}
          className="flex items-center rounded-full border border-emerald-500/30 bg-emerald-100/70 px-5 py-2.5 text-sm font-semibold text-emerald-700 shadow-sm backdrop-blur transition-all hover:scale-105 hover:bg-emerald-100 active:scale-95 dark:bg-emerald-500/15 dark:text-emerald-300 dark:hover:bg-emerald-500/25"
        >
          <FiChevronLeft size={20} />
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={() => {
            go(1);
            step();
          }}
          className="flex items-center rounded-full border border-emerald-500/30 bg-emerald-100/70 px-5 py-2.5 text-sm font-semibold text-emerald-700 shadow-sm backdrop-blur transition-all hover:scale-105 hover:bg-emerald-100 active:scale-95 dark:bg-emerald-500/15 dark:text-emerald-300 dark:hover:bg-emerald-500/25"
        >
          <FiChevronRight size={20} />
        </button>
      </div>

      {/* Large full-certificate overlay on hover */}
      {active !== null && certificates[active] ? (
        <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="relative max-h-full max-w-3xl overflow-hidden rounded-xl border border-zinc-200 bg-white/95 p-3 shadow-2xl backdrop-blur-xl dark:border-zinc-700 dark:bg-zinc-900/95">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={certificates[active].preview}
              alt={certificates[active].title}
              className="max-h-[70vh] w-auto rounded-lg object-contain shadow-md"
            />
            <div className="mt-2 flex items-center justify-center gap-2">
              <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                {certificates[active].title}
              </span>
              <span className="text-sm text-zinc-400">·</span>
              <span className="text-sm text-emerald-600 dark:text-emerald-400">
                {certificates[active].subtitle}
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
