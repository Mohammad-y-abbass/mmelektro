import './globals.css';
import type { Metadata } from 'next';
// import { Orbitron } from 'next/font/google';
import type React from 'react';
import Image from 'next/image';
import logo from '@/public/mmlogo4.png';
import Link from 'next/link';

// const orbitron = Orbitron({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MM Elektro',
  description:
    'A electric installation company that provides services to both residential and commercial clients.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='dark scroll-smooth'>
      <body className={` bg-black text-white`}>
        <div className='flex flex-col min-h-screen'>
          <header className='fixed w-full z-50 bg-black bg-opacity-50 backdrop-blur-lg'>
            <nav className='container mx-auto px-4 py-4'>
              <div className='flex justify-between items-center'>
                <Image src={logo} alt='logo' width={100} height={100} />
                <div className='hidden md:flex space-x-8'>
                  {['Services', 'Projects', 'About', 'Contact'].map((item) => (
                    <Link
                      scroll={true}
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className='text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group'
                    >
                      {item}
                      <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full'></span>
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </header>
          <main className='flex-grow'>{children}</main>
          <footer className='bg-gray-900 text-gray-400 py-12'>
            <div className='container mx-auto px-4'>
              <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className='mb-6 md:mb-0'>
                  <div className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600'>
                    VoltEdge
                  </div>
                  <p className='text-sm mt-2'>Powering the future, today.</p>
                </div>
                <div className='flex space-x-6'>
                  {['Facebook', 'Twitter', 'LinkedIn'].map((social) => (
                    <a
                      key={social}
                      href='#'
                      className='hover:text-blue-400 transition-colors duration-300 transform hover:scale-110'
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
              <div className='mt-8 text-center text-sm'>
                © {new Date().getFullYear()} VoltEdge. Illuminating Innovation.
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
