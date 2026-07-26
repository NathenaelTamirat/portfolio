import Image from 'next/image'
import Link from 'next/link'
import { person, socialLinks } from '@/lib/content'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="footer-name" href="/">
            {person.name}
          </Link>
          <p>Building strong foundations for thoughtful, reliable software.</p>
        </div>
        <nav aria-label="Social links">
          <ul className="social-links">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-label={link.label}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer' : undefined}
                >
                  <Image src={link.icon} width={24} height={24} alt="" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="copyright">
        © {new Date().getFullYear()} {person.name}. All rights reserved.
      </p>
    </footer>
  )
}
