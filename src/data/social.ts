// =============================================================================
// SOCIAL & CONTACT LINKS
// -----------------------------------------------------------------------------
// Shown in the footer and on the Contact page. Flip `enabled` to true once a
// channel is confirmed. Instagram, Facebook, and Linktree are confirmed real;
// TikTok was not found — leave it disabled unless the client confirms one.
// =============================================================================

export type SocialPlatform =
  | 'instagram'
  | 'facebook'
  | 'tiktok'
  | 'linktree'
  | 'yelp'
  | 'email'
  | 'phone'

export interface SocialLink {
  platform: SocialPlatform
  label: string
  /** Full URL, tel:, or mailto: */
  url: string
  /** Optional @handle for display */
  handle?: string
  enabled: boolean
}

export const socialLinks: SocialLink[] = [
  {
    platform: 'instagram',
    label: 'Instagram',
    url: 'https://www.instagram.com/spontaneous_confections/',
    handle: '@spontaneous_confections',
    enabled: true,
  },
  {
    platform: 'facebook',
    label: 'Facebook',
    url: 'https://www.facebook.com/spontaneousconfections.sc',
    handle: 'Spontaneous Confections',
    enabled: true,
  },
  {
    platform: 'linktree',
    label: 'All our links',
    url: 'https://linktr.ee/spontaneousconfections',
    enabled: true,
  },
  {
    // TODO: no TikTok was found in research. Add the handle and enable if one exists.
    platform: 'tiktok',
    label: 'TikTok',
    url: 'https://www.tiktok.com/',
    enabled: false,
  },
]

/** Only the channels that are confirmed/enabled. */
export const enabledSocialLinks = socialLinks.filter((link) => link.enabled)
