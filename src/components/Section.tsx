import type { ElementType, ReactNode } from 'react'

type Tone = 'cream' | 'surface' | 'deep' | 'purple' | 'pink' | 'blue'

const TONES: Record<Tone, string> = {
  cream: '',
  surface: 'bg-surface',
  deep: 'bg-cream-deep',
  purple: 'bg-purple text-cream',
  pink: 'bg-pink-soft',
  blue: 'bg-blue-soft',
}

interface SectionProps {
  children: ReactNode
  id?: string
  className?: string
  tone?: Tone
  spacing?: 'default' | 'tight' | 'roomy'
  'aria-label'?: string
  'aria-labelledby'?: string
}

const SPACING = {
  tight: 'py-10 sm:py-12',
  default: 'py-12 sm:py-16 lg:py-20',
  roomy: 'py-16 sm:py-20 lg:py-24',
} as const

export function Section({
  children,
  id,
  className = '',
  tone = 'cream',
  spacing = 'default',
  ...aria
}: SectionProps) {
  return (
    <section id={id} className={`${SPACING[spacing]} ${TONES[tone]} ${className}`} {...aria}>
      {children}
    </section>
  )
}

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  intro?: string
  align?: 'left' | 'center'
  as?: ElementType
  id?: string
  /** Inverts colors for use on the dark purple background. */
  inverted?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  as: As = 'h2',
  id,
  inverted = false,
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center'
  return (
    <div className={`${isCenter ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <span className={`eyebrow ${inverted ? 'text-blue' : ''}`}>{eyebrow}</span>
      )}
      <As
        id={id}
        className={`mt-3 text-[2rem] font-extrabold leading-[1.05] sm:text-4xl lg:text-[3rem] ${
          inverted ? 'text-cream' : 'text-purple'
        }`}
      >
        {title}
      </As>
      <div className={`rule-brand mt-5 ${isCenter ? 'mx-auto' : ''}`} aria-hidden />
      {intro && (
        <p className={`mt-5 text-lg sm:text-xl ${inverted ? 'text-cream/90' : 'text-chocolate-soft'}`}>
          {intro}
        </p>
      )}
    </div>
  )
}
