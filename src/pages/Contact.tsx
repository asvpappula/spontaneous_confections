import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { Seo } from '../components/Seo'
import { Section } from '../components/Section'
import { Container } from '../components/Container'
import { FindUs } from '../components/FindUs'
import { SocialLinks } from '../components/SocialLinks'
import { CheckIcon, MailIcon, PhoneIcon } from '../components/icons'
import { site } from '../data/site'
import { contact } from '../data/contact'

interface FormState {
  name: string
  email: string
  phone: string
  inquiryType: string
  eventDate: string
  message: string
  consent: boolean
}

type Errors = Partial<Record<keyof FormState, string>>

const EMPTY: FormState = {
  name: '',
  email: '',
  phone: '',
  inquiryType: '',
  eventDate: '',
  message: '',
  consent: false,
}

const FIELD_ORDER: (keyof FormState)[] = [
  'name',
  'email',
  'phone',
  'inquiryType',
  'eventDate',
  'message',
  'consent',
]

function validate(state: FormState): Errors {
  const errors: Errors = {}
  if (!state.name.trim()) errors.name = 'Please enter your name.'
  if (!state.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (state.phone.trim() && !/^[0-9+()\-.\s]{7,}$/.test(state.phone.trim())) {
    errors.phone = 'Please enter a valid phone number, or leave it blank.'
  }
  if (!state.inquiryType) errors.inquiryType = 'Please choose what this is about.'
  if (state.message.trim().length < 10) {
    errors.message = 'Please add a little more detail (at least 10 characters).'
  }
  if (!state.consent) errors.consent = 'Please check the box so we can reply.'
  return errors
}

function buildMailto(state: FormState): string {
  const typeLabel =
    contact.inquiryTypes.find((t) => t.value === state.inquiryType)?.label ?? 'Inquiry'
  const subject = `Website inquiry — ${typeLabel}`
  const lines = [
    `Name: ${state.name}`,
    `Email: ${state.email}`,
    state.phone ? `Phone: ${state.phone}` : '',
    `Inquiry: ${typeLabel}`,
    state.eventDate ? `Event date: ${state.eventDate}` : '',
    '',
    state.message,
  ].filter(Boolean)
  return `mailto:${site.contact.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(lines.join('\n'))}`
}

function fieldClass(hasError: boolean) {
  return [
    'min-h-12 w-full rounded-xl border bg-surface px-4 py-3 text-base text-chocolate placeholder:text-chocolate-soft/50',
    hasError
      ? 'border-red-400 focus-visible:border-red-500'
      : 'border-line-purple focus-visible:border-blue-deep',
  ].join(' ')
}

const labelClass = 'mb-1.5 block font-brand text-[0.95rem] font-semibold text-purple'

export function Contact() {
  const [state, setState] = useState<FormState>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)

  const update =
    (field: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const value =
        e.target instanceof HTMLInputElement && e.target.type === 'checkbox'
          ? e.target.checked
          : e.target.value
      setState((prev) => ({ ...prev, [field]: value }))
    }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const nextErrors = validate(state)
    setErrors(nextErrors)
    const firstError = FIELD_ORDER.find((f) => nextErrors[f])
    if (firstError) {
      document.getElementById(firstError)?.focus()
      return
    }
    // TODO: Connect to a real handler before launch — Formspree, Netlify Forms,
    // Resend, or your own endpoint. Until then this confirms locally and offers
    // a pre-filled email so no inquiry is ever lost.
    setSubmitted(true)
  }

  const reset = () => {
    setState(EMPTY)
    setErrors({})
    setSubmitted(false)
  }

  return (
    <>
      <Seo
        title="Contact"
        description="Contact Spontaneous Confections in Capitola for custom cakes, catering, press, or questions. Call (831) 480-5166 or send us a message."
      />

      {/* Header */}
      <section className="bg-cream pb-10 pt-12 sm:pt-16 lg:pb-14">
        <Container>
          <h1 className="max-w-3xl font-display text-[2.5rem] font-extrabold leading-[1.03] tracking-tight text-purple sm:text-5xl lg:text-[3.4rem]">
            {contact.heading}
          </h1>
          <div className="rule-brand mt-5" aria-hidden />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-chocolate-soft sm:text-xl">
            {contact.intro}
          </p>
        </Container>
      </section>

      {/* Form + contact details */}
      <Section spacing="tight" aria-label="Contact form">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="sticker bg-blue-soft p-8 text-center">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border-2 border-line-purple bg-surface text-purple">
                    <CheckIcon className="h-7 w-7" />
                  </span>
                  <h2 className="mt-5 font-display text-2xl font-bold text-purple">
                    {contact.successHeading}
                  </h2>
                  <p className="mx-auto mt-3 max-w-md text-base text-chocolate-soft">
                    {contact.successBody}
                  </p>
                  <div className="mt-7 flex flex-wrap justify-center gap-3">
                    <a href={buildMailto(state)} className="btn btn-pink">
                      <MailIcon className="h-4 w-4" />
                      Send via email
                    </a>
                    <a href={site.contact.phoneHref} className="btn btn-outline">
                      <PhoneIcon className="h-4 w-4" />
                      Call {site.contact.phoneDisplay}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={reset}
                    className="mt-5 font-brand text-sm font-semibold text-purple underline-offset-4 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="sticker p-6 sm:p-8" onSubmit={onSubmit} noValidate>
                  <h2 className="font-display text-2xl font-bold text-purple">Send a message</h2>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    {/* Name */}
                    <div className="sm:col-span-2">
                      <label htmlFor="name" className={labelClass}>
                        Name <span className="text-pink">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={state.name}
                        onChange={update('name')}
                        className={fieldClass(Boolean(errors.name))}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1.5 text-sm text-red-600">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email <span className="text-pink">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={state.email}
                        onChange={update('email')}
                        className={fieldClass(Boolean(errors.email))}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1.5 text-sm text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        Phone <span className="font-normal text-chocolate-soft">(optional)</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={state.phone}
                        onChange={update('phone')}
                        className={fieldClass(Boolean(errors.phone))}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="mt-1.5 text-sm text-red-600">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Inquiry type */}
                    <div>
                      <label htmlFor="inquiryType" className={labelClass}>
                        What’s this about? <span className="text-pink">*</span>
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={state.inquiryType}
                        onChange={update('inquiryType')}
                        className={fieldClass(Boolean(errors.inquiryType))}
                        aria-invalid={Boolean(errors.inquiryType)}
                        aria-describedby={errors.inquiryType ? 'inquiryType-error' : undefined}
                      >
                        <option value="" disabled>
                          Select one…
                        </option>
                        {contact.inquiryTypes.map((t) => (
                          <option key={t.value} value={t.value}>
                            {t.label}
                          </option>
                        ))}
                      </select>
                      {errors.inquiryType && (
                        <p id="inquiryType-error" className="mt-1.5 text-sm text-red-600">
                          {errors.inquiryType}
                        </p>
                      )}
                    </div>

                    {/* Event date */}
                    <div>
                      <label htmlFor="eventDate" className={labelClass}>
                        Event date{' '}
                        <span className="font-normal text-chocolate-soft">(optional)</span>
                      </label>
                      <input
                        id="eventDate"
                        name="eventDate"
                        type="date"
                        value={state.eventDate}
                        onChange={update('eventDate')}
                        className={fieldClass(false)}
                      />
                    </div>

                    {/* Message */}
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className={labelClass}>
                        Message <span className="text-pink">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={state.message}
                        onChange={update('message')}
                        placeholder="Tell us about your order, event, or question…"
                        className={`${fieldClass(Boolean(errors.message))} min-h-32 py-3`}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1.5 text-sm text-red-600">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Consent */}
                    <div className="sm:col-span-2">
                      <div className="flex items-start gap-3">
                        <input
                          id="consent"
                          name="consent"
                          type="checkbox"
                          checked={state.consent}
                          onChange={update('consent')}
                          className="mt-1 h-5 w-5 shrink-0 rounded border-line-purple text-purple accent-purple"
                          aria-invalid={Boolean(errors.consent)}
                          aria-describedby={errors.consent ? 'consent-error' : undefined}
                        />
                        <label htmlFor="consent" className="text-base leading-relaxed text-chocolate-soft">
                          {contact.consentText}
                        </label>
                      </div>
                      {errors.consent && (
                        <p id="consent-error" className="mt-1.5 text-sm text-red-600">
                          {errors.consent}
                        </p>
                      )}
                    </div>
                  </div>

                  <button type="submit" className="btn btn-pink mt-6 w-full sm:w-auto">
                    Send message
                  </button>
                  <p className="mt-3 text-sm text-chocolate-soft">
                    Prefer to talk? Call us at{' '}
                    <a href={site.contact.phoneHref} className="font-semibold text-purple">
                      {site.contact.phoneDisplay}
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>

            {/* Contact details */}
            <aside className="lg:col-span-5">
              <div className="sticker bg-pink-soft p-7">
                <h2 className="font-display text-xl font-bold text-purple">
                  Other ways to reach us
                </h2>
                <ul className="mt-5 space-y-4">
                  <li>
                    <a
                      href={site.contact.phoneHref}
                      className="inline-flex items-center gap-3 text-base font-medium text-chocolate transition-colors hover:text-purple"
                    >
                      <span className="grid h-11 w-11 place-items-center rounded-full border border-line-purple bg-surface text-purple">
                        <PhoneIcon className="h-5 w-5" />
                      </span>
                      {site.contact.phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="inline-flex items-center gap-3 break-all text-base font-medium text-chocolate transition-colors hover:text-purple"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line-purple bg-surface text-purple">
                        <MailIcon className="h-5 w-5" />
                      </span>
                      {site.contact.email}
                    </a>
                  </li>
                </ul>

                <hr className="hairline my-6" />

                <h3 className="font-brand text-xs font-semibold uppercase tracking-widest text-blue-deep">
                  Follow along
                </h3>
                <SocialLinks variant="light" className="mt-3" />
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* Where to find us */}
      <Section tone="surface" spacing="default" aria-label="Where to find us">
        <Container>
          <FindUs />
        </Container>
      </Section>
    </>
  )
}
