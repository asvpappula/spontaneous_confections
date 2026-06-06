// =============================================================================
// HOME PAGE COPY
// -----------------------------------------------------------------------------
// Microcopy for the Home page sections. Keeps the Home component free of
// hardcoded business content. Edit headings and intros here.
// =============================================================================

export interface SectionIntro {
  eyebrow: string
  heading: string
  intro?: string
}

export interface HomeContent {
  hero: {
    eyebrow: string
    headline: string
    sub: string
  }
  findUs: SectionIntro
  events: SectionIntro & { emptyState: string }
  featured: SectionIntro
  about: SectionIntro
  media: SectionIntro
  cta: {
    heading: string
    body: string
  }
}

export const home: HomeContent = {
  hero: {
    eyebrow: 'Capitola Mall · Santa Cruz County',
    headline: 'Baking Happiness for Every Heart',
    sub: 'Small-batch pastries, chocolate confections, and seasonal sweets made by hand in Santa Cruz County.',
  },
  findUs: {
    eyebrow: 'Where to Find Us',
    heading: 'In the Capitola Mall food court',
    intro:
      'Find us at the Capitola Mall food court for handmade pastries, tarts, chocolate confections, and rotating seasonal specials.',
  },
  events: {
    eyebrow: 'Out & About',
    heading: 'Pop-ups & Events',
    intro: 'We pop up at markets and events around Santa Cruz County. Here’s where to find us next.',
    emptyState: 'Nothing on the calendar right now. Follow us on Instagram for the next pop-up.',
  },
  featured: {
    eyebrow: 'From the Case',
    heading: 'A few things we’re known for',
    intro: 'A few favorites. What’s in the case changes with the season.',
  },
  about: {
    eyebrow: 'Our Story',
    heading: 'Two people, one little bakery',
  },
  media: {
    eyebrow: 'In the Press',
    heading: 'We’ve been featured',
  },
  cta: {
    heading: 'Want something custom?',
    body: 'We make celebration cakes, croquembouche, dessert tables, and catering. Tell us what you have in mind.',
  },
}
