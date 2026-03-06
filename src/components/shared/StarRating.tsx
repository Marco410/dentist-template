import { cn } from 'kadesh/utils/cn';

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeMap = { sm: 'w-4 h-4', md: 'w-5 h-5', lg: 'w-6 h-6' };

export function StarRating({ rating, maxStars = 5, size = 'md', className }: StarRatingProps) {
  return (
    <div className={cn('flex items-center gap-0.5', className)}>
      {Array.from({ length: maxStars }, (_, i) => {
        const fill = Math.min(1, Math.max(0, rating - i));
        return (
          <svg
            key={i}
            className={cn(sizeMap[size], 'shrink-0')}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id={`star-fill-${i}-${rating}`}>
                <stop offset={`${fill * 100}%`} stopColor="rgb(var(--color-secondary-rgb))" />
                <stop offset={`${fill * 100}%`} stopColor="rgb(var(--color-muted-rgb) / 0.3)" />
              </linearGradient>
            </defs>
            <path
              d="M10 1l2.39 4.84L17.82 6.7l-3.91 3.81.92 5.39L10 13.35l-4.83 2.55.92-5.39L2.18 6.7l5.43-.86L10 1z"
              fill={`url(#star-fill-${i}-${rating})`}
            />
          </svg>
        );
      })}
    </div>
  );
}
