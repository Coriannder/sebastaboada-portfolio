'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'article' | 'li' | 'section';
}

const motionTags = {
  div: motion.div,
  article: motion.article,
  li: motion.li,
  section: motion.section,
} as const;

export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Tag = motionTags[as];

  if (reduceMotion) {
    const StaticTag = as;
    return <StaticTag className={className}>{children}</StaticTag>;
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </Tag>
  );
}
