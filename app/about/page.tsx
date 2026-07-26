import Image from 'next/image'
import { PageIntro } from '@/components/page-intro'
import { cvRequestHref, person, resumeRequestHref } from '@/lib/content'
import { pageMetadata } from '@/lib/site'

const details = {
  title: 'About',
  description:
    'Learn about Nathenael Tamirat’s approach to software engineering, current focus, and long-term development goals.',
  path: '/about',
} as const

export const metadata = pageMetadata(details)

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageIntro {...details} />
      <section className="section">
        <div className="container narrow">
          <article className="card about-page-card">
            <Image
              src="/assets/images/Nathenael.jpeg"
              width={1024}
              height={1536}
              sizes="(max-width: 48rem) 8rem, 11.25rem"
              alt="Portrait of Nathenael Tamirat"
            />
            <div>
              <h2>Building with clarity and strong foundations</h2>
              <p>{person.about}</p>
              <dl className="profile-details">
                <div>
                  <dt>Email</dt>
                  <dd>
                    <a href={person.emailHref}>{person.email}</a>
                  </dd>
                </div>
                <div>
                  <dt>Phone</dt>
                  <dd>
                    <a href={person.telephoneHref}>{person.phone}</a>
                  </dd>
                </div>
                <div>
                  <dt>GitHub</dt>
                  <dd>
                    <a href={person.github}>NathenaelTamirat</a>
                  </dd>
                </div>
              </dl>
              <div className="button-row">
                <a className="button" href={cvRequestHref}>
                  Request my CV
                </a>
                <a className="button button--secondary" href={resumeRequestHref}>
                  Request my résumé
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}
