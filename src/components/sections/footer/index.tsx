import { dentistConfig } from 'kadesh/config';
import { FooterDefault } from './FooterDefault';
import { FooterExpanded } from './FooterExpanded';
import { FooterVariant } from 'kadesh/config/types';

const variants: Record<FooterVariant, React.ComponentType> = {
  default: FooterDefault,
  expanded: FooterExpanded,
};

export function FooterSection() {
  const { footer } = dentistConfig.sections;
  if (!footer.enabled) return null;

  const Variant = variants[footer.variant] ?? FooterDefault;
  return <Variant />;
}
