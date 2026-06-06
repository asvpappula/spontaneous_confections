import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRightIcon } from './icons'

type Variant = 'primary' | 'pink' | 'outline' | 'ghost'

interface ButtonLinkProps {
  /** Internal route ("/menu") or external ("https://", "tel:", "mailto:"). */
  to: string
  variant?: Variant
  children: ReactNode
  className?: string
  withArrow?: boolean
  ariaLabel?: string
}

function isExternal(to: string) {
  return /^(https?:|tel:|mailto:)/.test(to)
}

export function ButtonLink({
  to,
  variant = 'primary',
  children,
  className = '',
  withArrow = false,
  ariaLabel,
}: ButtonLinkProps) {
  const classes = `btn btn-${variant} ${className}`.trim()
  const content = (
    <>
      {children}
      {withArrow && <ArrowRightIcon className="h-4 w-4" />}
    </>
  )

  if (isExternal(to)) {
    const opensNewTab = /^https?:/.test(to)
    return (
      <a
        href={to}
        className={classes}
        aria-label={ariaLabel}
        {...(opensNewTab ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
      >
        {content}
      </a>
    )
  }

  return (
    <Link to={to} className={classes} aria-label={ariaLabel}>
      {content}
    </Link>
  )
}
