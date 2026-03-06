import type { Metadata } from 'next';
import type { DentistConfig } from 'kadesh/config/types';

function extractCity(address: string): string {
  const match = address.match(/(\d{5})\s+([^,]+)/);
  return match?.[2]?.trim() ?? address.split(',').slice(-2, -1)[0]?.trim() ?? '';
}

function buildTitle(config: DentistConfig, city: string): string {
  return (
    config.seo?.titleTemplate ??
    `${config.category} en ${city} | ${config.name} | ${config.services
      .slice(0, 2)
      .map((s) => s.name)
      .join(' y ')}`
  );
}

function buildDescription(config: DentistConfig): string {
  const serviceList = config.services.map((s) => s.name).join(', ');
  return `${config.name} — ${config.hero.subtext} ${serviceList}. ${config.address}. Tel: ${config.phone}`;
}

export function generateMetadata(config: DentistConfig): Metadata {
  const city = extractCity(config.address);
  const siteUrl = config.seo?.siteUrl;
  const title = buildTitle(config, city);
  const description = buildDescription(config);
  const locale = config.seo?.locale ?? 'es_MX';
  const geoRegion = config.seo?.geoRegion ?? 'MX-MIC';

  const keywords = config.seo?.keywords ?? [
    `${config.category.toLowerCase()} ${city.toLowerCase()}`,
    config.name.toLowerCase(),
    ...config.services.map((s) => s.name.toLowerCase()),
  ];

  const ogImage = config.seo?.ogImage ?? '/opengraph-image';

  return {
    ...(siteUrl && { metadataBase: new URL(siteUrl) }),
    title,
    description,
    keywords: keywords.join(', '),
    ...(siteUrl && {
      alternates: {
        canonical: siteUrl,
      },
    }),
    openGraph: {
      title,
      description,
      type: 'website',
      locale,
      siteName: config.name,
      ...(siteUrl && { url: siteUrl }),
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${config.name} — ${config.category} en ${city}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      ...(config.seo?.twitterHandle && { site: config.seo.twitterHandle }),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'geo.region': geoRegion,
      'geo.placename': city,
    },
  };
}

/** Schema.org markup for a dental business (Dentist / MedicalBusiness). */
export function generateSchemaMarkup(config: DentistConfig) {
  const siteUrl = config.seo?.siteUrl;

  return {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: config.name,
    description: config.about.description,
    ...(siteUrl && { url: siteUrl }),
    image: config.seo?.ogImage ?? (siteUrl ? `${siteUrl}/opengraph-image` : undefined),
    address: {
      '@type': 'PostalAddress',
      streetAddress: config.address,
    },
    telephone: config.phone,
    ...(config.email && { email: config.email }),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: config.rating,
      reviewCount: config.totalReviews,
      bestRating: 5,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: config.location.lat,
      longitude: config.location.lng,
    },
    openingHoursSpecification: Object.entries(config.schedule)
      .filter(([, hours]) => !hours.closed)
      .map(([day, hours]) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: day,
        opens: hours.open,
        closes: hours.close,
      })),
    ...(config.plans.length > 0 && {
      priceRange: `$${Math.min(...config.plans.map((p) => p.price))} - $${Math.max(...config.plans.map((p) => p.price))} MXN`,
    }),
    ...(config.social && {
      sameAs: Object.values(config.social).filter(Boolean),
    }),
  };
}
