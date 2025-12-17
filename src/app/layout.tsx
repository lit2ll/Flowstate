import './globals.css'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import Toaster from '@/components/Toaster'
import { ThemeProvider } from '@/components/theme-provider'

const geistSans = Geist({
	subsets: ['latin'],
	variable: '--font-geist-sans',
	display: 'swap'
})

const geistMono = Geist_Mono({
	subsets: ['latin'],
	variable: '--font-geist-mono',
	display: 'swap'
})
const BlackStarlord = localFont({
	src: '../../public/BlackStarlordPersonalUse-j97w0.ttf',
	variable: '--font-black-starlord'
})

const SensaSans = localFont({
	src: '../../public/SensaSans-Regular.ttf',
	variable: '--font-sensa-sans'
})

export const metadata: Metadata = {
	title: {
		default: 'Flow State Striking',
		template: '%s | Flow State Striking'
	},
	description:
		'Train striking in a state of flow — balance, control, confidence, and calm under pressure.',
	openGraph: {
		title: 'Flow State Striking',
		description:
			'Modern kickboxing and Muay Thai training focused on balance, control, and longevity.',
		type: 'website'
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable}  text-foreground antialiased min-h-screen font-geist`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<Toaster />
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
