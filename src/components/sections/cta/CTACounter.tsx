'use client';

import { useEffect, useState, useRef } from 'react';
import { dentistConfig } from 'kadesh/config';
import { Button } from 'kadesh/components/shared';

function useCountUp(target: number, duration = 2000) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { value, ref };
}

export function CTACounter() {
  const yearsActive = new Date().getFullYear() - (dentistConfig.foundedYear ?? 2000);
  const counter1 = useCountUp(yearsActive);
  const counter2 = useCountUp(dentistConfig.totalReviews);
  const counter3 = useCountUp(1500);

  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to right, 
            rgb(var(--color-secondary-rgb) / 0.1), 
            transparent, 
            rgb(var(--color-accent-rgb) / 0.1))`,
        }}
      />

      <div className="container-max relative">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { ...counter1, label: 'Años de Experiencia', suffix: '+' },
            { ...counter2, label: 'Reseñas Positivas', suffix: '+' },
            { ...counter3, label: 'Pacientes satisfechos', suffix: '+' },
          ].map((item) => (
            <div key={item.label} ref={item.ref} className="text-center">
              <div className="text-5xl font-bold text-secondary sm:text-6xl">
                {item.value}{item.suffix}
              </div>
              <div className="mt-2 text-muted">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="mb-4 text-2xl sm:text-3xl">
            Sé parte de la familia{' '}
            <span className="text-gradient">{dentistConfig.name.split(' ')[0]}</span>
          </h2>
          <Button size="lg" glow>
            {dentistConfig.hero.ctaPrimary}
          </Button>
        </div>
      </div>
    </section>
  );
}
