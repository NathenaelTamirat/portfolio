"use client";

import { useState } from "react";
import Image from "next/image";
import { FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";

type Certificate = {
  title: string;
  subtitle: string;
  preview: string;
  link: string;
  width: number;
  height: number;
};

const certificates: Certificate[] = [
  {
    title: "Android Developer Fundamentals",
    subtitle: "Udacity",
    preview: "/certificates/udacity-android.png",
    link: "https://www.udacity.com/certificate/e/284fd838-0d6e-11f0-b8d4-3bb125f78943",
    width: 600,
    height: 463,
  },
  {
    title: "Artificial Intelligence",
    subtitle: "Udacity",
    preview: "/certificates/udacity-ai.png",
    link: "https://www.udacity.com/certificate/e/6c3de1ca-12d7-11f0-b448-43b9926fad29",
    width: 600,
    height: 463,
  },
  {
    title: "Data Analysis Fundamentals",
    subtitle: "Udacity",
    preview: "/certificates/udacity-data-analyst.png",
    link: "https://www.udacity.com/certificate/e/546eec08-1c80-11f0-9ff0-7f21adfdda5b",
    width: 600,
    height: 463,
  },
  {
    title: "Programming Fundamentals",
    subtitle: "Udacity",
    preview: "/certificates/udacity-tech-scholarship.png",
    link: "/certificates/udacity-tech-scholarship.pdf",
    width: 600,
    height: 463,
  },
  {
    title: "Code in Place",
    subtitle: "Stanford",
    preview: "/certificates/stanford-code-in-place.png",
    link: "/certificates/stanford-code-in-place.pdf",
    width: 600,
    height: 425,
  },
  {
    title: "ALX - Professional Foundation",
    subtitle: "ALX",
    preview: "/certificates/alx-professional-foundations.png",
    link: "https://savanna.alxafrica.com/certificates/7pLMPxrseN",
    width: 1280,
    height: 720,
  },
];

export default function CertificateDock() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = certificates.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  // On desktop we display 2 items side-by-side, on mobile 1 item
  const item1 = certificates[currentIndex];
  const item2 = certificates[(currentIndex + 1) % total];

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

      {/* Navigation Controls without Animation */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous certificates"
          onClick={handlePrev}
          className="flex items-center justify-center rounded-none border border-zinc-200 dark:border-zinc-800 bg-transparent p-2.5 text-zinc-700 dark:text-zinc-300 transition-colors hover:border-emerald-500/50 hover:text-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
        >
          <FiChevronLeft size={18} />
        </button>

        <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
          {currentIndex + 1} / {total}
        </span>

        <button
          type="button"
          aria-label="Next certificates"
          onClick={handleNext}
          className="flex items-center justify-center rounded-none border border-zinc-200 dark:border-zinc-800 bg-transparent p-2.5 text-zinc-700 dark:text-zinc-300 transition-colors hover:border-emerald-500/50 hover:text-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
        >
          <FiChevronRight size={18} />
        </button>
      </div>

    </div>
  );
}

function CertificateCard({ cert }: { cert: Certificate }) {
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
