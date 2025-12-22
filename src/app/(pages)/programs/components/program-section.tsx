'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Hand, Users, Target } from 'lucide-react'

export type ProgramIcon = 'glove' | 'group' | 'target'

export type ProgramSectionProps = {
  id: string
  icon: ProgramIcon
  eyebrow: string
  badge?: string
  headline: string
  intro: string
  includes: string[]
  goals: string[]
  outcomes: string[]
  pricing: { label: string; value: string }[]
  ctas: { label: string; href: string }[]
  note?: string
}

function Icon({ kind }: { kind: ProgramIcon }) {
  const cls = 'h-5 w-5'
  if (kind === 'group') return <Users className={cls} />
  if (kind === 'target') return <Target className={cls} />
  return <Hand className={cls} />
}

export function ProgramSection({
  id,
  icon,
  eyebrow,
  badge,
  headline,
  intro,
  includes,
  goals,
  outcomes,
  pricing,
  ctas,
  note
}: ProgramSectionProps) {
  return (
    <section id={id} className='scroll-mt-24'>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.35 }}
        className='fs-sheen relative overflow-hidden rounded-3xl border border-neutral-500/50 bg-background/60 p-7 shadow-sm md:p-8'
      >
        {/* subtle section glow */}
        <div className='pointer-events-none absolute inset-0 opacity-[0.08]'>
          <div className='absolute -right-24 -top-24 h-72 w-72 rounded-full bg-foreground blur-3xl' />
          <div className='absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-foreground blur-3xl' />
        </div>

        <div className='relative grid gap-8 lg:grid-cols-2 '>
          {/* Left */}
          <div className='space-y-4'>
            <div className='flex items-center gap-3'>
              <div className='inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-muted'>
                <Icon kind={icon} />
              </div>

              <div className='space-y-1'>
                <div className='text-xs uppercase tracking-wider text-muted-foreground'>
                  {eyebrow}
                </div>

                {badge ? (
                  <span className='rounded-full bg-muted/40 px-3 py-1 text-[11px] text-muted-foreground'>
                    {' '}
                    {badge}
                  </span>
                ) : null}
              </div>
            </div>

            <h3 className='text-2xl font-semibold tracking-tight md:text-3xl'>
              {headline}
            </h3>

            <p className='text-sm text-muted-foreground md:text-base'>{intro}</p>

            <div className='grid gap-4 md:grid-cols-2 '>
              <div className='rounded-2xl bg-muted/40 p-4'>
                <div className='text-sm font-semibold'>Pricing</div>
                <div className='mt-3 space-y-2'>
                  {pricing.map(p => (
                    <div key={p.label} className='flex items-center justify-between'>
                      <div className='text-sm text-muted-foreground'>{p.label}</div>
                      <div className='text-sm font-semibold'>{p.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className='rounded-2xl bg-muted/40 p-4'>
                <div className='text-sm font-semibold'>Best used for</div>
                <div className='mt-3 text-sm text-muted-foreground'>
                  {note ?? 'Consistent skill development with a clear structure.'}
                </div>
              </div>
            </div>

            <div className='flex flex-wrap gap-3 pt-1'>
              <Button asChild>
                <a href={ctas[0]?.href ?? '/schedule'}>
                  {ctas[0]?.label ?? 'Get Started'}
                </a>
              </Button>

              {ctas[1] ? (
                <Button variant='outline' asChild>
                  <a href={ctas[1].href}>{ctas[1].label}</a>
                </Button>
              ) : null}
            </div>
          </div>

          {/* Right */}
          <div className='space-y-6'>
            <div className='rounded-2xl bg-muted/40 p-5'>
              <div className='text-sm font-semibold'>What’s included</div>
              <ul className='mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground'>
                {includes.map(x => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>

            <div className='grid gap-4 md:grid-cols-2'>
              <div className='rounded-2xl bg-muted/40 p-5'>
                <div className='text-sm font-semibold'>Goals</div>
                <ul className='mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground'>
                  {goals.map(x => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>

              <div className='rounded-2xl bg-muted/40 p-5'>
                <div className='text-sm font-semibold'>Outcomes</div>
                <ul className='mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground'>
                  {outcomes.map(x => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='rounded-2xl bg-muted/40 p-5'>
              <div className='text-sm font-semibold'>Intent</div>
              <p className='mt-2 text-sm text-muted-foreground'>
                Build skill with calm repetition. Add intensity only when it improves
                decision-making—not when it breaks form.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
