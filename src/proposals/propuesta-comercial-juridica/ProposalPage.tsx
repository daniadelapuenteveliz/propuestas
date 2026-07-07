import { Scale } from 'lucide-react';
import ContextFlowDiagram from '@/components/diagrams/ContextFlowDiagram';
import ImplementationPricingCard from './ImplementationPricingCard';
import { implementationPricingStages } from './pricingConfig';

export default function ProposalPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="relative overflow-hidden border-b border-primary/20">
        <div className="pdf-decorative-gradient pdf-decorative-gradient--primary absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-primary-glow/10" />
        <div className="pdf-decorative-blur absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="pdf-decorative-blur absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-primary-glow/25 blur-3xl" />
        <div className="pdf-decorative-line absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

        <div className="container relative mx-auto w-full px-4 pb-10 pt-6 sm:px-6 sm:pb-12 sm:pt-8 lg:px-8">
          <div className="mx-auto space-y-4 text-center">
            <div className="flex items-center justify-center gap-3">
              <div className="flex h-10 w-10 shrink-0 overflow-hidden rounded-xl shadow-glow">
                <img src="/kheprion_logo_light.png" alt="Kheprion AI" className="h-full w-full object-cover" />
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-gradient-to-r from-primary/15 to-primary-glow/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary shadow-glow">
                <Scale className="h-3.5 w-3.5" />
                propuesta comercial
              </span>
            </div>

            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Plan kheprionAI growth</span>
              <span className="text-foreground"> para Clark, Fuentes & Nun</span>
            </h1>

            <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:max-w-4xl">
              Plan de crecimiento comercial potenciado por KheprionAI growth
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto w-full px-4 pt-5 pb-10 sm:px-6 sm:pt-6 sm:pb-12 lg:px-8">
        <article className="space-y-10">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Objetivos</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                El objetivo de esta propuesta es diseñar e implementar, junto a Clark, Fuentes & Nun, un plan de
                crecimiento comercial que eleve la capacidad del estudio para captar, convertir y gestionar nuevas
                oportunidades con mayor eficiencia y trazabilidad.
              </p>
              <p>
                Para ello se propone un embudo de ventas integrado con una capa inicial de gestión de casos judiciales
                potenciada por IA: agentes en la primera línea de recepción atenderán consultas, estructurarán
                antecedentes y abrirán casos que serán derivados al equipo interno para su seguimiento conjunto. Desde
                ese entorno operativo, el estudio podrá consultar APIs judiciales, comunicarse por correo y WhatsApp,
                elaborar documentos y coordinar reuniones, entre otras acciones vinculadas a cada gestión.
              </p>
            </div>
            <ContextFlowDiagram />
          </section>

          <div className="proposal-full-bleed relative left-1/2 -mt-5 -ml-[50vw] w-screen max-w-[100vw] sm:-mt-5">
            <section className="relative overflow-hidden border-b border-t border-primary/20 pt-5 pb-10 sm:pt-6 sm:pb-12">
              <div className="pdf-decorative-gradient pdf-decorative-gradient--primary absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-primary-glow/10" />
              <div className="pdf-decorative-blur absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
              <div className="pdf-decorative-blur absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-primary-glow/25 blur-3xl" />

              <div className="container relative mx-auto w-full px-4 sm:px-6 lg:px-8">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">Panorámica del roadmap</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Se propone un plan de implementación progresivo, estructurado en cuatro etapas consecutivas, cada
                      una con un alcance y un costo mensual diferenciado. Este enfoque permite avanzar de forma
                      ordenada, priorizando resultados tempranos sin comprometer la visión de largo plazo.
                    </p>
                    <p>
                      El objetivo es entregar a Clark, Fuentes & Nun una hoja de ruta a medida, capaz de escalar junto
                      al crecimiento del estudio: activar capacidades según la madurez operativa del equipo, el volumen
                      de casos y las prioridades comerciales de cada fase.
                    </p>

                    <div className="space-y-5 pt-2">
                      <div className="space-y-2">
                        <h3 className="text-base font-semibold text-foreground">
                          Etapa 1: Integración con WhatsApp y correo
                        </h3>
                        <p>
                          Se habilita un número y canales de contacto abiertos al público para recibir consultas por
                          WhatsApp y correo electrónico. Una capa de IA atenderá cada solicitud, abrirá un ticket y
                          permitirá gestionarlo desde la plataforma interna de Kheprion.
                        </p>
                        <p>
                          Desde la plataforma, el equipo podrá enviar mensajes o correos a los clientes, contar con un
                          asistente interno para el seguimiento del ticket y adjuntar archivos utilizando plantillas
                          previamente definidas.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-base font-semibold text-foreground">
                          Etapa 2: Integración con APIs judiciales
                        </h3>
                        <p>
                          En esta fase, los agentes internos de KheprionAI acceden a fuentes de información judicial
                          para consultar antecedentes del caso directamente desde el chat interno, apoyando la gestión
                          operativa sin salir del entorno de trabajo.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-base font-semibold text-foreground">Etapa 3: Integración con Instagram</h3>
                        <p>
                          Se extiende la capa de atención inicial al canal de Instagram, permitiendo captar consultas,
                          clasificar leads y derivarlos al mismo flujo de tickets y gestión interna del estudio.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-base font-semibold text-foreground">
                          Etapa 4: Integración con Calendly para reuniones y citas
                        </h3>
                        <p>
                          Se incorpora la coordinación de reuniones y citas con clientes mediante Calendly, con
                          encuentros vía Zoom integrados al flujo de gestión para agendar, confirmar y dar seguimiento
                          desde la plataforma.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <section className="space-y-10">
            <h2 className="text-xl font-semibold text-foreground">Implementación</h2>

            {implementationPricingStages.map((stage, index) => (
              <div
                key={stage.className}
                className={index === 0 ? 'space-y-6' : 'space-y-6 border-t border-border/60 pt-10'}
              >
                <h3 className="text-base font-semibold text-foreground">{stage.title}</h3>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {index === 0 ? (
                    <p>
                      En esta etapa se habilitan dos agentes de IA especializados: uno orientado a la conversación con
                      clientes —atención inicial, clasificación y apertura de casos— y otro dedicado al trabajo interno del
                      equipo. En conjunto permiten crear tickets, estructurar casos, almacenar archivos, generar plantillas
                      de documentos y contactar clientes por WhatsApp y correo de forma profesional y trazable.
                    </p>
                  ) : 'intro' in stage ? (
                    <p>{stage.intro}</p>
                  ) : null}
                </div>

                <ImplementationPricingCard
                  className={stage.className}
                  stageLabel={stage.stageLabel}
                  implementationItems={[...stage.implementationItems]}
                  resourceItems={[...stage.resourceItems]}
                  total={stage.total}
                />
              </div>
            ))}
          </section>

          <div className="proposal-full-bleed relative left-1/2 -mt-5 -ml-[50vw] w-screen max-w-[100vw] sm:-mt-5">
            <section className="relative overflow-hidden border-b border-t border-primary/20 pt-5 pb-10 sm:pt-6 sm:pb-12">
              <div className="pdf-decorative-gradient pdf-decorative-gradient--primary absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-primary-glow/10" />
              <div className="pdf-decorative-blur absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
              <div className="pdf-decorative-blur absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-primary-glow/25 blur-3xl" />

              <div className="container relative mx-auto w-full px-4 sm:px-6 lg:px-8">
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-foreground">Costos variables extras</h2>

                  <p className="max-w-4xl text-muted-foreground leading-relaxed">
                    Las bolsas de tokens y mensajes incluidas en cada etapa cubren el consumo estimado del plan. Una vez
                    agotado ese cupo, la operación continúa sin interrupciones y el excedente se factura de forma
                    transparente según las tarifas unitarias siguientes.
                  </p>

                  <div className="overflow-hidden rounded-2xl border border-primary/25 bg-card shadow-glow">
                    <div className="border-b border-primary/15 bg-gradient-to-r from-primary/10 to-primary-glow/5 px-4 py-3 sm:px-6">
                      <p className="text-sm font-semibold text-foreground">Tarifas por consumo adicional</p>
                    </div>

                    <div className="divide-y divide-border/50 bg-gradient-to-b from-primary/5 to-transparent p-4 sm:p-6">
                      <div className="flex flex-col gap-1 py-3 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                        <p className="text-sm text-muted-foreground">Tokens de entrada</p>
                        <p className="text-sm font-medium tabular-nums text-foreground sm:text-right">
                          1,4 USD por cada 1M de tokens
                        </p>
                      </div>

                      <div className="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                        <p className="text-sm text-muted-foreground">Tokens de salida</p>
                        <p className="text-sm font-medium tabular-nums text-foreground sm:text-right">
                          15 USD por cada 1M de tokens
                        </p>
                      </div>

                      <div className="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                        <p className="text-sm text-muted-foreground">Mensajes de WhatsApp</p>
                        <p className="text-sm font-medium tabular-nums text-foreground sm:text-right">
                          0,03 USD por mensaje
                        </p>
                      </div>

                      <div className="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                        <p className="text-sm text-muted-foreground">Mensajes de Instagram</p>
                        <p className="text-sm font-medium tabular-nums text-foreground sm:text-right">
                          0,003 USD por mensaje
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </article>
      </main>
    </div>
  );
}
