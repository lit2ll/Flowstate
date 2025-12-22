'use client'

type Item = { title: string; desc: string; href: string; tag?: string }

export function ProgramsDecisionCards({ items }: { items: Item[] }) {
  return (
    <section className='space-y-4'>
      <h2 className='text-xl font-semibold tracking-tight'>Choose Your Path</h2>

      <div className='grid gap-4 md:grid-cols-3'>
        {items.map(item => (
          <a
            key={item.title}
            href={item.href}
            className='group rounded-3xl border-neutral-800/30 border-4  p-6 shadow-sm transition hover:shadow-md'
          >
            <div className='flex items-start justify-between gap-3'>
              <div className='space-y-2'>
                <div className='text-base font-semibold'>{item.title}</div>
                <div className='text-sm text-muted-foreground'>{item.desc}</div>
              </div>
              {item.tag ? (
                <span className='rounded-full border-neutral-500 border px-3 py-1 text-xs text-muted-foreground'>
                  {item.tag}
                </span>
              ) : null}
            </div>

            <div className='pt-4 text-sm font-medium'>
              <span className='underline-offset-4 group-hover:underline'>Explore</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
