'use client'

export function ProgramsSocialProof({
  title,
  subtitle,
  testimonials,
  communitySignals
}: {
  title: string
  subtitle: string
  testimonials: { quote: string; name: string; meta: string }[]
  communitySignals: string[]
}) {
  return (
    <section className='relative overflow-hidden rounded-3xl bg-background/60 p-8 shadow-sm border-neutral-500/50 border'>
      {/* darker-ish band feel without hardcoding colors */}
      <div className='pointer-events-none absolute inset-0 opacity-[0.06]'>
        <div className='absolute inset-0 bg-foreground' />
      </div>

      <div className='relative space-y-2'>
        <h2 className='text-xl font-semibold tracking-tight md:text-2xl'>{title}</h2>
        <p className='text-sm text-muted-foreground md:text-base'>{subtitle}</p>
      </div>

      <div className='relative mt-6 grid gap-4 lg:grid-cols-3 '>
        {testimonials.map(t => (
          <div
            key={t.quote}
            className='rounded-2xl border border-neutral-500/50 bg-background p-5'
          >
            <p className='text-sm text-muted-foreground'>“{t.quote}”</p>
            <div className='mt-4 text-sm font-semibold'>{t.name}</div>
            <div className='text-xs text-muted-foreground'>{t.meta}</div>
          </div>
        ))}
      </div>

      <div className='relative mt-6 flex flex-wrap gap-2'>
        {communitySignals.map(s => (
          <span
            key={s}
            className='rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground'
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  )
}
