import { enabledSocialLinks } from '../data/social'
import { getSocialIcon } from './icons'

interface SocialLinksProps {
  /** 'light' for light backgrounds, 'dark' for the plum footer. */
  variant?: 'light' | 'dark'
  className?: string
}

export function SocialLinks({ variant = 'light', className = '' }: SocialLinksProps) {
  const hover =
    variant === 'dark'
      ? 'text-cream hover:bg-white/15'
      : 'text-chocolate hover:bg-cream-deep'

  return (
    <ul className={`flex flex-wrap items-center gap-1.5 ${className}`}>
      {enabledSocialLinks.map((link) => {
        const Icon = getSocialIcon(link.platform)
        return (
          <li key={link.platform}>
            <a
              href={link.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${link.label}${link.handle ? ` (${link.handle})` : ''}`}
              className={`grid h-11 w-11 place-items-center rounded-full transition-colors ${hover}`}
            >
              <Icon className="h-5 w-5" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
