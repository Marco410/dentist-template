import { dentistConfig } from 'kadesh/config';
import { ProposalsFeatured } from './ProposalsFeatured';
import { ProposalsGrid } from './ProposalsGrid';
import { ProposalsVariant } from 'kadesh/config/types';

const variants: Record<ProposalsVariant, React.ComponentType> = {
  featured: ProposalsFeatured,
  grid: ProposalsGrid,
};

export function ProposalsSection() {
  const { proposals } = dentistConfig.sections;
  if (!proposals.enabled) return null;
  if (!dentistConfig.proposals?.length) return null;

  const Variant = variants[proposals.variant] ?? ProposalsFeatured;
  return <Variant />;
}
