'use client';

import { useRef, useState, useEffect } from 'react';
import { dentistConfig } from 'kadesh/config';
import { SectionWrapper, SectionHeading, StarRating } from 'kadesh/components/shared';
import { cn } from 'kadesh/utils/cn';

export function TestimonialsCarousel() {
  const { testimonials } = dentistConfig;
  const [index, setIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || !testimonials.length) return;
    const el = ref.current;
    const child = el.children[index] as HTMLElement;
    if (child) child.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [index, testimonials.length]);

  if (!testimonials.length) return null;

  return (
    <SectionWrapper id="testimonials">
      <SectionHeading
        title="Lo que dicen nuestros pacientes"
        subtitle="Experiencias reales"
      />

      <div ref={ref} className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
        {testimonials.map((t, i) => (
          <article
            key={t.name + (t.date ?? '')}
            className="card-surface min-w-[85%] shrink-0 snap-center sm:min-w-[400px]"
          >
            <div className="flex items-center gap-3">
              <StarRating rating={t.rating} size="sm" />
              {t.date && (
                <span className="text-xs text-muted">{t.date}</span>
              )}
            </div>
            <p className="mt-4 text-muted">&ldquo;{t.text}&rdquo;</p>
            <p className="mt-4 font-semibold text-on-primary">{t.name}</p>
          </article>
        ))}
      </div>

      {testimonials.length > 1 && (
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ver testimonio ${i + 1}`}
              className={cn(
                'h-2 w-2 rounded-full transition-colors',
                i === index ? 'bg-secondary' : 'bg-white/30',
              )}
            />
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
