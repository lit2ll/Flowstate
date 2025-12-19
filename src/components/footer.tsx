import React from 'react'

import { Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-neutral-950 border-t border-neutral-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid md:grid-cols-4 gap-8'>
          <div>
            <span className='text-xl font-bold text-white'>Flow State Striking</span>
            <p className='text-neutral-400 mt-4'>
              Training martial artists to move with intention, efficiency, and longevity.
            </p>
          </div>

          <div>
            <span className='text-white font-semibold mb-4 block'>Quick Links</span>
            <nav className='space-y-2'>
              <Link
                href='/'
                className='block text-neutral-400 hover:text-white transition-colors'
              >
                Home
              </Link>
              <Link
                href='/programs'
                className='block text-neutral-400 hover:text-white transition-colors'
              >
                Programs
              </Link>
              <Link
                href='/schedule'
                className='block text-neutral-400 hover:text-white transition-colors'
              >
                Schedule
              </Link>
              <Link
                href='/about'
                className='block text-neutral-400 hover:text-white transition-colors'
              >
                About
              </Link>
            </nav>
          </div>

          <div>
            <span className='text-white font-semibold mb-4 block'>Programs</span>
            <nav className='space-y-2'>
              <p className='text-neutral-400'>Private Training</p>
              <p className='text-neutral-400'>Small Groups</p>
              <p className='text-neutral-400'>Workshops</p>
              <p className='text-neutral-400'>Online Coaching</p>
            </nav>
          </div>

          <div>
            <span className='text-white font-semibold mb-4 block'>Contact</span>
            <div className='space-y-3'>
              <div className='flex items-center text-neutral-400'>
                <Mail size={16} className='mr-2' />
                <span className='text-sm'>info@flowstatestriking.com</span>
              </div>
              <div className='flex items-center text-neutral-400'>
                <Phone size={16} className='mr-2' />
                <span className='text-sm'>(714) 759-4294</span>
              </div>
              <div className='flex items-center text-neutral-400'>
                <MapPin size={16} className='mr-2' />
                <span className='text-sm'>
                  8780 Warner Ave, suite 7, Fountain Valley, CA 92708
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='border-t border-neutral-800 mt-12 pt-8 text-center'>
          <p className='text-neutral-500 text-sm'>
            © {new Date().getFullYear()} Flow State Striking. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
