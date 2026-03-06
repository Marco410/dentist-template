import { dentistConfig } from 'kadesh/config';
import { SectionWrapper, SectionHeading } from 'kadesh/components/shared';

export function ServicesList() {
  return (
    <SectionWrapper id="services">
      <SectionHeading
        title="Nuestros Servicios"
        subtitle="Todo lo que necesitas para alcanzar tus metas fitness"
        align="left"
      />

      <div className="space-y-4">
        {dentistConfig.services.map((service, i) => (
          <div
            key={service.name}
            className="group flex items-center gap-6 rounded-brand border border-white/5 bg-surface/50 p-5 transition-all hover:border-secondary/20 hover:bg-surface"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-brand bg-secondary/10 text-xl font-bold text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
              {String(i + 1).padStart(2, '0')}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-on-primary">{service.name}</h3>
              {service.description && (
                <p className="mt-1 text-sm text-muted">{service.description}</p>
              )}
            </div>
            <svg
              className="hidden h-5 w-5 text-muted transition-transform group-hover:translate-x-1 group-hover:text-secondary sm:block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
