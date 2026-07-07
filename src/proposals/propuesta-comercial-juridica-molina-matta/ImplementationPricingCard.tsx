import { Layers, Package, type LucideIcon } from 'lucide-react';

export type PricingLineItem = {
  concept: string;
  includes: string;
  amount: number;
  originalAmount?: number;
};

type ImplementationPricingCardProps = {
  className?: string;
  stageLabel: string;
  implementationItems: PricingLineItem[];
  resourceItems: PricingLineItem[];
  total: number;
};

function formatAmount(amount: number): string {
  return Number.isInteger(amount) ? String(amount) : amount.toFixed(1).replace('.', ',');
}

function formatPrice(amount: number): string {
  return `${formatAmount(amount)} USD/mes`;
}

function LineItemPrice({ amount, originalAmount }: { amount: number; originalAmount?: number }) {
  const hasDiscount = originalAmount != null && originalAmount > amount;
  const discountPercent = hasDiscount
    ? Math.round((1 - amount / originalAmount) * 100)
    : 0;

  if (!hasDiscount) {
    return <span className="font-medium tabular-nums text-foreground">{formatPrice(amount)}</span>;
  }

  return (
    <span className="inline-flex items-center justify-end gap-2">
      <span className="relative">
        <span className="absolute -top-5 right-3 z-10 translate-x-5 whitespace-nowrap rounded-full border border-red-500/50 bg-red-600 px-1.5 py-px text-[7px] font-bold tracking-wide text-white shadow-md">
          {discountPercent}% dcto
        </span>
        <span className="text-sm tabular-nums text-muted-foreground line-through">
          {formatPrice(originalAmount)}
        </span>
      </span>
      <span className="font-medium tabular-nums text-foreground">{formatPrice(amount)}</span>
    </span>
  );
}

function PriceBadge({ amount, size = 'sm' }: { amount: number; size?: 'sm' | 'lg' }) {
  const sizeClasses =
    size === 'lg'
      ? 'px-4 py-1.5 text-base font-bold'
      : 'px-3 py-1 text-sm font-semibold';

  return (
    <span
      className={`inline-flex shrink-0 rounded-full border border-primary/25 bg-primary/10 tabular-nums text-primary shadow-sm ${sizeClasses}`}
    >
      {formatPrice(amount)}
    </span>
  );
}

function PricingTable({ items }: { items: PricingLineItem[] }) {
  return (
    <table className="w-full border-collapse text-sm">
      <tbody className="text-muted-foreground">
        {items.map((item, index) => (
          <tr
            key={item.concept}
            className={`border-b border-border/50 transition-colors hover:bg-primary/5 ${
              index % 2 === 0 ? 'bg-background/40' : ''
            }`}
          >
            <td className="px-4 py-3.5 font-semibold text-foreground sm:px-5">{item.concept}</td>
            <td className="px-4 py-3.5 leading-relaxed sm:px-5">{item.includes}</td>
            <td
              className={`w-[1%] overflow-visible whitespace-nowrap px-4 text-right sm:px-5 ${
                item.originalAmount != null && item.originalAmount > item.amount
                  ? 'pt-6 pb-3.5'
                  : 'py-3.5'
              }`}
            >
              <LineItemPrice amount={item.amount} originalAmount={item.originalAmount} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function PricingSubcard({
  title,
  subtitle,
  icon: Icon,
  items,
}: {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  items: PricingLineItem[];
}) {
  const subtotal = items.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="overflow-visible rounded-xl border border-primary/15 bg-card shadow-elegant">
      <div className="border-b border-primary/15 bg-gradient-to-r from-primary via-primary to-primary-glow px-4 py-3.5 sm:px-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/15 text-primary-foreground shadow-sm">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <h4 className="font-semibold text-primary-foreground">{title}</h4>
            <p className="text-xs text-primary-foreground/75">{subtitle}</p>
          </div>
        </div>
      </div>
      <PricingTable items={items} />
      <div className="flex items-center justify-between border-t border-primary/15 bg-primary/10 px-4 py-3 sm:px-5">
        <span className="text-sm font-medium text-muted-foreground">Subtotal</span>
        <PriceBadge amount={subtotal} />
      </div>
    </div>
  );
}

export default function ImplementationPricingCard({
  className,
  stageLabel,
  implementationItems,
  resourceItems,
  total,
}: ImplementationPricingCardProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-primary/25 bg-card shadow-glow ${className ?? ''}`}
    >
      <div className="relative overflow-hidden border-b border-primary/20 bg-gradient-to-r from-primary via-primary to-primary-glow px-4 py-4 sm:px-6 sm:py-5">
        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary-foreground/10 blur-2xl" />
        <div className="relative">
          <h4 className="text-lg font-bold leading-snug text-primary-foreground sm:text-xl">{stageLabel}</h4>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 bg-gradient-to-b from-primary/5 to-transparent p-4 sm:gap-6 sm:p-6">
        <PricingSubcard
          title="Uso y licencia"
          subtitle="Capacidades operativas incluidas en el plan"
          icon={Layers}
          items={implementationItems}
        />
        <PricingSubcard
          title="Bolsas de recursos"
          subtitle="Consumo mensual estimado para operar sin fricción"
          icon={Package}
          items={resourceItems}
        />
      </div>

      <div className="relative overflow-hidden border-t border-primary/20 bg-gradient-to-r from-primary via-primary to-primary-glow px-4 py-5 sm:px-6 sm:py-6">
        <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-primary-foreground/10 blur-3xl" />
        <div className="relative flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-1">
            <p className="text-base font-semibold text-primary-foreground sm:text-lg">Total del plan</p>
          </div>
          <div className="flex items-baseline gap-2 sm:text-right">
            <span className="text-3xl font-bold tabular-nums tracking-tight text-primary-foreground sm:text-4xl">
              {formatAmount(total)}
            </span>
            <span className="text-sm font-medium text-primary-foreground/80">USD/mes</span>
          </div>
        </div>
      </div>
    </div>
  );
}
