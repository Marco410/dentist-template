import { dentistConfig } from 'kadesh/config';
import { AboutDefault } from './AboutDefault';
import { AboutTimeline } from './AboutTimeline';
import { AboutVariant } from 'kadesh/config/types';

const variants: Record<AboutVariant, React.ComponentType> = {
  default: AboutDefault,
  timeline: AboutTimeline,
};

export function AboutSection() {
  const { about } = dentistConfig.sections;
  if (!about.enabled) return null;

  const Variant = variants[about.variant] ?? AboutDefault;
  return <Variant />;
}
