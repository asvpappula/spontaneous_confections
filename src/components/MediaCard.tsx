import type { MediaItem } from '../data/media'
import { formatDate } from '../lib/format'
import { ExternalLinkIcon } from './icons'
import { PlaceholderImage } from './PlaceholderImage'

function linkLabel(item: MediaItem) {
  if (item.type === 'listing') return `View on ${item.publication}`
  return 'Read the feature'
}

/** A clean editorial media clipping: cream card, purple title, blue badge. */
export function MediaCard({ item }: { item: MediaItem }) {
  const dateText = formatDate(item.date) || item.dateLabel || ''
  const isPlaceholder = item.type === 'placeholder'

  return (
    <article
      className={`sticker flex h-full flex-col overflow-hidden ${
        isPlaceholder ? 'opacity-85' : 'sticker-hover'
      }`}
      style={isPlaceholder ? { borderStyle: 'dashed' } : undefined}
    >
      {/* Visual */}
      <div className="aspect-[16/10] w-full border-b border-line-purple">
        {item.image ? (
          <img
            src={item.image}
            alt={`${item.publication}: ${item.title}`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        ) : (
          <PlaceholderImage
            seed={item.publication + item.id}
            caption={item.publication}
            rounded="rounded-none"
            className="h-full w-full"
          />
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="badge bg-blue-soft text-[0.7rem]">{item.publication}</span>
          {dateText && (
            <span className="text-xs font-medium text-chocolate-soft">{dateText}</span>
          )}
        </div>

        <h3 className="mt-3 font-display text-lg font-bold leading-snug text-purple">
          {item.title}
        </h3>

        <p className="mt-2 flex-1 text-base leading-relaxed text-chocolate-soft">{item.snippet}</p>

        {item.link ? (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-purple hover:text-purple-deep"
          >
            {linkLabel(item)}
            <ExternalLinkIcon className="h-4 w-4" />
          </a>
        ) : (
          <span className="mt-4 text-sm font-medium text-chocolate-soft/70">Coming soon</span>
        )}
      </div>
    </article>
  )
}
