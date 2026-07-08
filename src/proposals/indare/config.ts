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
  | 'webhook'
  | 'advisory';

export type PackageFeature = {
  title: string;
  description: string;
  icon: PackageFeatureIcon;
  highlight?: boolean;
};

export type PackagePrice = {
  amount: number;
  suffix: string;
  annualDiscountPercent?: number;
};

export type PackageBlock = {
  heading: string;
  priceLabel?: string;
  pricing?: PackagePrice;
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
    workspaceAnnualDiscountPercent?: number;
    website: number;
  };
};

export const packageBlocks: PackageBlock[] = [
  {
    heading: '1) Google Workspace Business Starter',
    pricing: {
      amount: 11_990,
      suffix: '/ licencia / mes',
      annualDiscountPercent: 10,
    },
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
    heading: '2) Sitio web de tipo marketing y presentación',
    priceLabel: '$14.990 CLP / mes',
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
      {
        title: 'Asesoría digital especializada en Infraestructura digital y comunicación',
        description:
          'Ayuda en la toma de decisiones relacionadas con Infraestructura digital, comunicación e IA.',
        icon: 'advisory',
        highlight: true,
      },
    ],
  },
];

export const simulation: SimulationConfig = {
  title: 'Simulación',
  intro:
    'Estimación mensual del paquete completo según la cantidad de licencias Google Workspace contratadas. El sitio web se considera un costo fijo mensual; las licencias se ajustan al número de usuarios.',
  userCounts: [5],
  pricing: {
    workspacePerLicense: 11_990,
    workspaceAnnualDiscountPercent: 10,
    website: 14_990,
  },
};
