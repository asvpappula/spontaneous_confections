// =============================================================================
// PRESS & MEDIA
// -----------------------------------------------------------------------------
// Powers the Media page and the "As seen in" preview on the Home page.
//
// Entries marked `verified: true` are real, sourced coverage/listings found
// online. A few details (exact dates, author bylines) are flagged TODO and
// should be confirmed before launch. The final `placeholder` entry is a
// ready-to-fill template for future coverage.
//
// IMAGES: we did not copy any third-party images. Leave `image: null` to show
// a branded placeholder, or add a screenshot/logo you have rights to use into
// /public/assets/media and point `image` at it.
// =============================================================================

export type MediaType = 'press' | 'listing' | 'placeholder'

export interface MediaItem {
  id: string
  title: string
  publication: string
  /** ISO date "YYYY-MM-DD", or '' if unknown (then `dateLabel` is shown). */
  date: string
  /** Optional human label when the exact date is unconfirmed. */
  dateLabel?: string
  /** Path to an image you have rights to use, or null for a branded placeholder. */
  image: string | null
  snippet: string
  /** Article/listing URL, or null if not available yet. */
  link: string | null
  featured: boolean
  type: MediaType
  /** True for real, sourced entries; false for templates/unconfirmed. */
  verified: boolean
}

export const media: MediaItem[] = [
  // ---- Press coverage (real) ------------------------------------------------
  {
    id: 'goodtimes-levels-up',
    title: 'Spontaneous Confections Levels Up the Pastry Game in Capitola',
    publication: 'Good Times Santa Cruz',
    date: '2025-12-17',
    image: null,
    snippet:
      'A profile of Justin and Stephanie Lenorovitz, his French training and her French roots, plus the gold-dusted brownies and seasonal entremets behind the counter.',
    link: 'https://www.goodtimes.sc/spontaneous-confections-capitola-pastries/',
    featured: true,
    type: 'press',
    verified: true,
  },
  {
    id: 'goodtimes-box-of-chocolates',
    title: 'Bold New Desserts Arrive at Capitola Mall',
    publication: 'Good Times Santa Cruz',
    date: '',
    dateLabel: '2025 · confirm date',
    image: null,
    snippet:
      'A deep dive into the menu: four from-scratch Dubai-bar variants, the invented “moukie,” and a surfboard-crust Santa Cruz cheesecake.',
    link: 'https://www.goodtimes.sc/spontaneous-confections-capitola-desserts/',
    featured: true,
    type: 'press',
    verified: true,
  },
  {
    id: 'lookout-three-bakers',
    title: 'Three Bakers on the Rise Reshaping Santa Cruz County’s Pastries',
    publication: 'Lookout Santa Cruz',
    date: '2026-03-31',
    image: null,
    snippet:
      'Justin’s story: a veteran who turned to pastry, took a class at Cabrillo College, and trained in Bordeaux, told alongside the county’s rising bakers.',
    link: 'https://lookout.co/three-bakers-on-the-rise-santa-cruzs-bread-pastries/story',
    featured: true,
    type: 'press',
    verified: true,
  },
  {
    id: 'lookout-lily-belli',
    title: 'Lily Belli on Food: Capitola Mall’s New Sweet Spot',
    publication: 'Lookout Santa Cruz',
    date: '2025-11-04',
    image: null,
    snippet:
      'Announcing the storefront opening, with mini fruit tarts, lavender-ganache fudge brownies, and the lemon moukie.',
    link: 'https://lookout.co/newsletter/lily-belli-on-food-mane-kitchen-cocktails-opens-downtown-hanloh-ending-run-at-bad-animal-capitola-malls-new-sweet-spot',
    featured: false,
    type: 'press',
    verified: true,
  },
  {
    id: 'goodtimes-tasting-sensation',
    title: 'Tasting Sensation: Sweet Discoveries in Aptos and Capitola',
    publication: 'Good Times Santa Cruz',
    date: '2025-11-12',
    image: null,
    snippet:
      'A roundup marking the November 1 grand opening at Capitola Mall and Justin’s Bordeaux training.',
    link: 'https://www.goodtimes.sc/tasting-sensation-deer-park-wine-spirits-corralitos-vodka-spontaneous-confections/',
    featured: false,
    type: 'press',
    verified: true,
  },

  // ---- Listings & profiles (real) ------------------------------------------
  {
    id: 'yelp',
    title: 'Spontaneous Confections on Yelp',
    publication: 'Yelp',
    date: '',
    dateLabel: 'Reviews & photos',
    image: null,
    snippet: 'See photos and reviews, and leave one after your visit.',
    link: 'https://www.yelp.com/biz/spontaneous-confections-capitola',
    featured: false,
    type: 'listing',
    verified: true,
  },
  {
    id: 'capitola-chamber',
    title: 'Capitola Chamber of Commerce Member',
    publication: 'Capitola Chamber',
    date: '',
    dateLabel: 'Member listing',
    image: null,
    snippet:
      '“A specialty pastry and chocolate confections business dedicated to creating new, unique, high-quality desserts.”',
    link: 'https://master.capitolachamber.com/list/member/spontaneous-confections-capitola-9989',
    featured: false,
    type: 'listing',
    verified: true,
  },
  {
    id: 'event-santa-cruz',
    title: 'Featured on Event Santa Cruz',
    publication: 'Event Santa Cruz',
    date: '',
    dateLabel: 'Business profile',
    image: null,
    snippet:
      'Hand-crafting pastries and chocolates in small batches that are sophisticated and innovative, using seasonal and local flavors.',
    link: 'https://www.eventsantacruz.com/business/spontaneous-confections/',
    featured: false,
    type: 'listing',
    verified: true,
  },
  {
    id: 'capitola-mall',
    title: 'Capitola Mall Store Directory',
    publication: 'Capitola Mall',
    date: '',
    dateLabel: 'Store page',
    image: null,
    snippet: 'Find us in the food court directory at Capitola Mall.',
    link: 'https://www.shopcapitolamall.com/store/spontaneous-confections',
    featured: false,
    type: 'listing',
    verified: true,
  },

  // ---- Template for future coverage (replace or delete) --------------------
  {
    id: 'placeholder-next',
    title: 'Your next feature goes here',
    publication: 'Publication name',
    date: '',
    dateLabel: 'Coming soon',
    image: null,
    snippet:
      'Copy this entry in src/data/media.ts to add new press: title, publication, date, snippet, and link.',
    link: null,
    featured: false,
    type: 'placeholder',
    verified: false,
  },
]

/** Real, displayable items (everything except unfilled placeholders). */
export const publishedMedia = media.filter((m) => m.type !== 'placeholder')

/** Featured press for the Home page preview. */
export function getFeaturedMedia(limit = 3): MediaItem[] {
  return media.filter((m) => m.featured && m.verified).slice(0, limit)
}
