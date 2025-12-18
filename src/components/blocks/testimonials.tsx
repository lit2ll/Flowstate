'use client'

import Card from '../ui/card'
import Section from '../ui/section'
import { toast } from '@/lib/toast'
import { motion } from 'framer-motion'

type Testimonial = {
	quote: string
	name: string
	label?: string // Adult Student / Parent / Fighter etc.
}

const TestimonialsBlock = () => {
	const testimonials = [
		{
			quote:
				"The training here is different than any other gym I've been to. Coach Larry's approach to the fight game completely changed how I think about training and movement.",
			author: 'Michael R.',
			role: 'Software Engineer'
		},
		{
			quote:
				"I've trained at multiple gyms over the years. Flow State Striking is the first place that prioritizes intelligence over intensity.",
			author: 'Sarah K.',
			role: 'Product Manager'
		},
		{
			quote:
				'Finally, a place where I can train seriously without the meathead culture. The coaching here is world-class.',
			author: 'David L.',
			role: 'Entrepreneur'
		}
	]
	const handleCTA = () => {
		toast.info({
			title: "Let's Get Started",
			description:
				"🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
		})
	}
	// const TESTIMONIALS: Testimonial[] = [
	// 	{
	// 		quote: 'Training here feels intelligent. I’m learning faster and staying healthier.',
	// 		name: 'Student',
	// 		label: 'Adult Student'
	// 	},
	// 	{
	// 		quote: 'Clear structure, real coaching, and zero ego. Exactly what I was looking for.',
	// 		name: 'Student',
	// 		label: 'Adult Student'
	// 	},
	// 	{
	// 		quote: 'My confidence and composure improved in daily life — not just in training.',
	// 		name: 'Student',
	// 		label: 'Adult Student'
	// 	}
	// ]
	return (
		<div className='py-16'>
			<Section id='testimonials' eyebrow='Testimonials' title='What Students Say'>
				<div className='container mx-auto max-w-5xl'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='space-y-16'
					>
						<h2 className='text-4xl md:text-5xl font-bold tracking-tight text-center'>
							What Our Students Say
						</h2>
						<div className='grid md:grid-cols-3 gap-8'>
							{testimonials.map((testimonial, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className='space-y-6'
								>
									<p className='text-white/80 leading-relaxed italic'>"{testimonial.quote}"</p>
									<div>
										<p className='font-semibold'>{testimonial.author}</p>
										<p className='text-sm text-white/50'>{testimonial.role}</p>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
				{/* <div className='grid gap-4 md:grid-cols-3'>
				{TESTIMONIALS.map((t, idx) => (
					<Card key={idx}>
						<p className='text-white/90 leading-relaxed'>“{t.quote}”</p>
						<div className='mt-4 text-sm text-white/70'>
							<span className='font-medium text-white/85'>— {t.name}</span>
							{t.label ? <span className='ml-2 text-white/50'>• {t.label}</span> : null}
						</div>
					</Card>
				))}
			</div> */}
			</Section>
		</div>
	)
}

export default TestimonialsBlock
