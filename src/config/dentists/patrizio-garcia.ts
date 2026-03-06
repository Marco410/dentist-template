import type { DentistConfig } from 'kadesh/config/types';

/** Odontología Restauradora - Dr. Patrizio García, Morelia */
export const patrizioGarcia: DentistConfig = {
  name: 'Patrizio García',
  category: 'Dentista',
  address: 'Antonio Alzate 897, Centro histórico de Morelia, 58000 Morelia, Mich.',
  phone: '443 157 8720',
  whatsapp: '5214431578720',
  email: undefined,
  rating: 4.9,
  totalReviews: 49,
  hasWebsite: true,
  foundedYear: undefined,

  brand: {
    tone: 'premium',
    primaryColor: '#0f172a',
    secondaryColor: '#0ea5e9',
    accentColor: '#06b6d4',
    fontStyle: 'modern',
    darkMode: true,
  },

  social: {},

  hero: {
    slogan: 'Odontología Restauradora con confianza.',
    subtext: 'Atención profesional, seguimiento en cada tratamiento y horarios flexibles. El Dr. Patrizio García y su equipo te explican cada paso con claridad.',
    ctaPrimary: 'Agendar cita',
    ctaSecondary: 'Conocer más',
    backgroundImage: undefined,
  },

  about: {
    title: 'Sobre nosotros',
    description: 'Consultorio del Dr. Patrizio García en el centro histórico de Morelia. Servicio personalizado, explicación detallada de cada procedimiento y ambiente de confianza. Atendemos urgencias y damos seguimiento después de cada tratamiento.',
    highlights: [
      { title: '4.9', description: 'Valoración' },
      { title: '49+', description: 'Opiniones' },
      { title: '24/7', description: 'Abierto las 24 horas' },
      { title: 'Seguimiento', description: 'Después del tratamiento' },
    ],
  },

  services: [
    { name: 'Odontología restauradora', description: 'Restauración y rehabilitación dental' },
    { name: 'Urgencias dentales', description: 'Atención en emergencias' },
    { name: 'Limpieza dental', description: 'Profilaxis y revisión' },
    { name: 'Endodoncia', description: 'Tratamiento de conductos' },
    { name: 'Restauraciones', description: 'Resinas y reconstrucciones' },
    { name: 'Seguimiento', description: 'Control post-tratamiento' },
  ],

  features: {
    bookingSystem: false,
    onlinePayments: false,
    whatsappButton: true,
    googleMaps: true,
    newsletter: false,
    reviews: true,
    emergencyLine: true,
  },

  schedule: {
    Lunes: { open: '00:00', close: '23:59' },
    Martes: { open: '00:00', close: '23:59' },
    Miércoles: { open: '00:00', close: '23:59' },
    Jueves: { open: '00:00', close: '23:59' },
    Viernes: { open: '00:00', close: '23:59' },
    Sábado: { open: '00:00', close: '23:59' },
    Domingo: { open: '00:00', close: '23:59' },
  },

  plans: [
    {
      name: 'Limpieza + Revisión',
      price: 450,
      period: 'por sesión',
      features: ['Limpieza profesional', 'Revisión general'],
      ctaText: 'Agendar',
    },
    {
      name: 'Consulta de valoración',
      price: 350,
      period: 'consulta',
      features: ['Exploración', 'Plan de tratamiento'],
      highlighted: true,
      ctaText: 'Reservar',
    },
  ],

  testimonials: [
    {
      name: 'Oscar Cortes Ambriz',
      rating: 5,
      text: 'Increíble servicio, siempre me dijo que eran los pasos a seguir, usó una anestesia buenísima jaja. Pero de verdad que el servicio excelente, muy flexible con los horarios, te dan seguimiento después de tu tratamiento. Sin duda volveré. Muchas gracias.',
      date: 'Hace 2 años',
    },
    {
      name: 'Ana Dianel De La Fuente',
      rating: 5,
      text: 'Excelente servicio, el Dr. es muy profesional, explica con detalle cada procedimiento además de responder todas tus dudas, genera un ambiente de confianza y junto con su equipo realizan un excelente trabajo. Muy recomendado.',
      date: 'Hace 2 años',
    },
    {
      name: 'Chio Pineda',
      rating: 5,
      text: 'Excelente atención, el Dr García es muy amable y flexible ya que me atendió una emergencia. Además se toma el tiempo de explicar a detalle el trabajo que está realizando y eso da mucha confianza. Lo recomiendo ampliamente.',
      date: 'Hace 4 años',
    },
  ],

  doctors: [
    {
      name: 'Dr. Patrizio García',
      specialty: 'Odontología restauradora',
      bio: 'Atención personalizada, explicación detallada de cada procedimiento y seguimiento en todos los tratamientos. Atiende urgencias y horarios flexibles.',
    },
  ],

  facilities: {
    images: [],
    features: ['Consultorio en centro histórico', 'Atención 24 horas', 'Seguimiento post-tratamiento'],
  },

  proposals: [],

  location: {
    lat: 19.7026,
    lng: -101.192,
    mapZoom: 17,
    googleMapsUrl: 'https://maps.google.com/?q=Antonio+Alzate+897+Morelia+Michoacan',
  },

  sections: {
    hero: { enabled: true, variant: 'gradient' },
    about: { enabled: true, variant: 'default' },
    services: { enabled: true, variant: 'cards' },
    doctors: { enabled: false, variant: 'cards' },
    testimonials: { enabled: true, variant: 'grid' },
    schedule: { enabled: true, variant: 'table' },
    pricing: { enabled: true, variant: 'cards' },
    location: { enabled: true, variant: 'split' },
    facilities: { enabled: true, variant: 'gallery' },
    newsletter: { enabled: false, variant: 'inline' },
    proposals: { enabled: false, variant: 'grid' },
    cta: { enabled: true, variant: 'banner' },
    footer: { enabled: true, variant: 'default' },
  },

  seo: {
    siteUrl: 'https://maxwell.com.mx',
    keywords: ['dentista Morelia', 'odontología restauradora Morelia', 'Patrizio García', 'dentista centro Morelia'],
    ogImage: '/opengraph-image',
    locale: 'es_MX',
    geoRegion: 'MX-MIC',
  },
};
