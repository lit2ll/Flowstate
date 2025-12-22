import type { ReactNode } from 'react'

export const programsPage = {
  hero: {
    title: 'Programs',
    subtitle: 'Train with clarity. Progress with purpose.',
    body: 'Flow State Striking is structured training rooted in Boxing, Muay Thai, and Kickboxing—built for real skill, composure under pressure, and long-term physical confidence.',
    primaryCta: { label: 'Book Private', href: '/schedule?type=private' },
    secondaryCta: { label: 'View Schedule', href: '/schedule' },
    trust: ['All levels', 'Technique-first', 'Longevity-focused']
  },

  // (1) Outcome-first intro + “who is this for” + choosing framework
  decisionAid: {
    headline: 'Choose your path',
    subhead:
      'People don’t buy workouts. They buy outcomes. Pick the environment that matches your goal.',
    personas: [
      {
        title: 'New to striking',
        desc: 'Start clean. Build balance, stance, and confidence without chaos.',
        rec: 'Small Group Training (or Private if you want fast feedback)',
        href: '#group'
      },
      {
        title: 'Want the fastest progress',
        desc: 'Tight feedback loops. Customized drills. Efficient skill growth.',
        rec: 'Private Training',
        href: '#private'
      },
      {
        title: 'Already training, but plateaued',
        desc: 'Fix what’s holding you back: footwork, defense, timing, decision-making.',
        rec: 'Private + Workshop deep dives',
        href: '#workshops'
      },
      {
        title: 'Competition prep',
        desc: 'Composure, pressure, tactics, conditioning that supports fighting.',
        rec: 'Private Training (with structured intensity)',
        href: '#private'
      }
    ],
    ctas: [
      { label: 'Book a Consultation', href: '/contact?topic=programs' },
      { label: 'See Schedule', href: '/schedule' }
    ]
  },

  // (Additional idea) Comparison table
  comparison: {
    title: 'Program comparison',
    rows: [
      {
        program: 'Private',
        bestFor: 'Rapid progress',
        outcome: 'Technique mastery + strategy',
        price: '$$$',
        href: '#private'
      },
      {
        program: 'Small Group',
        bestFor: 'Consistency + energy',
        outcome: 'Skill + fitness + accountability',
        price: '$$',
        href: '#group'
      },
      {
        program: 'Workshops',
        bestFor: 'Deep dives',
        outcome: 'One skill, sharpened',
        price: '$',
        href: '#workshops'
      }
    ]
  },

  // (Why Flow State works)
  whyItWorks: {
    title: 'Why Flow State Striking works',
    bullets: [
      {
        title: 'Measurable milestones',
        desc: 'You’re not guessing. We track progress through repeatable standards.'
      },
      {
        title: 'Technique refinement',
        desc: 'Tighter mechanics, better balance, cleaner decision-making.'
      },
      {
        title: 'Fight-relevant conditioning',
        desc: 'Conditioning that supports striking performance—not random fatigue.'
      },
      {
        title: 'Longevity-first intensity',
        desc: 'You can train hard without paying for it later.'
      }
    ]
  },

  // (Roadmap)
  path: {
    title: 'Flow State Striking Path',
    subtitle: 'A roadmap, not a menu.',
    stages: [
      {
        title: 'Beginner',
        desc: 'Stance, balance, fundamentals, safe pressure.',
        supports: ['Small Group', 'Private']
      },
      {
        title: 'Intermediate',
        desc: 'Timing, defense, counters, rhythm, distance control.',
        supports: ['Small Group', 'Private', 'Workshops']
      },
      {
        title: 'Advanced',
        desc: 'Adaptability, tactics, composure under pressure.',
        supports: ['Private', 'Workshops']
      },
      {
        title: 'Competition Prep',
        desc: 'Gameplanning, rounds, pressure management, conditioning.',
        supports: ['Private']
      }
    ]
  },

  // (Program sections now include: what you get + session structure + outcomes)
  sections: [
    {
      id: 'private',
      icon: 'glove',
      eyebrow: 'Private Training',
      headline: 'Precision. Personalization. Accelerated growth.',
      intro:
        'Private sessions are built for technical clarity and efficient progression—tight feedback loops with zero wasted reps.',
      includes: [
        'Session structure: movement prep → technical drilling → pads → targeted conditioning (optional)',
        'Personalized plan based on your goals (fitness, skill, sparring, competition)',
        'Clear homework drills (simple, effective, repeatable)'
      ],
      goals: [
        'Footwork + distance control',
        'Defense + counters',
        'Power mechanics + efficiency',
        'Composure under pressure'
      ],
      outcomes: [
        'By 4 sessions: cleaner stance, better balance, obvious defensive improvement',
        'By 8 sessions: sharper timing, reliable combinations, more confident pressure management',
        'By 12 sessions: consistent decision-making + adaptable responses'
      ],
      pricing: [
        { label: 'Single (60 min)', value: '$100' },
        { label: '5-Session Package', value: '$475' },
        { label: '10-Session Package', value: '$900' }
      ],
      ctas: [
        { label: 'Book a Private Session', href: '/schedule?type=private' },
        { label: 'Ask a Question', href: '/contact?topic=private' }
      ],
      note: 'Best for fast progress, busy schedules, or anyone who wants direct feedback and a plan.'
    },
    {
      id: 'group',
      icon: 'group',
      eyebrow: 'Small Group Training',
      headline: 'Structure. Accountability. Controlled intensity.',
      intro:
        'Small group training blends instruction, partner drills, and guided repetition—without turning training into chaos.',
      includes: [
        'Session structure: technical warm-up → drill blocks → partner work → pads/bag → finish',
        'Coached pacing (build skill first, then intensity)',
        'Optional paths for beginners vs experienced students'
      ],
      goals: [
        'Fundamentals + consistency',
        'Cardio that supports striking',
        'Timing through structured partner work',
        'Confidence through repeated success'
      ],
      outcomes: [
        'Stronger fundamentals within the first month',
        'Better endurance without sacrificing form',
        'Improved timing, spacing, and coordination'
      ],
      pricing: [
        { label: 'Drop-In', value: '$35' },
        { label: 'Monthly', value: 'Available' }
      ],
      ctas: [
        { label: 'Join a Class', href: '/schedule?type=group' },
        { label: 'View Schedule', href: '/schedule' }
      ],
      note: 'Best for consistency, community energy, and long-term growth—especially for beginners.'
    },
    {
      id: 'workshops',
      icon: 'target',
      eyebrow: 'Workshops',
      headline: 'Focused learning. Deeper understanding.',
      intro:
        'Workshops are skill-focused sessions that go deeper than regular training—one topic, sharpened.',
      includes: [
        'A single skill theme with structured progressions',
        'Drill library you can reuse for months',
        'Clear takeaways + homework focus'
      ],
      goals: [
        'Footwork & distance management',
        'Defensive flow & countering',
        'Power mechanics & efficiency',
        'Clinch fundamentals'
      ],
      outcomes: [
        'Clarity on one skill and how to build it',
        'Fix plateaus faster',
        'Bring your training back to fundamentals'
      ],
      pricing: [{ label: 'Status', value: 'Coming soon' }],
      ctas: [
        { label: 'Get Notified', href: '/contact?topic=workshops' },
        { label: 'Train Now (Private)', href: '/schedule?type=private' }
      ],
      note: 'Best for students who want depth—perfect alongside private training or group consistency.'
    }
  ],

  // (Social proof)
  socialProof: {
    title: 'What students say',
    subtitle:
      'Real progress looks calm: better balance, cleaner defense, confident decisions.',
    testimonials: [
      {
        quote:
          'This is the first time striking has felt organized. I can actually see what I’m improving each week.',
        name: 'Student',
        meta: 'Private Training'
      },
      {
        quote:
          'The pace is perfect—hard training without feeling wrecked. I leave sharper, not just tired.',
        name: 'Student',
        meta: 'Small Group Training'
      },
      {
        quote:
          'Footwork finally makes sense. Distance control changed everything for me.',
        name: 'Student',
        meta: 'Workshop / Skill Focus'
      }
    ],
    communitySignals: [
      'Structured progression (not random workouts)',
      'Optional sparring (never forced)',
      'Technique-first environment'
    ]
  },

  // (FAQ)
  faq: [
    {
      q: 'Do I need experience?',
      a: 'No. Everything is scaled. Beginners get structure first—stance, balance, timing—then intensity.'
    },
    {
      q: 'What’s better: private or group?',
      a: 'Private is the fastest path if you want targeted feedback and a plan. Group is ideal for consistency, energy, and long-term repetition.'
    },
    {
      q: 'How many sessions per week should I do?',
      a: 'For most people: 2x/week is a strong baseline. 3x/week builds faster. Private can be 1x/week if you follow homework drills.'
    },
    {
      q: 'Is sparring required?',
      a: 'No. Sparring is optional and introduced intentionally when you’re ready—and only if it supports your goals.'
    },
    {
      q: 'What if I want competition prep?',
      a: 'Private training is the cleanest path. We’ll build conditioning, tactics, composure, and round structure without burning you out.'
    }
  ],

  finalCta: {
    headline: 'Train with intention. Move with confidence.',
    body: 'If you want clarity and progress without chaos, start here.',
    primaryCta: { label: 'Book Private', href: '/schedule?type=private' },
    secondaryCta: { label: 'View Schedule', href: '/schedule' }
  }
}
