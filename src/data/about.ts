// =============================================================================
// ABOUT — BRAND STORY
// -----------------------------------------------------------------------------
// All copy for the About page lives here. It is written from real, published
// details about the owners (Good Times, Lookout Santa Cruz, and the client's
// own site). Please review for tone and accuracy — especially how personal you
// want the founder's story to be — and edit freely.
// =============================================================================

import type { Accent } from '../lib/accents'

export interface AboutValue {
  title: string
  description: string
  accent: Accent
}

export interface TimelineItem {
  year: string
  title: string
  description: string
}

export interface TeamMember {
  name: string
  role: string
  bio: string
}

export interface AboutContent {
  eyebrow: string
  heading: string
  lede: string
  story: string[]
  values: AboutValue[]
  timeline: TimelineItem[]
  team: TeamMember[]
  closing: { heading: string; body: string }
}

export const about: AboutContent = {
  eyebrow: 'Our Story',
  heading: 'A husband-and-wife bakery, made in small batches',
  lede: 'Spontaneous Confections is a small bakery and chocolate shop in the Capitola Mall food court. We’re a husband-and-wife team, and we make everything by hand in small batches.',
  story: [
    'Spontaneous Confections is run by Justin and Stephanie Lenorovitz, a married couple. We make French-inspired pastries and chocolate confections, and we’re proud to be a Black veteran-owned business.',
    'Justin came to pastry the long way. He’s a U.S. military veteran, and baking started as something that helped him settle after his service. A wedding-cake class at Cabrillo College led to formal training at the Institut Culinaire de France in Bordeaux.',
    'Stephanie grew up in France and worked in San Francisco tech before the two met. She handles the design, the packaging, and the way everything looks.',
    'It started as a pop-up, then farmers markets and events around the county. In November 2025 we opened the storefront in the Capitola Mall food court. We work in small batches and cook with seasonal, local fruit.',
  ],
  values: [
    {
      title: 'Made from scratch',
      description: 'We make every part in-house: the knafeh, the ganache, the choux.',
      accent: 'purple',
    },
    {
      title: 'Seasonal & local',
      description: 'We cook with fruit from the Santa Cruz coast, so the menu changes with the seasons.',
      accent: 'pink',
    },
    {
      title: 'French technique',
      description: 'Bordeaux training, plus flavors from well beyond France, like our Dubai bar.',
      accent: 'blue',
    },
    {
      title: 'A little spontaneous',
      description: 'Rotating flavors and house inventions like the moukie. The case is never quite the same twice.',
      accent: 'purple',
    },
  ],
  timeline: [
    {
      year: '2023',
      title: 'It begins',
      description: 'Spontaneous Confections starts as a pop-up.',
    },
    {
      year: '2023–25',
      title: 'Markets & events',
      description: 'A regular at farmers markets and events around Santa Cruz County.',
    },
    {
      year: 'Nov 2025',
      title: 'A home in Capitola',
      description: 'We open the storefront in the Capitola Mall food court.',
    },
    {
      year: 'Today',
      title: 'Still going',
      description: 'Small-batch pastry and chocolate, with a menu that keeps changing.',
    },
  ],
  team: [
    {
      name: 'Justin Lenorovitz',
      role: 'Pastry Chef & Chocolatier',
      bio: 'A U.S. veteran who trained in pastry at the Institut Culinaire de France in Bordeaux. He runs the kitchen and the chocolate work.',
    },
    {
      name: 'Stephanie Lenorovitz',
      role: 'Co-Owner & Creative',
      bio: 'Born in France, with a background in tech. She runs the design, the marketing, and events.',
    },
  ],
  closing: {
    heading: 'Come taste for yourself',
    body: 'Find us in the Capitola Mall food court, or get in touch about a custom order, a cake, or catering.',
  },
}
