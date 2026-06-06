import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { site } from '../data/site'

interface SeoProps {
  /** Page name slotted into the title template, e.g. "Menu". */
  title?: string
  description?: string
  /** Use this exact <title> instead of the template (e.g. the Home page). */
  fullTitle?: string
  image?: string
  type?: string
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Keeps document <title> and social/SEO meta tags in sync with the current
 * route. Rendered (returning null) once per page. Uses imperative DOM updates
 * so there is never a duplicate tag, and it works without any extra dependency.
 */
export function Seo({ title, description, fullTitle, image, type = 'website' }: SeoProps) {
  const { pathname } = useLocation()

  useEffect(() => {
    const resolvedTitle =
      fullTitle ??
      (title ? site.seo.titleTemplate.replace('%s', title) : site.seo.defaultTitle)
    const desc = description ?? site.seo.defaultDescription
    const url = `${site.url}${pathname === '/' ? '/' : pathname}`
    const img = image ?? site.seo.ogImage

    document.title = resolvedTitle
    upsertMeta('name', 'description', desc)
    upsertMeta('property', 'og:title', resolvedTitle)
    upsertMeta('property', 'og:description', desc)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', img)
    upsertMeta('property', 'og:type', type)
    upsertMeta('name', 'twitter:title', resolvedTitle)
    upsertMeta('name', 'twitter:description', desc)
    upsertMeta('name', 'twitter:image', img)
    upsertCanonical(url)
  }, [title, description, fullTitle, image, type, pathname])

  return null
}
