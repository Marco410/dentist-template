import { dentistConfig } from 'kadesh/config';
import { SectionWrapper, SectionHeading } from 'kadesh/components/shared';
import { cn } from 'kadesh/utils/cn';

export function FacilitiesMasonry() {
  const facilities = dentistConfig.facilities;
  const images = facilities?.images ?? [];
  const features = facilities?.features ?? [];

  return (
    <SectionWrapper id="facilities">
      <SectionHeading
        title="Nuestras instalaciones"
        subtitle="Consultorios y equipamiento"
      />

      {images.length > 0 && (
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {images.map((src, i) => (
            <div
              key={i}
              className={cn(
                'mb-4 break-inside-avoid overflow-hidden rounded-brand bg-surface',
                i % 3 === 0 ? 'aspect-square' : 'aspect-[4/3]',
              )}
              style={{ backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
          ))}
        </div>
      )}

      {features.length > 0 && (
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {features.map((f) => (
            <span
              key={f}
              className="rounded-brand border border-white/10 bg-surface/50 px-4 py-2 text-sm text-muted"
            >
              {f}
            </span>
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
