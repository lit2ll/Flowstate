'use client'

import { motion } from 'framer-motion'
import { Scale, Eye, Wind, TrendingUp } from 'lucide-react'
import { useEffect } from 'react'

const MethodPage = () => {
	useEffect(() => {
		document.title = 'Training Method - Flow State Striking'
		const metaDesc = document.querySelector('meta[name="description"]')
		if (metaDesc) {
			metaDesc.setAttribute(
				'content',
				'Learn about our unique flow state training methodology for kickboxing and Muay Thai. Intelligent, sustainable skill development through progressive mastery.'
			)
		} else {
			const newMeta = document.createElement('meta')
			newMeta.name = 'description'
			newMeta.content =
				'Learn about our unique flow state training methodology for kickboxing and Muay Thai. Intelligent, sustainable skill development through progressive mastery.'
			document.head.appendChild(newMeta)
		}
	}, [])

	const principles = [
		{
			icon: <Scale className='w-10 h-10' />,
			title: 'Balance Before Power',
			description:
				'True striking power comes from structural integrity and weight transfer, not muscular tension. We build stable foundations before adding speed and force.'
		},
		{
			icon: <Eye className='w-10 h-10' />,
			title: 'Awareness Under Pressure',
			description:
				'Flow state emerges when you can maintain clarity during chaos. We train your nervous system to stay calm and observant, even when the pace increases.'
		},
		{
			icon: <Wind className='w-10 h-10' />,
			title: 'Movement First',
			description:
				'Footwork and positioning create opportunities. We emphasize spatial awareness, angles, and timing before introducing complex combinations.'
		},
		{
			icon: <TrendingUp className='w-10 h-10' />,
			title: 'Progressive Mastery',
			description:
				'Skills are built in layers. Each phase builds on the previous, creating a strong foundation that supports advanced techniques naturally.'
		}
	]

	const phases = [
		{
			number: '01',
			title: 'Foundation',
			subtitle: 'Mechanics & Fundamentals',
			description:
				'Master the core techniques: stance, footwork, basic strikes, and defensive movements. Develop body awareness and learn to move efficiently.',
			duration: '2-4 months'
		},
		{
			number: '02',
			title: 'Integration',
			subtitle: 'Flow & Timing',
			description:
				'Combine techniques into fluid combinations. Learn to read distance, manage rhythm, and adapt to different speeds and styles.',
			duration: '4-8 months'
		},
		{
			number: '03',
			title: 'Expression',
			subtitle: 'Your Personal Style',
			description:
				'Develop your unique approach to striking. Refine decision-making under pressure and explore advanced tactics and strategies.',
			duration: 'Ongoing'
		}
	]

	return (
		<div className='bg-[#0a0a0a] pt-32 pb-20'>
			<section className='px-6 pb-32'>
				<div className='container mx-auto max-w-4xl'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className='text-center space-y-8'
					>
						<h1 className='text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]'>
							The Flow State
							<br />
							<span className='text-emerald-500'>Method</span>
						</h1>
						<p className='text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed'>
							A systematic approach to developing striking skills that emphasizes awareness,
							efficiency, and intelligent progression.
						</p>
					</motion.div>
				</div>
			</section>

			<section className='px-6 py-32 border-t border-white/5'>
				<div className='container mx-auto max-w-6xl'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='space-y-16'
					>
						<div className='text-center'>
							<h2 className='text-4xl md:text-5xl font-bold tracking-tight'>Core Principles</h2>
							<p className='text-lg text-white/60 mt-6 max-w-2xl mx-auto'>
								These principles guide every aspect of our training approach.
							</p>
						</div>
						<div className='grid md:grid-cols-2 gap-12 mt-16'>
							{principles.map((principle, index) => (
								<motion.div
									key={principle.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className='space-y-4 group'
								>
									<div className='text-emerald-500 transition-transform duration-300 group-hover:scale-110'>
										{principle.icon}
									</div>
									<h3 className='text-2xl font-bold'>{principle.title}</h3>
									<p className='text-white/60 leading-relaxed'>{principle.description}</p>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			<section className='px-6 py-32 border-t border-white/5 bg-white/2'>
				<div className='container mx-auto max-w-5xl'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='space-y-16'
					>
						<div className='text-center'>
							<h2 className='text-4xl md:text-5xl font-bold tracking-tight'>
								Three-Phase Structure
							</h2>
							<p className='text-lg text-white/60 mt-6 max-w-2xl mx-auto'>
								Progressive development from fundamentals to personal mastery.
							</p>
						</div>
						<div className='space-y-12 mt-16'>
							{phases.map((phase, index) => (
								<motion.div
									key={phase.number}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.15 }}
									className='bg-white/5 border border-white/10 rounded-xl p-10 hover:bg-white/[0.07] hover:border-emerald-500/30 transition-all duration-300 group'
								>
									<div className='flex flex-col md:flex-row gap-8'>
										<div className='md:w-32 shrink-0'>
											<span className='text-6xl font-bold text-emerald-500/30 group-hover:text-emerald-500/50 transition-colors'>
												{phase.number}
											</span>
										</div>
										<div className='space-y-4 flex-1'>
											<div>
												<h3 className='text-3xl font-bold mb-2 group-hover:text-emerald-500 transition-colors'>
													{phase.title}
												</h3>
												<p className='text-emerald-500/80 font-medium'>{phase.subtitle}</p>
											</div>
											<p className='text-white/70 leading-relaxed text-lg'>{phase.description}</p>
											<p className='text-sm text-white/50 font-medium'>
												Timeline: {phase.duration}
											</p>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			<section className='px-6 py-32 border-t border-white/5'>
				<div className='container mx-auto max-w-4xl'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='bg-linear-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-2xl p-12 text-center space-y-6'
					>
						<h2 className='text-3xl md:text-4xl font-bold'>The Goal: Unconscious Competence</h2>
						<p className='text-lg text-white/70 leading-relaxed max-w-2xl mx-auto'>
							When technique becomes instinct. When you stop thinking and start flowing. That's the
							state we're training for—where skill expression feels effortless because the
							foundation is rock solid.
						</p>
					</motion.div>
				</div>
			</section>
		</div>
	)
}

export default MethodPage
