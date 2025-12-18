import { Badge } from '../../badge'
import { CTAButtons } from '../../cta-buttons'
import { TextEffect } from '../../ui/text-effect'

export default function HeroVideo() {
	return (
		<section className='relative isolate min-h-[90svh] overflow-hidden'>
			{/* Desktop video */}
			<video
				className='absolute inset-0 -z-20 hidden h-full w-full object-cover md:block opacity-40'
				autoPlay
				muted
				loop
				playsInline
				preload='auto'
			>
				<source src='/video/desktop.mp4' type='video/mp4' />
			</video>

			{/* Mobile video */}
			<video
				className='absolute inset-0 -z-20 h-full w-full object-cover md:hidden opacity-60'
				autoPlay
				muted
				loop
				playsInline
				preload='auto'
			>
				<source src='/video/mobile.mp4' type='video/mp4' />
			</video>

			{/* Unified overlay */}
			<div className='absolute inset-0 -z-10 bg-black/45 md:bg-black/55' />

			{/* Content */}
			<div className='mx-auto grid min-h-[90svh] max-w-5xl place-items-center px-6 py-20 text-center'>
				<div className='w-full space-y-10'>
					{/* Badge */}
					<div className='flex justify-center'>
						<Badge text='New: Flow State Training Program' />
					</div>

					{/* Headline stack */}
					<div className='space-y-2'>
						<TextEffect
							preset='fade-in-blur'
							speedSegment={0.3}
							as='h1'
							className='mx-auto block max-w-4xl text-balance font-black tracking-tight text-5xl md:text-6xl xl:text-7xl'
						>
							Train Striking in a
						</TextEffect>

						<div className='flex items-baseline justify-center gap-4'>
							<TextEffect
								preset='fade-in-blur'
								speedSegment={0.3}
								as='span'
								className='block text-balance font-black tracking-tight text-5xl md:text-6xl xl:text-[5.25rem]'
							>
								State of
							</TextEffect>

							<span className='block text-emerald-400 uppercase font-black tracking-tight text-6xl md:text-8xl leading-none'>
								Flow
							</span>
						</div>
					</div>

					{/* Subheadline */}
					<TextEffect
						per='line'
						preset='fade-in-blur'
						speedSegment={0.3}
						delay={0.5}
						as='p'
						className='mx-auto max-w-2xl text-balance leading-relaxed text-zinc-200 text-base md:text-xl'
					>
						A modern Muay Thai & Boxing training system focused on balance, confidence, and
						real-world performance.
					</TextEffect>

					{/* CTAs */}
					<div className='pt-2'>
						<CTAButtons />
					</div>
				</div>
			</div>
		</section>
	)
}
