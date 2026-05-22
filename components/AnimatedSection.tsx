'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-72px' });

  const hidden = {
    opacity: 0,
    y: direction === 'up' ? 36 : 0,
    x: direction === 'left' ? 36 : direction === 'right' ? -36 : 0,
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={hidden}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : hidden}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
