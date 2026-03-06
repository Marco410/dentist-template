import { dentistConfig } from 'kadesh/config';
import { PricingCards } from './PricingCards';
import { PricingComparison } from './PricingComparison';
import { PricingVariant } from 'kadesh/config/types';

const variants: Record<PricingVariant, React.ComponentType> = {
  cards: PricingCards,
  comparison: PricingComparison,
};

export function PricingSection() {
  const { pricing } = dentistConfig.sections;
  if (!pricing.enabled) return null;

  const Variant = variants[pricing.variant] ?? PricingCards;
  return <Variant />;
}
