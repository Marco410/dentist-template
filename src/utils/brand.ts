import type { BrandConfig, BrandTone } from 'kadesh/config/types';

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return '0 0 0';
  return `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}`;
}

function lighten(hex: string, amount: number): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return hex;
  const r = Math.min(255, parseInt(result[1], 16) + amount);
  const g = Math.min(255, parseInt(result[2], 16) + amount);
  const b = Math.min(255, parseInt(result[3], 16) + amount);
  return `${r} ${g} ${b}`;
}

interface TonePreset {
  borderRadius: string;
  animationSpeed: string;
  fontWeight: string;
  letterSpacing: string;
  headingTransform: string;
}

const tonePresets: Record<BrandTone, TonePreset> = {
  premium: {
    borderRadius: '1rem',
    animationSpeed: '0.5s',
    fontWeight: '600',
    letterSpacing: '0.02em',
    headingTransform: 'none',
  },
  familiar: {
    borderRadius: '1.25rem',
    animationSpeed: '0.4s',
    fontWeight: '700',
    letterSpacing: '0',
    headingTransform: 'none',
  },
  boutique: {
    borderRadius: '0.75rem',
    animationSpeed: '0.6s',
    fontWeight: '500',
    letterSpacing: '0.05em',
    headingTransform: 'none',
  },
  minimalista: {
    borderRadius: '0.25rem',
    animationSpeed: '0.4s',
    fontWeight: '400',
    letterSpacing: '0.03em',
    headingTransform: 'none',
  },
};

/** Generates CSS custom properties from brand config */
export function getBrandCSSVariables(brand: BrandConfig): Record<string, string> {
  const preset = tonePresets[brand.tone];
  const isDark = brand.darkMode ?? true;

  return {
    '--color-primary-rgb': hexToRgb(brand.primaryColor),
    '--color-secondary-rgb': hexToRgb(brand.secondaryColor),
    '--color-accent-rgb': hexToRgb(brand.accentColor),
    '--color-surface-rgb': isDark ? lighten(brand.primaryColor, 15) : '255 255 255',
    '--color-surface-alt-rgb': isDark ? lighten(brand.primaryColor, 30) : '245 245 245',
    '--color-on-primary-rgb': isDark ? '255 255 255' : '17 17 17',
    '--color-on-surface-rgb': isDark ? '230 230 230' : '30 30 30',
    '--color-muted-rgb': isDark ? '160 160 160' : '120 120 120',
    '--radius-brand': preset.borderRadius,
    '--animation-speed': preset.animationSpeed,
    '--font-weight-heading': preset.fontWeight,
    '--letter-spacing-heading': preset.letterSpacing,
    '--heading-transform': preset.headingTransform,
  };
}
