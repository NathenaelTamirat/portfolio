"use client";

import { useState } from "react";
import Image from "next/image";
import { FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

type CertificateBase = {
  preview: string;
  link: string;
  width: number;
  height: number;
};

const certificateAssets: CertificateBase[] = [
  {
    preview: "/certificates/udacity-android.png",
    link: "https://www.udacity.com/certificate/e/284fd838-0d6e-11f0-b8d4-3bb125f78943",
    width: 600,
    height: 463,
  },
  {
    preview: "/certificates/udacity-ai.png",
    link: "https://www.udacity.com/certificate/e/6c3de1ca-12d7-11f0-b448-43b9926fad29",
    width: 600,
    height: 463,
  },
  {
    preview: "/certificates/udacity-data-analyst.png",
    link: "https://www.udacity.com/certificate/e/546eec08-1c80-11f0-9ff0-7f21adfdda5b",
    width: 600,
    height: 463,
  },
  {
    preview: "/certificates/udacity-tech-scholarship.png",
    link: "https://www.udacity.com/certificate/e/cfbb5a40-03b2-11f0-aee9-57e6f6f42d1e",
    width: 600,
    height: 463,
  },
  {
    preview: "/certificates/stanford-code-in-place.png",
    link: "https://codeinplace.stanford.edu/cip5/certificate/p1oxia",
    width: 600,
    height: 425,
  },
  {
    preview: "/certificates/alx-professional-foundations.png",
    link: "https://savanna.alxafrica.com/certificates/7pLMPxrseN",
    width: 1280,
    height: 720,
  },
];

export default function CertificateDock() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = certificateAssets.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const certData = certificateAssets.map((asset, index) => {
    const item = t.certificates.items[index] || {
      title: "Certificate",
      subtitle: "Verified",
    };
    return {
      ...asset,
      title: item.title,
      subtitle: item.subtitle,
    };
  });

  const item1 = certData[currentIndex];
  const item2 = certData[(currentIndex + 1) % total];

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Mobile View: 1 Certificate Card */}
      <div className="w-full sm:hidden">
        <CertificateCard cert={item1} />
      </div>

      {/* Desktop / Tablet View: 2 Certificate Cards */}
      <div className="hidden sm:grid sm:grid-cols-2 gap-6 w-full">
        <CertificateCard cert={item1} />
        <CertificateCard cert={item2} />
      </div>

      {/* Navigation Controls */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label={t.certificates.prev}
          onClick={handlePrev}
          className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-none border border-zinc-200 dark:border-zinc-800 bg-transparent p-2.5 text-zinc-700 dark:text-zinc-300 transition-colors hover:border-emerald-500/50 hover:text-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
        >
          <FiChevronLeft size={18} />
        </button>

        <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 select-none">
          {currentIndex + 1} / {total}
        </span>

        <button
          type="button"
          aria-label={t.certificates.next}
          onClick={handleNext}
          className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-none border border-zinc-200 dark:border-zinc-800 bg-transparent p-2.5 text-zinc-700 dark:text-zinc-300 transition-colors hover:border-emerald-500/50 hover:text-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
        >
          <FiChevronRight size={18} />
        </button>
      </div>

    </div>
  );
}

function CertificateCard({ 
  cert 
}: { 
  cert: { 
    title: string; 
    subtitle: string; 
    preview: string; 
    link: string; 
    width: number; 
    height: number; 
  } 
}) {
  return (
    <a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col justify-between rounded-none border border-zinc-200 dark:border-zinc-800 bg-transparent p-4 transition-colors hover:border-emerald-500/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-none border border-zinc-100 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/40">
        <Image
          src={cert.preview}
          alt={cert.title}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-contain p-2"
        />
      </div>

      <div className="mt-4 flex flex-col gap-1">
        <h3 className="text-base font-semibold text-zinc-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
          {cert.title}
        </h3>
        <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
          {cert.subtitle} <FiExternalLink size={13} />
        </span>
      </div>
    </a>
  );
}
