import { dentistConfig } from 'kadesh/config';
import { SectionWrapper, SectionHeading } from 'kadesh/components/shared';

export function AboutDefault() {
  const { about, foundedYear } = dentistConfig;
  const yearsActive = new Date().getFullYear() - (foundedYear ?? 2000);

  return (
    <SectionWrapper id="about">
      <SectionHeading title={about.title} />

      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-muted">
            {about.description}
          </p>
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-brand bg-secondary/10 text-2xl font-bold text-secondary">
              {yearsActive}+
            </div>
            <div>
              <div className="font-bold text-on-primary">Años de Experiencia</div>
              <div className="text-sm text-muted">Cuidando sonrisas desde {foundedYear}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {about.highlights.map((item) => (
            <div key={item.title} className="card-surface text-center">
              <div className="mb-2 text-2xl font-bold text-secondary">
                {item.title}
              </div>
              <p className="text-sm text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
