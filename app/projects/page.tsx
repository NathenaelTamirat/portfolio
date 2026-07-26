import Link from 'next/link'
import { PageIntro } from '@/components/page-intro'
import { pageMetadata } from '@/lib/site'

const details = {
  title: 'Projects',
  description:
    'A dedicated space for Nathenael Tamirat’s future documented software projects.',
  path: '/projects',
} as const

export const metadata = pageMetadata(details)

export default function ProjectsPage() {
  return (
    <main id="main-content">
      <PageIntro {...details} />
      <section className="section">
        <div className="container narrow">
          <div className="card empty-state">
            <p className="empty-state-mark" aria-hidden="true">
              {'{…}'}
            </p>
            <h2>Projects are coming soon.</h2>
            <p>
              I’m preparing real projects with clear documentation and meaningful context.
              There are no published projects to show yet, and I won’t substitute invented
              examples.
            </p>
            <Link className="button" href="/contact">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
