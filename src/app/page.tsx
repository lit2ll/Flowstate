import { HeroHeader } from '@/components/sections/header'
import HeroSection from '@/components/sections/hero/hero-section'

export default function Home() {
	return (
		<div className='w-full min-h-screen relative'>
			<HeroHeader />
			<HeroSection />
		</div>
	)
}
