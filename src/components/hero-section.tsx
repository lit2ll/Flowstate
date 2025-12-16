import React from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from './header'
import type { Variants } from 'motion/react'
import VideoBlock from './video-block'
import { Logo } from './logo'
import { CustomersSection } from './sections/customers'
import HeroVideo from './video-block'
import { Badge } from './badge'

export default function HeroSection() {
	const transitionVariants = {
		item: {
			hidden: {
				opacity: 0,
				filter: 'blur(12px)',
				y: 12
			},
			visible: {
				opacity: 1,
				filter: 'blur(0px)',
				y: 0,
				transition: {
					type: 'spring' as const,
					bounce: 0.3,
					duration: 1.5
				}
			}
		}
	} satisfies { item: Variants }
	return (
		<>
			<main className='relative'>
				<div
					aria-hidden
					className='absolute inset-0 isolate hidden opacity-65 contain-strict lg:block'
				>
					<div className='w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]' />
					<div className='h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]' />
					<div className='h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]' />
				</div>
				<section className=''>
					<HeroVideo />
					<div className='relative pt-24 md:pt-36 '>
						<AnimatedGroup
							variants={{
								container: {
									visible: {
										transition: {
											delayChildren: 1
										}
									}
								},
								item: {
									hidden: {
										opacity: 0,
										y: 20
									},
									visible: {
										opacity: 1,
										y: 0,
										transition: {
											type: 'spring',
											bounce: 0.3,
											duration: 2
										}
									}
								}
							}}
							className='mask-b-from-35% mask-b-to-90% absolute inset-0 top-56 -z-20 lg:top-32'
						>
							{/* <Image
								src='https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120'
								alt='background'
								className='hidden size-full dark:block'
								width='3276'
								height='4095'
							/> */}
							<Logo />
						</AnimatedGroup>

						<div
							aria-hidden
							className='absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]'
						/>

						<AnimatedGroup
							variants={{
								container: {
									visible: {
										transition: {
											staggerChildren: 0.05,
											delayChildren: 0.75
										}
									}
								},
								...transitionVariants
							}}
						>
							<div className='mask-b-from-55% relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20'>
								<div className='inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1'>
									<VideoBlock />
									{/* <Image
										className='bg-background aspect-15/8 relative hidden rounded-2xl dark:block'
										src='/images/appshot.png'
										alt='app screen'
										width='2700'
										height='1440'
									/>
									<Image
										className='z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden'
										src='/images/appshot.png'
										alt='app screen'
										width='2700'
										height='1440'
									/> */}
								</div>
							</div>
						</AnimatedGroup>
					</div>
				</section>
				<CustomersSection />
			</main>
		</>
	)
}
