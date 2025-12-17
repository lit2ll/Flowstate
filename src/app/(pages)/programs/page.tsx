'use client'

import { motion } from 'framer-motion'
import { User, Users, Calendar, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { toast } from '@/lib/toast'
import { useEffect } from 'react'

const ProgramsPage = () => {
	useEffect(() => {
		document.title = 'Programs - Flow State Striking'
		const meta = document.querySelector('meta[name="description"]')
		if (meta) {
			meta.setAttribute(
				'content',
				'Choose from private training, small group classes, or specialized workshops. Flexible training options designed for sustainable skill development.'
			)
		} else {
			const newMeta = document.createElement('meta')
			newMeta.name = 'description'
			newMeta.content =
				'Choose from private training, small group classes, or specialized workshops. Flexible training options designed for sustainable skill development.'
			document.head.appendChild(newMeta)
		}
	}, [])

	const handleEnroll = () => {
		toast.info({
			title: 'Enrollment',
			description:
				"🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
		})
	}

	const programs = [
		{
			icon: <User className='w-12 h-12' />,
			title: 'Private Training',
			tagline: 'Personalized 1-on-1 Coaching',
			description:
				'Expert coaching tailored specifically to your goals, skill level, and learning style. Every session is designed around you.',
			features: [
				'Customized curriculum based on your objectives',
				'Flexible scheduling to fit your lifestyle',
				'Real-time feedback and technique refinement',
				'Video analysis and homework assignments',
				'Progress tracking and goal setting'
			],
			pricing: 'From $100/session',
			commitment: 'No contract required'
		},
		{
			icon: <User className='w-12 h-12' />,
			title: 'Private Training - 5 Sessions',
			tagline: 'Personalized 1-on-1 Coaching',
			description:
				'Expert coaching tailored specifically to your goals, skill level, and learning style. Every session is designed around you.',
			features: [
				'Customized curriculum based on your objectives',
				'Flexible scheduling to fit your lifestyle',
				'Real-time feedback and technique refinement',
				'Video analysis and homework assignments',
				'Progress tracking and goal setting'
			],
			pricing: '$475 ($95/session)',
			commitment: 'No contract required'
		},
		{
			icon: <User className='w-12 h-12' />,
			title: 'Private Lesson',
			tagline: 'Personalized 1-on-1 Coaching',
			description:
				'Expert coaching tailored specifically to your goals, skill level, and learning style. Every session is designed around you.',
			features: [
				'Customized curriculum based on your objectives',
				'Flexible scheduling to fit your lifestyle',
				'Real-time feedback and technique refinement',
				'Video analysis and homework assignments',
				'Progress tracking and goal setting'
			],
			pricing: '$900 ($90/session)',
			commitment: 'No contract required'
		},

		{
			icon: <Users className='w-12 h-12' />,
			title: 'Small Group Training',
			tagline: 'Train With a Community',
			description:
				'Experience the energy of group training without sacrificing individual attention. Limited to 6 people per session to ensure quality coaching.',
			features: [
				'Maximum 6 students per class',
				'Structured curriculum with clear progression',
				'Partner drills and light sparring',
				'Supportive, ego-free environment',
				'Mix of skill levels for peer learning'
			],
			pricing: 'From $45/session',
			commitment: 'Monthly membership available'
		},
		{
			icon: <Calendar className='w-12 h-12' />,
			title: 'Workshops & Intensives',
			tagline: 'Deep Dive Training',
			description:
				'Specialized sessions focusing on specific techniques, concepts, or training methodologies. Perfect for skill refinement and exploration.',
			features: [
				'Quarterly themed workshops',
				'Weekend intensive training camps',
				'Guest instructors and special topics',
				'Advanced techniques and strategies',
				'Open to all skill levels'
			],
			pricing: 'Varies by workshop',
			commitment: 'Drop-in or series packages'
		}
	]

	return (
		<div className='bg-[#0a0a0a] pt-32 pb-20'>
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
								Training <span className='text-emerald-500'>Programs</span>
							</h1>
							<p className='text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed'>
								Choose the format that fits your goals, schedule, and learning style. All programs
								emphasize intelligent progression and sustainable skill development.
							</p>
						</motion.div>
					</div>
				</section>

				<section className='px-6'>
					<div className='container mx-auto max-w-6xl'>
						<div className='space-y-16'>
							{programs.map((program, index) => (
								<motion.div
									key={program.title}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									className='bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.07] hover:border-emerald-500/30 transition-all duration-300'
								>
									<div className='grid md:grid-cols-5 gap-8 p-10 md:p-12'>
										<div className='md:col-span-2 space-y-6'>
											<div className='text-emerald-500'>{program.icon}</div>
											<div>
												<h2 className='text-3xl md:text-4xl font-bold mb-2'>{program.title}</h2>
												<p className='text-emerald-500/80 font-medium text-lg'>{program.tagline}</p>
											</div>
											<p className='text-white/70 leading-relaxed'>{program.description}</p>
											<div className='pt-4 space-y-2'>
												<p className='text-2xl font-bold'>{program.pricing}</p>
												<p className='text-sm text-white/50'>{program.commitment}</p>
											</div>
											<Button
												onClick={handleEnroll}
												className='bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-6 py-5 transition-all duration-300 hover:scale-105 w-full md:w-auto'
											>
												Get Started <ArrowRight className='ml-2 w-4 h-4' />
											</Button>
										</div>
										<div className='md:col-span-3'>
											<div className='bg-black/20 border border-white/5 rounded-xl p-8'>
												<h3 className='text-xl font-bold mb-6 text-emerald-500'>What's Included</h3>
												<ul className='space-y-4'>
													{program.features.map((feature, idx) => (
														<li key={idx} className='flex items-start gap-3 text-white/70'>
															<span className='text-emerald-500 mt-1 shrink-0'>→</span>
															<span className='leading-relaxed'>{feature}</span>
														</li>
													))}
												</ul>
											</div>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				<section className='px-6 py-32 mt-20'>
					<div className='container mx-auto max-w-4xl'>
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className='text-center space-y-8'
						>
							<h2 className='text-4xl md:text-5xl font-bold tracking-tight'>
								Not Sure Which Program
								<br />
								Is Right for <span className='text-emerald-500'>You?</span>
							</h2>
							<p className='text-lg text-white/60 max-w-2xl mx-auto'>
								Book a complimentary consultation to discuss your goals and find the best fit for
								your training journey.
							</p>
							<Button
								onClick={handleEnroll}
								variant='outline'
								className='border-white/20 hover:bg-white/5 text-white font-semibold px-8 py-6 text-lg mt-8 transition-all duration-300'
							>
								Schedule a Consultation
							</Button>
						</motion.div>
					</div>
				</section>
			</div>
		</div>
	)
}

export default ProgramsPage
