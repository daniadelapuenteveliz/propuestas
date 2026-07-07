import { Scale } from 'lucide-react';
import ContextFlowDiagram from '@/components/diagrams/ContextFlowDiagram';

const List = ({ items }: { items: string[] }) => (
  <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
    {items.map((item) => (
      <li key={item} className="leading-relaxed">
        {item}
      </li>
    ))}
  </ul>
);

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
                        <h3 className="text-base font-semibold text-foreground">
                          Etapa 3: Integración con Calendly para reuniones y citas
                        </h3>
                        <p>
                          Se incorpora la coordinación de reuniones y citas con clientes mediante Calendly, con
                          encuentros vía Zoom integrados al flujo de gestión para agendar, confirmar y dar seguimiento
                          desde la plataforma.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-base font-semibold text-foreground">Etapa 4: Integración con Instagram</h3>
                        <p>
                          Se extiende la capa de atención inicial al canal de Instagram, permitiendo captar consultas,
                          clasificar leads y derivarlos al mismo flujo de tickets y gestión interna del estudio.
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

            <div className="space-y-6">
              <h3 className="text-base font-semibold text-foreground">Etapa 1: Integración con WhatsApp y correo</h3>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  En esta etapa se habilitan dos agentes de IA especializados: uno orientado a la conversación con
                  clientes —atención inicial, clasificación y apertura de casos— y otro dedicado al trabajo interno del
                  equipo. En conjunto permiten crear tickets, estructurar casos, almacenar archivos, generar plantillas
                  de documentos y contactar clientes por WhatsApp y correo de forma profesional y trazable. Tiempo
                  estimado de implementación: <span className="font-medium text-foreground">1 a 2 meses</span>.
                </p>
              </div>

              <div className="implementation-pricing-table-etapa-1 overflow-hidden rounded-xl border border-primary/20">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border/70 bg-primary/5">
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Concepto</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Incluye</th>
                      <th className="px-4 py-3 text-right font-semibold text-foreground">Precio mensual (USD)</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="px-4 py-3 font-medium text-foreground">
                        Licencia de la plataforma con usuarios ilimitados
                      </td>
                      <td className="px-4 py-3 leading-relaxed">
                        Acceso completo a la plataforma Kheprion para todo el equipo, sin límite de usuarios.
                      </td>
                      <td className="px-4 py-3 text-right font-semibold tabular-nums text-primary">43,9</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="px-4 py-3 font-medium text-foreground">Agente de conversación con clientes</td>
                      <td className="px-4 py-3 leading-relaxed">
                        Atención inicial, clasificación de consultas y apertura de tickets.
                      </td>
                      <td className="px-4 py-3 text-right font-medium tabular-nums text-foreground">15</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="px-4 py-3 font-medium text-foreground">Agente de conversación interna</td>
                      <td className="px-4 py-3 leading-relaxed">
                        Apoyo en gestión de tickets, casos, archivos y plantillas de documentos.
                      </td>
                      <td className="px-4 py-3 text-right font-medium tabular-nums text-foreground">15</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="px-4 py-3 font-medium text-foreground">Bolsa mensual de WhatsApp</td>
                      <td className="px-4 py-3 leading-relaxed">
                        500 mensajes incluidos (~30 conversaciones). Excedente: USD 0,035 por mensaje adicional.
                      </td>
                      <td className="px-4 py-3 text-right font-medium tabular-nums text-foreground">13</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="px-4 py-3 font-medium text-foreground">Bolsa mensual de tokens</td>
                      <td className="px-4 py-3 leading-relaxed">
                        5.000.000 tokens input y 1.000.000 tokens output (~50 conversaciones).
                      </td>
                      <td className="px-4 py-3 text-right font-medium tabular-nums text-foreground">13</td>
                    </tr>
                    <tr className="bg-primary/5">
                      <td className="px-4 py-3 font-semibold text-foreground" colSpan={2}>
                        Total Etapa 1 — Integración con WhatsApp y correo
                      </td>
                      <td className="px-4 py-3 text-right text-base font-bold tabular-nums text-primary">99,9 USD</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                Valores referenciales en USD. El consumo adicional de WhatsApp se factura según la tarifa indicada;
                agentes y bolsas pueden ajustarse conforme evolucione el volumen operativo del estudio.
              </p>
            </div>

            <div className="space-y-6 border-t border-border/60 pt-10">
              <h3 className="text-base font-semibold text-foreground">Etapa 2: Integración con APIs judiciales</h3>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  En esta fase, los agentes internos de KheprionAI acceden a fuentes de información judicial para
                  consultar antecedentes del caso directamente desde el chat interno, apoyando la gestión operativa sin
                  salir del entorno de trabajo.
                </p>
              </div>

              <div className="implementation-pricing-table-etapa-2 overflow-hidden rounded-xl border border-primary/20">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border/70 bg-primary/5">
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Concepto</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Incluye</th>
                      <th className="px-4 py-3 text-right font-semibold text-foreground">Precio mensual (USD)</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="px-4 py-3 font-medium text-foreground">
                        Licencia de la plataforma con usuarios ilimitados
                      </td>
                      <td className="px-4 py-3 leading-relaxed">
                        Acceso completo a la plataforma Kheprion para todo el equipo, sin límite de usuarios.
                      </td>
                      <td className="px-4 py-3 text-right font-semibold tabular-nums text-primary">43,9</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="px-4 py-3 font-medium text-foreground">Agente de conversación con clientes</td>
                      <td className="px-4 py-3 leading-relaxed">
                        Atención inicial, clasificación de consultas y apertura de tickets.
                      </td>
                      <td className="px-4 py-3 text-right font-medium tabular-nums text-foreground">15</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="px-4 py-3 font-medium text-foreground">Agente de conversación interna</td>
                      <td className="px-4 py-3 leading-relaxed">
                        Apoyo en gestión de tickets, casos, archivos y plantillas de documentos.
                      </td>
                      <td className="px-4 py-3 text-right font-medium tabular-nums text-foreground">15</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="px-4 py-3 font-medium text-foreground">Bolsa mensual de WhatsApp</td>
                      <td className="px-4 py-3 leading-relaxed">
                        500 mensajes incluidos (~30 conversaciones). Excedente: USD 0,035 por mensaje adicional.
                      </td>
                      <td className="px-4 py-3 text-right font-medium tabular-nums text-foreground">13</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="px-4 py-3 font-medium text-foreground">Bolsa mensual de tokens</td>
                      <td className="px-4 py-3 leading-relaxed">
                        5.000.000 tokens input y 1.000.000 tokens output (~50 conversaciones).
                      </td>
                      <td className="px-4 py-3 text-right font-medium tabular-nums text-foreground">13</td>
                    </tr>
                    <tr className="bg-primary/5">
                      <td className="px-4 py-3 font-semibold text-foreground" colSpan={2}>
                        Total Etapa 2 — Integración con APIs judiciales
                      </td>
                      <td className="px-4 py-3 text-right text-base font-bold tabular-nums text-primary">99,9 USD</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                Valores referenciales en USD. El consumo adicional de WhatsApp se factura según la tarifa indicada;
                agentes y bolsas pueden ajustarse conforme evolucione el volumen operativo del estudio.
              </p>
            </div>
          </section>

          <section className="relative left-1/2 -mt-5 -ml-[50vw] w-screen max-w-[100vw] overflow-hidden border-y border-primary/20 pt-5 pb-10 sm:-mt-5 sm:pt-6 sm:pb-12">
            <div className="pdf-decorative-gradient pdf-decorative-gradient--primary absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-primary-glow/10" />
            <div className="pdf-decorative-blur absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="pdf-decorative-blur absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-primary-glow/25 blur-3xl" />
            <div className="pdf-decorative-line absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

            <div className="container relative mx-auto w-full space-y-6 px-4 sm:px-6 lg:px-8">
              <h2 className="text-xl font-semibold text-foreground">Flujo de trabajo propuesto</h2>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">
                  Etapa 1: recepción de mensajes vía WhatsApp e Instagram
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    El cliente inicia contacto con el estudio a través de un número de WhatsApp o una cuenta de
                    Instagram.
                  </p>
                  <p>
                    Un agente de IA asume la conversación e intenta autenticar al remitente. Según el resultado:
                  </p>
                  <List
                    items={[
                      'Si el cliente ya está identificado, la solicitud avanza directamente a la siguiente etapa.',
                      'Si no está autenticado, el agente solicita los datos necesarios para registrarlo antes de continuar.',
                    ]}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Etapa 2: Creación de causa o seguimiento</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Si el cliente ya tiene una causa o ticket creado, puede acceder directamente al apartado de
                    seguimiento o iniciar la creación de una causa nueva.
                  </p>
                  <p>
                    En este punto, un agente recopilará la información necesaria para completar la causa, clasificará el
                    lead y generará un ticket con el resultado del proceso.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Etapa 3: Llevar la causa</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Desde la plataforma de KheprionAI, abogados y agentes podrán trabajar en conjunto mediante un chat
                    interactivo —similar al de ChatGPT— para avanzar en la causa.
                  </p>
                  <p>Desde ese entorno podrán solicitar al sistema, entre otras acciones:</p>
                  <List
                    items={[
                      'Completar y llenar documentos.',
                      'Enviar correos.',
                      'Contactar al cliente por WhatsApp.',
                      'Generar una cita.',
                      'Consultar información judicial.',
                      'Ejecutar otras tareas operativas vinculadas al caso.',
                    ]}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Etapa 4: Seguimiento</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    En todo momento, los clientes podrán hacer seguimiento de su caso contactando al estudio vía WhatsApp
                    o Instagram.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Posibles habilidades que pueden tener los agentes</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-foreground">1) Verificador de Tabla de la Corte (PJUD)</h3>
                <p>
                  Consulta la API del Poder Judicial para verificar en tiempo real si una causa está programada para
                  alegato, detallando la sala, el número de tabla y la fecha exacta. Permite confirmar la audiencia
                  evitando los errores habituales de la página web oficial.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-foreground">
                  2) Transcriptor y Extractor de Documentos Legales (OCR Inteligente)
                </h3>
                <p>
                  Lee fotos, escaneos y PDFs complejos de forma local, sin depender de APIs externas, mediante tecnología
                  OCR y visión artificial. Extrae texto limpio, montos, RUTs y fechas para citarlos directamente en
                  escritos judiciales, reduciendo errores de transcripción.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-foreground">3) Catalogador Automatizado de Pruebas Documentales</h3>
                <p>
                  Redacta y ordena el listado formal de documentos adjuntos para la minuta de una audiencia preparatoria
                  laboral chilena. Lee los archivos aportados por el abogado y genera las menciones legales
                  estandarizadas en un formato listo para copiar y pegar en el escrito judicial.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-foreground">
                  4) Extractor de Expedientes Digitales (Descargador de Ebooks PJUD)
                </h3>
                <p>
                  Automatiza la descarga de expedientes completos (Ebooks en PDF) de causas civiles y laborales
                  directamente desde la Oficina Judicial Virtual del PJUD. Utiliza herramientas de automatización de
                  navegador en el equipo, mediante la librería Playwright, para buscar el RIT, evitar la navegación
                  manual y guardar los archivos ordenados. Resulta especialmente útil para procesar listas masivas desde
                  archivos Excel.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-foreground">
                  5) Descargador Integrado de Expedientes (OJV-Recopilador)
                </h3>
                <p>
                  Busca y descarga el expediente completo (Ebook en PDF) de causas civiles o laborales desde la Oficina
                  Judicial Virtual (OJV). No consume APIs externas ni requiere programas adicionales: navega y extrae de
                  forma autónoma el documento directamente desde la pestaña de Chrome para guardarlo en la carpeta
                  correspondiente.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-foreground">
                  6) Auditor de Escritos y Control de Calidad (Gemini-Revisor)
                </h3>
                <p>
                  Sube documentos de respaldo a Google Drive y envía el escrito legal a Gemini para cruzar los datos.
                  Funciona como un revisor externo que detecta faltas de ortografía, errores gramaticales e
                  inconsistencias en fechas, RUTs o montos frente a las fuentes originales, entregando una lista de
                  correcciones.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-foreground">7) Auditor de Citas Legales (Verificador Ley Chile)</h3>
                <p>
                  Extrae y analiza automáticamente todas las citas normativas de un escrito judicial chileno —como
                  artículos del COT, CPC, Código del Trabajo, entre otros—. Consulta la API directa de Ley Chile
                  (Biblioteca del Congreso Nacional) para contrastar el escrito con el texto oficial vigente, detectando
                  errores de transcripción o normas derogadas, y genera un informe en Word que clasifica cada cita según
                  su exactitud.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-foreground">8) Planificador de Juicios Laborales (Defensa Empleador)</h3>
                <p>
                  Genera una minuta en Word para la audiencia de juicio que incluye resúmenes del caso, hechos a probar,
                  interrogatorios de testigos con técnica abierta, preguntas de la contraparte y el borrador de
                  observaciones a la prueba.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-foreground">9) Solicitador de Antecedentes y Pruebas al Cliente</h3>
                <p>
                  Redacta el correo formal que un abogado envía a la empresa demandada al inicio de un juicio laboral en
                  Chile. Analiza la demanda y elabora un mail listo para copiar y pegar con el resumen del caso —
                  incluyendo indicios de tutela si aplica —, un cuadro de cuantías exactas y el listado de documentos y
                  preguntas específicas que el cliente debe entregar para la defensa.
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
