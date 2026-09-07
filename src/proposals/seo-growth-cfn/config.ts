export interface KeywordCategory {
  category: string;
  description: string;
  keywords: string[];
}

export interface PricingPhase {
  phase: string;
  badge: string;
  price: number;
  originalPrice: number;
  discountLabel: string;
  status: 'active' | 'upcoming' | 'standard';
  period: string;
  condition: string;
  highlight?: boolean;
}

export interface RoadmapStep {
  step: string;
  title: string;
  duration: string;
  tasks: string[];
  status?: 'completed' | 'in_progress' | 'pending';
  statusLabel?: string;
}

export const cfnSeoProposalConfig = {
  meta: {
    client: 'Clark, Fuentes & NUN (CFN Abogados)',
    documentType: 'Brief y Propuesta de Crecimiento SEO',
    website: 'https://cfnabogados.cl',
    websiteLabel: 'cfnabogados.cl',
    brandGuidelines:
      'Marca: Clark, Fuentes & NUN (CFN Abogados). En Chile "Clark" ya está vinculada a Clark & Cía; por tanto, se consolida como CFN Abogados. NUN representa la sociedad matriz; Clark y Fuentes son las abogadas fundadoras.',
    date: '7 de septiembre de 2026',
    address: 'Rafael Cañas 50, Providencia, Santiago',
    scope: 'Google Search (Búsqueda Orgánica en Chile)',
  },

  pricing: {
    basePriceMonthly: 9990,
    currency: 'CLP',
    coreInclusions: [
      {
        title: 'Analítica en tiempo real de Google Search',
        description:
          'Métricas e impresiones de rendimiento orgánico extraídas de forma continua desde Search Console para evaluar clics, consultas y posiciones promedio.',
      },
      {
        title: 'Auditorías trimestrales profundas',
        description:
          'Evaluación periódica de factores de indexación, salud técnica, velocidad de carga, enlaces internos y actualización de contenidos.',
      },
      {
        title: 'Optimización técnica y de contenidos en Google',
        description:
          'Estrategia continua de posicionamiento en Google (SEO), optimización de meta-etiquetas, arquitectura de fichas y rastreo.',
      },
    ],
    phases: [
      {
        phase: 'Fase 1: Setup y Pipeline de Trabajo',
        badge: 'En Ejecución Activa',
        price: 0,
        originalPrice: 9990,
        discountLabel: '100% de Descuento (Oferta Pioneros)',
        status: 'active',
        period: 'Etapa inicial de montaje',
        condition:
          'Tarifa $0 CLP mientras se estructura el pipeline técnico, las fichas y la arquitectura base. Nota: los trabajos ya se encuentran iniciados.',
        highlight: true,
      },
      {
        phase: 'Fase 2: Meta 1ª Página Alcanzada',
        badge: 'Hito de Rendimiento',
        price: 2997,
        originalPrice: 9990,
        discountLabel: '70% de Descuento Especial',
        status: 'upcoming',
        period: 'Hasta completar 1 año de trabajo conjunto',
        condition:
          'Se activa al alcanzar la primera página de Google con al menos una búsqueda objetivo del catálogo, manteniéndose vigente hasta finalizar el primer año desde el inicio del trabajo.',
        highlight: false,
      },
      {
        phase: 'Fase 3: Continuidad Preferente',
        badge: 'Tarifa Regular',
        price: 9990,
        originalPrice: 9990,
        discountLabel: 'Tarifa Fija Mensual',
        status: 'standard',
        period: 'A partir del segundo año',
        condition:
          'Tarifa regular mensual para mantención continua, auditorías trimestrales y seguimiento constante de posiciones.',
        highlight: false,
      },
    ] as PricingPhase[],
  },

  objectives: {
    primary:
      'Posicionar a Clark, Fuentes & NUN en Google como el estudio jurídico de referencia para quienes buscan asesoría en Familia, Penal y Civil, con sede física en Providencia y atención telemática para todo Chile.',
    principles: [
      'Proceso iterativo: no es un rediseño puntual estático, sino un plan de crecimiento y mejora continua.',
      'Orientación a la conversión inmediata: el visitante debe identificar su trámite en segundos y solicitar consulta.',
      'Consistencia de marca: consolidación de "CFN Abogados" como entidad verificable para buscadores y clientes.',
    ],
  },

  methodology: [
    {
      title: 'Iteración continua del sitio web',
      description:
        'Ajustes progresivos de wording, fichas de servicio y llamadas a la acción de la mano con las abogadas del estudio.',
      icon: 'refresh-cw',
    },
    {
      title: 'Prioridad en páginas de servicio y conversión',
      description:
        'Enfocar la arquitectura web en resolver trámites concretos antes que en texto institucional genérico.',
      icon: 'layout',
    },
    {
      title: 'Alineación de URLs y contenidos con intención de búsqueda',
      description:
        'Estructura de metadatos, encabezados y títulos orientados estrictamente a términos transaccionales de alta intención.',
      icon: 'target',
    },
    {
      title: 'Estructuración técnica y Schema.org',
      description:
        'Implementación de datos estructurados Schema.org, FAQs verificables y consistencia NAP (Nombre, Dirección, Teléfono) para Google.',
      icon: 'layers',
    },
    {
      title: 'Medición con datos reales',
      description:
        'Monitoreo continuo de impresiones, clics y palabras clave posicionadas en Google Search Console.',
      icon: 'bar-chart-3',
    },
  ],

  keywordCategories: [
    {
      category: 'Marca y Estudio',
      description: 'Consultas de reputación, oficina local y reconocimiento del estudio',
      keywords: [
        'CFN Abogados',
        'Clark Fuentes NUN abogados',
        'estudio jurídico Providencia',
        'abogados en Providencia Santiago',
      ],
    },
    {
      category: 'Derecho de Familia',
      description: 'Trámites de alta demanda y sensibilidad personal con conversión directa',
      keywords: [
        'abogado divorcio Chile',
        'divorcio de mutuo acuerdo Chile',
        'abogado pensión de alimentos Santiago',
        'tuición y cuidado personal',
        'régimen de visitas Chile',
        'abogado familia Providencia',
      ],
    },
    {
      category: 'Derecho Penal',
      description: 'Defensa y representación penal especializada y urgente',
      keywords: [
        'abogado penal Santiago',
        'defensa penal Chile',
        'querella criminal abogado',
        'abogado penalista Providencia',
      ],
    },
    {
      category: 'Civil, Herencias y Arriendo',
      description: 'Gestión patrimonial, sucesoria y controversias inmobiliarias',
      keywords: [
        'posesión efectiva Chile',
        'abogado herencias Santiago',
        'abogado arriendo Santiago',
        'lanzamiento arrendatario moroso',
        'redacción de contratos Chile',
        'abogado civil Providencia',
      ],
    },
    {
      category: 'Intención Local y Conversión Directa',
      description: 'Búsquedas de cercanía y contratación inmediata',
      keywords: [
        'abogado cerca de Providencia',
        'consulta abogado en línea Chile',
        'WhatsApp abogado Santiago (al oficializar número)',
      ],
    },
  ] as KeywordCategory[],

  conversionStrategy: {
    coreConcept:
      'La página web debe funcionar como un catálogo ágil de soluciones jurídicas, no como un brochure decorativo. El objetivo es convertir lo antes posible.',
    guidelines: [
      {
        point: 'Páginas de servicio como puertas de entrada',
        detail:
          'Home y /servicios/ deben guiar al visitante al trámite específico en menos de 5 segundos.',
      },
      {
        point: 'Fichas con estructura de decisión rápida',
        detail:
          'Cada ficha debe resolver claramente: ¿Para qué sirve? ¿Cuándo aplica? y ¿Cuál es el siguiente paso?',
      },
      {
        point: 'Llamado a la acción unificado',
        detail:
          'CTA principal estandarizado y visible: "Solicitar una consulta" / "ENVIAR CONSULTA" (evitar la palabra "Agendar").',
      },
      {
        point: 'Integración planificada de WhatsApp',
        detail:
          'Cuando el estudio disponga del número oficial, se integrará en footer, Schema y canal directo de contacto sin inventar números previos.',
      },
      {
        point: 'Respaldos de confianza y reputación equilibrados',
        detail:
          'Quiénes Somos, reseña de NUN y la dirección física en Rafael Cañas 50 respaldan autoridad sin interponerse en la conversión.',
      },
    ],
  },

  initialRoadmap: [
    {
      step: 'Etapa 1',
      title: 'Auditoría inicial y saneamiento de arquitectura',
      duration: 'Semana 1',
      status: 'completed',
      statusLabel: 'Listo',
      tasks: [
        'Inspección de rastreo e indexación en Google Search Console.',
        'Verificación de etiquetas canónicas, robots.txt y sitemap.xml.',
        'Auditoría técnica de metadatos y encabezados en páginas de servicio.',
      ],
    },
    {
      step: 'Etapa 2',
      title: 'Optimización de fichas de servicio y títulos clave',
      duration: 'Semana 2',
      tasks: [
        'Alineación de encabezados H1/H2 con queries prioritarias (Familia, Penal, Civil).',
        'Reestructuración de fichas con esquema "¿Para qué sirve? / ¿Cuándo aplica?".',
        'Estandarización del CTA "Solicitar una consulta".',
      ],
    },
    {
      step: 'Etapa 3',
      title: 'Despliegue de datos estructurados (Schema.org) y NAP',
      duration: 'Semana 3',
      tasks: [
        'Marcado LegalService con nombre, dirección (Rafael Cañas 50) y geolocalización.',
        'Implementación de Schema FAQPage en las materias de mayor conversión.',
        'Validación de datos en Google Rich Results Test.',
      ],
    },
    {
      step: 'Etapa 4',
      title: 'Panel de analítica y puesta en marcha de auditorías',
      duration: 'Semana 4',
      tasks: [
        'Configuración de vista de analítica conectada a Google Search Console.',
        'Establecimiento de línea base para monitorear el hito de 1ª página en Google.',
        'Planificación de la primera auditoría trimestral.',
      ],
    },
  ] as RoadmapStep[],
};
