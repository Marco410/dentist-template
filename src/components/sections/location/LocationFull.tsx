import { dentistConfig } from 'kadesh/config';
import { SectionWrapper, SectionHeading, Button, GoogleMap } from 'kadesh/components/shared';

export function LocationFull() {
  const { address, phone, email, location } = dentistConfig;

  return (
    <SectionWrapper id="location" className="!p-0">
      <SectionHeading
        title="Encuéntranos"
        subtitle="Visítanos y conoce nuestras instalaciones"
        className="section-padding pb-4"
      />

      <div className="relative h-[420px] w-full">
        <GoogleMap height="100%" className="absolute inset-0" />
      </div>

      <div className="section-padding">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-muted">{address}</p>
            <p className="mt-1">
              <a href={`tel:${phone.replace(/\s/g, '')}`} className="font-medium text-accent hover:underline">
                {phone}
              </a>
            </p>
            {email && (
              <p className="mt-1">
                <a href={`mailto:${email}`} className="text-accent hover:underline">{email}</a>
              </p>
            )}
          </div>
          {location.googleMapsUrl && (
            <Button as="a" href={location.googleMapsUrl} target="_blank" rel="noopener noreferrer" variant="outline">
              Abrir en Google Maps
            </Button>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
