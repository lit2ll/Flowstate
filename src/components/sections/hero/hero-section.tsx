import React from 'react'
import { CustomersSection } from '../customers'
import HeroVideo from './hero-video'
import HeroBlock from './hero-block'

export default function HeroSection() {
	return (
		<>
			<section className='relative'>
				<HeroVideo />
				<HeroBlock />
				{/* <CustomersSection /> */}
			</section>
		</>
	)
}
