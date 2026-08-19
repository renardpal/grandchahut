import { Link, createFileRoute } from '@tanstack/react-router'
import { Paintbrush, Music2, Users, ArrowRight } from 'lucide-react'
import { classes } from '@/data/classes'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const featured = classes.slice(0, 3)

  return (
    <div>
      <section className="relative overflow-hidden px-5 pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-32 h-96 w-96 rounded-full bg-[var(--color-marigold)]/30 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-40 -left-24 h-72 w-72 rounded-full bg-[var(--color-teal)]/20 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <span className="font-display inline-block -rotate-2 rounded-full border-2 border-[var(--color-ink)] bg-[var(--color-marigold)] px-4 py-1 text-sm font-semibold">
              Début Octobre 2026
            </span>
            <h1 className="font-display mt-6 text-5xl leading-[1.05] font-bold tracking-tight sm:text-6xl">
              Acrobatie, 
              <br />
              <span className="text-[var(--color-terracotta)]">musique</span>{' '}
              
              <br />
              <span className="text-[var(--color-teal)]">théâtre</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-[var(--color-ink)]/80">
              Grand Chahut, c'est un cycle d'ateliers après l'école, 
              <br/>
              accessibles à tous les enfants de 3 à 11 ans, 
              <br/>
              sans audition et sans classement !
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/schedule"
                className="font-display inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-6 py-3 font-semibold text-[var(--color-cream)] transition-transform hover:-translate-y-0.5"
              >
                Voir le programme
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="font-display inline-flex items-center gap-2 rounded-full border-2 border-[var(--color-ink)] px-6 py-3 font-semibold transition-transform hover:-translate-y-0.5"
              >
                Nous contacter
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="rotate-3 rounded-3xl border-4 border-[var(--color-ink)] bg-[var(--color-teal)] p-6 shadow-[8px_8px_0_var(--color-ink)]">
              <p className="font-display text-2xl font-bold text-[var(--color-cream)]">
                6 séances
              </p>
              <p className="text-sm font-semibold text-[var(--color-cream)]/85">
                par trimestre
              </p>
            </div>
            <div className="mt-6 -rotate-2 rounded-3xl border-4 border-[var(--color-ink)] bg-[var(--color-cream)] p-6 shadow-[8px_8px_0_var(--color-ink)]">
              <p className="font-display text-2xl font-bold">10 enfants</p>
              <p className="text-sm font-semibold text-[var(--color-ink)]/70">
                par atelier
              </p>
            </div>
            <div className="mt-6 rotate-1 rounded-3xl border-4 border-[var(--color-ink)] bg-[var(--color-marigold)] p-6 shadow-[8px_8px_0_var(--color-ink)]">
              <p className="font-display text-2xl font-bold">à Montréal et Thizy</p>
              <p className="text-sm font-semibold text-[var(--color-ink)]/70">
                pas de déplacement après l'école
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-bold">
              Aperçu du programme
            </h2>
            <Link
              to="/schedule"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-terracotta)] hover:underline"
            >
              Programme complet
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {featured.map((c, i) => (
              <div
                key={c.id}
                className={`rounded-2xl border-4 border-[var(--color-ink)] bg-[var(--color-cream)] p-6 ${
                  i === 1 ? 'sm:-translate-y-4' : ''
                }`}
                style={{ boxShadow: '6px 6px 0 var(--color-ink)' }}
              >
                <span
                  className={`font-display inline-block rounded-full px-3 py-0.5 text-xs font-bold tracking-wide uppercase ${
                    c.discipline === 'Acrobatie'
                      ? 'bg-[var(--color-terracotta)] text-[var(--color-cream)]'
                      : 'bg-[var(--color-teal)] text-[var(--color-cream)]'
                  }`}
                >
                  {c.discipline}
                </span>
                <h3 className="font-display mt-3 text-xl font-bold">
                  {c.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-[var(--color-ink)]/60">
                  {c.ageRange} &middot; {c.day}, {c.time}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink)]/80">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
