export interface ClassSession {
  id: string
  discipline: 'Acrobatie' | 'Musique' | 'Théâtre'
  name: string
  ageRange: string
  day: string
  time: string
  month: string
  instructor: string
  spotsLeft: number
  description: string
}

export const classes: Array<ClassSession> = [
  {
    id: 'Les petits acrobates',
    discipline: 'Acrobatie',
    name: 'Les petits acrobates',
    ageRange: 'pour les 3–6 ans',
    day: 'Mardi',
    time: '15h30 – 16h15',
    month: 'avril à juin',
    instructor: 'Miriam de Sela',
    spotsLeft: 10,
    description:
      'acrobatie',
  },
  {
    id: 'Fais voir le son de tes joues',
    discipline: 'Musique',
    name: 'Fais voir le son de tes joues',
    ageRange: 'pour les 3–6 ans',
    day: 'Mardi',
    time: '15h30 – 16h15',
    month: 'octobre à janvier',
    instructor: 'Sébastien Apert',
    spotsLeft: 10,
    description:
      'musique',
  },
  {
    id: 'watercolor-wanderers',
    discipline: 'Acrobatie',
    name: 'Watercolor Wanderers',
    ageRange: 'pour les 7–11 ans',
    day: 'Mardi',
    time: '4:15 – 5:15 PM',
    month: 'octobre à janvier',
    instructor: 'Miriam de Sela',
    spotsLeft: 10,
    description:
      'Loose, wet-on-wet painting exercises focused on color mixing rather than "getting it right."',
  },
  {
    id: 'rhythm-lab',
    discipline: 'Théâtre',
    name: 'Rhythm Lab',
    ageRange: 'pour les 3–6 ans',
    day: 'Mardi',
    time: '4:00 – 4:40 PM',
    month: 'octobre à janvier',
    instructor: 'Marion Sancellier',
    spotsLeft: 10,
    description:
      'Drums, shakers, and body percussion. Loud, joyful, and surprisingly good for counting practice.',
  },
  {
    id: 'beginner-piano',
    discipline: 'Musique',
    name: 'Beginner Piano',
    ageRange: 'pour les 7–11 ans',
    day: 'Mardi',
    time: '4:00 – 4:30 PM',
    month: 'octobre à janvier',
    instructor: 'Sébastien Apert',
    spotsLeft: 10,
    description:
      'One-on-one keyboard time in a small shared studio — everyone gets fifteen minutes at the bench.',
  },
  {
    id: 'young-vocalists',
    discipline: 'Théâtre',
    name: 'Shakespeare et les autres',
    ageRange: 'pour les 7–11 ans',
    day: 'Mardi',
    time: '5:00 – 5:45 PM',
    month: 'octobre à janvier',
    instructor: 'Marion Sancellier',
    spotsLeft: 10,
    description:
      'Group warm-ups, rounds, and a rotating songbook — building confidence more than pitch perfection.',
  },
]
