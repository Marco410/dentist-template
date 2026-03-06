import type { ReactNode } from 'react';
import { Space_Grotesk, Inter } from 'next/font/google';
import { dentistConfig } from 'kadesh/config';
import { generateMetadata as buildMeta, generateSchemaMarkup } from 'kadesh/utils/seo';
import { getBrandCSSVariables } from 'kadesh/utils/brand';
import { WhatsAppButton } from 'kadesh/components/shared';
import './globals.css';

const heading = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = buildMeta(dentistConfig);

export default function RootLayout({ children }: { children: ReactNode }) {
  const cssVars = getBrandCSSVariables(dentistConfig.brand);
  const schema = generateSchemaMarkup(dentistConfig);

  return (
    <html
      lang="es"
      className={`${heading.variable} ${body.variable}`}
      style={cssVars as React.CSSProperties}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
