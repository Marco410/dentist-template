import { dentistConfig } from 'kadesh/config';
import type { FacilitiesVariant } from 'kadesh/config/types';
import { FacilitiesGallery } from './FacilitiesGallery';
import { FacilitiesMasonry } from './FacilitiesMasonry';

const variants: Record<FacilitiesVariant, React.ComponentType> = {
  gallery: FacilitiesGallery,
  masonry: FacilitiesMasonry,
};

export function FacilitiesSection() {
  const { facilities } = dentistConfig.sections;
  if (!facilities.enabled) return null;

  const hasFacilities =
    (dentistConfig.facilities?.images?.length ?? 0) > 0 ||
    (dentistConfig.facilities?.features?.length ?? 0) > 0;
  if (!hasFacilities) return null;

  const Variant = variants[facilities.variant] ?? FacilitiesGallery;
  return <Variant />;
}
