import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Mail, MapPin, Phone } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

function Contact() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    childAge: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle',
  )

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/contact-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...fields }),
      })
      if (!res.ok) throw new Error('Submission failed')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

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
          className="rounded-3xl border-4 border-[var(--color-ink)] bg-[var(--color-cream)] p-6 sm:p-8"
          style={{ boxShadow: '8px 8px 0 var(--color-ink)' }}
        >
          {status === 'sent' ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <h2 className="font-display text-2xl font-bold">
                Message sent!
              </h2>
              <p className="mt-2 text-[var(--color-ink)]/80">
                We'll write back within a couple of days — sooner if it's
                about this week's class.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              name="contact"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="flex flex-col gap-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>

              <label className="flex flex-col gap-1 text-sm font-semibold">
                Your name
                <input
                  type="text"
                  name="name"
                  required
                  value={fields.name}
                  onChange={handleChange}
                  className="rounded-lg border-2 border-[var(--color-ink)]/30 bg-transparent px-3 py-2 font-normal focus:border-[var(--color-terracotta)] focus:outline-none"
                />
              </label>

              <label className="flex flex-col gap-1 text-sm font-semibold">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  value={fields.email}
                  onChange={handleChange}
                  className="rounded-lg border-2 border-[var(--color-ink)]/30 bg-transparent px-3 py-2 font-normal focus:border-[var(--color-terracotta)] focus:outline-none"
                />
              </label>

              <label className="flex flex-col gap-1 text-sm font-semibold">
                Child's age (optional)
                <input
                  type="text"
                  name="childAge"
                  value={fields.childAge}
                  onChange={handleChange}
                  className="rounded-lg border-2 border-[var(--color-ink)]/30 bg-transparent px-3 py-2 font-normal focus:border-[var(--color-terracotta)] focus:outline-none"
                />
              </label>

              <label className="flex flex-col gap-1 text-sm font-semibold">
                Message
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={fields.message}
                  onChange={handleChange}
                  className="rounded-lg border-2 border-[var(--color-ink)]/30 bg-transparent px-3 py-2 font-normal focus:border-[var(--color-terracotta)] focus:outline-none"
                />
              </label>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="font-display mt-2 rounded-full bg-[var(--color-ink)] px-6 py-3 font-semibold text-[var(--color-cream)] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>

              {status === 'error' && (
                <p className="text-sm font-semibold text-[var(--color-terracotta)]">
                  Something went wrong — please try again or email us
                  directly.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
