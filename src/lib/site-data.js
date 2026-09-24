/**
 * ============================================================================
 *  CONTEÚDO CENTRAL DO SITE — Opção Consultoria
 * ============================================================================
 *  Edite ESTE arquivo para alterar textos, serviços, cases e contatos.
 *  Conteúdo oficial enviado pela presidência (formulário + portfólio de cases).
 * ============================================================================
 */

import {
  Tags,
  Search,
  Wallet,
  LineChart,
  Target,
  Briefcase,
  BookOpen,
  Store,
  Landmark,
  Compass,
  Eye,
  BadgeCheck,
  Lightbulb,
  Handshake,
  TrendingUp,
  Users,
  Microscope,
  Milk,
  Shirt,
  Sofa,
  Scissors,
  GraduationCap,
  Ruler,
} from "lucide-react";

/** Configurações gerais / institucional */
export const siteConfig = {
  name: "Opção Consultoria",
  shortName: "Opção",
  legalName: "Opção Júnior",
  foundedAt: "1998-09-18",
  foundedLabel: "18 de setembro de 1998",
  // Domínio final — ajuste quando o registro.br estiver ativo
  url: "https://opcaoconsultoria.com.br",
  description:
    "Empresa júnior de consultoria da UFF, desde 1998. Estratégia, finanças e pesquisa de mercado para empresas e empreendedores de Niterói e região.",
  email: "comercial@opcaoconsultoria.com.br",
  phone: "(21) 2042-2567",
  whatsapp: "552120422567", // só dígitos, formato internacional (link wa.me)
  cnpj: "02.744.184/0001-20",
  address: {
    line1: "UFF — Campus do Gragoatá, Bloco F, Sala 202A",
    line2: "R. Prof. Marcos Waldemar de Freitas Reis — São Domingos",
    city: "Niterói",
    state: "RJ",
    zip: "24210-201",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/opcaoconsultoria/",
    instagram: "https://www.instagram.com/opcaoconsultoria/",
  },
};

/** Anos completos desde a fundação (calculado no build). */
export function yearsSinceFounding(now = new Date()) {
  const founded = new Date(siteConfig.foundedAt);
  let years = now.getFullYear() - founded.getFullYear();
  const beforeAnniversary =
    now.getMonth() < founded.getMonth() ||
    (now.getMonth() === founded.getMonth() && now.getDate() < founded.getDate());
  if (beforeAnniversary) years -= 1;
  return years;
}

/** Itens de navegação (rotas em português) */
export const navLinks = [
  { label: "Início", href: "/" },
  { label: "Sobre Nós", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Cases", href: "/cases" },
  { label: "Área de Membros", href: "/membros" },
];

/** CTA primário usado em todo o site */
export const primaryCta = {
  label: "Solicite um Diagnóstico Gratuito",
  href: "/contato",
};

/** Hero (Home) */
export const hero = {
  eyebrow: "Empresa Júnior da UFF • desde 1998",
  title: "Sua tomada de decisão com base em dados reais.",
  subtitle:
    "Estratégia, finanças e pesquisa de mercado para empresas e empreendedores de Niterói e região. Tratamos problemas reais com seriedade, clareza e método.",
};

/* ------------------------------------------------------------------------ */
/*  SERVIÇOS                                                                 */
/* ------------------------------------------------------------------------ */

/** Áreas de atuação (agrupam os serviços). */
export const serviceAreas = [
  {
    slug: "estrategias-comerciais",
    icon: Store,
    title: "Estratégias Comerciais",
    summary: "Preço e mercado: saiba quanto cobrar e para quem vender.",
  },
  {
    slug: "financas-e-riscos",
    icon: Landmark,
    title: "Finanças e Gestão de Riscos",
    summary: "Clareza sobre o caixa e segurança para investir.",
  },
  {
    slug: "estrategia-e-planejamento",
    icon: Compass,
    title: "Estratégia e Planejamento",
    summary: "Prioridades, planos e processos para crescer com direção.",
  },
];

/** Serviços — `area` aponta para serviceAreas[].slug; `slug` vira âncora em /servicos. */
export const services = [
  {
    slug: "precificacao",
    area: "estrategias-comerciais",
    icon: Tags,
    title: "Precificação",
    description:
      "Definimos estratégias de preço a partir da análise de custos, concorrência e objetivos do negócio, buscando equilibrar competitividade, percepção de valor e rentabilidade.",
    forWhom:
      "Empresas que precisam revisar preços, margens ou posicionamento competitivo.",
    deliverables: [
      "Análise da estrutura de custos",
      "Estudo da concorrência",
      "Estratégia de precificação",
      "Projeções e cenários de preço",
    ],
  },
  {
    slug: "pesquisa-de-mercado",
    area: "estrategias-comerciais",
    icon: Search,
    title: "Pesquisa de Mercado",
    description:
      "Coletamos e analisamos dados sobre consumidores, concorrentes e mercado para transformar incertezas em informações que orientem decisões comerciais.",
    forWhom:
      "Empresas que querem conhecer melhor seus clientes, avaliar oportunidades ou tomar decisões sobre produtos e posicionamento.",
    deliverables: [
      "Definição e segmentação do público-alvo",
      "Pesquisa qualitativa e/ou quantitativa",
      "Análise da concorrência",
      "Análise de mercado e comportamento do consumidor",
      "Relatório com insights e recomendações",
    ],
  },
  {
    slug: "planejamento-financeiro",
    area: "financas-e-riscos",
    icon: Wallet,
    title: "Planejamento Financeiro",
    description:
      "Estruturamos o fluxo de caixa, as projeções e os indicadores financeiros para que a empresa tenha clareza sobre seus recursos e possa planejar seus próximos passos.",
    forWhom:
      "Empresas que precisam organizar suas finanças, compreender o comportamento do caixa e planejar seu crescimento.",
    deliverables: [
      "Diagnóstico financeiro",
      "Projeção de receitas e despesas",
      "Fluxo de caixa projetado",
      "Indicadores financeiros",
      "Plano de ação financeiro",
    ],
  },
  {
    slug: "viabilidade-economica",
    area: "financas-e-riscos",
    icon: LineChart,
    title: "Análise de Viabilidade Econômica",
    description:
      "Avaliamos investimentos, novos produtos e projetos por meio de indicadores financeiros e diferentes cenários, reduzindo incertezas e dando mais segurança à decisão.",
    forWhom:
      "Empreendedores e empresas avaliando novos produtos, unidades, investimentos ou projetos.",
    deliverables: [
      "Estudo de viabilidade",
      "Projeção de receitas e custos",
      "VPL, TIR e Payback",
      "Análise de cenários e sensibilidade",
      "Relatório e recomendação de decisão",
    ],
  },
  {
    slug: "planejamento-estrategico",
    area: "estrategia-e-planejamento",
    icon: Target,
    title: "Planejamento Estratégico",
    description:
      "Transformamos objetivos de crescimento em prioridades, estratégias e planos de ação, alinhando a empresa em torno de um caminho claro.",
    forWhom:
      "Empresas que precisam definir prioridades, estruturar seu crescimento ou alinhar suas ações a objetivos claros.",
    deliverables: [
      "Diagnóstico estratégico",
      "Definição de objetivos e metas",
      "Estratégias prioritárias",
      "Plano de ação",
      "Indicadores de acompanhamento",
    ],
  },
  {
    slug: "plano-de-negocios",
    area: "estrategia-e-planejamento",
    icon: Briefcase,
    title: "Plano de Negócios",
    description:
      "Transformamos uma ideia ou oportunidade em um projeto empresarial estruturado, integrando mercado, modelo de negócio, operações, finanças e riscos.",
    forWhom:
      "Empreendedores e empresas que estão criando, expandindo ou reformulando um negócio.",
    deliverables: [
      "Análise de mercado e público-alvo",
      "Modelagem do negócio",
      "Planejamento operacional",
      "Projeções financeiras",
      "Análise de viabilidade e riscos",
    ],
  },
  {
    slug: "manuais-estrategicos",
    area: "estrategia-e-planejamento",
    icon: BookOpen,
    title: "Manuais Estratégicos",
    description:
      "Estruturamos e padronizamos processos, práticas e orientações em materiais claros e funcionais, adaptados às necessidades e à identidade de cada empresa.",
    forWhom:
      "Empresas que precisam organizar, documentar ou padronizar processos, práticas e conhecimentos internos.",
    deliverables: [
      "Levantamento de necessidades",
      "Mapeamento de processos e conteúdos",
      "Estruturação textual e visual",
      "Validação e personalização",
      "Manual final",
    ],
  },
];

/** Serviços de uma área, na ordem do portfólio. */
export function servicesByArea(areaSlug) {
  return services.filter((s) => s.area === areaSlug);
}

/* ------------------------------------------------------------------------ */
/*  CASES (portfólio oficial)                                                */
/* ------------------------------------------------------------------------ */

export const cases = [
  {
    slug: "fiocruz",
    client: "Fiocruz",
    year: null,
    icon: Microscope,
    project: "Viabilidade mercadológica",
    sector: "Pesquisa e inovação em saúde",
    about:
      "Maior instituição de pesquisa biomédica da América Latina, criada em 1900. O projeto foi feito com o CDTS (Centro de Desenvolvimento Tecnológico em Saúde), que oferta serviços técnicos ao mercado por meio de uma plataforma — e chegou à Opção por indicação.",
    challenge:
      "Verificar a efetividade, no mercado, dos serviços técnicos que o CDTS passaria a ofertar.",
    solution:
      "Estudo de viabilidade mercadológica estruturado em análise de oferta, análise de demanda e estudo de demanda econométrica.",
    results: [
      "Clareza sobre a concorrência no mercado",
      "Leitura do interesse do público-alvo",
      "Previsão da quantidade de serviços demandada",
    ],
  },
  {
    slug: "estudios-noah",
    client: "Estúdios Noah",
    year: null,
    icon: Sofa,
    project: "Estratégia, precificação e gestão",
    sector: "Mercado moveleiro — móveis exclusivos e personalizados",
    about:
      "Marca de móveis autorais com fabricação própria e loja física no Rio de Janeiro, nascida da ideia do arquiteto Salomão Medeiros.",
    challenge:
      "Pouco conhecimento sobre concorrentes e sobre o mercado moveleiro carioca, dificuldade para definir preços e se comunicar com o público, e ausência de uma cultura empresarial estruturada.",
    solution:
      "Pesquisa de mercado, sistema de precificação baseado em custos e variações de demanda, manuais para clientes (diferenciais e fidelização) e manual de cultura organizacional.",
    results: [
      "Mais competitividade e potencial de maximização de lucros",
      "Maior conexão com os clientes",
      "Padrões de atendimento e menos conflitos entre colaboradores",
      "Planos de cargos e carreiras estruturados",
    ],
  },
  {
    slug: "alva",
    client: "Alva",
    year: 2020,
    icon: Shirt,
    project: "Análise de mercado e planejamento financeiro",
    sector: "Moda e e-commerce — camisetas personalizáveis",
    about:
      "Marca de roupas com foco em camisetas personalizáveis para um público jovem que busca estilo, identidade e exclusividade.",
    challenge:
      "Entender o potencial de mercado e a viabilidade financeira do negócio, sem informações estruturadas sobre o setor, a concorrência e o público-alvo.",
    solution:
      "Análise setorial do e-commerce de moda, mapeamento de concorrentes, pesquisa com potenciais consumidores e projeções de custos e receitas com VPL, TIR e Payback.",
    results: [
      "Viabilidade financeira comprovada mesmo em cenários pessimistas",
      "Plano de entrada no mercado baseado em dados",
      "Estratégias de precificação, marketing e diferenciação definidas",
    ],
  },
  {
    slug: "cali-tecidos",
    client: "Cáli Tecidos",
    year: null,
    icon: Scissors,
    project: "Precificação e posicionamento",
    sector: "Decoração de interiores — cortinas, persianas e estofados sob medida",
    about:
      "Empresa especializada em tecidos para decoração, com soluções personalizadas que unem sofisticação, conforto e funcionalidade.",
    challenge:
      "Entender os custos e o mercado de tecidos e decoração no Rio de Janeiro e superar a falta de estratégia de posicionamento.",
    solution:
      "Modelo de precificação considerando as diferentes matérias-primas e pesquisa de mercado com as perspectivas do setor no curto e médio prazo.",
    results: [
      "Preços realistas e margens equilibradas",
      "Competitividade sustentável",
      "Decisões alinhadas às tendências e aos custos do setor",
    ],
  },
  {
    slug: "capriana",
    client: "Capriana",
    year: 2018,
    icon: Milk,
    project: "Análise de mercado",
    sector: "Laticínios — leite de cabra e derivados artesanais",
    about:
      "Granja leiteira especializada em leite de cabra e derivados, com foco em produtos artesanais e de alta qualidade.",
    challenge:
      "Baixo crescimento do faturamento e dificuldade para entender o posicionamento no mercado, sem dados sobre o setor de laticínios e o perfil dos consumidores.",
    solution:
      "Análise setorial (estatísticas, histórico e tendências do setor) e análise de demanda, com definição do público-alvo e pesquisa com os clientes.",
    results: [
      "Visão clara do mercado e dos consumidores",
      "Identificação de nichos promissores",
      "Posicionamento da marca ajustado",
      "Ações comerciais mais estratégicas",
    ],
  },
];

/** Clientes exibidos na faixa "Quem confia" (nomes; todos têm case publicado). */
export const clients = cases.map((c) => c.client);

/* ------------------------------------------------------------------------ */
/*  INSTITUCIONAL                                                            */
/* ------------------------------------------------------------------------ */

export const mission = {
  icon: Target,
  title: "Missão",
  text: "Transformar a formação acadêmica em desenvolvimento profissional de alto impacto por meio da execução de projetos que geram valor real para o mercado.",
};

export const vision = {
  icon: Eye,
  title: "Visão",
  text: "Ser reconhecida como a ponte definitiva entre o rigor acadêmico da universidade e a alta performance do mercado de consultoria empresarial.",
};

export const values = [
  {
    icon: BadgeCheck,
    title: "Profissionalismo",
    text: "Tratamos problemas reais com seriedade, clareza e método. Buscamos compreender suas causas, avaliar alternativas e construir soluções efetivas para cada demanda. Na Opção, ser estudante não é sinônimo de amadorismo.",
  },
  {
    icon: Lightbulb,
    title: "Criatividade",
    text: "Destrinchamos incertezas, desbravamos oportunidades e desenvolvemos soluções mesmo quando não existe um caminho dado.",
  },
  {
    icon: Handshake,
    title: "Compromisso",
    text: "Pertencer é assumir responsabilidades e conduzi-las com dedicação, consistência e compromisso.",
  },
  {
    icon: TrendingUp,
    title: "Progresso",
    text: "Toda experiência é uma oportunidade de aprendizado. O progresso é nosso guia.",
  },
  {
    icon: Users,
    title: "Espírito de equipe",
    text: "Diferentes talentos, alinhados a um mesmo propósito, produzem resultados que vão além do individual. Valorizamos a troca de perspectivas, o desenvolvimento conjunto e a responsabilidade compartilhada.",
  },
];

/** Diferenciais (Home) */
export const differentials = [
  {
    icon: GraduationCap,
    title: `Desde 1998 na UFF`,
    text: "Mais de duas décadas unindo o rigor acadêmico da universidade à prática de mercado.",
  },
  {
    icon: BadgeCheck,
    title: "Profissionalismo de verdade",
    text: "Seriedade, clareza e método em cada projeto. Ser estudante não é sinônimo de amadorismo.",
  },
  {
    icon: Ruler,
    title: "Soluções sob medida",
    text: "Cada projeto é desenhado para a realidade, a identidade e os objetivos do seu negócio.",
  },
  {
    icon: Handshake,
    title: "Custo de empresa júnior",
    text: "Consultoria de alto nível com o investimento acessível de uma empresa júnior.",
  },
];

/** História (Sobre) */
export const aboutStory = [
  `Fundada em ${siteConfig.foundedLabel}, a Opção Consultoria (${siteConfig.legalName}) é a empresa júnior de consultoria da Universidade Federal Fluminense, em Niterói. Formada e gerida por estudantes, transforma a formação acadêmica em desenvolvimento profissional de alto impacto — executando projetos que geram valor real para o mercado.`,
  "Nossos projetos já atenderam de negócios locais a instituições de referência nacional, como a Fiocruz. O método é sempre o mesmo: entender a causa do problema, avaliar alternativas e construir soluções efetivas para cada demanda.",
];
