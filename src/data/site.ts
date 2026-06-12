// =============================================================================
// SITE-WIDE CONTENT & CONFIGURATION
// -----------------------------------------------------------------------------
// This is the single source of truth for business name, contact details,
// location, hours, navigation, logo paths, and default SEO. Edit values here —
// you should not need to touch any component code.
//
// Anything marked `TODO:` still needs to be confirmed by the client.
// =============================================================================

export interface NavItem {
  label: string
  to: string
}

export interface HoursRow {
  /** e.g. "Mon – Thu" */
  day: string
  /** e.g. "11:00 AM – 7:00 PM" or "Closed" */
  hours: string
}

export interface Cta {
  label: string
  to: string
}

export interface SiteConfig {
  name: string
  legalName: string
  tagline: string
  secondaryTagline: string
  established: number
  shortDescription: string
  longDescription: string
  url: string
  contact: {
    phoneDisplay: string
    phoneHref: string
    /** TODO: confirm the public booking/enquiry email with the client. */
    email: string
  }
  location: {
    venue: string
    street: string
    city: string
    region: string
    postalCode: string
    country: string
    /** Approximate — refine with the exact storefront coordinates if desired. */
    geo: { lat: number; lng: number }
    directionsUrl: string
    mapEmbedUrl: string
  }
  /** Whether `hours` has been confirmed. When false the UI shows a soft notice. */
  hoursConfirmed: boolean
  hours: HoursRow[]
  hoursNote: string
  nav: NavItem[]
  ctaPrimary: Cta
  ctaSecondary: Cta
  logos: {
    /** Header logo — client said "NEW-logo-SC-email" works best here. */
    header: string
    footer: string
    favicon: string
    /** Accessible text used as the logo's alt / aria-label. */
    alt: string
  }
  seo: {
    titleTemplate: string
    defaultTitle: string
    defaultDescription: string
    ogImage: string
    keywords: string[]
  }
}

const street = '1855 41st Ave'
const city = 'Capitola'
const region = 'CA'
const postalCode = '95010'
const fullAddress = `${street}, ${city}, ${region} ${postalCode}`

export const site: SiteConfig = {
  name: 'Spontaneous Confections',
  legalName: 'Spontaneous Confections',
  tagline: 'An Explosion of Flavor',
  secondaryTagline: 'Small-batch sweets, made by hand in Capitola.',
  established: 2023,
  shortDescription:
    'Small-batch pastries, chocolate confections, and seasonal sweets, made by hand in the Capitola Mall food court.',
  longDescription:
    'Spontaneous Confections is a Black veteran-owned bakery and chocolate shop in the Capitola Mall food court. Justin Lenorovitz trained in pastry in Bordeaux; he and his wife Stephanie make French-inspired pastries, fruit tarts, entremets, the from-scratch Dubai chocolate bar, and house inventions like the moukie, all in small batches.',
  url: 'https://spontaneousconfections.com',

  contact: {
    phoneDisplay: '(831) 480-5166',
    phoneHref: 'tel:+18314805166',
    // TODO: confirm the real public email address with the client.
    email: 'hello@spontaneousconfections.com',
  },

  location: {
    venue: 'Capitola Mall Food Court',
    street,
    city,
    region,
    postalCode,
    country: 'US',
    geo: { lat: 36.9759, lng: -121.9585 },
    directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      `Spontaneous Confections, ${fullAddress}`,
    )}`,
    mapEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(
      `Spontaneous Confections, ${fullAddress}`,
    )}&output=embed`,
  },

  // TODO: confirm exact hours with the client / Capitola Mall, then flip
  // `hoursConfirmed` to true. Until then the UI shows a "please confirm" note.
  hoursConfirmed: false,
  hours: [
    { day: 'Thu – Sat', hours: '1:00 PM – 6:00 PM' },
    { day: 'Sun – Wed', hours: 'Closed' },
  ],
  hoursNote:
    'We’re new, so hours can change. Call ahead or check Instagram and Facebook before you visit.',

  nav: [
    { label: 'Home', to: '/' },
    { label: 'Menu', to: '/menu' },
    { label: 'About', to: '/about' },
    { label: 'Media', to: '/media' },
    { label: 'Contact', to: '/contact' },
  ],

  ctaPrimary: { label: 'Custom Orders', to: '/contact' },
  ctaSecondary: { label: 'View Menu', to: '/menu' },

  logos: {
    // Drop the real files into /public/assets/logos using these names, or
    // change the paths below to match your filenames.
    header: '/assets/logos/logo-header-sc.png',
    footer: '/assets/logos/logo-mark.png',
    favicon: '/favicon-32.png',
    alt: 'Spontaneous Confections',
  },

  seo: {
    titleTemplate: '%s — Spontaneous Confections',
    defaultTitle: 'Spontaneous Confections — Handmade Pastry & Chocolate in Capitola, CA',
    defaultDescription:
      'Small-batch pastries, chocolate confections, and seasonal sweets, made by hand at the Capitola Mall food court in Santa Cruz County.',
    ogImage: 'https://spontaneousconfections.com/assets/og-image.png',
    keywords: [
      'Capitola bakery',
      'Santa Cruz patisserie',
      'French pastries Santa Cruz',
      'Dubai chocolate bar Capitola',
      'chocolate confections Santa Cruz',
      'custom cakes Capitola',
      'tarts and entremets',
      'Capitola Mall food court dessert',
    ],
  },
}

/** Convenience: a single formatted address string. */
export const formattedAddress = `${site.location.venue}, ${fullAddress}`
