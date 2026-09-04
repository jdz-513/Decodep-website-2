export interface Collaboration {
  id: string
  partner: string
  title?: string
  type: string
  location?: string
  description: string
  image: string
  date: string
  status: 'ACTIVE' | 'IN DISCUSSION' | 'COMPLETED' | string
  scopes: string[]
  link?: string
  linkText?: string
  partnerName: string
  partnerLogo?: string
  collaborationType: string
  shortDescription: string
  nature: string
  posterImage?: string
  partyA: CollaborationParty
  partyB: CollaborationParty
  initialInitiative?: string
  purpose?: string
  rolesPartyA?: string[]
  rolesPartyB?: string[]
}

export interface CollaborationParty {
  name: string
  entity: string
  representative: string
  designation: string
  location: string
  contact?: string
}

export const collaborations: Collaboration[] = [
  {
    id: 'go-hub',
    partner: 'GO.HUB COMMUNITY',
    title: 'DECODEP Community × GO.HUB Community',
    type: 'COMMUNITY COLLABORATION',
    location: 'Erode, Tamil Nadu & Chennai, Tamil Nadu',
    description:
      'Ongoing Memorandum of Understanding (MoU) to establish mutual cooperation for community development, technical learning, innovation, and jointly organized hackathons.',
    image: '/assets/gohub-collaboration.png',
    date: '23 August 2026',
    status: 'ACTIVE',
    scopes: [
      'Hackathons & Competitions',
      'Technical Workshops',
      'Knowledge Sharing',
      'Community challenges and innovation initiatives',
      'Student and developer engagement activities',
      'Mentor, speaker and judge collaboration',
      'Cross-community outreach, promotion and networking',
    ],
    link: '/collaborations/go-hub',
    linkText: 'View Agreement',
    partnerName: 'GO. HUB Community',
    partnerLogo: '/assets/gohub-collaboration.png',
    collaborationType: 'Community Collaboration',
    shortDescription:
      'Ongoing Memorandum of Understanding (MoU) to establish mutual cooperation for community development, technical learning, innovation, and jointly organized hackathons.',
    nature: 'Ongoing Community Collaboration',
    posterImage: '/assets/gohub-collaboration.png',
    partyA: {
      name: 'DECODEP Community',
      entity: 'An initiative of DECODEP',
      representative: 'V. Jaichandran',
      designation: 'Founder',
      location: 'Erode, Tamil Nadu',
      contact: '+91 9363471419',
    },
    partyB: {
      name: 'GO. HUB Community',
      entity: 'GO. HUB Community',
      representative: 'Jeba Arasu S',
      designation: 'Founder',
      location: 'Chennai, Tamil Nadu',
      contact: '+91 7904380985',
    },
    purpose:
      'This Memorandum of Understanding (MoU) sets out the mutual understanding between DECODEP Community, an initiative of DECODEP, and GO. HUB Community to establish an ongoing collaboration for community development, technical learning, innovation and jointly organized initiatives.',
    initialInitiative:
      'The parties intend to explore and develop an international-level online hackathon as an initial major initiative under this ongoing collaboration.',
    rolesPartyA: [
      'Event planning and coordination',
      'Community outreach and participant engagement',
      'Technical coordination and execution support',
      'Event branding and operational support',
    ],
    rolesPartyB: [
      'Promotion and community communication',
      'Registration and platform support where applicable',
      'Mentor, judge and community network support',
      'Collaboration and outreach support',
    ],
  },
  {
    id: 'devengers',
    partner: 'DEVENGERS',
    title: 'DECODEP Community × DEVENGERS',
    type: 'COMMUNITY & CODE NETWORK',
    location: 'Tamil Nadu',
    description:
      'Active exploratory discussions to unlock joint developer opportunities, mentor network access, and co-hosted builder sprints.',
    image: '/assets/devengers.jpg',
    date: 'Discussions Active',
    status: 'IN DISCUSSION',
    scopes: [
      'Developer Sprints',
      'Mentor Network',
      'Ecosystem Growth',
    ],
    link: '',
    linkText: 'In Discussion',
    partnerName: 'DEVENGERS',
    partnerLogo: '/assets/devengers.jpg',
    collaborationType: 'Community & Code Network',
    shortDescription:
      'Active exploratory discussions to unlock joint developer opportunities, mentor network access, and co-hosted builder sprints.',
    nature: 'Exploratory Partnership',
    posterImage: '/assets/devengers.jpg',
    partyA: {
      name: 'DECODEP Community',
      entity: 'An initiative of DECODEP',
      representative: 'V. Jaichandran',
      designation: 'Founder',
      location: 'Erode, Tamil Nadu',
      contact: '+91 9363471419',
    },
    partyB: {
      name: 'DEVENGERS',
      entity: 'Developer Community',
      representative: 'Leadership Team',
      designation: 'Community Leads',
      location: 'Tamil Nadu',
    },
    purpose:
      'Active exploratory discussions to collaborate on community-driven coding initiatives, technical events, and developer outreach.',
  },
]

export default collaborations
