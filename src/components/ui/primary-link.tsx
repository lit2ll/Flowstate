import Link from 'next/link'

function PrimaryLink({
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
			className={`inline-flex items-center justify-center rounded-full border border-white/10 bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-white/90 transition ${className}`}
		>
			{children}
		</Link>
	)
}
export default PrimaryLink
