'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Brain, Clock, Dumbbell, Heart, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { toast } from '@/lib/toast'
import WelcomeBlock from '@/components/blocks/welcome'

const HeroBlock = () => {
  const testimonials = [
    {
      quote:
        "This isn't just another kickboxing gym. Larry's approach completely changed how I think about training and movement.",
      author: 'Michael R.',
      role: 'Software Engineer'
    },
    {
      quote:
        "I've trained at multiple gyms over the years. Flow State Striking is the first place that prioritizes intelligence over intensity.",
      author: 'Sarah K.',
      role: 'Product Manager'
    },
    {
      quote:
        'Finally, a place where I can train seriously without the meathead culture. The coaching here is world-class.',
      author: 'David L.',
      role: 'Entrepreneur'
    }
  ]

  return (
    <>
      <section className='py-32 px-6 border-t border-white/5'>
        <WelcomeBlock />
      </section>

      <section className='py-32 px-6 border-t border-white/5 bg-white/2'></section>

      <section className='py-32 px-6 border-t border-white/5'></section>
    </>
  )
}

export default HeroBlock
