'use client';

import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'article' | 'li' | 'section';
}

export function Reveal({ children, className = '', delay = 0, as = 'div' }: RevealProps) {
  const elementRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '-60px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as;

  return (
    <Tag
      ref={(el: HTMLElement | null) => {
        elementRef.current = el;
      }}
      className={`${className} transition-all duration-500 ease-out motion-reduce:transition-none ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-5 motion-reduce:opacity-100 motion-reduce:translate-y-0'
      }`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
}
