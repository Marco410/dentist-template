import { dentistConfig } from 'kadesh/config';
import { LocationSplit } from './LocationSplit';
import { LocationFull } from './LocationFull';
import { LocationVariant } from 'kadesh/config/types';

const variants: Record<LocationVariant, React.ComponentType> = {
  split: LocationSplit,
  full: LocationFull,
};

export function LocationSection() {
  const { location } = dentistConfig.sections;
  if (!location.enabled) return null;

  const Variant = variants[location.variant] ?? LocationSplit;
  return <Variant />;
}
