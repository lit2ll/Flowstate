'use client'

import Link from 'next/link'
import { AnimatedGroup } from './ui/animated-group'
import { Button } from './ui/button'

export const CTAButtons = () => {
  const transitionVariants = {
    item: {
      hidden: {
        opacity: 0,
        filter: 'blur(12px)',
        y: 12
      },
      visible: {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        transition: {
          type: 'spring' as const,
          bounce: 0.3,
          duration: 1.5
        }
      }
    }
  } satisfies { item: any }
  return (
    <div className='mx-auto max-w-7xl px-6'>
      <div className='text-center sm:mx-auto lg:mr-auto lg:mt-0'>
        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.75
                }
              }
            },
            ...transitionVariants
          }}
          className='mt-12 flex flex-col items-center justify-center gap-2 md:flex-row'
        >
          <div
            key={1}
            className='bg-[#280003]/10 rounded-[calc(var(--radius-xl)+0.125rem)] border-white p-0.5'
          >
            <Button
              asChild
              size='sm'
              className='bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-6 h-14 rounded-xl transition-all duration-300 hover:scale-[1.03]'
            >
              <Link href='/schedule'>
                <span className='text-nowrap'>Book a Session</span>
              </Link>
            </Button>
          </div>
          <Button
            key={2}
            asChild
            size='lg'
            variant='link'
            className='h-10.5 rounded-xl px-5 text-emerald-300 text-md hover:bg-black/5 focus:ring-0'
          >
            <Link href='#link'>
              <span className='text-nowrap'>Explore the Method</span>
            </Link>
          </Button>
        </AnimatedGroup>
      </div>
    </div>
  )
}
