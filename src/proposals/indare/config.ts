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
  pricing: {
    website: number;
  };
};

export const packageBlocks: PackageBlock[] = [
  {
    heading: '1) Sitio web básico',
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
  intro: 'Estimación mensual del sitio web básico.',
  pricing: {
    website: 39_990,
  },
};
