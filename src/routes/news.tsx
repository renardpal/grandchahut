import { createFileRoute } from '@tanstack/react-router'
import { news } from '@/data/news'

export const Route = createFileRoute('/news')({
  component: News,
})

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function News() {
  return (
    <div className="px-5 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-bold sm:text-5xl">News</h1>
        <p className="mt-3 text-[var(--color-ink)]/80">
          What's happening around the studio.
        </p>

        <div className="mt-10 flex flex-col gap-8">
          {news.map((post) => (
            <article
              key={post.id}
              className="rounded-2xl border-4 border-[var(--color-ink)] bg-[var(--color-cream)] p-6 sm:p-8"
              style={{ boxShadow: '6px 6px 0 var(--color-ink)' }}
            >
              <time
                dateTime={post.date}
                className="font-display text-xs font-bold tracking-wide text-[var(--color-terracotta)] uppercase"
              >
                {formatDate(post.date)}
              </time>
              <h2 className="font-display mt-2 text-2xl font-bold">
                {post.title}
              </h2>
              <p className="mt-3 leading-relaxed text-[var(--color-ink)]/85">
                {post.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
