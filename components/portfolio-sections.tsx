import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import {
  certificates,
  education,
  experience,
  person,
  skills,
  socialLinks,
} from '@/lib/content'
import { SectionHeading } from '@/components/section-heading'

export function SkillsGrid() {
  return (
    <ul className="skills-grid" aria-label="Technical skills and tools">
      {skills.map((skill) => (
        <li className="skill-card" key={skill.name}>
          <Image src={skill.icon} width={64} height={64} alt="" />
          <h3>{skill.name}</h3>
        </li>
      ))}
    </ul>
  )
}

export function EducationTimeline() {
  return (
    <ol className="timeline">
      {education.map((item) => (
        <li key={`${item.institution}-${item.period}`}>
          <article className="card timeline-card">
            <p className="pill">{item.period}</p>
            <h3>{item.institution}</h3>
            <p className="card-subtitle">{item.qualification}</p>
            <p>{item.description}</p>
          </article>
        </li>
      ))}
    </ol>
  )
}

export function ExperienceList() {
  return (
    <div className="experience-list">
      {experience.map((item) => (
        <article className="card experience-card" key={item.role}>
          <div className="experience-heading">
            <Image
              src={item.logo}
              width={84}
              height={84}
              alt={`${item.organization} logo`}
            />
            <div>
              <p className="pill">{item.period}</p>
              <h3>
                {item.organization} — {item.role}
              </h3>
            </div>
          </div>
          <p>{item.description}</p>
          <ul className="tag-list" aria-label="Responsibilities and skills">
            {item.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}

export function CertificateGrid() {
  return (
    <ol className="certificate-grid">
      {certificates.map((certificate, index) => (
        <li key={certificate.title}>
          <article className="card certificate-card">
            <div className="certificate-number" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </div>
            <Image
              className="certificate-image"
              src={certificate.image}
              width={certificate.imageWidth}
              height={certificate.imageHeight}
              sizes="(max-width: 48rem) 92vw, 36rem"
              alt={certificate.imageAlt}
            />
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
                View credential
                <span className="sr-only"> for {certificate.title}</span>
                <span aria-hidden="true"> ↗</span>
              </a>
            ) : (
              <p className="credential-note">Credential link not available</p>
            )}
          </article>
        </li>
      ))}
    </ol>
  )
}

export function ContactPanel() {
  return (
    <div className="card contact-panel">
      <div>
        <p className="eyebrow">Contact information</p>
        <h2>Let’s start a conversation.</h2>
        <p>
          Feel free to reach out to me for collaborations, job opportunities, or just to
          say hello!
        </p>
        <address>
          <a href={person.emailHref}>{person.email}</a>
          <a href={person.telephoneHref}>{person.phone}</a>
        </address>
      </div>
      <nav aria-label="Contact and social profiles">
        <ul className="contact-links">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
              >
                <Image src={link.icon} width={28} height={28} alt="" />
                <span>{link.label}</span>
                <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

type HomeSectionProps = {
  id: string
  eyebrow: string
  title: string
  description?: string
  href: `/${string}`
  linkLabel: string
  children: ReactNode
}

export function HomeSection({
  id,
  eyebrow,
  title,
  description,
  href,
  linkLabel,
  children,
}: HomeSectionProps) {
  return (
    <section className="section" id={id}>
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        {children}
        <div className="section-link">
          <Link className="text-link" href={href}>
            {linkLabel} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
