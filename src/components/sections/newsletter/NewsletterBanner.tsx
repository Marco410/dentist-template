'use client';

import { useState } from 'react';
import { dentistConfig } from 'kadesh/config';
import { SectionWrapper, Button } from 'kadesh/components/shared';

export function NewsletterBanner() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { name } = dentistConfig;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <SectionWrapper id="newsletter" className="!py-16">
      <div
        className="rounded-brand border border-white/10 p-8 sm:p-12"
        style={{
          background: `linear-gradient(135deg, rgb(var(--color-secondary-rgb) / 0.08), rgb(var(--color-primary-rgb)))`,
        }}
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl">
            Mantente <span className="text-gradient">informado</span>
          </h2>
          <p className="mt-3 text-muted">
            Recibe tips de salud bucal, promociones y novedades de {name}.
          </p>

          {isSubmitted ? (
            <div className="mt-6 rounded-brand bg-secondary/10 p-4 text-secondary">
              ¡Gracias por suscribirte!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                className="min-w-0 flex-1 rounded-brand border border-white/10 bg-primary px-4 py-3 text-on-primary placeholder:text-muted focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary sm:max-w-xs"
              />
              <Button type="submit">Suscribirme</Button>
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
