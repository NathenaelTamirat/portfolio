"use client";

import React from "react";
import { 
  SiTypescript, 
  SiJavascript, 
  SiRust, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiHtml5, 
  SiNodedotjs, 
  SiHono, 
  SiExpress, 
  SiNestjs, 
  SiPostgresql, 
  SiMongodb, 
  SiRedis, 
  SiSupabase, 
  SiPrisma, 
  SiDocker, 
  SiGithubactions, 
  SiGooglecloud, 
  SiVercel, 
  SiAppstore 
} from "react-icons/si";
import { FaCss3Alt, FaAws } from "react-icons/fa6";
import { 
  TbBrandReactNative, 
  TbServer2, 
  TbCode, 
  TbDeviceDesktop, 
  TbCpu, 
  TbDatabase, 
  TbRocket, 
  TbLanguage 
} from "react-icons/tb";
import { useLanguage } from "../context/LanguageContext";

// Authentic Vector SVG for SQL
function SqlLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="8" ry="2.5" fill="#00758F" />
      <path d="M4 5v5c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5V5" stroke="#00758F" strokeWidth="1.6" fill="none" />
      <path d="M4 10v5c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5v-5" stroke="#00758F" strokeWidth="1.6" fill="none" />
      <rect x="7" y="14.5" width="10" height="4.5" rx="1" fill="#00758F" />
      <text x="12" y="17.8" textAnchor="middle" fill="#FFFFFF" fontSize="2.9" fontWeight="bold" fontFamily="monospace">SQL</text>
    </svg>
  );
}

// Authentic Vector SVG for CI/CD continuous delivery loop
function CicdLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M18 8c4 0 4 8 0 8-4 0-6-8-10-8-4 0-4 8 0 8 4 0 6-8 10-8Z" stroke="#2563EB" />
      <circle cx="8" cy="12" r="1.5" fill="#10B981" stroke="none" />
      <circle cx="16" cy="12" r="1.5" fill="#3B82F6" stroke="none" />
    </svg>
  );
}

// Official 4-color Google Play Store SVG
function GooglePlayLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M3.6 1.8A1.8 1.8 0 0 0 3 3.3v17.4c0 .6.2 1.1.6 1.5l10-10.2L3.6 1.8z" fill="#00D2FF"/>
      <path d="M17.4 8.2l-3.8 3.8 3.8 3.8 4.3-2.4a1.6 1.6 0 0 0 0-2.8l-4.3-2.4z" fill="#FFCE00"/>
      <path d="M3.6 22.2c.5.3 1.2.3 1.8 0l12-6.8-3.8-3.4-10 10.2z" fill="#FF334B"/>
      <path d="M3.6 1.8l10 10.2 3.8-3.4-12-6.8a1.9 1.9 0 0 0-1.8 0z" fill="#00F076"/>
    </svg>
  );
}

// Official TestFlight 3-propeller propeller blade logo on blueprint blue
function TestFlightLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="24" height="24" rx="5.5" fill="#087DF2" />
      <g transform="translate(12, 12)">
        <path d="M 0 0 C -1.6 -1.8 -2.1 -6.5 0 -8.5 C 2.1 -6.5 1.6 -1.8 0 0 Z" fill="#ffffff" />
        <g transform="rotate(120)">
          <path d="M 0 0 C -1.6 -1.8 -2.1 -6.5 0 -8.5 C 2.1 -6.5 1.6 -1.8 0 0 Z" fill="#ffffff" />
        </g>
        <g transform="rotate(240)">
          <path d="M 0 0 C -1.6 -1.8 -2.1 -6.5 0 -8.5 C 2.1 -6.5 1.6 -1.8 0 0 Z" fill="#ffffff" />
        </g>
        <circle cx="0" cy="0" r="1.5" fill="#ffffff" />
        <circle cx="0" cy="0" r="0.75" fill="#087DF2" opacity="0.3" />
      </g>
    </svg>
  );
}

// Crisp Vector Flag for Ethiopia
function EthiopiaFlag({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <clipPath id="ethiopia-flag-clip">
        <rect width="60" height="40" rx="2" />
      </clipPath>
      <g clipPath="url(#ethiopia-flag-clip)">
        <rect width="60" height="13.33" fill="#009A44" />
        <rect y="13.33" width="60" height="13.33" fill="#FED100" />
        <rect y="26.66" width="60" height="13.34" fill="#EF3340" />
        <circle cx="30" cy="20" r="8" fill="#002B7F" />
        <path d="M30 14L31.6 18.5H36.3L32.5 21.2L34 25.7L30 22.9L26 25.7L27.5 21.2L23.7 18.5H28.4L30 14Z" fill="#FED100" />
      </g>
    </svg>
  );
}

// Crisp Vector Flag for English (Union Jack)
function EnglishFlag({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <clipPath id="uk-flag-clip">
        <rect width="60" height="40" rx="2" />
      </clipPath>
      <g clipPath="url(#uk-flag-clip)">
        <rect width="60" height="40" fill="#012169" />
        <path d="M0 0L60 40M60 0L0 40" stroke="#FFFFFF" strokeWidth="8" />
        <path d="M0 0L60 40M60 0L0 40" stroke="#C8102E" strokeWidth="4" />
        <path d="M30 0V40M0 20H60" stroke="#FFFFFF" strokeWidth="12" />
        <path d="M30 0V40M0 20H60" stroke="#C8102E" strokeWidth="7" />
      </g>
    </svg>
  );
}

type SkillItem = {
  name: string;
  icon: React.ReactNode;
};

export default function SkillsSection() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      id: "programming-languages",
      title: t.skills.categories.programmingLanguages,
      icon: <TbCode className="text-emerald-500" size={19} />,
      count: "4",
      items: [
        { name: "TypeScript", icon: <SiTypescript className="w-4 h-4 text-[#3178C6] shrink-0" aria-hidden="true" /> },
        { name: "JavaScript", icon: <SiJavascript className="w-4 h-4 text-[#F7DF1E] bg-black/90 rounded-[2px] p-[0.5px] shrink-0" aria-hidden="true" /> },
        { name: "Rust", icon: <SiRust className="w-4 h-4 text-[#DEA584] dark:text-[#CE412B] shrink-0" aria-hidden="true" /> },
        { name: "SQL", icon: <SqlLogo className="w-4 h-4 shrink-0" /> },
      ],
    },
    {
      id: "frontend",
      title: t.skills.categories.frontend,
      icon: <TbDeviceDesktop className="text-emerald-500" size={19} />,
      count: "6",
      items: [
        { name: "React", icon: <SiReact className="w-4 h-4 text-[#61DAFB] shrink-0" aria-hidden="true" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4 text-black dark:text-white shrink-0" aria-hidden="true" /> },
        { name: "React Native", icon: <TbBrandReactNative className="w-4 h-4 text-[#61DAFB] shrink-0" aria-hidden="true" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-[#06B6D4] shrink-0" aria-hidden="true" /> },
        { name: "HTML5", icon: <SiHtml5 className="w-4 h-4 text-[#E34F26] shrink-0" aria-hidden="true" /> },
        { name: "CSS3", icon: <FaCss3Alt className="w-4 h-4 text-[#1572B6] shrink-0" aria-hidden="true" /> },
      ],
    },
    {
      id: "backend-apis",
      title: t.skills.categories.backendApis,
      icon: <TbCpu className="text-emerald-500" size={19} />,
      count: "4",
      items: [
        { name: "Node.js", icon: <SiNodedotjs className="w-4 h-4 text-[#5FA04E] shrink-0" aria-hidden="true" /> },
        { name: "Hono", icon: <SiHono className="w-4 h-4 text-[#E36002] shrink-0" aria-hidden="true" /> },
        { name: "Express", icon: <SiExpress className="w-4 h-4 text-black dark:text-white shrink-0" aria-hidden="true" /> },
        { name: "NestJS", icon: <SiNestjs className="w-4 h-4 text-[#E0234E] shrink-0" aria-hidden="true" /> },
      ],
    },
    {
      id: "deployment",
      title: t.skills.categories.deployment,
      icon: <TbRocket className="text-emerald-500" size={19} />,
      count: "3",
      items: [
        { name: "iOS App Store", icon: <SiAppstore className="w-4 h-4 text-[#0D96F6] shrink-0" aria-hidden="true" /> },
        { name: "Google Play Store", icon: <GooglePlayLogo className="w-4 h-4 shrink-0" /> },
        { name: "TestFlight", icon: <TestFlightLogo className="w-4 h-4 shrink-0" /> },
      ],
    },
    {
      id: "data-infrastructure",
      title: t.skills.categories.dataInfrastructure,
      icon: <TbDatabase className="text-emerald-500" size={19} />,
      count: "12",
      items: [
        { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4 text-[#4169E1] shrink-0" aria-hidden="true" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248] shrink-0" aria-hidden="true" /> },
        { name: "Redis", icon: <SiRedis className="w-4 h-4 text-[#DC382D] shrink-0" aria-hidden="true" /> },
        { name: "Supabase", icon: <SiSupabase className="w-4 h-4 text-[#3ECF8E] shrink-0" aria-hidden="true" /> },
        { name: "Prisma", icon: <SiPrisma className="w-4 h-4 text-[#2D3748] dark:text-white shrink-0" aria-hidden="true" /> },
        { name: "Docker", icon: <SiDocker className="w-4 h-4 text-[#2496ED] shrink-0" aria-hidden="true" /> },
        { name: "GitHub Actions", icon: <SiGithubactions className="w-4 h-4 text-[#2088FF] shrink-0" aria-hidden="true" /> },
        { name: "AWS", icon: <FaAws className="w-4 h-4 text-[#FF9900] shrink-0" aria-hidden="true" /> },
        { name: "GCP", icon: <SiGooglecloud className="w-4 h-4 text-[#4285F4] shrink-0" aria-hidden="true" /> },
        { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-black dark:text-white shrink-0" aria-hidden="true" /> },
        { name: "VPS", icon: <TbServer2 className="w-4 h-4 text-zinc-600 dark:text-zinc-300 shrink-0" aria-hidden="true" /> },
        { name: "CI/CD", icon: <CicdLogo className="w-4 h-4 shrink-0" /> },
      ],
    },
  ];

  return (
    <section aria-labelledby="skills-heading" className="pt-16">
      {/* Section Header */}
      <h2 
        id="skills-heading"
        className="w-fit rounded-none px-4 py-2 text-xl font-semibold bg-transparent border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white shadow-sm mb-4 scroll-mt-20"
      >
        {t.skills.sectionTitle}
      </h2>
      <p className="mb-8 text-sm text-zinc-600 dark:text-zinc-400">
        {t.skills.sectionSubtitle}
      </p>

      {/* Grid of 6 Category Cards (2 columns on desktop, 1 on mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Programming Languages */}
        <SkillCard category={skillCategories[0]} />

        {/* Frontend */}
        <SkillCard category={skillCategories[1]} />

        {/* Backend & APIs */}
        <SkillCard category={skillCategories[2]} />

        {/* Deployment */}
        <SkillCard category={skillCategories[3]} />

        {/* Data & Infrastructure */}
        <SkillCard category={skillCategories[4]} />

        {/* Spoken Languages */}
        <div 
          className="group flex flex-col justify-between rounded-none border border-zinc-200 dark:border-zinc-800 bg-transparent p-5 sm:p-6 transition-[border-color,box-shadow] duration-200 hover:border-emerald-500/40 hover:shadow-lg"
          aria-labelledby="category-spoken-languages"
        >
          <div>
            <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-zinc-100 dark:border-zinc-800/80">
              <div className="flex items-center gap-2.5">
                <span aria-hidden="true" className="shrink-0">
                  <TbLanguage className="text-emerald-500" size={19} />
                </span>
                <h3 id="category-spoken-languages" className="text-base font-bold text-zinc-900 dark:text-white">
                  {t.skills.categories.spokenLanguages}
                </h3>
              </div>
              <span className="rounded-full bg-zinc-200 dark:bg-zinc-900 px-2.5 py-0.5 text-xs text-zinc-700 dark:text-zinc-400 border border-zinc-300 dark:border-zinc-800 font-mono">
                2
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {/* Amharic */}
              <div 
                tabIndex={0}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 rounded-none border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/40 p-3.5 transition-[border-color,background-color] duration-200 hover:border-emerald-500/40 hover:bg-emerald-500/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <div className="flex items-center gap-3">
                  <EthiopiaFlag className="w-6 h-4 shrink-0 rounded-xs shadow-xs" />
                  <div className="flex flex-col">
                    <span translate="no" className="text-xs font-semibold text-zinc-900 dark:text-white">
                      {t.skills.spokenAmharic.name}
                    </span>
                    <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
                      {t.skills.spokenAmharic.subtitle}
                    </span>
                  </div>
                </div>
                <span className="self-start sm:self-center shrink-0 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10.5px] font-medium text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  {t.skills.spokenAmharic.proficiency}
                </span>
              </div>

              {/* English */}
              <div 
                tabIndex={0}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 rounded-none border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/40 p-3.5 transition-[border-color,background-color] duration-200 hover:border-emerald-500/40 hover:bg-emerald-500/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <div className="flex items-center gap-3">
                  <EnglishFlag className="w-6 h-4 shrink-0 rounded-xs shadow-xs" />
                  <div className="flex flex-col">
                    <span translate="no" className="text-xs font-semibold text-zinc-900 dark:text-white">
                      {t.skills.spokenEnglish.name}
                    </span>
                    <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
                      {t.skills.spokenEnglish.subtitle}
                    </span>
                  </div>
                </div>
                <span className="self-start sm:self-center shrink-0 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10.5px] font-medium text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  {t.skills.spokenEnglish.proficiency}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function SkillCard({ category }: { 
  category: { 
    id: string; 
    title: string; 
    icon: React.ReactNode; 
    count: string; 
    items: SkillItem[];
  } 
}) {
  return (
    <div 
      className="group flex flex-col justify-between rounded-none border border-zinc-200 dark:border-zinc-800 bg-transparent p-5 sm:p-6 transition-[border-color,box-shadow] duration-200 hover:border-emerald-500/40 hover:shadow-lg"
      aria-labelledby={`category-${category.id}`}
    >
      <div>
        {/* Category Header */}
        <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-zinc-100 dark:border-zinc-800/80">
          <div className="flex items-center gap-2.5">
            <span aria-hidden="true" className="shrink-0">
              {category.icon}
            </span>
            <h3 id={`category-${category.id}`} className="text-base font-bold text-zinc-900 dark:text-white">
              {category.title}
            </h3>
          </div>
          <span className="rounded-full bg-zinc-200 dark:bg-zinc-900 px-2.5 py-0.5 text-xs text-zinc-700 dark:text-zinc-400 border border-zinc-300 dark:border-zinc-800 font-mono">
            {category.count}
          </span>
        </div>

        {/* Skill Items Badges */}
        <div 
          className="flex flex-wrap gap-2" 
          role="list"
          aria-label={`${category.title} items`}
        >
          {category.items.map((skill) => (
            <div 
              key={skill.name}
              role="listitem"
              tabIndex={0}
              className="group/item flex items-center gap-2.5 rounded-none border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/40 px-3 py-2 text-xs font-medium text-zinc-800 dark:text-zinc-200 transition-[border-color,background-color,transform] duration-200 hover:border-emerald-500/50 hover:bg-emerald-500/5 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-default"
            >
              {skill.icon}
              <span translate="no" className="font-medium tracking-tight">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
