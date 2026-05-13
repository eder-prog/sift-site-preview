export type Lang = 'pt' | 'en';

export type GlimpseItem = {
  caption: string;
  h3: string;
  p: string;
};

export type CustomerRow = {
  pill: 'engaged' | 'warning' | 'risk' | 'churn';
  pillLabel: string;
  name: string;
  mrr: string;
  age: string;
};

export type Task = { text: string; meta: string };

export type Signal = { label: string; value: string; trend: 'up' | 'dn' | 'flat' };

export type Translations = {
  lang: Lang;
  meta: { title: string; description: string };
  header: {
    nav: { manifesto: string; product: string; delivers: string };
    cta: string;
    productHref: string;
    deliversHref: string;
  };
  hero: {
    taglineBefore: string;
    taglineAccent: string;
    taglineAfter: string;
    manifestoHtml: string;
    cta: string;
  };
  manifestoExt: {
    id: string;
    eyebrow: string;
    h2Before: string;
    h2Accent: string;
    h2After: string;
    steps: Array<{ num: string; h3: string; p: string }>;
    signoff: string;
  };
  glimpses: {
    id: string;
    eyebrow: string;
    h2: string;
    sub: string;
    items: [GlimpseItem, GlimpseItem, GlimpseItem];
    mock1: { barLabel: string; rows: CustomerRow[] };
    mock2: {
      title: string;
      sub: string;
      toneLabel: string;
      toneHtml: string;
      tasksLabel: string;
      tasks: Task[];
    };
    mock3: { barLabel: string; signals: Signal[] };
  };
  delivers: {
    id: string;
    eyebrow: string;
    h2: string;
    sub: string;
    items: Array<{ h3: string; p: string; icon: 'briefing' | 'signal' | 'task' }>;
  };
  voice: {
    l1: string;
    l2Before: string;
    l2Accent: string;
    l2After: string;
    l3Html: string;
  };
  demo: {
    eyebrow: string;
    h2: string;
    lede: string;
    fields: {
      name: { label: string; placeholder: string };
      email: { label: string; placeholder: string };
      phone: { label: string; aux: string; placeholder: string };
      company: { label: string; placeholder: string };
    };
    consent: string;
    button: string;
    success: string;
  };
  footer: {
    copyHtml: string;
    links: { manifesto: string; contact: string; linkedin: string };
  };
  langToggle: {
    brHref: string;
    enHref: string;
    brOn: boolean;
    enOn: boolean;
  };
};

export const pt: Translations = {
  lang: 'pt',
  meta: {
    title: 'Sift — Customer success para B2B no WhatsApp',
    description:
      'Sift transforma grupos de WhatsApp em inteligência de clientes. Uma camada de leitura sobre conversas existentes — não um CRM, não um chatbot.',
  },
  header: {
    nav: { manifesto: 'Manifesto', product: 'Produto', delivers: 'O que entrega' },
    cta: 'Agende uma demo',
    productHref: '#produto',
    deliversHref: '#entrega',
  },
  hero: {
    taglineBefore: 'Separe o sinal do ',
    taglineAccent: 'ruído',
    taglineAfter: '.',
    manifestoHtml:
      'Sift lê os grupos onde sua equipe já conversa com clientes e devolve <strong>tarefas</strong>, <strong>sinais de saúde</strong> e contexto — sem mudar de ferramenta.',
    cta: 'Agendar demo',
  },
  manifestoExt: {
    id: 'manifesto',
    eyebrow: '// MANIFESTO · 01',
    h2Before: 'Você não precisa de mais um CRM. Você precisa ',
    h2Accent: 'do que já existe',
    h2After: ', lido.',
    steps: [
      { num: '01', h3: 'Lê', p: 'Os grupos de WhatsApp onde sua equipe já conversa com clientes — sem trocar de ferramenta.' },
      { num: '02', h3: 'Filtra', p: 'Separa o sinal — pedidos, prazos, sinais de risco — do ruído operacional do dia.' },
      { num: '03', h3: 'Devolve', p: 'Briefing, tarefas e contexto direto pro seu time. Sem dashboard novo.' },
    ],
    signoff: 'Sift é essa camada.',
  },
  glimpses: {
    id: 'produto',
    eyebrow: '// PRODUTO · 02',
    h2: "Show, don't tell.",
    sub: 'Três telas. Cada uma resolve uma pergunta concreta do dia da equipe.',
    items: [
      {
        caption: '// 01 — Lista de clientes',
        h3: 'Quem está bem, quem está em risco — no mesmo lugar.',
        p: 'Sift classifica cada conta em quatro estados (Engajado / Atenção / Risco / Possível Churn) baseado em sinais de conversa: tom, frequência, palavras-chave. Atualizado a cada nova mensagem.',
      },
      {
        caption: '// 02 — Briefing automático',
        h3: 'O que aconteceu, em 12 segundos.',
        p: 'Antes da call, abre o briefing. Tom dos últimos 14 dias, tarefas pendentes extraídas das mensagens, contexto resumido. Direto, sem ler 240 linhas de chat.',
      },
      {
        caption: '// 03 — Sinais de saúde',
        h3: 'Métricas que vêm da conversa, não do formulário.',
        p: "Volume de mensagens, tempo médio de resposta, sentimento agregado, tarefas pendentes — extraído direto do WhatsApp da sua equipe. Sem dashboard pra preencher.",
      },
    ],
    mock1: {
      barLabel: '// clientes · 14 grupos',
      rows: [
        { pill: 'engaged', pillLabel: '● engajado', name: 'Northwind Logística', mrr: 'R$ 12.4k', age: '2min' },
        { pill: 'warning', pillLabel: '● atenção', name: 'Apex Alimentos', mrr: 'R$ 6.8k', age: '3h' },
        { pill: 'risk', pillLabel: '● risco', name: 'Vertex Apparel', mrr: 'R$ 4.8k', age: '3d' },
        { pill: 'engaged', pillLabel: '● engajado', name: 'Pioneer Cargo', mrr: 'R$ 9.2k', age: '12min' },
        { pill: 'churn', pillLabel: '● churn', name: 'Cedar Studios', mrr: 'R$ 3.1k', age: '14d' },
      ],
    },
    mock2: {
      title: 'Apex Alimentos',
      sub: 'cli_4g7e2 · 14d',
      toneLabel: '// Tom (últimos 14 dias)',
      toneHtml: '<strong>Atenção.</strong> Frustração crescente com prazo de entrega. 2 reclamações nas últimas 72h.',
      tasksLabel: '// Tarefas extraídas (4)',
      tasks: [
        { text: 'Revisar SLA de entrega', meta: '— ontem 14:32' },
        { text: 'Confirmar lote 8821', meta: '— ontem 18:11' },
        { text: 'Enviar NF reemitida', meta: '— hoje 09:04' },
        { text: 'Marcar call de alinhamento', meta: '— hoje 11:20' },
      ],
    },
    mock3: {
      barLabel: '// sinais · 30 dias',
      signals: [
        { label: '// Volume msgs', value: '81.234', trend: 'flat' },
        { label: '// Resposta média', value: '14min', trend: 'up' },
        { label: '// Sentimento', value: '+18%', trend: 'up' },
        { label: '// Tarefas abertas', value: '+24', trend: 'dn' },
      ],
    },
  },
  delivers: {
    id: 'entrega',
    eyebrow: '// ENTREGAS · 03',
    h2: 'O que Sift devolve pro seu time.',
    sub: 'Três entregáveis. Sem dashboard novo, sem rotina nova.',
    items: [
      { h3: 'Briefing automático', p: 'Resumo de cada cliente em segundos: tom, contexto, tarefas pendentes. Pronto antes da call.', icon: 'briefing' },
      { h3: 'Sinais de saúde', p: 'Engajado / Atenção / Risco / Churn — classificação contínua a partir de tom, frequência e palavras-chave.', icon: 'signal' },
      { h3: 'Tarefas extraídas, ranqueadas', p: 'Cada pedido, prazo e promessa que aparece nos grupos vira tarefa — priorizada por urgência e impacto.', icon: 'task' },
    ],
  },
  voice: {
    l1: 'Pare de ler 800 mensagens.',
    l2Before: 'Separe o sinal do ',
    l2Accent: 'ruído',
    l2After: '.',
    l3Html: '// customer success<br>para B2B no WhatsApp.',
  },
  demo: {
    eyebrow: '// AGENDE · 04',
    h2: 'Veja Sift funcionando em 20 minutos.',
    lede: 'Demo guiada com seu time. Mostramos como Sift lê seus grupos de WhatsApp e devolve briefing, sinal e tarefas — usando exemplos do seu próprio cenário.',
    fields: {
      name: { label: 'Nome', placeholder: 'Seu nome' },
      email: { label: 'Email corporativo', placeholder: 'voce@empresa.com' },
      phone: { label: 'Telefone', aux: '(WhatsApp)', placeholder: '(11) 99999-9999' },
      company: { label: 'Empresa', placeholder: 'Nome da empresa' },
    },
    consent: 'Aceito receber comunicação da Sift sobre a demo e produto. Você pode cancelar a qualquer momento.',
    button: 'Agendar demo',
    success: 'Pedido recebido. Em breve enviamos opções de horário.',
  },
  footer: {
    copyHtml:
      '// Sift v1.0 · 2026<br>// Customer success para B2B no WhatsApp<br>// Por Growth Solutions, Inc.',
    links: { manifesto: 'Manifesto', contact: 'Contato', linkedin: 'LinkedIn' },
  },
  langToggle: { brHref: '#', enHref: '/en/', brOn: true, enOn: false },
};

export const en: Translations = {
  lang: 'en',
  meta: {
    title: 'Sift — Customer success for B2B on WhatsApp',
    description:
      'Sift turns WhatsApp groups into customer intelligence. A reading layer over existing conversations — not a CRM, not a chatbot.',
  },
  header: {
    nav: { manifesto: 'Manifesto', product: 'Product', delivers: 'What it delivers' },
    cta: 'Book a demo',
    productHref: '#product',
    deliversHref: '#delivers',
  },
  hero: {
    taglineBefore: 'Separate the signal from the ',
    taglineAccent: 'noise',
    taglineAfter: '.',
    manifestoHtml:
      "Sift reads the groups where your team already talks to customers and returns <strong>tasks</strong>, <strong>health signals</strong>, and context — without switching tools.",
    cta: 'Book a demo',
  },
  manifestoExt: {
    id: 'manifesto',
    eyebrow: '// MANIFESTO · 01',
    h2Before: "You don't need another CRM. You need ",
    h2Accent: 'what already exists',
    h2After: ', read.',
    steps: [
      { num: '01', h3: 'Reads', p: 'The WhatsApp groups where your team already talks to customers — no tool switch.' },
      { num: '02', h3: 'Filters', p: 'Separates the signal — requests, deadlines, risk hints — from the operational noise.' },
      { num: '03', h3: 'Returns', p: 'Briefing, tasks, and context delivered to your team. No new dashboard.' },
    ],
    signoff: 'Sift is that layer.',
  },
  glimpses: {
    id: 'product',
    eyebrow: '// PRODUCT · 02',
    h2: "Show, don't tell.",
    sub: 'Three screens. Each one answers a concrete daily question from your team.',
    items: [
      {
        caption: '// 01 — Customer list',
        h3: "Who's well, who's at risk — in one place.",
        p: 'Sift classifies each account into four states (Engaged / Attention / Risk / Likely Churn) based on conversation signals: tone, frequency, keywords. Updated with every new message.',
      },
      {
        caption: '// 02 — Auto briefing',
        h3: 'What happened, in 12 seconds.',
        p: 'Before the call, open the briefing. Tone of the last 14 days, pending tasks extracted from messages, summarized context. Direct, no reading 240 lines of chat.',
      },
      {
        caption: '// 03 — Health signals',
        h3: 'Metrics that come from the conversation, not from a form.',
        p: "Message volume, average response time, aggregate sentiment, pending tasks — extracted straight from your team's WhatsApp. No dashboard to fill out.",
      },
    ],
    mock1: {
      barLabel: '// customers · 14 groups',
      rows: [
        { pill: 'engaged', pillLabel: '● engaged', name: 'Northwind Logistics', mrr: '$ 12.4k', age: '2min' },
        { pill: 'warning', pillLabel: '● attention', name: 'Apex Foods', mrr: '$ 6.8k', age: '3h' },
        { pill: 'risk', pillLabel: '● risk', name: 'Vertex Apparel', mrr: '$ 4.8k', age: '3d' },
        { pill: 'engaged', pillLabel: '● engaged', name: 'Pioneer Cargo', mrr: '$ 9.2k', age: '12min' },
        { pill: 'churn', pillLabel: '● churn', name: 'Cedar Studios', mrr: '$ 3.1k', age: '14d' },
      ],
    },
    mock2: {
      title: 'Apex Foods',
      sub: 'cli_4g7e2 · 14d',
      toneLabel: '// Tone (last 14 days)',
      toneHtml: '<strong>Attention.</strong> Growing frustration with delivery times. 2 complaints in the last 72h.',
      tasksLabel: '// Extracted tasks (4)',
      tasks: [
        { text: 'Review delivery SLA', meta: '— yesterday 14:32' },
        { text: 'Confirm batch 8821', meta: '— yesterday 18:11' },
        { text: 'Send reissued invoice', meta: '— today 09:04' },
        { text: 'Schedule alignment call', meta: '— today 11:20' },
      ],
    },
    mock3: {
      barLabel: '// signals · 30 days',
      signals: [
        { label: '// Msg volume', value: '81,234', trend: 'flat' },
        { label: '// Avg response', value: '14min', trend: 'up' },
        { label: '// Sentiment', value: '+18%', trend: 'up' },
        { label: '// Open tasks', value: '+24', trend: 'dn' },
      ],
    },
  },
  delivers: {
    id: 'delivers',
    eyebrow: '// DELIVERS · 03',
    h2: 'What Sift returns to your team.',
    sub: 'Three deliverables. No new dashboard, no new routine.',
    items: [
      { h3: 'Auto briefing', p: 'A summary of each customer in seconds: tone, context, pending tasks. Ready before the call.', icon: 'briefing' },
      { h3: 'Health signals', p: 'Engaged / Attention / Risk / Churn — continuous classification from tone, frequency, and keywords.', icon: 'signal' },
      { h3: 'Tasks, extracted and ranked', p: 'Every request, deadline, and promise that shows up in the groups becomes a task — prioritized by urgency and impact.', icon: 'task' },
    ],
  },
  voice: {
    l1: 'Stop reading 800 messages.',
    l2Before: 'Separate the signal from the ',
    l2Accent: 'noise',
    l2After: '.',
    l3Html: '// customer success<br>for B2B on WhatsApp.',
  },
  demo: {
    eyebrow: '// BOOK · 04',
    h2: 'See Sift in action in 20 minutes.',
    lede: 'Guided demo with your team. We show how Sift reads your WhatsApp groups and returns briefing, signal, and tasks — using examples from your own scenario.',
    fields: {
      name: { label: 'Name', placeholder: 'Your name' },
      email: { label: 'Work email', placeholder: 'you@company.com' },
      phone: { label: 'Phone', aux: '(WhatsApp)', placeholder: '+1 555 123 4567' },
      company: { label: 'Company', placeholder: 'Company name' },
    },
    consent: 'I agree to receive communication from Sift about the demo and product. You can opt out anytime.',
    button: 'Book demo',
    success: "Request received. We'll send time options shortly.",
  },
  footer: {
    copyHtml:
      '// Sift v1.0 · 2026<br>// Customer success for B2B on WhatsApp<br>// By Growth Solutions, Inc.',
    links: { manifesto: 'Manifesto', contact: 'Contact', linkedin: 'LinkedIn' },
  },
  langToggle: { brHref: '/', enHref: '#', brOn: false, enOn: true },
};

export const translations: Record<Lang, Translations> = { pt, en };
