import { useState } from 'react'

// The floating / falling bakery composition (transparent PNG). Static image with
// a subtle hover lift only (no constant animation). Drop the file at this path and
// it shows automatically; until then a tasteful placeholder fills the space.
const SRC = '/assets/hero/floating-desserts.png'
const ALT =
  'A falling cluster of handmade pastries: linzer cookies, caramel cream puffs, a red currant tart, almond cookies, and a golden mousse dome'

export function HeroDessert() {
  const [failed, setFailed] = useState(false)

  return (
    <div className="relative mx-auto flex w-full max-w-[420px] items-center justify-center sm:max-w-[500px] lg:max-w-[560px] xl:max-w-[620px]">
      {/* Wide soft pink/cream + blue glow, spread across the right side (airy, not a box) */}
      <div aria-hidden className="pointer-events-none absolute -inset-x-12 -inset-y-6">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(58% 48% at 52% 44%, var(--color-pink-soft), transparent 72%)',
          }}
        />
        <div
          className="absolute left-0 top-[10%] h-3/4 w-2/3 rounded-full opacity-60 blur-3xl"
          style={{
            background: 'radial-gradient(closest-side, var(--color-blue-soft), transparent 72%)',
          }}
        />
      </div>

      {/* Soft floating shadow on the "ground" under the falling desserts */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[3%] left-1/2 h-5 w-1/2 -translate-x-1/2 rounded-[50%] blur-xl"
        style={{ background: 'rgba(72, 42, 112, 0.20)' }}
      />

      {failed ? (
        <div className="relative grid aspect-[4/5] w-full place-items-center">
          <div className="text-center">
            <p className="font-display text-lg font-bold text-purple/70">Bakery photo</p>
            <p className="mt-1 text-xs text-chocolate-soft">
              Add floating-desserts.png to /public/assets/hero
            </p>
          </div>
        </div>
      ) : (
        <img
          src={SRC}
          alt={ALT}
          width={1122}
          height={1402}
          decoding="async"
          onError={() => setFailed(true)}
          className="hero-img relative h-auto w-full object-contain"
          style={{ filter: 'drop-shadow(0 26px 28px rgba(72, 42, 112, 0.22))' }}
        />
      )}
    </div>
  )
}
