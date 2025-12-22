'use client'

type Item = { q: string; a: string }

export function ProgramsFAQ({ items }: { items: Item[] }) {
  return (
    <section className='space-y-4'>
      <h2 className='text-xl font-semibold tracking-tight md:text-2xl'>FAQ</h2>
      <div className='space-y-3'>
        {items.map(i => (
          <details
            key={i.q}
            className='rounded-2xl border-2 border-black/20  bg-background/60 p-5 shadow-sm'
          >
            <summary className='cursor-pointer text-sm font-semibold'>{i.q}</summary>
            <p className='mt-3 text-sm text-muted-foreground'>{i.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
