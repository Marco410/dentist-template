import type { DentistConfig } from 'kadesh/config/types';

/** DenToh Care - Dra. Tania. Dentista en Xangari, Morelia */
export const dentohCare: DentistConfig = {
  name: 'DenToh Care',
  category: 'Dentista',
  address: 'Cto. Uacusecha 1208, Xangari, 58089 Morelia, Mich.',
  phone: '443 386 1743',
  whatsapp: '5214433861743',
  email: undefined,
  rating: 5,
  totalReviews: 21,
  hasWebsite: true,
  foundedYear: undefined,

  brand: {
    tone: 'familiar',
    primaryColor: '#004D8C',
    secondaryColor: '#00A2C6',
    accentColor: '#4DC0D8',
    fontStyle: 'modern',
    darkMode: true,
  },

  social: {
    instagram: 'https://instagram.com/dentohcare',
  },

  hero: {
    slogan: 'Excelente atención, profesional y con mucha paciencia.',
    subtext: 'La Dra. Tania te explica todo muy bien, tiene un trato amable y está al pendiente de tu recuperación. Consultorio cómodo en Xangari, Morelia.',
    ctaPrimary: 'Agendar cita',
    ctaSecondary: 'Conocer más',
    backgroundImage: undefined,
  },

  about: {
    title: 'Acerca de DenToh Care',
    description: 'Consultorio dental en Xangari, Morelia. La Dra. Tania ofrece atención profesional, con paciencia y sensibilidad. Te explica con detalle los procedimientos, resuelve tus dudas y da seguimiento a tu recuperación. Ambiente cómodo y trato que te hace sentir a gusto.',
    highlights: [
      { title: '5.0', description: 'Valoración' },
      { title: '21', description: 'Opiniones' },
      { title: 'Profesional', description: 'Y con paciencia' },
      { title: 'Atención domingo', description: 'Cuando lo necesites' },
    ],
  },

  services: [
    { name: 'Limpieza dental', description: 'Profilaxis y revisión completa' },
    { name: 'Restauraciones', description: 'Resinas y tratamientos conservadores' },
    { name: 'Revisión y diagnóstico', description: 'Explicación clara de procedimientos y opciones' },
    { name: 'Extracciones', description: 'Incluyendo muelas del juicio' },
    { name: 'Seguimiento', description: 'Al pendiente de tu recuperación después de cada cita' },
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
    Lunes: { open: '09:00', close: '20:00' },
    Martes: { open: '09:00', close: '20:00' },
    Miércoles: { open: '09:00', close: '20:00' },
    Jueves: { open: '09:00', close: '20:00' },
    Viernes: { open: '09:00', close: '20:00' },
    Sábado: { open: '09:00', close: '14:00' },
    Domingo: { open: '09:00', close: '14:00' },
  },

  plans: [
    {
      name: 'Limpieza dental',
      price: 450,
      period: 'sesión',
      features: ['Limpieza profesional', 'Revisión general'],
      ctaText: 'Agendar',
    },
    {
      name: 'Consulta y valoración',
      price: 350,
      period: 'consulta',
      features: ['Exploración', 'Diagnóstico', 'Opciones de tratamiento'],
      highlighted: true,
      ctaText: 'Reservar',
    },
  ],

  testimonials: [
    {
      name: 'Nadia W. Rodriguez',
      rating: 5,
      text: 'Muy recomendable la atención, la doctora tiene mucha paciencia y un excelente trato, es sensible y profesional. Regresaría 100%.',
      date: 'Hace 5 meses',
    },
    {
      name: 'Citlaly Vazquez',
      rating: 5,
      text: 'Excelente atención de la Dra. Tania, su trato es muy amable y profesional ya que te explica con detalle los procedimientos, resuelve cualquier duda y está al pendiente de la recuperación después de las citas. Súper recomendados sus servicios.',
      date: 'Hace 10 meses',
    },
    {
      name: 'Miriam Orozco Pérez',
      rating: 5,
      text: 'Excelente atención por parte de la Dra. Tania, odio ir al dentista pero sin duda me hizo sentir a gusto, cero dolor y su consultorio muy cómodo.',
      date: 'Hace un año',
    },
    {
      name: 'Paciente',
      rating: 5,
      text: 'Excelente Dra muy profesional, explica todo muy bien y tiene mucha paciencia.',
    },
    {
      name: 'Paciente',
      rating: 5,
      text: 'Me gustó mucho ser atendido por la Dra.',
    },
    {
      name: 'Paciente',
      rating: 5,
      text: 'Gracias por atenderme en domingo, fue un alivio encontrarla.',
    },
  ],

  doctors: [
    {
      name: 'Dra. Tania',
      specialty: 'Odontología general',
      bio: 'Profesional con trato amable y mucha paciencia. Explica con detalle los procedimientos, resuelve dudas y está al pendiente de la recuperación de cada paciente. Consultorio cómodo en Xangari, Morelia.',
    },
  ],

  facilities: {
    images: [],
    features: [
      'Consultorio cómodo',
      'Atención con paciencia y profesionalismo',
      'Explicación detallada de procedimientos',
      'Seguimiento post-tratamiento',
    ],
  },

  proposals: [],

  location: {
    lat: 19.6743,
    lng: -101.219,
    mapZoom: 16,
    googleMapsUrl: 'https://www.google.com/maps?q=Cto.+Uacusecha+1208,+Xangari,+58089+Morelia,+Mich.',
  },

  sections: {
    hero: { enabled: true, variant: 'gradient' },
    about: { enabled: true, variant: 'default' },
    services: { enabled: true, variant: 'cards' },
    doctors: { enabled: true, variant: 'cards' },
    testimonials: { enabled: true, variant: 'carousel' },
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
    siteUrl: 'https://dentohcare.com',
    keywords: ['dentista Morelia', 'DenToh Care', 'dentista Xangari', 'Dra. Tania', 'odontología Morelia'],
    ogImage: '/opengraph-image',
    locale: 'es_MX',
    geoRegion: 'MX-MIC',
  },
};
