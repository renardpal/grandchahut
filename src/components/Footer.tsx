import { Link } from '@tanstack/react-router'

export function Footer() {
  return (
    <footer className="border-t-4 border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-cream)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg font-bold">Grand Chahut</p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-cream)]/70">
            Art and music classes for curious kids, ages 3 through 12, in the
            Elmhurst Arts Collective building.
          </p>
        </div>
        <div className="text-sm">
          <p className="font-display mb-2 font-semibold text-[var(--color-marigold)]">
            Visit
          </p>
          <p className="text-[var(--color-cream)]/80">
            214 Persimmon Lane, Studio 3
            <br />
            Elmhurst, IL 60126
          </p>
        </div>
        <div className="text-sm">
          <p className="font-display mb-2 font-semibold text-[var(--color-marigold)]">
            Explore
          </p>
          <div className="flex flex-col gap-1">
            <Link to="/schedule" className="w-fit hover:underline">
              Classes &amp; Schedule
            </Link>
            <Link to="/news" className="w-fit hover:underline">
              News
            </Link>
            <Link to="/contact" className="w-fit hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--color-cream)]/15 py-4 text-center text-xs text-[var(--color-cream)]/50">
        &copy; {new Date().getFullYear()} Grand Chahut
      </div>
    </footer>
  )
}
