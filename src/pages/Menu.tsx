import { Seo } from '../components/Seo'
import { Section } from '../components/Section'
import { Container } from '../components/Container'
import { ButtonLink } from '../components/ButtonLink'
import { MenuCategorySection } from '../components/MenuCategorySection'
import { Star5 } from '../components/doodles'
import { menu, pricesConfirmed } from '../data/menu'

export function Menu() {
  return (
    <>
      <Seo
        title="Menu"
        description="Explore the Spontaneous Confections menu — from-scratch Dubai chocolate bars, the house-invented moukie, French tarts, entremets, and custom celebration cakes in Capitola, CA."
      />

      {/* Intro */}
      <section className="relative overflow-hidden bg-cream pb-10 pt-10 sm:pt-14">
        {/* Soft background shapes */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 -top-16 h-80 w-80 rounded-full bg-pink/10 blur-3xl" />
          <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-blue/10 blur-3xl" />
        </div>

        <Container className="relative">
          <p className="script text-[1.8rem] leading-none text-pink-deep">fresh from the case</p>
          <h1 className="mt-2 font-display text-[2.6rem] font-extrabold leading-[1.02] text-purple sm:text-5xl lg:text-[3.6rem]">
            Our Menu
          </h1>
          <div className="rule-brand mt-5" aria-hidden />
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-chocolate-soft sm:text-xl">
            Made by hand in small batches, so the case changes with the seasons. Here is a sample of
            what we are known for.
          </p>
          <p className="mt-3 text-base font-medium text-purple/80">
            Seasonal offerings and custom orders available.
          </p>

          {/* Quick-nav to each category */}
          <nav aria-label="Menu categories" className="mt-7">
            <ul className="flex flex-wrap gap-2.5">
              {menu.map((cat) => (
                <li key={cat.id}>
                  <a
                    href={`#${cat.id}`}
                    className="inline-flex min-h-11 items-center rounded-full border border-line-purple bg-surface px-4 font-brand text-[0.95rem] font-semibold text-purple transition-colors hover:bg-pink-soft"
                  >
                    {cat.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </section>

      {/* Category sections, alternating text/image */}
      {menu.map((cat, i) => (
        <MenuCategorySection key={cat.id} category={cat} index={i} />
      ))}

      {!pricesConfirmed && (
        <Container>
          <p className="flex items-start gap-2 py-9 text-base text-chocolate-soft">
            <Star5 className="mt-1 h-4 w-4 shrink-0 text-pink" aria-hidden />
            Prices and what’s available change often, so please confirm in shop. This is a sample of
            what we make.
          </p>
        </Container>
      )}

      {/* Custom CTA */}
      <Section tone="purple" spacing="roomy">
        <Container className="text-center">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-cream sm:text-4xl">
            Looking for something special?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-cream/90">
            We make custom celebration cakes, croquembouche, dessert tables, and catering for events
            of every size.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink to="/contact" variant="pink" withArrow>
              Request a custom order
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  )
}
