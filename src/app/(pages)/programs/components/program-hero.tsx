'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

type Props = {
  title: string
  subtitle: string
  body: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  trust?: string[]
}

export function ProgramsHero({
  title,
  subtitle,
  body,
  primaryCta,
  secondaryCta,
  trust = []
}: Props) {
  return (
    <section className='fs-hero fs-sheen relative overflow-hidden rounded-3xl border border-neutral-500 bg-background/60 p-8 shadow-sm md:p-10'>
      {/* hero identity: soft glow + faint grid */}
      <div className='pointer-events-none absolute inset-0 opacity-[0.10]'>
        <div className='absolute -right-24 -top-24 h-96 w-96 rounded-full bg-foreground blur-3xl' />
        <div className='absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-foreground blur-3xl' />

        {/* ✅ Fix: Tailwind background-size utility */}
        <div className='absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[48px_48px]' />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className='relative max-w-3xl space-y-4'
      >
        <div className='text-xs uppercase tracking-wider text-muted-foreground'>
          Boxing • Muay Thai • Kickboxing
        </div>

        <h1 className='text-3xl font-semibold tracking-tight md:text-4xl'>{title}</h1>

        <p className='text-lg text-muted-foreground'>{subtitle}</p>

        <p className='text-base text-muted-foreground'>{body}</p>

        <div className='flex flex-wrap gap-3 pt-2'>
          <Button asChild>
            <a href={primaryCta.href}>{primaryCta.label}</a>
          </Button>
          <Button variant='outline' asChild>
            <a href={secondaryCta.href}>{secondaryCta.label}</a>
          </Button>
        </div>

        {!!trust.length && (
          <div className='flex flex-wrap gap-2 pt-5'>
            {trust.map(t => (
              <span
                key={t}
                className='rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground'
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  )
}
