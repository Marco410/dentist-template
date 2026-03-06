import { cn } from 'kadesh/utils/cn';
import { dentistConfig } from 'kadesh/config';

interface GoogleMapProps {
  className?: string;
  height?: string;
}

export function GoogleMap({ className, height = '400px' }: GoogleMapProps) {
  const { lat, lng, mapZoom = 16 } = dentistConfig.location;
  const src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${lat},${lng}&zoom=${mapZoom}`;

  return (
    <div
      className={cn('overflow-hidden rounded-brand', className)}
      style={{ height }}
    >
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Ubicación de ${dentistConfig.name}`}
      />
    </div>
  );
}
