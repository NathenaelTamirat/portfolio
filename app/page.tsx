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

type EventItem = {
  title: string;
  subtitle: string;
  role: string;
  description: string;
  image: string;
  alt: string;
};

const events: EventItem[] = [
  {
    title: "Google Developer Groups on Campus — BITS College",
    subtitle: "Launch & Welcome Event",
    role: "Technical Lead & Organizer",
    description: "Organized and hosted the official launch and welcome event for GDG on Campus at BITS College under the mission to Connect, Learn, and Develop.",
    image: "/events/gdg-bits-welcome.jpeg",
    alt: "Nathenael Tamirat at the GDG on Campus BITS College welcome banner",
  },
  {
    title: "Break The Pattern — Joint Tech Summit",
    subtitle: "BITS × HiLCoE × Notion × Dala Studio",
    role: "Lead Co-Organizer",
    description: "Co-organized a multi-campus developer summit uniting university chapters and tech companies for keynotes, panels, and developer networking.",
    image: "/events/break-the-pattern-summit.png",
    alt: "Organizing team at the Break The Pattern tech summit",
  },
  {
    title: "Hands-On Developer Workshops & Lab Mentorship",
    subtitle: "BITS College Computer Lab",
    role: "Speaker & Technical Mentor",
    description: "Conducted practical coding workshops, system development walkthroughs, and peer mentoring sessions for aspiring student engineers.",
    image: "/events/campus-developer-workshop.png",
    alt: "Nathenael Tamirat conducting developer training in campus lab",
  },
  {
    title: "Cursor AI Hackathon Ethiopia",
    subtitle: "Innobiz-K × Telebirr × AAU",
    role: "Participant & Collaborator",
    description: "Collaborated with engineers at the premier Cursor AI Hackathon in Addis Ababa, building and testing AI-assisted full-stack workflows.",
    image: "/events/cursor-ai-hackathon.jpeg",
    alt: "Nathenael Tamirat with fellow developers at Cursor AI Hackathon Ethiopia",
  },
  {
    title: "Virtual Tech Talks & Industry Webinars",
    subtitle: "GDG on Campus Online Series",
    role: "Host & Moderator",
    description: "Hosted live virtual webinars with industry engineering leaders (featuring guest speaker Abel Hubena), providing career and technical mentorship.",
    image: "/events/virtual-tech-webinar.jpeg",
    alt: "Virtual Google Meet technical webinar session with Abel Hubena",
  },
];

export default function Home() {
  return (
    <main 
      id="main-content" 
      tabIndex={-1}
      className="no-scrollbar relative mx-auto w-full max-w-[96%] sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl px-3 sm:px-6 pt-0 pb-20 min-h-screen outline-none"
    >
      
      {/* Introduction / Hero Section */}
      <section aria-labelledby="hero-heading" className="border-dashed border-zinc-200 dark:border-white/20 pb-12 mt-6 sm:mt-10 border-b">
        
        {/* Mobile Header: Logo + Name + Title at the top */}
        <div className="flex items-center gap-3.5 mb-6 lg:hidden">
          <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <Image 
              src="/logo.jpeg" 
              alt="Nathenael Tamirat emblem" 
              fill
              sizes="64px"
              priority
              className="object-cover" 
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-2">
              <h1 
                id="hero-heading"
                className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent"
              >
                Nathenael Tamirat
              </h1>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10.5px] font-medium text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                Available for work
              </span>
            </div>
            <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Software Engineer &amp; Full-Stack Developer
            </p>
          </div>
        </div>

        {/* Hero Body: Portrait Photo on Left (desktop) or Center (mobile), Bio on Right */}
        <div className="flex flex-col items-center lg:items-start gap-8 lg:flex-row">
          
          {/* Portrait Photo */}
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none lg:w-[35%] aspect-[4/5] shrink-0 overflow-hidden rounded-xl border border-zinc-200 dark:border-white/10 hover:border-emerald-500/50 transition-colors shadow-lg dark:shadow-xl mx-auto lg:mx-0">
            <Image 
              src="/Nathenael.jpeg" 
              alt="Nathenael Tamirat — Software Engineer" 
              fill
              priority
              sizes="(max-width: 1024px) 320px, 35vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Desktop details and bio */}
          <div className="flex w-full flex-col justify-center gap-y-6 lg:w-[65%]">
            
            {/* Desktop Header Lockup */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <Image 
                  src="/logo.jpeg" 
                  alt="Nathenael Tamirat emblem" 
                  fill
                  sizes="80px"
                  priority
                  className="object-cover" 
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2.5">
                  <span className="text-3xl font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                    Nathenael Tamirat
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                    </span>
                    Available for work
                  </span>
                </div>
                <p className="text-base font-medium text-zinc-600 dark:text-zinc-400">
                  Software Engineer &amp; Full-Stack Developer
                </p>
              </div>
            </div>

            {/* Narrative Bio with Typographic Quotes */}
            <div className="flex flex-col gap-y-4 text-[15px] sm:text-[16.5px] leading-relaxed text-zinc-700 dark:text-zinc-300">
              <p>
                Hello, I’m Nathenael Tamirat. I’m passionate about creating software that turns ideas into practical solutions. My journey into development began in 2018 when I was introduced to HTML, CSS, and JavaScript at school. What started as curiosity about how websites work gradually grew into a deeper interest in software engineering.
              </p>
              <p>
                Today, I’m focused on building my skills, developing real-world projects, and exploring ways technology can solve everyday problems. I’m currently working toward founding my own software company while working on products, collaborating with others, and continuously improving as a developer.
              </p>
            </div>

            {/* Social Links Dock */}
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
          className="w-fit rounded-none px-4 py-2 text-xl font-semibold bg-transparent border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white shadow-sm mb-10"
        >
          Experience
        </h2>
        
        <div className="relative">
          {/* Central Dotted Spine */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 border-l-[2px] border-dotted border-zinc-300 dark:border-zinc-700 -translate-x-1/2"></div>
          
          <div className="flex flex-col gap-y-12">
            
            <TimelineItem 
              role="Freelance Software Developer" 
              company="Self-employed" 
              locationOrType="Hybrid"
              duration="Aug 2026 — Present · 3 mos"
              description="Developed a comprehensive dental clinic management system for Lewi Speciality Dental Clinic, digitizing clinical, administrative, and operational workflows in a centralized web-based platform tailored to streamline daily operations and patient-care processes."
              proofLink="https://lewidentalclinic.com/login"
              linkText="Visit Lewi Dental System"
              skills={["Clinical Management", "Web Application", "React", "TypeScript", "Tailwind CSS"]}
              position="left"
            />

            <TimelineItem 
              role="Software Engineer" 
              company="Mentor Knowledge Solutions PLC" 
              locationOrType="Internship · Addis Ababa, Ethiopia · Hybrid"
              duration="Jul 2026 — Present · 4 mos"
              description="Contributing to software engineering solutions and developing production web applications, collaborating across agile teams to implement robust digital solutions."
              proofLink="https://github.com/NathenaelTamirat"
              linkText="View Work Proof"
              skills={["HTML5", "JavaScript", "TypeScript", "React", "Software Development"]}
              position="right"
            />

            <TimelineItem 
              role="Technical Lead" 
              company="GDG on Campus - BITS College" 
              locationOrType="Addis Ababa, Ethiopia · On-site"
              duration="Sep 2025 — Sep 2026 · 1 yr 1 mo"
              description="Collaborated with peers, organized technical workshops and events, and led software development initiatives and student developer programs as part of Google Developer Groups on Campus."
              proofLink="https://github.com/NathenaelTamirat"
              linkText="View Work Proof"
              skills={["Team Leadership", "Software Development", "Community Building"]}
              position="left"
            />

            <TimelineItem 
              role="Frontend Developer" 
              company="Tamirat Bizuneh Legal Service" 
              locationOrType="Addis Ababa, Ethiopia"
              duration="Jan 2025 — May 2025 · 5 mos"
              description="Built and maintained more than 5 portfolio websites for lawyers using React, Tailwind CSS, and TypeScript, delivering responsive, modern, and accessible client-facing platforms."
              proofLink="https://github.com/NathenaelTamirat"
              linkText="View Work Proof"
              skills={["React", "Tailwind CSS", "TypeScript", "HTML5", "JavaScript"]}
              position="right"
            />

          </div>
        </div>
      </section>

      {/* Events Prepared & Community Leadership Section */}
      <section aria-labelledby="events-heading" className="pt-16">
        <h2 
          id="events-heading"
          className="w-fit rounded-none px-4 py-2 text-xl font-semibold bg-transparent border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white shadow-sm mb-4"
        >
          Events Prepared &amp; Led
        </h2>
        <p className="mb-8 text-sm text-zinc-600 dark:text-zinc-400">
          Developer conferences, technical workshops, and community events I organized, hosted, and led as Technical Lead at GDG on Campus - BITS College and community initiatives.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event) => (
            <div 
              key={event.title}
              className="group flex flex-col justify-between rounded-none border border-zinc-200 dark:border-zinc-800 bg-transparent p-5 transition-colors hover:border-emerald-500/40 hover:shadow-lg"
            >
              <div>
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-none border border-zinc-100 dark:border-zinc-800/80 mb-4 bg-zinc-50 dark:bg-zinc-900/40">
                  <Image
                    src={event.image}
                    alt={event.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <span className="w-fit rounded-full bg-zinc-200 dark:bg-zinc-900 px-3 py-1 text-xs text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-800 font-medium">
                  {event.role}
                </span>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors mt-3">
                  {event.title}
                </h3>
                <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mt-1">
                  {event.subtitle}
                </p>
                <p className="mt-2.5 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills & Tech Stack Section */}
      <SkillsSection />

      {/* Projects Section */}
      <section aria-labelledby="projects-heading" className="pt-16">
        <h2 
          id="projects-heading"
          className="w-fit rounded-none px-4 py-2 text-xl font-semibold bg-transparent border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white shadow-sm mb-10"
        >
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard 
            title="YOM Technology" 
            url="https://yomtechsolution.com"
            description="Company website for a software engineering firm — showcases services, solutions, technologies, and a modern approach to building digital products for real-world problems." 
            tag="Web App"
            skills={["Next.js", "React", "TypeScript", "Tailwind CSS"]}
          />
          <ProjectCard 
            title="Lewi Dental Clinic Management" 
            url="https://lewidentalclinic.com/login"
            description="A comprehensive web-based management system for Lewi Speciality Dental Clinic, designed to digitize and streamline the day-to-day operations of a full-service dental clinic. The platform brings essential clinical, administrative, and operational workflows together in one centralized system, supporting efficient clinic management and a more organized patient-care experience." 
            tag="Healthcare System"
            skills={["Full-Stack Web Development", "Healthcare Software", "System Design", "UI/UX Design", "Authentication", "Database Management", "Business Process Automation"]}
          />
          <ProjectCard 
            title="BITS College" 
            url="https://www.bitscollege.edu.et"
            description="Official website for the School of Systems and Technology, presenting software engineering and IT management programs, admissions, and academic information." 
            tag="Website"
            skills={["Institutional Portal", "Responsive Design", "Web Development"]}
          />
          <ProjectCard 
            title="Sheba Extensionz" 
            url="https://sheba-extentionz.vercel.app"
            description="Digital storefront for premium luxury hair extensions, showcasing products and connecting clients to the brand." 
            tag="E-commerce"
            skills={["E-commerce", "Modern UI", "Catalog Showcase"]}
          />
          <ProjectCard 
            title="Nahom Dental Clinic" 
            url="https://nahom-dentali-clinic.vercel.app"
            description="Luxury modern dentistry platform with an online appointment and contact experience for patients to reach the clinic easily." 
            tag="Web App"
            skills={["Web App", "Appointment System", "Patient Portal"]}
          />
          <ProjectCard 
            title="Issue Management System" 
            description="A system for tracking, managing, and resolving issues efficiently across engineering teams and internal operational workflows." 
            tag="Web App"
            skills={["Issue Tracking", "Workflow Automation", "System Design"]}
          />
        </div>
      </section>

      {/* Awards and Certificates Section */}
      <section aria-labelledby="awards-heading" className="pt-16">
        <h2 
          id="awards-heading"
          className="w-fit rounded-none px-4 py-2 text-xl font-semibold bg-transparent border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white shadow-sm mb-4"
        >
          Awards and Certifications
        </h2>
        <p className="mb-8 text-sm text-zinc-600 dark:text-zinc-400">
          A selection of verified certifications and academic programs completed.
        </p>
        <div className="flex justify-center w-full">
          <CertificateDock />
        </div>
      </section>

      {/* Connect & Contact CTA Section */}
      <section aria-labelledby="connect-heading" className="pt-16">
        <h2 
          id="connect-heading"
          className="w-fit rounded-none px-4 py-2 text-xl font-semibold bg-transparent border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white shadow-sm mb-6"
        >
          Let’s Connect
        </h2>
        <div className="rounded-none border border-zinc-200 dark:border-zinc-800 bg-transparent p-6 sm:p-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
              Have a project in mind or want to collaborate?
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
              I’m always open to discussing new opportunities, full-stack product development, or technical partnerships. Feel free to reach out directly.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="mailto:nathenaeltamiratbizuneh@gmail.com"
                className="inline-flex items-center gap-2 rounded-none bg-emerald-600 hover:bg-emerald-500 text-white dark:text-black dark:bg-emerald-400 dark:hover:bg-emerald-300 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <FiMail size={16} /> Get In Touch
              </Link>
              <Link
                href="https://t.me/nathenaeltamirat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-none border border-zinc-200 dark:border-zinc-800 bg-transparent hover:border-emerald-500/40 px-5 py-2.5 text-xs font-semibold text-zinc-800 dark:text-zinc-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <FaTelegram size={16} /> Telegram <FiArrowUpRight size={14} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/nathenael-tamirat/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-none border border-zinc-200 dark:border-zinc-800 bg-transparent hover:border-emerald-500/40 px-5 py-2.5 text-xs font-semibold text-zinc-800 dark:text-zinc-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <FaLinkedin size={16} /> LinkedIn <FiArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Production Footer */}
      <footer className="mt-20 pt-8 border-t border-dashed border-zinc-200 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-500">
        <p>
          &copy; {new Date().getFullYear()} Nathenael Tamirat. All rights reserved.
        </p>
        <p className="flex items-center gap-2">
          <span>Crafted with</span>
          <span className="font-semibold text-zinc-700 dark:text-zinc-300">Next.js &amp; Tailwind CSS</span>
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
      className="p-1.5 rounded text-zinc-500 dark:text-zinc-400 transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 hover:text-emerald-500 dark:hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
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
  skills 
}: { 
  title: string; 
  url?: string; 
  description: string; 
  tag?: string;
  skills?: string[];
}) {
  const card = (
    <div className="group flex h-full flex-col justify-between rounded-none border border-zinc-200 dark:border-zinc-800 bg-transparent p-6 transition-all hover:border-emerald-500/30 hover:shadow-lg focus-within:border-emerald-500/50">
      <div className="flex flex-col gap-4">
        {tag && (
          <span className="w-fit rounded-full bg-zinc-200 dark:bg-zinc-900 px-3 py-1 text-xs text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-800 font-medium">
            {tag}
          </span>
        )}
        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
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
                className="rounded-full bg-zinc-100 dark:bg-zinc-900/80 px-2.5 py-0.5 text-[11px] text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
        {url && (
          <span className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 w-fit border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 rounded-none transition-colors group-hover:bg-emerald-500/20">
            <FiExternalLink size={14} /> Visit Project
          </span>
        )}
      </div>
    </div>
  );

  return url ? (
    <Link 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
    >
      {card}
    </Link>
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
        className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white dark:border-black -translate-x-1/2 z-10 top-6 md:top-1/2 md:-translate-y-1/2 shadow-sm"
      ></div>
      
      {/* Spacer for the other side */}
      <div className="hidden md:block w-1/2"></div>
      
      {/* Content Card */}
      <div className={`w-full md:w-1/2 pl-10 sm:pl-14 md:pl-0 ${position === 'left' ? 'md:ml-[48px]' : 'md:mr-[48px]'} mt-0`}>
        <div className="group flex flex-col justify-between rounded-none border border-zinc-200 dark:border-zinc-800 bg-transparent p-6 transition-all hover:border-emerald-500/30 hover:shadow-lg">
          <div className="flex flex-col gap-y-1">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
              {role}
            </h3>
            <div className="flex flex-wrap justify-between items-start gap-2 mt-1">
              <div className="flex flex-col">
                <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">{company}</p>
                {locationOrType && (
                  <span className="text-xs text-zinc-500 dark:text-zinc-500 mt-0.5">{locationOrType}</span>
                )}
              </div>
              <span className="rounded-full bg-zinc-200 dark:bg-zinc-900 px-3 py-1 text-xs text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-800 whitespace-nowrap">
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
                    className="rounded-full bg-zinc-100 dark:bg-zinc-900/80 px-2.5 py-0.5 text-[11px] text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}

            {proofLink && (
              <Link 
                href={proofLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline w-fit border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 rounded-none transition-colors hover:bg-emerald-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <FiExternalLink size={14} /> {linkText || "View Work Proof"}
              </Link>
            )}
          </div>
        </div>
      </div>
      
    </div>
  );
}
