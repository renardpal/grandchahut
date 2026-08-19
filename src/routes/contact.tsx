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
            Pour en savoir plus sur ce projet, écrivez-nous un email.
          </p>

          <div className="mt-8 flex flex-col gap-5 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-terracotta)]" />
              <span>
                Grand Chahut est hébergé par la Maison Hirondelle
                <br />
                11 place du Prieuré - 89420 Montréal              </span>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-terracotta)]" />
              <span>hello@grandchahut.com</span>
            </div>
          </div>


        </div>

        <div
          className="flex flex-col items-center justify-center rounded-3xl border-4 border-[var(--color-ink)] bg-[var(--color-cream)] p-6 text-center sm:p-8"
          style={{ boxShadow: '8px 8px 0 var(--color-ink)' }}
        >
          <h2 className="font-display text-2xl font-bold">
            Inscrire votre enfant
          </h2>
          <p className="mt-2 max-w-sm text-[var(--color-ink)]/80">
            Si vous avez vu qu'il restait une place dans le planning des cours, écrivez-nous. 
          </p>
          <a
            href="mailto:hello@grandchahut.com"
            className="font-display mt-6 rounded-full bg-[var(--color-ink)] px-6 py-3 font-semibold text-[var(--color-cream)] transition-transform hover:-translate-y-0.5"
          >
            Nous envoyer un email
          </a>
        </div>
      </div>
    </div>
  )
}
