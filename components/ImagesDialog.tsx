import { useState, useEffect } from 'react';
import { DialogContent, DialogHeader } from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { images } from '@/lib/images';

interface ImagesDialogProps {
  selectedImage: string;
}

const ImagesDialog = ({ selectedImage }: ImagesDialogProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const index = images.indexOf(selectedImage);
    if (index !== -1) setActiveIndex(index);
  }, [selectedImage]);

  return (
    <DialogContent className='max-w-2xl'>
      <DialogHeader>
        <Carousel
          opts={{
            startIndex: activeIndex, 
          }}
        >
          <CarouselContent>
            {images.map((item) => (
              <CarouselItem key={item}>
                <img
                  src={item}
                  alt={`Project ${item}`}
                  className='object-cover w-full h-full'
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </DialogHeader>
    </DialogContent>
  );
};

export default ImagesDialog;
