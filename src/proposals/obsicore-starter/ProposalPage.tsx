import {
  Activity,
  Bot,
  Globe,
  HardDrive,
  Lock,
  Mail,
  Route,
  Server,
  ShieldCheck,
  Sparkles,
  Video,
  Check,
} from 'lucide-react';
import { packageBlocks } from './config';

function formatClp(amount: number): string {
  return `$${amount.toLocaleString('es-CL')} CLP`;
}

const featureIcons: Record<string, any> = {
  drive: HardDrive,
  mail: Mail,
  gemini: Sparkles,
  geminiApp: Bot,
  meet: Video,
  shield: ShieldCheck,
  globe: Globe,
  route: Route,
  ssl: Lock,
  uptime: Activity,
  server: Server,
  advisory: Sparkles,
};

export default function ProposalPage() {
  // Calculations
  const workspacePricePerUser = 11990;
  const workspaceUsers = 4;
  
  const workspaceMonthlyTotal = workspacePricePerUser * workspaceUsers; // 47960
  
  const hostingYear1Monthly = 2990;
  const hostingYear2Monthly = 9990;
  
  const totalYear1Monthly = hostingYear1Monthly + workspaceMonthlyTotal; // 50950
  const totalYear1Annual = totalYear1Monthly * 12; // 611400
  
  const totalYear2Monthly = hostingYear2Monthly + workspaceMonthlyTotal; // 57950
  const totalYear2Annual = totalYear2Monthly * 12; // 695400

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Decorative header */}
      <header className="relative overflow-hidden border-b border-primary/20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="pdf-decorative-gradient pdf-decorative-gradient--primary absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary-glow/5" />
        <div className="pdf-decorative-blur absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="pdf-decorative-blur absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-primary-glow/15 blur-3xl" />
        <div className="pdf-decorative-line absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="container relative mx-auto w-full px-4 pb-12 pt-8 sm:px-6 lg:px-8">
          <div className="mx-auto space-y-4 text-center">
            <div className="flex items-center justify-center gap-3">
              <div className="flex h-10 w-10 shrink-0 overflow-hidden rounded-xl bg-primary/10 p-2 shadow-glow">
                <img src="/kheprion_logo_light.png" alt="Obsicore" className="h-full w-full object-contain" />
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-gradient-to-r from-primary/15 to-primary-glow/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary shadow-glow">
                Presupuesto Starter
              </span>
            </div>

            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Plan Obsicore Starter</span>
              <br className="sm:hidden" />
              <span className="text-foreground"> para Clark, Fuentes & Nun</span>
            </h1>

            <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:max-w-4xl">
              Propuesta comercial de servicios de hosting, correo corporativo administrado e infraestructura cloud.
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto w-full px-4 py-8 sm:px-6 lg:px-8">
        <article className="space-y-10">
          
          {/* Alcance de la propuesta */}
          <section className="rounded-2xl border border-border/80 bg-card/50 p-6 shadow-sm backdrop-blur-sm space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Alcance del Plan</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Esta propuesta contempla la habilitación, configuración y mantenimiento de los servicios digitales base para la operación de <strong>Clark, Fuentes & Nun</strong>.
              </p>
              <p>
                El plan starter unifica la gestión de sus correos corporativos en Google Workspace con descuentos exclusivos de fundador de Obsicore, hosting de sitio web a tarifa preferencial y soporte técnico continuo sin fricción.
              </p>
            </div>
          </section>

          {/* Desglose de servicios */}
          <section className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">Detalle de Servicios Ofrecidos</h2>
            
            <div className="space-y-6">
              {packageBlocks.map((block) => (
                <article
                  key={block.heading}
                  className="overflow-hidden rounded-2xl border border-primary/20 bg-card/90 shadow-sm backdrop-blur-sm"
                >
                  <div className="border-b border-primary/10 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent px-5 py-4 sm:px-6">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-lg font-semibold text-foreground">{block.heading}</h3>
                      
                      {/* Render Pricing Block */}
                      {block.pricing ? (
                        <div className="flex flex-col items-start gap-1 sm:items-end">
                          <div className="flex flex-wrap items-center gap-2">
                            {block.pricing.originalAmount && (
                              <span className="text-xs text-muted-foreground line-through">
                                Original: {formatClp(block.pricing.originalAmount)}
                              </span>
                            )}
                            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-background/80 px-3 py-1 text-sm font-semibold text-primary shadow-sm">
                              {formatClp(block.pricing.amount)} {block.pricing.suffix}
                            </span>
                          </div>
                          {block.pricing.customDiscountText && (
                            <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 text-left sm:text-right">
                              {block.pricing.customDiscountText}
                            </span>
                          )}
                        </div>
                      ) : block.priceLabel ? (
                        <span className="inline-flex items-center rounded-full border border-primary/25 bg-background/80 px-3 py-1 text-sm font-semibold text-primary shadow-sm">
                          {block.priceLabel}
                        </span>
                      ) : block.priceLabelOriginal ? (
                        <div className="flex flex-col items-start gap-1 sm:items-end">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground line-through">
                              {block.priceLabelOriginal}
                            </span>
                            <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 shadow-sm">
                              {block.priceLabelDiscountText}
                            </span>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="space-y-5 px-5 py-5 sm:px-6 sm:py-6">
                    {block.paragraphs.map((paragraph, idx) => (
                      <p key={idx} className="leading-relaxed text-muted-foreground">
                        {paragraph}
                      </p>
                    ))}

                    {/* List Items (como cuentas de correo) */}
                    {block.listItems && (
                      <div className="grid gap-2 sm:grid-cols-2 bg-muted/30 p-4 rounded-xl border border-border/50">
                        {block.listItems.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm font-medium text-foreground">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {item}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Features block */}
                    {block.features && (
                      <div className="grid gap-3 sm:grid-cols-2">
                        {block.features.map((feature) => {
                          const Icon = featureIcons[feature.icon] || Check;

                          if (feature.highlight) {
                            return (
                              <div
                                key={feature.title}
                                className="flex gap-3 rounded-xl border border-primary/45 bg-gradient-to-br from-primary/10 via-primary/5 to-background p-4 shadow-sm sm:col-span-2"
                              >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary shadow-sm">
                                  <Icon className="h-5 w-5" aria-hidden="true" />
                                </div>
                                <div className="min-w-0 space-y-1">
                                  <p className="font-semibold leading-snug text-primary">{feature.title}</p>
                                  <p className="text-sm leading-relaxed text-foreground/80">{feature.description}</p>
                                </div>
                              </div>
                            );
                          }

                          return (
                            <div
                              key={feature.title}
                              className="flex gap-3 rounded-xl border border-border/70 bg-background/50 p-4 transition-colors hover:border-primary/30 hover:bg-background"
                            >
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <Icon className="h-5 w-5" aria-hidden="true" />
                              </div>
                              <div className="min-w-0 space-y-1">
                                <p className="font-medium leading-snug text-foreground">{feature.title}</p>
                                <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Resumen del Presupuesto (Simulación) */}
          <section className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">Resumen de Costos y Facturación</h2>
            
            <div className="overflow-hidden rounded-2xl border border-primary/25 bg-card shadow-glow">
              <div className="border-b border-primary/20 bg-gradient-to-r from-primary to-primary-glow px-5 py-4 text-white">
                <h3 className="text-lg font-bold">Presupuesto Consolidado</h3>
                <p className="text-xs text-white/80">Detalle mensual y anual estimado (con opción de descuento anual indicada en la información).</p>
              </div>

              <div className="p-5 sm:p-6 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Año 1 */}
                  <div className="rounded-xl border border-border/80 bg-background/50 p-5 space-y-4">
                    <div className="flex items-center justify-between border-b border-border pb-2">
                      <h4 className="font-bold text-foreground">Año 1 (Inicial)</h4>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 border border-green-500/20">Año 1</span>
                    </div>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      <li className="flex justify-between">
                        <span>Workspace (4 cuentas @ $11.990)</span>
                        <span className="font-semibold text-foreground">{formatClp(workspaceMonthlyTotal)}/mes</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Hosting de página web (Año 1)</span>
                        <span className="font-semibold text-foreground">{formatClp(hostingYear1Monthly)}/mes</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Hosting general (100% Bonificado)</span>
                        <span className="font-semibold text-foreground">$0 CLP</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Migración a la nube (Bonificado Founder)</span>
                        <span className="font-semibold text-foreground">$0 CLP</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Asesoramiento KheprionAI (Bonificado)</span>
                        <span className="font-semibold text-foreground">$0 CLP</span>
                      </li>
                    </ul>
                    <div className="border-t border-border pt-4 space-y-2">
                      <div className="flex justify-between items-baseline">
                        <span className="text-sm font-semibold text-muted-foreground">Total Mensual Año 1</span>
                        <span className="text-xl font-bold text-primary">{formatClp(totalYear1Monthly)}</span>
                      </div>
                      <div className="flex justify-between items-baseline">
                        <span className="text-xs font-semibold text-muted-foreground">Total Anual Año 1</span>
                        <span className="text-sm font-bold text-muted-foreground">{formatClp(totalYear1Annual)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Año 2+ */}
                  <div className="rounded-xl border border-border/80 bg-background/50 p-5 space-y-4">
                    <div className="flex items-center justify-between border-b border-border pb-2">
                      <h4 className="font-bold text-foreground">Año 2 y Posteriores</h4>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">Indefinido</span>
                    </div>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      <li className="flex justify-between">
                        <span>Workspace (4 cuentas @ $11.990)</span>
                        <span className="font-semibold text-foreground">{formatClp(workspaceMonthlyTotal)}/mes</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Hosting de página web (Founder Obsicore)</span>
                        <span className="font-semibold text-foreground">{formatClp(hostingYear2Monthly)}/mes</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Migración a la nube</span>
                        <span className="font-semibold text-foreground">$0 CLP</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Asesoramiento KheprionAI</span>
                        <span className="font-semibold text-foreground">$0 CLP</span>
                      </li>
                    </ul>
                    <div className="border-t border-border pt-4 space-y-2">
                      <div className="flex justify-between items-baseline">
                        <span className="text-sm font-semibold text-muted-foreground">Total Mensual Año 2+</span>
                        <span className="text-xl font-bold text-primary">{formatClp(totalYear2Monthly)}</span>
                      </div>
                      <div className="flex justify-between items-baseline">
                        <span className="text-xs font-semibold text-muted-foreground">Total Anual Año 2+</span>
                        <span className="text-sm font-bold text-muted-foreground">{formatClp(totalYear2Annual)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-4 text-xs text-muted-foreground leading-relaxed space-y-2">
                  <p>
                    * Los valores detallados corresponden a CLP y están sujetos a reajuste según las tarifas base de Google Workspace. 
                    El hosting de sitio web a tarifa de $9.990 CLP a partir del segundo año se mantendrá de manera indefinida como beneficio exclusivo de founder de Obsicore.
                  </p>
                  <p className="font-semibold text-emerald-600 dark:text-emerald-400">
                    Nota de Ahorro: Si se contrata el servicio de correos de forma anual, se puede aplicar un 10% de descuento directo en las licencias Workspace (quedando en $10.791 CLP/mes por usuario, equivalente a un total de $43.164 CLP/mes).
                  </p>
                </div>
              </div>
            </div>
          </section>

        </article>
      </main>
    </div>
  );
}
