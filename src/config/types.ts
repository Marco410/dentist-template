/**
 * Dental clinic template – config types.
 * Single source of truth for multi-tenant dentist config and section variants.
 */

// ─── Brand ─────────────────────────────────────────────────────────────────
export type BrandTone = 'premium' | 'familiar' | 'minimalista' | 'boutique';

export interface BrandConfig {
  tone: BrandTone;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  fontStyle?: string;
  darkMode?: boolean;
}

// ─── Social ────────────────────────────────────────────────────────────────
export interface SocialConfig {
  facebook?: string;
  instagram?: string;
  tiktok?: string;
  youtube?: string;
  twitter?: string;
}

// ─── Hero ──────────────────────────────────────────────────────────────────
export interface HeroConfig {
  slogan: string;
  subtext: string;
  ctaPrimary: string;
  ctaSecondary: string;
  backgroundImage?: string;
  backgroundVideo?: string;
}

// ─── About ─────────────────────────────────────────────────────────────────
export interface AboutHighlight {
  title: string;
  description: string;
}

export interface AboutConfig {
  title: string;
  description: string;
  highlights: AboutHighlight[];
  images?: string[];
}

// ─── Services (tratamientos) ────────────────────────────────────────────────
export interface ServiceItem {
  name: string;
  description: string;
}

// ─── Features (flags) ──────────────────────────────────────────────────────
export interface FeaturesConfig {
  bookingSystem?: boolean;
  onlinePayments?: boolean;
  whatsappButton?: boolean;
  googleMaps?: boolean;
  newsletter?: boolean;
  reviews?: boolean;
  emergencyLine?: boolean;
}

// ─── Schedule ───────────────────────────────────────────────────────────────
export interface DayHours {
  open: string;
  close: string;
  closed?: boolean;
}

export type ScheduleConfig = Record<string, DayHours>;

// ─── Pricing / Plans ────────────────────────────────────────────────────────
export interface PlanItem {
  name: string;
  price: number;
  period: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
}

// ─── Testimonials ──────────────────────────────────────────────────────────
export interface TestimonialItem {
  name: string;
  rating: number;
  text: string;
  image?: string;
  date?: string;
}

// ─── Doctors ────────────────────────────────────────────────────────────────
export interface DoctorItem {
  name: string;
  specialty: string;
  image?: string;
  bio?: string;
  social?: Partial<SocialConfig>;
}

// ─── Facilities ────────────────────────────────────────────────────────────
export interface FacilitiesConfig {
  images: string[];
  features: string[];
}

// ─── Proposals ─────────────────────────────────────────────────────────────
export type ProposalStatus = 'done' | 'in-progress' | 'planned';

export interface ProposalItem {
  title: string;
  description: string;
  status: ProposalStatus;
  icon?: string;
  image?: string;
  link?: string;
}

// ─── Location ─────────────────────────────────────────────────────────────
export interface LocationConfig {
  lat: number;
  lng: number;
  mapZoom?: number;
  googleMapsUrl?: string;
}

// ─── SEO ──────────────────────────────────────────────────────────────────
export interface SeoConfig {
  siteUrl?: string;
  titleTemplate?: string;
  keywords?: string[];
  ogImage?: string;
  twitterHandle?: string;
  locale?: string;
  geoRegion?: string;
}

// ─── Section variant types ────────────────────────────────────────────────
export type HeroVariant = 'image' | 'gradient' | 'minimal' | 'video';
export type AboutVariant = 'default' | 'timeline';
export type ServicesVariant = 'cards' | 'grid' | 'list';
export type DoctorsVariant = 'cards' | 'carousel';
export type TestimonialsVariant = 'carousel' | 'grid';
export type ScheduleVariant = 'table' | 'cards';
export type PricingVariant = 'cards' | 'comparison';
export type LocationVariant = 'split' | 'full';
export type CTAVariant = 'banner' | 'minimal' | 'counter';
export type FooterVariant = 'default' | 'expanded';
export type NewsletterVariant = 'inline' | 'banner';
export type FacilitiesVariant = 'gallery' | 'masonry';
export type ProposalsVariant = 'featured' | 'grid';

export interface SectionConfig<V = string> {
  enabled: boolean;
  variant: V;
}

export interface DentistSectionsConfig {
  hero: SectionConfig<HeroVariant>;
  about: SectionConfig<AboutVariant>;
  services: SectionConfig<ServicesVariant>;
  doctors: SectionConfig<DoctorsVariant>;
  testimonials: SectionConfig<TestimonialsVariant>;
  schedule: SectionConfig<ScheduleVariant>;
  pricing: SectionConfig<PricingVariant>;
  location: SectionConfig<LocationVariant>;
  facilities: SectionConfig<FacilitiesVariant>;
  newsletter: SectionConfig<NewsletterVariant>;
  proposals: SectionConfig<ProposalsVariant>;
  cta: SectionConfig<CTAVariant>;
  footer: SectionConfig<FooterVariant>;
}

// ─── Main config ───────────────────────────────────────────────────────────
export interface DentistConfig {
  name: string;
  category: string;
  address: string;
  phone: string;
  whatsapp?: string;
  email?: string;
  rating: number;
  totalReviews: number;
  hasWebsite?: boolean;
  foundedYear?: number;

  brand: BrandConfig;
  social?: SocialConfig;
  hero: HeroConfig;
  about: AboutConfig;
  services: ServiceItem[];
  features: FeaturesConfig;
  schedule: ScheduleConfig;
  plans: PlanItem[];
  testimonials: TestimonialItem[];
  doctors: DoctorItem[];
  facilities?: FacilitiesConfig;
  proposals?: ProposalItem[];
  location: LocationConfig;
  sections: DentistSectionsConfig;
  seo?: SeoConfig;
}
