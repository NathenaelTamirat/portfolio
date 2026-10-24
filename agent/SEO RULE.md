1. Technical SEO Foundation
Before search engines can rank your pages, their crawlers need to find, render, and index your code without friction.
Crawlability & Indexing: Submit a clean sitemap.xml via Google Search Console and use robots.txt to block private or duplicate routes (like /admin, /api, or internal search results), never your public pages or CSS/JS assets.
Rendering Strategy (SSR & SSG): Serve critical content, metadata, and links in the initial HTML payload using Server-Side Rendering (SSR) or Static Site Generation (SSG). Relying purely on client-side JavaScript slows down indexing and causes AI crawlers to miss your content entirely.
Site Architecture & URLs: Keep important pages within three clicks of the homepage. Use short, descriptive, lowercase slugs separated by hyphens (/complete-seo-guide) rather than dynamic parameters (/page?id=402).
Canonicalization & Redirects: Place a self-referencing <link rel="canonical"> tag on every indexable page to prevent duplicate content penalties from URL parameters or staging environments. Use 301 permanent redirects for moved pages and eliminate redirect chains.
Structured Data (Schema Markup): Implement JSON-LD schema (Article, Product, FAQPage, Organization, BreadcrumbList) in your <head> so search engines and AI engines understand your entities and award rich snippets in search results.
Security & Mobile Parity: Enforce HTTPS across the entire domain. Since Google uses mobile-first indexing, ensure your mobile layout contains the exact same content, structured data, and internal links as your desktop version.
Core Web Vitals
Google evaluates real-world user experience using three specific performance metrics:
Metric	Target Score	What It Measures & How to Fix It
LCP (Largest Contentful Paint)	Under 2.5s	Loading speed of the main visual element. Serve hero images in WebP/AVIF, add fetchpriority="high" to the main image, use a CDN, and cut server response times (TTFB).
INP (Interaction to Next Paint)	Under 200ms	Interactivity responsiveness when a user clicks or taps. Break up long main-thread JavaScript tasks and defer non-essential third-party scripts.
CLS (Cumulative Layout Shift)	Under 0.1	Visual stability (preventing elements from jumping around as the page loads). Always set explicit width and height attributes on images, videos, and ad containers.
2. Keyword Research & Search Intent
Modern search algorithms rank pages based on how well they satisfy Search Intent—the underlying goal behind a user's query—rather than how many times a keyword is repeated.
Intent Type	User Goal	Best Content Format
Informational	Wants to learn or solve a specific problem ("how to configure GitHub Actions").	Step-by-step tutorials, documentation, code examples, interactive guides.
Commercial	Researching and comparing options before deciding ("best PostgreSQL hosting providers").	Comparison tables, benchmark breakdowns, pros/cons reviews.
Transactional	Ready to buy, sign up, or download ("register .com domain").	Product landing pages, pricing pages, interactive calculators, direct CTAs.
Navigational	Looking for a specific website or login page ("Vercel dashboard").	Homepage, dedicated feature pages, clean sitelinks.
Target Long-Tail Keywords First: Newer domains struggle to rank for broad, high-volume terms ("cloud hosting"). Target specific, lower-competition queries with high intent ("how to deploy a Python FastAPI app on a VPS") to build initial traction.
Build Topical Authority (Topic Clusters): Instead of writing isolated articles, create a comprehensive Pillar Page covering a broad topic and link it to 5–15 supporting Cluster Pages that answer every specific sub-question in that niche.
Prevent Keyword Cannibalization: Map one primary keyword cluster per URL. If two pages on your site target the exact same intent, merge them into one stronger page and 301-redirect the weaker URL.
3. On-Page SEO & Content Execution
On-page SEO structures your content so both human readers and search algorithms can extract value immediately.
Title Tags (<title>): Keep between 50–60 characters. Front-load your primary keyword and include a compelling hook or value proposition.
Meta Descriptions: Keep between 150–160 characters. While not a direct ranking factor, a clear, action-oriented summary improves your Click-Through Rate (CTR) from the search results page.
Header Hierarchy (H1–H6): Use exactly one H1 tag per page matching the core topic. Structure subsections logically using H2 and H3 tags to create a scannable outline.
Information Gain & E-E-A-T: Google prioritizes Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T). Generic, regurgitated content gets filtered out. Stand out by adding Information Gain: original data, real-world test results, custom diagrams, working code snippets, or firsthand case studies.
Answer-First Formatting (AEO / GEO): To rank in Featured Snippets and AI Overviews, answer the core question directly in 40–60 words right below the relevant H2 heading before diving into deeper explanation.
Internal Linking: Link between related pages on your site using descriptive anchor text (e.g., use "see our database indexing benchmark" instead of "click here"). Every new page should receive links from at least 2–3 existing pages so there are no orphan pages.
Image Optimization: Use descriptive filenames (postgres-indexing-architecture.webp) instead of IMG_001.png, compress files under 100KB where possible, and write clear alt text for accessibility and image search.
4. Off-Page SEO, Local SEO & Measurement
Off-page signals prove to search engines that the rest of the web trusts your site.
Quality Backlinks Over Quantity: A single contextual link from a respected, relevant industry site outweighs hundreds of low-quality directory links. Never buy spammy link packages, as they trigger manual penalties.
Linkable Assets: The most sustainable way to earn backlinks is to build free micro-tools, calculators, open-source templates, or original industry benchmark reports that other writers naturally cite as sources.
Digital PR & Unlinked Mentions: Share original projects on developer communities, industry forums, and newsletters. Track brand mentions across the web and politely ask authors to turn plain-text mentions of your brand into clickable links.
Local SEO (If Targeting a Specific City/Region): Claim and fully verify your Google Business Profile, keep your NAP (Name, Address, Phone Number) identical across all directories, create location-specific landing pages, and actively collect customer reviews.