import PackageBreakdownSection from './PackageBreakdownSection';
import PackageSimulationSection from './PackageSimulationSection';
import { packageBlocks, simulation } from './config';

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
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-gradient-to-r from-primary/15 to-primary-glow/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary shadow-glow">
              propuesta comercial
            </span>

            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              <span className="text-foreground">Propuesta comercial para Indare</span>
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto w-full px-4 pt-5 pb-10 sm:px-6 sm:pt-6 sm:pb-12 lg:px-8">
        <article className="space-y-10">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Alcance</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                La propuesta contempla la implementación y gestión de un paquete de servicios tecnológicos básico para
                Indare, con el objetivo de habilitar su operación lo antes posible.
              </p>
              <p>
                El paquete comprende la creación, administración y mantenimiento de un sitio web estático con estilo
                WordPress, orientado a presentar la empresa y sus canales de contacto. Incluye un formulario de
                contacto y un webhook para el reenvío automatizado de consultas, además de la gestión de certificados
                SSL que habilitan conexiones seguras mediante HTTPS.
              </p>
            </div>
          </section>

          <div className="proposal-full-bleed relative left-1/2 -mt-5 -ml-[50vw] w-screen max-w-[100vw] sm:-mt-5">
            <section className="relative overflow-hidden border-b border-t border-primary/20 pt-5 pb-10 sm:pt-6 sm:pb-12">
              <div className="pdf-decorative-gradient pdf-decorative-gradient--primary absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-primary-glow/10" />
              <div className="pdf-decorative-blur absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
              <div className="pdf-decorative-blur absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-primary-glow/25 blur-3xl" />

              <div className="container relative mx-auto w-full px-4 sm:px-6 lg:px-8">
                <PackageBreakdownSection title="Desglose del contenido del paquete" blocks={packageBlocks} />
                <PackageSimulationSection simulation={simulation} />
              </div>
            </section>
          </div>
        </article>
      </main>
    </div>
  );
}
