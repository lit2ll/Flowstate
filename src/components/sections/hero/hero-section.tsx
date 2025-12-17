import React from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from '../header'
import type { Variants } from 'motion/react'
import VideoBlock from './hero-video'
import { Logo } from '../../logo'
import { CustomersSection } from '../customers'
import HeroVideo from './hero-video'
import { Badge } from '../../badge'
import { transitionVariants } from '@/lib/utils'
import HeroBlock from './hero-block'

export default function HeroSection() {
	return (
		<>
			<main className='relative'>
				<div aria-hidden className='absolute inset-0 isolate  opacity-65 contain-strict lg:block'>
					<div className='w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]' />
					<div className='h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]' />
					<div className='h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]' />
				</div>
				<HeroVideo />
				<HeroBlock />
				<CustomersSection />
			</main>
		</>
	)
}
