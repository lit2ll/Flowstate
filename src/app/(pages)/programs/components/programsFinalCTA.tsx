'use client'

import { Button } from '@/components/ui/button'

export function ProgramsFinalCTA({
  headline,
  body,
  primaryCta,
  secondaryCta
}: {
  headline: string
  body: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
}) {
  return (
    <section className='relative overflow-hidden rounded-3xl bg-background/60 p-8 shadow-sm'>
      <div className='pointer-events-none absolute inset-0 opacity-[0.10]'>
        <div className='absolute -right-20 -top-20 h-80 w-80 rounded-full bg-foreground blur-3xl' />
        <div className='absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-foreground blur-3xl' />
      </div>

      <div className='relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between'>
        <div className='max-w-2xl space-y-2'>
          <h2 className='text-xl font-semibold tracking-tight md:text-2xl'>{headline}</h2>
          <p className='text-sm text-muted-foreground md:text-base'>{body}</p>
        </div>

        <div className='flex flex-wrap gap-3'>
          <Button asChild>
            <a href={primaryCta.href}>{primaryCta.label}</a>
          </Button>
          <Button variant='outline' asChild>
            <a href={secondaryCta.href}>{secondaryCta.label}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
