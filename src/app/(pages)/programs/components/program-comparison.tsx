'use client'

export function ProgramsComparison({
  title,
  rows
}: {
  title: string
  rows: {
    program: string
    bestFor: string
    outcome: string
    price: string
    href: string
  }[]
}) {
  return (
    <section className='rounded-3xl bg-background/60 p-6 shadow-sm'>
      <h3 className='text-base font-semibold'>{title}</h3>

      <div className='mt-4 overflow-hidden rounded-2xl border border-neutral-500 bg-background'>
        <div className='grid grid-cols-4 border-b bg-muted/30 text-xs font-semibold'>
          <div className='p-3'>Program</div>
          <div className='p-3'>Best for</div>
          <div className='p-3'>Outcome</div>
          <div className='p-3 text-right'>Price</div>
        </div>

        {rows.map(r => (
          <a
            key={r.program}
            href={r.href}
            className='grid grid-cols-4 border-b border-neutral-500 last:border-b-0 text-sm hover:bg-muted/20 transition'
          >
            <div className='p-3 font-semibold'>{r.program}</div>
            <div className='p-3 text-muted-foreground'>{r.bestFor}</div>
            <div className='p-3 text-muted-foreground'>{r.outcome}</div>
            <div className='p-3 text-right font-semibold'>{r.price}</div>
          </a>
        ))}
      </div>
    </section>
  )
}
