import { Link } from '@tanstack/react-router'

export function Footer() {
  return (
    <footer className="border-t-4 border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-cream)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg font-bold">Grand Chahut</p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-cream)]/70">
            Hébergé par la Maison Hirondelle
          </p>
        </div>
        <div className="text-sm">
          <p className="font-display mb-2 font-semibold text-[var(--color-marigold)]">
            Adresse
          </p>
          <p className="text-[var(--color-cream)]/80">
          tel : 09 51 33 63 19          
          <br />
          11 place du Prieuré - 89420 Montréal
          </p>
        </div>
      </div>
      <div className="border-t border-[var(--color-cream)]/15 py-4 text-center text-xs text-[var(--color-cream)]/50">
        &copy; {new Date().getFullYear()} Grand Chahut
      </div>
    </footer>
  )
}
