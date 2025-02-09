'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Zap,
  Shield,
  Cpu,
  Home,
  Lock,
  Wifi,
  ArrowRight,
  Phone,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

const images = [
  'https://mmelektro.ba/images/elinst1c.jpg',
  'https://mmelektro.ba/images/rasvjeta1.jpg',
  'https://mmelektro.ba/images/reklamnipanel3.jpg',
  'https://mmelektro.ba/images/videonadzor3.jpg',
  'https://mmelektro.ba/images/interfon2.jpg',
  'https://mmelektro.ba/images/reklamnipanel2.jpg',
  'https://mmelektro.ba/images/elinst5.jpg',
  'https://mmelektro.ba/images/reklamnipanel4.jpg',
  'https://mmelektro.ba/images/rasvjeta8.jpg',
  'https://mmelektro.ba/images/reklamnipanel7.jpg',
  'https://mmelektro.ba/images/rasvjeta3.jpg',
  'https://mmelektro.ba/images/rasvjeta7.jpg',
  'https://mmelektro.ba/images/reklamnipanel6.jpg',
  'https://mmelektro.ba/images/rasvjeta5.jpg',
  'https://mmelektro.ba/images/rasvjeta8.jpg',
  'https://mmelektro.ba/images/reklamnipanel9.jpg',
  'https://mmelektro.ba/images/interfon1.jpg',
  'https://mmelektro.ba/images/elinst3.jpg',
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Section = ({
  children,
  className = '',
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeIn}
      transition={{ duration: 0.6 }}
      className={className}
      id={id}
    >
      {children}
    </motion.section>
  );
};

export default function Page() {
  return (
    <div className='flex flex-col min-h-screen'>
      {/* Hero Section */}
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
      {/* Services Section */}
      <Section className='py-20 bg-gray-900' id='services'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600'>
            Naše Stručne Usluge
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
            {[
              {
                icon: Zap, // Ikona munje za elektroinstalacije
                title: 'Elektroinstalacije',
                description:
                  'Instalacija elektro sistema, od ožičenja do LED rasvjete.',
              },
              {
                icon: Lock, // Ikona brave za sigurnosne sisteme
                title: 'Sigurnosni Sistemi',
                description:
                  'Instalacija video nadzora, protivprovalnih sistema i interfona.',
              },
              {
                icon: Wifi, // Ikona WiFi-a za postavljanje mreža
                title: 'Računarske Mreže',
                description:
                  'Dizajn i instalacija računarskih mreža prema vašim potrebama.',
              },
              {
                icon: Shield, // Ikona kapije za motorizovane kapije
                title: 'Motorizovane Kapije',
                description:
                  'Instalacija motora za klizne i krilne kapije za lakši pristup.',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className='bg-gray-800 text-center border-gray-700 overflow-hidden group hover:bg-gray-750 transition-all duration-300'>
                  <CardContent className='p-6'>
                    <service.icon className='w-12 h-12 mx-auto block text-blue-500 mb-4 transform transition-transform group-hover:scale-110 duration-300' />
                    <h3 className='text-xl font-semibold mb-2 text-gray-100'>
                      {service.title}
                    </h3>
                    <p className='text-gray-400'>{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
      {/* Projects Section */}
      <Section className='py-20 bg-black' id='projects'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600'>
            naš rad
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {images.map((item) => (
              <motion.div
                key={item}
                className='relative overflow-hidden group rounded-lg'
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className='aspect-w-16 aspect-h-9'>
                  <img
                    src={item}
                    alt={`Project ${item}`}
                    className='object-cover w-full h-full'
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
      {/* About Section */}
      <Section className='py-20 bg-black' id='about'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row items-center'>
            <div className='md:w-1/2 mb-8 md:mb-0 md:pr-12'>
              <h2 className='text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600'>
                Naš tim je spreman da odgovori na sve vaše zahtjeve
              </h2>
              <p className='text-gray-300 mb-6 text-lg'>
                Potreban Vam je električar ili majstor u kući? Ne tražite dalje,
                naš tim ima sve što Vam je potrebno. Nudimo širok spektar usluga
                od uobičajnih popravki do ugradnje električnih instalacija, LED
                rasvjete, video nadzora i protivprovalnih sistema, ugradnje
                audio i video interfona, izrade računarskih mreža te
                postavljanja motora za klizne i krilne kapije.
              </p>
              <Button
                variant='outline'
                className='border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300'
              >
                Kontaktirajte nas <ArrowRight className='ml-2' />
              </Button>
            </div>
            <div className='md:w-1/2 relative'>
              <div className='w-full h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-2xl transform rotate-3'></div>
              <img
                src='https://img.freepik.com/free-vector/3d-earth-graphic-symbolizing-global-trade-illustration_456031-125.jpg?t=st=1739127152~exp=1739130752~hmac=3c0eb56a9c5e1896e81b054ccc7f6c7f3e4d61b800d1a0ba8c781ff95df686e9&w=1060'
                alt='Futuristic electrical work'
                className='absolute inset-0 w-full h-80 object-cover rounded-lg shadow-2xl transform -rotate-3 transition-transform hover:rotate-0 duration-300'
              />
            </div>
          </div>
        </div>
      </Section>
      {/* Contact Section */}
      <Section className='py-20 bg-gray-900' id='contact'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600'>
            Povežite se sa budućnošću
          </h2>
          <div className='max-w-2xl mx-auto'>
            <Card className='bg-gray-800 border-gray-700'>
              <CardContent className='p-6'>
                <form className='space-y-6'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <Input
                      placeholder='Vaše ime'
                      className='bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400'
                    />
                    <Input
                      type='email'
                      placeholder='Vaš email'
                      className='bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400'
                    />
                  </div>
                  <Input
                    placeholder='Predmet'
                    className='bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400'
                  />
                  <Textarea
                    placeholder='Vaša poruka'
                    className='bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400'
                    rows={4}
                  />
                  <Button
                    type='submit'
                    className='w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105'
                  >
                    Pošaljite poruku
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          <div className='mt-16 text-center'>
            <h3 className='text-2xl font-semibold mb-4 text-gray-100'>
              Kontakt
            </h3>
            <p className='text-gray-400 mb-4'>
              Adresa: XVI kuljanska ulica, br. 41, Banjaluka
            </p>
            <p className='text-gray-400 mb-4'>Broj telefona: 065 887 698</p>
            <p className='text-gray-400 mb-4'>Email: rudicbl@gmail.com</p>
            <div className='flex items-center justify-center'>
              <Phone className='w-8 h-8 text-blue-500 mr-3' />
              <span className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600'>
                065 887 698
              </span>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
