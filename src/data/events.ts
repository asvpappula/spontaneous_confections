// =============================================================================
// POP-UPS & EVENTS
// -----------------------------------------------------------------------------
// Powers the "Pop-ups & Events" section on the Home page.
//
// ⚠️  The entries below are SAMPLE events so the section looks complete in the
//     demo. Replace or delete them before launch. When the list is empty the
//     UI automatically shows a friendly "nothing on the calendar" state.
//
// To add an event: copy a block, give it a unique `id`, set `date` to an ISO
// date (YYYY-MM-DD). Past events are hidden automatically.
// =============================================================================

export type EventType = 'pop-up' | 'market' | 'event' | 'seasonal' | 'collab'

export interface SiteEvent {
  id: string
  title: string
  type: EventType
  /** ISO date, e.g. "2026-06-21". Used to sort and hide past events. */
  date: string
  /** Optional end date for multi-day events. */
  endDate?: string
  /** Human-friendly time range, e.g. "10:00 AM – 2:00 PM". */
  time?: string
  location: string
  description: string
  /** Optional external link (tickets, host, RSVP). */
  link?: string
  /** Flag sample data so it is easy to find and remove. */
  isSample?: boolean
}

export const events: SiteEvent[] = [
  {
    id: 'sample-westcliff-market',
    title: 'Westside Farmers Market Pop-Up',
    type: 'market',
    date: '2026-06-20',
    time: '9:00 AM – 1:00 PM',
    location: 'Santa Cruz Westside Farmers Market',
    description:
      'Find a fresh batch of tartlets, Dubai chocolate bars, and seasonal pastries made with fruit from the market that morning.',
    isSample: true,
  },
  {
    id: 'sample-summer-chocolate-class',
    title: 'Summer Bonbon Tasting',
    type: 'event',
    date: '2026-07-11',
    time: '4:00 PM – 5:30 PM',
    location: 'Spontaneous Confections · Capitola Mall',
    description:
      'A guided tasting through our seasonal chocolate confections, from sea-salt caramels to the viral Dubai bar. Limited seats.',
    isSample: true,
  },
  {
    id: 'sample-capitola-art-wine',
    title: 'Capitola Art & Wine Festival Booth',
    type: 'pop-up',
    date: '2026-09-12',
    endDate: '2026-09-13',
    time: '11:00 AM – 6:00 PM',
    location: 'Capitola Village',
    description:
      'Catch us along the Esplanade with a weekend-only menu of small treats and chocolate bars to take down to the beach.',
    isSample: true,
  },
]

/** Upcoming events (today or later), sorted soonest-first. */
export function getUpcomingEvents(now: Date = new Date()): SiteEvent[] {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  return events
    .filter((evt) => {
      const end = new Date(`${evt.endDate ?? evt.date}T23:59:59`)
      return end >= today
    })
    .sort((a, b) => a.date.localeCompare(b.date))
}
