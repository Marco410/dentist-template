import { dentistConfig } from 'kadesh/config';
import { Button } from 'kadesh/components/shared';

export function CTABanner() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, 
            rgb(var(--color-secondary-rgb) / 0.15) 0%, 
            rgb(var(--color-primary-rgb)) 50%, 
            rgb(var(--color-accent-rgb) / 0.1) 100%)`,
        }}
      />
      <div className="absolute inset-0 border-y border-white/10" />

      <div className="container-max relative text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl">
          <span className="text-gradient">¿Listo para Empezar?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
          Únete a {dentistConfig.name} y cuida tu sonrisa. Tu primera consulta puede ser de valoración.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button size="lg" glow>
            {dentistConfig.hero.ctaPrimary}
          </Button>
          <Button
            as="a"
            href={`tel:${dentistConfig.phone.replace(/\s/g, '')}`}
            variant="outline"
            size="lg"
          >
            Llamar Ahora: {dentistConfig.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
