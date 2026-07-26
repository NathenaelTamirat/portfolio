import type {
  Certificate,
  EducationItem,
  ExperienceItem,
  NavigationItem,
  Skill,
  SocialLink,
} from '@/types/portfolio'

export const person = {
  name: 'Nathenael Tamirat',
  email: 'nathenaeltamiratbizuneh@gmail.com',
  phone: '+251991439979',
  telephoneHref: 'tel:+251991439979',
  emailHref: 'mailto:nathenaeltamiratbizuneh@gmail.com',
  github: 'https://github.com/NathenaelTamirat',
  introduction:
    'I’m a beginner full-stack developer building a solid foundation in modern web development. I work with HTML, CSS, JavaScript, Figma, GitHub, and cloud-based tools, and I’m actively expanding my skills across the full spectrum of frontend and backend technologies. My current focus is mastering frontend development, then progressing into backend engineering, AI integration, system design, and eventually Android app development to build complete, scalable products from end to end. Over the next two years, my goal is to become a fully capable full-stack engineer with the ability to design, build, and ship robust systems across multiple platforms.',
  about:
    'I am a software engineering professional with a focused interest in modern web development and a strong commitment to building solid technical foundations. My primary experience is in front-end engineering, where I work with HTML, CSS, and JavaScript to create structured, maintainable, and user-centric interfaces, supported by design workflows using tools such as Figma. I approach learning and development with a long-term, systematic mindset. I follow a structured roadmap that emphasizes core web fundamentals, accessibility, performance, testing, and production-ready practices. Version control and collaboration are integral to my workflow, and I actively use Git and GitHub to manage code, track progress, and document projects. My broader objective is to grow into a well-rounded full-stack engineer by expanding into back-end development, system architecture, and AI-driven features. I place high value on understanding underlying concepts and internal mechanics rather than relying solely on abstractions or frameworks. I am driven by continuous improvement, practical problem solving, and real-world application. My work reflects clarity, discipline, and a steady progression toward building scalable, reliable software systems.',
} as const

export const navigation: readonly NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Education', href: '/education' },
  { label: 'Experience', href: '/experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Awards', href: '/awards' },
  { label: 'Contact', href: '/contact' },
]

export const skills: readonly Skill[] = [
  { name: 'HTML5', icon: '/assets/icons/HTML5.svg' },
  { name: 'CSS', icon: '/assets/icons/CSS.svg' },
  { name: 'JavaScript', icon: '/assets/icons/Javascript.svg' },
  { name: 'GitHub', icon: '/assets/icons/Github.svg' },
  { name: 'Git', icon: '/assets/icons/Git.svg' },
  { name: 'Google Drive', icon: '/assets/icons/Googledrive.svg' },
  { name: 'Figma', icon: '/assets/icons/Figma.svg' },
  { name: 'Kotlin', icon: '/assets/icons/Kotlin.svg' },
]

export const education: readonly EducationItem[] = [
  {
    period: '2024–2029',
    institution: 'BITS College: School of Systems and Technology',
    qualification: 'Software Engineering Degree',
    description:
      "My years in BITS College is one of the most profound years of my life. It was during my campus years I've built most of my projects and participated in clubs and events. I've made some incredible memories in there and learnt so much and the current version of me was very much shaped because of it.",
  },
  {
    period: '2023 & 2024',
    institution: 'Super Holy Savior School',
    qualification: 'Secondary School',
    description:
      'This was my high school grade 11 and grade 12 years where my inspiration for software Engineering started',
  },
  {
    period: '2012–2022',
    institution: 'Vision Academy',
    qualification: 'Primary and Secondary School',
    description:
      'These years were I grow, learn, adapt to different conditions and Environment.',
  },
]

export const experience: readonly ExperienceItem[] = [
  {
    organization: 'BITS College GDCOC',
    role: 'Technical Lead',
    period: '2025–2026 GC',
    logo: '/assets/images/GDG.svg',
    description:
      'Defined technical vision, selected stack and architecture, lead and mentored developers, prepared and run hackathon events, designed challenges and infrastructure, reviewed code and enforces standards, managed deployment and tools, coordinated with organizers and partners, resolved technical blockers, oversaw timelines and technical risk, optimized developer workflow, ensured scalability security and reliability, documented systems and decisions, represented the tech function in leadership discussions, delivered production ready solutions.',
    skills: [
      'Code Quality',
      'System Architecture',
      'Developer Mentorship',
      'Hackathon Management',
      'Technical Leadership',
      'DevOps Execution',
      'Cross-Team Collaboration',
      'Production Delivery',
    ],
  },
]

export const certificates: readonly Certificate[] = [
  {
    title: 'Code In Place (Python)',
    issuer: 'Stanford University',
    image: '/assets/images/Codeinplace.png',
    imageAlt: 'Stanford Code In Place certificate',
    imageWidth: 1238,
    imageHeight: 1714,
    credentialUrl: 'https://codeinplace.stanford.edu/cip5/certificate/p1oxia',
    description:
      'Learned Python programming fundamentals including variables, loops, and functions. Practiced solving real coding problems and building small projects. Strengthened problem-solving and logical thinking skills.',
  },
  {
    title: 'Programming Fundamentals',
    issuer: 'Udacity',
    image: '/assets/images/Udacity2.jpeg',
    imageAlt: 'Udacity Programming Fundamentals certificate',
    imageWidth: 728,
    imageHeight: 523,
    credentialUrl:
      'https://www.udacity.com/certificate/e/6c3de1ca-12d7-11f0-b448-43b9926fad29',
    description:
      'Learned to write and run basic programs, use variables and loops, and apply functions to solve problems. Built simple projects, debugged code, and got an introduction to HTML, CSS, and JavaScript.',
  },
  {
    title: 'Artificial Intelligence Fundamentals',
    issuer: 'Udacity',
    image: '/assets/images/Udacity1.jpeg',
    imageAlt: 'Udacity Artificial Intelligence Fundamentals certificate',
    imageWidth: 576,
    imageHeight: 478,
    credentialUrl:
      'https://www.udacity.com/certificate/e/6c3de1ca-12d7-11f0-b448-43b9926fad29',
    description:
      'I completed an Artificial Intelligence course from Udacity, where I learned the core foundations of AI, including search algorithms, logic, and probabilistic reasoning. The course focused on building intelligent systems that can solve problems, make decisions, and adapt to complex environments. I gained hands-on experience implementing algorithms such as minimax search and working with concepts like Bayesian networks and optimization techniques.',
  },
  {
    title: 'Android Development Fundamentals',
    issuer: 'Udacity',
    image: '/assets/images/Udacity3.jpeg',
    imageAlt: 'Udacity Android Development Fundamentals certificate',
    imageWidth: 579,
    imageHeight: 385,
    description:
      'completed the Android Developer Fundamentals course, where I learned to build native Android apps using Kotlin and Android Studio. The program covered core components such as activities, fragments, layouts, and the Android lifecycle. I developed hands-on experience with navigation, data storage (Room), and modern architecture patterns like MVVM. This course strengthened my ability to design, build, and maintain scalable and user-friendly Android applications.',
  },
  {
    title: 'Data Analysis Fundamentals',
    issuer: 'Udacity',
    image: '/assets/images/Udacity4.jpeg',
    imageAlt: 'Udacity Data Analysis Fundamentals certificate',
    imageWidth: 631,
    imageHeight: 433,
    description:
      'I completed a Data Analysis Fundamentals course, where I learned how to collect, clean, and interpret data to extract meaningful insights. The course covered essential tools such as spreadsheets, SQL, and basic data visualization techniques. I gained hands-on experience analyzing datasets, identifying patterns, and presenting findings in a clear and structured way. This experience strengthened my ability to make data-driven decisions and communicate insights effectively.',
  },
]

export const socialLinks: readonly SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/NathenaelTamirat',
    icon: '/assets/icons/Github.svg',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nathenael-tamirat/',
    icon: '/assets/icons/linkedin.svg',
    external: true,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/NathenaelTamirat/',
    icon: '/assets/icons/instagram.svg',
    external: true,
  },
  {
    label: 'Email',
    href: 'mailto:nathenaeltamiratbizuneh@gmail.com',
    icon: '/assets/icons/gmail.svg',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/251991439979',
    icon: '/assets/icons/whatsapp.svg',
    external: true,
  },
  {
    label: 'Telegram',
    href: 'https://t.me/nathenaeltamirat',
    icon: '/assets/icons/telegram.svg',
    external: true,
  },
]

export const cvRequestHref =
  'mailto:nathenaeltamiratbizuneh@gmail.com?subject=Request%20for%20CV&body=Hello%20Nathenael,%0D%0A%0D%0AI%20recently%20visited%20your%20personal%20website%20and%20was%20impressed%20by%20your%20work%20in%20web%20development.%20I%20am%20very%20interested%20in%20learning%20more%20about%20your%20experience%20and%20projects.%20Could%20you%20please%20share%20your%20CV%20with%20me%20at%20your%20convenience?%0D%0A%0D%0AThank%20you%20for%20your%20time%20and%20consideration.%0D%0A%0D%0ABest%20regards,'

export const resumeRequestHref =
  'mailto:nathenaeltamiratbizuneh@gmail.com?subject=Request%20for%20Resume&body=Hello%20Nathenael,%0D%0A%0D%0AI%20recently%20visited%20your%20personal%20website%20and%20was%20impressed%20by%20your%20work%20in%20web%20development.%20I%20am%20very%20interested%20in%20learning%20more%20about%20your%20experience%20and%20projects.%20Could%20you%20please%20share%20your%20Resume%20with%20me%20at%20your%20convenience?%0D%0A%0D%0AThank%20you%20for%20your%20time%20and%20consideration.%0D%0A%0D%0ABest%20regards,'
