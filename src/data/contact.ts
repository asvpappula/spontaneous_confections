// =============================================================================
// CONTACT PAGE COPY & FORM CONFIG
// -----------------------------------------------------------------------------
// Edit the inquiry types, consent text, and confirmation messages here.
// =============================================================================

export interface InquiryType {
  value: string
  label: string
}

export interface ContactContent {
  eyebrow: string
  heading: string
  intro: string
  inquiryTypes: InquiryType[]
  consentText: string
  successHeading: string
  successBody: string
}

export const contact: ContactContent = {
  eyebrow: 'Get in Touch',
  heading: 'Custom orders & catering',
  intro:
    'Custom orders, catering, press, or a quick question. Send a note and we’ll get back to you.',
  inquiryTypes: [
    { value: 'general', label: 'General question' },
    { value: 'custom-order', label: 'Custom order' },
    { value: 'catering', label: 'Catering / event' },
    { value: 'media', label: 'Press / media' },
    { value: 'other', label: 'Other' },
  ],
  consentText:
    'Yes, Spontaneous Confections can email me back about this. We’ll only use your details to reply.',
  successHeading: 'Almost there!',
  successBody:
    'Tap “Send via email” below and it’ll open in your email app. We’ll reply as soon as we can.',
}
