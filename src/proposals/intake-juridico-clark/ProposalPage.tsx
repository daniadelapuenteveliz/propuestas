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

const highlightItems = [
  'Disponibilización de múltiples líneas de WhatsApp para distintos flujos o equipos del estudio.',
  'Automatización de flujos de captación y atención inicial de clientes, con cobertura 24/7.',
  'Capa de inteligencia artificial para responder, clasificar casos y generar causas según el tipo de solicitud.',
  'Gestión automatizada de recordatorios de audiencias y hitos procesales.',
  'Consulta integrada de APIs y fuentes externas desde los agentes de IA.',
  'Manejo de plantillas de causas, documentación estandarizada y reportería operativa.',
  'Integración con Calendly para coordinar reuniones con clientes vía Zoom.',
  'Centralización de la información de clientes, conversaciones y causas en un repositorio único.',
  'Disponibilización de agentes de IA especializados según los distintos casos de uso que requiera el estudio.',
  'Respuesta automatizada de mensajes recibidos por Instagram.',
  'Gestión de correos electrónicos y plantillas de comunicación para el equipo y los clientes.',
];

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
                Propuesta de Solución
              </span>
            </div>

            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Intake jurídico automatizado</span>
              <span className="text-foreground"> con IA para Clark, Fuentes & Nun, estudio de abogados</span>
            </h1>

            <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:max-w-4xl">
              Aprovecha todo el poder de la IA para conectar clientes desde whatsapp e instagram a una red de agentes
              centralizada.
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto w-full px-4 pt-5 pb-10 sm:px-6 sm:pt-6 sm:pb-12 lg:px-8">
        <article className="space-y-10">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Contexto</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Clark, Fuentes & Nun recibe consultas por WhatsApp, Instagram y correo electrónico. Cada mensaje lo
                atiende un miembro del equipo, que debe estar pendiente, registrar la información y dar seguimiento.
              </p>
              <p>
                Cuando un cliente escribe, un trabajador retoma la conversación, solicita antecedentes y clasifica el
                caso; luego levanta la causa y busca normativa, jurisprudencia y precedentes en la Corte de Apelaciones.
                Todo el proceso se gestiona y maneja de forma manual.
              </p>
            </div>
            <ContextFlowDiagram variant="manual" />
          </section>

          <div className="proposal-full-bleed relative left-1/2 -mt-5 -ml-[50vw] w-screen max-w-[100vw] sm:-mt-5">
            <section className="relative overflow-hidden border-t border-destructive/20 pt-5 pb-10 sm:pt-6 sm:pb-10">
              <div className="pdf-decorative-gradient pdf-decorative-gradient--destructive absolute inset-0 bg-gradient-to-br from-destructive/15 via-background to-destructive/10" />
              <div className="pdf-decorative-blur absolute -right-20 -top-20 h-72 w-72 rounded-full bg-destructive/20 blur-3xl" />
              <div className="pdf-decorative-blur absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-destructive/15 blur-3xl" />
              <div className="pdf-decorative-line absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-destructive/50 to-transparent" />

              <div className="container relative mx-auto w-full space-y-4 px-4 sm:px-6 lg:px-8">
                <h2 className="text-xl font-semibold text-foreground">Posibles mejoras</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Se han identificado oportunidades de mejora orientadas a reducir cuellos de botella operativos y
                    automatizar etapas del proceso que hoy dependen de gestión manual:
                  </p>
                  <List
                    items={[
                      'Conversaciones iniciales en WhatsApp e Instagram gestionadas manualmente, sin flujo unificado.',
                      'Tickets, expedientes y documentos creados y actualizados a mano, con riesgo de duplicidad.',
                      'Sin una IA centralizada para clasificar consultas, extraer antecedentes y apoyar tareas repetitivas.',
                      'Sin atención ni triage automatizado fuera del horario laboral ni disponibilidad 24/7.',
                      'Sin integración con APIs ni consulta automatizada de normativa y jurisprudencia chilena.',
                      'Causas y oportunidades dispersas entre canales, sin repositorio centralizado del estado de cada caso.',
                      'Seguimiento de leads sin trazabilidad ni alertas de conversaciones estancadas.',
                      'Derivaciones internas sin criterios automatizados ni visibilidad compartida del embudo comercial y operativo.',
                      'Datos del cliente recopilados manualmente, sin formularios ni validación estructurada.',
                      'Investigación normativa y jurisprudencial caso a caso, sin asistencia sistemática en el levantamiento de causas.',
                    ]}
                  />
                </div>
              </div>
            </section>

            <section className="relative overflow-hidden border-b border-primary/20 pt-5 pb-10 sm:pt-6 sm:pb-12">
              <div className="pdf-decorative-gradient pdf-decorative-gradient--primary absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-primary-glow/10" />
              <div className="pdf-decorative-blur absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
              <div className="pdf-decorative-blur absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-primary-glow/25 blur-3xl" />

              <div className="container relative mx-auto w-full px-4 sm:px-6 lg:px-8">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">Lo que KheprionAI puede mejorar</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      La propuesta de KheprionAI consiste en actuar como partner tecnológico de Clark, Fuentes & Nun,
                      aportando servicios de comunicación, gestión operativa e inteligencia artificial aplicada a
                      procesos jurídicos. Entre los servicios que KheprionAI puede entregar se incluyen:
                    </p>
                    <ol className="list-decimal space-y-1 pl-6">
                      {highlightItems.map((item) => (
                        <li key={item} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Flujo de trabajo con KheprionAI</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                KheprionAI desplegará una capa de inteligencia artificial frente a cada canal de comunicación directa con
                los clientes, permitiendo procesar los primeros requerimientos y clasificar los leads de forma
                automática.
              </p>
              <p>
                A partir de esa atención inicial se generará un ticket que represente la solicitud del cliente — ya sea
                una causa, una representación u otro tipo de encargo a definir según el caso.
              </p>
              <p>
                En conjunto con otros agentes, se gestionará dicha causa con acceso a herramientas integradas para
                consultar información judicial, elaborar reportes o documentos, y mantener una comunicación fluida con el
                cliente, ya sea gestionada por un miembro del equipo o por un agente de IA.
              </p>
            </div>
            <ContextFlowDiagram />
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
