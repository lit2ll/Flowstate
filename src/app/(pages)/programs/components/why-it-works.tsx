'use client'

export function ProgramsWhyItWorks({
  title,
  bullets
}: {
  title: string
  bullets: { title: string; desc: string }[]
}) {
  return (
    <section className='rounded-3xl bg-background/60 border-neutral-800/30 border-4 p-6 shadow-sm'>
      <h3 className='text-base font-semibold'>{title}</h3>

      <div className='mt-4 grid gap-3'>
        {bullets.map(b => (
          <div
            key={b.title}
            className='rounded-2xl border bg-background border-neutral-500 p-4'
          >
            <div className='text-sm font-semibold'>{b.title}</div>
            <div className='mt-1 text-sm text-muted-foreground'>{b.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
