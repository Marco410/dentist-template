import type { DentistConfig } from 'kadesh/config/types';

/** C.D. Laura Zavala - Consultorio dental en Ventura Puente, Morelia */
export const lauraZavala: DentistConfig = {
  name: 'C.D. Laura Zavala',
  category: 'Dentista',
  address: 'Río Yaqui 126 C, Ventura Puente, 58020 Morelia, Mich.',
  phone: '443 306 4152',
  whatsapp: '5214433064152',
  email: undefined,
  rating: 5,
  totalReviews: 29,
  hasWebsite: false,
  foundedYear: undefined,

  brand: {
    tone: 'minimalista',
    primaryColor: '#1D2B36',
    secondaryColor: '#FAF4E7',
    accentColor: '#3A4E5E',
    fontStyle: 'modern',
    darkMode: true,
  },

  social: {},

  hero: {
    slogan: 'Excelente atención y calidad humana.',
    subtext: 'Consultorio cómodo y limpio. La Dra. Laura Zavala te explica cada paso con paciencia y te hace sentir en confianza. Precios accesibles y trato amable.',
    ctaPrimary: 'Agendar cita',
    ctaSecondary: 'Conocer más',
    backgroundImage: undefined,
  },

  about: {
    title: 'Sobre el consultorio',
    description: 'Consultorio de la C.D. Laura Zavala en Ventura Puente, Morelia. Espacio cómodo y limpio, atención amable y profesional. La doctora identifica tu situación, te da solución y explica los métodos de cuidado. Trato delicado y cercano; nos aseguramos de que estés cómoda o cómodo en todo momento. Espacio amigable e inclusivo.',
    highlights: [
      { title: '5.0', description: 'Valoración' },
      { title: '29', description: 'Opiniones' },
      { title: 'Precios accesibles', description: 'Y calidad' },
      { title: 'Consultorio limpio', description: 'Y cómodo' },
    ],
  },

  services: [
    { name: 'Limpieza dental', description: 'Profilaxis y cuidado preventivo' },
    { name: 'Extracciones', description: 'Incluyendo muelas del juicio' },
    { name: 'Restauraciones', description: 'Resinas y tratamientos conservadores' },
    { name: 'Revisión y diagnóstico', description: 'Explicación clara de tu situación y opciones' },
    { name: 'Orientación de cuidado', description: 'Métodos de cuidado personalizado' },
  ],

  features: {
    bookingSystem: false,
    onlinePayments: false,
    whatsappButton: true,
    googleMaps: true,
    newsletter: false,
    reviews: true,
    emergencyLine: false,
  },

  schedule: {
    Lunes: { open: '10:00', close: '19:00' },
    Martes: { open: '10:00', close: '19:00' },
    Miércoles: { open: '10:00', close: '19:00' },
    Jueves: { open: '10:00', close: '19:00' },
    Viernes: { open: '10:00', close: '19:00' },
    Sábado: { open: '10:00', close: '14:00' },
    Domingo: { open: '10:00', close: '14:00' },
  },

  plans: [
    {
      name: 'Limpieza dental',
      price: 400,
      period: 'sesión',
      features: ['Limpieza profesional', 'Revisión'],
      ctaText: 'Agendar',
    },
    {
      name: 'Consulta y valoración',
      price: 300,
      period: 'consulta',
      features: ['Exploración', 'Diagnóstico', 'Opciones de tratamiento'],
      highlighted: true,
      ctaText: 'Reservar',
    },
  ],

  testimonials: [
    {
      name: 'Eskarlet Mendoza',
      rating: 5,
      text: 'Desde el primer día en el que me atendió fue muy amable y rápido identificó mi situación, me dio solución y me explicó los diferentes métodos de cuidado. Su consultorio un espacio muy cómodo y limpio. Muchas gracias C.D.',
      date: 'Hace 3 años',
    },
    {
      name: 'Cindy Leon Piza',
      rating: 5,
      text: 'Es muy amable la doctora y muy buena en su trabajo. Me sacó dos muelas del juicio y todo salió bien y precios muy accesibles. Hasta la fecha no he sentido ninguna molestia, se las recomiendo. También porque es muy limpio su consultorio.',
      date: 'Hace 3 años',
    },
    {
      name: 'Dana Flores',
      rating: 5,
      text: 'Excelente doctora, me divierto mucho con ella y aparte es muy cómodo. Trata muy bien a la gente y te explica todo, es muy delicada y siempre se asegura que la estés pasando bien y estés cómoda.',
      date: 'Hace 2 años',
    },
  ],

  doctors: [
    {
      name: 'C.D. Laura Zavala',
      specialty: 'Odontología general',
      bio: 'Atención amable y profesional. Identifica tu situación con claridad, ofrece soluciones y explica los métodos de cuidado. Consultorio cómodo y limpio; trato delicado para que te sientas en confianza.',
    },
  ],

  facilities: {
    images: [],
    features: [
      'Consultorio cómodo y limpio',
      'Precios accesibles',
      'Atención con paciencia y calidez',
      'Ventura Puente, Morelia',
    ],
  },

  proposals: [],

  location: {
    lat: 19.718,
    lng: -101.185,
    mapZoom: 17,
    googleMapsUrl: 'https://maps.google.com/?q=Rio+Yaqui+126+Ventura+Puente+Morelia',
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
    siteUrl: undefined,
    keywords: ['dentista Morelia', 'C.D. Laura Zavala', 'Ventura Puente', 'odontología Morelia'],
    ogImage: '/opengraph-image',
    locale: 'es_MX',
    geoRegion: 'MX-MIC',
  },
};
