'use client'

import { motion } from 'framer-motion'
import { Brain, Heart, Zap } from 'lucide-react'
import Section from '../ui/section'

const WelcomeBlock = () => {
  const values = [
    {
      icon: <Zap className='w-8 h-8' />,
      title: 'Flow',
      description:
        'Training that removes the mental clutter and lets you move instinctively, with clarity and precision.'
    },
    {
      icon: <Brain className='w-8 h-8' />,
      title: 'Intelligent Training',
      description:
        'Every drill, every round has purpose. No wasted movement. No ego-driven sparring. Just smart progression.'
    },
    {
      icon: <Heart className='w-8 h-8' />,
      title: 'Longevity',
      description:
        'Build skills that last decades, not months. Train hard, but train sustainably. Protect your body and mind.'
    }
  ]
  return (
    <div className='bg-black/50'>
      <Section title='The Dojo' eyebrow='Welcome to Flow State Training' id='welcome'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center space-y-16 mt-24 pt-20'
        >
          <h2 className='text-5xl md:text-6xl font-bold tracking-tight'>
            This Is Not a<br />
            Typical Fight Gym
          </h2>
          <div className='grid md:grid-cols-3 gap-12 mt-16'>
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='space-y-4 group'
              >
                <div className='text-emerald-500 flex justify-center transition-transform duration-300 group-hover:scale-110'>
                  {value.icon}
                </div>
                <h3 className='text-2xl font-bold'>{value.title}</h3>
                <p className='text-white/60 leading-relaxed'>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>
    </div>
  )
}

export default WelcomeBlock
