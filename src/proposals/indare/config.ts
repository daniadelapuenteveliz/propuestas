export type PackageFeatureIcon =
  | 'drive'
  | 'mail'
  | 'gemini'
  | 'geminiApp'
  | 'meet'
  | 'shield'
  | 'globe'
  | 'route'
  | 'ssl'
  | 'uptime'
  | 'server'
  | 'webhook';

export type PackageFeature = {
  title: string;
  description: string;
  icon: PackageFeatureIcon;
};

export type PackageBlock = {
  heading: string;
  priceLabel?: string;
  paragraphs: string[];
  referenceLink?: {
    prefix: string;
    label: string;
    href: string;
  };
  features: PackageFeature[];
};

export type SimulationConfig = {
  title: string;
  intro: string;
  userCounts: readonly number[];
  pricing: {
    workspacePerLicense: number;
    domain: number;
    website: number;
  };
};

export const packageBlocks: PackageBlock[] = [
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
];

export const simulation: SimulationConfig = {
  title: 'Simulación',
  intro:
    'Estimación mensual del paquete completo según la cantidad de licencias Google Workspace contratadas. El dominio .cl y el sitio web se consideran costos fijos; las licencias se ajustan al número de usuarios.',
  userCounts: [3, 5, 10],
  pricing: {
    workspacePerLicense: 11_000,
    domain: 2_000,
    website: 39_990,
  },
};
