import { dentistConfig } from 'kadesh/config';
import { SectionWrapper, SectionHeading, Button, GoogleMap } from 'kadesh/components/shared';

export function LocationSplit() {
  const { address, phone, email, schedule, location } = dentistConfig;

  return (
    <SectionWrapper id="location">
      <SectionHeading
        title="Encuéntranos"
        subtitle="Visítanos y conoce nuestras instalaciones"
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="card-surface">
            <h3 className="mb-4 text-lg font-bold text-on-primary">Información de Contacto</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <div className="text-sm font-bold text-on-primary">Dirección</div>
                  <div className="text-sm text-muted">{address}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <div className="text-sm font-bold text-on-primary">Teléfono</div>
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-sm text-accent hover:underline">{phone}</a>
                </div>
              </div>

              {email && (
                <div className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <div className="text-sm font-bold text-on-primary">Email</div>
                    <a href={`mailto:${email}`} className="text-sm text-accent hover:underline">{email}</a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {location.googleMapsUrl && (
            <Button
              as="a"
              href={location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              className="w-full"
            >
              Abrir en Google Maps
            </Button>
          )}
        </div>

        <GoogleMap height="100%" className="min-h-[300px] lg:min-h-0" />
      </div>
    </SectionWrapper>
  );
}
