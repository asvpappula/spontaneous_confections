import { site } from '../data/site'
import { ButtonLink } from './ButtonLink'
import { StickerBadge } from './decor'
import { ClockIcon, MapPinIcon, PhoneIcon } from './icons'

/**
 * "Where to Find Us" — a clean panel with location details + a live map.
 * Reused on the Home and Contact pages. The map is a no-API-key Google Maps
 * embed, lazy-loaded.
 */
export function FindUs() {
  return (
    <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
      {/* Details */}
      <div className="sticker flex flex-col p-7 sm:p-8">
        <StickerBadge accent="blue">
          <MapPinIcon className="h-3.5 w-3.5" />
          Find us here
        </StickerBadge>

        <h3 className="mt-4 font-display text-2xl font-bold text-purple">{site.location.venue}</h3>
        <address className="mt-2 not-italic text-base text-chocolate-soft">
          {site.location.street}
          <br />
          {site.location.city}, {site.location.region} {site.location.postalCode}
        </address>

        <div className="mt-5 flex flex-wrap gap-3">
          <ButtonLink to={site.location.directionsUrl} variant="pink" withArrow>
            Get Directions
          </ButtonLink>
          <ButtonLink to={site.contact.phoneHref} variant="outline">
            <PhoneIcon className="h-4 w-4" />
            Call the Shop
          </ButtonLink>
        </div>

        <hr className="hairline my-6" />

        <div className="flex items-start gap-3">
          <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-purple" />
          <div className="flex-1">
            <h4 className="font-display text-base font-semibold text-purple">Hours</h4>
            <dl className="mt-2 space-y-1">
              {site.hours.map((row) => (
                <div key={row.day} className="flex justify-between gap-6 text-base">
                  <dt className="text-chocolate-soft">{row.day}</dt>
                  <dd className="font-semibold text-chocolate">{row.hours}</dd>
                </div>
              ))}
            </dl>
            {!site.hoursConfirmed && (
              <p className="mt-3 text-sm italic leading-relaxed text-chocolate-soft">
                {site.hoursNote}
              </p>
            )}
          </div>
        </div>

        <a
          href={site.contact.phoneHref}
          className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-purple hover:text-purple-deep"
        >
          <PhoneIcon className="h-4 w-4" />
          {site.contact.phoneDisplay}
        </a>
      </div>

      {/* Map */}
      <div className="sticker min-h-[20rem] overflow-hidden p-0">
        <iframe
          title={`Map showing ${site.name} at ${site.location.venue}`}
          src={site.location.mapEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full min-h-[20rem] w-full border-0"
        />
      </div>
    </div>
  )
}
