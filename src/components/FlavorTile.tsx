import { ACCENT_PASTEL, type Accent } from '../lib/accents'

interface FlavorTileProps {
  name: string
  description: string
  accent: Accent
  category?: string
  priceNote?: string
}

/**
 * A clean product card: white surface, soft purple border, a brand-tinted
 * category badge, purple title, and readable body text. Consistent styling —
 * no random per-card colors.
 */
export function FlavorTile({ name, description, accent, category, priceNote }: FlavorTileProps) {
  return (
    <article className="sticker sticker-hover flex h-full flex-col p-6">
      {category && (
        <span className="badge self-start" style={{ backgroundColor: ACCENT_PASTEL[accent] }}>
          {category}
        </span>
      )}
      <h3 className="mt-4 font-display text-xl font-bold leading-tight text-purple">{name}</h3>
      <p className="mt-2 flex-1 text-base leading-relaxed text-chocolate-soft">{description}</p>
      {priceNote && (
        <span className="mt-4 font-display text-base font-semibold text-purple">{priceNote}</span>
      )}
    </article>
  )
}
