// components/Toaster.tsx

'use client'

import { useToast, ToastType } from '@/lib/toast'

export default function Toaster() {
	const { toasts } = useToast()

	const getBg = (type?: ToastType) =>
		type === 'success'
			? 'bg-green-600'
			: type === 'error'
			? 'bg-red-600'
			: type === 'info'
			? 'bg-blue-600'
			: type === 'warning'
			? 'bg-yellow-600'
			: 'bg-gray-900'

	return (
		<div className='fixed bottom-4 right-4 z-50 space-y-3'>
			{toasts.map((t) => (
				<div
					key={t.id}
					className={`${getBg(
						t.type
					)} text-white p-4 rounded-lg shadow-lg max-w-sm animate-in slide-in-from-bottom-4`}
				>
					<div className='grid gap-1'>
						{t.title && <div className='font-semibold'>{t.title}</div>}
						{t.description && <div className='text-sm opacity-90'>{t.description}</div>}
					</div>
				</div>
			))}
		</div>
	)
}
