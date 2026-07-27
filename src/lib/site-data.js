/**
 * ============================================================================
 *  CONTEÚDO CENTRAL DO SITE — Opção Consultoria
 * ============================================================================
 *  Edite ESTE arquivo para alterar textos, serviços, cases, depoimentos, time,
 *  contatos e números. Tudo que está marcado com [PLACEHOLDER] (ou claramente
 *  ilustrativo) deve ser substituído pelo conteúdo real aprovado pela diretoria.
 * ============================================================================
 */

import {
  Wallet,
  LineChart,
  Calculator,
  Search,
  Target,
  TrendingUp,
  ShieldCheck,
  Handshake,
  Lightbulb,
  Users,
} from "lucide-react";

/** Configurações gerais / institucional */
export const siteConfig = {
  name: "Opção Consultoria",
  shortName: "Opção",
  // [PLACEHOLDER] domínio final — ajuste quando o registro.br estiver ativo
  url: "https://opcaoconsultoria.com.br",
  description:
    "Empresa Júnior de Economia da UFF. Consultoria econômica e financeira para micro, pequenas e médias empresas de Niterói e região, com decisões baseadas em dados reais.",
  // Contatos institucionais — [PLACEHOLDER] confirmar dados reais
  email: "contato@opcaoconsultoria.com.br",
  phone: "+55 (21) 0000-0000",
  whatsapp: "5521000000000", // só dígitos, formato internacional (para link wa.me)
  cnpj: "00.000.000/0001-00", // [PLACEHOLDER]
  address: {
    line1: "Faculdade de Economia — UFF",
    line2: "Rua Tiradentes, 17 — Ingá", // [PLACEHOLDER] sala/endereço exato
    city: "Niterói",
    state: "RJ",
    zip: "24210-510", // [PLACEHOLDER]
  },
  social: {
    // [PLACEHOLDER] URLs reais das redes
    linkedin: "https://www.linkedin.com/company/opcaoconsultoria/",
    instagram: "https://www.instagram.com/opcaoconsultoria/",
  },
};

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

/** Hero (Home) — copy provisória do briefing */
export const hero = {
  eyebrow: "Empresa Júnior de Economia • UFF",
  title: "Sua tomada de decisão com base em dados reais.",
  subtitle:
    "Consultoria econômica e financeira para pequenas e médias empresas em Niterói. Diagnóstico claro, recomendações práticas e acompanhamento de perto.",
  stats: [
    { value: "Preço justo", label: "de Empresa Júnior" },
    { value: "100% UFF", label: "talentos em Economia" },
  ],
};

/**
 * Serviços (provisórios — confirmar com a diretoria).
 * `slug` é usado como âncora na página /servicos.
 */
export const services = [
  {
    slug: "planejamento-financeiro",
    icon: Wallet,
    title: "Planejamento Financeiro",
    summary: "Organize o caixa e enxergue o futuro financeiro do seu negócio.",
    description:
      "Estruturamos o fluxo de caixa, projeções e indicadores para que a empresa saiba para onde o dinheiro vai e quanto sobra ao fim do mês. [PLACEHOLDER — revisar texto com a diretoria]",
    forWhom:
      "Empresas que sentem que faltam recursos sem saber exatamente o porquê.",
    deliverables: [
      "Diagnóstico financeiro completo",
      "Fluxo de caixa projetado",
      "Painel de indicadores (KPIs)",
      "Plano de ação financeiro",
    ],
  },
  {
    slug: "viabilidade-economica",
    icon: LineChart,
    title: "Análise de Viabilidade Econômica",
    summary: "Descubra se uma ideia, produto ou expansão se paga.",
    description:
      "Avaliamos investimentos e novos projetos com indicadores como VPL, TIR e payback, reduzindo o risco da decisão. [PLACEHOLDER — revisar texto com a diretoria]",
    forWhom:
      "Empreendedores avaliando um novo produto, unidade ou investimento.",
    deliverables: [
      "Estudo de viabilidade",
      "Projeção de receitas e custos",
      "Indicadores (VPL, TIR, payback)",
      "Recomendação de decisão",
    ],
  },
  {
    slug: "gestao-de-custos",
    icon: Calculator,
    title: "Gestão de Custos",
    summary: "Saiba quanto custa cada produto e onde estão as perdas.",
    description:
      "Mapeamos custos fixos e variáveis, calculamos margem de contribuição e ponto de equilíbrio para orientar preços e cortes. [PLACEHOLDER — revisar texto com a diretoria]",
    forWhom: "Negócios com dúvida sobre precificação e margem real.",
    deliverables: [
      "Mapeamento de custos",
      "Margem de contribuição por produto",
      "Ponto de equilíbrio",
      "Recomendações de precificação",
    ],
  },
  {
    slug: "pesquisa-de-mercado",
    icon: Search,
    title: "Pesquisa de Mercado",
    summary: "Entenda seu cliente, concorrência e o tamanho da oportunidade.",
    description:
      "Coletamos e analisamos dados de mercado, concorrentes e público-alvo para embasar estratégias comerciais. [PLACEHOLDER — revisar texto com a diretoria]",
    forWhom: "Empresas lançando ou repensando produtos e posicionamento.",
    deliverables: [
      "Pesquisa com público-alvo",
      "Análise da concorrência",
      "Dimensionamento de mercado",
      "Relatório com insights acionáveis",
    ],
  },
  {
    slug: "planejamento-estrategico",
    icon: Target,
    title: "Planejamento Estratégico",
    summary: "Defina objetivos claros e um caminho para alcançá-los.",
    description:
      "Conduzimos diagnóstico, definição de metas e plano de ação para alinhar a empresa em torno de prioridades. [PLACEHOLDER — revisar texto com a diretoria]",
    forWhom: "Gestores que querem crescer com direção, não no improviso.",
    deliverables: [
      "Diagnóstico estratégico (SWOT)",
      "Objetivos e metas (OKRs)",
      "Plano de ação priorizado",
      "Indicadores de acompanhamento",
    ],
  },
];

/** Números de impacto (provisórios — [PLACEHOLDER] substituir pelos reais) */
export const stats = [
  { value: "30", suffix: "+", label: "Projetos realizados", placeholder: true },
  { value: "25", suffix: "+", label: "Clientes atendidos", placeholder: true },
  { value: "95", suffix: "%", label: "Satisfação dos clientes", placeholder: true },
  { value: "10", suffix: "+", label: "Anos de história", placeholder: true },
];

/**
 * Depoimentos — TEXTOS ILUSTRATIVOS / [PLACEHOLDER].
 * Substituir por depoimentos reais e autorizados pelos clientes.
 */
export const testimonials = [
  {
    quote:
      "A Opção trouxe clareza para os nossos números. Hoje tomamos decisões com muito mais segurança.",
    name: "Nome do Cliente",
    role: "Sócio-fundador",
    company: "Empresa Cliente",
  },
  {
    quote:
      "Profissionalismo de consultoria sênior com a proximidade de quem realmente se importa com o resultado.",
    name: "Nome do Cliente",
    role: "Diretora",
    company: "Empresa Cliente",
  },
  {
    quote:
      "O diagnóstico mostrou exatamente onde estávamos perdendo margem. O retorno veio em poucos meses.",
    name: "Nome do Cliente",
    role: "Gerente",
    company: "Empresa Cliente",
  },
];

/**
 * Logos de clientes ("Quem Confia"). Como ainda não há os arquivos,
 * usamos nomes como placeholders. Troque por <img> dos logos reais depois.
 */
export const clients = [
  "Cliente 01",
  "Cliente 02",
  "Cliente 03",
  "Cliente 04",
  "Cliente 05",
  "Cliente 06",
];

/**
 * Cases de sucesso — CONTEÚDO ILUSTRATIVO / [PLACEHOLDER].
 * Anonimizado conforme necessário. Substituir por cases reais.
 */
export const cases = [
  {
    sector: "Comércio varejista",
    icon: TrendingUp,
    challenge:
      "A empresa crescia em faturamento, mas o lucro não acompanhava e o caixa vivia apertado.",
    solution:
      "Reestruturamos o fluxo de caixa, revisamos a precificação por produto e implantamos um painel de indicadores.",
    result:
      "Aumento de margem e previsibilidade de caixa em poucos meses. [Resultado quantitativo — PLACEHOLDER]",
  },
  {
    sector: "Indústria de alimentos",
    icon: Calculator,
    challenge:
      "Não havia clareza sobre o custo real de cada produto, dificultando a definição de preços.",
    solution:
      "Mapeamento completo de custos, cálculo de margem de contribuição e ponto de equilíbrio.",
    result:
      "Política de preços baseada em dados e identificação de produtos deficitários. [PLACEHOLDER]",
  },
  {
    sector: "Serviços B2B",
    icon: Target,
    challenge:
      "Crescimento sem direção clara e dificuldade em priorizar iniciativas.",
    solution:
      "Planejamento estratégico com diagnóstico, definição de metas e plano de ação priorizado.",
    result:
      "Time alinhado em torno de objetivos comuns e metas acompanhadas mensalmente. [PLACEHOLDER]",
  },
];

/** Missão, Visão e Valores */
export const mvv = {
  mission: {
    icon: Target,
    title: "Missão",
    text: "Impulsionar o crescimento de pequenas e médias empresas com consultoria econômica e financeira acessível e de alto nível, enquanto formamos profissionais de excelência. [PLACEHOLDER]",
  },
  vision: {
    icon: TrendingUp,
    title: "Visão",
    text: "Ser referência em consultoria de empresa júnior na região de Niterói, reconhecida pelo impacto real gerado nos clientes. [PLACEHOLDER]",
  },
  values: {
    icon: ShieldCheck,
    title: "Valores",
    text: "Compromisso com resultados, ética, aprendizado contínuo e proximidade com o cliente. [PLACEHOLDER]",
  },
};

/** Diferenciais (Sobre / Home) */
export const differentials = [
  {
    icon: ShieldCheck,
    title: "Selo Empresa Júnior",
    text: "Movimento Empresa Júnior, com metodologia e supervisão acadêmica da UFF.",
  },
  {
    icon: Lightbulb,
    title: "Conhecimento de ponta",
    text: "Aplicamos o que há de mais atual em Economia, com orientação de professores.",
  },
  {
    icon: Handshake,
    title: "Preço acessível",
    text: "Qualidade de consultoria com o custo justo de uma empresa júnior.",
  },
  {
    icon: Users,
    title: "Atendimento próximo",
    text: "Acompanhamento de perto, com foco no resultado do seu negócio.",
  },
];

/** História (Sobre) — [PLACEHOLDER] */
export const aboutStory = [
  "A Opção Consultoria é a Empresa Júnior de Economia da Universidade Federal Fluminense (UFF), em Niterói/RJ. Formada e gerida por estudantes de Economia, une o rigor técnico da universidade à vontade de gerar impacto real em empresas da região. [PLACEHOLDER — substituir pela história oficial]",
  "Ao longo da nossa trajetória, ajudamos micro, pequenas e médias empresas a tomarem decisões mais inteligentes — sempre com base em dados, e não em achismos. Cada projeto também forma profissionais preparados para o mercado. [PLACEHOLDER]",
];

/**
 * Time / Diretoria — [PLACEHOLDER].
 * Substituir nomes, cargos e fotos (coloque as fotos em /public/images/time/).
 */
export const team = [
  { name: "Nome do Membro", role: "Presidência", photo: null },
  { name: "Nome do Membro", role: "Diretoria de Projetos", photo: null },
  { name: "Nome do Membro", role: "Diretoria Comercial", photo: null },
  { name: "Nome do Membro", role: "Gestão de Recursos", photo: null },
  { name: "Nome do Membro", role: "Marketing", photo: null },
  { name: "Nome do Membro", role: "Diretoria Administrativa", photo: null },
];
