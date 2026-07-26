import { PageIntro } from '@/components/page-intro'
import { certificates } from '@/lib/content'
import { pageMetadata } from '@/lib/site'

const details = {
  title: 'Certificates',
  description:
    'A concise, accessible credential index for Nathenael Tamirat’s five completed learning programs.',
  path: '/certificates',
} as const

export const metadata = pageMetadata(details)

export default function CertificatesPage() {
  return (
    <main id="main-content">
      <PageIntro {...details} />
      <section className="section">
        <div className="container narrow">
          <h2>Credential index</h2>
          <p className="lead">
            Five certificates documenting focused learning across software and data
            disciplines.
          </p>
          <dl className="credential-list">
            {certificates.map((certificate) => (
              <div className="card" key={certificate.title}>
                <dt>
                  <span>{certificate.issuer}</span>
                  {certificate.title}
                </dt>
                <dd>
                  <p>{certificate.description}</p>
                  {certificate.credentialUrl ? (
                    <a
                      className="text-link"
                      href={certificate.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Verify credential
                      <span className="sr-only"> for {certificate.title}</span>
                      <span aria-hidden="true"> ↗</span>
                    </a>
                  ) : (
                    <span className="credential-note">Credential link not available</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  )
}
