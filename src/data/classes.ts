export interface ClassSession {
  id: string
  discipline: 'Art' | 'Music'
  name: string
  ageRange: string
  day: string
  time: string
  instructor: string
  spotsLeft: number
  description: string
}

export const classes: Array<ClassSession> = [
  {
    id: 'clay-critters',
    discipline: 'Art',
    name: 'Clay Critters',
    ageRange: 'Ages 4–6',
    day: 'Mondays',
    time: '4:00 – 4:45 PM',
    instructor: 'Odalys Feck',
    spotsLeft: 3,
    description:
      'Hand-building with air-dry clay — snails, hedgehogs, and whatever else wants to exist that week.',
  },
  {
    id: 'ukulele-buddies',
    discipline: 'Music',
    name: 'Ukulele Buddies',
    ageRange: 'Ages 6–8',
    day: 'Mondays',
    time: '5:00 – 5:45 PM',
    instructor: 'Perryn Okafor-Diaz',
    spotsLeft: 0,
    description:
      'Three chords, a dozen songs, and a lot of out-of-sync strumming that somehow still sounds good.',
  },
  {
    id: 'watercolor-wanderers',
    discipline: 'Art',
    name: 'Watercolor Wanderers',
    ageRange: 'Ages 7–10',
    day: 'Tuesdays',
    time: '4:15 – 5:15 PM',
    instructor: 'Odalys Feck',
    spotsLeft: 5,
    description:
      'Loose, wet-on-wet painting exercises focused on color mixing rather than "getting it right."',
  },
  {
    id: 'rhythm-lab',
    discipline: 'Music',
    name: 'Rhythm Lab',
    ageRange: 'Ages 5–8',
    day: 'Wednesdays',
    time: '4:00 – 4:40 PM',
    instructor: 'Tobias Marne',
    spotsLeft: 2,
    description:
      'Drums, shakers, and body percussion. Loud, joyful, and surprisingly good for counting practice.',
  },
  {
    id: 'sketchbook-club',
    discipline: 'Art',
    name: 'Sketchbook Club',
    ageRange: 'Ages 9–12',
    day: 'Wednesdays',
    time: '5:00 – 6:00 PM',
    instructor: 'Genna Vlk',
    spotsLeft: 4,
    description:
      'A weekly prompt, a pencil, and forty-five minutes of quiet, focused drawing side by side.',
  },
  {
    id: 'beginner-piano',
    discipline: 'Music',
    name: 'Beginner Piano',
    ageRange: 'Ages 6–9',
    day: 'Thursdays',
    time: '4:00 – 4:30 PM',
    instructor: 'Perryn Okafor-Diaz',
    spotsLeft: 1,
    description:
      'One-on-one keyboard time in a small shared studio — everyone gets fifteen minutes at the bench.',
  },
  {
    id: 'mixed-media-mess',
    discipline: 'Art',
    name: 'Mixed Media Mess',
    ageRange: 'Ages 5–7',
    day: 'Fridays',
    time: '4:00 – 4:45 PM',
    instructor: 'Genna Vlk',
    spotsLeft: 6,
    description:
      'Collage, tape, glitter glue, cardboard. An apron is strongly recommended.',
  },
  {
    id: 'young-vocalists',
    discipline: 'Music',
    name: 'Young Vocalists',
    ageRange: 'Ages 8–12',
    day: 'Fridays',
    time: '5:00 – 5:45 PM',
    instructor: 'Tobias Marne',
    spotsLeft: 3,
    description:
      'Group warm-ups, rounds, and a rotating songbook — building confidence more than pitch perfection.',
  },
]
