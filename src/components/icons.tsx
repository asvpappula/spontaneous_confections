import type { ReactElement, SVGProps } from 'react'
import type { SocialPlatform } from '../data/social'

type IconProps = SVGProps<SVGSVGElement>

/** Shared wrapper for outline (stroke) icons. */
function Line({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  )
}

/** Shared wrapper for solid (fill) icons. */
function Solid({ children, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden {...props}>
      {children}
    </svg>
  )
}

export const InstagramIcon = (p: IconProps) => (
  <Line {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
  </Line>
)

export const FacebookIcon = (p: IconProps) => (
  <Solid {...p}>
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
  </Solid>
)

export const TikTokIcon = (p: IconProps) => (
  <Solid {...p}>
    <path d="M16.5 3c.36 2.06 1.5 3.49 3.5 3.86v2.55c-1.18 0-2.34-.38-3.5-1.05v5.74c0 3.02-2.2 5.4-5.2 5.4-3 0-5.2-2.38-5.2-5.4 0-2.74 1.97-5 4.7-5.34v2.62c-1.2.22-2.1 1.27-2.1 2.72 0 1.49 1.16 2.7 2.6 2.7 1.45 0 2.6-1.21 2.6-2.8V3h2.6Z" />
  </Solid>
)

export const LinktreeIcon = (p: IconProps) => (
  <Line {...p}>
    <path d="M9 14.5 15 8.5" />
    <path d="M11.5 6 12.5 5a4 4 0 0 1 5.66 5.66l-1 1" />
    <path d="M12.5 18l-1 1A4 4 0 0 1 5.84 13.3l1-1" />
  </Line>
)

export const YelpIcon = (p: IconProps) => (
  <Solid {...p}>
    <path d="M11 3.5c0-.9.86-1.55 1.72-1.3l1.5.43c.7.2 1.13.9 1 1.62l-1.1 6.06c-.2 1.06-1.62 1.27-2.1.3L11.2 4.9a1.5 1.5 0 0 1-.2-.74V3.5ZM10 12.4c.5.86-.2 1.9-1.18 1.77l-5.1-.66c-.86-.11-1.36-1.03-.98-1.8l.66-1.35c.32-.65 1.13-.9 1.76-.53l4.34 2.5c.2.12.37.28.5.47Zm.2 2.9c.78-.5 1.8.1 1.74 1.03l-.3 5.06c-.05.87-.95 1.42-1.74 1.06l-1.4-.64c-.66-.3-.93-1.1-.58-1.74l2.12-3.9c.04-.08.1-.15.16-.21l-.0-.0Zm3.46.46c-.46-.82.27-1.82 1.2-1.64l5.02.95c.85.16 1.28 1.12.84 1.86l-.76 1.3c-.36.62-1.18.8-1.78.4l-4.06-2.7a1.5 1.5 0 0 1-.41-.43l-.28.0Zm.9-2.86c-.94-.1-1.3-1.28-.57-1.9l3.86-3.3c.66-.56 1.68-.25 1.92.58l.42 1.46c.2.7-.25 1.43-.96 1.56l-4.36.79a1.5 1.5 0 0 1-.31.01Z" />
  </Solid>
)

export const MapPinIcon = (p: IconProps) => (
  <Line {...p}>
    <path d="M12 21s-6.5-5.06-6.5-10.5a6.5 6.5 0 0 1 13 0C18.5 15.94 12 21 12 21Z" />
    <circle cx="12" cy="10.5" r="2.4" />
  </Line>
)

export const ClockIcon = (p: IconProps) => (
  <Line {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.5V12l3 1.8" />
  </Line>
)

export const PhoneIcon = (p: IconProps) => (
  <Line {...p}>
    <path d="M6.4 10.6a15 15 0 0 0 7 7l2-2a1 1 0 0 1 1-.26 11 11 0 0 0 3.5.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.1a1 1 0 0 1 1 1 11 11 0 0 0 .56 3.5 1 1 0 0 1-.26 1l-2 2Z" />
  </Line>
)

export const MailIcon = (p: IconProps) => (
  <Line {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m3.5 7.5 8.5 5.5 8.5-5.5" />
  </Line>
)

export const ArrowRightIcon = (p: IconProps) => (
  <Line {...p}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </Line>
)

export const MenuIcon = (p: IconProps) => (
  <Line {...p}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </Line>
)

export const CloseIcon = (p: IconProps) => (
  <Line {...p}>
    <path d="M6 6l12 12" />
    <path d="M18 6 6 18" />
  </Line>
)

export const ExternalLinkIcon = (p: IconProps) => (
  <Line {...p}>
    <path d="M14 4h6v6" />
    <path d="M20 4 11 13" />
    <path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
  </Line>
)

export const CheckIcon = (p: IconProps) => (
  <Line {...p}>
    <path d="m5 12 5 5L20 7" />
  </Line>
)

export const SparkleIcon = (p: IconProps) => (
  <Solid {...p}>
    <path d="M12 2.5c.6 4 2.9 6.3 6.9 6.9-4 .6-6.3 2.9-6.9 6.9-.6-4-2.9-6.3-6.9-6.9 4-.6 6.3-2.9 6.9-6.9Z" />
  </Solid>
)

const SOCIAL_ICONS: Record<SocialPlatform, (p: IconProps) => ReactElement> = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  tiktok: TikTokIcon,
  linktree: LinktreeIcon,
  yelp: YelpIcon,
  email: MailIcon,
  phone: PhoneIcon,
}

export function getSocialIcon(platform: SocialPlatform) {
  return SOCIAL_ICONS[platform] ?? LinktreeIcon
}
