import { dentistConfig } from 'kadesh/config';
import { HeroImage } from './HeroImage';
import { HeroGradient } from './HeroGradient';
import { HeroMinimal } from './HeroMinimal';
import { HeroVideo } from './HeroVideo';
import { HeroVariant } from 'kadesh/config/types';

const variants: Record<HeroVariant, React.ComponentType> = {
  image: HeroImage,
  gradient: HeroGradient,
  minimal: HeroMinimal,
  video: HeroVideo,
};

export function HeroSection() {
  const { hero } = dentistConfig.sections;
  if (!hero.enabled) return null;

  const Variant = variants[hero.variant] ?? HeroGradient;
  return <Variant />;
}
