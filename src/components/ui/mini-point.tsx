function MiniPoint({ title, body }: { title: string; body: string }) {
	return (
		<div className='rounded-2xl border border-white/10 bg-black/20 p-4'>
			<p className='font-medium'>{title}</p>
			<p className='mt-1 text-sm text-white/70 leading-relaxed'>{body}</p>
		</div>
	)
}

export default MiniPoint
