// Intentional 3-color accent system: purple (anchor), pink (sweetness),
// blue (clean accent). Used sparingly for small accents and soft card tints —
// NOT random per-card colors.
//
//  - ACCENT_SOLID  : the saturated brand color (small accents, dots, icons)
//  - ACCENT_PASTEL : a soft tint for card backgrounds with dark text on top
//  - ACCENT_ON     : 'chocolate' (dark) or 'cream' (light) text on the solid

export type Accent = 'purple' | 'pink' | 'blue'

export const ACCENT_SOLID: Record<Accent, string> = {
  purple: '#482a70',
  pink: '#ef7f9a',
  blue: '#1c7a9d',
}

/** Soft tints — chocolate text on these always passes AA. */
export const ACCENT_PASTEL: Record<Accent, string> = {
  purple: '#ece4f4',
  pink: '#fbe2e9',
  blue: '#ddeff8',
}

export const ACCENT_ON: Record<Accent, 'cream' | 'chocolate'> = {
  purple: 'cream',
  pink: 'chocolate',
  blue: 'chocolate',
}

export const ACCENT_LIST: Accent[] = ['purple', 'pink', 'blue']

/** Deterministically pick a brand accent from any string seed. */
export function accentFromSeed(seed: string): Accent {
  let hash = 0
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0
  }
  return ACCENT_LIST[hash % ACCENT_LIST.length]
}
