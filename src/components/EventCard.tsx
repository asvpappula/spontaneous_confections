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

export function EventCard({ event }: { event: SiteEvent }) {
  const { day, month } = eventDateParts(event.date)
  const dateRange = event.endDate
    ? `${formatDate(event.date, { month: 'short', day: 'numeric' })} – ${formatDate(event.endDate, {
        month: 'short',
        day: 'numeric',
      })}`
    : formatDate(event.date, { weekday: 'long', month: 'long', day: 'numeric' })

  return (
    <article className="sticker sticker-hover flex h-full gap-4 p-6">
      {/* Date chip */}
      <div
        className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-purple text-cream"
        aria-hidden
      >
        <span className="font-display text-xl font-bold leading-none">{day}</span>
        <span className="text-[0.6rem] font-semibold uppercase tracking-widest">{month}</span>
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex flex-wrap items-center gap-2">
          <span className="badge bg-blue-soft text-[0.72rem]">{TYPE_LABELS[event.type]}</span>
          <span className="text-sm font-medium text-chocolate-soft">{dateRange}</span>
        </div>

        <h3 className="mt-2 font-display text-lg font-bold text-purple">{event.title}</h3>

        <p className="mt-1 inline-flex items-center gap-1.5 text-base text-chocolate-soft">
          <MapPinIcon className="h-4 w-4 shrink-0 text-pink" />
          <span className="truncate">
            {event.location}
            {event.time ? ` · ${event.time}` : ''}
          </span>
        </p>

        <p className="mt-3 flex-1 text-base leading-relaxed text-chocolate-soft">
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
