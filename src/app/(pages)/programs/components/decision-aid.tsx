'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

type Persona = { title: string; desc: string; rec: string; href: string }

export function ProgramsDecisionAid({
  headline,
  subhead,
  personas,
  ctas
}: {
  headline: string
  subhead: string
  personas: Persona[]
  ctas: { label: string; href: string }[]
}) {
  return (
    <section className='space-y-5'>
      <div className='space-y-2 '>
        <h2 className='text-xl font-semibold tracking-tight md:text-2xl'>{headline}</h2>
        <p className='text-sm text-muted-foreground md:text-base'>{subhead}</p>
      </div>

      <div className='grid gap-4 md:grid-cols-2'>
        {personas.map(p => (
          <motion.a
            key={p.title}
            href={p.href}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.15 }}
            className='group rounded-3xl border bg-background/60  border-neutral-500 p-6 shadow-sm hover:shadow-md'
          >
            <div className='space-y-2'>
              <div className='text-sm font-semibold'>{p.title}</div>
              <div className='text-sm text-muted-foreground'>{p.desc}</div>
              <div className='pt-2 text-sm'>
                <span className='text-muted-foreground'>Recommended: </span>
                <span className='font-semibold'>{p.rec}</span>
              </div>
              <div className='pt-3 text-sm font-medium'>
                <span className='underline-offset-4 group-hover:underline'>Explore</span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <div className='flex flex-wrap gap-3 pt-1'>
        <Button asChild>
          <a href={ctas[0].href}>{ctas[0].label}</a>
        </Button>
        <Button variant='outline' asChild>
          <a href={ctas[1].href}>{ctas[1].label}</a>
        </Button>
      </div>
    </section>
  )
}
