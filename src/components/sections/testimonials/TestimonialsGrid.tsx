import { dentistConfig } from 'kadesh/config';
import { SectionWrapper, SectionHeading, StarRating } from 'kadesh/components/shared';

export function TestimonialsGrid() {
  const { testimonials } = dentistConfig;
  if (!testimonials.length) return null;

  return (
    <SectionWrapper id="testimonials">
      <SectionHeading
        title="Lo que dicen nuestros pacientes"
        subtitle="Experiencias reales"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <article key={t.name + (t.date ?? '')} className="card-surface">
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
    </SectionWrapper>
  );
}
