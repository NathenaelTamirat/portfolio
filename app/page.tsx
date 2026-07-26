import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CertificateCarousel } from '@/components/certificate-carousel'
import {
  ContactPanel,
  EducationTimeline,
  ExperienceList,
  HomeSection,
  SkillsGrid,
} from '@/components/portfolio-sections'
import { certificates, cvRequestHref, person, resumeRequestHref } from '@/lib/content'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: { absolute: site.title },
  description: site.description,
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-mark" aria-hidden="true">
            <Image
              src="/assets/images/logo.png"
              width={1024}
              height={1024}
              sizes="(max-width: 760px) 180px, 320px"
              alt=""
              preload
            />
          </div>
          <div className="hero-copy">
            <p className="eyebrow">Software engineering portfolio</p>
            <h1 id="hero-title">
              Hello, I’m <span>Nathenael Tamirat.</span>
            </h1>
            <p>{person.introduction}</p>
            <div className="button-row">
              <Link className="button" href="/about">
                About me
              </Link>
              <Link className="button button--secondary" href="/contact">
                Contact me
              </Link>
            </div>
          </div>
        </div>
      </section>

      <HomeSection
        id="about"
        eyebrow="About"
        title="A disciplined path toward full-stack engineering"
        href="/about"
        linkLabel="More about me"
      >
        <div className="card about-card">
          <Image
            className="about-photo"
            src="/assets/images/Nathenael.jpeg"
            width={1024}
            height={1536}
            sizes="(max-width: 48rem) 10rem, 14rem"
            alt="Portrait of Nathenael Tamirat"
          />
          <div>
            <p>{person.about}</p>
            <dl className="profile-details">
              <div>
                <dt>Name</dt>
                <dd>{person.name}</dd>
              </div>
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
          </div>
          <div className="button-row">
            <a className="button" href={cvRequestHref}>
              Request my CV
            </a>
            <a className="button button--secondary" href={resumeRequestHref}>
              Request my résumé
            </a>
          </div>
        </div>
      </HomeSection>

      <HomeSection
        id="skills"
        eyebrow="Capabilities"
        title="My skills and tools"
        href="/skills"
        linkLabel="Explore my skills"
      >
        <SkillsGrid />
      </HomeSection>

      <HomeSection
        id="education"
        eyebrow="Learning"
        title="Education"
        href="/education"
        linkLabel="View my education"
      >
        <EducationTimeline />
      </HomeSection>

      <HomeSection
        id="experience"
        eyebrow="Leadership"
        title="Experience"
        href="/experience"
        linkLabel="View my experience"
      >
        <ExperienceList />
      </HomeSection>

      <HomeSection
        id="projects"
        eyebrow="Work in progress"
        title="Projects are coming soon"
        description="I’m preparing documented work for this portfolio. I’ll publish it here when it is ready to share."
        href="/projects"
        linkLabel="Visit the projects page"
      >
        <div className="card coming-soon-card">
          <span aria-hidden="true">⌁</span>
          <p>
            No projects are published yet. This space is reserved for real, verifiable
            work—not placeholders.
          </p>
        </div>
      </HomeSection>

      <HomeSection
        id="awards"
        eyebrow="Continuous learning"
        title="Awards and certifications"
        href="/awards"
        linkLabel="View all credentials"
      >
        <CertificateCarousel certificates={certificates} />
      </HomeSection>

      <HomeSection
        id="contact"
        eyebrow="Get in touch"
        title="Contact"
        href="/contact"
        linkLabel="View contact details"
      >
        <ContactPanel />
      </HomeSection>
    </main>
  )
}
