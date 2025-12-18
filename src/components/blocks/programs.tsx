import Card from '../ui/card'
import PrimaryLink from '../ui/primary-link'
import Section from '../ui/section'

const ProgramBlock = () => {
	const PROGRAMS = [
		{
			title: 'Private Training',
			body: 'One-on-one coaching tailored to your goals. Perfect for beginners, competitors, or focused skill development.',
			cta: 'Book Now',
			href: '/schedule'
		},
		{
			title: 'Small Group Sessions',
			body: 'Structured sessions with personal attention and partner work. Ideal for consistent progress in a supportive environment.',
			cta: 'View Schedule',
			href: '/schedule'
		},
		{
			title: 'Workshops & Clinics',
			body: 'Footwork, defense, flow sparring, and specialty striking concepts.',
			cta: 'See Upcoming Workshops',
			href: '/programs'
		}
	]
	return (
		<div className='bg-black/50 py-16'>
			<Section id='programs' eyebrow='Programs' title='Training Options'>
				<div className='grid gap-4 md:grid-cols-3'>
					{PROGRAMS.map((p) => (
						<Card key={p.title}>
							<h3 className='text-lg font-semibold'>{p.title}</h3>
							<p className='mt-2 text-white/80 leading-relaxed'>{p.body}</p>
							<div className='mt-5'>
								<PrimaryLink href={p.href}>{p.cta}</PrimaryLink>
							</div>
						</Card>
					))}
				</div>
			</Section>
		</div>
	)
}

export default ProgramBlock
