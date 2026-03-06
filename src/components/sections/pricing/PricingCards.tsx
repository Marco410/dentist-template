import { dentistConfig } from 'kadesh/config';
import { SectionWrapper, SectionHeading, Button } from 'kadesh/components/shared';
import { cn } from 'kadesh/utils/cn';

export function PricingCards() {
  return (
    <SectionWrapper id="pricing">
      <SectionHeading
        title="Planes y Precios"
        subtitle="Planes y tratamientos a tu medida"
      />

      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dentistConfig.plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              'relative rounded-brand border p-6 sm:p-8',
              plan.highlighted
                ? 'border-secondary bg-secondary/5 glow-secondary'
                : 'border-white/10 bg-surface/50',
            )}
          >
            {plan.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-4 py-1 text-xs font-bold text-white">
                POPULAR
              </div>
            )}

            <div className="text-center">
              <h3 className="text-lg font-bold text-on-primary">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-on-primary">
                  ${plan.price.toLocaleString('es-MX')}
                </span>
                <span className="text-muted">/{plan.period}</span>
              </div>
            </div>

            <ul className="mt-8 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-muted">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              variant={plan.highlighted ? 'primary' : 'outline'}
              className="mt-8 w-full"
              glow={plan.highlighted}
            >
              {plan.ctaText ?? 'Elegir Plan'}
            </Button>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
