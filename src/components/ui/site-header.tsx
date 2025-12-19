'use client'

import Link from 'next/link'
import SecondaryLink from './secondary-link'
import PrimaryLink from './primary-link'
import React from 'react'
import { Logo } from '../logo'
import { cn } from '@/lib/utils'

function SiteHeader() {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className=''>
      <nav data-state={menuState && 'active'} className='fixed z-50 w-full px-2 top-0'>
        <div
          className={cn(
            'mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12',
            isScrolled &&
              'bg-background/50 max-w-4xl  rounded-2xl border backdrop-blur-lg lg:px-5'
          )}
        >
          <div className='flex justify-around items-center'>
            <Link
              href='/'
              aria-label='home'
              className='flex items-center space-x-2 scale-75'
            >
              <Logo />
            </Link>
            <nav className='hidden items-center gap-6 md:flex text-sm text-white/70'>
              <Link className='hover:text-white' href='#why'>
                Method
              </Link>
              <Link className='hover:text-white' href='/programs'>
                Programs
              </Link>
              <Link className='hover:text-white' href='/schedule'>
                Schedule & Booking
              </Link>
              <Link className='hover:text-white' href='/about'>
                About
              </Link>
              <Link className='hover:text-white' href='/contact'>
                Contact
              </Link>
            </nav>
            <div className='flex items-center gap-3'>
              <SecondaryLink href='/programs' className='hidden sm:inline-flex'>
                View Programs
              </SecondaryLink>
              <PrimaryLink href='/schedule'>Book</PrimaryLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default SiteHeader
