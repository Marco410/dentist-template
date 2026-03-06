import { cn } from 'kadesh/utils/cn';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  gradient?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = 'center',
  gradient = false,
  className,
}: SectionHeadingProps) {
  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={cn('mb-12 space-y-3', alignClass[align], className)}>
      <h2
        className={cn(
          'text-3xl sm:text-4xl md:text-5xl',
          gradient && 'text-gradient',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-base text-muted sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
