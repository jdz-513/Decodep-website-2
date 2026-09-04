export interface BrandInfo {
  name: string
  tagline?: string
  motto?: string
  pillars: string[]
  email: string
  phone: string
  website: string
  year: string
  registration: {
    type: string
    status: string
    description: string
  }
}

export interface PillarItem {
  title: string
  description: string
  iconName: string
}

export interface WorkStep {
  step: string
  title: string
  description: string
}

export interface CapabilityItem {
  id: string
  title: string
  tag: string
  shortDesc: string
  fullDesc: string
  deliverables: string[]
  technologies: string[]
  metricLabel: string
  metricValue: string
}

export interface InnovationItem {
  id: string
  title: string
  domain: string
  status: string
  thesis: string
  keyAspects: string[]
  readinessLevel: string
}

export interface InitiativeItem {
  id: string
  title: string
  tag?: string
  date: string
  duration: string
  entry?: string
  teamSize: string
  prize?: string
  problemStatement?: string
  description: string
  status: 'upcoming' | 'ongoing' | 'completed' | 'Upcoming' | 'Ongoing' | 'Completed'
  image?: string
  category?: string
  fee?: string
  format?: string
  tagline?: string
  prizePool?: string
  highlights?: string[]
  isFeatured?: boolean
}

export interface CollaborationParty {
  name: string
  entity: string
  representative: string
  designation: string
  location: string
  contact?: string
}

export interface CollaborationItem {
  id: string
  title: string
  partnerName: string
  partnerLogo?: string
  collaborationType: string
  shortDescription: string
  date?: string
  status?: string
  nature: string
  posterImage?: string
  partyA: CollaborationParty
  partyB: CollaborationParty
  scopes: string[]
  initialInitiative?: string
  purpose?: string
  rolesPartyA?: string[]
  rolesPartyB?: string[]
}

export interface CollaborationInfo extends CollaborationItem {}

