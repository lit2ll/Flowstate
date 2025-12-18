import HeroHeader from '@/components/header'
import MethodBlock from '@/components/blocks/method'
import HeroVideo from '@/components/sections/hero/hero-video'
import ProgramBlock from '@/components/blocks/programs'
import TestimonialsBlock from '@/components/blocks/testimonials'
import CoachBlock from '@/components/blocks/coach'
import WelcomeBlock from '@/components/blocks/welcome'
import CtaBlock from '@/components/blocks/cta'
import Footer from '@/components/footer'

export default function HomePage() {
	return (
		<main className='w-full min-h-screen relative'>
			<HeroHeader />
			<HeroVideo />
			{/* <TrustStrip /> */}
			<WelcomeBlock />
			<MethodBlock />
			<ProgramBlock />
			<TestimonialsBlock />
			<CoachBlock />
			<CtaBlock />
			<Footer />
		</main>
	)
}
