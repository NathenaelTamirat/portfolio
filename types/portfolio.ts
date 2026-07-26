export type NavigationItem = {
  readonly label: string
  readonly href: `/${string}` | '/'
}

export type Skill = {
  readonly name: string
  readonly icon: string
}

export type EducationItem = {
  readonly period: string
  readonly institution: string
  readonly qualification: string
  readonly description: string
}

export type ExperienceItem = {
  readonly organization: string
  readonly role: string
  readonly period: string
  readonly description: string
  readonly skills: readonly string[]
  readonly logo: string
}

export type Certificate = {
  readonly title: string
  readonly issuer: string
  readonly description: string
  readonly image: string
  readonly imageAlt: string
  readonly imageWidth: number
  readonly imageHeight: number
  readonly credentialUrl?: string
}

export type SocialLink = {
  readonly label: string
  readonly href: string
  readonly icon: string
  readonly external?: boolean
}

export type PageDetails = {
  readonly title: string
  readonly description: string
  readonly path: `/${string}` | '/'
}
