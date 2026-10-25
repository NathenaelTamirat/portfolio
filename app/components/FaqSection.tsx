"use client";

import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

export default function FaqSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <section aria-labelledby="faq-heading" className="pt-16">
      <h2 
        id="faq-heading"
        className="w-fit rounded-none px-4 py-2 text-xl font-semibold bg-transparent border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white shadow-sm mb-4 scroll-mt-24"
      >
        {t.faq.sectionTitle}
      </h2>
      <p className="mb-8 text-sm text-zinc-600 dark:text-zinc-400">
        {t.faq.sectionSubtitle}
      </p>

      <div className="flex flex-col gap-3">
        {t.faq.items.map((item, idx) => {
          const isOpen = openIndex === idx;
          const questionId = `faq-q-${idx}`;
          const answerId = `faq-a-${idx}`;

          return (
            <div
              key={item.question}
              className="rounded-none border border-zinc-200 dark:border-zinc-800 bg-transparent transition-[border-color,box-shadow] duration-200 hover:border-emerald-500/40"
            >
              <h3>
                <button
                  type="button"
                  id={questionId}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left font-semibold text-sm sm:text-base text-zinc-900 dark:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer min-h-[48px]"
                >
                  <span className="flex-1">{item.question}</span>
                  <FiChevronDown
                    className={`h-4 w-4 shrink-0 text-zinc-500 dark:text-zinc-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-emerald-500 dark:text-emerald-400" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </h3>
              
              {isOpen && (
                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  className="px-4 sm:px-5 pb-5 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 border-t border-zinc-100 dark:border-zinc-800/60 pt-3"
                >
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
