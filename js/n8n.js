// ESTRUTURA DE DADOS: Categorias -> SubCards -> Conteúdo
// N8N - Automação de Workflows Do Básico ao Avançado
const n8nData = {
    categorias: [
        {
            id: "basico",
            nome: "⚙️ N8N BÁSICO",
            icone: "📖",
            descricao: "O que é N8N, instalação, conceitos e primeiros passos",
            progresso: 0,
            subCards: [
                {
                    id: "o-que-e-n8n",
                    nome: "O que é N8N?",
                    icone: "🎯",
                    descricao: "Conceitos, automação, workflows e por que usar",
                    conteudo: {
                        explicacao: "N8N é uma plataforma <strong>open-source</strong> de automação de workflows. Ela permite conectar aplicações e automatizar processos <strong>sem escrever código</strong> (ou com JavaScript).",
                        codigo: `# 🎯 O QUE É N8N?

# ✅ CARACTERÍSTICAS PRINCIPAIS
# - Automação de workflows sem código
# - Integração com 400+ aplicações
# - Open source e self-hosted
# - UI visual e intuitiva
# - Suporte a JavaScript para lógica customizada
# - Escalável e confiável

# 🚀 CASOS DE USO
# 1. Sincronizar dados entre apps
# 2. Notificações automáticas
# 3. Processar dados em bulk
# 4. Integração com APIs
# 5. Automação de redes sociais
# 6. Webhooks e eventos
# 7. Tarefas agendadas (cron)
# 8. Extração de dados (scraping)

# 📊 COMPONENTES PRINCIPAIS
# - Triggers: O que dispara o workflow
# - Nodes: Ações e processamento
# - Connections: Conexões entre nodes
# - Data: Fluxo de informações
# - Execution: Histórico de execuções

# 🎨 EXEMPLO SIMPLES
# [Webhook Trigger] → [Process Data] → [Send Email] → [Log Result]

# 💡 N8N vs OUTRAS FERRAMENTAS
# N8N vs Make/Zapier: N8N é open source e self-hosted
# N8N vs Node-RED: N8N tem 400+ integrações prontas
# N8N vs Apache Airflow: N8N é mais simples e visual`,
                        dica: "💡 N8N é PERFEITO para automações! Se você pode descrever como passos, N8N pode fazer. Sem limite de execuções, ao contrário de Zapier!"
                    }
                },
                {
                    id: "instalacao-n8n",
                    nome: "Instalação e Setup",
                    icone: "⚙️",
                    descricao: "Instalação local, Docker, cloud e primeiro workflow",
                    conteudo: {
                        explicacao: "Diferentes formas de instalar e configurar N8N para começar a automatizar.",
                        codigo: `# ⚙️ INSTALAÇÃO DO N8N

# 🚀 OPÇÃO 1: DOCKER (RECOMENDADO)
docker run -it --rm \\
  --name n8n \\
  -p 5678:5678 \\
  -v ~/.n8n:/home/node/.n8n \\
  n8nio/n8n

# 🚀 OPÇÃO 2: DOCKER COMPOSE
# docker-compose.yml
version: '3'
services:
  n8n:
    image: n8nio/n8n
    ports:
      - "5678:5678"
    environment:
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=admin
      - N8N_BASIC_AUTH_PASSWORD=senha
    volumes:
      - ~/.n8n:/home/node/.n8n

# npm install -g n8n
# n8n start

# 🐳 OPÇÃO 3: NPM
npm install -g n8n
n8n start

# 🌐 OPÇÃO 4: CLOUD (N8N CLOUD)
# Acesse: https://www.n8n.cloud

# 🔗 ACESSO LOCAL
# Abra: http://localhost:5678

# 📝 CONFIGURAÇÃO INICIAL
# 1. Crie sua conta
# 2. Defina a senha
# 3. Você está pronto!

# 🔒 VARIÁVEIS DE AMBIENTE
export N8N_BASIC_AUTH_ACTIVE=true
export N8N_BASIC_AUTH_USER=seu_usuario
export N8N_BASIC_AUTH_PASSWORD=sua_senha
export N8N_HOST=localhost
export N8N_PORT=5678`,
                        dica: "🔥 Docker é a forma MAIS FÁCIL de instalar! Um comando e N8N está rodando localmente em http://localhost:5678"
                    }
                },
                {
                    id: "primeiro-workflow",
                    nome: "Seu Primeiro Workflow",
                    icone: "🚀",
                    descricao: "Criar, executar e salvar um workflow simples",
                    conteudo: {
                        explicacao: "Aprenda a criar seu primeiro workflow automático com disparador e ações simples.",
                        codigo: `# 🚀 CRIANDO SEU PRIMEIRO WORKFLOW

# 📝 PASSO 1: NOVO WORKFLOW
# 1. Clique em "New Workflow"
# 2. Nomeie como "Meu Primeiro Workflow"
# 3. Clique em "Create"

# 🎯 PASSO 2: ADICIONAR TRIGGER
# 1. Clique em "+"
# 2. Procure por "Webhook"
# 3. Selecione "Webhook" e configure HTTP POST

# 📤 PASSO 3: ADICIONAR NODO DE AÇÃO
# 1. Clique na seta para conectar outro nodo
# 2. Procure "Notification"
# 3. Selecione "Slack" ou "Email"

# ⚙️ CONFIGURAR SLACK
# 1. Clique no nodo Slack
# 2. Autentique sua workspace Slack
# 3. Escolha o canal
# 4. Configure a mensagem: {{$json.body.message}}

# ▶️ PASSO 4: EXECUTAR
# 1. Clique em "Test Workflow"
# 2. Execute um webhook:
curl -X POST http://localhost:5678/webhook/webhook-name \\
  -H "Content-Type: application/json" \\
  -d '{"message": "Olá N8N!"}'

# 💾 PASSO 5: SALVAR E ATIVAR
# 1. Clique "Save"
# 2. Clique no toggle para ATIVAR
# 3. Pronto! Seu workflow está automatizado!

# 🔍 TESTE SEM ATIVAR
# Use o botão "Test Workflow" para testar antes de ativar

# 📊 VER EXECUÇÕES
# Clique em "Executions" para ver o histórico de execuções

# 🛠️ EDITAR WORKFLOW
# Clique no nodo → edite suas configurações`,
                        dica: "💡 Webhook é o trigger MAIS USADO! Permite que qualquer app dispare seu workflow via HTTP POST."
                    }
                }
            ]
        },
        {
            id: "intermediario",
            nome: "⚙️ N8N INTERMEDIÁRIO",
            icone: "🔧",
            descricao: "Triggers, nodes, data flow, condições e funções JavaScript",
            progresso: 0,
            subCards: [
                {
                    id: "triggers",
                    nome: "Triggers (TUDO)",
                    icone: "⚡",
                    descricao: "Webhook, Cron, Polling, Evento e disparadores",
                    conteudo: {
                        explicacao: "Triggers são o que iniciamautomaticamente seus workflows. Existem diferentes tipos para diferentes situações.",
                        codigo: `# ⚡ TIPOS DE TRIGGERS

# 1️⃣ WEBHOOK TRIGGER
# Dispara quando recebe uma requisição HTTP
[Webhook] → [Ação]

# Usar quando:
# - APIs externas disparam eventos
# - Formulários na web
# - Integrações em tempo real

# Exemplo de curl:
curl -X POST http://localhost:5678/webhook/seu-webhook \\
  -H "Content-Type: application/json" \\
  -d '{"name": "Hamilton", "evento": "teste"}'

# 2️⃣ CRON TRIGGER
# Dispara em horários específicos (agendado)
[Cron: 0 9 * * *] → [Enviar Email Diário]

# Sintaxe: * * * * * (minuto hora dia mês dia-semana)
# 0 9 * * *    → 09:00 todos os dias
# 0 9 * * 1-5  → 09:00 seg-sex
# */5 * * * *  → A cada 5 minutos
# 0 */6 * * *  → A cada 6 horas

# 3️⃣ POLLING TRIGGER
# Verifica uma API em intervalos
[Poll Gmail a cada 5min] → [Processar Email]

# Usar quando:
# - Não há webhook disponível
# - Verificação periódica de dados

# 4️⃣ APP EVENT TRIGGER
# Dispara eventos de apps integradas
[Slack: New Message] → [Processar Mensagem]
[GitHub: New Issue] → [Notificar]
[Stripe: Payment] → [Enviar Recibo]

# 5️⃣ FUNCTION TRIGGER
# Dispara via função JavaScript
function() {
  return Math.random() > 0.5;  // 50% de chance
}

# 📊 COMPARAÇÃO
# Webhook    → Real-time, melhor performance
# Cron       → Agendado, previsível
# Polling    → Suporta qualquer API
# App Event  → Nativo, sem delay`,
                        dica: "🔥 Webhook é real-time, Cron é agendado. Escolha conforme sua necessidade. N8N suporta todos!"
                    }
                },
                {
                    id: "nodes-principais",
                    nome: "Nodes Principais",
                    icone: "🔗",
                    descricao: "HTTP, Database, Transform, Code, Conditional",
                    conteudo: {
                        explicacao: "Nodes são as ações que seu workflow executa. Existem centenas disponíveis, mas alguns são essenciais.",
                        codigo: `# 🔗 NODES MAIS USADOS

# 1️⃣ HTTP NODE
# Fazer requisições HTTP para APIs
[Webhook] → [HTTP GET/POST] → [Slack]

# Exemplo: Buscar dados de uma API
GET https://jsonplaceholder.typicode.com/users/1

# Usar quando:
# - Chamar APIs externas
# - Enviar/receber dados

# 2️⃣ SET NODE
# Transformar e mapear dados
[HTTP Response] → [Set (mapear dados)] → [Slack]

# Exemplo: Pegar id e name do retorno
{
  "userId": "{{$json.body.id}}",
  "userName": "{{$json.body.name}}"
}

# 3️⃣ FUNCTION NODE
# Executar código JavaScript customizado
[Data] → [Function (processar)] → [Database]

const data = items[0].json;
return [{
  json: {
    resultado: data.valor * 2,
    timestamp: new Date()
  }
}];

# 4️⃣ IF NODE
# Condições para diferentes fluxos
[Data] → [IF (valor > 100?)] → [Ação A ou Ação B]

# 5️⃣ LOOP NODE
# Processar arrays item por item
[Array de usuários] → [Loop] → [Enviar email para cada]

# 6️⃣ DATABASE NODE
# Conectar a MySQL, PostgreSQL, MongoDB
[Set Data] → [Database Insert] → [Log]

# 7️⃣ SLACK/EMAIL NODE
# Enviar mensagens e notificações
[Process Data] → [Slack Send Message] → Done

# 8️⃣ FILE WRITE/READ
# Salvar e ler arquivos
[Data] → [File Write] → [Success]`,
                        dica: "💡 HTTP + Set + Slack são os 3 nodes que você vai usar 80% das vezes. Domine esses primeiro!"
                    }
                },
                {
                    id: "data-mapping",
                    nome: "Data Mapping & Variáveis",
                    icone: "📊",
                    descricao: "Expressões, variáveis, JSONata e transformação de dados",
                    conteudo: {
                        explicacao: "Aprenda a trabalhar com dados, mapear campos e usar variáveis em seus workflows.",
                        codigo: `# 📊 DATA MAPPING NO N8N

# 🎯 SINTAXE BÁSICA
{{$json.campo}}          # Acessar campo JSON
{{$json.usuario.nome}}   # Campo aninhado
{{$index}}               # Índice do loop
{{$node.NomeNode.json}} # Dados de outro node

# 📝 EXEMPLOS PRÁTICOS
{{$json.body.email}}        # Email do payload
{{$json.response.data[0]}}  # Primeiro item de array
{{$json.user?.name}}        # Com fallback (opcional)

# 🔢 OPERAÇÕES COM NUMBERS
{{$json.price * 1.1}}      # Multiplicação
{{$json.total / 2}}        # Divisão
{{Math.round($json.value)}} # Arredondar

# 📋 OPERAÇÕES COM STRINGS
{{$json.nome.toUpperCase()}}     # Maiúscula
{{$json.email.toLowerCase()}}     # Minúscula
{{$json.texto.substring(0, 10)}} # Primeiros 10 chars
{{"Olá " + $json.nome}}          # Concatenar

# 📅 DATA E HORA
{{Date.now()}}                 # Timestamp atual
{{new Date().toISOString()}}   # ISO format
{{$json.createdAt | formatDate}}  # Com filtro

# ❓ CONDIÇÕES (TERNÁRIO)
{{$json.age > 18 ? "Maior" : "Menor"}}
{{$json.status === "ativo" ? "Ativado" : "Desativado"}}

# 📦 JSONATA (LINGUAGEM DE QUERY)
# N8N suporta JSONata para transformações complexas
{
  "users": $json.body.users.($$.nome & " - " & $$.email),
  "total": $json.body.users~>$count()
}

# 🔄 ARRAY OPERATIONS
{{$json.items.map(item => item.price).reduce((a,b) => a+b, 0)}}
{{$json.users.filter(u => u.ativo).length}}
{{$json.nomes.join(", ")}}

# 💾 VARIÁVEIS DE CONTEXTO
$json       # Dados da execução atual
$input      # Input do node
$env        # Variáveis de ambiente
$evaluateExpression() # Avaliar expressão

# 🛠️ FILTROS E TRANSFORMAÇÕES
| trim        # Remove espaços
| split(",")  # Dividir string
| join(" ")   # Juntar array
| parseJSON   # Parse JSON string
| formatDate  # Formatar data`,
                        dica: "🔥 {{}} permite usar expressões em qualquer campo! Aprenda a mapear dados para fazer workflows poderosos."
                    }
                },
                {
                    id: "codigo-customizado",
                    nome: "Code Node (JavaScript)",
                    icone: "💻",
                    descricao: "Escrever lógica customizada com JavaScript",
                    conteudo: {
                        explicacao: "Code Node permite escrever JavaScript puro para lógica complexa que a interface não cobre.",
                        codigo: `# 💻 CODE NODE - JAVASCRIPT CUSTOMIZADO

# ⚡ ESTRUTURA BÁSICA
// Acessar dados de entrada
const data = items[0].json;

// Processar os dados
const resultado = {
  nome: data.name.toUpperCase(),
  email: data.email.toLowerCase(),
  timestamp: Date.now()
};

// Retornar para próximo node
return [{
  json: resultado
}];

# 🔄 PROCESSAR MÚLTIPLOS ITEMS
// items contém todos os itens
return items.map(item => ({
  json: {
    id: item.json.id,
    nome: item.json.nome,
    processado: true,
    data: new Date()
  }
}));

# 📊 EXEMPLO: TRANSFORMAR DADOS
const users = items[0].json.data;

return users
  .filter(user => user.age > 18)
  .map(user => ({
    json: {
      userId: user.id,
      nome: user.name.toUpperCase(),
      email: user.email,
      maiorDeIdade: true
    }
  }));

# 🔗 CHAMAR APIS COM FETCH
// Node: HTTP alternativo
const response = await fetch('https://api.exemplo.com/data');
const data = await response.json();

return [{
  json: data
}];

# 💾 VALIDAÇÃO DE DADOS
const data = items[0].json;

if (!data.email || !data.nome) {
  throw new Error("Email e nome são obrigatórios!");
}

return [{
  json: {
    valido: true,
    ...data
  }
}];

# 🔐 USAR VARIÁVEIS DE AMBIENTE
const apiKey = $env.API_KEY;
const url = "https://api.exemplo.com?key=" + apiKey;

// Seu código aqui

# ⚠️ ERROR HANDLING
try {
  const resultado = JSON.parse(items[0].json.data);
  return [{ json: resultado }];
} catch (error) {
  return [{
    json: {
      erro: "JSON inválido: " + error.message
    }
  }];
}`,
                        dica: "🔥 Code Node é PODEROSO! JavaScript puro sem limitações. Use para lógica complexa que a UI não cobre."
                    }
                }
            ]
        },
        {
            id: "avancado",
            nome: "⚙️ N8N AVANÇADO",
            icone: "🚀",
            descricao: "Workflows complexos, expressões avançadas e otimização",
            progresso: 0,
            subCards: [
                {
                    id: "condicionais-avancados",
                    nome: "Condicionais Avançados",
                    icone: "🔀",
                    descricao: "IF/ELSE, Switch, múltiplas condições e lógica complexa",
                    conteudo: {
                        explicacao: "Controle avançado do fluxo de dados com condições complexas e múltiplas ramificações.",
                        codigo: `# 🔀 CONDICIONAIS AVANÇADOS

# 1️⃣ IF NODE - CONDIÇÕES SIMPLES
[Data] → [IF] → [Ação A ou Ação B]

Condição: $json.status === "approved"
True:  [Send Email]
False: [Log to Database]

# 2️⃣ MÚLTIPLAS CONDIÇÕES (AND/OR)
Condição: $json.age > 18 AND $json.pais === "Brasil"
Resultado: Aplica desconto

Condição: $json.status === "premium" OR $json.gasto > 1000
Resultado: Acesso liberado

# 3️⃣ SWITCH NODE (MÚLTIPLAS OPÇÕES)
[Data] → [Switch] → [Opção 1/2/3/...]

Caso 1: $json.tipo === "email"  → [Send Email]
Caso 2: $json.tipo === "sms"    → [Send SMS]
Caso 3: $json.tipo === "slack"  → [Send Slack]
Default:                        → [Log Unknown]

# 4️⃣ CONDIÇÕES ANINHADAS
[Webhook] 
  → [IF: valor > 100?]
      → [IF: tipo === "VIP"?]
          → [Send Premium Email]
      → [Else: Send Normal Email]

# 5️⃣ VALIDAÇÃO COMPLEXA (CODE NODE)
const data = items[0].json;

// Validar múltiplos campos
if (!data.email || !data.nome || !data.phone) {
  return [{
    json: { 
      valido: false,
      erro: "Dados incompletos"
    }
  }];
}

// Validar formato de email
const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
if (!emailRegex.test(data.email)) {
  return [{
    json: {
      valido: false,
      erro: "Email inválido"
    }
  }];
}

return [{
  json: {
    valido: true,
    processado: true
  }
}];

# 🎯 EXEMPLO REAL: CLASSIFICAR LEADS
[Webhook] → [Set Fields] → [Switch Classification]

switch ($json.budget) {
  case "< 1000":    return "Lead Frio" → [Email Educativo]
  case "1000-5000": return "Lead Morno" → [Demo]
  case "> 5000":    return "Lead Quente" → [Chamar Sales]
}

# 🔄 LOOP COM CONDIÇÃO
[Array de usuários] → [Loop] → [IF: ativo === true] → [Enviar]
                               [Else:] → [Skip]`,
                        dica: "🔥 Combine IF/Switch/Loop para workflows ultra-complexos! N8N suporta lógica de negócio bem complicada."
                    }
                },
                {
                    id: "loops-recursion",
                    nome: "Loops, Recursão e Batches",
                    icone: "🔁",
                    descricao: "Processar arrays, recursão, batches e parallelização",
                    conteudo: {
                        explicacao: "Técnicas avançadas para processar grandes volumes de dados e workflows recursivos.",
                        codigo: `# 🔁 LOOPS E PROCESSAMENTO EM BATCH

# 1️⃣ LOOP NODE - PROCESSAR CADA ITEM
[Array: [user1, user2, user3]]
  → [Loop] 
    → [HTTP GET /user/{id}]
    → [Save to Database]
    → [Next item in loop]

# Resultado: 3 execuções, cada uma com um usuário

# 2️⃣ SPLIT IN BATCHES
# Dividir grande array em pequenos lotes
[10.000 usuários] → [Split in Batches: 100]
  → [Processamento 1-100] → [Send Email]
  → [Processamento 101-200] → [Send Email]
  → ...

# Usar quando: API tem limite de taxa (rate limit)

# 3️⃣ PROCESSAMENTO EM PARALELO
# Executar múltiplas ações simultâneas
[Dados] 
  → [HTTP GET API 1] ⟹ \\\
  → [HTTP GET API 2] ⟹ [Merge Results]
  → [HTTP GET API 3] ⟹ /

# 4️⃣ LOOP COM CONDIÇÃO DE SAÍDA
// Code Node com loop manual
let i = 0;
const results = [];

while (i < 100 && results.length < 10) {
  const response = await fetch(\`/api/items/\${i}\`);
  const data = await response.json();
  
  if (data.importante) {
    results.push(data);
  }
  i++;
}

return [{ json: { items: results } }];

# 5️⃣ RECURSÃO - WORKFLOW CHAMANDO A SI MESMO
# Use "Workflow Trigger" para chamar outro workflow
[Webhook] → [Process Item] → [Webhook To Workflow]
                              (chamando workflow recursivo)

# Útil para: Processar árvores de dados, estruturas aninhadas

# 6️⃣ EXEMPLO REAL: SINCRONIZAR DADOS
[Database: Fetch 1000 users]
  → [Split in Batches: 50]
    → [Loop through batch]
      → [HTTP POST to External API]
      → [Wait: 1 segundo (rate limit)]
      → [Log Success]
  → [Consolidate Results]
  → [Send Summary Email]

# 7️⃣ RETRY LOGIC COM LOOP
let tentativas = 0;
const maxTentativas = 3;

while (tentativas < maxTentativas) {
  try {
    const response = await fetch('/api/unstable');
    return [{ json: response }];
  } catch (error) {
    tentativas++;
    if (tentativas < maxTentativas) {
      await new Promise(r => setTimeout(r, 1000 * tentativas));
    }
  }
}

throw new Error("Falha após 3 tentativas");`,
                        dica: "🔥 Loops + Batches + Parallelização = Workflows super eficientes! Processe milhões de dados."
                    }
                },
                {
                    id: "integracao-avancada",
                    nome: "Integrações Avançadas",
                    icone: "🔗",
                    descricao: "Webhooks de saída, OAuth, APIs customizadas e autenticação",
                    conteudo: {
                        explicacao: "Conectar N8N com qualquer aplicação usando APIs, webhooks e autenticação avançada.",
                        codigo: `# 🔗 INTEGRAÇÕES AVANÇADAS

# 1️⃣ WEBHOOK DE SAÍDA (DISPARAR EVENTOS)
# N8N envia dados para URL externa
[Process Data] → [HTTP POST] → https://seu-app.com/webhook

Payload:
{
  "userId": {{$json.user_id}},
  "evento": "pedido_criado",
  "timestamp": {{Date.now()}}
}

Headers:
Authorization: Bearer {{$env.WEBHOOK_TOKEN}}
X-Custom-Header: valor

# 2️⃣ AUTENTICAÇÃO OAUTH2
# Conectar com Google, GitHub, Slack, etc
[Node: Google Drive]
  → Configure OAuth2
  → Autorize N8N acessar sua conta
  → Integração automática!

# 3️⃣ AUTENTICAÇÃO API KEY
# Usar em headers ou query params
const apiKey = $env.API_KEY;
const headers = {
  "Authorization": \`Bearer \${apiKey}\`,
  "Content-Type": "application/json"
};

# 4️⃣ CHAMAR API COM PAGINATION
let page = 1;
let allData = [];
let hasMore = true;

while (hasMore) {
  const response = await fetch(
    \`https://api.exemplo.com/users?page=\${page}\`
  );
  const data = await response.json();
  
  allData = allData.concat(data.items);
  hasMore = data.hasNextPage;
  page++;
}

return [{ json: { users: allData } }];

# 5️⃣ TRANSFORMAR RESPOSTA DE API
[HTTP GET] → [Set Node] → Mapear dados
{
  "nome": "{{$json.body.firstName}} {{$json.body.lastName}}",
  "email": "{{$json.body.contact.email}}",
  "criado": "{{$json.body.metadata.createdAt | formatDate}}"
}

# 6️⃣ ERRO HANDLING EM INTEGRAÇÕES
const response = await fetch('/api/dados');

if (!response.ok) {
  if (response.status === 404) {
    return [{ json: { erro: "Recurso não encontrado" } }];
  } else if (response.status === 429) {
    throw new Error("Rate limit atingido, tente mais tarde");
  } else {
    throw new Error(\`Erro \${response.status}\`);
  }
}

return [{ json: await response.json() }];

# 7️⃣ EXEMPLO REAL: SINCRONIZAR CRM
[Webhook: Lead novo] 
  → [HTTP GET Salesforce]
  → [Validar lead]
  → [HTTP POST criar contato]
  → [HTTP PUT atualizar oportunidade]
  → [Send Slack Notification]
  → [Log to Database]`,
                        dica: "🔥 Webhooks permitem comunicação bidirecional! N8N pode disparar e receber de qualquer API."
                    }
                }
            ]
        },
        {
            id: "pratico",
            nome: "⚙️ N8N PRÁTICO",
            icone: "🎯",
            descricao: "Casos de uso reais, automações do mundo real e templates",
            progresso: 0,
            subCards: [
                {
                    id: "automacao-emails",
                    nome: "Automação de Emails",
                    icone: "📧",
                    descricao: "Enviar emails automáticos com triggers e templates",
                    conteudo: {
                        explicacao: "Automações comuns de email: boas-vindas, notificações, resumos diários.",
                        codigo: `# 📧 AUTOMAÇÃO DE EMAILS

# 1️⃣ EMAIL DE BEM-VINDO
[Webhook: novo usuário]
  → [Send Email]
    Destinatário: {{$json.email}}
    Assunto: "Bem-vindo {{$json.nome}}!"
    Template: Welcome email
  → [Log to Database]

# 2️⃣ NOTIFICAÇÃO DE PEDIDO
[Stripe: Payment Received]
  → [Get order details from database]
  → [Send Email]
    Assunto: "Pedido {{$json.orderId}} confirmado!"
    Para: {{$json.customerEmail}}
    Corpo: HTML com detalhes do pedido
  → [Update database: email sent]

# 3️⃣ RELATÓRIO DIÁRIO AGENDADO
[Cron: 09:00 todo dia]
  → [Database: Get yesterday's data]
  → [Summarize with Code Node]
  → [Send Email]
    Para: team@empresa.com
    Assunto: "Relatório Diário - {{Date.now() | formatDate}}"
    Corpo: {
      vendas: {{$json.totalSales}},
      pedidos: {{$json.orderCount}},
      clientes_novos: {{$json.newCustomers}}
    }

# 4️⃣ LEMBRETES AUTOMÁTICOS
[Gmail: Event created]
  → [Extract event details]
  → [Cron: 30 minutos antes]
  → [Send Email Reminder]

# 5️⃣ EMAIL EM MASSA (COM DELAY)
[Database: Get 10.000 customers]
  → [Split in Batches: 100]
    → [Loop each batch]
      → [Set: Email fields]
      → [Send Email]
      → [Wait: 1 segundo]
  → [Send summary to admin]

# 📝 TEMPLATE HTML
<html>
  <body>
    <h1>Olá {{$json.nome}}</h1>
    <p>Seu pedido {{$json.orderId}} foi {{$json.status}}</p>
    <a href="https://seu-site.com/order/{{$json.orderId}}">
      Ver Detalhes
    </a>
  </body>
</html>

# 6️⃣ VALIDAÇÃO ANTES DE ENVIAR
[Input Data]
  → [IF: email válido? AND template existe?]
    → [Send Email]
    → [Log Success]
  → [Else: Log Error]

# 🔥 DICA: Use templates do seu email provider
# Mailgun, SendGrid, Postmark têm templates prontos!`,
                        dica: "💡 Combine Cron + Email para relatórios automáticos. Separe por lotes com Split in Batches para não sobrecarregar."
                    }
                },
                {
                    id: "sincronizacao-dados",
                    nome: "Sincronização de Dados",
                    icone: "🔄",
                    descricao: "Sincronizar entre CRM, Database, APIs e aplicações",
                    conteudo: {
                        explicacao: "Manter dados sincronizados entre múltiplos sistemas em tempo real ou em horários específicos.",
                        codigo: `# 🔄 SINCRONIZAÇÃO DE DADOS

# 1️⃣ SINCRONIZAR NOVO CLIENTE CRM → DATABASE
[Webhook: Novo cliente CRM]
  → [HTTP GET CRM: Buscar detalhes]
  → [Set: Mapear campos]
  → [Database: Insert]
    INSERT INTO customers (nome, email, cpf)
    VALUES ({{$json.nome}}, {{$json.email}}, {{$json.cpf}})
  → [Log Success]

# 2️⃣ SYNC BIDIRECIONAL (CRM ↔ DATABASE)
[Cron: A cada hora]
  → [Database: GET alterados nas últimas 60min]
  → [Loop each customer]
    → [IF: existe no CRM?]
      → [Update no CRM]
    → [Else:]
      → [Create no CRM]
  → [Database: Update sync_timestamp]

# 3️⃣ SINCRONIZAR PRODUTO → E-COMMERCE
[Database: Produtos alterados]
  → [Split in Batches: 50]
    → [Loop each batch]
      → [HTTP POST: Update no Shopify]
      → [IF: sucesso?]
        → [Update status: synced]
      → [Else:]
        → [Log erro e retry]

# 4️⃣ CONSOLIDAR DADOS DE MÚLTIPLAS APIS
[Webhook: Fetch all data]
  → [HTTP GET API 1: Google Analytics]
  → [HTTP GET API 2: Facebook Ads]
  → [HTTP GET API 3: Salesforce]
  → [Code: Mesclar dados]
  → [Database: Save unified data]
  → [Send to Dashboard]

const ga = items[0].json;
const fb = items[1].json;
const sf = items[2].json;

return [{
  json: {
    date: new Date().toISOString(),
    google_analytics_sessions: ga.sessions,
    facebook_ads_spend: fb.spend,
    salesforce_pipeline: sf.pipeline
  }
}];

# 5️⃣ SINCRONIZAÇÃO COM TRATAMENTO DE ERRO
[Database fetch]
  → [Try/Catch com Loop]
    → [Para cada item, HTTP POST]
    → [IF: erro?]
      → [Retry 3x com exponential backoff]
      → [Log ao dead-letter queue]
    → [Else:]
      → [Mark as synced]
  → [Send report]

# 6️⃣ EXEMPLO REAL: SYNC LEADS HUBSPOT → PIPELINE
[Cron: A cada 30 min]
  → [HTTP GET HubSpot: New leads]
  → [Filter: Lead score > 50]
  → [Map HubSpot → Pipeline format]
  → [Database: Upsert leads]
  → [Slack: Notificar novos leads]
  → [CRM: Atualizar status]`,
                        dica: "🔥 Use Cron para sync agendado. Use Webhook para real-time. Combine ambos para melhor performance!"
                    }
                },
                {
                    id: "notificacoes-alertas",
                    nome: "Notificações e Alertas",
                    icone: "🔔",
                    descricao: "Slack, Discord, Telegram, SMS e notificações customizadas",
                    conteudo: {
                        explicacao: "Alertar sua equipe em tempo real sobre eventos importantes usando múltiplos canais.",
                        codigo: `# 🔔 NOTIFICAÇÕES E ALERTAS

# 1️⃣ ALERTA SLACK
[Webhook: Evento crítico]
  → [IF: urgente?]
    → [Slack: Send Message]
      Canal: #alertas
      Menção: @channel
      Mensagem: "🚨 ALERTA: {{$json.erro_message}}"

# 2️⃣ NOTIFICAÇÃO TELEGRAM
[Database: Pedido confirmado]
  → [Telegram Send Message]
    ChatID: {{$env.TELEGRAM_CHAT_ID}}
    Texto: 📦 Novo pedido: {{$json.orderId}}
           Valor: R$ {{$json.total}}
           Cliente: {{$json.customerName}}

# 3️⃣ SMS ALERT
[Sensor: Temperatura > 40°C]
  → [SMS Send]
    Para: {{$env.ALERT_PHONE}}
    Mensagem: "⚠️ Temperatura crítica no servidor!"

# 4️⃣ EMAIL + SLACK (MULTI-CANAL)
[Error detected]
  → [Send Email: admin@empresa.com]
  → [Send Slack: #developers]
  → [Send SMS: +55 11 98765-4321]
  → [Log to Database]

# 5️⃣ NOTIFICAÇÃO INTELIGENTE (SEM SPAM)
// Code Node: Verificar última notificação
const lastAlert = await fetch(\`/api/alerts/ultimo\`);
const minutosDesdeLast = (Date.now() - lastAlert.timestamp) / 60000;

if (minutosDesdeLast > 15) {  // Enviar só a cada 15 min
  return [{
    json: { devoNotificar: true }
  }];
}

return [{
  json: { devoNotificar: false, motivo: "Throttled" }
}];

# 6️⃣ NOTIFICAÇÃO COM CONTEXTO
[API Error]
  → [Code: Enriquecer com contexto]
  → [Slack Send]

const erro = items[0].json;

return [{
  json: {
    titulo: "❌ Erro na API",
    descricao: \`\${erro.message}\`,
    severidade: erro.code === 500 ? "🔴 CRÍTICO" : "🟡 AVISO",
    timestamp: new Date().toISOString(),
    trace: erro.stack
  }
}];

# 7️⃣ NOTIFICAÇÃO COM REAÇÃO AUTOMÁTICA
[Slack: New message in #help]
  → [IF: contains "erro"?]
    → [Ping: @devops]
    → [Create: Ticket in Jira]
    → [Send Email: support@empresa.com]

# 8️⃣ RESUMO DIÁRIO CONSOLIDADO
[Cron: 18:00]
  → [Aggregate: Todos os alerts do dia]
  → [Slack Send: Resumo formatado]

Mensagem:
📊 RESUMO DO DIA {{Date.now() | formatDate}}
✅ Sucesso: {{$json.successCount}}
⚠️ Avisos: {{$json.warningCount}}
❌ Erros: {{$json.errorCount}}
🔧 Ações: {{$json.actionsRequired}}

# 🔥 DICA: Use threads no Slack para não spammar o canal!`,
                        dica: "💡 Throttle notificações repetidas! Slack é ótimo para alertas, SMS para crítico mesmo."
                    }
                },
                {
                    id: "casos-uso",
                    nome: "Casos de Uso Reais",
                    icone: "🏆",
                    descricao: "Exemplos completos de workflows do mundo real",
                    conteudo: {
                        explicacao: "Workflows prontos para produção que você pode adaptar para seus casos de uso.",
                        codigo: `# 🏆 CASOS DE USO REAIS

# 1️⃣ PIPELINE DE VENDAS
[Webhook: Lead novo]
  → [IF: Dados completos?]
    → [Add to CRM]
    → [Send Follow-up Email]
    → [Create Slack Alert]
  → [Else: Send form para completar dados]

# 2️⃣ AUTOMAÇÃO DE FATURA
[Stripe: Pagamento recebido]
  → [Get customer details]
  → [Generate Invoice PDF]
  → [Save to Database]
  → [Send Email: Invoice]
  → [Backup to Google Drive]
  → [Slack: Invoice enviada]

# 3️⃣ SINCRONIZAÇÃO INVENTÁRIO
[Cron: A cada 1 hora]
  → [Database: Produtos com estoque baixo]
  → [FOR EACH: Enviar notification]
    → [Email: Reorder alert]
    → [Slack: #inventory-low]
    → [Create PO no sistema]

# 4️⃣ MODERAÇÃO SOCIAL MEDIA
[Twitter: New mention]
  → [Code: Analisar sentimento]
  → [IF: Negativo?]
    → [Queue para resposta manual]
    → [Alert: @social-team]
  → [Else: Log positivo]
  → [Store for analytics]

# 5️⃣ BACKUP AUTOMÁTICO
[Cron: 02:00 todo dia]
  → [Database: Export all data]
  → [Save to: AWS S3]
  → [Save to: Google Drive]
  → [Delete old backups > 30 days]
  → [Email: Backup summary]

# 6️⃣ ATENDIMENTO SUPORTE
[Email: Novo ticket]
  → [Parse: Assunto e corpo]
  → [AI: Classificar urgência]
  → [IF: Urgente?]
    → [Assign to senior agent]
  → [Else:]
    → [Assign to queue]
  → [Send: Confirmation email]
  → [Track no Jira]

# 7️⃣ MARKETING AUTOMATION
[Webhook: User signup]
  → [Add to email list: Mailchimp]
  → [Start automation: Welcome series]
    [Day 1: Welcome email]
    [Day 3: Onboarding guide]
    [Day 7: Feature highlight]
  → [Track: Open/Click rate]
  → [If engaged: Upsell offer]
  → [If inactive: Re-engagement campaign]

# 8️⃣ MONITORAMENTO DE SAÚDE
[Cron: A cada 5 min]
  → [FOR EACH endpoint:
    → [HTTP GET /health]
    → [IF: Status != 200?]
      → [Slack: Alert crítico]
      → [PagerDuty: Incident]
      → [Auto-restart: Serviço]
    → [Else: Log OK]

# 🔥 TEMPLATE: Use estes como base!
# Mais templates em: https://n8n.io/workflows`,
                        dica: "🔥 Comece com um desses casos, adapte para seu negócio. N8N é MUITO poderoso para automação!"
                    }
                }
            ]
        }
    ]
}

// Estado da aplicação
let currentCategoryId = null
let currentSubCardId = null

// Funções de navegação
function showCategories() {
    document.getElementById('categoriesContainer').style.display = 'grid'
    document.getElementById('subCardsContainer').style.display = 'none'
    document.getElementById('contentContainer').style.display = 'none'
    document.getElementById('backToCategories').style.display = 'none'
    document.getElementById('backToSubCards').style.display = 'none'
    renderCategories()
}

function showSubCards(categoryId) {
    currentCategoryId = categoryId
    document.getElementById('categoriesContainer').style.display = 'none'
    document.getElementById('subCardsContainer').style.display = 'block'
    document.getElementById('contentContainer').style.display = 'none'
    document.getElementById('backToCategories').style.display = 'inline-block'
    document.getElementById('backToSubCards').style.display = 'none'
    renderSubCards(categoryId)
}

function showContent(categoryId, subCardId) {
    currentCategoryId = categoryId
    currentSubCardId = subCardId
    document.getElementById('categoriesContainer').style.display = 'none'
    document.getElementById('subCardsContainer').style.display = 'none'
    document.getElementById('contentContainer').style.display = 'block'
    document.getElementById('backToCategories').style.display = 'none'
    document.getElementById('backToSubCards').style.display = 'inline-block'
    renderContent(categoryId, subCardId)
}

// Renderizar categorias principais
function renderCategories() {
    const container = document.getElementById('categoriesContainer')
    if (!container) return
    
    let html = ''
    
    n8nData.categorias.forEach(function(categoria) {
        const completed = getCompletedCount(categoria.id)
        const total = categoria.subCards.length
        const percent = Math.floor((completed / total) * 100)
        
        html += `
            <div class="category-card" onclick="showSubCards('${categoria.id}')">
                <div class="category-icon">${categoria.icone}</div>
                <h2>${categoria.nome}</h2>
                <p>${categoria.descricao}</p>
                <div class="category-progress">
                    📊 ${completed}/${total} tópicos (${percent}%)
                </div>
            </div>
        `
    })
    
    container.innerHTML = html
}

// Renderizar sub-cards
function renderSubCards(categoryId) {
    const container = document.getElementById('subCardsContainer')
    const categoria = n8nData.categorias.find(function(c) { return c.id === categoryId })
    
    if (!categoria) return
    
    let html = '<h2 class="section-title">⚙️ ' + categoria.nome + ' ⚙️</h2>'
    html += '<div class="sub-cards-grid">'
    
    categoria.subCards.forEach(function(subCard) {
        const isCompleted = isSubCardCompleted(categoryId, subCard.id)
        const completedClass = isCompleted ? 'completed' : ''
        
        html += `
            <div class="sub-card ${completedClass}" onclick="showContent('${categoryId}', '${subCard.id}')">
                <div class="sub-card-icon">${subCard.icone}</div>
                <h3>${subCard.nome}</h3>
                <p>${subCard.descricao}</p>
            </div>
        `
    })
    
    html += '</div>'
    container.innerHTML = html
}

// Renderizar conteúdo do tópico
function renderContent(categoryId, subCardId) {
    const container = document.getElementById('contentContainer')
    const categoria = n8nData.categorias.find(function(c) { return c.id === categoryId })
    const subCard = categoria ? categoria.subCards.find(function(s) { return s.id === subCardId }) : null
    
    if (!subCard) return
    
    const isCompleted = isSubCardCompleted(categoryId, subCardId)
    const btnText = isCompleted ? '✅ TÓPICO CONCLUÍDO!' : '⚙️ MARCAR COMO CONCLUÍDO'
    
    let html = `
        <div class="content-card">
            <div class="content-title">${subCard.icone} ${subCard.nome}</div>
            <div class="content-explanation">${subCard.conteudo.explicacao}</div>
            
            <div class="code-block">
                <button class="copy-btn" onclick="copyCode(this)">📋 COPIAR</button>
                <pre>${escapeHtml(subCard.conteudo.codigo)}</pre>
            </div>
            
            <div class="tip">
                <strong>⚙️ DICA DO HAMILTON:</strong> ${subCard.conteudo.dica}
            </div>
            
            <button id="markCompleteBtn" class="mark-complete-btn ${isCompleted ? 'completed' : ''}" onclick="toggleComplete('${categoryId}', '${subCardId}')">
                ${btnText}
            </button>
        </div>
    `
    
    container.innerHTML = html
}

// Função para copiar código
function copyCode(button) {
    const codeBlock = button.nextElementSibling
    const code = codeBlock.innerText
    navigator.clipboard.writeText(code).then(function() {
        const originalText = button.innerText
        button.innerText = '✓ COPIADO!'
        setTimeout(function() {
            button.innerText = originalText
        }, 2000)
    })
}

// Função para escapar HTML
function escapeHtml(text) {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
}

// Gerenciar progresso
function getCompletedCount(categoryId) {
    const saved = localStorage.getItem('completed_n8n_' + categoryId)
    if (!saved) return 0
    return JSON.parse(saved).length
}

function isSubCardCompleted(categoryId, subCardId) {
    const saved = localStorage.getItem('completed_n8n_' + categoryId)
    if (!saved) return false
    const completed = JSON.parse(saved)
    return completed.includes(subCardId)
}

function toggleComplete(categoryId, subCardId) {
    let completed = JSON.parse(localStorage.getItem('completed_n8n_' + categoryId) || '[]')
    
    if (completed.includes(subCardId)) {
        completed = completed.filter(function(id) { return id !== subCardId })
        console.log('%c📘 ' + subCardId + ' marcado como pendente', 'color: #2196F3')
    } else {
        completed.push(subCardId)
        console.log('%c✅ ' + subCardId + ' concluído!', 'color: #4CAF50')
    }
    
    localStorage.setItem('completed_n8n_' + categoryId, JSON.stringify(completed))
    
    if (currentSubCardId) {
        renderContent(categoryId, subCardId)
    }
    
    if (document.getElementById('subCardsContainer').style.display === 'block') {
        renderSubCards(categoryId)
    }
    
    if (document.getElementById('categoriesContainer').style.display === 'grid') {
        renderCategories()
    }
}

// Efeito de digitação no título
function typeWriterEffect() {
    const title = document.querySelector('.tech-header h1')
    if (!title) return
    
    const originalText = title.innerText
    title.innerText = ''
    let i = 0
    
    function type() {
        if (i < originalText.length) {
            title.innerText += originalText.charAt(i)
            i++
            setTimeout(type, 80)
        }
    }
    
    type()
}

// Configurar botões de navegação
function setupNavigationButtons() {
    const backToCategories = document.getElementById('backToCategories')
    const backToSubCards = document.getElementById('backToSubCards')
    
    if (backToCategories) {
        backToCategories.addEventListener('click', function() {
            showCategories()
        })
    }
    
    if (backToSubCards) {
        backToSubCards.addEventListener('click', function() {
            if (currentCategoryId) {
                showSubCards(currentCategoryId)
            }
        })
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    showCategories()
    setupNavigationButtons()
    typeWriterEffect()
    console.log('%c⚙️ N8N F1 carregado! Hamilton\'s Garage está pronto para automação! ⚙️', 'color: #FF6B35; font-size: 14px; font-weight: bold;')
    console.log('%c🚀 Categorias → Tópicos → Conteúdo. Seu progresso é salvo automaticamente!', 'color: #ffd700; font-size: 12px;')
})
