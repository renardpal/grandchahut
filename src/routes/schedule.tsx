import { useMemo, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { classes } from '@/data/classes'

export const Route = createFileRoute('/schedule')({
  component: Schedule,
})

type Filter = 'All' | 'Art' | 'Music'

function Schedule() {
  const [filter, setFilter] = useState<Filter>('All')

  const filtered = useMemo(
    () =>
      filter === 'All' ? classes : classes.filter((c) => c.discipline === filter),
    [filter],
  )

  return (
    <div className="px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-display text-4xl font-bold sm:text-5xl">
          Classes &amp; Schedule
        </h1>
        <p className="mt-3 max-w-2xl text-[var(--color-ink)]/80">
          Classes run in eight-week terms. Tuition is $145 per term, materials
          included. Openings change weekly — email us if a class you want
          shows full.
        </p>

        <div className="mt-8 flex gap-2">
          {(['All', 'Art', 'Music'] as Array<Filter>).map((f) => (
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
                      c.discipline === 'Art'
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
                    Full
                  </span>
                ) : (
                  <span className="font-display shrink-0 rounded-full bg-[var(--color-marigold)]/40 px-3 py-1 text-xs font-bold">
                    {c.spotsLeft} spot{c.spotsLeft === 1 ? '' : 's'} left
                  </span>
                )}
              </div>

              <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                <dt className="font-semibold text-[var(--color-ink)]/50">
                  Ages
                </dt>
                <dd>{c.ageRange}</dd>
                <dt className="font-semibold text-[var(--color-ink)]/50">
                  When
                </dt>
                <dd>
                  {c.day}, {c.time}
                </dd>
                <dt className="font-semibold text-[var(--color-ink)]/50">
                  Instructor
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
