export interface MomentItem {
  id: string | number
  image: string
  title: string
  category: string
  date: string
  description: string
  link?: string
  altText?: string
}

export const moments: MomentItem[] = [
  {
    id: 1,
    image: '/assets/moments/moment-1.png',
    category: 'AI • HACKATHON',
    title: 'Building & Competing in AI',
    date: '2026',
    description: 'Intensive engineering sprints and live challenge moments from DECODEP’s innovation-driven community.',
    altText: 'DECODEP AI Hackathon community sprint',
    link: '/initiatives',
  },
  {
    id: 2,
    image: '/assets/moments/moment-2.jpg',
    category: 'STARTUP • ECOSYSTEM',
    title: 'Learning, Connecting & Growing',
    date: '2026',
    description: 'Bilateral alliances, founder conversations, and real-world community learning across the DECODEP ecosystem.',
    altText: 'DECODEP startup ecosystem collaboration and mentorship',
    link: '/community',
  },
  {
    id: 3,
    image: '/assets/moments/moment-3.jpg',
    category: 'CAMPUS • TECHNOLOGY',
    title: 'Exploring Technology Beyond the Classroom',
    date: '2026',
    description: 'Hands-on practical development, student builder teams, and community-driven technology exploration in motion.',
    altText: 'DECODEP campus technology initiatives and workshops',
    link: '/initiatives',
  },
]

export default moments
