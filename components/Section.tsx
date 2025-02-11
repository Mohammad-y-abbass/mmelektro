'use client';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

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
  const { ref, inView } = useInView({
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

export default Section;
