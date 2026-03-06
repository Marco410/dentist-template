import { dentistConfig } from 'kadesh/config';
import { SectionWrapper, SectionHeading } from 'kadesh/components/shared';

export function ServicesGrid() {
  return (
    <SectionWrapper id="services">
      <SectionHeading
        title="Nuestros Servicios"
        subtitle="Todo lo que necesitas para alcanzar tus metas fitness"
      />

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {dentistConfig.services.map((service, i) => (
          <div
            key={service.name}
            className="group relative flex aspect-square items-end overflow-hidden rounded-brand p-4 sm:p-6"
            style={{
              background: `linear-gradient(135deg, 
                rgb(var(--color-secondary-rgb) / ${0.1 + (i * 0.05)}) 0%, 
                rgb(var(--color-accent-rgb) / ${0.05 + (i * 0.03)}) 100%),
                rgb(var(--color-surface-rgb))`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
            <div className="relative">
              <div className="mb-1 text-xs font-bold text-secondary sm:text-sm">
                0{i + 1}
              </div>
              <h3 className="text-sm font-bold text-on-primary sm:text-base lg:text-lg">
                {service.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
