import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { JsonLd } from '@/components/json-ld'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { person } from '@/lib/content'
import { site } from '@/lib/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${person.name}`,
  },
  description: site.description,
  applicationName: `${person.name} Portfolio`,
  authors: [{ name: person.name }],
  creator: person.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: { icon: '/assets/icons/NT.svg' },
  openGraph: {
    title: site.title,
    description: site.description,
    url: '/',
    siteName: site.name,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/assets/images/logo.png',
        width: 1024,
        height: 1024,
        alt: 'Nathenael Tamirat portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: site.title,
    description: site.description,
    images: ['/assets/images/logo.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#4a17cb',
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <JsonLd
          data={[
            {
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: person.name,
              email: person.email,
              telephone: person.phone,
              url: site.url,
              sameAs: [
                person.github,
                'https://www.linkedin.com/in/nathenael-tamirat/',
                'https://www.instagram.com/NathenaelTamirat/',
              ],
              knowsAbout: ['HTML', 'CSS', 'JavaScript', 'Figma', 'Git', 'Kotlin'],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: `${person.name} Portfolio`,
              url: site.url,
              description: site.description,
              inLanguage: 'en',
            },
          ]}
        />
      </body>
    </html>
  )
}
