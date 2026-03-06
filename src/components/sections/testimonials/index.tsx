import { dentistConfig } from 'kadesh/config';
import type { TestimonialsVariant } from 'kadesh/config/types';
import { TestimonialsCarousel } from './TestimonialsCarousel';
import { TestimonialsGrid } from './TestimonialsGrid';

const variants: Record<TestimonialsVariant, React.ComponentType> = {
  carousel: TestimonialsCarousel,
  grid: TestimonialsGrid,
};

export function TestimonialsSection() {
  const { testimonials } = dentistConfig.sections;
  if (!testimonials.enabled) return null;

  const Variant = variants[testimonials.variant] ?? TestimonialsGrid;
  return <Variant />;
}
