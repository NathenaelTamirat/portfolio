'use client'

import Image from 'next/image'
import type { KeyboardEvent } from 'react'
import { useCarousel } from '@/hooks/use-carousel'
import type { Certificate } from '@/types/portfolio'

type CertificateCarouselProps = {
  certificates: readonly Certificate[]
}

export function CertificateCarousel({ certificates }: CertificateCarouselProps) {
  const { currentIndex, goTo, next, previous } = useCarousel(certificates.length)
  const certificate = certificates[currentIndex]

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === 'ArrowLeft') previous()
    if (event.key === 'ArrowRight') next()
  }

  return (
    <section
      className="certificate-carousel"
      aria-roledescription="carousel"
      aria-label="Certificates"
      onKeyDown={handleKeyDown}
    >
      <button
        className="carousel-arrow"
        type="button"
        onClick={previous}
        aria-label="Previous certificate"
      >
        <span aria-hidden="true">‹</span>
      </button>

      <article key={certificate.title} className="card carousel-card" aria-live="polite">
        <div className="carousel-image">
          <Image
            src={certificate.image}
            width={certificate.imageWidth}
            height={certificate.imageHeight}
            sizes="(max-width: 48rem) 82vw, 34rem"
            alt={certificate.imageAlt}
          />
        </div>
        <div className="carousel-copy">
          <p className="certificate-issuer">{certificate.issuer}</p>
          <h3>{certificate.title}</h3>
          <p>{certificate.description}</p>
          {certificate.credentialUrl ? (
            <a
              className="text-link"
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View credential <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <p className="credential-note">Credential link not available</p>
          )}
        </div>
      </article>

      <button
        className="carousel-arrow"
        type="button"
        onClick={next}
        aria-label="Next certificate"
      >
        <span aria-hidden="true">›</span>
      </button>

      <div className="carousel-dots" aria-label="Choose a certificate">
        {certificates.map((item, index) => (
          <button
            key={item.title}
            type="button"
            className={index === currentIndex ? 'is-current' : undefined}
            onClick={() => goTo(index)}
            aria-label={`Show certificate ${index + 1}: ${item.title}`}
            aria-current={index === currentIndex ? 'true' : undefined}
          />
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        Certificate {currentIndex + 1} of {certificates.length}
      </p>
    </section>
  )
}
