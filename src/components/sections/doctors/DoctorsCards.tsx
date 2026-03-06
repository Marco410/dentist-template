import { dentistConfig } from 'kadesh/config';
import { SectionWrapper, SectionHeading } from 'kadesh/components/shared';

export function DoctorsCards() {
  const { doctors } = dentistConfig;
  if (!doctors.length) return null;

  return (
    <SectionWrapper id="doctors">
      <SectionHeading
        title="Nuestro equipo"
        subtitle="Profesionales dedicados a tu salud bucal"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doctor) => (
          <div
            key={doctor.name}
            className="card-surface group overflow-hidden text-center"
          >
            {doctor.image ? (
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: `url(${doctor.image})` }}
              />
            ) : (
              <div className="flex aspect-[4/3] items-center justify-center bg-secondary/10">
                <span className="text-4xl font-bold text-secondary/50">
                  {doctor.name.charAt(0)}
                </span>
              </div>
            )}
            <div className="p-5">
              <h3 className="text-lg font-bold text-on-primary">{doctor.name}</h3>
              <p className="mt-1 text-sm font-medium text-secondary">
                {doctor.specialty}
              </p>
              {doctor.bio && (
                <p className="mt-3 text-sm text-muted">{doctor.bio}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
