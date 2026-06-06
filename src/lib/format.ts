// Small date helpers. We pin the time to midday so an ISO date like
// "2026-06-20" never shifts a day backward due to timezone offset.

export function formatDate(
  iso: string,
  opts: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' },
): string {
  if (!iso) return ''
  const d = new Date(`${iso}T12:00:00`)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-US', opts)
}

export function eventDateParts(iso: string): { day: string; month: string } {
  const d = new Date(`${iso}T12:00:00`)
  if (Number.isNaN(d.getTime())) return { day: '', month: '' }
  return {
    day: d.toLocaleDateString('en-US', { day: 'numeric' }),
    month: d.toLocaleDateString('en-US', { month: 'short' }),
  }
}
