import type { DentistConfig } from 'kadesh/config/types';

/** Dra. Nayeli Herrera - Dentista en Leona Vicario, Morelia */
export const nayeliHerrera: DentistConfig = {
  name: 'Dra. Nayeli Herrera',
  category: 'Dentista',
  address: 'J. Cristino González 47, Leona Vicario, 58080 Morelia, Michoacán',
  phone: '443 841 4096',
  whatsapp: '5214438414096',
  email: undefined,
  rating: 5,
  totalReviews: 22,
  hasWebsite: true,
  foundedYear: undefined,

  brand: {
    tone: 'familiar',
    primaryColor: '#2C4354',
    secondaryColor: '#6D8C9C',
    accentColor: '#8BA8B8',
    fontStyle: 'modern',
    darkMode: true,
  },

  social: {
    facebook: 'https://facebook.com/nayeliherreradentista',
  },

  hero: {
    slogan: 'Excelente servicio de odontología, profesional y responsable.',
    subtext: 'Calidad humana, claridad al explicar los procesos y costos razonables. La Dra. Nayeli es estética y cuidadosa con cada paciente. Odontología en Leona Vicario, Morelia.',
    ctaPrimary: 'Agendar cita',
    ctaSecondary: 'Conocer más',
    backgroundImage: undefined,
  },

  about: {
    title: 'Acerca de la Dra. Nayeli Herrera',
    description: 'Consultorio dental en Leona Vicario, Morelia. La Dra. Nayeli Herrera ofrece atención profesional y amable: explica con claridad los tratamientos, cuida cada detalle del trabajo y hace que la visita al dentista sea cómoda. Costos razonables y trato cercano con niños y adultos.',
    highlights: [
      { title: '5.0', description: 'Valoración' },
      { title: '22', description: 'Opiniones' },
      { title: 'Costos razonables', description: 'Y calidad' },
      { title: 'Odontopediatría', description: 'Niños y familias' },
    ],
  },

  services: [
    { name: 'Limpieza dental', description: 'Profilaxis y revisión completa' },
    { name: 'Restauraciones', description: 'Trabajo estético y cuidadoso' },
    { name: 'Revisión y diagnóstico', description: 'Explicación clara de procesos y opciones' },
    { name: 'Odontopediatría', description: 'Atención para niños y familias' },
    { name: 'Tratamientos generales', description: 'Atención profesional y responsable' },
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
      price: 450,
      period: 'sesión',
      features: ['Limpieza profesional', 'Revisión general'],
      ctaText: 'Agendar',
    },
    {
      name: 'Consulta y valoración',
      price: 350,
      period: 'consulta',
      features: ['Exploración', 'Diagnóstico', 'Explicación de opciones'],
      highlighted: true,
      ctaText: 'Reservar',
    },
  ],

  testimonials: [
    {
      name: 'Selena Medina',
      rating: 5,
      text: 'Una excelente doctora. Tiene mucha calidad humana para llevar los tratamientos, así como claridad al explicar los procesos. Los costos son razonables y es demasiado estética y cuidadosa con los pacientes. Yo estoy quedando encantada.',
      date: 'Hace 3 semanas',
    },
    {
      name: 'Lily V. Franco',
      rating: 5,
      text: 'Muy profesional y amable, ya llevamos algunos años con ella, mis hijas son sus pacientes y hemos estado con ella algunos años ya.',
      date: 'Hace un mes',
    },
    {
      name: 'Ana',
      rating: 5,
      text: 'Es muy buena tratando a las personas y es muy cuidadosa con su trabajo, es muy agradable ir con ella. Ir con el dentista me ponía nerviosa pero ha sido muy cómodo ir con la dentista Nay, también muy rápido.',
      date: 'Hace 9 meses',
    },
    {
      name: 'Paciente',
      rating: 5,
      text: 'Excelente servicio de odontología, es una doctora profesional y responsable.',
    },
    {
      name: 'Paciente',
      rating: 5,
      text: 'Excelente dentista y muy buena atención.',
    },
    {
      name: 'Paciente',
      rating: 5,
      text: 'Los costos son razonables y es demasiado estética y cuidadosa con los pacientes.',
    },
  ],

  doctors: [
    {
      name: 'Dra. Nayeli Herrera',
      specialty: 'Odontología general y estética',
      bio: 'Profesional con calidad humana, claridad al explicar los procesos y trato cuidadoso. Atiende a niños y adultos; hace que la visita al dentista sea cómoda. Consultorio en Leona Vicario, Morelia.',
    },
  ],

  facilities: {
    images: [],
    features: [
      'Consultorio en Leona Vicario',
      'Atención estética y cuidadosa',
      'Explicación clara de tratamientos',
      'Odontopediatría y familias',
    ],
  },

  proposals: [],

  location: {
    lat: 19.696,
    lng: -101.19,
    mapZoom: 16,
    googleMapsUrl: 'https://www.google.com/maps?q=J.+Cristino+Gonz%C3%A1lez+47,+Leona+Vicario,+58080+Morelia,+Mich.',
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
    siteUrl: 'https://nayeliherrera-dentista.com',
    keywords: ['dentista Morelia', 'Dra. Nayeli Herrera', 'dentista Leona Vicario', 'odontología Morelia', 'dentista Nayeli'],
    ogImage: '/opengraph-image',
    locale: 'es_MX',
    geoRegion: 'MX-MIC',
  },
};
