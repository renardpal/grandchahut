export interface NewsPost {
  id: string
  date: string
  title: string
  body: string
}

export const news: Array<NewsPost> = [
  {
    id: 'spring-showcase-2026',
    date: '2026-06-12',
    title: 'Spring Showcase set for June 27th',
    body: 'Every art and music class will share something at our end-of-term showcase — clay critters on display tables, ukulele buddies performing two songs, and cider donuts for everyone. Doors open at 5:30 PM in the main studio.',
  },
  {
    id: 'new-rhythm-lab-section',
    date: '2026-05-04',
    title: 'A second Rhythm Lab section is opening',
    body: 'Rhythm Lab filled up faster than we expected, so we added a Thursday 4:00 PM section starting May 21st. Same drums, same shakers, same joyful noise — just a different day for families who needed it.',
  },
  {
    id: 'instructor-genna',
    date: '2026-04-02',
    title: 'Welcome Genna Vlk to the studio',
    body: "Genna joins us teaching Sketchbook Club and Mixed Media Mess. She spent six years running the children's studio at a community art center in Oak Park and brings an enormous bin of found materials with her.",
  },
  {
    id: 'winter-recital-recap',
    date: '2026-02-08',
    title: 'Winter recital recap: forty kids, one very brave duet',
    body: 'Thank you to every family who came out on a cold Saturday morning. Special mention to the Beginner Piano duet that started over twice and finished anyway — that is basically the whole point of this place.',
  },
]
