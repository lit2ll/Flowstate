'use client'

import Card from '../ui/card'
import Section from '../ui/section'
import { motion } from 'framer-motion'

export const MethodBlock = () => {
  const programs = [
    {
      title: 'Train With Intent',
      description: 'Every drill has a purpose.',
      features: [
        'Every movement, Every Drill, Every Session.',
        'Develop important fundamentals',
        'Increase Fight IQ ',
        'Positioning',
        'Decision-making'
      ]
    },
    {
      title: 'Flow Over Force',
      description: 'Technique over brute force.',
      features: [
        'Efficiency beats exhaustion.',
        'Learn to move, strike, and defend with minimal wasted energy',
        'Blend movement, technique, footwork, striking & defense into one flow.'
      ]
    },
    {
      title: 'Built for Longevity',
      description: 'Progress without breaking down your body.',
      features: [
        'Develop skills that last a life-time',
        'Proper technique to avoid injury',
        'Smart volume, technical precision, sustainable intensity'
      ]
    }
  ]

  return (
    <div className='bg-black/10 pt-28'>
      <div className='container mx-auto max-w-6xl'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='space-y-16'
        >
          <div className='text-center'>
            <h2 className='text-5xl md:text-6xl font-bold tracking-tight'>
              Designed for People
              <br />
              Who <span className='text-emerald-500'>Think</span>
            </h2>
            <p className='text-xl text-white/60 mt-6 max-w-2xl mx-auto'>
              Choose the training format that fits your goals and schedule.
            </p>
          </div>
          <Section id='why' eyebrow='Method' title='Why Flow State Striking Works'>
            <div className='grid md:grid-cols-3 gap-8 '>
              {programs.map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='bg-white/5 border border-white/10 rounded-xl p-8 space-y-6 hover:bg-white/[0.07] hover:border-emerald-500/30 transition-all duration-300 group'
                >
                  <h3 className='text-2xl font-bold group-hover:text-emerald-500 transition-colors'>
                    {program.title}
                  </h3>
                  <p className='text-white/90 leading-relaxed'>{program.description}</p>
                  <ul className='space-y-3'>
                    {program.features.map(feature => (
                      <li
                        key={feature}
                        className='flex items-start gap-3 text-sm text-white/70'
                      >
                        <span className='text-emerald-500 mt-0.5'>→</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </Section>
        </motion.div>
      </div>
    </div>
  )
}

export default MethodBlock
