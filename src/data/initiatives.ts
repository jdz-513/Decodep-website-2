export type InitiativeStatus = 'UPCOMING' | 'ONGOING' | 'COMPLETED'

export interface InitiativeItem {
  id: string
  title: string
  category: string
  description: string
  image: string
  date: string
  tag?: string
  startDate?: string
  endDate?: string
  displayDate?: string
  fullDate?: string
  duration?: string
  entry?: string
  prize?: string
  teamSize?: string
  problemStatement?: string
  status: InitiativeStatus
  link: string
  featured?: boolean
  published?: boolean
}

export const initiatives: InitiativeItem[] = [
  {
    id: 'hackday-1',
    title: 'HACKDAY 1.0',
    category: 'Hackathon',
    tag: 'Featured Hackathon',
    description: 'An intensive 8-hour sprint where developers and students solve practical technical challenges and build functional solutions.',
    image: '/assets/hackday-poster.png',
    date: '20 September 2026',
    startDate: '2026-09-20T09:00:00',
    endDate: '2026-09-20T17:00:00',
    displayDate: 'SEP 20, 2026',
    fullDate: 'September 20, 2026',
    duration: '8 Hours',
    entry: 'Free Registration',
    prize: '$300 Cash Prize',
    teamSize: 'Individual or Team of 2',
    problemStatement: 'Problem Statement revealed on Event Day',
    status: 'UPCOMING',
    link: '/initiatives',
    featured: true,
    published: true,
  },
  {
    id: 'ai-system-design-masterclass',
    title: 'AI & System Design Masterclass',
    category: 'Workshop',
    description: 'Hands-on workshop exploring practical vector workflows, agentic pipelines, and modern full-stack system architecture.',
    image: '/assets/decodep-banner.png',
    date: 'October 2026',
    startDate: '2026-10-15T14:00:00',
    endDate: '2026-10-15T17:00:00',
    displayDate: 'OCT 15, 2026',
    fullDate: 'October 15, 2026',
    entry: 'Free Registration',
    prize: 'Community Recognition',
    teamSize: 'Individual',
    duration: '3 Hours',
    tag: 'Technical Workshop',
    status: 'UPCOMING',
    link: '/initiatives',
    published: true,
  },
  {
    id: 'open-build-sprint',
    title: 'DECODEP 48-Hour Open Build Sprint',
    category: 'Community Sprint',
    description: 'A collaborative sprint for student and developer community members to build and ship high-impact open tools in a short time.',
    image: '/assets/decodep-banner.png',
    date: 'Late 2026',
    startDate: '2026-11-08T18:00:00',
    endDate: '2026-11-10T18:00:00',
    displayDate: 'NOV 08, 2026',
    fullDate: 'November 08, 2026',
    entry: 'Free Registration',
    prize: 'Top Project Showcase',
    teamSize: 'Up to 3 Members',
    duration: '48 Hours',
    tag: 'Community Sprint',
    status: 'UPCOMING',
    link: '/initiatives',
    published: true,
  },
]

export default initiatives
