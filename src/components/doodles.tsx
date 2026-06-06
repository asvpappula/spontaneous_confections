import type { SVGProps } from 'react'

// Hand-drawn-style decorative doodles (stars, hearts, squiggles, suns…).
// All are aria-hidden and inherit `currentColor`, so color them with text-*.

type P = SVGProps<SVGSVGElement>

function Solid({ children, ...p }: P) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden {...p}>
      {children}
    </svg>
  )
}

function Line({ children, ...p }: P) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...p}
    >
      {children}
    </svg>
  )
}

export const Star5 = (p: P) => (
  <Solid {...p}>
    <path d="M12 2.2l2.7 5.9 6.5.6-4.9 4.3 1.5 6.4L12 17.9l-5.8 3.5 1.5-6.4-4.9-4.3 6.5-.6z" />
  </Solid>
)

export const FourStar = (p: P) => (
  <Solid {...p}>
    <path d="M12 2.5c.6 4 2.9 6.3 6.9 6.9-4 .6-6.3 2.9-6.9 6.9-.6-4-2.9-6.3-6.9-6.9 4-.6 6.3-2.9 6.9-6.9Z" />
  </Solid>
)

export const Heart = (p: P) => (
  <Solid {...p}>
    <path d="M12 20.6l-1.6-1.4C5.3 14.7 2.4 12 2.4 8.6 2.4 6 4.4 4 7 4c1.7 0 3.3.9 4 2.4C11.7 4.9 13.3 4 15 4c2.6 0 4.6 2 4.6 4.6 0 3.4-2.9 6.1-8 10.6z" />
  </Solid>
)

export const Squiggle = (p: P) => (
  <Line {...p}>
    <path d="M2 14c2-5 4-5 6 0s4 5 6 0 4-5 6 0" />
  </Line>
)

export const Swirl = (p: P) => (
  <Line {...p}>
    <path d="M12 12a2.5 2.5 0 1 1-2.5-2.5A5 5 0 1 1 4.5 14.5" />
  </Line>
)

export const Sun = (p: P) => (
  <Line {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2.4M12 19.6V22M2 12h2.4M19.6 12H22M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M19.1 4.9l-1.7 1.7M6.6 17.4l-1.7 1.7" />
  </Line>
)

export const Dots = (p: P) => (
  <Solid {...p}>
    <circle cx="5" cy="12" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="19" cy="12" r="2" />
  </Solid>
)
