import { PageIntro } from '@/components/page-intro'
import { ContactPanel } from '@/components/portfolio-sections'
import { pageMetadata } from '@/lib/site'

const details = {
  title: 'Contact',
  description:
    'Contact Nathenael Tamirat by email, phone, or social profile for collaborations, opportunities, or conversation.',
  path: '/contact',
} as const

export const metadata = pageMetadata(details)

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageIntro {...details} />
      <section className="section">
        <div className="container narrow">
          <ContactPanel />
        </div>
      </section>
    </main>
  )
}
