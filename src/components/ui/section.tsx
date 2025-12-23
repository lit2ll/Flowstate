function Section({
  id,
  eyebrow,
  title,
  children
}: {
  id?: string
  eyebrow?: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className='mx-auto max-w-7xl md:py-28 py-20 px-6'>
      {eyebrow ? (
        <p className='text-xs uppercase tracking-widest hidden text-white/50'>
          {eyebrow}
        </p>
      ) : null}
      <h2 className='mt-2 text-xs font-semibold text-white/70 tracking-tight'>{title}</h2>
      <div className='mt-6'>{children}</div>
    </section>
  )
}

export default Section
