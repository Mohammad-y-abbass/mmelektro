import React from 'react'
import Section from './Section'
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <Section className='bg-cover bg-center bg-[url(https://img.freepik.com/premium-photo/abstract-blue-color-digital-particles-wave-background_24070-638.jpg?w=1060)] h-screen flex items-center justify-center relative overflow-hidden'>
      <div className='absolute inset-0'></div>
      <div className='absolute inset-0 bg-black bg-opacity-10 z-10'></div>
      <div className='absolute inset-0'>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <svg
            width='800'
            height='800'
            viewBox='0 0 100 100'
            className='animate-spin-slow opacity-20'
          >
            <circle
              cx='50'
              cy='50'
              r='45'
              fill='none'
              stroke='url(#grad)'
              strokeWidth='2'
            />
            <defs>
              <linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='0%'>
                <stop offset='0%' stopColor='#3B82F6' />
                <stop offset='100%' stopColor='#8B5CF6' />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className='text-center z-20 px-4'>
        <motion.h1
          className='text-6xl md:text-8xl font-bold mb-6 leading-tight'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600'>
            MMElktro
          </span>
          <br />
        </motion.h1>
        <motion.p
          className='text-xl mb-8 text-gray-300 max-w-2xl mx-auto'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Izrada i odrzavanje svih tipova
          <br />
          Za sve elektroinstalacijske radove
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size='lg'
            className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105'
          >
            Pogledajte naš rad
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}

export default Hero