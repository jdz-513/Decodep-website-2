export type UpdateType =
  | 'EVENT'
  | 'COLLABORATION'
  | 'ANNOUNCEMENT'
  | 'ACHIEVEMENT'
  | 'COMMUNITY'
  | 'INITIATIVE'

export type UpdateStatus =
  | 'UPCOMING'
  | 'LIVE NOW'
  | 'NEW'
  | 'COMING SOON'
  | 'IN DISCUSSION'
  | 'COMPLETED'

export interface CurrentUpdate {
  id: number | string
  type: UpdateType
  status: UpdateStatus
  title: string
  description: string
  date?: string
  image: string
  href: string
  ctaText?: string
  highlightNote?: string
  ticker: string
}

/**
 * Current ecosystem updates dataset.
 * Extensible for future admin dashboard (/admin/updates) and CMS integration.
 */
export const currentUpdates: CurrentUpdate[] = [
  {
    id: 1,
    type: 'EVENT',
    status: 'UPCOMING',
    title: 'HACKDAY 1.0',
    description: 'DECODEP Community 8-hour online hackathon. Rapid innovation, real engineering challenges, and $300 cash prize.',
    date: '20 SEP 2026',
    image: '/assets/hackday-poster.png',
    href: '/initiatives',
    ctaText: 'VIEW EVENT ↗',
    highlightNote: 'Free Registration • 8 Hours',
    ticker: 'HACKDAY 1.0 • UPCOMING EVENT • SEP 20, 2026 • DECODEP COMMUNITY HACKATHON • VIEW EVENT ↗',
  },
  {
    id: 2,
    type: 'COLLABORATION',
    status: 'NEW',
    title: 'DECODEP × GO.HUB',
    description: 'Bilateral ecosystem MoU establishing ongoing cooperation for community development, technical learning, and joint hackathons.',
    date: '23 AUG 2026',
    image: '/assets/gohub-collaboration.png',
    href: '/collaborations/go-hub',
    ctaText: 'VIEW COLLABORATION ↗',
    highlightNote: 'Strategic MoU Alliance',
    ticker: 'DECODEP × GO HUB • COLLABORATION • NEW UPDATE • EXPLORE ↗',
  },
  {
    id: 3,
    type: 'EVENT',
    status: 'COMING SOON',
    title: 'UPCOMING OFFLINE EVENT',
    description: 'A new in-person DECODEP offline experience and technology symposium bringing together builders, students, and engineers.',
    date: 'SEPTEMBER 2026',
    image: '/assets/offline-event.jpg',
    href: '/community',
    ctaText: 'EXPLORE EVENT ↗',
    highlightNote: 'In-Person Tech Symposium',
    ticker: 'UPCOMING OFFLINE EVENT • EVENT • SEPTEMBER 2026 • COMING SOON • STAY TUNED ↗',
  },
  {
    id: 4,
    type: 'COLLABORATION',
    status: 'IN DISCUSSION',
    title: 'DECODEP × DEVENGERS',
    description: 'Active discussions to unlock joint developer opportunities, mentor network access, and co-hosted builder sprints.',
    date: 'DISCUSSIONS ACTIVE',
    image: '/assets/devengers.jpg',
    href: '/collaborations',
    ctaText: 'EXPLORE INITIATIVE ↗',
    highlightNote: 'Community & Code Network',
    ticker: 'DECODEP × DEVENGERS • COLLABORATION • IN DISCUSSION • COMING SOON • STAY TUNED ↗',
  },
]
