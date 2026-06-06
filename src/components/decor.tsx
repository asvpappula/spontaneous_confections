import type { ReactNode } from 'react'
import { ACCENT_PASTEL, ACCENT_SOLID, type Accent } from '../lib/accents'

/* -----------------------------------------------------------------------------
   WaveDivider — a soft wavy edge between two section colors.
   Set `color` to the color of the section that follows, and place it at the
   bottom of the current section so it "waves" into the next.
----------------------------------------------------------------------------- */
interface WaveDividerProps {
  color?: string
  className?: string
  flip?: boolean
}

export function WaveDivider({
  color = 'var(--color-cream)',
  className = '',
  flip = false,
}: WaveDividerProps) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden>
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        className={`block h-6 w-full sm:h-9 ${flip ? 'rotate-180' : ''}`}
      >
        <path
          d="M0,20 C150,42 300,2 450,18 C600,34 760,4 920,20 C1040,32 1140,14 1200,18 L1200,40 L0,40 Z"
          fill={color}
        />
      </svg>
    </div>
  )
}

/* -----------------------------------------------------------------------------
   StickerBadge — a bright pill with a dark outline (the flyer's little labels).
----------------------------------------------------------------------------- */
interface StickerBadgeProps {
  children: ReactNode
  accent?: Accent
  /** 'pastel' (light fill) or 'solid' (saturated fill, light text). */
  fill?: 'pastel' | 'solid'
  className?: string
}

export function StickerBadge({
  children,
  accent = 'blue',
  fill = 'pastel',
  className = '',
}: StickerBadgeProps) {
  const style =
    fill === 'solid'
      ? { backgroundColor: ACCENT_SOLID[accent], color: 'var(--color-cream)' }
      : { backgroundColor: ACCENT_PASTEL[accent] }
  return (
    <span className={`badge ${className}`} style={style}>
      {children}
    </span>
  )
}
