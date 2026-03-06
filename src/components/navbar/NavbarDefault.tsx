'use client';

import { useState, useEffect } from 'react';
import { dentistConfig } from 'kadesh/config';
import { Button } from 'kadesh/components/shared';
import { cn } from 'kadesh/utils/cn';

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Nosotros', href: '#about' },
  { label: 'Servicios', href: '#services' },
  { label: 'Doctores', href: '#doctors' },
  { label: 'Testimonios', href: '#testimonials' },
  { label: 'Precios', href: '#pricing' },
  { label: 'Horarios', href: '#schedule' },
  { label: 'Instalaciones', href: '#facilities' },
  { label: 'Ubicación', href: '#location' },
];

export function NavbarDefault() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const activeLinks = navLinks.filter((link) => {
    const sectionId = link.href.replace('#', '');
    const sectionConfig = dentistConfig.sections[sectionId as keyof typeof dentistConfig.sections] as { enabled: boolean } | undefined;
    return !sectionConfig || sectionConfig.enabled;
  });

  return (
    <nav
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'border-b border-white/10 bg-primary/90 py-3 backdrop-blur-lg'
          : 'bg-transparent py-5',
      )}
    >
      <div className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="text-xl font-bold text-on-primary sm:text-2xl">
          <span className="text-secondary">{dentistConfig.name.split(' ')[0]}</span>
          {' '}
          <span className="hidden sm:inline">
            {dentistConfig.name.split(' ').slice(1).join(' ')}
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {activeLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-brand px-3 py-2 text-sm text-on-primary/80 transition-colors hover:bg-white/10 hover:text-on-primary"
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" className="ml-3">
            {dentistConfig.hero.ctaPrimary}
          </Button>
        </div>

        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-brand text-on-primary lg:hidden"
          aria-label="Menú"
          aria-expanded={isMobileOpen}
        >
          <div className="space-y-1.5">
            <span
              className={cn(
                'block h-0.5 w-6 bg-current transition-transform duration-300',
                isMobileOpen && 'translate-y-2 rotate-45',
              )}
            />
            <span
              className={cn(
                'block h-0.5 w-6 bg-current transition-opacity duration-300',
                isMobileOpen && 'opacity-0',
              )}
            />
            <span
              className={cn(
                'block h-0.5 w-6 bg-current transition-transform duration-300',
                isMobileOpen && '-translate-y-2 -rotate-45',
              )}
            />
          </div>
        </button>
      </div>

      <div
        className={cn(
          'fixed inset-0 top-0 bg-primary/98 backdrop-blur-xl transition-all duration-300 lg:hidden',
          isMobileOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0',
        )}
      >
        <div className="flex h-full flex-col items-center justify-center gap-6">
          {activeLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="text-2xl font-bold text-on-primary transition-colors hover:text-secondary"
            >
              {link.label}
            </a>
          ))}
          <Button size="lg" className="mt-4" onClick={() => setIsMobileOpen(false)}>
            {dentistConfig.hero.ctaPrimary}
          </Button>
        </div>
      </div>
    </nav>
  );
}
