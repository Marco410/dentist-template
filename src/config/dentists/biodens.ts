import type { DentistConfig } from 'kadesh/config/types';

/** Biodens Estudio Dental - Tus Dentistas de Confianza en Morelia */
export const biodens: DentistConfig = {
  name: 'Biodens Estudio Dental',
  category: 'Dentistas',
  address: 'C. Paseo del Pino 148, Planta Alta, Prados Verdes, 58110 Morelia, Mich., México',
  phone: '443 562 2834',
  whatsapp: '5214435622834',
  email: undefined,
  rating: 5,
  totalReviews: 110,
  hasWebsite: true,
  foundedYear: undefined,

  brand: {
    tone: 'familiar',
    primaryColor: '#0f172a',
    secondaryColor: '#0ea5e9',
    accentColor: '#06b6d4',
    fontStyle: 'modern',
    darkMode: true,
  },

  social: {},

  hero: {
    slogan: 'Tus dentistas de confianza en Morelia.',
    subtext: 'Clínica dental líder en Diseño de Sonrisa, Ortodoncia y Odontopediatría. Más de 12 años de experiencia y cientos de pacientes satisfechos. ¡Ven a conocernos!',
    ctaPrimary: 'Agendar cita',
    ctaSecondary: 'Conocer más',
    backgroundImage: undefined,
  },

  about: {
    title: 'Tu clínica dental de confianza en Morelia',
    description: 'Queremos ser tu clínica dental de confianza. Biodens está reconocida a nivel local y regional por sus altos estándares de profesionalidad. Estamos en Morelia, cerca de ti: expertos dentistas con comunicación cercana, próxima y honesta. Tu salud dental es nuestra prioridad; creemos que la salud es una tarea compartida y estamos comprometidos contigo. Contamos con limpieza dental con ultrasonido, cita de bioexploración y diagnóstico con cámara intraoral, y sillón dental con sistema de masaje opcional.',
    highlights: [
      { title: '12+', description: 'Años de experiencia' },
      { title: '5', description: 'Valoración' },
      { title: '110+', description: 'Reseñas' },
      { title: 'Servicio personalizado', description: 'Adaptado a ti' },
    ],
  },

  services: [
    { name: 'Limpieza dental', description: 'Limpieza dental con ultrasonido. Realízala al menos cada 6 meses.' },
    { name: 'Blanqueamiento dental', description: 'Aclara tu sonrisa a un tono más agradable y estético.' },
    { name: 'Ortodoncia (brackets)', description: 'Alineamos tus dientes por medio de brackets para la sonrisa que siempre has deseado.' },
    { name: 'Odontopediatría', description: 'Atención especializada para los peques; el dentista como su amigo.' },
    { name: 'Diseño de sonrisa', description: 'Sonrisa ideal según tu fisionomía, personalizada a la imagen y confianza que deseas proyectar.' },
    { name: 'Prótesis e implantes', description: 'Restauración funcional y estética con acompañamiento durante todo el proceso.' },
  ],

  features: {
    bookingSystem: false,
    onlinePayments: true,
    whatsappButton: true,
    googleMaps: true,
    newsletter: false,
    reviews: true,
    emergencyLine: false,
  },

  schedule: {
    Lunes: { open: '10:00', close: '19:30' },
    Martes: { open: '10:00', close: '19:30' },
    Miércoles: { open: '10:00', close: '19:30' },
    Jueves: { open: '10:00', close: '19:30' },
    Viernes: { open: '10:00', close: '19:30' },
    Sábado: { open: '10:00', close: '14:30' },
    Domingo: { open: '09:00', close: '14:00', closed: true },
  },

  plans: [
    {
      name: 'Limpieza dental',
      price: 500,
      period: 'sesión',
      features: ['Limpieza con ultrasonido', 'Revisión'],
      ctaText: 'Agendar',
    },
    {
      name: 'Bioexploración y diagnóstico',
      price: 450,
      period: 'consulta',
      features: ['Cámara intraoral', 'Diagnóstico claro y visual'],
      highlighted: true,
      ctaText: 'Reservar',
    },
    {
      name: 'Blanqueamiento',
      price: 3500,
      period: 'tratamiento',
      features: ['Sesión en consultorio', 'Seguimiento'],
      ctaText: 'Consultar',
    },
  ],

  testimonials: [
    {
      name: 'Georgina Ruiz',
      rating: 5,
      text: 'Exelentes Dentistas, los recomiendo ampliamente. Son muy éticos en su profesión con alto grado de humanismo y empatía. De todos los dentistas que he conocido, los han superado en todos los aspectos.',
    },
    {
      name: 'Susana Perez Rodriguez',
      rating: 5,
      text: 'La atención excelente, la calidad del material súper bien......amables en todo momento.',
    },
    {
      name: 'Enrique Urrutia',
      rating: 5,
      text: 'Excelente servicio, nosotros llegamos por primera vez para atender a nuestro hijo, pero ahora ya es el lugar donde nos atendemos toda la familia, super confiables y muy profesionales. Recomendado!!',
    },
    {
      name: 'Paulina Michelle Béjar López',
      rating: 5,
      text: 'Excelente servicio, buenas instalaciones, me gusta que cuentan con los servicios ahí mismo.',
    },
    {
      name: 'Cristina Carmona',
      rating: 5,
      text: 'Excelente servicio, el personal es muy atento y amable, la atención además de aclarar dudas de los procedimientos son muy detallistas y pacientes al realizar los tratamientos que uno requiere. Estoy muy satisfecha con los trabajos de restauración que me han realizado y sin duda lo recomiendo.',
    },
  ],

  doctors: [
    {
      name: 'Dr. Javier Guillén',
      specialty: 'Prótesis e Implantes / Diseño de Sonrisa',
      bio: 'Cirujano dentista, especialista en prótesis e implantología, miembro activo del International Team for Implantology (ITI) y director clínico de Biodens Estudio Dental en Morelia, Michoacán. Su práctica se basa en un diagnóstico claro y visual, que permite al paciente comprender su situación y elegir el tratamiento más adecuado. Cada caso sigue una ruta clínica bien definida, con acompañamiento y seguimiento durante todo el proceso, buscando resultados funcionales, estéticos y duraderos.',
    },
    {
      name: 'Dra. Jessica Mora',
      specialty: 'Ortodoncista / Diplomado en Odontopediatría',
      bio: 'Cirujana dentista, enfocada en ortodoncia y odontopediatría, con más de 10 años de experiencia atendiendo niños, adolescentes y adultos en Biodens Estudio Dental, en Morelia, Michoacán. Su formación en ortodoncia bajo la metodología FACE busca mejorar la mordida y la función. Se distingue por su trato cercano y paciente, especialmente con niños, y por acompañar de forma clara y constante a cada paciente durante su tratamiento.',
    },
    {
      name: 'Dra. Ana Sarahí Torres Reyes',
      specialty: 'Prótesis dental',
      bio: 'Cirujano dentista egresada de la Universidad Latina de América, parte del equipo clínico de Biodens Estudio Dental. Diplomado en prótesis dental con enfoque clínico. Profesional dedicada, detallista y comprometida con la buena atención al paciente, con planeación clara y cuidadosa en cada tratamiento.',
    },
  ],

  facilities: {
    images: [],
    features: [
      'Limpieza dental con ultrasonido',
      'Cámara intraoral para diagnóstico',
      'Sillón dental con sistema de masaje opcional',
      'Aceptamos tarjetas',
      'Planta alta, Prados Verdes',
      'L-V 10:00-14:00 y 18:00-19:30, Sáb 10:00-14:30',
    ],
  },

  proposals: [],

  location: {
    lat: 19.682,
    lng: -101.175,
    mapZoom: 16,
    googleMapsUrl: 'https://maps.google.com/?q=Paseo+del+Pino+148+Prados+Verdes+Morelia',
  },

  sections: {
    hero: { enabled: true, variant: 'gradient' },
    about: { enabled: true, variant: 'default' },
    services: { enabled: true, variant: 'cards' },
    doctors: { enabled: true, variant: 'cards' },
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
    keywords: ['dentistas Morelia', 'Biodens', 'ortodoncia Morelia', 'diseño de sonrisa', 'odontopediatría Morelia', 'Prados Verdes'],
    ogImage: '/opengraph-image',
    locale: 'es_MX',
    geoRegion: 'MX-MIC',
  },
};
