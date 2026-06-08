import { Seo } from '../components/Seo'
import { Section, SectionHeading } from '../components/Section'
import { Container } from '../components/Container'
import { ButtonLink } from '../components/ButtonLink'
import { EventCard } from '../components/EventCard'
import { FindUs } from '../components/FindUs'
import { HeroDessert } from '../components/HeroDessert'
import { Star5 } from '../components/doodles'
import { ClockIcon, ExternalLinkIcon, MapPinIcon } from '../components/icons'
import { formatDate } from '../lib/format'
import { site } from '../data/site'
import { home } from '../data/home'
import { about } from '../data/about'
import { getFeaturedItems } from '../data/menu'
import { getUpcomingEvents } from '../data/events'
import { getFeaturedMedia } from '../data/media'

export function Home() {
  const featured = getFeaturedItems()
  const upcoming = getUpcomingEvents().slice(0, 3)
  const featuredMedia = getFeaturedMedia(3)

  return (
    <>
      <Seo fullTitle={site.seo.defaultTitle} description={site.seo.defaultDescription} />

      {/* ---------------------------------------------------------------- Hero */}
      {/* Same flat cream base as the header so the two read as one top section.
          The only pink glow lives inside HeroDessert, around the image (hero art),
          so nothing changes color abruptly under the nav. */}
      <section className="relative overflow-hidden bg-cream">
        <Container className="relative grid items-center gap-6 pb-12 pt-4 sm:pt-6 lg:grid-cols-2 lg:gap-6 lg:pb-14 lg:pt-8">
          {/* Left: bold stacked poster headline, copy, CTAs */}
          <div>
            <h1 className="font-poster text-[clamp(3rem,8.5vw,6.4rem)] font-normal uppercase leading-[0.92] tracking-[-0.01em] text-purple">
              <span className="block">Baking</span>
              <span className="block">Happiness</span>
              <span className="block">For Every</span>
              <span className="relative block w-fit">
                Heart
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-1.5 w-full rounded-full bg-pink sm:h-2"
                />
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-[clamp(1.15rem,1.5vw,1.4rem)] leading-relaxed text-chocolate-soft">
              {home.hero.sub}
            </p>

            <div className="mt-7 flex flex-wrap gap-3.5">
              <ButtonLink to={site.ctaPrimary.to} variant="primary" withArrow className="btn-lg">
                {site.ctaPrimary.label}
              </ButtonLink>
              <ButtonLink to={site.ctaSecondary.to} variant="outline" className="btn-lg">
                {site.ctaSecondary.label}
              </ButtonLink>
            </div>

            {/* Hours + location in a soft compact info bar */}
            <div className="mt-6 inline-flex flex-wrap items-center gap-x-4 gap-y-1 rounded-2xl border border-line-purple bg-pink-soft/40 px-4 py-2.5 text-sm font-medium text-chocolate-soft">
              <span className="inline-flex items-center gap-1.5">
                <ClockIcon className="h-4 w-4 text-purple/80" />
                {site.hours[0]?.day}, {site.hours[0]?.hours}
              </span>
              <span aria-hidden className="hidden h-4 w-px bg-line-purple sm:block" />
              <span className="inline-flex items-center gap-1.5">
                <MapPinIcon className="h-4 w-4 text-purple/80" />
                {site.location.venue}
              </span>
            </div>
          </div>

          {/* Right: static floating / falling bakery composition */}
          <HeroDessert />
        </Container>
      </section>

      {/* -------------------------------------------------------- Where to find */}
      <Section tone="surface" aria-labelledby="findus-heading">
        <Container>
          <SectionHeading
            id="findus-heading"
            eyebrow={home.findUs.eyebrow}
            title={home.findUs.heading}
            intro={home.findUs.intro}
          />
          <div className="mt-9">
            <FindUs />
          </div>
        </Container>
      </Section>

      {/* ------------------------------------------------------ Pop-ups & events */}
      <Section tone="pink" aria-labelledby="events-heading">
        <Container>
          <SectionHeading
            id="events-heading"
            title={home.events.heading}
            intro={home.events.intro}
          />
          <div className="mt-8">
            {upcoming.length > 0 ? (
              <div className="divide-y divide-line-purple border-t border-line-purple">
                {upcoming.map((evt) => (
                  <EventCard key={evt.id} event={evt} />
                ))}
              </div>
            ) : (
              <div className="border-t border-line-purple pt-8">
                <p className="max-w-md text-lg text-chocolate-soft">{home.events.emptyState}</p>
                <div className="mt-5">
                  <ButtonLink to="/contact" variant="outline">
                    Book a custom order
                  </ButtonLink>
                </div>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* ------------------------------------------------------------- Featured */}
      <Section tone="surface" aria-labelledby="featured-heading">
        <Container>
          <div className="max-w-2xl">
            <h2
              id="featured-heading"
              className="font-display text-[2.1rem] font-extrabold leading-[1.04] tracking-tight text-purple sm:text-[2.6rem] lg:text-[3.1rem]"
            >
              {home.featured.heading}
            </h2>
            <div className="rule-brand mt-5" aria-hidden />
            <p className="mt-5 text-lg leading-relaxed text-chocolate-soft">
              {home.featured.intro}
            </p>
          </div>

          <ul className="mt-10 grid gap-x-12 sm:grid-cols-2">
            {featured.slice(0, 6).map((item) => (
              <li key={item.name} className="border-t border-line-purple py-5">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-xl font-bold leading-snug text-purple">
                    {item.name}
                  </h3>
                  <span className="shrink-0 font-display text-base font-semibold text-pink-deep">
                    {item.priceNote}
                  </span>
                </div>
                <p className="mt-1.5 text-base leading-relaxed text-chocolate-soft">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <ButtonLink to="/menu" variant="primary" withArrow>
              See the full menu
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* ----------------------------------------------------------- About teaser */}
      <Section tone="deep" aria-labelledby="about-heading">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <SectionHeading
                id="about-heading"
                eyebrow={home.about.eyebrow}
                title={home.about.heading}
              />
              <p className="mt-5 text-lg leading-relaxed text-chocolate-soft">{about.lede}</p>
              <div className="mt-7">
                <ButtonLink to="/about" variant="outline" withArrow>
                  Read our story
                </ButtonLink>
              </div>
            </div>

            <ul className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {about.values.map((value) => (
                <li key={value.title} className="border-t border-line-purple pt-4">
                  <div className="flex items-center gap-2">
                    <Star5 className="h-4 w-4 shrink-0 text-pink" aria-hidden />
                    <h3 className="font-display text-lg font-semibold text-purple">{value.title}</h3>
                  </div>
                  <p className="mt-1.5 text-base leading-relaxed text-chocolate-soft">
                    {value.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* ------------------------------------------------------------- Press */}
      {featuredMedia.length > 0 && (
        <Section aria-labelledby="press-heading">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2
                id="press-heading"
                className="font-display text-[2.1rem] font-extrabold leading-[1.04] tracking-tight text-purple sm:text-[2.6rem] lg:text-[3.1rem]"
              >
                {home.media.heading}
              </h2>
              <ButtonLink to="/media" variant="outline">
                All press
              </ButtonLink>
            </div>
            <div className="rule-brand mt-5" aria-hidden />

            <ul className="mt-8 divide-y divide-line-purple border-t border-line-purple">
              {featuredMedia.map((item) => {
                const dateText = formatDate(item.date) || item.dateLabel || ''
                return (
                  <li key={item.id} className="py-6">
                    <a
                      href={item.link ?? '/media'}
                      {...(item.link ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                      className="group flex items-start justify-between gap-6"
                    >
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <span className="font-brand text-sm font-bold tracking-tight text-blue-deep">
                            {item.publication}
                          </span>
                          {dateText && (
                            <span className="text-sm text-chocolate-soft">{dateText}</span>
                          )}
                        </div>
                        <h3 className="mt-2 font-display text-xl font-bold leading-snug text-purple transition-colors group-hover:text-purple-deep">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 max-w-2xl text-base leading-relaxed text-chocolate-soft">
                          {item.snippet}
                        </p>
                      </div>
                      <ExternalLinkIcon className="mt-1 hidden h-5 w-5 shrink-0 text-purple transition-colors group-hover:text-purple-deep sm:block" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </Container>
        </Section>
      )}

      {/* --------------------------------------------------------------- CTA */}
      <Section tone="purple" spacing="roomy">
        <Container className="text-center">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-cream sm:text-4xl">
            {home.cta.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-cream/90">{home.cta.body}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink to="/contact" variant="pink" withArrow>
              Start a custom order
            </ButtonLink>
            <ButtonLink to={site.contact.phoneHref} variant="ghost">
              Call {site.contact.phoneDisplay}
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  )
}
