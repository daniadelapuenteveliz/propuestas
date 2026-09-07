import {
  BarChart3,
  Check,
  Clock,
  Globe,
  Layers,
  Layout,
  RefreshCw,
  Search,
  ShieldCheck,
  Target,
  TrendingUp,
} from 'lucide-react';
import { cfnSeoProposalConfig } from './config';

function formatClp(amount: number): string {
  return `$${amount.toLocaleString('es-CL')} CLP`;
}

export default function SeoGrowthProposalPage() {
  const { pricing, objectives, methodology, keywordCategories, conversionStrategy, initialRoadmap } =
    cfnSeoProposalConfig;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Encabezado */}
      <header className="relative overflow-hidden border-b border-primary/20 bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="pdf-decorative-gradient pdf-decorative-gradient--primary absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-primary-glow/10" />
        <div className="pdf-decorative-blur absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
        <div className="pdf-decorative-blur absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-primary-glow/20 blur-3xl" />
        <div className="pdf-decorative-line absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <div className="container relative mx-auto w-full px-4 pb-12 pt-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-4 text-center">
            <div className="flex items-center justify-center">
              <div className="flex h-10 w-10 shrink-0 overflow-hidden rounded-xl bg-primary/10 p-2 shadow-glow">
                <img src="/kheprion_logo_light.png" alt="Logo" className="h-full w-full object-contain" />
              </div>
            </div>

            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Plan de Crecimiento SEO</span>
            </h1>

            <p className="text-lg font-medium text-foreground/90 sm:text-xl">
              Propuesta técnica y comercial para{' '}
              <span className="text-primary font-semibold">Clark, Fuentes & NUN (CFN Abogados)</span>
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <article className="space-y-12">
          
          {/* 1. OBJETIVOS */}
          <section className="rounded-2xl border border-border/80 bg-card/50 p-6 sm:p-8 space-y-5 shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Target className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">Dirección Estratégica</span>
                <h2 className="text-2xl font-bold text-foreground">1. Objetivos del Plan</h2>
              </div>
            </div>

            <p className="text-base leading-relaxed text-foreground/95 font-medium">
              "{objectives.primary}"
            </p>

            <div className="grid gap-3.5 pt-2 sm:grid-cols-3">
              {objectives.principles.map((pr, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 rounded-xl border border-border/60 bg-background/60 p-4 text-xs text-muted-foreground leading-relaxed"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-[11px] font-bold text-primary">
                    {i + 1}
                  </span>
                  <span className="text-foreground/85">{pr}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 2. PLAN DE TRABAJO */}
          <section className="space-y-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Estrategia y Ejecución</span>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">2. Plan de Trabajo</h2>
            </div>

            {/* A. Cómo vamos a trabajar */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Layers className="h-5 w-5 text-primary" />
                Cómo vamos a trabajar
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                El trabajo se estructura como un proceso iterativo de mejora continua junto al equipo del estudio,
                enfocado en impacto real en captación orgánica:
              </p>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {methodology.map((item, idx) => (
                  <div
                    key={idx}
                    className="group rounded-2xl border border-border/70 bg-card/70 p-5 transition-all hover:border-primary/40 hover:shadow-sm"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                      {idx === 0 ? (
                        <RefreshCw className="h-5 w-5" />
                      ) : idx === 1 ? (
                        <Layout className="h-5 w-5" />
                      ) : idx === 2 ? (
                        <Target className="h-5 w-5" />
                      ) : idx === 3 ? (
                        <Globe className="h-5 w-5" />
                      ) : (
                        <BarChart3 className="h-5 w-5" />
                      )}
                    </div>
                    <h4 className="mt-3 text-sm font-bold text-foreground">{item.title}</h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* B. Búsquedas Objetivo */}
            <div className="space-y-4">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <Search className="h-5 w-5 text-primary" />
                  Búsquedas Objetivo (Keywords Prioritarias)
                </h3>
                <span className="text-xs text-muted-foreground">
                  Foco: Queries transaccionales (Trámite + Localidad / Cobertura Nacional)
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {keywordCategories.map((cat) => (
                  <div
                    key={cat.category}
                    className="flex flex-col justify-between rounded-2xl border border-primary/20 bg-card/80 p-5 shadow-sm"
                  >
                    <div>
                      <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
                        <h4 className="font-bold text-sm text-foreground">{cat.category}</h4>
                        <span className="text-[10px] font-semibold text-primary rounded-full bg-primary/10 px-2 py-0.5">
                          {cat.keywords.length} términos
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground py-2 leading-relaxed">{cat.description}</p>

                      <ul className="space-y-1.5 pt-1">
                        {cat.keywords.map((kw, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs font-medium text-foreground/90">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            <span>{kw}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* C. Enfoque de servicios y conversión */}
            <div className="rounded-2xl border border-primary/25 bg-card/90 p-6 sm:p-7 shadow-sm backdrop-blur-sm space-y-5">
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Enfoque de la Página: Servicios y Conversión Inmediata
                </h3>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                  {conversionStrategy.coreConcept}
                </p>
              </div>

              <div className="grid gap-3.5 sm:grid-cols-2">
                {conversionStrategy.guidelines.map((guide, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-border/70 bg-background/60 p-4 space-y-1 text-xs transition-colors hover:border-primary/40"
                  >
                    <div className="flex items-center gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-primary/15 text-[10px] font-bold text-primary">
                        {idx + 1}
                      </span>
                      <h4 className="font-bold text-foreground text-xs">{guide.point}</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed pl-7">{guide.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* D. Roadmap de Ejecución Inicial */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Roadmap de Ejecución Inicial (Primeras 4 Semanas)
              </h3>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {initialRoadmap.map((item) => {
                  const isCompleted = item.status === 'completed';
                  return (
                    <div
                      key={item.step}
                      className={`flex flex-col justify-between rounded-2xl border p-5 shadow-sm transition-all ${
                        isCompleted
                          ? 'border-emerald-500/40 bg-emerald-500/10 shadow-glow'
                          : 'border-primary/20 bg-card/80'
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span
                            className={`text-xs font-extrabold uppercase tracking-wider ${
                              isCompleted ? 'text-emerald-600 dark:text-emerald-400' : 'text-primary'
                            }`}
                          >
                            {item.step}
                          </span>
                          <span
                            className={`text-[11px] font-bold rounded-full px-2.5 py-0.5 border ${
                              isCompleted
                                ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
                                : 'bg-muted text-muted-foreground border-border'
                            }`}
                          >
                            {isCompleted ? 'Listo' : item.duration}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-foreground leading-snug">{item.title}</h4>
                        <ul className="space-y-1.5 pt-2">
                          {item.tasks.map((task, tidx) => (
                            <li key={tidx} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                              <Check
                                className={`h-3.5 w-3.5 shrink-0 mt-0.5 ${
                                  isCompleted ? 'text-emerald-500' : 'text-primary'
                                }`}
                              />
                              <span className={isCompleted ? 'text-foreground/90' : ''}>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 3. PRECIO Y MODELO COMERCIAL (UN SOLO CUADRO) */}
          <section className="space-y-6 pt-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Presupuesto e Inversión</span>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">3. Presupuesto</h2>
            </div>

            {/* Cuadro único de presupuesto */}
            <article className="overflow-hidden rounded-2xl border border-primary/25 bg-card shadow-glow">
              <div className="border-b border-primary/15 bg-gradient-to-r from-primary via-primary to-primary-glow px-6 py-5 text-white">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-bold">Servicio de Crecimiento SEO en Google</h3>
                    <p className="text-xs text-white/85 mt-0.5">
                      Monitoreo continuo en Search Console, auditorías trimestrales y optimización técnica de fichas.
                    </p>
                  </div>

                  <div className="flex flex-col items-start gap-1 sm:items-end">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-white/70 line-through">
                        Original: {formatClp(pricing.basePriceMonthly)} / mes
                      </span>
                      <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-sm font-extrabold text-white backdrop-blur-sm border border-white/20">
                        {formatClp(2997)} / mes
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-300 bg-emerald-950/40 px-2.5 py-0.5 rounded-full border border-emerald-400/30">
                      70% de descuento
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                {/* Inclusiones del servicio */}
                <div className="grid gap-3 sm:grid-cols-3">
                  {pricing.coreInclusions.map((inc, i) => (
                    <div key={i} className="rounded-xl border border-border/70 bg-background/50 p-4 space-y-1.5 text-xs">
                      <div className="flex items-center gap-2 text-primary font-bold">
                        {i === 0 ? <BarChart3 className="h-4 w-4" /> : i === 1 ? <ShieldCheck className="h-4 w-4" /> : <Globe className="h-4 w-4" />}
                        <span className="text-foreground">{inc.title}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{inc.description}</p>
                    </div>
                  ))}
                </div>

                {/* Explicación de tarifas con el 0 en negrita */}
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 text-sm text-foreground/90 leading-relaxed">
                  <p>
                    Inicialmente hasta que el setup esté funcionando y obtengamos el primer resultado en Google el costo es de <strong className="font-extrabold text-foreground text-base">0</strong>, luego de eso la tarifa es del 30% ({formatClp(2997)} / mes) durante el primer año de contratación de servicio. Luego el 100% ({formatClp(pricing.basePriceMonthly)} / mes).
                  </p>
                </div>
              </div>
            </article>
          </section>

        </article>
      </main>
    </div>
  );
}
