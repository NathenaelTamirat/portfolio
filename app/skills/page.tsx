import { PageIntro } from '@/components/page-intro'
import { SkillsGrid } from '@/components/portfolio-sections'
import { pageMetadata } from '@/lib/site'

const details = {
  title: 'Skills',
  description:
    'The technologies and tools Nathenael Tamirat currently uses while building a foundation in full-stack development.',
  path: '/skills',
} as const

export const metadata = pageMetadata(details)

export default function SkillsPage() {
  return (
    <main id="main-content">
      <PageIntro {...details} />
      <section className="section">
        <div className="container">
          <h2 className="sr-only">Technical skills and tools</h2>
          <SkillsGrid />
        </div>
      </section>
    </main>
  )
}
