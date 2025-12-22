'use client'

export function ProgramsPath({
  title,
  subtitle,
  stages
}: {
  title: string
  subtitle: string
  stages: { title: string; desc: string; supports: string[] }[]
}) {
  return (
    <section className='rounded-3xl  bg-background/60 p-8 shadow-sm'>
      <div className='space-y-2'>
        <h2 className='text-xl font-semibold tracking-tight md:text-2xl'>{title}</h2>
        <p className='text-sm text-muted-foreground md:text-base'>{subtitle}</p>
      </div>

      <div className='mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        {stages.map(s => (
          <div
            key={s.title}
            className='rounded-2xl border border-neutral-500 bg-background p-5'
          >
            <div className='text-sm font-semibold'>{s.title}</div>
            <div className='mt-2 text-sm text-muted-foreground'>{s.desc}</div>
            <div className='mt-4 flex flex-wrap gap-2'>
              {s.supports.map(tag => (
                <span
                  key={tag}
                  className='rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground'
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
