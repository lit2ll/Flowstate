import { Suspense } from 'react'
import ScheduleClient from './ScheduleClient'

export default function SchedulePage() {
  return (
    <Suspense fallback={<ScheduleFallback />}>
      <ScheduleClient />
    </Suspense>
  )
}

function ScheduleFallback() {
  return (
    <div className='bg-[#0a0a0a] pt-32 pb-20'>
      <div className='mx-auto max-w-5xl px-6 py-16'>
        <div className='h-10 w-72 rounded bg-white/10' />
        <div className='mt-4 h-6 w-md rounded bg-white/10' />
        <div className='mt-10 grid gap-6 md:grid-cols-3'>
          <div className='h-80 rounded-xl border border-white/10 bg-white/5' />
          <div className='h-80 rounded-xl border border-white/10 bg-white/5' />
          <div className='h-80 rounded-xl border border-white/10 bg-white/5' />
        </div>
      </div>
    </div>
  )
}
