'use client'

import React, { useEffect, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { toast } from '@/lib/toast'

type SessionCard = {
	type: 'Private Training' | 'Small Group Training' | 'Workshop (Next)'
	icon: React.ReactNode
	description: string
	duration: string
	price: string
	availability: string
	note: string
	action: 'calendly_single' | 'calendly_group' | 'calendly_workshop' | 'coming_soon'
}

export default function ScheduleClient() {
	const searchParams = useSearchParams()

	const paid = searchParams.get('paid') === '1'
	const pkg = searchParams.get('package') ?? undefined

	const packageUrl = process.env.NEXT_PUBLIC_CALENDLY_PACKAGE
	const singleUrl = process.env.NEXT_PUBLIC_CALENDLY_SINGLE
	const groupUrl = process.env.NEXT_PUBLIC_CALENDLY_GROUP
	const workshopUrl = process.env.NEXT_PUBLIC_CALENDLY_WORKSHOP

	const stripe5 = process.env.NEXT_PUBLIC_STRIPE_5PACK
	const stripe10 = process.env.NEXT_PUBLIC_STRIPE_10PACK

	useEffect(() => {
		if (!paid) return
		toast.success({
			title: 'Payment received',
			description: pkg ? `Package: ${pkg}. Book your session below.` : 'Book your session below.'
		})
	}, [paid, pkg])

	const sessions: SessionCard[] = useMemo(
		() => [
			{
				type: 'Private Training',
				icon: <Calendar className='w-8 h-8' />,
				description: 'One-on-one coaching session tailored to your goals',
				duration: '60 minutes',
				price: 'Paid during booking',
				availability: 'Flexible scheduling',
				note: 'Book 24 hours in advance',
				action: 'calendly_single'
			},
			{
				type: 'Small Group Training',
				icon: <Clock className='w-8 h-8' />,
				description: 'Train with a small group in a structured class',
				duration: '90 minutes',
				price: 'Paid during booking (if enabled)',
				availability: 'See available times in booking link',
				note: 'Drop-in or membership',
				action: 'calendly_group'
			},
			{
				type: 'Workshop (Next)',
				icon: <MapPin className='w-8 h-8' />,
				description: 'Footwork & Distance Management Intensive',
				duration: '3 hours',
				price: 'Paid during booking',
				availability: 'Next date shown in booking link',
				note: 'Limited spots',
				action: 'calendly_workshop'
			}
		],
		[]
	)

	const openExternal = (url?: string, label?: string) => {
		if (!url) {
			toast.error({
				title: 'Missing booking link',
				description: label
					? `Set NEXT_PUBLIC_${label} in .env.local`
					: 'Missing environment variable.'
			})
			return
		}
		window.open(url, '_blank', 'noopener,noreferrer')
	}

	const handleBooking = (action: SessionCard['action']) => {
		switch (action) {
			case 'calendly_single':
				openExternal(singleUrl, 'CALENDLY_SINGLE')
				return
			case 'calendly_group':
				openExternal(groupUrl, 'CALENDLY_GROUP')
				return
			case 'calendly_workshop':
				openExternal(workshopUrl, 'CALENDLY_WORKSHOP')
				return
			default:
				toast.info({
					title: 'Coming soon',
					description: 'This booking option isn’t available yet.'
				})
		}
	}
	const weekSchedule = [
		{
			day: 'Monday',
			sessions: [
				{ time: '6:00 PM - 7:30 PM', type: 'Small Group Training', spots: '3 spots left' },
				{ time: '7:30 PM - 9:00 PM', type: 'Small Group Training', spots: '5 spots left' }
			]
		},
		{
			day: 'Wednesday',
			sessions: [
				{ time: '6:00 PM - 7:30 PM', type: 'Small Group Training', spots: '2 spots left' },
				{ time: '7:30 PM - 9:00 PM', type: 'Small Group Training', spots: '4 spots left' }
			]
		},
		{
			day: 'Friday',
			sessions: [
				{ time: '6:00 PM - 7:30 PM', type: 'Small Group Training', spots: 'Full' },
				{ time: '7:30 PM - 9:00 PM', type: 'Small Group Training', spots: '1 spot left' }
			]
		},
		{
			day: 'Saturday',
			sessions: [{ time: 'By Appointment', type: 'Private Training', spots: 'Available' }]
		}
	]
	// keep your weekSchedule + the rest of your JSX here unchanged
	// (paste it under this comment from your existing page)

	return (
		<div className='bg-[#0a0a0a] pt-32 pb-20'>
			<div className='bg-[#0a0a0a] pt-32 pb-20'>
				{/* HERO */}
				<section className='px-6 pb-20'>
					<div className='container mx-auto max-w-4xl'>
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className='text-center space-y-6'
						>
							<h1 className='text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]'>
								Schedule & <span className='text-emerald-500'>Booking</span>
							</h1>
							<p className='text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed'>
								Choose your session. Show up ready to learn.
							</p>

							{/* Payment banner (after Stripe success redirect) */}
							{paid ? (
								<div className='mx-auto mt-6 max-w-2xl rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-5 py-4 text-left'>
									<div className='flex items-start gap-3'>
										<CheckCircle2 className='mt-0.5 h-5 w-5 text-emerald-400' />
										<div>
											<p className='font-semibold text-white'>
												Payment received{pkg ? ` (Package: ${pkg})` : ''}.
											</p>
											<p className='text-sm text-white/70'>
												Next step: book your session using the Package Holder link.
											</p>
											<div className='mt-3'>
												<Button
													onClick={() => openExternal(packageUrl, 'CALENDLY_PACKAGE')}
													className='bg-emerald-500 hover:bg-emerald-600 text-black font-semibold'
												>
													Book Package Session <ArrowRight className='ml-2 w-4 h-4' />
												</Button>
											</div>
										</div>
									</div>
								</div>
							) : null}
						</motion.div>
					</div>
				</section>

				{/* SESSION CARDS */}
				<section className='px-6 pb-24'>
					<div className='container mx-auto max-w-5xl'>
						<div className='grid md:grid-cols-3 gap-6'>
							{sessions.map((session, index) => (
								<motion.div
									key={session.type}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className='bg-white/5 border border-white/10 rounded-xl p-8 space-y-6 hover:bg-white/[0.07] hover:border-emerald-500/30 transition-all duration-300 group'
								>
									<div className='text-emerald-500 transition-transform duration-300 group-hover:scale-110'>
										{session.icon}
									</div>
									<div>
										<h3 className='text-2xl font-bold mb-2'>{session.type}</h3>
										<p className='text-white/60 text-sm leading-relaxed'>{session.description}</p>
									</div>
									<div className='space-y-2 text-sm'>
										<div className='flex justify-between items-center'>
											<span className='text-white/50'>Duration:</span>
											<span className='text-white/80'>{session.duration}</span>
										</div>
										<div className='flex justify-between items-center'>
											<span className='text-white/50'>Payment:</span>
											<span className='text-emerald-500 font-bold'>{session.price}</span>
										</div>
									</div>
									<div className='pt-4 space-y-3 border-t border-white/5'>
										<p className='text-sm text-white/70'>{session.availability}</p>
										<p className='text-xs text-white/50'>{session.note}</p>
									</div>
									<Button
										onClick={() => handleBooking(session.action)}
										className='bg-emerald-500 hover:bg-emerald-600 text-black font-semibold w-full transition-all duration-300 hover:scale-[1.02]'
									>
										Book Now <ArrowRight className='ml-2 w-4 h-4' />
									</Button>
								</motion.div>
							))}
						</div>

						{/* OPTIONAL: Packages purchase (Stripe) */}
						<div className='mt-10 grid gap-4 md:grid-cols-2'>
							<motion.div
								initial={{ opacity: 0, y: 18 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.15 }}
								className='bg-white/5 border border-white/10 rounded-xl p-6'
							>
								<h3 className='text-xl font-bold'>Buy a Package</h3>
								<p className='mt-2 text-white/60 text-sm'>
									Purchase a 5 or 10 pack, then schedule using the Package Holder link.
								</p>
								<div className='mt-5 flex flex-wrap gap-3'>
									<Button
										onClick={() => openExternal(stripe5, 'STRIPE_5PACK')}
										className='bg-emerald-500 hover:bg-emerald-600 text-black font-semibold'
									>
										Buy 5-Pack <ArrowRight className='ml-2 w-4 h-4' />
									</Button>
									<Button
										onClick={() => openExternal(stripe10, 'STRIPE_10PACK')}
										variant='secondary'
									>
										Buy 10-Pack <ArrowRight className='ml-2 w-4 h-4' />
									</Button>
								</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 18 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
								className='bg-white/5 border border-white/10 rounded-xl p-6'
							>
								<h3 className='text-xl font-bold'>Already Purchased?</h3>
								<p className='mt-2 text-white/60 text-sm'>
									Use the package holder scheduling link (no payment required).
								</p>
								<div className='mt-5'>
									<Button onClick={() => openExternal(packageUrl, 'CALENDLY_PACKAGE')}>
										Book Package Session <ArrowRight className='ml-2 w-4 h-4' />
									</Button>
								</div>
							</motion.div>
						</div>
					</div>
				</section>

				{/* WEEK SCHEDULE */}
				<section className='px-6 py-24 border-t border-white/5'>
					<div className='container mx-auto max-w-4xl'>
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className='space-y-12'
						>
							<div className='text-center'>
								<h2 className='text-4xl md:text-5xl font-bold tracking-tight mb-4'>
									This Week's Schedule
								</h2>
								<p className='text-white/60'>Small Group Training availability</p>
							</div>

							<div className='space-y-6'>
								{weekSchedule.map((day, index) => (
									<motion.div
										key={day.day}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
										className='bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/[0.07] transition-all duration-300'
									>
										<h3 className='text-xl font-bold mb-4 text-emerald-500'>{day.day}</h3>
										<div className='space-y-3'>
											{day.sessions.map((session, idx) => (
												<div
													key={idx}
													className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-3 border-b border-white/5 last:border-0 last:pb-0'
												>
													<div>
														<p className='font-medium'>{session.time}</p>
														<p className='text-sm text-white/50'>{session.type}</p>
													</div>
													<span
														className={`text-sm font-semibold ${
															session.spots === 'Full' ? 'text-red-400' : 'text-emerald-500'
														}`}
													>
														{session.spots}
													</span>
												</div>
											))}
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>
					</div>
				</section>

				{/* INFO */}
				<section className='px-6 py-24 border-t border-white/5 bg-white/2'>
					<div className='container mx-auto max-w-3xl'>
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className='space-y-8'
						>
							<h2 className='text-3xl md:text-4xl font-bold tracking-tight text-center'>
								Booking Information
							</h2>

							<div className='space-y-6 text-white/70 leading-relaxed'>
								<div className='bg-black/20 border border-white/5 rounded-xl p-6'>
									<h3 className='text-xl font-bold text-white mb-3'>First-Time Students</h3>
									<p>
										Your first session includes a brief consultation to discuss your goals, assess
										your current level, and answer any questions. Arrive 10 minutes early.
									</p>
								</div>

								<div className='bg-black/20 border border-white/5 rounded-xl p-6'>
									<h3 className='text-xl font-bold text-white mb-3'>What to Bring</h3>
									<ul className='space-y-2'>
										<li className='flex items-start gap-3'>
											<span className='text-emerald-500 mt-1'>→</span>
											<span>Athletic clothing (shorts/pants, t-shirt)</span>
										</li>
										<li className='flex items-start gap-3'>
											<span className='text-emerald-500 mt-1'>→</span>
											<span>Water bottle</span>
										</li>
										<li className='flex items-start gap-3'>
											<span className='text-emerald-500 mt-1'>→</span>
											<span>Hand wraps (optional — we provide loaners)</span>
										</li>
									</ul>
								</div>

								<div className='bg-black/20 border border-white/5 rounded-xl p-6'>
									<h3 className='text-xl font-bold text-white mb-3'>Cancellation Policy</h3>
									<p>
										Please provide at least 24 hours notice for cancellations. Late cancellations
										may be charged the full session fee.
									</p>
								</div>
							</div>
						</motion.div>
					</div>
				</section>
			</div>
		</div>
	)
}
