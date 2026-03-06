'use client';

import { cn } from 'kadesh/utils/cn';
import { dentistConfig } from 'kadesh/config';

export function WhatsAppButton() {
  if (!dentistConfig.features.whatsappButton || !dentistConfig.whatsapp) return null;

  const url = `https://wa.me/${dentistConfig.whatsapp}?text=${encodeURIComponent(
    `¡Hola! Me gustaría agendar una cita o recibir información sobre ${dentistConfig.name}`,
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className={cn(
        'fixed bottom-6 right-6 z-50',
        'flex h-14 w-14 items-center justify-center rounded-full',
        'bg-[#25D366] text-white shadow-lg',
        'transition-transform duration-300 hover:scale-110',
        'md:bottom-8 md:right-8 md:h-16 md:w-16',
      )}
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 md:h-8 md:w-8" fill="currentColor">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.132 6.742 3.052 9.376L1.056 31.2l6.012-1.97A15.89 15.89 0 0016.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.31 22.604c-.39 1.098-1.932 2.01-3.172 2.276-.852.18-1.962.324-5.702-1.226-4.788-1.984-7.87-6.856-8.108-7.174-.228-.318-1.912-2.546-1.912-4.858s1.21-3.448 1.638-3.92c.43-.47.936-.59 1.248-.59.314 0 .626.002.9.016.288.014.676-.11 1.058.806.39.938 1.328 3.234 1.444 3.468.118.234.196.508.04.818-.158.314-.236.508-.47.784-.234.274-.492.612-.702.822-.234.234-.478.488-.206.958.274.47 1.216 2.006 2.612 3.25 1.792 1.596 3.304 2.09 3.774 2.324.47.234.744.196 1.018-.118.274-.314 1.176-1.37 1.49-1.84.314-.47.628-.39 1.058-.234.43.156 2.724 1.286 3.194 1.52.47.234.782.352.898.546.118.196.118 1.118-.272 2.216z" />
      </svg>
    </a>
  );
}
