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
          Le projet
          </h1>
          <p className="mt-3 text-[var(--color-ink)]/80">
            Grand Chahut, c'est un cycle d'ateliers à destination des 3-11 ans qui vivent autour de Montréal. 
            A chaque trimestre, les enfants découvrent une nouvelle discipline lors de séances de 45 minutes. 
            Théâtre, musique et acrobatie se découvrent avec des professionnels vivant également sur le territorie. 
          </p>
        </div>

        {/* Story */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div
            className="rounded-3xl border-4 border-[var(--color-ink)] bg-[var(--color-cream)] p-6 sm:p-8"
            style={{ boxShadow: '8px 8px 0 var(--color-ink)' }}
          >
            <h2 className="font-display text-2xl font-bold">Comment ça a commencé ?</h2>
            <p className="mt-3 text-sm text-[var(--color-ink)]/80">
              On en avait marre de passer nos vies en voiture et on avait envie de que nos enfants aient des choix de pratiques artistiques où ils vivent. 
            </p>
          </div>

          <div
            className="rounded-3xl border-4 border-[var(--color-ink)] bg-[var(--color-teal)]/15 p-6 sm:p-8"
            style={{ boxShadow: '8px 8px 0 var(--color-ink)' }}
          >
            <h2 className="font-display text-2xl font-bold">Qu'est-ce qu'on y fait ?</h2>
            <p className="mt-3 text-sm text-[var(--color-ink)]/80">
              Pour l'instant, on fait de l'acrobatie, du théâtre et de la musique, avec les meilleurs intervenants du coin (en tout cas nos préférés). 
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-14">
          <h2 className="font-display text-3xl font-bold">Nos idées</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border-4 border-[var(--color-ink)] bg-[var(--color-cream)] p-5">
              <p className="font-display font-bold">Ateliers libres</p>
              <p className="mt-2 text-sm text-[var(--color-ink)]/80">
                Chacun vient quand il veut ! On n'est pas au conservatoire, il n'y aura pas de devoirs.
              </p>
            </div>
            <div className="rounded-2xl border-4 border-[var(--color-ink)] bg-[var(--color-cream)] p-5">
              <p className="font-display font-bold">Approche sobre</p>
              <p className="mt-2 text-sm text-[var(--color-ink)]/80">
                le moins de kilomètres d'essence possible ! Tous les cours ont lieux à Montréal. 
                Les petits peuvent récupérer le bus après la séance.
              </p>
            </div>
            <div className="rounded-2xl border-4 border-[var(--color-ink)] bg-[var(--color-cream)] p-5">
              <p className="font-display font-bold">Rencontres</p>
              <p className="mt-2 text-sm text-[var(--color-ink)]/80">
                Les familles peuvent assister au cours, elles peuvent aussi venir boire un thé pour se rencontrer et discuter à la Maison Hirondelle. 
              </p>
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="mt-14">
          <h2 className="font-display text-3xl font-bold">Nos partenaires</h2>
          <p className="mt-3 max-w-2xl text-sm text-[var(--color-ink)]/80">
            Ces structures et collectivités rendent ce projet possible. 
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-4 rounded-2xl border-4 border-[var(--color-ink)] bg-[var(--color-cream)] p-5">
              <div className="h-12 w-12 shrink-0 rounded-full bg-[var(--color-terracotta)]/20" />
              <div>
                <p className="font-display font-bold">La Maison Hirondelle</p>
                <p className="text-sm text-[var(--color-ink)]/70">
                  C'est l'association qui porte tout le projet ! Elle participe aussi financièrement et accueille les parents qui veulent attendre leurs enfants en partageant un thé !
                </p>
              </div>
            </div>
          <div className="flex items-center gap-4 rounded-2xl border-4 border-[var(--color-ink)] bg-[var(--color-cream)] p-5">
              <div className="h-12 w-12 shrink-0 rounded-full bg-[var(--color-teal)]/20" />
              <div>
                <p className="font-display font-bold">La Mairie de Montréal</p>
                <p className="text-sm text-[var(--color-ink)]/70">
                 Nous prête ses locaux.
                </p>
              </div>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border-4 border-[var(--color-ink)] bg-[var(--color-cream)] p-5">
              <div className="h-12 w-12 shrink-0 rounded-full bg-[var(--color-teal)]/20" />
              <div>
                <p className="font-display font-bold">La Mairie de Marmeaux</p>
                <p className="text-sm text-[var(--color-ink)]/70">
                 a soutenu ce projet en nous versant une subvention !
                </p>
              </div>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border-4 border-[var(--color-ink)] bg-[var(--color-cream)] p-5">
              <div className="h-12 w-12 shrink-0 rounded-full bg-[var(--color-teal)]/20" />
              <div>
                <p className="font-display font-bold">La Communauté de Communes du Serein</p>
                <p className="text-sm text-[var(--color-ink)]/70">
                  a soutenu par le biais d'une subvention, de prêt de matériel mais aussi par son écoute et ses idées.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
