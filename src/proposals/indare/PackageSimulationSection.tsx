import { Users } from 'lucide-react';
import type { SimulationConfig } from './config';

function formatClp(amount: number): string {
  return `$${amount.toLocaleString('es-CL')} CLP`;
}

type PackageSimulationSectionProps = {
  simulation: SimulationConfig;
};

export default function PackageSimulationSection({ simulation }: PackageSimulationSectionProps) {
  const { pricing, userCounts } = simulation;

  const scenarios = userCounts.map((users) => {
    const workspaceTotal = users * pricing.workspacePerLicense;
    const total = workspaceTotal + pricing.domain + pricing.website;

    return {
      users,
      lineItems: [
        {
          label: `Google Workspace (${users} ${users === 1 ? 'licencia' : 'licencias'})`,
          amount: workspaceTotal,
        },
        {
          label: 'Gestión de dominio .cl',
          amount: pricing.domain,
        },
        {
          label: 'Sitio web básico',
          amount: pricing.website,
        },
      ],
      total,
    };
  });

  const tableRows = [
    {
      label: 'Google Workspace (licencias)',
      amounts: scenarios.map((s) => s.lineItems[0].amount),
    },
    {
      label: 'Gestión de dominio .cl',
      amounts: scenarios.map((s) => s.lineItems[1].amount),
    },
    {
      label: 'Sitio web básico',
      amounts: scenarios.map((s) => s.lineItems[2].amount),
    },
  ];

  return (
    <article className="package-simulation-card mt-6 overflow-hidden rounded-2xl border border-primary/20 bg-card/90 shadow-sm backdrop-blur-sm">
      <div className="border-b border-primary/10 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent px-5 py-4 sm:px-6">
        <h3 className="text-lg font-semibold text-foreground">{simulation.title}</h3>
      </div>

      <div className="space-y-6 px-5 py-5 sm:px-6 sm:py-6">
        <p className="leading-relaxed text-muted-foreground">{simulation.intro}</p>

        <div className="package-simulation-cards grid grid-cols-1 gap-4 sm:grid-cols-3">
          {scenarios.map((scenario) => (
            <div
              key={scenario.users}
              className="flex flex-col overflow-hidden rounded-xl border border-border/70 bg-background/70"
            >
              <div className="flex items-center gap-2 border-b border-border/60 bg-primary/5 px-4 py-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Users className="h-4 w-4" aria-hidden="true" />
                </div>
                <p className="font-semibold text-foreground">
                  {scenario.users} {scenario.users === 1 ? 'usuario' : 'usuarios'}
                </p>
              </div>

              <ul className="flex flex-1 flex-col gap-2 px-4 py-4 text-sm">
                {scenario.lineItems.map((item) => (
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
                  {formatClp(scenario.total)}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="package-simulation-table overflow-hidden rounded-xl border border-border/70">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border/70 bg-primary/5">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Concepto</th>
                {scenarios.map((scenario) => (
                  <th key={scenario.users} className="px-4 py-3 text-right font-semibold text-foreground">
                    {scenario.users} {scenario.users === 1 ? 'usuario' : 'usuarios'}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row) => (
                <tr key={row.label} className="border-b border-border/50">
                  <td className="px-4 py-3 leading-snug text-muted-foreground">{row.label}</td>
                  {row.amounts.map((amount, index) => (
                    <td key={`${row.label}-${index}`} className="px-4 py-3 text-right font-medium tabular-nums text-foreground">
                      {formatClp(amount)}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="bg-primary/5">
                <td className="px-4 py-3 font-semibold text-foreground">Total mensual</td>
                {scenarios.map((scenario) => (
                  <td key={`total-${scenario.users}`} className="px-4 py-3 text-right text-base font-bold tabular-nums text-primary">
                    {formatClp(scenario.total)}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs leading-relaxed text-muted-foreground">
          Valores referenciales en CLP, calculados sobre los ítems del paquete. El monto de Google Workspace
          varía según la cantidad de licencias activas; dominio y sitio web se mantienen como costos fijos mensuales.
        </p>
      </div>
    </article>
  );
}
