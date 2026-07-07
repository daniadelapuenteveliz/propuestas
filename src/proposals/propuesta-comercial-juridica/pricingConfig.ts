import type { PricingLineItem } from './ImplementationPricingCard';

const licencia: PricingLineItem = {
  concept: 'Licencia plataforma',
  includes: 'Acceso a la plataforma sin límite de usuarios.',
  amount: 40,
  originalAmount: 80,
};

const licenciaEtapa2: PricingLineItem = {
  concept: 'Licencia plataforma',
  includes: 'Acceso a la plataforma sin límite de usuarios.',
  amount: 48,
  originalAmount: 80,
};

const licenciaEtapa3: PricingLineItem = {
  concept: 'Licencia plataforma',
  includes: 'Acceso a la plataforma sin límite de usuarios.',
  amount: 56,
  originalAmount: 80,
};

const agenteClientes: PricingLineItem = {
  concept: 'Agente para clientes',
  includes: 'Atención inicial, clasificación de consultas y apertura de tickets.',
  amount: 14,
  originalAmount: 15,
};

const agenteInterna: PricingLineItem = {
  concept: 'Agente interno',
  includes: 'Apoyo en gestión de tickets, casos, archivos y plantillas de documentos.',
  amount: 14,
  originalAmount: 15,
};

const agenteClientesSinDescuento: PricingLineItem = {
  concept: 'Agente para clientes',
  includes: 'Atención inicial, clasificación de consultas y apertura de tickets.',
  amount: 15,
};

const agenteInternaSinDescuento: PricingLineItem = {
  concept: 'Agente interno',
  includes: 'Apoyo en gestión de tickets, casos, archivos y plantillas de documentos.',
  amount: 15,
};

const bolsaWhatsApp: PricingLineItem = {
  concept: 'Mensajes de whatsapp',
  includes: '500 mensajes incluidos (~30 conversaciones).',
  amount: 15,
};

const bolsaTokensEntrada: PricingLineItem = {
  concept: 'Tokens de entrada',
  includes: '5.000.000 (~50 conversaciones).',
  amount: 6.5,
};

const bolsaTokensSalida: PricingLineItem = {
  concept: 'Tokens de salida',
  includes: '500.000 (~50 conversaciones).',
  amount: 6.5,
};

const apisJudiciales: PricingLineItem = {
  concept: 'Integración con APIs judiciales',
  includes: 'Incluye APIs y toolsets judiciales conectadas a los agentes.',
  amount: 25,
};

const apisJudicialesEtapa2: PricingLineItem = {
  concept: 'Integración con APIs judiciales',
  includes: 'Incluye APIs y toolsets judiciales conectadas a los agentes.',
  amount: 20,
  originalAmount: 25,
};

const calendly: PricingLineItem = {
  concept: 'Flujo Calendly: hasta 3 licencias',
  includes:
    'Integración con Calendly que habilita a los agentes a consultar disponibilidad, coordinar y confirmar reuniones con clientes directamente desde el flujo de gestión.',
  amount: 100,
};

const bolsaInstagram: PricingLineItem = {
  concept: 'Mensajes de instagram',
  includes: '500 mensajes incluidos (~30 conversaciones).',
  amount: 13,
  originalAmount: 15,
};

const bolsaInstagramSinDescuento: PricingLineItem = {
  concept: 'Mensajes de instagram',
  includes: '500 mensajes incluidos (~30 conversaciones).',
  amount: 15,
};

const resourceBolsas = [bolsaWhatsApp, bolsaTokensEntrada, bolsaTokensSalida];
const resourceBolsasConInstagram = [bolsaWhatsApp, bolsaInstagram, bolsaTokensEntrada, bolsaTokensSalida];
const resourceBolsasConInstagramEtapa4 = [
  bolsaWhatsApp,
  bolsaInstagramSinDescuento,
  bolsaTokensEntrada,
  bolsaTokensSalida,
];

export const implementationPricingStages = [
  {
    className: 'implementation-pricing-table-etapa-1',
    title: 'Etapa 1: Integración con WhatsApp y correo',
    stageLabel: 'Total Etapa 1 — Integración con WhatsApp y correo',
    implementationItems: [licencia, agenteClientes, agenteInterna],
    resourceItems: resourceBolsas,
    total: 96,
  },
  {
    className: 'implementation-pricing-table-etapa-2',
    title: 'Etapa 2: Integración con APIs judiciales',
    intro:
      'En esta fase, los agentes internos de KheprionAI acceden a fuentes de información judicial para consultar antecedentes del caso directamente desde el chat interno, apoyando la gestión operativa sin salir del entorno de trabajo.',
    stageLabel: 'Total Etapa 2 — Integración con APIs judiciales',
    implementationItems: [licenciaEtapa2, apisJudicialesEtapa2, agenteClientesSinDescuento, agenteInternaSinDescuento],
    resourceItems: resourceBolsas,
    total: 126,
  },
  {
    className: 'implementation-pricing-table-etapa-3',
    title: 'Etapa 3: Integración con Instagram',
    intro:
      'Se extiende la capa de atención inicial al canal de Instagram, permitiendo captar consultas, clasificar leads y derivarlos al mismo flujo de tickets y gestión interna del estudio.',
    stageLabel: 'Total Etapa 3 — Integración con Instagram',
    implementationItems: [licenciaEtapa3, apisJudiciales, agenteClientesSinDescuento, agenteInternaSinDescuento],
    resourceItems: resourceBolsasConInstagram,
    total: 152,
  },
  {
    className: 'implementation-pricing-table-etapa-4',
    title: 'Etapa 4: Integración con Calendly para reuniones y citas',
    intro:
      'Se incorpora la coordinación de reuniones y citas con clientes mediante Calendly, con encuentros vía Zoom integrados al flujo de gestión para agendar, confirmar y dar seguimiento desde la plataforma.',
    stageLabel: 'Total Etapa 4 — Integración con Calendly para reuniones y citas',
    implementationItems: [
      licenciaEtapa3,
      apisJudiciales,
      calendly,
      agenteClientesSinDescuento,
      agenteInternaSinDescuento,
    ],
    resourceItems: resourceBolsasConInstagramEtapa4,
    total: 254,
  },
] as const;
