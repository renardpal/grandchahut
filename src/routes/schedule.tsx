import { useMemo, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { classes } from '@/data/classes'

export const Route = createFileRoute('/schedule')({
  component: Schedule,
})

type Filter = 'Tout' | 'Acrobatie' | 'Musique' | 'Théâtre'

function Schedule() {
  const [filter, setFilter] = useState<Filter>('Tout')

  const filtered = useMemo(
    () =>
      filter === 'Tout' ? classes : classes.filter((c) => c.discipline === filter),
    [filter],
  )

  return (
    <div className="px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-display text-4xl font-bold sm:text-5xl">
          Ateliers et planning
        </h1>
        <p className="mt-3 max-w-2xl">
          🗺️ Tous les ateliers ont lieu à la mairie de Montréal.
        </p>
        <br></br>
        <p>
          <strong>Pour les 3-6 ans </strong>(petite à grande section) : les séances ont lieu le mardi de 15h30 à 16h15 à la mairie de Montréal. Le groupe est accompagné à pied par des bénévoles. Le bus scolaire récupère les enfants à la fin de la séance. 
        </p>
        <br></br>
        <p>
          <strong>Pour les 7-11 ans </strong>(cp à cm2) : les séances ont lieu le mardi de 16h30 à 17h15 à la mairie de Montréal. Le groupe est amenée de Thizy à Montréal par le bus scolaire. Les parents viennent chercher leur enfant à Montréal en fin de séance. 
        </p>

        <div className="mt-8 flex gap-2">
          {(['Tout', 'Acrobatie', 'Musique', 'Théâtre'] as Array<Filter>).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`font-display rounded-full border-2 border-[var(--color-ink)] px-4 py-1.5 text-sm font-semibold transition-colors ${
                filter === f
                  ? 'bg-[var(--color-ink)] text-[var(--color-cream)]'
                  : 'hover:bg-[var(--color-marigold)]/25'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {filtered.map((c) => (
            <div
              key={c.id}
              className="rounded-2xl border-4 border-[var(--color-ink)] bg-[var(--color-cream)] p-6"
              style={{ boxShadow: '6px 6px 0 var(--color-ink)' }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span
                    className={`font-display inline-block rounded-full px-3 py-0.5 text-xs font-bold tracking-wide uppercase ${
                      c.discipline === 'Acrobatie'
                        ? 'bg-[var(--color-terracotta)] text-[var(--color-cream)]'
                        : 'bg-[var(--color-teal)] text-[var(--color-cream)]'
                    }`}
                  >
                    {c.discipline}
                  </span>
                  <h2 className="font-display mt-2 text-xl font-bold">
                    {c.name}
                  </h2>
                </div>
                {c.spotsLeft === 0 ? (
                  <span className="font-display shrink-0 rounded-full bg-[var(--color-ink)]/10 px-3 py-1 text-xs font-bold">
                    Complet
                  </span>
                ) : (
                  <span className="font-display shrink-0 rounded-full bg-[var(--color-marigold)]/40 px-3 py-1 text-xs font-bold">
                    {c.spotsLeft} place{c.spotsLeft === 1 ? '' : 's'} restante{c.spotsLeft === 1 ? '' : 's'} 
                  </span>
                )}
              </div>

              <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                <dt className="font-semibold text-[var(--color-ink)]/50">
                  Âge
                </dt>
                <dd>{c.ageRange}</dd>
                <dt className="font-semibold text-[var(--color-ink)]/50">
                  Horaire
                </dt>
                <dd>
                  {c.day}, {c.time}
                </dd>
                <dt className="font-semibold text-[var(--color-ink)]/50">
                  Trimestre
                </dt>
                <dd>
                  {c.month}
                </dd>                
                <dt className="font-semibold text-[var(--color-ink)]/50">
                  Intervenant
                </dt>
                <dd>{c.instructor}</dd>
              </dl>

              <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink)]/80">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
