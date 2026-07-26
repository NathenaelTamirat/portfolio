import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'

const paths = [
  '',
  '/about',
  '/skills',
  '/education',
  '/experience',
  '/projects',
  '/awards',
  '/certificates',
  '/contact',
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: path === '' ? 'monthly' : 'yearly',
    priority: path === '' ? 1 : 0.7,
  }))
}
