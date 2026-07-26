import type { Metadata } from 'next'
import type { PageDetails } from '@/types/portfolio'
import { normalizeUrl } from '@/utils/urls'

const fallbackUrl = 'http://localhost:3000'

export const site = {
  name: 'Nathenael Tamirat',
  title: 'Nathenael Tamirat | Software Engineering Portfolio',
  description:
    'Portfolio of Nathenael Tamirat, showcasing skills, education, experience, and certifications in software engineering and web development.',
  url: normalizeUrl(
    process.env.NEXT_PUBLIC_SITE_URL ??
      process.env.VERCEL_PROJECT_PRODUCTION_URL ??
      fallbackUrl,
  ),
} as const

export function pageMetadata({ title, description, path }: PageDetails): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: 'website',
      siteName: site.name,
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  }
}
