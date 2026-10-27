"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  FaGithub, 
  FaLinkedin, 
  FaInstagram, 
  FaXTwitter, 
  FaTiktok, 
  FaTelegram 
} from "react-icons/fa6";
import { 
  FiMail, 
  FiMessageCircle, 
  FiExternalLink, 
  FiArrowUpRight 
} from "react-icons/fi";
import CertificateDock from "./components/CertificateDock";
import SkillsSection from "./components/SkillsSection";
import FaqSection from "./components/FaqSection";
import { BrandLogo } from "./components/BrandLogo";
import { useLanguage } from "./context/LanguageContext";

const eventMetadata = [
  { 
    image: "/events/gdg-bits-welcome.jpeg", 
    alt: "Nathenael Tamirat at the GDG on Campus BITS College welcome banner",
    url: "https://t.me/c/2427984782/107",
  },
  { 
    image: "/events/break-the-pattern-summit.png", 
    alt: "Organizing team at the Break The Pattern tech summit",
    url: "https://www.linkedin.com/posts/gdg-oncampus-bitscollege_breakthepattern-wtmethiopia-gdgocbits-activity-7458118452424159233-Wdes?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFVXqtsBafaRDuqsVWPcb1btlhJG2zERAgk",
  },
  { 
    image: "/events/campus-developer-workshop.png", 
    alt: "Nathenael Tamirat conducting developer training in campus lab",
    url: "https://t.me/c/2427984782/46",
  },
  { 
    image: "/events/cursor-ai-hackathon.jpeg", 
    alt: "Nathenael Tamirat with fellow developers at Cursor AI Hackathon Ethiopia",
    url: undefined,
  },
  { 
    image: "/events/virtual-tech-webinar.jpeg", 
    alt: "Virtual Google Meet technical webinar session with Abel Hubena",
    url: "https://t.me/c/2427984782/59",
  },
];

const experienceMetadata = [
  {
    proofLink: "https://lewidentalclinic.com/login",
    skills: ["Clinical Management", "Web Application", "React", "TypeScript", "Tailwind CSS"],
    position: "left" as const,
  },
  {
    proofLink: "https://github.com/NathenaelTamirat",
    skills: ["HTML5", "JavaScript", "TypeScript", "React", "Software Development"],
    position: "right" as const,
  },
  {
    proofLink: "https://github.com/NathenaelTamirat",
    skills: ["Team Leadership", "Software Development", "Community Building"],
    position: "left" as const,
  },
  {
    proofLink: "https://github.com/NathenaelTamirat",
    skills: ["React", "Tailwind CSS", "TypeScript", "HTML5", "JavaScript"],
    position: "right" as const,
  },
];

const projectMetadata = [
  {
    url: "https://yomtechsolution.com",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    url: "https://lewidentalclinic.com/login",
    skills: ["Full-Stack Web Development", "Healthcare Software", "System Design", "UI/UX Design", "Authentication", "Database Management", "Business Process Automation"],
  },
  {
    url: "https://www.bitscollege.edu.et",
    skills: ["Institutional Portal", "Responsive Design", "Web Development"],
  },
  {
    url: "https://sheba-extentionz.vercel.app",
    skills: ["E-commerce", "Modern UI", "Catalog Showcase"],
  },
  {
    url: "https://nahom-dental-clinic.vercel.app/#/",
    skills: ["Web App", "Appointment System", "Patient Portal"],
  },
  {
    url: undefined,
    skills: ["Issue Tracking", "Workflow Automation", "System Design"],
  },
];

export default function Home() {
  const { t } = useLanguage();

  return (
    <main 
      id="main-content" 
      tabIndex={-1}
      className="no-scrollbar relative mx-auto w-full max-w-[96%] sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl px-4 sm:px-6 pt-16 sm:pt-20 lg:pt-24 pb-[max(5rem,env(safe-area-inset-bottom))] min-h-screen outline-none"
    >
      
      {/* Introduction / Hero Section with 100% Mobile/Desktop DOM Parity & Single Semantic H1 */}
      <section aria-labelledby="hero-heading" className="border-dashed border-zinc-200 dark:border-white/20 pb-12 mt-4 sm:mt-8 border-b">
        
        {/* Unified Semantic Header Lockup: Emblem + H1 + Availability Badge + Role */}
        <div className="flex items-center gap-3.5 sm:gap-4 mb-6 sm:mb-8">
          <BrandLogo size={68} priority />
          <div className="flex flex-col gap-1 min-w-0">
            <h1 
              id="hero-heading"
              className="flex flex-col gap-1"
            >
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span 
                  translate="no"
                  className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent break-words tracking-tight"
                >
                  Nathenael Tamirat
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10.5px] sm:text-xs font-medium text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 whitespace-nowrap">
                  <span className="relative flex h-2 w-2" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                  </span>
                  {t.hero.availableForWork}
                </span>
              </div>
              <span className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400">
                {t.hero.role}
              </span>
            </h1>
          </div>
        </div>

        {/* Content Layout: Portrait Photo & Narrative Bio + Socials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-8 items-start">
          
          {/* Portrait Photo (Left Column on Desktop, Centered on Mobile) */}
          <div className="lg:col-span-4 flex justify-center w-full">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none aspect-[4/5] shrink-0 overflow-hidden rounded-xl border border-zinc-200 dark:border-white/10 hover:border-emerald-500/50 transition-[border-color,box-shadow] duration-200 shadow-lg dark:shadow-xl mx-auto lg:mx-0">
              <Image 
                src="/Nathenael.jpeg" 
                alt="Nathenael Tamirat — Software Engineer" 
                fill
                priority
                sizes="(max-width: 1024px) 320px, 35vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Details, Bio, and Social Channels */}
          <div className="lg:col-span-8 flex flex-col justify-center gap-y-6">
            
            {/* Narrative Bio */}
            <div className="flex flex-col gap-y-4 text-[15px] sm:text-[16.5px] leading-relaxed text-zinc-700 dark:text-zinc-300">
              <p>{t.hero.bioP1}</p>
              <p>{t.hero.bioP2}</p>
            </div>

            {/* Social Links Dock with 44px minimum touch targets (Rule 10) */}
            <nav aria-label="Social links and contact channels" className="flex flex-wrap gap-2 pt-1 justify-center sm:justify-start">
              <SocialLink href="https://www.linkedin.com/in/nathenael-tamirat/" label="LinkedIn Profile" icon={<FaLinkedin size={22} />} />
              <SocialLink href="https://github.com/NathenaelTamirat" label="GitHub Profile" icon={<FaGithub size={22} />} />
              <SocialLink href="mailto:nathenaeltamiratbizuneh@gmail.com" label="Send Email" icon={<FiMail size={22} />} />
              <SocialLink href="https://t.me/nathenaeltamirat" label="Telegram Channel" icon={<FaTelegram size={22} />} />
              <SocialLink href="https://x.com/Nathenaeltamira" label="X (Twitter) Profile" icon={<FaXTwitter size={22} />} />
              <SocialLink href="https://wa.me/251991439979" label="WhatsApp Contact" icon={<FiMessageCircle size={22} />} />
              <SocialLink href="https://www.tiktok.com/@nathenaeltamirat" label="TikTok Profile" icon={<FaTiktok size={22} />} />
              <SocialLink href="https://www.instagram.com/nathenaeltamirat" label="Instagram Profile" icon={<FaInstagram size={22} />} />
            </nav>

          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section aria-labelledby="experience-heading" className="pt-12">
        <h2 
          id="experience-heading"
          className="w-fit rounded-none px-4 py-2 text-xl font-semibold bg-transparent border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white shadow-sm mb-10 scroll-mt-24"
        >
          {t.experience.sectionTitle}
        </h2>
        
        <div className="relative">
          {/* Central Dotted Spine */}
          <div className="absolute left-[16px] sm:left-[20px] md:left-1/2 top-0 bottom-0 border-l-[2px] border-dotted border-zinc-300 dark:border-zinc-700 -translate-x-1/2"></div>
          
          <div className="flex flex-col gap-y-12">
            {t.experience.items.map((item, idx) => {
              const meta = experienceMetadata[idx];
              const isFirst = idx === 0;
              return (
                <TimelineItem 
                  key={item.role + idx}
                  role={item.role} 
                  company={item.company} 
                  locationOrType={item.locationOrType}
                  duration={item.duration}
                  description={item.description}
                  proofLink={meta.proofLink}
                  linkText={isFirst ? t.experience.visitLewi : t.experience.viewProof}
                  skills={meta.skills}
                  position={meta.position}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Events Prepared & Community Leadership Section */}
      <section aria-labelledby="events-heading" className="pt-16">
        <h2 
          id="events-heading"
          className="w-fit rounded-none px-4 py-2 text-xl font-semibold bg-transparent border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white shadow-sm mb-4 scroll-mt-24"
        >
          {t.events.sectionTitle}
        </h2>
        <p className="mb-8 text-sm text-zinc-600 dark:text-zinc-400">
          {t.events.sectionSubtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {t.events.items.map((event, idx) => {
            const meta = eventMetadata[idx] || eventMetadata[0];
            const cardContent = (
              <div 
                className="group flex h-full flex-col justify-between rounded-none border border-zinc-200 dark:border-zinc-800 bg-transparent p-4 sm:p-5 transition-[border-color,box-shadow] duration-200 hover:border-emerald-500/40 hover:shadow-lg focus-within:border-emerald-500/50"
              >
                <div>
                  <div className="relative w-full aspect-[16/10] overflow-hidden rounded-none border border-zinc-100 dark:border-zinc-800/80 mb-4 bg-zinc-50 dark:bg-zinc-900/40">
                    <Image
                      src={meta.image}
                      alt={meta.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <span className="w-fit rounded-full bg-zinc-200 dark:bg-zinc-900 px-3 py-1 text-xs text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-800 font-medium">
                    {event.role}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors mt-3">
                    {event.title}
                  </h3>
                  <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mt-1">
                    {event.subtitle}
                  </p>
                  <p className="mt-2.5 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {event.description}
                  </p>
                </div>

                {meta.url && (
                  <div className="mt-4 pt-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 rounded-none transition-[background-color,border-color] duration-150 group-hover:bg-emerald-500/20">
                      <FiExternalLink size={13} aria-hidden="true" /> {t.projects.visitProject}
                    </span>
                  </div>
                )}
              </div>
            );

            return meta.url ? (
              <a 
                key={event.title + idx}
                href={meta.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black cursor-pointer"
              >
                {cardContent}
              </a>
            ) : (
              <div key={event.title + idx} className="h-full">
                {cardContent}
              </div>
            );
          })}
        </div>
      </section>

      {/* Skills & Tech Stack Section */}
      <SkillsSection />

      {/* Projects Section */}
      <section aria-labelledby="projects-heading" className="pt-16">
        <h2 
          id="projects-heading"
          className="w-fit rounded-none px-4 py-2 text-xl font-semibold bg-transparent border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white shadow-sm mb-10 scroll-mt-24"
        >
          {t.projects.sectionTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.projects.items.map((project, idx) => {
            const meta = projectMetadata[idx];
            return (
              <ProjectCard 
                key={project.title + idx}
                title={project.title} 
                url={meta.url}
                description={project.description} 
                tag={project.tag}
                skills={meta.skills}
                visitLabel={t.projects.visitProject}
              />
            );
          })}
        </div>
      </section>

      {/* Awards and Certificates Section */}
      <section aria-labelledby="awards-heading" className="pt-16">
        <h2 
          id="awards-heading"
          className="w-fit rounded-none px-4 py-2 text-xl font-semibold bg-transparent border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white shadow-sm mb-4 scroll-mt-24"
        >
          {t.certificates.sectionTitle}
        </h2>
        <p className="mb-8 text-sm text-zinc-600 dark:text-zinc-400">
          {t.certificates.sectionSubtitle}
        </p>
        <div className="flex justify-center w-full">
          <CertificateDock />
        </div>
      </section>

      {/* Frequently Asked Questions (AEO / GEO / Information Gain) Section */}
      <FaqSection />

      {/* Connect & Contact CTA Section */}
      <section aria-labelledby="connect-heading" className="pt-16">
        <h2 
          id="connect-heading"
          className="w-fit rounded-none px-4 py-2 text-xl font-semibold bg-transparent border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white shadow-sm mb-6 scroll-mt-24"
        >
          {t.connect.sectionTitle}
        </h2>
        <div className="rounded-none border border-zinc-200 dark:border-zinc-800 bg-transparent p-5 sm:p-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
              {t.connect.heading}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
              {t.connect.description}
            </p>
            <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-2">
              <Link
                href="mailto:nathenaeltamiratbizuneh@gmail.com"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-none bg-emerald-600 hover:bg-emerald-500 text-white dark:text-black dark:bg-emerald-400 dark:hover:bg-emerald-300 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black w-full sm:w-auto cursor-pointer"
              >
                <FiMail size={16} aria-hidden="true" /> {t.connect.getInTouch}
              </Link>
              <a
                href="https://t.me/nathenaeltamirat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-none border border-zinc-200 dark:border-zinc-800 bg-transparent hover:border-emerald-500/40 px-5 py-2.5 text-xs font-semibold text-zinc-800 dark:text-zinc-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black w-full sm:w-auto cursor-pointer"
              >
                <FaTelegram size={16} aria-hidden="true" /> <span translate="no">{t.connect.telegram}</span> <FiArrowUpRight size={14} aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/nathenael-tamirat/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-none border border-zinc-200 dark:border-zinc-800 bg-transparent hover:border-emerald-500/40 px-5 py-2.5 text-xs font-semibold text-zinc-800 dark:text-zinc-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black w-full sm:w-auto cursor-pointer"
              >
                <FaLinkedin size={16} aria-hidden="true" /> <span translate="no">{t.connect.linkedin}</span> <FiArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Production Footer */}
      <footer className="mt-20 pt-8 border-t border-dashed border-zinc-200 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-500">
        <p className="font-mono tabular-nums">
          &copy; {new Date().getFullYear()} <span translate="no">Nathenael Tamirat</span>. {t.footer.rights}
        </p>
        <p className="flex items-center gap-2">
          <span>{t.footer.craftedWith}</span>
          <span translate="no" className="font-semibold text-zinc-700 dark:text-zinc-300">Next.js&nbsp;&amp;&nbsp;Tailwind&nbsp;CSS</span>
        </p>
      </footer>

    </main>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label={label}
      className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded text-zinc-500 dark:text-zinc-400 transition-[transform,color] duration-200 hover:scale-110 hover:-translate-y-0.5 hover:text-emerald-500 dark:hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black cursor-pointer"
    >
      {icon}
    </Link>
  );
}

function ProjectCard({ 
  title, 
  url, 
  description, 
  tag,
  skills,
  visitLabel = "Visit Project"
}: { 
  title: string; 
  url?: string; 
  description: string; 
  tag?: string;
  skills?: string[];
  visitLabel?: string;
}) {
  const card = (
    <div className="group flex h-full flex-col justify-between rounded-none border border-zinc-200 dark:border-zinc-800 bg-transparent p-4 sm:p-6 transition-[border-color,box-shadow] duration-200 hover:border-emerald-500/30 hover:shadow-lg focus-within:border-emerald-500/50">
      <div className="flex flex-col gap-4">
        {tag && (
          <span className="w-fit rounded-full bg-zinc-200 dark:bg-zinc-900 px-3 py-1 text-xs text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-800 font-medium">
            {tag}
          </span>
        )}
        <div className="flex flex-col">
          <h3 translate="no" className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex-1">
            {description}
          </p>
        </div>
      </div>
      
      <div className="mt-4 flex flex-col gap-3">
        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5" aria-label="Technologies used">
            {skills.map((skill) => (
              <span 
                key={skill}
                translate="no"
                className="rounded-full bg-zinc-100 dark:bg-zinc-900/80 px-2.5 py-0.5 text-[11px] text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
        {url && (
          <span className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 w-fit border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 rounded-none transition-[background-color,border-color] duration-150 group-hover:bg-emerald-500/20">
            <FiExternalLink size={14} aria-hidden="true" /> {visitLabel}
          </span>
        )}
      </div>
    </div>
  );

  return url ? (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black cursor-pointer"
    >
      {card}
    </a>
  ) : (
    card
  );
}

function TimelineItem({ 
  role, 
  company, 
  duration, 
  description, 
  proofLink, 
  linkText,
  locationOrType,
  skills,
  position 
}: { 
  role: string; 
  company: string; 
  duration: string; 
  description: string; 
  proofLink?: string; 
  linkText?: string;
  locationOrType?: string;
  skills?: string[];
  position: 'left' | 'right';
}) {
  return (
    <div className={`relative flex flex-col md:flex-row items-start md:items-center w-full ${position === 'right' ? 'md:flex-row-reverse' : ''}`}>
      
      {/* Central Dotted Dot */}
      <div 
        aria-hidden="true"
        className="absolute left-[16px] sm:left-[20px] md:left-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-emerald-500 border-4 border-white dark:border-black -translate-x-1/2 z-10 top-6 md:top-1/2 md:-translate-y-1/2 shadow-sm"
      ></div>
      
      {/* Spacer for the other side */}
      <div className="hidden md:block w-1/2"></div>
      
      {/* Content Card */}
      <div className={`w-full md:w-1/2 pl-8 sm:pl-12 md:pl-0 ${position === 'left' ? 'md:ml-[48px]' : 'md:mr-[48px]'} mt-0`}>
        <div className="group flex flex-col justify-between rounded-none border border-zinc-200 dark:border-zinc-800 bg-transparent p-4 sm:p-6 transition-[border-color,box-shadow] duration-200 hover:border-emerald-500/30 hover:shadow-lg">
          <div className="flex flex-col gap-y-1">
            <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
              {role}
            </h3>
            <div className="flex flex-wrap justify-between items-start gap-2 mt-1">
              <div className="flex flex-col min-w-0">
                <p translate="no" className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400">{company}</p>
                {locationOrType && (
                  <span className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-500 mt-0.5">{locationOrType}</span>
                )}
              </div>
              <span className="rounded-full bg-zinc-200 dark:bg-zinc-900 px-2.5 sm:px-3 py-0.5 sm:py-1 text-[11px] sm:text-xs text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-800 whitespace-nowrap font-mono tabular-nums">
                {duration}
              </span>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-3 mb-3 leading-relaxed">
              {description}
            </p>
            
            {skills && skills.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-4" aria-label="Role skills">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    translate="no"
                    className="rounded-full bg-zinc-100 dark:bg-zinc-900/80 px-2.5 py-0.5 text-[11px] text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}

            {proofLink && (
              <a 
                href={proofLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline w-fit border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 rounded-none transition-[background-color,border-color] duration-150 hover:bg-emerald-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black cursor-pointer"
              >
                <FiExternalLink size={14} aria-hidden="true" /> {linkText || "View Work Proof"}
              </a>
            )}
          </div>
        </div>
      </div>
      
    </div>
  );
}
