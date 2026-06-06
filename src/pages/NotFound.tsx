import { Seo } from '../components/Seo'
import { Section } from '../components/Section'
import { Container } from '../components/Container'
import { ButtonLink } from '../components/ButtonLink'
import { StickerBadge } from '../components/decor'

export function NotFound() {
  return (
    <>
      <Seo title="Page not found" />
      <Section spacing="roomy">
        <Container className="text-center">
          <StickerBadge accent="blue">404</StickerBadge>
          <h1 className="mt-5 font-display text-5xl font-bold text-purple sm:text-6xl">
            This page melted
          </h1>
          <p className="mx-auto mt-4 max-w-md text-lg text-chocolate-soft">
            We couldn’t find that page. Let’s get you back to something sweet.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink to="/" variant="pink" withArrow>
              Back home
            </ButtonLink>
            <ButtonLink to="/menu" variant="outline">
              See the menu
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  )
}
