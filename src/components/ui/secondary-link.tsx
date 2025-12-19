import Link from 'next/link'

function SecondaryLink({
  href,
  children,
  className = ''
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full border border-white/15 bg-transparent px-5 py-2.5 text-sm font-medium text-white/85 hover:bg-white/5 transition ${className}`}
    >
      {children}
    </Link>
  )
}

export default SecondaryLink
