'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Brain, Clock, Dumbbell, Heart, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { toast } from '@/lib/toast'

const HeroBlock = () => {
	const values = [
		{
			icon: <Zap className='w-8 h-8' />,
			title: 'Flow',
			description:
				'Training that removes the mental clutter and lets you move instinctively, with clarity and precision.'
		},
		{
			icon: <Brain className='w-8 h-8' />,
			title: 'Intelligent Training',
			description:
				'Every drill, every round has purpose. No wasted movement. No ego-driven sparring. Just smart progression.'
		},
		{
			icon: <Heart className='w-8 h-8' />,
			title: 'Longevity',
			description:
				'Build skills that last decades, not months. Train hard, but train sustainably. Protect your body and mind.'
		}
	]

	const programs = [
		{
			title: 'Private Training',
			description: 'One-on-one coaching tailored to your goals, skill level, and learning pace.',
			features: ['Personalized curriculum', 'Flexible scheduling', 'Direct coach feedback']
		},
		{
			title: 'Small Group Training',
			description: 'Train with like-minded individuals in an intimate, focused environment.',
			features: ['Max 6 people per session', 'Shared learning experience', 'Community atmosphere']
		},
		{
			title: 'Workshops & Intensives',
			description: 'Deep dives into specific techniques, concepts, or training methodologies.',
			features: ['Quarterly special topics', 'Weekend intensives', 'Guest instructors']
		}
	]

	const testimonials = [
		{
			quote:
				"This isn't just another kickboxing gym. Larry's approach completely changed how I think about training and movement.",
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

	return (
		<>
			<section className='py-32 px-6 border-t border-white/5'>
				<div className='container mx-auto max-w-6xl'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='text-center space-y-16'
					>
						<h2 className='text-5xl md:text-6xl font-bold tracking-tight'>
							This Is Not a<br />
							Typical Fight Gym
						</h2>
						<div className='grid md:grid-cols-3 gap-12 mt-16'>
							{values.map((value, index) => (
								<motion.div
									key={value.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className='space-y-4 group'
								>
									<div className='text-emerald-500 flex justify-center transition-transform duration-300 group-hover:scale-110'>
										{value.icon}
									</div>
									<h3 className='text-2xl font-bold'>{value.title}</h3>
									<p className='text-white/60 leading-relaxed'>{value.description}</p>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			<section className='py-32 px-6 border-t border-white/5 bg-white/2'>
				<div className='container mx-auto max-w-6xl'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='space-y-16'
					>
						<div className='text-center'>
							<h2 className='text-5xl md:text-6xl font-bold tracking-tight'>
								Designed for People
								<br />
								Who <span className='text-emerald-500'>Think</span>
							</h2>
							<p className='text-xl text-white/60 mt-6 max-w-2xl mx-auto'>
								Choose the training format that fits your goals and schedule.
							</p>
						</div>
						<div className='grid md:grid-cols-3 gap-8 mt-16'>
							{programs.map((program, index) => (
								<motion.div
									key={program.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className='bg-white/5 border border-white/10 rounded-xl p-8 space-y-6 hover:bg-white/[0.07] hover:border-emerald-500/30 transition-all duration-300 group'
								>
									<h3 className='text-2xl font-bold group-hover:text-emerald-500 transition-colors'>
										{program.title}
									</h3>
									<p className='text-white/60 leading-relaxed'>{program.description}</p>
									<ul className='space-y-3'>
										{program.features.map((feature) => (
											<li key={feature} className='flex items-start gap-3 text-sm text-white/70'>
												<span className='text-emerald-500 mt-0.5'>→</span>
												<span>{feature}</span>
											</li>
										))}
									</ul>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			<section className='py-32 px-6 border-t border-white/5'>
				<div className='container mx-auto max-w-5xl'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='space-y-16'
					>
						<h2 className='text-4xl md:text-5xl font-bold tracking-tight text-center'>
							What People Say
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
			</section>

			<section className='py-32 px-6 border-t border-white/5'>
				<div className='container mx-auto max-w-4xl'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='text-center space-y-8'
					>
						<h2 className='text-5xl md:text-6xl font-bold tracking-tight'>
							Your First Session Is
							<br />
							the <span className='text-emerald-500'>First Step</span>
						</h2>
						<p className='text-xl text-white/60 max-w-2xl mx-auto'>
							See if Flow State Striking is right for you. No commitment. No pressure. Just come
							ready to learn.
						</p>
						<Button
							onClick={handleCTA}
							className='bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-8 py-6 text-lg mt-8 transition-all duration-300 hover:scale-105'
						>
							Book Your First Session <ArrowRight className='ml-2 w-5 h-5' />
						</Button>
					</motion.div>
				</div>
			</section>
		</>
	)
}

export default HeroBlock
