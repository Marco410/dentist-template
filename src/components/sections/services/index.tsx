import { dentistConfig } from 'kadesh/config';
import { ServicesCards } from './ServicesCards';
import { ServicesGrid } from './ServicesGrid';
import { ServicesList } from './ServicesList';
import { ServicesVariant } from 'kadesh/config/types';

const variants: Record<ServicesVariant, React.ComponentType> = {
  cards: ServicesCards,
  grid: ServicesGrid,
  list: ServicesList,
};

export function ServicesSection() {
  const { services } = dentistConfig.sections;
  if (!services.enabled) return null;

  const Variant = variants[services.variant] ?? ServicesCards;
  return <Variant />;
}
