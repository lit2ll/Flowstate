// lib/toast.ts

import React from 'react'

const TOAST_LIMIT = 5

let count = 0
function generateId() {
	count = (count + 1) % Number.MAX_SAFE_INTEGER
	return count.toString()
}

export type ToastType = 'default' | 'success' | 'error' | 'info' | 'warning'

export type Toast = {
	id: string
	type?: ToastType
	title?: string
	description?: string
	duration?: number
}

const listeners: ((toasts: Toast[]) => void)[] = []
let toasts: Toast[] = []

function emit() {
	listeners.forEach((l) => l(toasts))
}

const createToast = (props: Omit<Toast, 'id'>) => {
	const id = generateId()
	const dismiss = () => {
		toasts = toasts.filter((t) => t.id !== id)
		emit()
	}

	toasts = [{ ...props, id }, ...toasts].slice(0, TOAST_LIMIT)
	emit()

	if (props.duration !== Infinity) {
		setTimeout(dismiss, props.duration ?? 5000)
	}

	return { id, dismiss }
}

export const toast = {
	default: (props: Omit<Toast, 'id' | 'type'> = {}) => createToast({ ...props, type: 'default' }),
	success: (props: Omit<Toast, 'id' | 'type'> = {}) => createToast({ ...props, type: 'success' }),
	error: (props: Omit<Toast, 'id' | 'type'> = {}) => createToast({ ...props, type: 'error' }),
	info: (props: Omit<Toast, 'id' | 'type'> = {}) => createToast({ ...props, type: 'info' }),
	warning: (props: Omit<Toast, 'id' | 'type'> = {}) => createToast({ ...props, type: 'warning' })
}

export function useToast(): { toast: typeof toast; toasts: Toast[] } {
	const [state, setState] = React.useState<Toast[]>(toasts)

	React.useEffect(() => {
		listeners.push(setState)
		return () => {
			const i = listeners.indexOf(setState)
			if (i > -1) listeners.splice(i, 1)
		}
	}, [])

	return { toast, toasts: state }
}
