import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/project')({
  component: Project,
})

function Project() {
  return (
    <div className="px-5 py-16">
      <div className="mx-auto max-w-5xl">
        {/* Intro */}
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-bold sm:text-5xl">
            Our project
          </h1>
          <p className="mt-3 text-[var(--color-ink)]/80">
            Marigold & Sound started as a simple idea: children learn best
            when music, art, and play aren't kept in separate boxes. What
            began as a handful of Saturday classes in a spare room has grown
            into a small studio where kids build real skills while making a
            genuine mess of things — in the best way.
          </p>
        </div>

        {/* Story */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div
            className="rounded-3xl border-4 border-[var(--color-ink)] bg-[var(--color-cream)] p-6 sm:p-8"
            style={{ boxShadow: '8px 8px 0 var(--color-ink)' }}
          >
            <h2 className="font-display text-2xl font-bold">Where it started</h2>
            <p className="mt-3 text-sm text-[var(--color-ink)]/80">
              Founded in [year] in Elmhurst, the studio grew out of weekend
              lessons taught out of a living room. As families kept asking
              for more, it turned into a proper space with its own
              instruments, art supplies, and a schedule of weekly classes.
            </p>
          </div>

          <div
            className="rounded-3xl border-4 border-[var(--color-ink)] bg-[var(--color-teal)]/15 p-6 sm:p-8"
            style={{ boxShadow: '8px 8px 0 var(--color-ink)' }}
          >
            <h2 className="font-display text-2xl font-bold">Our approach</h2>
            <p className="mt-3 text-sm text-[var(--color-ink)]/80">
              We believe kids don't need to choose between music and art —
              the same curiosity that likes to bang a drum also likes to
              mix paint. Classes are small, hands-on, and built around
              exploration rather than rigid technique.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-14">
          <h2 className="font-display text-3xl font-bold">What we care about</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border-4 border-[var(--color-ink)] bg-[var(--color-cream)] p-5">
              <p className="font-display font-bold">Play first</p>
              <p className="mt-2 text-sm text-[var(--color-ink)]/80">
                Learning sticks when it feels like play, not a lesson to
                get through.
              </p>
            </div>
            <div className="rounded-2xl border-4 border-[var(--color-ink)] bg-[var(--color-cream)] p-5">
              <p className="font-display font-bold">Small groups</p>
              <p className="mt-2 text-sm text-[var(--color-ink)]/80">
                Every class stays small enough that no one gets lost in
                the back row.
              </p>
            </div>
            <div className="rounded-2xl border-4 border-[var(--color-ink)] bg-[var(--color-cream)] p-5">
              <p className="font-display font-bold">Open door</p>
              <p className="mt-2 text-sm text-[var(--color-ink)]/80">
                Families are welcome to sit in, ask questions, and see
                what their kids are up to.
              </p>
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="mt-14">
          <h2 className="font-display text-3xl font-bold">Our partners</h2>
          <p className="mt-3 max-w-2xl text-sm text-[var(--color-ink)]/80">
            We're grateful to the local organizations who help make the
            studio possible — from lending us space to supporting our
            scholarship fund for families who need it.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-4 rounded-2xl border-4 border-[var(--color-ink)] bg-[var(--color-cream)] p-5">
              <div className="h-12 w-12 shrink-0 rounded-full bg-[var(--color-terracotta)]/20" />
              <div>
                <p className="font-display font-bold">Partner name 1</p>
                <p className="text-sm text-[var(--color-ink)]/70">
                  Short description of the partnership.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border-4 border-[var(--color-ink)] bg-[var(--color-cream)] p-5">
              <div className="h-12 w-12 shrink-0 rounded-full bg-[var(--color-teal)]/20" />
              <div>
                <p className="font-display font-bold">Partner name 2</p>
                <p className="text-sm text-[var(--color-ink)]/70">
                  Short description of the partnership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
