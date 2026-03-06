'use client';

import { dentistConfig } from 'kadesh/config';
import { Button, StarRating } from 'kadesh/components/shared';
import { cn } from 'kadesh/utils/cn';

export function HeroGradient() {
  const { hero, name, rating, totalReviews } = dentistConfig;
  const yearsActive = new Date().getFullYear() - (dentistConfig.foundedYear ?? 2000);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% -20%, rgb(var(--color-secondary-rgb) / 0.3), transparent),
              radial-gradient(ellipse 60% 40% at 80% 50%, rgb(var(--color-accent-rgb) / 0.15), transparent),
              radial-gradient(ellipse 50% 30% at 10% 80%, rgb(var(--color-secondary-rgb) / 0.1), transparent),
              rgb(var(--color-primary-rgb))
            `,
          }}
        />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-max relative z-10 px-4 py-32 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <StarRating rating={rating} size="sm" />
            <span className="text-sm text-muted">
              {rating} ({totalReviews} reseñas)
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            <span className="text-gradient">{hero.slogan.split('.')[0]}.</span>
            <br />
            <span className="text-on-primary">
              {hero.slogan.split('.').slice(1).join('.').trim()}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">
            {hero.subtext}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" glow>
              {hero.ctaPrimary}
            </Button>
            <Button as="a" href="#about" variant="outline" size="lg">
              {hero.ctaSecondary}
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8 sm:gap-16">
            {[
              { value: `+${yearsActive}`, label: 'Años' },
              { value: `+${totalReviews}`, label: 'Reseñas' },
              { value: `${dentistConfig.services.length}+`, label: 'Servicios' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-secondary sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={cn(
          'absolute bottom-0 left-0 right-0 h-32',
          'bg-gradient-to-t from-primary to-transparent',
        )}
      />
    </section>
  );
}
