import { Breadcrumbs } from '@/components/breadcrumbs'

type PageIntroProps = {
  title: string
  description: string
  path: `/${string}`
}

export function PageIntro({ title, description, path }: PageIntroProps) {
  return (
    <div className="page-intro">
      <div className="container">
        <Breadcrumbs current={title} path={path} />
        <p className="eyebrow">Nathenael Tamirat</p>
        <h1>{title}</h1>
        <p className="page-intro-text">{description}</p>
      </div>
    </div>
  )
}
