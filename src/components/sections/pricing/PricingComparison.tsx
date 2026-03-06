import { dentistConfig } from 'kadesh/config';
import { SectionWrapper, SectionHeading, Button } from 'kadesh/components/shared';
import { cn } from 'kadesh/utils/cn';

export function PricingComparison() {
  const allFeatures = Array.from(
    new Set(dentistConfig.plans.flatMap((p) => p.features)),
  );

  return (
    <SectionWrapper id="pricing">
      <SectionHeading
        title="Planes y Precios"
        subtitle="Compara y elige el plan perfecto para ti"
      />

      <div className="mx-auto max-w-5xl overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="p-4 text-left text-sm text-muted">Características</th>
              {dentistConfig.plans.map((plan) => (
                <th
                  key={plan.name}
                  className={cn(
                    'p-4 text-center',
                    plan.highlighted && 'bg-secondary/5',
                  )}
                >
                  <div className="font-bold text-on-primary">{plan.name}</div>
                  <div className="mt-1 text-2xl font-bold text-secondary">
                    ${plan.price.toLocaleString('es-MX')}
                  </div>
                  <div className="text-xs text-muted">/{plan.period}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allFeatures.map((feature, i) => (
              <tr
                key={feature}
                className={cn(
                  'border-b border-white/5',
                  i % 2 === 0 && 'bg-surface/30',
                )}
              >
                <td className="p-4 text-sm text-muted">{feature}</td>
                {dentistConfig.plans.map((plan) => (
                  <td
                    key={plan.name}
                    className={cn(
                      'p-4 text-center',
                      plan.highlighted && 'bg-secondary/5',
                    )}
                  >
                    {plan.features.includes(feature) ? (
                      <svg className="mx-auto h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className="text-muted/30">&mdash;</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td />
              {dentistConfig.plans.map((plan) => (
                <td key={plan.name} className={cn('p-4', plan.highlighted && 'bg-secondary/5')}>
                  <Button
                    variant={plan.highlighted ? 'primary' : 'outline'}
                    className="w-full"
                    size="sm"
                  >
                    {plan.ctaText ?? 'Elegir'}
                  </Button>
                </td>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>
    </SectionWrapper>
  );
}
