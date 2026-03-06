import type { DentistConfig } from 'kadesh/config/types';

export const dentalSmile: DentistConfig = {
  name: 'Dental Smile',
  category: 'Clínica Dental',
  address: 'Calle Hidalgo 456, Centro, 06000 Ciudad de México',
  phone: '55 1234 5678',
  whatsapp: '5215512345678',
  email: 'hola@dentalsmile.mx',
  rating: 4.8,
  totalReviews: 89,
  foundedYear: 2015,

  brand: {
    tone: 'familiar',
    primaryColor: '#1e3a5f',
    secondaryColor: '#22c55e',
    accentColor: '#14b8a6',
    darkMode: true,
  },

  social: {
    facebook: 'https://facebook.com/dentalsmilecdmx',
    instagram: 'https://instagram.com/dentalsmilecdmx',
    tiktok: 'https://tiktok.com/@dentalsmile',
  },

  hero: {
    slogan: 'Sonrisas que inspiran confianza.',
    subtext: 'Cuidamos de toda la familia con calidez y los mejores tratamientos dentales.',
    ctaPrimary: 'Pedir cita',
    ctaSecondary: 'Ver servicios',
    backgroundImage: undefined,
  },

  about: {
    title: 'Nuestra historia',
    description: 'Dental Smile nació con la idea de ofrecer odontología de calidad en un ambiente cercano. Creemos que ir al dentista puede ser una experiencia positiva.',
    highlights: [
      { title: '8+', description: 'Años con ustedes' },
      { title: '3', description: 'Doctores' },
      { title: 'Familiar', description: 'Atención' },
      { title: 'Sin dolor', description: 'Nos esforzamos' },
    ],
  },

  services: [
    { name: 'Limpieza dental', description: 'Profilaxis y cuidado preventivo' },
    { name: 'Ortodoncia', description: 'Brackets metálicos y estéticos' },
    { name: 'Blanqueamiento', description: 'Sonrisa más blanca en una sesión' },
    { name: 'Resinas y caries', description: 'Tratamiento conservador' },
    { name: 'Extracciones', description: 'Con mínimo dolor' },
    { name: 'Odontopediatría', description: 'Niños desde los 3 años' },
  ],

  features: {
    bookingSystem: false,
    whatsappButton: true,
    googleMaps: true,
    newsletter: true,
    reviews: true,
    emergencyLine: false,
  },

  schedule: {
    Lunes: { open: '10:00', close: '20:00' },
    Martes: { open: '10:00', close: '20:00' },
    Miércoles: { open: '10:00', close: '20:00' },
    Jueves: { open: '10:00', close: '20:00' },
    Viernes: { open: '10:00', close: '19:00' },
    Sábado: { open: '09:00', close: '14:00' },
    Domingo: { open: '09:00', close: '14:00', closed: true },
  },

  plans: [
    {
      name: 'Limpieza',
      price: 399,
      period: 'sesión',
      features: ['Limpieza', 'Revisión', 'Flúor'],
      ctaText: 'Agendar',
    },
    {
      name: 'Paquete familiar',
      price: 1500,
      period: '4 limpiezas',
      features: ['Hasta 4 personas', 'Válido 1 año', 'Incluye revisión'],
      highlighted: true,
      ctaText: 'Contratar',
    },
  ],

  testimonials: [
    {
      name: 'Patricia R.',
      rating: 5,
      text: 'Muy buena clínica. Me atendieron con mucha paciencia y me explicaron todo el tratamiento.',
      date: '2024-03-01',
    },
    {
      name: 'José M.',
      rating: 5,
      text: 'Recomiendo Dental Smile. Precios accesibles y trato excelente.',
      date: '2024-03-10',
    },
  ],

  doctors: [
    { name: 'Dra. Carmen Ruiz', specialty: 'Odontología general', bio: 'Enfocada en odontología preventiva.' },
    { name: 'Dr. Fernando Díaz', specialty: 'Ortodoncia y niños', bio: 'Especialista en ortodoncia y odontopediatría.' },
  ],

  facilities: {
    images: [],
    features: ['Consultorios modernos', 'Esterilización', 'Atención a niños'],
  },

  proposals: [
    { title: 'Citas en línea', description: 'Reserva por internet.', status: 'planned' },
  ],

  location: {
    lat: 19.4326,
    lng: -99.1332,
    mapZoom: 15,
    googleMapsUrl: 'https://maps.google.com/?q=19.4326,-99.1332',
  },

  sections: {
    hero: { enabled: true, variant: 'image' },
    about: { enabled: true, variant: 'timeline' },
    services: { enabled: true, variant: 'grid' },
    doctors: { enabled: true, variant: 'cards' },
    testimonials: { enabled: true, variant: 'grid' },
    schedule: { enabled: true, variant: 'cards' },
    pricing: { enabled: true, variant: 'comparison' },
    location: { enabled: true, variant: 'split' },
    facilities: { enabled: true, variant: 'masonry' },
    newsletter: { enabled: true, variant: 'banner' },
    proposals: { enabled: true, variant: 'featured' },
    cta: { enabled: true, variant: 'minimal' },
    footer: { enabled: true, variant: 'expanded' },
  },

  seo: {
    siteUrl: 'https://dentalsmile.mx',
    keywords: ['dentista CDMX', 'clínica dental CDMX', 'Dental Smile'],
    locale: 'es_MX',
    geoRegion: 'MX-CMX',
  },
};
