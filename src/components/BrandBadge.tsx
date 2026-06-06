// Vector recreation of the Spontaneous Confections emblem: a crossed whisk +
// spatula inside a broken teal ring, with three little stars and an optional
// "SC" monogram. Inline SVG so it uses the brand fonts/colors and scales
// crisply at any size. Colors are props so the same mark works on light and
// dark (footer) backgrounds.

const STAR =
  'M0,-4 L0.999,-1.376 L3.804,-1.236 L1.617,0.526 L2.351,3.236 L0,1.7 ' +
  'L-2.351,3.236 L-1.617,0.526 L-3.804,-1.236 L-0.999,-1.376 Z'

interface BrandBadgeProps {
  className?: string
  ring?: string
  utensil?: string
  star?: string
  /** Punch-through color for the handle holes — match the background. */
  hole?: string
  monogram?: boolean
  monogramColor?: string
}

export function BrandBadge({
  className = '',
  ring = 'var(--color-blue)',
  utensil = 'var(--color-purple)',
  star = 'var(--color-purple)',
  hole = 'var(--color-cream)',
  monogram = true,
  monogramColor = 'var(--color-purple)',
}: BrandBadgeProps) {
  const crossY = monogram ? 66 : 52

  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      {/* Broken double ring */}
      <circle
        cx="50"
        cy="50"
        r="47"
        fill="none"
        stroke={ring}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeDasharray="60 15"
        transform="rotate(26 50 50)"
      />
      <circle
        cx="50"
        cy="50"
        r="42.5"
        fill="none"
        stroke={ring}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeDasharray="50 13"
        transform="rotate(-14 50 50)"
      />

      {/* Stars */}
      <path d={STAR} fill={star} transform="translate(13.5 56)" />
      <path d={STAR} fill={star} transform="translate(86.5 56)" />
      <path d={STAR} fill={star} transform="translate(50 92)" />

      {/* Spatula (solid) */}
      <g transform={`translate(50 ${crossY}) rotate(-30)`}>
        <rect x="-3.2" y="-16" width="6.4" height="48" rx="3.2" fill={utensil} />
        <ellipse cx="0" cy="-28" rx="8.5" ry="14" fill={utensil} />
        <circle cx="0" cy="28" r="2.1" fill={hole} />
      </g>

      {/* Whisk (outline head, solid handle) */}
      <g transform={`translate(50 ${crossY}) rotate(30)`}>
        <path
          d="M0,-40 C-7,-37 -9,-22 -6.5,-13 L6.5,-13 C9,-22 7,-37 0,-40 Z"
          fill="none"
          stroke={utensil}
          strokeWidth="2"
        />
        <path d="M0,-38 L0,-13" fill="none" stroke={utensil} strokeWidth="1.3" />
        <path d="M0,-38 C-3.5,-28 -4.6,-20 -4.6,-13" fill="none" stroke={utensil} strokeWidth="1.3" />
        <path d="M0,-38 C3.5,-28 4.6,-20 4.6,-13" fill="none" stroke={utensil} strokeWidth="1.3" />
        <rect x="-6.5" y="-14.5" width="13" height="5" rx="2.5" fill={utensil} />
        <rect x="-3" y="-9" width="6" height="41" rx="3" fill={utensil} />
        <circle cx="0" cy="28" r="2.1" fill={hole} />
      </g>

      {/* Monogram */}
      {monogram && (
        <text
          x="50"
          y="52"
          textAnchor="middle"
          fontFamily="var(--font-brand)"
          fontSize="22"
          fontWeight="600"
          fontStyle="italic"
          fill={monogramColor}
        >
          SC
        </text>
      )}
    </svg>
  )
}
