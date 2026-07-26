export function normalizeUrl(value: string) {
  const withProtocol = /^https?:\/\//.test(value) ? value : `https://${value}`
  return withProtocol.replace(/\/+$/, '')
}
