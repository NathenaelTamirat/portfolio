import { PageIntro } from '@/components/page-intro'
import { ExperienceList } from '@/components/portfolio-sections'
import { pageMetadata } from '@/lib/site'

const details = {
  title: 'Experience',
  description:
    'Technical leadership experience, responsibilities, and practical engineering skills developed at BITS College GDCOC.',
  path: '/experience',
} as const

export const metadata = pageMetadata(details)

export default function ExperiencePage() {
  return (
    <main id="main-content">
      <PageIntro {...details} />
      <section className="section">
        <div className="container">
          <h2 className="sr-only">Professional experience</h2>
          <ExperienceList />
        </div>
      </section>
    </main>
  )
}
