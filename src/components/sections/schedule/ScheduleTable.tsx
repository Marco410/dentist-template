import { dentistConfig } from 'kadesh/config';
import { SectionWrapper, SectionHeading } from 'kadesh/components/shared';
import { cn } from 'kadesh/utils/cn';

export function ScheduleTable() {
  const entries = Object.entries(dentistConfig.schedule);

  return (
    <SectionWrapper id="schedule">
      <SectionHeading
        title="Horarios"
        subtitle="Encuentra el mejor momento para tu cita"
      />

      <div className="mx-auto max-w-2xl overflow-hidden rounded-brand border border-white/10">
        {entries.map(([day, hours], i) => (
          <div
            key={day}
            className={cn(
              'flex items-center justify-between px-6 py-4',
              i % 2 === 0 ? 'bg-surface/50' : 'bg-surface',
              i < entries.length - 1 && 'border-b border-white/5',
            )}
          >
            <span className="font-bold text-on-primary">{day}</span>
            {hours.closed ? (
              <span className="text-sm text-muted">Cerrado</span>
            ) : (
              <span className="rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary">
                {hours.open} - {hours.close}
              </span>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
