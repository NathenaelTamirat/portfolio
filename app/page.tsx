"use client";

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
  FiExternalLink
} from "react-icons/fi";
import CertificateDock from "./components/CertificateDock";

export default function Home() {
  return (
    <div className="no-scrollbar relative mx-auto w-[96%] pt-0 pb-32 md:w-[96%] lg:w-1/2 xl:w-1/2 2xl:w-1/2 min-h-screen">
      
      {/* Introduction Section */}
      <div className="border-dashed border-zinc-200 dark:border-white/20 pb-10 mt-12 border-b">
        <div className="group flex flex-col items-start gap-y-6 lg:flex-row lg:items-center">
          <div className="flex items-center gap-3 lg:hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.jpeg" alt="Logo" className="h-24 w-24 rounded-full object-cover -ml-[10%]" />
            <div className="flex flex-col gap-1">
              <h1 className="text-3xl font-semibold bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">Nathenael Tamirat</h1>
              <span className="text-zinc-600 dark:text-zinc-400">Software Engineer</span>
            </div>
          </div>

          <div className="group/me relative h-[400px] w-full lg:w-[32%] cursor-pointer overflow-hidden rounded-xl border border-zinc-200 dark:border-white/10 hover:border-emerald-500/50 transition-all shadow-lg dark:shadow-xl">
            {/* Using standard img tag to prevent Next.js image errors for missing local files */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/Nathenael.jpeg" 
              alt="Nathenael Tamirat" 
              className="h-full w-full object-cover transition-transform duration-500 group-hover/me:scale-110"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop';
              }}
            />
          </div>

          <div className="flex w-full flex-col justify-center gap-y-6 pt-3 lg:w-[68%] lg:pl-[10%] lg:pt-0">
            <div className="hidden items-center gap-3 lg:flex">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.jpeg" alt="Logo" className="h-24 w-24 rounded-full object-cover -ml-[10%]" />
              <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-semibold bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">Nathenael Tamirat</h1>
                <span className="text-zinc-600 dark:text-zinc-400">Software Engineer</span>
              </div>
            </div>

            <div className="flex flex-col gap-y-4 text-[16.8px] leading-relaxed text-zinc-700 dark:text-zinc-300 lg:-ml-5">
              <p>
                Hello, I’m Nathenael Tamirat. I’m passionate about creating software that turns ideas into practical solutions. My journey into development began in 2018 when I was introduced to HTML, CSS, and JavaScript at school. What started as curiosity about how websites work gradually grew into a deeper interest in software engineering.
              </p>
              <p>
                Today, I’m focused on building my skills, developing real-world projects, and exploring ways technology can solve everyday problems. I’m currently working toward founding my own software company while working on products, collaborating with others, and continuously improving as a developer.
              </p>
            </div>

            {/* Socials: linkedin, github, email, telegram, twitter, whatsapp, tiktok */}
            <div className="flex flex-wrap gap-2.5 mt-2 lg:-ml-5">
              <SocialLink href="https://www.linkedin.com/in/nathenael-tamirat/" icon={<FaLinkedin size={22} />} />
              <SocialLink href="https://github.com/NathenaelTamirat" icon={<FaGithub size={22} />} />
              <SocialLink href="mailto:nathenaeltamiratbizuneh@gmail.com" icon={<FiMail size={22} />} />
              <SocialLink href="https://t.me/nathenaeltamirat" icon={<FaTelegram size={22} />} />
              <SocialLink href="https://x.com/Nathenaeltamira" icon={<FaXTwitter size={22} />} />
              <SocialLink href="https://wa.me/251991439979" icon={<FiMessageCircle size={22} />} />
              <SocialLink href="https://www.tiktok.com/@nathenaeltamirat" icon={<FaTiktok size={22} />} />
              <SocialLink href="https://www.instagram.com/nathenaeltamirat" icon={<FaInstagram size={22} />} />
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="pt-10">
        <div className="w-fit rounded-none px-4 py-2 text-xl font-semibold bg-transparent border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white shadow-sm mb-10">Experience</div>
        
        <div className="relative">
          {/* Central Line - made dotted */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 border-l-[2px] border-dotted border-zinc-300 dark:border-zinc-700 -translate-x-1/2"></div>
          
          <div className="flex flex-col gap-y-12">
            
            <TimelineItem 
              role="Software Developer" 
              company="BITS College" 
              duration="2026 — 2028"
              description="Working on innovative software solutions and expanding my development expertise within the BITS College team."
              proofLink="https://github.com/NathenaelTamirat"
              position="left"
            />

            <TimelineItem 
              role="Team Member / Leader" 
              company="GDGOC BITS College" 
              duration="2025 — 2026"
              description="Collaborated with peers, organized events, and led initiatives as part of the Google Developer Groups on Campus."
              proofLink="https://github.com/NathenaelTamirat"
              position="right"
            />

            <TimelineItem 
              role="Freelance Developer" 
              company="Self-Employed" 
              duration="Present"
              description="Working on side projects, building software products, and helping clients bring their ideas to life."
              proofLink="https://github.com/NathenaelTamirat"
              position="left"
            />

          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="pt-16">
        <div className="w-fit rounded-none px-4 py-2 text-xl font-semibold bg-transparent border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white shadow-sm mb-10">Projects</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard 
            title="YOM Technology" 
            url="https://yomtechnologysolution.vercel.app"
            description="Company website for a software engineering firm — showcases services, solutions, technologies, and a modern approach to building digital products for real-world problems." 
            tag="Web App"
          />
          <ProjectCard 
            title="BITS College" 
            url="https://www.bitscollege.edu.et"
            description="Official website for the School of Systems and Technology, presenting software engineering and IT management programs, admissions, and academic information." 
            tag="Website"
          />
          <ProjectCard 
            title="Sheba Extensionz" 
            url="https://sheba-extentionz.vercel.app"
            description="Digital storefront for premium luxury hair extensions, showcasing products and connecting clients to the brand." 
            tag="E-commerce"
          />
          <ProjectCard 
            title="Nahom Dental Clinic" 
            url="https://nahom-dentali-clinic.vercel.app"
            description="Luxury modern dentistry platform with an online appointment and contact experience for patients to reach the clinic easily." 
            tag="Web App"
          />
          <ProjectCard 
            title="Issue Management System" 
            description="A system for tracking, managing, and resolving issues efficiently across teams and workflows." 
            tag="Web App"
          />
        </div>
      </div>

      {/* Awards and Certificates Section */}
      <div className="pt-16">
        <div className="w-fit rounded-none px-4 py-2 text-xl font-semibold bg-transparent border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white shadow-sm mb-10">Awards and Certificates</div>
        <p className="mb-8 text-sm text-zinc-600 dark:text-zinc-400">
          A selection of certifications I’ve earned. Hover over the dock to preview each certificate.
        </p>
        <div className="flex justify-center">
          <CertificateDock />
        </div>
      </div>

    </div>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="p-1 text-zinc-500 dark:text-zinc-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:text-emerald-500 dark:hover:text-emerald-400"
    >
      {icon}
    </Link>
  );
}

function ProjectCard({ title, url, description, tag }: { title: string; url?: string; description: string; tag?: string }) {
  const card = (
    <div className="group flex h-full flex-col gap-4 rounded-none border border-zinc-200 dark:border-zinc-800 bg-transparent p-6 transition-all hover:border-emerald-500/30 hover:shadow-lg">
      <div className="flex flex-col gap-4">
        {tag && (
          <span className="w-fit rounded-full bg-zinc-200 dark:bg-zinc-900 px-3 py-1 text-xs text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-800">{tag}</span>
        )}
        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">{title}</h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex-1">{description}</p>
          {url && (
            <span className="mt-4 flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 w-fit border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 rounded-none">
              <FiExternalLink size={14} /> Visit Project
            </span>
          )}
        </div>
      </div>
    </div>
  );
  return url ? (
    <Link href={url} target="_blank" rel="noopener noreferrer" className="block h-full">{card}</Link>
  ) : card;
}

function TimelineItem({ role, company, duration, description, proofLink, position }: { role: string; company: string; duration: string; description: string; proofLink: string; position: 'left' | 'right' }) {
  return (
    <div className={`relative flex flex-col md:flex-row items-start md:items-center w-full ${position === 'right' ? 'md:flex-row-reverse' : ''}`}>
      
      {/* Dot */}
      <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white dark:border-black -translate-x-1/2 z-10 top-6 md:top-1/2 md:-translate-y-1/2 shadow-sm"></div>
      
      {/* Spacer for the other side */}
      <div className="hidden md:block w-1/2"></div>
      
      {/* Content Card (padding reduced to 20px from the center) */}
      <div className={`w-full md:w-1/2 pl-10 md:pl-0 ${position === 'left' ? 'md:ml-[40px]' : 'md:mr-[40px]'} mt-0`}>
        <div className="group flex flex-col justify-between rounded-none border border-zinc-200 dark:border-zinc-800 bg-transparent p-6 transition-all hover:border-emerald-500/30 hover:shadow-lg">
          <div className="flex flex-col gap-y-1">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">{role}</h3>
            <div className="flex justify-between items-center mt-1">
              <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">{company}</p>
              <span className="rounded-full bg-zinc-200 dark:bg-zinc-900 px-3 py-1 text-xs text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-800 whitespace-nowrap">{duration}</span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-3 mb-4 leading-relaxed">{description}</p>
            
            <Link href={proofLink} target="_blank" className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline w-fit border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 rounded-none transition-all hover:bg-emerald-500/20">
              <FiExternalLink size={14} /> View Work Proof
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  );
}
