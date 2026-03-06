import { dentistConfig } from 'kadesh/config';
import { SectionWrapper, SectionHeading } from 'kadesh/components/shared';

const serviceIcons = [
  'M3 6.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zM14 6.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z',
  'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
  'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
];

export function ServicesCards() {
  return (
    <SectionWrapper id="services">
      <SectionHeading
        title="Nuestros Servicios"
        subtitle="Tratamientos para tu salud bucal"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dentistConfig.services.map((service, i) => (
          <div
            key={service.name}
            className="card-surface group relative overflow-hidden"
          >
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-secondary/5 transition-transform duration-500 group-hover:scale-150" />
            <div className="relative">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-brand bg-secondary/10">
                <svg
                  className="h-6 w-6 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={serviceIcons[i % serviceIcons.length]}
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold text-on-primary">
                {service.name}
              </h3>
              {service.description && (
                <p className="text-sm text-muted">{service.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
