import { dentistConfig } from 'kadesh/config';
import { CTABanner } from './CTABanner';
import { CTAMinimal } from './CTAMinimal';
import { CTACounter } from './CTACounter';
import { CTAVariant } from 'kadesh/config/types';

const variants: Record<CTAVariant, React.ComponentType> = {
  banner: CTABanner,
  minimal: CTAMinimal,
  counter: CTACounter,
};

export function CTASection() {
  const { cta } = dentistConfig.sections;
  if (!cta.enabled) return null;

  const Variant = variants[cta.variant] ?? CTABanner;
  return <Variant />;
}
