import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function ProgramButton({ link = '/schedule' }: { link: string }) {
  // const isExternal = link.startsWith('http')

  // if (isExternal) {
  //   return (
  //     <Button
  //       asChild
  //       className='bg-emerald-500 hover:bg-emerald-600 text-black font-semibold'
  //     >
  //       <a href={link} target='_blank' rel='noopener noreferrer'>
  //         Book a Session <ArrowRight className='ml-2 h-4 w-4' />
  //       </a>
  //     </Button>
  //   )
  // }

  return (
    <Button
      asChild
      className='bg-emerald-500 hover:bg-emerald-600 text-black font-semibold'
    >
      <Link href={link}>
        Book a Session <ArrowRight className='ml-2 h-4 w-4' />
      </Link>
    </Button>
  )
}
