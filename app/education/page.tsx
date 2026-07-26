import { PageIntro } from '@/components/page-intro'
import { EducationTimeline } from '@/components/portfolio-sections'
import { pageMetadata } from '@/lib/site'

const details = {
  title: 'Education',
  description:
    'Nathenael Tamirat’s education journey from primary school through software engineering studies at BITS College.',
  path: '/education',
} as const

export const metadata = pageMetadata(details)

export default function EducationPage() {
  return (
    <main id="main-content">
      <PageIntro {...details} />
      <section className="section">
        <div className="container">
          <h2 className="sr-only">Education timeline</h2>
          <EducationTimeline />
        </div>
      </section>
    </main>
  )
}
