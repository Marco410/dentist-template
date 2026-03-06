import { dentistConfig } from 'kadesh/config';
import type { DoctorsVariant } from 'kadesh/config/types';
import { DoctorsCards } from './DoctorsCards';
import { DoctorsCarousel } from './DoctorsCarousel';

const variants: Record<DoctorsVariant, React.ComponentType> = {
  cards: DoctorsCards,
  carousel: DoctorsCarousel,
};

export function DoctorsSection() {
  const { doctors } = dentistConfig.sections;
  if (!doctors.enabled) return null;

  const Variant = variants[doctors.variant] ?? DoctorsCards;
  return <Variant />;
}
