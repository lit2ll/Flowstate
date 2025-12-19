import Card from '../ui/card'
import PrimaryLink from '../ui/primary-link'
import Section from '../ui/section'

const ProgramBlock = () => {
  const PROGRAMS = [
    {
      title: '1:1 Private Coaching (60 minutes)',
      body: 'A focused session built around your goals: footwork, balance, defense, power, timing, and real-world performance.',
      cta: 'Book Private Lesson',
      href: '/schedule'
    },
    {
      title: 'Small Group Sessions',
      body: 'Structured Muay Thai + Boxing sessions with personal coaching and partner work. Stance + footwork, combinations, defense, pad/bag work, and flow-based rounds and more. Ideal for consistent progress in a supportive environment.',
      cta: 'View Schedule',
      href: '/schedule'
    },
    {
      title: 'Workshops & Clinics',
      body: 'A focused clinic on controlling range, angles, and timing—so you can land clean shots and avoid damage. Footwork, defense, flow sparring, and specialty striking concepts.',
      cta: 'See Upcoming Workshops',
      href: '/programs'
    }
  ]
  return (
    <div className='bg-black/50 py-16'>
      <Section id='programs' eyebrow='Programs' title='Training Options'>
        <div className='grid gap-4 md:grid-cols-3'>
          {PROGRAMS.map(p => (
            <Card key={p.title}>
              <div className='grid justify-between h-full gap-6'>
                <h3 className='text-lg font-semibold'>{p.title}</h3>
                <p className='mt-2 text-white/80 leading-relaxed'>{p.body}</p>

                <PrimaryLink href={p.href}>{p.cta}</PrimaryLink>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  )
}

export default ProgramBlock
