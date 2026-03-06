'use client';

import { useRef, useState, useEffect } from 'react';
import { dentistConfig } from 'kadesh/config';
import { SectionWrapper, SectionHeading } from 'kadesh/components/shared';
import { cn } from 'kadesh/utils/cn';

export function DoctorsCarousel() {
  const { doctors } = dentistConfig;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState);
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [doctors.length]);

  if (!doctors.length) return null;

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' });
  };

  return (
    <SectionWrapper id="doctors">
      <SectionHeading
        title="Nuestro equipo"
        subtitle="Profesionales dedicados a tu salud bucal"
      />

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scroll-smooth scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="card-surface min-w-[280px] shrink-0 overflow-hidden text-center"
            >
              {doctor.image ? (
                <div
                  className="aspect-square bg-cover bg-center"
                  style={{ backgroundImage: `url(${doctor.image})` }}
                />
              ) : (
                <div className="flex aspect-square items-center justify-center bg-secondary/10">
                  <span className="text-5xl font-bold text-secondary/50">
                    {doctor.name.charAt(0)}
                  </span>
                </div>
              )}
              <div className="p-4">
                <h3 className="font-bold text-on-primary">{doctor.name}</h3>
                <p className="mt-1 text-sm text-secondary">{doctor.specialty}</p>
                {doctor.bio && (
                  <p className="mt-2 line-clamp-2 text-xs text-muted">
                    {doctor.bio}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {doctors.length > 2 && (
          <>
            <button
              type="button"
              onClick={() => scroll('left')}
              aria-label="Anterior"
              className={cn(
                'absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-primary/90 p-2 shadow-lg transition-opacity',
                canScrollLeft ? 'opacity-100' : 'pointer-events-none opacity-0',
              )}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              aria-label="Siguiente"
              className={cn(
                'absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-primary/90 p-2 shadow-lg transition-opacity',
                canScrollRight ? 'opacity-100' : 'pointer-events-none opacity-0',
              )}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>
    </SectionWrapper>
  );
}
