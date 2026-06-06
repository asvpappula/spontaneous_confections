import { ACCENT_PASTEL, ACCENT_SOLID, type Accent } from '../lib/accents'
import { Star5 } from './doodles'

function initialsFrom(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean)
  const letters = words.slice(0, 2).map((w) => w[0])
  return letters.join('').toUpperCase() || 'SC'
}

interface PlaceholderImageProps {
  /** Used for the initials monogram. */
  seed: string
  /** Brand tint — defaults to a soft purple so placeholders read consistently. */
  accent?: Accent
  caption?: string
  className?: string
  rounded?: string
}

/**
 * A clean, image-free placeholder: a soft brand tint with an initials monogram.
 * Reads as intentional editorial art rather than a missing image. Decorative,
 * so hidden from assistive tech.
 */
export function PlaceholderImage({
  seed,
  accent = 'purple',
  caption,
  className = '',
  rounded = 'rounded-2xl',
}: PlaceholderImageProps) {
  const initials = initialsFrom(caption ?? seed)

  return (
    <div
      className={`relative grid place-items-center overflow-hidden ${rounded} ${className}`}
      style={{ backgroundColor: ACCENT_PASTEL[accent] }}
      aria-hidden
    >
      <Star5
        className="absolute right-4 top-4 h-5 w-5 opacity-50"
        style={{ color: ACCENT_SOLID[accent] }}
      />
      <span className="select-none font-display text-5xl font-bold text-chocolate/75">
        {initials}
      </span>
      {caption && (
        <span className="absolute inset-x-0 bottom-3 text-center text-xs font-semibold uppercase tracking-widest text-chocolate/65">
          {caption}
        </span>
      )}
    </div>
  )
}
