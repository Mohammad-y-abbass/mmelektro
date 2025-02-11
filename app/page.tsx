'use client';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Page() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
