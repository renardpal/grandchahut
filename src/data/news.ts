export interface NewsPost {
  id: string
  date: string
  title: string
  body: string
}

export const news: Array<NewsPost> = [
  {
    id: 'spring-showcase-2026',
    date: '2026-07-15',
    title: 'Les premieres nouvelles !',
    body: 'Grand Chahut, ça commence en octobre ! On règle encore quelques détails mais c est sûr, il y aura 3 cycles d ateliers cette année, en priorité pour les enfants scolarisés dans le RPI Montréal/Thizy. Les pré-inscriptions commencent en juillet pour les parents qui avaient répondu à notre sondage en cours d année.',
  },
]
