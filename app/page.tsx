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

export default function Home() {
  return (
    <div className="no-scrollbar relative mx-auto w-[96%] pt-0 pb-32 md:w-[96%] lg:w-1/2 xl:w-1/2 2xl:w-1/2 min-h-screen">
      
      {/* Introduction Section */}
      <div className="border-dashed border-zinc-200 dark:border-white/20 pb-10 mt-12 border-b">
        <div className="group flex flex-col items-start gap-y-6 lg:flex-row lg:items-center">
          <div className="flex flex-col lg:hidden gap-2">
            <h1 className="text-3xl font-semibold bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">Nathenael Tamirat</h1>
            <span className="text-zinc-600 dark:text-zinc-400">Software Developer</span>
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

          <div className="flex w-full flex-col justify-center gap-y-6 pt-3 lg:w-[68%] lg:pl-8 lg:pt-0">
            <div className="hidden flex-col gap-2 lg:flex">
              <h1 className="text-3xl font-semibold bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">Nathenael Tamirat</h1>
              <span className="text-zinc-600 dark:text-zinc-400">Software Developer</span>
            </div>

            <div className="flex flex-col gap-y-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              <p>
                Hello, I’m Nathenael Tamirat. I’m passionate about creating software that turns ideas into practical solutions. My journey into development began in 2018 when I was introduced to HTML, CSS, and JavaScript at school. What started as curiosity about how websites work gradually grew into a deeper interest in software engineering.
              </p>
              <p>
                Today, I’m focused on building my skills, developing real-world projects, and exploring ways technology can solve everyday problems. I’m currently working toward founding my own software company while working on products, collaborating with others, and continuously improving as a developer.
              </p>
            </div>

            {/* Socials: linkedin, github, email, telegram, twitter, whatsapp, tiktok */}
            <div className="flex flex-wrap gap-2.5 mt-2">
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
            title="Awesome Software App" 
            description="A revolutionary app built to solve everyday problems with intuitive design and powerful features." 
            imagePlaceholder="Image 1" 
          />
          <ProjectCard 
            title="Creative Portfolio" 
            description="An interactive portfolio showcasing my development journey and highlighting key projects." 
            imagePlaceholder="Image 2" 
          />
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

function ProjectCard({ title, description, imagePlaceholder }: { title: string; description: string; imagePlaceholder: string }) {
  return (
    <div className="group flex flex-col gap-4 rounded-none border border-zinc-200 dark:border-zinc-800 bg-transparent p-6 transition-all hover:border-emerald-500/30 hover:shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        <div className="h-16 w-16 shrink-0 bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 flex items-center justify-center">
          <span className="text-[10px] text-zinc-500 italic text-center leading-tight px-1">Will Attach {imagePlaceholder}</span>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">{title}</h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ role, company, duration, description, proofLink, position }: { role: string; company: string; duration: string; description: string; proofLink: string; position: 'left' | 'right' }) {
  return (
    <div className={`relative flex flex-col md:flex-row items-start md:items-center w-full ${position === 'right' ? 'md:flex-row-reverse' : ''}`}>
      
      {/* Dot */}
      <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white dark:border-black -translate-x-1/2 z-10 top-6 md:top-1/2 md:-translate-y-1/2 shadow-sm"></div>
      
      {/* Spacer for the other side */}
      <div className="hidden md:block w-1/2"></div>
      
      {/* Content Card (padding reduced to 20px from the center) */}
      <div className={`w-full md:w-1/2 pl-10 md:pl-0 ${position === 'left' ? 'md:pr-5' : 'md:pl-5'} mt-0`}>
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
