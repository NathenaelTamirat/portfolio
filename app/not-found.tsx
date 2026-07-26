import Link from 'next/link'

export default function NotFound() {
  return (
    <main id="main-content" className="status-page">
      <div className="card empty-state">
        <p className="eyebrow">404 error</p>
        <h1>Page not found</h1>
        <p>The page you requested does not exist or may have moved.</p>
        <Link className="button" href="/">
          Return home
        </Link>
      </div>
    </main>
  )
}
