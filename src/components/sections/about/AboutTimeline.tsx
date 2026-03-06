import { dentistConfig } from 'kadesh/config';
import { SectionWrapper, SectionHeading } from 'kadesh/components/shared';

export function AboutTimeline() {
  const { about, foundedYear } = dentistConfig;

  const milestones = [
    { year: foundedYear ?? 2010, text: 'Apertura de la clínica' },
    { year: (foundedYear ?? 2010) + 3, text: 'Nuevo equipo de imagenología' },
    { year: (foundedYear ?? 2010) + 8, text: 'Ampliación de consultorios' },
    { year: new Date().getFullYear(), text: 'Renovación y tecnología de vanguardia' },
  ];

  return (
    <SectionWrapper id="about">
      <SectionHeading title={about.title} />

      <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-muted">
        {about.description}
      </p>

      <div className="relative mx-auto max-w-2xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-secondary via-accent to-transparent md:left-1/2" />

        {milestones.map((milestone, i) => (
          <div
            key={milestone.year}
            className={`relative mb-10 flex items-center gap-6 ${
              i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            <div className="hidden flex-1 md:block" />
            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-secondary bg-primary text-sm font-bold text-secondary">
              {i + 1}
            </div>
            <div className="flex-1 card-surface">
              <div className="text-sm font-bold text-secondary">{milestone.year}</div>
              <div className="mt-1 text-on-primary">{milestone.text}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {about.highlights.map((item) => (
          <div key={item.title} className="text-center">
            <div className="text-2xl font-bold text-secondary">{item.title}</div>
            <div className="mt-1 text-sm text-muted">{item.description}</div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
