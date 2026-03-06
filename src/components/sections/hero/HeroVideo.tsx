'use client';

import { dentistConfig } from 'kadesh/config';
import { Button, StarRating } from 'kadesh/components/shared';
import { cn } from 'kadesh/utils/cn';

export function HeroVideo() {
  const { hero, name, rating, totalReviews } = dentistConfig;
  const videoUrl = hero.backgroundVideo;
  const fallbackImage = hero.backgroundImage;

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {videoUrl ? (
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-primary/60" />
        </div>
      ) : fallbackImage ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${fallbackImage})` }}
          >
            <div className="absolute inset-0 bg-primary/70" />
          </div>
        </>
      ) : (
        <div className="absolute inset-0 bg-primary" />
      )}

      <div className="container-max relative z-10 px-4 py-32 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-3">
            <StarRating rating={rating} size="sm" />
            <span className="text-sm text-muted">
              {rating} ({totalReviews} reseñas)
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-gradient">{hero.slogan.split('.')[0]}.</span>
            <br />
            <span className="text-on-primary">
              {hero.slogan.split('.').slice(1).join('.').trim()}
            </span>
          </h1>

          <p className="max-w-xl text-lg text-muted sm:text-xl">
            {hero.subtext}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" glow>
              {hero.ctaPrimary}
            </Button>
            <Button as="a" href="#about" variant="outline" size="lg">
              {hero.ctaSecondary}
            </Button>
          </div>

          <p className="text-xs text-muted">
            {name} — Tu salud bucal en las mejores manos
          </p>
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
