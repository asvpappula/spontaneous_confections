import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { site } from '../../data/site'
import { Logo } from '../Logo'
import { ButtonLink } from '../ButtonLink'
import { CloseIcon, MenuIcon } from '../icons'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      'relative inline-flex min-h-11 items-center px-3.5 font-brand text-[1rem] font-medium transition-colors',
      isActive ? 'text-purple' : 'text-chocolate hover:text-purple',
    ].join(' ')

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled || open
          ? 'border-line-purple bg-cream/90 shadow-[var(--shadow-soft)] backdrop-blur'
          : 'border-purple/10 bg-cream'
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-6 sm:py-3.5 lg:px-8">
        <Link
          to="/"
          className="inline-flex shrink-0 items-center rounded-lg"
          aria-label={`${site.name} — home`}
        >
          <Logo className="h-10 w-auto sm:h-12" />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={navLinkClass}>
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute inset-x-3.5 -bottom-0.5 h-[3px] rounded-full bg-pink"
                      aria-hidden
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink to={site.ctaPrimary.to} variant="primary" className="px-6 text-[0.95rem]">
            {site.ctaPrimary.label}
          </ButtonLink>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-line-purple bg-surface text-purple transition-colors hover:bg-cream lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div id="mobile-menu" className="lg:hidden">
          <nav
            aria-label="Mobile"
            className="mx-auto flex w-full max-w-6xl flex-col gap-1.5 px-5 pb-5 pt-1 sm:px-6"
          >
            {site.nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  [
                    'flex min-h-12 items-center rounded-xl px-4 font-brand text-base font-medium transition-colors',
                    isActive
                      ? 'bg-pink-soft text-purple'
                      : 'text-chocolate hover:bg-cream-deep',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
            <ButtonLink to={site.ctaPrimary.to} variant="primary" className="mt-3 w-full">
              {site.ctaPrimary.label}
            </ButtonLink>
          </nav>
        </div>
      )}
    </header>
  )
}
