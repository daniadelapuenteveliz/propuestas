import ProposalsNav from '@/components/layout/ProposalsNav'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <ProposalsNav />
      <main className="container mx-auto px-4 py-24 text-center sm:px-6">
        <h1 className="text-2xl font-semibold text-foreground">Página no encontrada</h1>
        <p className="mt-2 text-muted-foreground">La ruta solicitada no existe.</p>
      </main>
    </div>
  )
}
