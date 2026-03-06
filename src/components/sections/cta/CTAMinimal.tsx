import { dentistConfig } from 'kadesh/config';
import { Button } from 'kadesh/components/shared';

export function CTAMinimal() {
  return (
    <section className="section-padding">
      <div className="container-max flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-xl text-2xl sm:text-3xl">
          Empieza hoy tu transformación en{' '}
          <span className="text-secondary">{dentistConfig.name}</span>
        </h2>
        <Button size="lg" glow>
          {dentistConfig.hero.ctaPrimary}
        </Button>
      </div>
    </section>
  );
}
