// =============================================================================
// MENU
// -----------------------------------------------------------------------------
// Powers the Menu page and the "Featured" highlights on the Home page.
//
// The items below are built from Spontaneous Confections' real, documented
// offerings (their website, press coverage, and shop). Descriptions are
// paraphrased — please confirm exact current wording, availability, and prices
// with the client, then flip `pricesConfirmed` to true.
//
// Pricing policy: we intentionally do NOT publish guessed prices. Use one of:
//   'Seasonal' · 'Ask in shop' · 'By consultation' · or a real price string
//   like '$6.50'. Live prices are on the client's existing /shop & /order-form.
//
// `accent` is the candy color for the category's poster tile (see lib/accents).
// =============================================================================

import type { Accent } from '../lib/accents'

export interface MenuItem {
  name: string
  description: string
  /** A price label, never a guessed number. e.g. "Seasonal", "Ask in shop". */
  priceNote: string
  tags?: string[]
  /** Surface on the Home page highlights. */
  featured?: boolean
}

export interface MenuCategory {
  id: string
  title: string
  blurb: string
  /** Candy accent color for the category's poster tile. */
  accent: Accent
  /**
   * Side visual for the category section on the Menu page. Transparent PNG
   * preferred. Real files present today: signature-sweets (hero collage) and
   * entremets (golden mousse). The rest point at /public/assets/menu/* paths
   * that don't exist yet (see the README there) — until a file is dropped in,
   * the Menu page renders a soft accent medallion in its place.
   */
  image?: { src: string; alt: string }
  items: MenuItem[]
  note?: string
}

/** Set to true once the client confirms current prices/availability. */
export const pricesConfirmed = false

export const menu: MenuCategory[] = [
  {
    id: 'dubai-chocolate-bars',
    title: 'Dubai Chocolate Bars',
    blurb: 'Our signature, made from scratch.',
    accent: 'purple',
    image: {
      // TODO: drop a transparent PNG at this path (see public/assets/menu/README.txt)
      src: '/assets/menu/dubai-bars.png',
      alt: 'A Dubai-style chocolate bar broken open to show pistachio cream and crisp knafeh.',
    },
    items: [
      {
        name: 'Milk Chocolate Dubai Bar',
        description:
          'Milk-chocolate shell filled with butter-roasted knafeh, pistachio cream and tahini, finished with edible gold luster.',
        priceNote: 'Ask in shop',
        tags: ['signature'],
        featured: true,
      },
      {
        name: 'Hazelnut Crunch Dubai Bar',
        description:
          'Butter-roasted knafeh, hazelnut cream and tahini over a thin layer of salted caramel in a milk-chocolate shell.',
        priceNote: 'Ask in shop',
        featured: true,
      },
      {
        name: 'Dark Chocolate Dubai Bar',
        description: 'The same crackling knafeh and pistachio, wrapped in deep dark chocolate.',
        priceNote: 'Ask in shop',
      },
      {
        name: 'Persian Love Dubai Bar',
        description: 'A fragrant, floral take on the bar. Rotating.',
        priceNote: 'Seasonal',
      },
    ],
  },
  {
    id: 'signature-sweets',
    title: 'Signature Sweets',
    blurb: 'Our own inventions.',
    accent: 'pink',
    image: {
      src: '/assets/hero/floating-desserts.png',
      alt: 'An assortment of Spontaneous Confections signature sweets and pastries.',
    },
    items: [
      {
        name: 'The Moukie',
        description:
          'Our own invention: part mousse, part mini madeleine. A soft, mousse-filled cake in rotating flavors like lemon.',
        priceNote: 'Ask in shop',
        tags: ['house original'],
        featured: true,
      },
      {
        name: '24-Karat Gold Fudge Brownie',
        description:
          'A deep fudge brownie layered with honey-lavender ganache and dusted in edible 24-karat gold.',
        priceNote: 'Ask in shop',
        featured: true,
      },
      {
        name: 'Santa Cruz Cheesecake',
        description:
          'Our hometown one: seasonal cheesecake on a surfboard-shaped crust.',
        priceNote: 'Seasonal',
        tags: ['local favorite'],
        featured: true,
      },
    ],
  },
  {
    id: 'entremets-seasonal',
    title: 'Entremets & Seasonal Desserts',
    blurb: 'Layered mousse cakes that change with the season.',
    accent: 'blue',
    image: {
      src: '/assets/menu/golden-mousse.png',
      alt: 'A glossy orange mousse entremet topped with a cream quenelle and gold leaf.',
    },
    items: [
      {
        name: 'Chocolate & Blood-Orange Entremet',
        description: 'Silky chocolate mousse over a bright blood-orange gelée and almond sponge.',
        priceNote: 'Seasonal',
        featured: true,
      },
      {
        name: 'Seasonal Entremet',
        description: 'A rotating mousse cake built around whatever the coast is growing now.',
        priceNote: 'Seasonal',
      },
    ],
  },
  {
    id: 'tarts',
    title: 'Tarts & Tartlets',
    blurb: 'Crisp pastry, fruit from the Santa Cruz coast.',
    accent: 'pink',
    image: {
      // TODO: drop a transparent PNG at this path (see public/assets/menu/README.txt)
      src: '/assets/menu/tarts.png',
      alt: 'A fresh fruit tart with vanilla cream and market fruit.',
    },
    items: [
      {
        name: 'Seasonal Fruit Tart',
        description: 'Vanilla crème under ripe, market-fresh local fruit.',
        priceNote: 'Seasonal',
        featured: true,
      },
      {
        name: 'Mini Fruit Tartlets',
        description: 'Two-bite versions of our fruit tart, perfect for a box.',
        priceNote: 'Ask in shop',
      },
      {
        name: 'Chocolate Tart',
        description: 'Dark chocolate tart topped with whipped cream and cacao nibs.',
        priceNote: 'Ask in shop',
      },
      {
        name: 'Hazelnut Tart',
        description: 'Toasted hazelnut frangipane in a buttery shell.',
        priceNote: 'Ask in shop',
      },
    ],
  },
  {
    id: 'viennoiserie',
    title: 'Viennoiserie & Pastries',
    blurb: 'Classic French pastry, baked in small batches.',
    accent: 'blue',
    image: {
      // TODO: drop a transparent PNG at this path (see public/assets/menu/README.txt)
      src: '/assets/menu/viennoiserie.png',
      alt: 'Golden choux puffs and laminated French pastries.',
    },
    items: [
      {
        name: 'Éclairs',
        description: 'Choux pastry filled with silky crème, glazed in rotating flavors.',
        priceNote: 'Ask in shop',
        featured: true,
      },
      {
        name: 'Cream Puffs',
        description: 'Crisp choux piled with vanilla-bean Chantilly.',
        priceNote: 'Ask in shop',
      },
      {
        name: 'Seasonal Viennoiserie',
        description: 'Ask about today’s laminated and choux pastries.',
        priceNote: 'Seasonal',
      },
    ],
  },
  {
    id: 'cookies-small-treats',
    title: 'Cookies & Small Treats',
    blurb: 'For the walk down to Capitola Village.',
    accent: 'purple',
    image: {
      // TODO: drop a transparent PNG at this path (see public/assets/menu/README.txt)
      src: '/assets/menu/cookies.png',
      alt: 'A plate of buttery, freshly baked bakery cookies.',
    },
    items: [
      {
        name: 'Butter Cookies',
        description: 'Delicate, buttery, and dangerously easy to finish.',
        priceNote: 'Ask in shop',
      },
      {
        name: 'Cookie of the Week',
        description: 'A rotating seasonal cookie — follow along on Instagram.',
        priceNote: 'Seasonal',
      },
    ],
  },
  {
    id: 'custom-catering',
    title: 'Custom Orders & Catering',
    blurb: 'Celebration cakes, croquembouche, and dessert tables.',
    accent: 'pink',
    image: {
      // TODO: drop a transparent PNG at this path (see public/assets/menu/README.txt)
      src: '/assets/menu/custom-cakes.png',
      alt: 'A custom celebration cake decorated by hand.',
    },
    items: [
      {
        name: 'Custom Celebration Cakes',
        description: 'Birthdays, weddings, and milestones — designed with you.',
        priceNote: 'By consultation',
      },
      {
        name: 'Croquembouche',
        description: 'A tower of cream puffs bound in spun caramel for special occasions.',
        priceNote: 'By consultation',
      },
      {
        name: 'Dessert Tables & Event Platters',
        description: 'Curated assortments of pastries, bars, and bonbons for events.',
        priceNote: 'By consultation',
      },
    ],
    note: 'Lead times vary by season — reach out early through the Contact page.',
  },
]

/** Items flagged `featured: true`, for the Home page highlights. */
export function getFeaturedItems(): Array<MenuItem & { category: string; accent: Accent }> {
  return menu.flatMap((cat) =>
    cat.items
      .filter((item) => item.featured)
      .map((item) => ({ ...item, category: cat.title, accent: cat.accent })),
  )
}
