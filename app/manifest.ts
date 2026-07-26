import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nathenael Tamirat Portfolio',
    short_name: 'NT Portfolio',
    description: 'Software engineering portfolio of Nathenael Tamirat.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#4a17cb',
    icons: [
      {
        src: '/assets/icons/NT.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
  }
}
