import { Marquee } from '../ui/marquee'

function TrustStrip() {
	const TRUST_POINTS = [
		'Small Group & Private Training',
		'All Levels Welcome',
		'Longevity-Focused Coaching',
		'Located at Williams MMA Academy'
	]

	return (
		<section className='border-y border-white/10 bg-white/5'>
			{/* <div className=''>
				<Marquee
					text='Private Training • All Levels Welcome • Longevity-Focused Coaching • Located at Williams MMA Academy'
					className='text-white/90'
				>
					dff
				</Marquee>
			</div> */}
			<div className='mx-auto max-w-6xl px-4 py-6'>
				<ul className='grid gap-2 md:grid-cols-4 text-sm text-white/75'>
					{TRUST_POINTS.map((p) => (
						<li key={p} className='flex items-center gap-2'>
							<span className='inline-block h-1.5 w-1.5 rounded-full bg-white/70' />
							<span>{p}</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default TrustStrip
