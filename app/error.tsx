'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main id="main-content" className="status-page">
      <div className="card empty-state">
        <p className="eyebrow">Unexpected error</p>
        <h1>Something went wrong</h1>
        <p>Please try loading this part of the site again.</p>
        <button className="button" type="button" onClick={reset}>
          Try again
        </button>
      </div>
    </main>
  )
}
