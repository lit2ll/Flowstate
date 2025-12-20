'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { toast, useToast } from '@/lib/toast' // our custom toast

const CONTACT_EMAIL = 'info@flowstatestriking.com'

function buildMailtoHref() {
  const subject = 'Flow State Striking — Inquiry'
  const body = [
    'Hi Larry,',
    '',
    'Question: ',
    '',
    '• Goal:',
    '• Experience level:',
    '• Availability:',
    '',
    'Thanks!'
  ].join('\n')

  const params = new URLSearchParams({ subject, body })
  return `mailto:${CONTACT_EMAIL}?${params.toString()}`
}

export default function ContactPage() {
  const { toast } = useToast()
  const mailtoHref = buildMailtoHref()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleEmailClick = () => {
    toast.success({
      title: 'Email sent successfully',
      description: ' Thank you for reaching out! I will get back to you shortly.',
      duration: 4000
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success({
      title: 'Message Sent',
      description: "Message sent! I'll get back to you as soon as possible."
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <Mail className='w-6 h-6' />,
      title: 'Email',
      content: 'info@flowstatestriking.com',
      link: 'mailto:info@flowstatestriking.com'
    },
    {
      icon: <Phone className='w-6 h-6' />,
      title: 'Phone',
      content: '(714) 759-4294',
      link: 'tel:+17147594294'
    },
    {
      icon: <MapPin className='w-6 h-6' />,
      title: 'Location',
      content: '8780 Warner Ave, suite 7, Fountain Valley, CA 92708',
      link: 'https://maps.google.com'
    }
  ]

  return (
    <div className='bg-[#0a0a0a] pt-32 pb-20'>
      <section className='px-6 pb-32'>
        <div className='container mx-auto max-w-4xl'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center space-y-8'
          >
            <h1 className='text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]'>
              Get in <span className='text-emerald-500'>Touch</span>
            </h1>
            <p className='text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed'>
              Questions? Curious if this is right for you?
            </p>
          </motion.div>
        </div>
      </section>

      <section className='px-6 pb-32'>
        <div className='container mx-auto max-w-5xl'>
          <div className='grid md:grid-cols-2 gap-12'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className='space-y-8'
            >
              <div className='space-y-6'>
                <h2 className='text-3xl font-bold'>Let's Talk</h2>
                <p className='text-white/70 leading-relaxed'>
                  Whether you're completely new to martial arts or looking to refine
                  existing skills, reach out with any questions. I'm happy to discuss your
                  goals and see if Flow State Striking is the right fit.
                </p>
              </div>

              <div className='space-y-6 pt-8'>
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className='flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/[0.07] hover:border-emerald-500/30 transition-all duration-300 group'
                  >
                    <div className='text-emerald-500 mt-1 transition-transform duration-300 group-hover:scale-110'>
                      {info.icon}
                    </div>
                    <div>
                      <p className='text-sm text-white/50 mb-1'>{info.title}</p>
                      <p className='text-white font-medium'>{info.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className='bg-linear-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-xl p-6 space-y-3'>
                <h3 className='text-lg font-bold'>Response Time</h3>
                <p className='text-sm text-white/70 leading-relaxed'>
                  I typically respond within 24 hours. For urgent inquiries, please call
                  directly.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className='bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6'
            >
              <h2 className='text-2xl font-bold'>Send a Message</h2>
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='space-y-2'>
                  <label htmlFor='name' className='text-sm font-medium text-white/70'>
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    className='w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all'
                    placeholder='Your name'
                    required
                  />
                </div>

                <div className='space-y-2'>
                  <label htmlFor='email' className='text-sm font-medium text-white/70'>
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all'
                    placeholder='your@email.com'
                    required
                  />
                </div>

                <div className='space-y-2'>
                  <label htmlFor='phone' className='text-sm font-medium text-white/70'>
                    Phone <span className='text-white/40'>(optional)</span>
                  </label>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    className='w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all'
                    placeholder='(714) 759-4294'
                  />
                </div>

                <div className='space-y-2'>
                  <label htmlFor='message' className='text-sm font-medium text-white/70'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className='w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none'
                    placeholder='Tell me about your training goals or any questions you have...'
                    required
                  />
                </div>

                <Button
                  size='lg'
                  className='bg-emerald-500 hover:bg-emerald-600 text-black font-semibold w-full py-6 text-lg transition-all duration-300 hover:scale-105'
                >
                  <a href={buildMailtoHref()}>Send Message</a>
                  <Send className='ml-2 w-5 h-5' />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className='px-6 py-32 border-t border-white/5'>
        <div className='container mx-auto max-w-4xl'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center space-y-6'
          >
            <h2 className='text-3xl md:text-4xl font-bold tracking-tight'>
              Prefer to Visit in Person?
            </h2>
            <p className='text-lg text-white/60 max-w-2xl mx-auto'>
              Stop by during regular training hours to see the facility and meet the
              coach. No appointment necessary.
            </p>
            <div className='bg-white/5 border border-white/10 rounded-xl p-8 max-w-md mx-auto mt-8'>
              <h3 className='font-bold mb-4 text-emerald-500'>Open Hours</h3>
              <div className='space-y-2 text-sm text-white/70'>
                <div className='flex justify-between'>
                  <span>Monday - Friday</span>
                  <span>5:00 PM - 9:00 PM</span>
                </div>
                <div className='flex justify-between'>
                  <span>Saturday</span>
                  <span>By Appointment</span>
                </div>
                <div className='flex justify-between'>
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
