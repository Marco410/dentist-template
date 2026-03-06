import { dentistConfig } from 'kadesh/config';
import { Button } from 'kadesh/components/shared';

export function HeroMinimal() {
  const { hero } = dentistConfig;

  return (
    <section
      id="hero"
      className="flex min-h-screen items-center justify-center px-4"
    >
      <div className="max-w-2xl space-y-8 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl">
          {hero.slogan}
        </h1>
        <p className="text-lg text-muted sm:text-xl">
          {hero.subtext}
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button size="lg">{hero.ctaPrimary}</Button>
          <Button as="a" href="#about" variant="ghost" size="lg">
            {hero.ctaSecondary}
          </Button>
        </div>
      </div>
    </section>
  );
}
