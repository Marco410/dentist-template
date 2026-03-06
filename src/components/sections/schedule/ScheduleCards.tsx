import { dentistConfig } from 'kadesh/config';
import { SectionWrapper, SectionHeading } from 'kadesh/components/shared';
import { cn } from 'kadesh/utils/cn';

export function ScheduleCards() {
  const entries = Object.entries(dentistConfig.schedule);
  const today = new Date().toLocaleDateString('es-MX', { weekday: 'long' });

  return (
    <SectionWrapper id="schedule">
      <SectionHeading
        title="Horarios"
        subtitle="Encuentra el mejor momento para entrenar"
      />

      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
        {entries.map(([day, hours]) => {
          const isToday = today.toLowerCase() === day.toLowerCase();

          return (
            <div
              key={day}
              className={cn(
                'rounded-brand border p-4 text-center transition-all',
                isToday
                  ? 'border-secondary bg-secondary/10 glow-secondary'
                  : 'border-white/10 bg-surface/50',
              )}
            >
              <div
                className={cn(
                  'text-sm font-bold',
                  isToday ? 'text-secondary' : 'text-on-primary',
                )}
              >
                {day.slice(0, 3)}
              </div>
              {hours.closed ? (
                <div className="mt-2 text-xs text-muted">Cerrado</div>
              ) : (
                <>
                  <div className="mt-2 text-xs text-muted">{hours.open}</div>
                  <div className="my-1 text-[10px] text-muted">a</div>
                  <div className="text-xs text-muted">{hours.close}</div>
                </>
              )}
              {isToday && (
                <div className="mt-2 rounded-full bg-secondary/20 px-2 py-0.5 text-[10px] font-bold text-secondary">
                  HOY
                </div>
              )}
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
