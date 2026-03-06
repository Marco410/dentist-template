import { dentistConfig } from 'kadesh/config';
import { NewsletterInline } from './NewsletterInline';
import { NewsletterBanner } from './NewsletterBanner';
import { NewsletterVariant } from 'kadesh/config/types';

const variants: Record<NewsletterVariant, React.ComponentType> = {
  inline: NewsletterInline,
  banner: NewsletterBanner,
};

export function NewsletterSection() {
  const { newsletter } = dentistConfig.sections;
  if (!newsletter.enabled) return null;

  const Variant = variants[newsletter.variant] ?? NewsletterInline;
  return <Variant />;
}
