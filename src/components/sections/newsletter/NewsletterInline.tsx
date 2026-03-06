'use client';

import { useState } from 'react';
import { dentistConfig } from 'kadesh/config';
import { SectionWrapper, Button } from 'kadesh/components/shared';

export function NewsletterInline() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <SectionWrapper id="newsletter">
      <div className="mx-auto max-w-2xl rounded-brand border border-white/10 bg-surface/50 p-8 text-center sm:p-12">
        <h2 className="text-2xl sm:text-3xl">
          Mantente <span className="text-gradient">Conectado</span>
        </h2>
        <p className="mt-3 text-muted">
          Recibe tips de salud bucal, promociones exclusivas y novedades de{' '}
          {dentistConfig.name}.
        </p>

        {isSubmitted ? (
          <div className="mt-6 rounded-brand bg-secondary/10 p-4 text-secondary">
            ¡Gracias por suscribirte! Te mantendremos informado.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              className="flex-1 rounded-brand border border-white/10 bg-primary px-4 py-3 text-on-primary placeholder:text-muted focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
            />
            <Button type="submit">Suscribirme</Button>
          </form>
        )}

        <p className="mt-4 text-xs text-muted">
          Sin spam. Puedes darte de baja cuando quieras.
        </p>
      </div>
    </SectionWrapper>
  );
}
