import Link from 'next/link'
import { JsonLd } from '@/components/json-ld'
import { site } from '@/lib/site'

type BreadcrumbsProps = {
  current: string
  path: `/${string}`
}

export function Breadcrumbs({ current, path }: BreadcrumbsProps) {
  const items = [
    { name: 'Home', url: site.url },
    { name: current, url: `${site.url}${path}` },
  ]

  return (
    <>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li aria-current="page">{current}</li>
        </ol>
      </nav>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        }}
      />
    </>
  )
}
