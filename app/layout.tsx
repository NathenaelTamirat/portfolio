import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Nathenael Tamirat | Software Engineer",
    template: "%s | Nathenael Tamirat",
  },
  description:
    "Portfolio of Nathenael Tamirat — Software Engineer specializing in full-stack web applications, healthcare platforms, and turning complex ideas into high-performance software.",
  keywords: [
    "Nathenael Tamirat",
    "Software Engineer",
    "Full-Stack Developer",
    "Frontend Developer",
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
    "Google Cloud Platform",
    "Vercel",
    "CI/CD",
    "iOS App Store",
    "Google Play Store",
    "TestFlight",
    "Healthcare Software",
    "Addis Ababa",
    "Ethiopia",
  ],
  authors: [{ name: "Nathenael Tamirat", url: "https://github.com/NathenaelTamirat" }],
  creator: "Nathenael Tamirat",
  publisher: "Nathenael Tamirat",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Nathenael Tamirat",
    title: "Nathenael Tamirat | Software Engineer",
    description:
      "Software Engineer specializing in full-stack web applications, clinical management systems, and high-performance digital products.",
    images: [
      {
        url: "/Nathenael.jpeg",
        width: 800,
        height: 800,
        alt: "Nathenael Tamirat — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nathenael Tamirat | Software Engineer",
    description:
      "Software Engineer specializing in full-stack web applications, clinical management systems, and high-performance digital products.",
    creator: "@Nathenaeltamira",
    images: ["/Nathenael.jpeg"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nathenael Tamirat",
  jobTitle: "Software Engineer",
  url: baseUrl,
  image: `${baseUrl}/Nathenael.jpeg`,
  sameAs: [
    "https://github.com/NathenaelTamirat",
    "https://www.linkedin.com/in/nathenael-tamirat/",
    "https://x.com/Nathenaeltamira",
    "https://t.me/nathenaeltamirat",
  ],
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
    "Amharic",
    "English",
    "Clinical Management Systems",
    "System Architecture",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-white text-zinc-900 selection:bg-emerald-500/30 selection:text-emerald-800 dark:bg-black dark:text-white dark:selection:text-emerald-200 min-h-screen`}
      >
        {/* Skip to Content Link for Accessibility (WAI-ARIA) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 rounded bg-emerald-500 px-4 py-2 text-xs font-bold uppercase tracking-wider text-black shadow-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
        >
          Skip to content
        </a>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
