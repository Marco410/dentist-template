import { dentistConfig } from 'kadesh/config';
import { SectionWrapper, SectionHeading } from 'kadesh/components/shared';

export function FacilitiesGallery() {
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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src, i) => (
            <div
              key={i}
              className="aspect-video overflow-hidden rounded-brand bg-surface"
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
