import { Seo } from '../components/Seo'
import { Section, SectionHeading } from '../components/Section'
import { Container } from '../components/Container'
import { ButtonLink } from '../components/ButtonLink'
import { MediaCard } from '../components/MediaCard'
import { StickerBadge } from '../components/decor'
import { media } from '../data/media'

export function Media() {
  const press = media.filter((m) => m.type === 'press' || m.type === 'placeholder')
  const listings = media.filter((m) => m.type === 'listing')

  return (
    <>
      <Seo
        title="Press & Media"
        description="Spontaneous Confections in the press, featured by Good Times Santa Cruz and Lookout Santa Cruz for handmade pastries, Dubai chocolate bars, and our story."
      />

      {/* Header */}
      <section className="pb-9 pt-10 sm:pt-14">
        <Container>
          <StickerBadge accent="blue">Press &amp; Mentions</StickerBadge>
          <h1 className="mt-4 font-display text-4xl font-extrabold text-purple sm:text-5xl lg:text-[3.8rem]">
            In the local press
          </h1>
          <div className="rule-brand mt-5" aria-hidden />
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-chocolate-soft">
            Features, reviews, and mentions from around Santa Cruz County.
          </p>
        </Container>
      </section>

      {/* Press */}
      <Section spacing="tight" aria-label="Press features">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {press.map((item) => (
              <MediaCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Listings */}
      {listings.length > 0 && (
        <Section tone="deep" spacing="tight" aria-label="Find us around the web">
          <Container>
            <SectionHeading eyebrow="Around the web" title="Find us listed on" />
            <div className="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {listings.map((item) => (
                <MediaCard key={item.id} item={item} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Press inquiry CTA */}
      <Section spacing="default">
        <Container>
          <div className="sticker bg-pink-soft px-6 py-12 text-center sm:px-10">
            <h2 className="mx-auto max-w-2xl font-display text-2xl font-bold text-purple sm:text-3xl">
              Writing about Santa Cruz food?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-chocolate-soft">
              Happy to share our story, samples, and photos. Send a note and we’ll get back to
              you.
            </p>
            <div className="mt-7 flex justify-center">
              <ButtonLink to="/contact" variant="pink" withArrow>
                Press &amp; media inquiries
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
