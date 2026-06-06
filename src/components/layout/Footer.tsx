import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { site, formattedAddress } from '../../data/site'
import { Logo } from '../Logo'
import { SocialLinks } from '../SocialLinks'
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from '../icons'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-purple text-cream">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        {/* Brand */}
        <div className="lg:col-span-4">
          <Logo variant="footer" className="h-12 w-auto" />
          <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-cream/85">
            {site.shortDescription}
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-pink-soft">
            Est. {site.established} · Black veteran-owned · Capitola, CA
          </p>
          <SocialLinks variant="dark" className="mt-5" />
        </div>

        {/* Quick links */}
        <nav aria-label="Footer" className="lg:col-span-2">
          <h2 className="font-brand text-sm font-semibold uppercase tracking-widest text-blue">
            Explore
          </h2>
          <ul className="mt-4 space-y-1">
            {site.nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="inline-flex min-h-9 items-center text-[0.95rem] text-cream/85 transition-colors hover:text-cream"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Visit */}
        <div className="lg:col-span-3">
          <h2 className="font-brand text-sm font-semibold uppercase tracking-widest text-blue">
            Visit
          </h2>
          <ul className="mt-4 space-y-3 text-[0.95rem] text-cream/85">
            <li>
              <a
                href={site.location.directionsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-start gap-2.5 transition-colors hover:text-cream"
              >
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
                <span>{formattedAddress}</span>
              </a>
            </li>
            <li className="inline-flex items-start gap-2.5">
              <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
              <span>
                {site.hours.map((row) => (
                  <span key={row.day} className="block">
                    {row.day}: {row.hours}
                  </span>
                ))}
              </span>
            </li>
            <li>
              <a
                href={site.contact.phoneHref}
                className="inline-flex items-center gap-2.5 transition-colors hover:text-cream"
              >
                <PhoneIcon className="h-4 w-4 shrink-0 text-blue" />
                {site.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.contact.email}`}
                className="inline-flex items-center gap-2.5 break-all transition-colors hover:text-cream"
              >
                <MailIcon className="h-4 w-4 shrink-0 text-blue" />
                {site.contact.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="lg:col-span-3">
          <h2 className="font-brand text-sm font-semibold uppercase tracking-widest text-blue">
            Sweet news
          </h2>
          <p className="mt-4 text-[0.95rem] text-cream/85">
            New flavors, pop-ups, and seasonal menus, straight to your inbox.
          </p>
          <NewsletterForm />
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-cream/75 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="text-pink-soft">{site.tagline}</p>
        </div>
      </div>
    </footer>
  )
}

function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: connect to an email provider (Mailchimp, Buttondown, Resend, etc.).
    if (!email) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <form className="mt-4" onSubmit={onSubmit} noValidate>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex gap-2">
        <input
          id="newsletter-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="min-h-11 w-full rounded-full border border-cream/25 bg-cream/10 px-4 text-sm text-cream placeholder:text-cream/55 focus-visible:border-cream"
        />
        <button
          type="submit"
          className="min-h-11 shrink-0 rounded-full bg-cream px-4 font-brand text-sm font-semibold text-purple transition-colors hover:bg-pink-soft"
        >
          Sign up
        </button>
      </div>
      <p className="mt-2 min-h-5 text-xs text-pink-soft" role="status" aria-live="polite">
        {submitted ? 'Thanks! Newsletter sign-up is coming soon.' : ''}
      </p>
    </form>
  )
}
