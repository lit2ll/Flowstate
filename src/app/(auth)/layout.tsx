import { HeroHeader } from '@/components/header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: {
		default: 'Flow State Striking',
		template: '%s | Flow State Striking'
	},
	description:
		'Train striking in a state of flow — balance, control, confidence, and real-world performance.',
	openGraph: {
		title: 'Flow State Striking',
		description:
			'Modern kickboxing and Muay Thai training focused on balance, control, and calm under pressure.',
		type: 'website'
	}
}

export default function layout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<HeroHeader />
			{children}
		</>
	)
}
