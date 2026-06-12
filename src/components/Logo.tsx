import { site } from '../data/site'

type Variant = 'header' | 'footer'

/**
 * The Spontaneous Confections logo.
 *
 * - Header: the client's real horizontal lockup (SC badge + "Spontaneous
 *   Confections" + tagline) as a transparent PNG. It already contains the
 *   wordmark, so no extra text is rendered beside it. Purple/teal art on cream.
 * - Footer: the same real SC badge on a light disc, so it stays visible on the
 *   dark purple footer, beside the cream wordmark.
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

  // Footer (dark background): the real SC badge on a light disc so it stays
  // visible against the deep purple, beside the cream wordmark.
  return (
    <span
      className={`inline-flex items-center gap-2.5 ${className}`}
      role="img"
      aria-label={site.logos.alt}
    >
      <img
        src={site.logos.footer}
        alt=""
        aria-hidden
        width={512}
        height={512}
        decoding="async"
        className="h-full w-auto shrink-0 rounded-xl"
      />
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
