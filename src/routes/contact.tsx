import { createFileRoute } from '@tanstack/react-router'
import { Mail, MapPin, Phone } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  return (
    <div className="px-5 py-16">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1fr_1.2fr]">
        <div>
          <h1 className="font-display text-4xl font-bold sm:text-5xl">
            Contact
          </h1>
          <p className="mt-3 text-[var(--color-ink)]/80">
            Questions about a class, a makeup lesson, or just want to swing by
            for open studio hour? Reach out any way that's easy for you.
          </p>

          <div className="mt-8 flex flex-col gap-5 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-terracotta)]" />
              <span>
                214 Persimmon Lane, Studio 3
                <br />
                Elmhurst, IL 60126
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-terracotta)]" />
              <span>(630) 555-0148</span>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-terracotta)]" />
              <span>hello@marigoldandsound.com</span>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border-4 border-[var(--color-ink)] bg-[var(--color-teal)]/15 p-5 text-sm">
            <p className="font-display font-bold">Studio hours</p>
            <p className="mt-1 text-[var(--color-ink)]/80">
              Mon–Fri, 3:30–6:30 PM (classes)
              <br />
              Saturday, 10–11 AM (open studio, drop-in)
            </p>
          </div>
        </div>

        <div
          className="flex flex-col items-center justify-center rounded-3xl border-4 border-[var(--color-ink)] bg-[var(--color-cream)] p-6 text-center sm:p-8"
          style={{ boxShadow: '8px 8px 0 var(--color-ink)' }}
        >
          <h2 className="font-display text-2xl font-bold">
            Say hello
          </h2>
          <p className="mt-2 max-w-sm text-[var(--color-ink)]/80">
            The easiest way to reach us is by email — we usually write back
            within a couple of days, sooner if it's about this week's class.
          </p>
          <a
            href="mailto:hello@marigoldandsound.com"
            className="font-display mt-6 rounded-full bg-[var(--color-ink)] px-6 py-3 font-semibold text-[var(--color-cream)] transition-transform hover:-translate-y-0.5"
          >
            Email us
          </a>
        </div>
      </div>
    </div>
  )
}
