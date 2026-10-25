# Nathenael Tamirat — Personal Portfolio & Technical Showcase

[![Next.js](https://img.shields.io/badge/Next.js-16.2.12-black?style=flat&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](LICENSE)

High-performance personal developer portfolio and engineering showcase for **Nathenael Tamirat** — Software Engineer & Full-Stack Developer based in Addis Ababa, Ethiopia.

Live Website: [nathenaeltamirat.dev](https://nathenaeltamirat.dev)

---

## 🌟 Key Features

- **SEO & Discoverability Architecture**:
  - Full static generation (SSG) for all pages and assets.
  - JSON-LD `@graph` schema markup implementing `ProfilePage`, `Person`, `WebSite`, `BreadcrumbList`, and `FAQPage`.
  - Statically generated OpenGraph (1200×630) and Twitter image cards.
  - Comprehensive `sitemap.xml` with bidirectional multi-language alternate hreflang tags.
  - Automated `robots.txt` and PWA `manifest.webmanifest`.
  - Optimized title tags and meta descriptions within the recommended 50–60 and 150–160 character thresholds.
- **Answer-First Formatting (AEO / GEO)**:
  - Interactive, accessible FAQ accordion section directly addressing queries for AI search engines (Perplexity, ChatGPT, Google AI Overviews).
- **Internationalization (i18n)**:
  - Client and URL-persisted deep-linking supporting 11 languages:
    - English (`en`), Chinese (`zh`), Hindi (`hi`), Spanish (`es`), German (`de`), French (`fr`), Japanese (`ja`), Russian (`ru`), Portuguese (`pt`), Korean (`ko`), and Amharic (`am`).
  - Automatic language detection from browser preferences with fallback.
- **Accessibility & WAI-ARIA**:
  - Skip-to-content navigation for assistive tech.
  - 44px+ mobile touch hit targets across controls and navigation docks.
  - Visible focus rings with `:focus-visible` and `scroll-mt-24` anchor alignment.
  - Single semantic `H1` structure with complete mobile and desktop viewport parity.
- **Performance & Core Web Vitals**:
  - 100% static prerendered routes.
  - AVIF and WebP image generation via Next.js Image Optimization.
  - Zero hydration layout shifts (CLS < 0.1).
  - High-priority preloading for above-the-fold hero imagery (LCP < 2.5s).

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes) (Light / Dark mode)
- **Type Checking**: [TypeScript](https://www.typescriptlang.org/)

---

## 🚀 Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/NathenaelTamirat/portfolio.git
cd portfolio
npm install
```

Run the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

Build for production:

```bash
npm run build
npm run start
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
