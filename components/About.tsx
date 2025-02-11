import React from 'react';
import Section from './Section';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
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
              rasvjete, video nadzora i protivprovalnih sistema, ugradnje audio
              i video interfona, izrade računarskih mreža te postavljanja motora
              za klizne i krilne kapije.
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
  );
};

export default About;
