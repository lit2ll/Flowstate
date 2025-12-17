import { Badge } from '../../badge'
import { CTAButtons } from '../../cta-buttons'
import { TextEffect } from '../../ui/text-effect'

export default function HeroVideo() {
	return (
		<section className='relative min-h-[90vh] flex flex-col justify-center  h-full '>
			{/* Video */}
			<video
				className='absolute -z-10 inset-0 h-full w-full object-cover hidden md:inline-block'
				autoPlay
				muted
				loop
				playsInline
				preload='auto'
			>
				<source src='/video/desktop.mp4' type='video/mp4' />
			</video>
			<div className='absolute inset-0 hidden md:bg-black/30' />
			<video
				className='absolute -z-10 inset-0 h-full w-full object-cover md:hidden'
				autoPlay
				muted
				loop
				playsInline
				preload='auto'
			>
				<source src='/video/mobile.mp4' type='video/mp4' />
			</video>
			{/* Dark overlay */}

			<div className='absolute md:hidden inset-0 bg-black/40' />

			{/* Content */}
			<div className='relative z-10 mx-auto max-w-5xl px-6 py-28 text-center w-full'>
				<Badge text='New: Flow State Training Program' />

				<TextEffect
					preset='fade-in-blur'
					speedSegment={0.3}
					as='h1'
					className='mx-auto mt-8 inline-flex max-w-4xl text-balance text-5xl max-md:font-bold font-black md:text-7xl lg:mt-16 xl:text-[5.25rem] font-sans'
				>
					Train Striking in a
				</TextEffect>
				<TextEffect
					preset='fade-in-blur'
					speedSegment={0.3}
					as='h2'
					className='mx-auto mt-3 inline-flex max-w-4xl text-balance text-5xl max-md:font-bold font-black md:text-7xl lg:mt-16 xl:text-[5.25rem] font-sans'
				>
					State of
				</TextEffect>
				<span className='pl-6 text-6xl md:text-8xl font-bold tracking-tight leading-[1.6] text-emerald-500'>
					Flow
				</span>
				<TextEffect
					per='line'
					preset='fade-in-blur'
					speedSegment={0.3}
					delay={0.5}
					as='p'
					className='leading-relaxed text-green-300 mx-auto mt-16 max-w-2xl text-balance text-xl'
				>
					A modern Muay Thai & Boxing training system focused on balance, confidence, and real-world
					performance.
				</TextEffect>

				<CTAButtons />
			</div>
		</section>
	)
}
