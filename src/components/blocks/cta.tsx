'use client'

import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { toast } from '@/lib/toast'

const CtaBlock = () => {
  const handleCTA = () => {
    toast.info({
      title: "Let's Get Started",
      description:
        "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    })
  }
  return (
    <section className='py-32 px-6 border-t border-white/5'>
      <div className='container mx-auto max-w-4xl'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center space-y-8'
        >
          <h2 className='text-5xl md:text-6xl font-bold tracking-tight'>
            Your First Session Is
            <br />
            the <span className='text-emerald-500'>First Step</span>
          </h2>
          <p className='text-xl text-white/60 max-w-2xl mx-auto'>
            See if Flow State Striking is right for you. No commitment. No pressure. Just
            come ready to learn.
          </p>
          <Button
            onClick={handleCTA}
            className='bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-8 py-6 text-lg mt-8 transition-all duration-300 hover:scale-105'
          >
            Book Your First Session <ArrowRight className='ml-2 w-5 h-5' />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default CtaBlock
