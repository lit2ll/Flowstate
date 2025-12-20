'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Award, Target, Users, BookOpen } from 'lucide-react'

const AboutPage = () => {
  const credentials = [
    {
      icon: <Award className='w-8 h-8' />,
      title: '20+ Years Training',
      description: 'Extensive experience in kickboxing, Muay Thai, and boxing'
    },
    {
      icon: <Target className='w-8 h-8' />,
      title: 'Competition Background',
      description: 'Experienced competitor with multiple regional titles and accolades'
    },
    {
      icon: <Users className='w-8 h-8' />,
      title: '10+ Years Coaching',
      description:
        'Trained and trained with everyone from beginners to professional fighters'
    },
    {
      icon: <BookOpen className='w-8 h-8' />,
      title: 'Continuous Study',
      description: 'Regular training with world-class coaches and ongoing education'
    }
  ]

  const philosophy = [
    {
      title: 'Intelligence Over Intensity',
      description:
        'Training hard is important, but training smart is essential. Every session should have clear purpose and measurable progress.'
    },
    {
      title: 'Longevity Matters',
      description:
        'Build skills that last decades, not months. Protect your body and mind so you can train for life, not just for the next fight.'
    },
    {
      title: 'Individual Approach',
      description:
        'Everyone learns differently. What works for one person might not work for another. Coaching should adapt to the student, not the other way around.'
    }
  ]

  return (
    <>
      <div className='bg-[#0a0a0a] pt-32 pb-20'>
        <section className='px-6 pb-32'>
          <div className='container mx-auto max-w-5xl'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='grid md:grid-cols-2 gap-16 items-center'
            >
              <div className='space-y-8'>
                <div>
                  <p className='text-emerald-500 font-semibold mb-4'>Coach & Founder</p>
                  <h1 className='text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]'>
                    Larry <span className='text-emerald-500'>Ly</span>
                  </h1>
                </div>
                <p className='text-xl text-white/70 leading-relaxed'>
                  Building Flow State Striking was about creating the gym I always wanted
                  to train at—a place where intelligence and precision matter more than
                  ego and intensity.
                </p>
                <div className='bg-linear-to-br from-emerald-500/10 to-transparent border-l-4 border-emerald-500 p-6 rounded-r-lg'>
                  <p className='text-lg italic text-white/90 leading-relaxed'>
                    "True skill shows under pressure — not in chaos."
                  </p>
                </div>
              </div>
              <div className='relative'>
                <div className='aspect-3/4 bg-linear-to-br from-emerald-500/20 to-transparent rounded-2xl border border-white/10 flex items-center justify-center'>
                  <img
                    alt='Coach Larry Ly in training stance'
                    className='w-full h-full object-cover rounded-2xl'
                    src='/images/about.png'
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <section className='px-6 py-32 border-t border-white/5 bg-white/2'>
          <div className='container mx-auto max-w-4xl'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='space-y-16'
            >
              <div className='text-center'>
                <h2 className='text-4xl md:text-5xl font-bold tracking-tight'>
                  Coaching Philosophy
                </h2>
                <p className='text-lg text-white/60 mt-6'>
                  What guides my approach to training and teaching.
                </p>
              </div>
              <div className='space-y-12'>
                {philosophy.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className='space-y-3'
                  >
                    <h3 className='text-2xl font-bold text-emerald-500'>{item.title}</h3>
                    <p className='text-lg text-white/70 leading-relaxed'>
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className='px-6 py-32 border-t border-white/5'>
          <div className='container mx-auto max-w-4xl'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='space-y-8'
            >
              <h2 className='text-4xl md:text-5xl font-bold tracking-tight'>
                The Journey
              </h2>
              <div className='space-y-6 text-lg text-white/70 leading-relaxed'>
                <p>
                  I’ve been drawn to martial arts for as long as I can remember. Long
                  before I ever stepped into a gym, I was shadowboxing imaginary bad guys
                  and and bullies from my schools. What drew me in wasn’t violence — it
                  was the composure, confidence, and presence that skilled martial artists
                  carried.
                </p>
                <p>
                  I began formal training over two decades ago and went on to compete in
                  martial arts tournaments, kickboxing events, and amateur Muay Thai
                  bouts. Along the way, I experienced both the highs of winning and the
                  reality of minor and major injuries. That contrast forced me to ask
                  better questions. Not just how to fight, but how to train intelligently,
                  improve without breaking down and develop skills that didn’t rely on
                  being the fastest, biggest or the strongest.
                </p>
                <p>
                  As a result, I began to question the conventional approach to training.
                  I looked beyond brute force and focused on biomechanics, footwork,
                  rhythm, fight strategy, fight IQ, and sports psychology, while training
                  with coaches who emphasized growth, efficiency, control, precision and
                  long-term development.
                </p>
                <p>
                  What I discovered was that the best fighters weren't necessarily the
                  toughest or most aggressive. They were the most technically sound, the
                  most aware, the most adaptive. They trained intelligently and
                  sustainably.
                </p>
                <p>
                  Flow State Striking is the result of that journey. I aimed to create a
                  training environment for people who want to develop real skill, calm
                  confidence and long-term growth without sacrificing their health, their
                  brains, their time, or their sanity in the process.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        <section className='px-6 py-32 border-t border-white/5'>
          <div className='container mx-auto max-w-6xl'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='space-y-16'
            >
              <div className='text-center'>
                <h2 className='text-4xl md:text-5xl font-bold tracking-tight'>
                  Background & Experience
                </h2>
              </div>
              <div className='grid md:grid-cols-2 gap-8'>
                {credentials.map((credential, index) => (
                  <motion.div
                    key={credential.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className='bg-white/5 border border-white/10 rounded-xl p-8 space-y-4 hover:bg-white/[0.07] hover:border-emerald-500/30 transition-all duration-300 group'
                  >
                    <div className='text-emerald-500 transition-transform duration-300 group-hover:scale-110'>
                      {credential.icon}
                    </div>
                    <h3 className='text-2xl font-bold'>{credential.title}</h3>
                    <p className='text-white/60 leading-relaxed'>
                      {credential.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AboutPage
