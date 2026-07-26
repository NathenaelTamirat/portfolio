import Link from 'next/link'
import { PageIntro } from '@/components/page-intro'
import { CertificateGrid } from '@/components/portfolio-sections'
import { pageMetadata } from '@/lib/site'

const details = {
  title: 'Awards & Certifications',
  description:
    'A complete overview of Nathenael Tamirat’s five learning credentials across programming, AI, Android development, and data analysis.',
  path: '/awards',
} as const

export const metadata = pageMetadata(details)

export default function AwardsPage() {
  return (
    <main id="main-content">
      <PageIntro {...details} />
      <section className="section">
        <div className="container">
          <h2 className="sr-only">Credentials</h2>
          <CertificateGrid />
          <p className="route-note">
            Looking for a concise credential-only view?{' '}
            <Link className="text-link" href="/certificates">
              Visit certificates
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  )
}
