import { cn } from 'kadesh/utils/cn';
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  glow?: boolean;
  className?: string;
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' };

type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-secondary text-white hover:brightness-110 active:brightness-90',
  secondary:
    'bg-accent text-primary hover:brightness-110 active:brightness-90',
  outline:
    'border-2 border-secondary text-secondary hover:bg-secondary hover:text-white',
  ghost:
    'text-on-primary hover:bg-white/10',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    glow = false,
    className,
    as = 'button',
    ...rest
  } = props;

  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-brand font-bold',
    'transition-all duration-300 ease-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary',
    variantClasses[variant],
    sizeClasses[size],
    glow && variant === 'primary' && 'animate-pulse-glow',
    className,
  );

  if (as === 'a') {
    const { as: _, variant: _v, size: _s, glow: _g, ...anchorProps } = props as ButtonAsAnchor;
    return <a className={classes} {...anchorProps} />;
  }

  const { as: _, variant: _v, size: _s, glow: _g, ...buttonProps } = props as ButtonAsButton;
  return <button className={classes} {...buttonProps} />;
}
