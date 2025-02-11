import { motion } from 'framer-motion';
import Section from './Section';
import { images } from '@/lib/images';
import { Dialog, DialogTrigger } from './ui/dialog';
import ImagesDialog from './ImagesDialog';
import { useState } from 'react';

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState('');
  return (
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
              <Dialog>
                <DialogTrigger onClick={() => setSelectedImage(item)}>
                  <div className='aspect-w-16 aspect-h-9'>
                    <img
                      src={item}
                      alt={`Project ${item}`}
                      className='object-cover w-full h-full'
                    />
                  </div>
                </DialogTrigger>
                <ImagesDialog selectedImage={selectedImage} />
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
