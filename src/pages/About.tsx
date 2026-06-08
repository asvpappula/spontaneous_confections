import { Seo } from '../components/Seo'
import { Section, SectionHeading } from '../components/Section'
import { Container } from '../components/Container'
import { ButtonLink } from '../components/ButtonLink'
import { PlaceholderImage } from '../components/PlaceholderImage'
import { Star5 } from '../components/doodles'
import { about } from '../data/about'

export function About() {
  return (
    <>
      <Seo
        title="About"
        description="Spontaneous Confections is a Black veteran-owned, husband-and-wife patisserie in Capitola — Bordeaux-trained technique, Santa Cruz ingredients, and desserts you won't find anywhere else."
      />

      {/* Header */}
      <section className="bg-cream pb-10 pt-12 sm:pt-16 lg:pb-14">
        <Container>
          <h1 className="max-w-3xl font-display text-[2.5rem] font-extrabold leading-[1.03] tracking-tight text-purple sm:text-5xl lg:text-[3.4rem]">
            {about.heading}
          </h1>
          <div className="rule-brand mt-5" aria-hidden />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-chocolate-soft sm:text-xl">
            {about.lede}
          </p>
        </Container>
      </section>

      {/* Story */}
      <Section tone="surface" spacing="tight" aria-label="Our story">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="space-y-5 lg:col-span-7">
              {about.story.map((paragraph, i) => (
                <p key={i} className="text-lg leading-relaxed text-chocolate-soft">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <div className="sticker overflow-hidden p-0">
                  <PlaceholderImage
                    seed="Justin and Stephanie Lenorovitz"
                    accent="pink"
                    caption="Capitola, California"
                    className="aspect-[4/5] w-full"
                    rounded="rounded-none"
                  />
                </div>
                <p className="mt-3 text-center text-xs text-chocolate-soft">
                  {/* TODO: replace with a licensed photo of the owners or the shop. */}
                  Add a photo of Justin &amp; Stephanie here.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section spacing="tight" aria-label="What we value">
        <Container>
          <SectionHeading title="A few things we believe" />
          <ul className="mt-10 grid gap-x-12 gap-y-9 sm:grid-cols-2">
            {about.values.map((value) => (
              <li key={value.title} className="border-t border-line-purple pt-5">
                <div className="flex items-center gap-2.5">
                  <Star5 className="h-4 w-4 shrink-0 text-pink" aria-hidden />
                  <h3 className="font-display text-xl font-semibold text-purple">{value.title}</h3>
                </div>
                <p className="mt-2.5 max-w-prose text-base leading-relaxed text-chocolate-soft">
                  {value.description}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Timeline */}
      <Section tone="deep" spacing="tight" aria-label="Our journey">
        <Container>
          <SectionHeading title="From pop-up to storefront" />
          <ol className="mt-10 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
            {about.timeline.map((item) => (
              <li key={item.year} className="border-t-2 border-pink/40 pt-5">
                <span className="font-display text-2xl font-bold text-pink-deep">{item.year}</span>
                <h3 className="mt-2 font-display text-lg font-semibold text-purple">{item.title}</h3>
                <p className="mt-1.5 text-base leading-relaxed text-chocolate-soft">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Team */}
      <Section tone="surface" spacing="tight" aria-label="The team">
        <Container>
          <SectionHeading eyebrow="Who we are" title="The makers" />
          <div className="mt-9 grid gap-8 sm:grid-cols-2">
            {about.team.map((member, i) => (
              <article key={member.name} className="sticker sticker-hover overflow-hidden">
                <div className="border-b border-line-purple">
                  <PlaceholderImage
                    seed={member.name}
                    accent={i % 2 === 0 ? 'blue' : 'purple'}
                    caption={member.name}
                    className="aspect-[3/2] w-full"
                    rounded="rounded-none"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-purple">{member.name}</h3>
                  <p className="font-display text-sm font-semibold text-blue-deep">{member.role}</p>
                  <p className="mt-3 text-base leading-relaxed text-chocolate-soft">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Closing CTA */}
      <Section tone="purple" spacing="roomy">
        <Container className="text-center">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-cream sm:text-4xl">
            {about.closing.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-cream/90">{about.closing.body}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink to="/menu" variant="pink" withArrow>
              Explore the menu
            </ButtonLink>
            <ButtonLink to="/contact" variant="ghost">
              Get in touch
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  )
}
