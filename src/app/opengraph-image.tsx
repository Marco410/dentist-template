import { ImageResponse } from 'next/og';
import { dentistConfig } from 'kadesh/config';

export const runtime = 'edge';
export const alt = `${dentistConfig.name} — ${dentistConfig.category}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  const { name, category, address, rating, totalReviews, hero, services, brand } = dentistConfig;
  const topServices = services.slice(0, 4).map((s) => s.name);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 70px',
          fontFamily: 'system-ui, sans-serif',
          color: '#ffffff',
          background: `linear-gradient(135deg, ${brand.primaryColor} 0%, ${brand.primaryColor}ee 50%, ${brand.secondaryColor}33 100%)`,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '20px',
              color: brand.accentColor,
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}
          >
            <span>{category}</span>
            <span style={{ color: '#ffffff44' }}>|</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {'★'.repeat(Math.round(rating))} {rating} ({totalReviews} reseñas)
            </span>
          </div>

          <div
            style={{
              fontSize: '64px',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              maxWidth: '900px',
            }}
          >
            {name}
          </div>

          <div
            style={{
              fontSize: '28px',
              color: '#ffffffbb',
              marginTop: '12px',
              maxWidth: '800px',
              lineHeight: 1.3,
            }}
          >
            {hero.slogan}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {topServices.map((service) => (
              <div
                key={service}
                style={{
                  padding: '8px 20px',
                  borderRadius: '8px',
                  border: `1px solid ${brand.secondaryColor}66`,
                  background: `${brand.secondaryColor}1a`,
                  fontSize: '18px',
                  color: brand.secondaryColor,
                }}
              >
                {service}
              </div>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              borderTop: '1px solid #ffffff22',
              paddingTop: '20px',
            }}
          >
            <div style={{ fontSize: '18px', color: '#ffffff88' }}>
              {address}
            </div>
            <div
              style={{
                fontSize: '20px',
                fontWeight: 700,
                color: brand.secondaryColor,
              }}
            >
              {hero.ctaPrimary}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
