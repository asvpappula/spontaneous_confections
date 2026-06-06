import type { ElementType, ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: ElementType
  /** Narrower max width for reading-heavy sections. */
  size?: 'default' | 'narrow' | 'wide'
}

const MAX_WIDTH = {
  narrow: 'max-w-3xl',
  default: 'max-w-6xl',
  wide: 'max-w-7xl',
} as const

export function Container({
  children,
  className = '',
  as: As = 'div',
  size = 'default',
}: ContainerProps) {
  return (
    <As className={`mx-auto w-full ${MAX_WIDTH[size]} px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </As>
  )
}
