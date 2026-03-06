import { dentistConfig } from 'kadesh/config';
import { SectionWrapper, SectionHeading } from 'kadesh/components/shared';
import { cn } from 'kadesh/utils/cn';
import { ProposalStatus } from 'kadesh/config/types';

const statusConfig: Record<ProposalStatus, { label: string; className: string }> = {
  done: {
    label: 'Implementado',
    className: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  },
  'in-progress': {
    label: 'En desarrollo',
    className: 'bg-orange-500/15 text-orange-400 border-orange-500/30',
  },
  planned: {
    label: 'Propuesta',
    className: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
  },
};

const iconPaths: Record<string, string> = {
  membership: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
  calendar: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  trainers: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  progress: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  nutrition: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  app: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
  shop: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
  loyalty: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
  default: 'M13 10V3L4 14h7v7l9-11h-7z',
};

function ProposalIcon({ icon }: { icon?: string }) {
  const path = iconPaths[icon ?? 'default'] ?? iconPaths.default;
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
      </svg>
    </div>
  );
}

function StatusBadge({ status }: { status: ProposalStatus }) {
  const config = statusConfig[status];
  return (
    <span className={cn('inline-flex rounded-full border px-3 py-1 text-xs font-semibold', config.className)}>
      {config.label}
    </span>
  );
}

export function ProposalsFeatured() {
  const proposals = dentistConfig.proposals;
  if (!proposals?.length) return null;

  const [featured, ...rest] = proposals;

  return (
    <SectionWrapper id="proposals">
      <div className="mb-12 text-center">
        <span className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-bold tracking-[0.15em] text-accent">
          PROPUESTAS DE DESARROLLO
        </span>
        <SectionHeading
          title="Lo que podemos construir juntos"
          subtitle={`Estas son funcionalidades que se pueden implementar para llevar a ${dentistConfig.name} al siguiente nivel digital.`}
          className="mb-0"
        />
      </div>

      {/* Featured proposal */}
      <div className="mb-6 grid overflow-hidden rounded-brand border border-white/10 bg-surface/50 md:grid-cols-2">
        <div
          className="relative min-h-[220px] bg-cover bg-center"
          style={{
            background: featured.image
              ? `url(${featured.image}) center/cover`
              : `linear-gradient(135deg, rgb(var(--color-surface-alt-rgb)), rgb(var(--color-surface-rgb)))`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/80 md:block hidden" />
        </div>
        <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <ProposalIcon icon={featured.icon} />
            <StatusBadge status={featured.status} />
          </div>
          <h3 className="text-xl font-bold text-on-primary sm:text-2xl">
            {featured.title}
          </h3>
          <p className="text-muted">{featured.description}</p>
          {featured.link && (
            <a
              href={featured.link}
              className="group inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-accent/80"
            >
              Ver detalles
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </a>
          )}
        </div>
      </div>

      {/* Grid of remaining proposals */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((proposal) => (
          <div
            key={proposal.title}
            className="group overflow-hidden rounded-brand border border-white/10 bg-surface/50 transition-all hover:border-white/20 hover:bg-surface"
          >
            <div
              className="relative h-40 bg-cover bg-center"
              style={{
                background: proposal.image
                  ? `url(${proposal.image}) center/cover`
                  : `linear-gradient(135deg, rgb(var(--color-surface-alt-rgb)) 0%, rgb(var(--color-surface-rgb)) 100%)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
              <div className="absolute left-3 top-3">
                <ProposalIcon icon={proposal.icon} />
              </div>
              <div className="absolute right-3 top-3">
                <StatusBadge status={proposal.status} />
              </div>
            </div>
            <div className="p-5">
              <h3 className="mb-2 font-bold text-on-primary">
                {proposal.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {proposal.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-muted/60">
        Cada funcionalidad se desarrolla a la medida de las necesidades del consultorio.
      </p>
    </SectionWrapper>
  );
}
