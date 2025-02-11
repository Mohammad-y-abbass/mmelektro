import { Phone } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import Section from './Section';

const Contact = () => {
  return (
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
          <h3 className='text-2xl font-semibold mb-4 text-gray-100'>Kontakt</h3>
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
  );
};

export default Contact;
