import type { SiteEvent } from '../data/events'
import { eventDateParts, formatDate } from '../lib/format'
import { ExternalLinkIcon, MapPinIcon } from './icons'

const TYPE_LABELS: Record<SiteEvent['type'], string> = {
  'pop-up': 'Pop-up',
  market: 'Market',
  event: 'Event',
  seasonal: 'Seasonal',
  collab: 'Collab',
}

/**
 * A single event rendered as a full-width editorial row: a purple date chip on
 * the left, details on the right. The Home page stacks these in a hairline
 * divided list rather than a card grid.
 */
export function EventCard({ event }: { event: SiteEvent }) {
  const { day, month } = eventDateParts(event.date)
  const dateRange = event.endDate
    ? `${formatDate(event.date, { month: 'short', day: 'numeric' })} - ${formatDate(event.endDate, {
        month: 'short',
        day: 'numeric',
      })}`
    : formatDate(event.date, { weekday: 'long', month: 'long', day: 'numeric' })

  return (
    <article className="grid grid-cols-[auto_1fr] items-start gap-x-5 gap-y-4 py-7 sm:gap-x-7">
      {/* Date chip */}
      <div
        className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-purple text-cream"
        aria-hidden
      >
        <span className="font-display text-xl font-bold leading-none">{day}</span>
        <span className="text-[0.6rem] font-semibold uppercase tracking-widest">{month}</span>
      </div>

      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="badge bg-blue-soft text-[0.7rem]">{TYPE_LABELS[event.type]}</span>
          <span className="text-sm font-medium text-chocolate-soft">{dateRange}</span>
        </div>

        <h3 className="mt-2 font-display text-xl font-bold text-purple">{event.title}</h3>

        <p className="mt-1 inline-flex items-center gap-1.5 text-base text-chocolate-soft">
          <MapPinIcon className="h-4 w-4 shrink-0 text-pink" />
          <span>
            {event.location}
            {event.time ? ` · ${event.time}` : ''}
          </span>
        </p>

        <p className="mt-2 max-w-2xl text-base leading-relaxed text-chocolate-soft">
          {event.description}
        </p>

        {event.link && (
          <a
            href={event.link}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-purple hover:text-purple-deep"
          >
            Details
            <ExternalLinkIcon className="h-4 w-4" />
          </a>
        )}
      </div>
    </article>
  )
}
