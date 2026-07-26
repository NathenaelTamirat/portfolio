export default function Loading() {
  return (
    <main id="main-content" className="status-page" aria-busy="true">
      <div className="loading-panel">
        <span className="loading-mark" aria-hidden="true" />
        <p>Loading page…</p>
      </div>
    </main>
  )
}
