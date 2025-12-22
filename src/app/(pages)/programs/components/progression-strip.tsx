'use client'

type Step = { title: string; desc: string }

export function ProgressionStrip({
  title,
  subtitle,
  steps
}: {
  title: string
  subtitle: string
  steps: Step[]
}) {
  return (
    <section className='rounded-3xl border p-8 shadow-sm'>
      <div className='space-y-2'>
        <h2 className='text-xl font-semibold tracking-tight'>{title}</h2>
        <p className='text-sm text-muted-foreground'>{subtitle}</p>
      </div>

      <div className='mt-6 grid gap-4 md:grid-cols-3'>
        {steps.map(s => (
          <div key={s.title} className='rounded-2xl border p-5'>
            <div className='text-sm font-semibold'>{s.title}</div>
            <div className='mt-2 text-sm text-muted-foreground'>{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
