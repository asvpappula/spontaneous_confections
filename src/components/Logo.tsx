import { site } from '../data/site'
import { BrandBadge } from './BrandBadge'

type Variant = 'header' | 'footer'

/**
 * The Spontaneous Confections logo.
 *
 * - Header: the client's real horizontal lockup (SC badge + "Spontaneous
 *   Confections" + tagline) as a transparent PNG. It already contains the
 *   wordmark, so no extra text is rendered beside it. Purple/teal art on cream.
 * - Footer: the recolorable vector lockup in cream, so it stays visible on the
 *   dark purple footer (the purple PNG would disappear there).
 */
export function Logo({
  variant = 'header',
  showTagline = false,
  className = '',
}: {
  variant?: Variant
  showTagline?: boolean
  className?: string
}) {
  if (variant === 'header') {
    return (
      <img
        src={site.logos.header}
        alt={site.logos.alt}
        width={2486}
        height={716}
        decoding="async"
        className={className}
      />
    )
  }

  // Footer (dark background): cream vector badge + wordmark.
  const badge = {
    ring: 'var(--color-blue)',
    utensil: 'var(--color-cream)',
    star: 'var(--color-blue)',
    hole: 'var(--color-purple)',
    monogramColor: 'var(--color-cream)',
  }

  return (
    <span
      className={`inline-flex items-center gap-2.5 ${className}`}
      role="img"
      aria-label={site.logos.alt}
    >
      <BrandBadge className="h-full w-auto shrink-0" monogram={false} {...badge} />
      <span className="leading-[0.98]" aria-hidden>
        <span className="block font-brand text-[1.05rem] font-semibold italic tracking-tight text-cream sm:text-[1.2rem]">
          Spontaneous
        </span>
        <span className="block font-brand text-[1.05rem] font-semibold italic tracking-tight text-cream sm:text-[1.2rem]">
          Confections
        </span>
        {showTagline && (
          <span className="mt-1 block text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-blue-deep">
            An Explosion of Flavor
          </span>
        )}
      </span>
    </span>
  )
}
