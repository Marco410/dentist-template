'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { cn } from 'kadesh/utils/cn';

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}

export function SectionWrapper({
  id,
  children,
  className,
  containerClassName,
  animate = true,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!animate) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animate]);

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        'section-padding',
        animate && 'animate-on-scroll',
        className,
      )}
    >
      <div className={cn('container-max', containerClassName)}>
        {children}
      </div>
    </section>
  );
}
