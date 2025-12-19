import Image from 'next/image'
import Card from '../ui/card'
import PrimaryLink from '../ui/primary-link'
import SecondaryLink from '../ui/secondary-link'
import Section from '../ui/section'

const CoachBlock = () => {
  return (
    <div className='bg-black/50 py-16'>
      <Section id='coach' eyebrow='Coach' title='Meet Your Coach'>
        <div className='grid gap-4 md:grid-cols-5'>
          <div className='md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6'>
            <div className='aspect-4/5 w-full rounded-xl bg-white/10'>
              <Image
                src='/images/about.png'
                width={400}
                height={500}
                alt='Coach Larry Ly'
                className='rounded-2xl border border-white/10 bg-white/5 p-6'
              />
            </div>
            <div className='mt-4 text-sm text-white/60'></div>
          </div>

          <Card className='md:col-span-3'>
            <p className='text-white/85 leading-relaxed'>
              With over 23 years of martial arts experience across boxing, Muay Thai, and
              kickboxing, Larry Ly focuses on helping students develop skill, confidence,
              and control — without unnecessary damage.
            </p>
            <p className='mt-4 text-white/80 leading-relaxed'>
              Flow State Striking blends science, experience, and philosophy into a system
              that supports growth at every stage.
            </p>

            <div className='mt-6 flex flex-wrap gap-3'>
              <PrimaryLink href='/about'>Learn More</PrimaryLink>
              <SecondaryLink href='/training-methods'>Training Philosophy</SecondaryLink>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  )
}

export default CoachBlock
