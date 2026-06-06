import { useState } from 'react'
import type { ReactElement, SVGProps } from 'react'
import { Container } from './Container'
import { FourStar, Star5, Heart, Sun, Swirl } from './doodles'
import { ACCENT_PASTEL, ACCENT_SOLID } from '../lib/accents'
import type { MenuCategory } from '../data/menu'

// Soft organic blob frames for the side medallions, alternated so the
// categories feel hand-arranged instead of a row of identical circles.
const BLOBS = [
  '46% 54% 54% 46% / 52% 46% 54% 48%',
  '56% 44% 46% 54% / 46% 56% 44% 54%',
  '50% 50% 44% 56% / 56% 44% 56% 44%',
]

// A distinct doodle per category so the placeholder medallions read as a set of
// designed emblems instead of one repeated sparkle.
type Doodle = (p: SVGProps<SVGSVGElement>) => ReactElement
const CATEGORY_ICON: Record<string, Doodle> = {
  'dubai-chocolate-bars': Star5,
  tarts: Sun,
  viennoiserie: Swirl,
  'cookies-small-treats': Heart,
  'custom-catering': FourStar,
}

/**
 * The side visual for a category. Shows the transparent product PNG when the
 * file exists; otherwise renders a soft accent medallion with the category's
 * emblem, so the page reads as finished even before every photo is in.
 */
function MenuMedallion({
  categoryId,
  image,
  accent,
  blobIndex,
}: {
  categoryId: string
  image?: { src: string; alt: string }
  accent: MenuCategory['accent']
  blobIndex: number
}) {
  const [failed, setFailed] = useState(false)
  const pastel = ACCENT_PASTEL[accent]
  const solid = ACCENT_SOLID[accent]
  const blob = BLOBS[blobIndex % BLOBS.length]
  const showImage = Boolean(image) && !failed
  const Icon = CATEGORY_ICON[categoryId] ?? FourStar

  return (
    <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[420px]">
      {/* Soft glow behind the medallion */}
      <div
        aria-hidden
        className="absolute -inset-4 opacity-55 blur-2xl"
        style={{ background: pastel, borderRadius: blob }}
      />
      {/* Medallion frame: pastel fill, faint accent ring, soft drop shadow */}
      <div
        className="relative grid aspect-square w-full place-items-center overflow-hidden"
        style={{
          background: pastel,
          borderRadius: blob,
          boxShadow: `inset 0 0 0 1.5px ${solid}26, var(--shadow-card)`,
        }}
      >
        {/* Soft top sheen so the pastel reads as a surface, not a flat fill */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(120% 90% at 50% 12%, rgba(255, 255, 255, 0.55), transparent 60%)',
          }}
        />
        {showImage && image ? (
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
            className="absolute inset-0 h-full w-full object-contain p-5"
            style={{ filter: 'drop-shadow(0 14px 16px rgba(72, 42, 112, 0.18))' }}
          />
        ) : (
          <Icon
            aria-hidden
            style={{ color: solid }}
            className="relative h-[30%] w-[30%] opacity-65"
          />
        )}
      </div>
    </div>
  )
}

/**
 * One editorial menu category: a bold heading and a clean dotted-leader item
 * list on one side, a product medallion on the other. Sides alternate by index
 * on desktop; on mobile the text always stacks above the image.
 */
export function MenuCategorySection({
  category,
  index,
}: {
  category: MenuCategory
  index: number
}) {
  const reverse = index % 2 === 1
  const tint = reverse ? 'bg-pink-soft/30' : 'bg-cream'

  return (
    <section
      id={category.id}
      aria-labelledby={`cat-${category.id}`}
      className={`scroll-mt-24 py-12 sm:py-14 lg:py-16 ${tint}`}
    >
      <Container>
        <div className="grid items-center gap-9 lg:grid-cols-2 lg:gap-16">
          {/* Text side — first in the DOM so mobile stacks text then image */}
          <div className={reverse ? 'lg:order-2' : ''}>
            <h2
              id={`cat-${category.id}`}
              className="font-display text-3xl font-extrabold leading-tight text-purple sm:text-4xl lg:text-[2.7rem]"
            >
              {category.title}
            </h2>
            <div className="rule-brand mt-4" aria-hidden />
            <p className="mt-4 max-w-md text-lg leading-relaxed text-chocolate-soft">
              {category.blurb}
            </p>

            <ul className="mt-7 space-y-6">
              {category.items.map((item) => (
                <li key={item.name}>
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-lg font-semibold text-chocolate sm:text-xl">
                      {item.name}
                    </span>
                    <span
                      aria-hidden
                      className="h-px flex-1 translate-y-[-3px] border-b border-dotted border-purple/30"
                    />
                    <span className="whitespace-nowrap font-display text-base font-semibold text-purple sm:text-lg">
                      {item.priceNote}
                    </span>
                  </div>
                  <p className="mt-1 text-[0.95rem] leading-relaxed text-chocolate-soft">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>

            {category.note && (
              <p className="mt-6 text-sm italic text-chocolate-soft">{category.note}</p>
            )}
          </div>

          {/* Image side */}
          <div className={reverse ? 'lg:order-1' : ''}>
            <MenuMedallion
              categoryId={category.id}
              image={category.image}
              accent={category.accent}
              blobIndex={index}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
