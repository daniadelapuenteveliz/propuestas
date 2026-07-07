import type { SimulationConfig } from './config';

function formatClp(amount: number): string {
  return `$${amount.toLocaleString('es-CL')} CLP`;
}

type PackageSimulationSectionProps = {
  simulation: SimulationConfig;
};

export default function PackageSimulationSection({ simulation }: PackageSimulationSectionProps) {
  const { pricing } = simulation;
  const lineItems = [
    {
      label: 'Sitio web básico',
      amount: pricing.website,
    },
  ];

  return (
    <article className="package-simulation-card mt-6 overflow-hidden rounded-2xl border border-primary/20 bg-card/90 shadow-sm backdrop-blur-sm">
      <div className="border-b border-primary/10 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent px-5 py-4 sm:px-6">
        <h3 className="text-lg font-semibold text-foreground">{simulation.title}</h3>
      </div>

      <div className="space-y-6 px-5 py-5 sm:px-6 sm:py-6">
        <p className="leading-relaxed text-muted-foreground">{simulation.intro}</p>

        <div className="package-simulation-cards grid grid-cols-1 gap-4">
          <div className="flex flex-col overflow-hidden rounded-xl border border-border/70 bg-background/70">
            <ul className="flex flex-1 flex-col gap-2 px-4 py-4 text-sm">
              {lineItems.map((item) => (
                <li key={item.label} className="flex flex-col gap-0.5 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                  <span className="leading-snug text-muted-foreground">{item.label}</span>
                  <span className="font-medium tabular-nums text-foreground sm:shrink-0">
                    {formatClp(item.amount)}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex items-center justify-between border-t border-primary/15 bg-primary/5 px-4 py-3">
              <span className="text-sm font-medium text-muted-foreground">Total mensual</span>
              <span className="text-base font-bold tabular-nums text-primary">
                {formatClp(pricing.website)}
              </span>
            </div>
          </div>
        </div>

        <p className="text-xs leading-relaxed text-muted-foreground">
          Valores referenciales en CLP, calculados sobre los ítems del paquete.
        </p>
      </div>
    </article>
  );
}
