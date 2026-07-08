import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X, Sparkle } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/schedule', label: 'Classes & Schedule' },
  { to: '/news', label: 'News' },
  { to: '/contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b-4 border-[var(--color-ink)] bg-[var(--color-cream)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          to="/"
          className="font-display flex items-center gap-2 text-xl font-bold tracking-tight text-[var(--color-ink)] sm:text-2xl"
          onClick={() => setOpen(false)}
        >
          <Sparkle
            className="h-6 w-6 shrink-0 text-[var(--color-terracotta)]"
            strokeWidth={2.5}
          />
          Grand Chahut
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === '/' }}
              className="rounded-full px-4 py-2 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:bg-[var(--color-marigold)]/25 [&.active]:bg-[var(--color-terracotta)] [&.active]:text-[var(--color-cream)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--color-ink)] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t-2 border-[var(--color-ink)]/10 px-5 pb-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === '/' }}
              className="rounded-lg px-3 py-2 text-base font-semibold text-[var(--color-ink)] [&.active]:bg-[var(--color-terracotta)] [&.active]:text-[var(--color-cream)]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
