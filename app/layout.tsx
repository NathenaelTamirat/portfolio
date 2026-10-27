import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { HeaderControls } from "./components/HeaderControls";
import { LanguageProvider } from "./context/LanguageContext";
import { translations } from "./i18n/translations";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nathenaeltamirat.dev";

// Rule 55 & 132: Respect safe areas and match browser theme color
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

const metaTitle = "Nathenael Tamirat | Software Engineer & Full-Stack Developer";
const metaDescription =
  "Nathenael Tamirat is a software engineer building high-performance web apps, healthcare systems, and scalable cloud platforms with TypeScript, React, and Node.";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: metaTitle,
    template: "%s | Nathenael Tamirat",
  },
  description: metaDescription,
  applicationName: "Nathenael Tamirat Portfolio",
  keywords: [
    "Nathenael Tamirat",
    "Software Engineer",
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "TypeScript",
    "JavaScript",
    "Rust",
    "SQL",
    "React",
    "Next.js",
    "React Native",
    "Tailwind CSS",
    "Node.js",
    "Hono",
    "Express",
    "NestJS",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Supabase",
    "Prisma",
    "Docker",
    "GitHub Actions",
    "AWS",
    "Google Cloud Platform",
    "Vercel",
    "CI/CD",
    "Clinical Management Systems",
    "Healthcare Software",
    "Addis Ababa",
    "Ethiopia",
  ],
  authors: [{ name: "Nathenael Tamirat", url: "https://github.com/NathenaelTamirat" }],
  creator: "Nathenael Tamirat",
  publisher: "Nathenael Tamirat",
  alternates: {
    canonical: "/",
    languages: {
      "en": "/",
      "zh": "/?lang=zh",
      "hi": "/?lang=hi",
      "es": "/?lang=es",
      "de": "/?lang=de",
      "fr": "/?lang=fr",
      "ja": "/?lang=ja",
      "ru": "/?lang=ru",
      "pt": "/?lang=pt",
      "ko": "/?lang=ko",
      "am": "/?lang=am",
      "x-default": "/",
    },
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: [
      "zh_CN",
      "hi_IN",
      "es_ES",
      "de_DE",
      "fr_FR",
      "ja_JP",
      "ru_RU",
      "pt_BR",
      "ko_KR",
      "am_ET",
    ],
    url: baseUrl,
    siteName: "Nathenael Tamirat",
    title: metaTitle,
    description: metaDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Nathenael Tamirat — Software Engineer & Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
    creator: "@Nathenaeltamira",
    images: ["/twitter-image"],
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const structuredDataGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${baseUrl}/#profilepage`,
      url: baseUrl,
      name: metaTitle,
      description: metaDescription,
      inLanguage: "en",
      isPartOf: {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "Nathenael Tamirat Portfolio",
      },
      mainEntity: {
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
        name: "Nathenael Tamirat",
        alternateName: ["Nathenael Tamirat Bizuneh", "Nati Tamirat"],
        jobTitle: "Software Engineer & Full-Stack Developer",
        description: metaDescription,
        url: baseUrl,
        image: `${baseUrl}/Nathenael.jpeg`,
        email: "mailto:nathenaeltamiratbizuneh@gmail.com",
        telephone: "+251991439979",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Addis Ababa",
          addressCountry: "ET",
        },
        sameAs: [
          "https://github.com/NathenaelTamirat",
          "https://www.linkedin.com/in/nathenael-tamirat/",
          "https://x.com/Nathenaeltamira",
          "https://t.me/nathenaeltamirat",
          "https://www.tiktok.com/@nathenaeltamirat",
          "https://www.instagram.com/nathenaeltamirat",
        ],
        knowsLanguage: ["en", "am"],
        worksFor: [
          {
            "@type": "MedicalOrganization",
            name: "Lewi Speciality Dental Clinic",
            url: "https://lewidentalclinic.com",
          },
          {
            "@type": "Organization",
            name: "Mentor Knowledge Solutions PLC",
          },
        ],
        alumniOf: [
          {
            "@type": "EducationalOrganization",
            name: "Stanford University Code in Place",
            url: "https://codeinplace.stanford.edu",
          },
          {
            "@type": "EducationalOrganization",
            name: "ALX Africa",
            url: "https://www.alxafrica.com",
          },
          {
            "@type": "EducationalOrganization",
            name: "BITS College",
            url: "https://www.bitscollege.edu.et",
          },
        ],
        hasOccupation: {
          "@type": "Occupation",
          name: "Software Engineer",
          occupationalCategory: "15-1252.00",
          skills:
            "Full-Stack Web Development, TypeScript, React, Next.js, Node.js, SQL, PostgreSQL, Cloud Infrastructure, Docker, CI/CD",
        },
        knowsAbout: [
          "Software Engineering",
          "Full-Stack Web Development",
          "TypeScript",
          "JavaScript",
          "Rust",
          "SQL",
          "React",
          "Next.js",
          "React Native",
          "Tailwind CSS",
          "HTML5",
          "CSS3",
          "Node.js",
          "Hono",
          "Express",
          "NestJS",
          "PostgreSQL",
          "MongoDB",
          "Redis",
          "Supabase",
          "Prisma",
          "Docker",
          "GitHub Actions",
          "AWS",
          "Google Cloud Platform (GCP)",
          "Vercel",
          "VPS Deployment",
          "CI/CD Pipelines",
          "iOS App Store Deployment",
          "Google Play Store Deployment",
          "TestFlight Beta Distribution",
          "Clinical Management Systems",
          "System Architecture",
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: "Nathenael Tamirat",
      publisher: {
        "@id": `${baseUrl}/#person`,
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: baseUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: translations.en.faq.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataGraph) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-white text-zinc-900 selection:bg-emerald-500/30 selection:text-emerald-800 dark:bg-black dark:text-white dark:selection:text-emerald-200 min-h-screen`}
      >
        {/* Rule 80: Skip to Content Link for Accessibility (WAI-ARIA Pattern) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 rounded bg-emerald-500 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-black shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black"
        >
          Skip to Content
        </a>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <HeaderControls />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
