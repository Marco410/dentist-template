import type { DentistConfig } from 'kadesh/config/types';

export const defaultDentist: DentistConfig = {
  name: 'Clínica Integral',
  category: 'Clínica Dental',
  address: 'Av. Principal 123, Col. Centro, 58000 Morelia, Michoacán',
  phone: '443 123 4567',
  whatsapp: '5214431234567',
  email: 'contacto@clinicaintegral.com',
  rating: 4.9,
  totalReviews: 127,
  hasWebsite: true,
  foundedYear: 2010,

  brand: {
    tone: 'premium',
    primaryColor: '#0f172a',
    secondaryColor: '#0ea5e9',
    accentColor: '#06b6d4',
    fontStyle: 'modern',
    darkMode: true,
  },

  social: {
    facebook: 'https://facebook.com/clinicaintegral',
    instagram: 'https://instagram.com/clinicaintegral',
  },

  hero: {
    slogan: 'Tu salud, nuestra prioridad.',
    subtext: 'Atención personalizada con tecnología de vanguardia. Blanqueamiento, ortodoncia, implantes y más.',
    ctaPrimary: 'Agendar cita',
    ctaSecondary: 'Conocer más',
    backgroundImage: undefined,
  },

  about: {
    title: 'Sobre nosotros',
    description: 'Más de una década cuidando la salud bucal de las familias. Contamos con equipo de esterilización de primer nivel y profesionales en constante actualización.',
    highlights: [
      { title: '15+', description: 'Años de experiencia' },
      { title: '5', description: 'Especialistas' },
      { title: '100%', description: 'Esterilización' },
      { title: '24/7', description: 'Urgencias' },
    ],
    images: [
      '/images/demo/facility-1.jpg',
      '/images/demo/facility-2.jpg',
      '/images/demo/facility-3.jpg',
    ],
  },

  services: [
    { name: 'Limpieza dental', description: 'Profilaxis y revisión completa' },
    { name: 'Ortodoncia', description: 'Brackets y alineadores invisibles' },
    { name: 'Implantes', description: 'Rehabilitación con implantes dentales' },
    { name: 'Blanqueamiento', description: 'Blanqueamiento profesional en consultorio' },
    { name: 'Endodoncia', description: 'Tratamiento de conductos' },
    { name: 'Odontopediatría', description: 'Atención para niños' },
  ],

  features: {
    bookingSystem: true,
    onlinePayments: false,
    whatsappButton: true,
    googleMaps: true,
    newsletter: true,
    reviews: true,
    emergencyLine: true,
  },

  schedule: {
    Lunes: { open: '09:00', close: '19:00' },
    Martes: { open: '09:00', close: '19:00' },
    Miércoles: { open: '09:00', close: '19:00' },
    Jueves: { open: '09:00', close: '19:00' },
    Viernes: { open: '09:00', close: '18:00' },
    Sábado: { open: '09:00', close: '14:00' },
    Domingo: { open: '09:00', close: '14:00', closed: true },
  },

  plans: [
    {
      name: 'Limpieza + Revisión',
      price: 450,
      period: 'por sesión',
      features: ['Limpieza profesional', 'Revisión general', 'Aplicación de flúor'],
      highlighted: false,
      ctaText: 'Agendar',
    },
    {
      name: 'Plan Preventivo Anual',
      price: 2500,
      period: 'anual',
      features: ['2 limpiezas', '2 revisiones', 'Radiografías', '10% en tratamientos'],
      highlighted: true,
      ctaText: 'Contratar',
    },
    {
      name: 'Blanqueamiento',
      price: 3500,
      period: 'tratamiento',
      features: ['Sesión en consultorio', 'Kit de mantenimiento', 'Seguimiento'],
      highlighted: false,
      ctaText: 'Reservar',
    },
  ],

  testimonials: [
    {
      name: 'María G.',
      rating: 5,
      text: 'Excelente atención. Me realizaron un blanqueamiento y el resultado superó mis expectativas. Muy profesionales.',
      date: '2024-01-15',
    },
    {
      name: 'Roberto L.',
      rating: 5,
      text: 'Llevo a mis hijos desde hace años. El trato con niños es increíble y las instalaciones muy limpias.',
      date: '2024-02-01',
    },
    {
      name: 'Ana S.',
      rating: 4,
      text: 'Buen servicio y precios justos. La ortodoncia que me pusieron va muy bien.',
      date: '2024-02-20',
    },
  ],

  doctors: [
    {
      name: 'Dr. Carlos Mendoza',
      specialty: 'Odontología general y estética',
      bio: 'Más de 15 años de experiencia en rehabilitación oral.',
    },
    {
      name: 'Dra. Laura Pérez',
      specialty: 'Ortodoncia',
      bio: 'Especialista en ortodoncia y ortopedia maxilar.',
    },
    {
      name: 'Dr. Miguel Torres',
      specialty: 'Implantología',
      bio: 'Certificado en implantología y cirugía oral.',
    },
  ],

  facilities: {
    images: [
      '/images/demo/facility-1.jpg',
      '/images/demo/facility-2.jpg',
      'https://loremflickr.com/cache/resized/6114_6279979561_80f45617b2_k_1280_720_nofilter.jpg',
    ],
    features: [
      'Consultorios equipados',
      'Esterilización centralizada',
      'Rayos X digital',
      'Sala de espera cómoda',
    ],
  },

  proposals: [
    {
      title: 'Sistema de citas en línea',
      description: 'Reserva tu cita 24/7 desde la web.',
      status: 'planned',
    },
    {
      title: 'Pagos en línea',
      description: 'Paga tu tratamiento con tarjeta o transferencia.',
      status: 'planned',
    },
    {
      title: 'Análisis de estudios con IA',
      description: 'Análisis de estudios con IA para diagnosticar y tratar problemas clinicos. Creación de graficas para visualizar los datos.',
      status: 'planned',
    },
    {
      title: 'Sistema de gestión de pacientes',
      description: 'Sistema de gestión de pacientes para administrar citas, historiales clínicos y facturación.',
      status: 'planned',
    },
    {
      title: 'Sistema de gestión de pacientes',
      description: 'Sistema de gestión de pacientes para administrar citas, historiales clínicos y facturación.',
      status: 'planned',
    },
  ],

  location: {
    lat: 19.7069,
    lng: -101.1949,
    mapZoom: 16,
    googleMapsUrl: 'https://maps.google.com/?q=19.7069,-101.1949',
  },

  sections: {
    hero: { enabled: true, variant: 'gradient' },
    about: { enabled: true, variant: 'default' },
    services: { enabled: true, variant: 'grid' },
    doctors: { enabled: true, variant: 'cards' },
    testimonials: { enabled: true, variant: 'grid' },
    schedule: { enabled: true, variant: 'table' },
    pricing: { enabled: true, variant: 'cards' },
    location: { enabled: true, variant: 'split' },
    facilities: { enabled: true, variant: 'gallery' },
    newsletter: { enabled: true, variant: 'inline' },
    proposals: { enabled: true, variant: 'grid' },
    cta: { enabled: true, variant: 'banner' },
    footer: { enabled: true, variant: 'default' },
  },

  seo: {
    siteUrl: 'https://clinicaintegral.com',
    keywords: ['clínica dental Morelia', 'dentista Morelia', 'ortodoncia', 'implantes dentales'],
    ogImage: '/opengraph-image',
    locale: 'es_MX',
    geoRegion: 'MX-MIC',
  },
};
