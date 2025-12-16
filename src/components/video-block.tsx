import { Badge } from './badge'
import { CTAButtons } from './cta-buttons'
import { TextEffect } from './ui/text-effect'

export default function HeroVideo() {
	return (
		<section className='relative min-h-[90vh] flex flex-col justify-center  h-full '>
			{/* Video */}
			<video
				className='absolute -z-10 inset-0 h-full w-full object-cover'
				autoPlay
				muted
				loop
				playsInline
				preload='auto'
			>
				<source src='/video/video.mp4' type='video/mp4' />
			</video>

			{/* Dark overlay */}
			<div className='absolute inset-0 bg-black/55' />

			{/* Content */}
			<div className='relative z-10 mx-auto max-w-5xl px-6 py-24 text-center  w-full'>
				<p className='mt-6 text-lg md:text-xl text-white/85'>
					<Badge text='New: Flow State Training Program' />
				</p>
				<TextEffect
					preset='fade-in-blur'
					speedSegment={0.3}
					as='h1'
					className='mx-auto mt-8 max-w-4xl text-balance text-5xl max-md:font-bold font-black md:text-7xl lg:mt-16 xl:text-[5.25rem] font-sans'
				>
					Flow State Striking
				</TextEffect>
				<TextEffect
					per='line'
					preset='fade-in-blur'
					speedSegment={0.3}
					delay={0.5}
					as='p'
					className='mx-auto mt-8 max-w-2xl text-balance text-lg'
				>
					A modern kickboxing & Muay Thai system for balance, confidence, and real-world
					performance.
				</TextEffect>

				<CTAButtons />
			</div>
		</section>
	)
}
