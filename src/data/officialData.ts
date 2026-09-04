import { BrandInfo, InitiativeItem, CollaborationItem } from '../types'

export const brandData: BrandInfo = {
  name: 'DECODEP',
  tagline: 'DECODE • DEVELOP • DOMINATE',
  // motto: 'Decode Problems. Develop Solutions. Dominate the Future.',
  pillars: ['Technology', 'Innovation', 'Community'],
  email: 'officialdecodep@gmail.com',
  phone: '+91 9363471419',
  website: 'decodep.com',
  year: '2026',
  registration: {
    type: 'Proprietorship',
    status: 'Udyam Registered',
    description:
      'DECODEP is a Udyam-registered proprietorship operating in the technology services space. Our business focuses on software support, digital solutions and technology-driven services. We are currently building our business foundation through client projects, technology services and future product development, with a long-term focus on creating scalable solutions.',
  },
}

export const visionMissionValues = {
  vision:
    'To build a technology ecosystem where ideas become practical and impactful solutions.',
  mission: [
    'Solve real-world problems.',
    'Build innovative digital solutions.',
    'Empower students & developers.',
    'Grow through collaboration.',
  ],
  values: ['Innovation', 'Learning', 'Collaboration', 'Integrity', 'Impact'],
}

export const founderData = {
  name: 'V. Jaichandran',
  shortName: 'Jai',
  role: 'Founder, DECODEP',
  location: 'Erode, Tamil Nadu',
  image: '/assets/founder-jai.png',
  quote:
    'DECODEP started with a simple vision — to turn real-world problems into meaningful solutions through technology. We are building DECODEP with a focus on innovation, execution and continuous learning. Our goal is to create practical digital solutions while building opportunities for students and developers to learn, build and grow.',
  closing: 'This is just the beginning of our journey, and we are excited about what we can build together.',
}

export const whatWeDoCompany = {
  summary:
    'DECODEP builds practical digital solutions for real-world needs, combining Artificial Intelligence, Web Development, App Development and modern technologies to help businesses and individuals turn ideas into useful, scalable digital experiences.',
  services: [
    {
      id: 'ai',
      title: 'Artificial Intelligence',
      tag: 'Intelligent Systems',
      description:
        'Practical AI implementations and smart workflow solutions designed to solve real-world problems efficiently.',
      features: ['Smart Automation', 'Applied AI Integration', 'Workflow Intelligence'],
    },
    {
      id: 'web',
      title: 'Web Development',
      tag: 'Digital Experiences',
      description:
        'High-performance, modern, and responsive web applications engineered with clean code and intuitive interfaces.',
      features: ['Responsive Platforms', 'Full-Stack Architecture', 'Performance Optimization'],
    },
    {
      id: 'app',
      title: 'App Development',
      tag: 'Cross-Platform',
      description:
        'Reliable mobile applications built for seamless usability, solid performance, and long-term scalability.',
      features: ['Modern UI/UX', 'Cross-Platform Apps', 'Scalable Mobile Foundation'],
    },
    {
      id: 'emerging',
      title: 'Digital Solutions & Emerging Tech',
      tag: 'Scalable Systems',
      description:
        'End-to-end technology services, software support, and digital product foundations built for sustainable growth.',
      features: ['Technology Services', 'Software Support', 'Digital Product Strategy'],
    },
  ],
}

export const howWeWorkSteps = [
  {
    step: '01',
    title: 'Understand the Problem',
    description: 'We start by deeply understanding the core problem and real-world requirements.',
  },
  {
    step: '02',
    title: 'Explore the Right Technology',
    description: 'We identify and evaluate the most suitable modern technology stack for optimal performance.',
  },
  {
    step: '03',
    title: 'Design a Practical Solution',
    description: 'We architect a clean, user-centric, and practical solution tailored for effectiveness.',
  },
  {
    step: '04',
    title: 'Build with Care',
    description: 'We develop the solution with engineering precision, maintainability, and quality.',
  },
  {
    step: '05',
    title: 'Continuously Improve',
    description: 'We iterate and refine based on real-world feedback to ensure lasting impact.',
  },
]

export const communityData = {
  summary:
    'DECODEP Community brings students, developers and technology enthusiasts together to learn, build and collaborate through technology.',
  pillars: [
    {
      id: 'learn',
      title: 'Learn',
      description: 'Gain practical knowledge through workshops, technical talks, and hands-on sessions.',
      icon: 'BookOpen',
    },
    {
      id: 'build',
      title: 'Build',
      description: 'Create real projects, solve technical challenges, and turn ideas into working software.',
      icon: 'Code',
    },
    {
      id: 'collaborate',
      title: 'Collaborate',
      description: 'Work alongside fellow developers, mentors, speakers, and industry enthusiasts.',
      icon: 'Users',
    },
    {
      id: 'grow',
      title: 'Grow',
      description: 'Expand your technical network, showcase your abilities, and accelerate your tech journey.',
      icon: 'TrendingUp',
    },
  ],
  activities: [
    'Hackathons and technical competitions',
    'Technical workshops, talks and knowledge-sharing sessions',
    'Community challenges and innovation initiatives',
    'Student and developer engagement activities',
    'Mentor, speaker and judge collaboration',
    'Cross-community outreach, promotion and networking',
  ],
}

export const currentInitiative: InitiativeItem = {
  id: 'hackday-1',
  title: 'HACKDAY 1.0',
  tag: 'Featured Hackathon',
  date: '20 September 2026',
  duration: '8 Hours',
  entry: 'Free Registration',
  teamSize: 'Individual or Team of 2',
  prize: '$300 Cash Prize',
  problemStatement: 'Problem Statement revealed on Event Day',
  description:
    'An intensive 8-hour sprint where developers and students come together to solve practical technical challenges and build functional solutions.',
  status: 'upcoming',
  image: '/assets/hackday-poster.png',
}

export const collaborationsList: CollaborationItem[] = [
  {
    id: 'go-hub',
    title: 'DECODEP Community × GO.HUB Community',
    partnerName: 'GO. HUB Community',
    partnerLogo: '/assets/gohub-collaboration.png',
    collaborationType: 'Community Collaboration',
    shortDescription:
      'Ongoing Memorandum of Understanding (MoU) to establish mutual cooperation for community development, technical learning, innovation, and jointly organized hackathons.',
    date: '23 August 2026',
    status: 'Active Ongoing Collaboration',
    nature: 'Ongoing Community Collaboration',
    posterImage: '/assets/gohub-collaboration.png',
    purpose:
      'This Memorandum of Understanding (MoU) sets out the mutual understanding between DECODEP Community, an initiative of DECODEP, and GO. HUB Community to establish an ongoing collaboration for community development, technical learning, innovation and jointly organized initiatives.',
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
    scopes: [
      'Hackathons and technical competitions',
      'Technical workshops, talks and knowledge-sharing sessions',
      'Community challenges and innovation initiatives',
      'Student and developer engagement activities',
      'Mentor, speaker and judge collaboration',
      'Cross-community outreach, promotion and networking',
      'Other technology, education or community initiatives mutually agreed upon',
    ],
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
]

export const gohubMoUCollaboration: CollaborationItem = collaborationsList[0]
