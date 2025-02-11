import Section from './Section';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Zap, Wifi, Shield, Lock } from 'lucide-react';

const Services = () => {
  return (
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
  );
};

export default Services;
