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
  | 'advisory'
  | 'check';

export type PackageFeature = {
  title: string;
  description: string;
  icon: PackageFeatureIcon;
  highlight?: boolean;
};

export type PackagePrice = {
  amount: number;
  suffix: string;
  originalAmount?: number;
  discountPercent?: number;
  customDiscountText?: string;
};

export type PackageBlock = {
  id: string;
  heading: string;
  pricing?: PackagePrice;
  priceLabel?: string;
  priceLabelOriginal?: string;
  priceLabelDiscountText?: string;
  paragraphs: string[];
  features?: PackageFeature[];
  listItems?: string[];
};

export const packageBlocks: PackageBlock[] = [
  {
    id: 'workspace',
    heading: '1) Google Workspace Business Starter (Correos corporativos)',
    pricing: {
      amount: 11990,
      suffix: 'por usuario / mes',
      customDiscountText: 'Obtén un 10% de descuento al contratar de forma anual ($10.791 CLP por usuario / mes)',
    },
    paragraphs: [
      'Cuentas de Google Workspace Business Starter corporativas configuradas a medida. La tarifa mensual por usuario es de $11.990 CLP.',
      'Las cuentas activadas para esta propuesta son:',
    ],
    listItems: [
      'Corinne.Clark@cfn.cl',
      'Macarena.Fuentes@cfn.cl',
      'Carolina.Sepulveda@cfn.cl',
      'Francisca.Sepulveda@cfn.cl',
    ],
    features: [
      {
        title: 'Almacenamiento en nube',
        description: '30 GB de almacenamiento compartido en la nube por persona.',
        icon: 'drive',
      },
      {
        title: 'Correo seguro personalizado',
        description: 'Dirección profesional con tu propio dominio (ej. tu-nombre@cfn.cl).',
        icon: 'mail',
      },
      {
        title: 'Gemini integrado en Gmail',
        description: 'Asistente de Inteligencia Artificial para redactar y resumir correos.',
        icon: 'gemini',
      },
      {
        title: 'Acceso a la app Gemini',
        description: 'Chat con IA avanzada para potenciar la productividad del equipo.',
        icon: 'geminiApp',
      },
      {
        title: 'Google Meet',
        description: 'Videollamadas de hasta 100 participantes.',
        icon: 'meet',
      },
      {
        title: 'Google Vids',
        description: 'Creador y editor de vídeos basado en IA integrado en Workspace.',
        icon: 'gemini',
      },
      {
        title: 'Controles de seguridad y gestión',
        description: 'Administración centralizada y políticas de seguridad.',
        icon: 'shield',
      },
      {
        title: 'Administración de alias de correos (Addon Workspace)',
        description: 'Redirección automática de correos entrantes a alias corporativos (Notificaciones@cfn.cl y Contacto@cfn.cl) hacia cualquiera de las cuentas principales gratis.',
        icon: 'mail',
        highlight: true,
      },
    ],
  },
  {
    id: 'web-hosting',
    heading: '2) Hosting de página web',
    priceLabel: '$2.990 CLP / mes (Primer Año)',
    paragraphs: [
      'Servicio de hosting optimizado para el sitio web del estudio jurídico durante el primer año.',
      'Nota de Founder: Al finalizar el primer año, la tarifa mensual pasará a ser de $9.990 CLP de manera indefinida por ser founder de Obsicore.',
    ],
    features: [
      {
        title: 'Infraestructura de alto rendimiento',
        description: 'Servidores rápidos y estables para tu sitio web.',
        icon: 'server',
      },
      {
        title: 'Certificado SSL',
        description: 'Conexión HTTPS segura y cifrada.',
        icon: 'ssl',
      },
    ],
  },
  {
    id: 'migration',
    heading: '3) Migración a la nube de Obsicore',
    priceLabelOriginal: '$49.990 CLP',
    priceLabelDiscountText: '100% de descuento código founder',
    paragraphs: [
      'Traslado completo del sitio y configuraciones técnicas a la nube de Obsicore de manera transparente y sin interrupciones de servicio.',
    ],
    features: [
      {
        title: 'Gestión técnica integral',
        description: 'Migración de certificados SSL existentes, creación de accesos y administración general.',
        icon: 'route',
      },
    ],
  },
  {
    id: 'general-hosting',
    heading: '4) Hosting General (Servidor/BD/Infraestructura)',
    priceLabelOriginal: '$1.990 CLP / mes',
    priceLabelDiscountText: '100% de descuento por el primer año de duración del dominio en Nic chile',
    paragraphs: [
      'Hosting general de infraestructura bonificado durante el primer año asociado al registro de dominio.',
    ],
    features: [
      {
        title: 'Uptime Garantizado',
        description: 'Monitoreo constante con SLA de disponibilidad de 99,95%.',
        icon: 'uptime',
      },
    ],
  },
  {
    id: 'advisory',
    heading: '5) Asesoramiento con KheprionAI growth',
    priceLabelOriginal: '$49.990 CLP',
    priceLabelDiscountText: '100% de descuento',
    paragraphs: [
      'Acceso a asesoramiento especializado para la adopción de herramientas de IA y automatización del crecimiento comercial.',
    ],
    features: [
      {
        title: 'Consultoría Estratégica',
        description: 'Recomendaciones a medida para escalar los canales del estudio jurídico.',
        icon: 'advisory',
        highlight: true,
      },
    ],
  },
];
