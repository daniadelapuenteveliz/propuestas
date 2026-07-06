export type ProposalHeader = {
  showLogo: boolean
  badgeLabel: string
  showBadgeIcon: boolean
  titleHighlight: string
  titleSuffix: string
  subtitle: string | null
}

export type ProposalScopeSection = {
  title: string
  paragraphs: string[]
  showDiagram: boolean
}

export type ProposalSections = {
  showKheprionWorkflow: boolean
  showProposedWorkflow: boolean
  showAgentCapabilities: boolean
}

const judicialScope: ProposalScopeSection = {
  title: 'Contexto',
  paragraphs: [
    'Clark, Fuentes & Nun recibe consultas por WhatsApp, Instagram y correo electrónico. Cada mensaje lo atiende un miembro del equipo, que debe estar pendiente, registrar la información y dar seguimiento.',
    'Cuando un cliente escribe, un trabajador retoma la conversación, solicita antecedentes y clasifica el caso; luego levanta la causa y busca normativa, jurisprudencia y precedentes en la Corte de Apelaciones. Todo el proceso se gestiona y maneja de forma manual.',
  ],
  showDiagram: true,
}

const indareScope: ProposalScopeSection = {
  title: 'Alcance',
  paragraphs: [
    'La propuesta contempla la implementación y gestión de un paquete de servicios tecnológicos básico para Indare, con el objetivo de habilitar su operación lo antes posible.',
    'El paquete incluye usuarios de google workspace administrables, registro y configuración de dominio web, un front informativo con estilo WordPress, un webhook para el reenvío automatizado de formularios de contacto y consultas, y soporte técnico continuo.',
  ],
  showDiagram: false,
}

export type ProposalPackageFeature = {
  title: string
  description: string
  icon: 'drive' | 'mail' | 'gemini' | 'geminiApp' | 'meet' | 'shield' | 'globe' | 'route' | 'ssl' | 'uptime' | 'server' | 'webhook'
}

export type ProposalPackageBlock = {
  heading: string
  priceLabel?: string
  paragraphs: string[]
  referenceLink?: {
    prefix: string
    label: string
    href: string
  }
  features: ProposalPackageFeature[]
}

export type ProposalSimulationSection = {
  title: string
  intro: string
  userCounts: readonly number[]
  pricing: {
    workspacePerLicense: number
    domain: number
    website: number
  }
}

export type ProposalHighlightSection =
  | {
      variant: 'numbered-services'
      title: string
      intro: string
      items: string[]
    }
  | {
      variant: 'package-breakdown'
      title: string
      blocks: ProposalPackageBlock[]
    }

const judicialHighlightSection: ProposalHighlightSection = {
  variant: 'numbered-services',
  title: 'Lo que KheprionAI puede mejorar',
  intro:
    'La propuesta de KheprionAI consiste en actuar como partner tecnológico de Clark, Fuentes & Nun, aportando servicios de comunicación, gestión operativa e inteligencia artificial aplicada a procesos jurídicos. Entre los servicios que KheprionAI puede entregar se incluyen:',
  items: [
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
  ],
}

const indareHighlightSection: ProposalHighlightSection = {
  variant: 'package-breakdown',
  title: 'Desglose del contenido del paquete',
  blocks: [
    {
      heading: '1) Google Workspace Business Starter',
      priceLabel: '$11.000 CLP / licencia / mes',
      paragraphs: [
        'Licencias Business Starter configurables, sujetas a reajuste conforme a las actualizaciones de precio de Google Workspace. Incluye la gestión de cuentas: creación, eliminación y desactivación de usuarios.',
      ],
      features: [
        {
          title: 'Google Drive',
          description: '30 GB de almacenamiento conjunto por usuario.',
          icon: 'drive',
        },
        {
          title: 'Correo corporativo',
          description: 'Dirección personalizada para tu empresa (ej.: nombre@tu-empresa.com).',
          icon: 'mail',
        },
        {
          title: 'Gemini en Gmail',
          description: 'Asistente de IA integrado en tu bandeja de correo.',
          icon: 'gemini',
        },
        {
          title: 'App Gemini',
          description: 'Chat con IA para consultas y productividad diaria.',
          icon: 'geminiApp',
        },
        {
          title: 'Google Meet',
          description: 'Videoconferencias con capacidad para hasta 100 participantes.',
          icon: 'meet',
        },
        {
          title: 'Seguridad y administración',
          description: 'Controles centralizados para usuarios, permisos y políticas.',
          icon: 'shield',
        },
      ],
    },
    {
      heading: '2) Gestión de dominio .cl',
      priceLabel: '$2.000 CLP / mes',
      paragraphs: [
        'Administración del dominio corporativo en extensión .cl, con mantenimiento continuo y configuración DNS para asegurar la disponibilidad de los fronts.',
      ],
      features: [
        {
          title: 'Gestión en NIC Chile',
          description: 'Administración y renovación del dominio ante el registrador oficial.',
          icon: 'globe',
        },
        {
          title: 'Ruteo a los fronts',
          description: 'Configuración de registros DNS para dirigir el tráfico hacia los sitios publicados.',
          icon: 'route',
        },
      ],
    },
    {
      heading: '3) Sitio web básico',
      priceLabel: '$39.990 CLP / mes',
      paragraphs: [
        'Desarrollo y operación de un sitio web informativo con estilo WordPress, orientado a presentar la empresa, sus servicios y canales de contacto de forma clara y profesional.',
      ],
      referenceLink: {
        prefix: 'Referencia de estilo y alcance similar a ',
        label: 'ecocrece.cl',
        href: 'https://ecocrece.cl/',
      },
      features: [
        {
          title: 'Certificado SSL',
          description: 'Cifrado HTTPS para proteger la información transmitida entre visitantes y el sitio.',
          icon: 'ssl',
        },
        {
          title: 'Mantenimiento y SLA 99,95%',
          description: 'Supervisión operativa continua con disponibilidad garantizada del servicio.',
          icon: 'uptime',
        },
        {
          title: 'Infraestructura gestionada',
          description: 'Hosting, despliegue y operación del front sin carga operativa para el cliente.',
          icon: 'server',
        },
        {
          title: 'Webhook de formularios',
          description: 'Integración para reenviar consultas de formularios informativos a cuentas de correo corporativo.',
          icon: 'webhook',
        },
      ],
    },
  ],
}

const indareSimulation: ProposalSimulationSection = {
  title: 'Simulación',
  intro:
    'Estimación mensual del paquete completo según la cantidad de licencias Google Workspace contratadas. El dominio .cl y el sitio web se consideran costos fijos; las licencias se ajustan al número de usuarios.',
  userCounts: [3, 5, 10],
  pricing: {
    workspacePerLicense: 11_000,
    domain: 2_000,
    website: 39_990,
  },
}

const judicialHeader: ProposalHeader = {
  showLogo: true,
  badgeLabel: 'Propuesta de Solución',
  showBadgeIcon: true,
  titleHighlight: 'Intake jurídico automatizado',
  titleSuffix: ' con IA para Clark, Fuentes & Nun, estudio de abogados',
  subtitle:
    'Aprovecha todo el poder de la IA para conectar clientes desde whatsapp e instagram a una red de agentes centralizada.',
}

const indareHeader: ProposalHeader = {
  showLogo: false,
  badgeLabel: 'propuesta comercial',
  showBadgeIcon: false,
  titleHighlight: '',
  titleSuffix: 'Propuesta comercial para Indare',
  subtitle: null,
}

export const PROPOSALS = [
  {
    slug: 'propuesta-judicial-1',
    title: 'Intake jurídico automatizado',
    header: judicialHeader,
    scope: judicialScope,
    showPosiblesMejoras: true,
    highlightSection: judicialHighlightSection,
    sections: {
      showKheprionWorkflow: true,
      showProposedWorkflow: true,
      showAgentCapabilities: true,
    },
  },
  {
    slug: 'ra047n7x8vch04mtpd88nke2ft6cpvwwbi9zigxarrcby8efu4pmepxwd6t8a4nmfei11xk6n0w1uuecmm7iwyi4hvty69bxabjd',
    title: 'Intake jurídico automatizado',
    header: indareHeader,
    scope: indareScope,
    showPosiblesMejoras: false,
    highlightSection: indareHighlightSection,
    sections: {
      showKheprionWorkflow: false,
      showProposedWorkflow: false,
      showAgentCapabilities: false,
    },
    simulation: indareSimulation,
  },
] as const

export type ProposalSlug = (typeof PROPOSALS)[number]['slug']
export type Proposal = (typeof PROPOSALS)[number]

export function getProposalBySlug(slug: string): Proposal | undefined {
  return PROPOSALS.find((proposal) => proposal.slug === slug)
}
