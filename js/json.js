// ESTRUTURA DE DADOS: Categorias -> SubCards -> Conteúdo
// JSON - Do Básico ao Avançado
const jsonData = {
    categorias: [
        {
            id: "basico",
            nome: "🔗 JSON BÁSICO",
            icone: "📖",
            descricao: "O que é JSON, sintaxe, tipos de dados e estrutura",
            progresso: 0,
            subCards: [
                {
                    id: "o-que-e-json",
                    nome: "O que é JSON?",
                    icone: "🎯",
                    descricao: "Conceitos, sintaxe, tipos de dados e estrutura",
                    conteudo: {
                        explicacao: "JSON (JavaScript Object Notation) é um formato de <strong>troca de dados</strong> leve e fácil de ler. É a linguagem universal da comunicação entre sistemas.",
                        codigo: "// 🎯 O QUE É JSON?\n\n// ✅ CARACTERÍSTICAS PRINCIPAIS\n// - Formato de texto\n// - Leve e legível\n// - Independente de linguagem\n// - Baseado em JavaScript\n// - Estrutura hierárquica\n\n// 📦 TIPOS DE DADOS JSON\n// - String: \"texto\"\n// - Number: 10, 10.5\n// - Boolean: true, false\n// - Null: null\n// - Object: { \"chave\": \"valor\" }\n// - Array: [1, 2, 3]\n\n// 📝 EXEMPLO BÁSICO\n{\n    \"nome\": \"Lewis Hamilton\",\n    \"numero\": 44,\n    \"equipe\": \"Ferrari\",\n    \"campeao\": true,\n    \"idade\": null,\n    \"vitorias\": 105\n}\n\n// 📚 ONDE É USADO?\n// - APIs REST\n// - Configurações\n// - Banco de dados (PostgreSQL, MongoDB)\n// - Comunicação entre sistemas\n// - Arquivos de dados\n\n// 🔄 DIFERENÇA ENTRE OBJETO JS E JSON\n// Objeto JS:\nconst pessoa = {\n    nome: 'Hamilton',\n    idade: 40\n}\n\n// JSON:\n{\n    \"nome\": \"Hamilton\",\n    \"idade\": 40\n}",
                        dica: "💡 JSON é o formato MAIS USADO para APIs! Aprender JSON é aprender a linguagem da web."
                    }
                },
                {
                    id: "sintaxe",
                    nome: "Sintaxe JSON (TUDO)",
                    icone: "📝",
                    descricao: "Chaves, valores, objetos, arrays, aninhamento",
                    conteudo: {
                        explicacao: "A sintaxe JSON é simples e baseada em pares chave-valor. Tudo entre aspas duplas.",
                        codigo: "// 📝 SINTAXE JSON COMPLETA\n\n// 📌 ESTRUTURA BÁSICA\n{\n    \"chave\": \"valor\"\n}\n\n// 📌 TIPOS DE VALORES\n{\n    \"string\": \"Lewis Hamilton\",\n    \"number\": 44,\n    \"boolean\": true,\n    \"null\": null,\n    \"array\": [1, 2, 3],\n    \"object\": { \"chave\": \"valor\" }\n}\n\n// 📌 OBJETO COMPLEXO\n{\n    \"piloto\": {\n        \"nome\": \"Lewis Hamilton\",\n        \"numero\": 44,\n        \"equipe\": {\n            \"nome\": \"Ferrari\",\n            \"ano\": 2025\n        }\n    },\n    \"estatisticas\": {\n        \"vitorias\": 105,\n        \"poles\": 104,\n        \"titulos\": 7\n    }\n}\n\n// 📌 ARRAY DE OBJETOS\n[\n    {\n        \"nome\": \"Hamilton\",\n        \"numero\": 44\n    },\n    {\n        \"nome\": \"Leclerc\",\n        \"numero\": 16\n    },\n    {\n        \"nome\": \"Sainz\",\n        \"numero\": 55\n    }\n]\n\n// 📌 ANINHAMENTO PROFUNDO\n{\n    \"usuario\": {\n        \"id\": 1,\n        \"nome\": \"Hamilton\",\n        \"configuracoes\": {\n            \"tema\": \"escuro\",\n            \"notificacoes\": {\n                \"email\": true,\n                \"push\": false\n            }\n        }\n    }\n}\n\n// 📌 REGRAS IMPORTANTES\n// ❌ SEM comentários\n// ❌ SEM vírgulas no final\n// ❌ SEM aspas simples\n// ✅ Strings em ASPAS DUPLAS\n// ✅ Chaves em ASPAS DUPLAS",
                        dica: "🔥 JSON NÃO ACEITA comentários! Chaves e strings SEMPRE com aspas duplas. Arrays e objetos podem ser aninhados."
                    }
                },
                {
                    id: "validacao",
                    nome: "Validação e Formatação",
                    icone: "✅",
                    descricao: "Validadores, formatadores, boas práticas e erros comuns",
                    conteudo: {
                        explicacao: "Validar JSON é essencial para garantir que os dados estão corretos antes de usar.",
                        codigo: "// ✅ VALIDAÇÃO E FORMATAÇÃO\n\n// 📌 ERRROS COMUNS\n\n// ❌ ERRO: Vírgula no final\n{\n    \"nome\": \"Hamilton\",\n    \"idade\": 40,   // ERRO!\n}\n\n// ❌ ERRO: Aspas simples\n{\n    'nome': 'Hamilton'  // ERRO! Use aspas duplas\n}\n\n// ❌ ERRO: Comentário\n{\n    \"nome\": \"Hamilton\"  // Isso é um comentário  // ERRO!\n}\n\n// ❌ ERRO: Chave sem aspas\n{\n    nome: \"Hamilton\"  // ERRO!\n}\n\n// 📌 FERRAMENTAS DE VALIDAÇÃO\n// 1. JSONLint (https://jsonlint.com)\n// 2. VSCode extensions\n// 3. Postman\n// 4. Ferramentas online\n\n// 📌 FORMATADORES\n// JSON Pretty (indentação)\n// Minificação (remover espaços)\n\n// 📌 BOAS PRÁTICAS\n// ✅ Use nomes de chave significativos\n// ✅ Mantenha JSON organizado\n// ✅ Use níveis apropriados de aninhamento\n// ✅ Valide antes de usar\n// ✅ Documente a estrutura\n\n// 📌 EXEMPLO FORMATADO\n{\n    \"nome\": \"Lewis Hamilton\",\n    \"numero\": 44,\n    \"equipe\": \"Ferrari\",\n    \"estatisticas\": {\n        \"vitorias\": 105,\n        \"poles\": 104\n    }\n}\n\n// 📌 EXEMPLO MINIFICADO\n{\"nome\":\"Lewis Hamilton\",\"numero\":44,\"equipe\":\"Ferrari\",\"estatisticas\":{\"vitorias\":105,\"poles\":104}}",
                        dica: "💡 SEMPRE valide seu JSON! Use ferramentas online como JSONLint. Mantenha o JSON formatado e indentado para legibilidade."
                    }
                }
            ]
        },
        {
            id: "manipulacao",
            nome: "🔗 MANIPULAÇÃO JSON",
            icone: "🛠️",
            descricao: "Parse, stringify, manipulação em JavaScript, Java, Python",
            progresso: 0,
            subCards: [
                {
                    id: "js-json",
                    nome: "JSON em JavaScript (TUDO)",
                    icone: "🟡",
                    descricao: "JSON.parse, JSON.stringify, manipulação de objetos JSON",
                    conteudo: {
                        explicacao: "JavaScript tem métodos nativos para trabalhar com JSON: JSON.parse e JSON.stringify.",
                        codigo: "// 🟡 JSON EM JAVASCRIPT\n\n// 📌 JSON.stringify (OBJETO -> JSON)\nconst pessoa = {\n    nome: 'Hamilton',\n    idade: 40,\n    equipe: 'Ferrari'\n}\n\nconst json = JSON.stringify(pessoa)\nconsole.log(json)\n// '{\"nome\":\"Hamilton\",\"idade\":40,\"equipe\":\"Ferrari\"}'\n\n// Com indentação\nconst jsonPretty = JSON.stringify(pessoa, null, 2)\n// {\n//   \"nome\": \"Hamilton\",\n//   \"idade\": 40,\n//   \"equipe\": \"Ferrari\"\n// }\n\n// 📌 JSON.parse (JSON -> OBJETO)\nconst jsonData = '{\"nome\":\"Hamilton\",\"idade\":40,\"equipe\":\"Ferrari\"}'\nconst obj = JSON.parse(jsonData)\nconsole.log(obj.nome)  // 'Hamilton'\n\n// 📌 TRATAMENTO DE ERROS\ntry {\n    const obj = JSON.parse(jsonInvalido)\n} catch (error) {\n    console.log('Erro ao parsear JSON:', error.message)\n}\n\n// 📌 MANIPULAÇÃO DE DADOS\nconst dados = {\n    pilotos: [\n        { nome: 'Hamilton', numero: 44 },\n        { nome: 'Leclerc', numero: 16 }\n    ]\n}\n\n// Adicionar\nconst dadosJson = JSON.parse(JSON.stringify(dados))\ndadosJson.pilotos.push({ nome: 'Sainz', numero: 55 })\n\n// Atualizar\ndadosJson.pilotos[0].numero = 45\n\n// Remover\ndadosJson.pilotos = dadosJson.pilotos.filter(p => p.numero !== 16)\n\n// 📌 EXEMPLO PRÁTICO - API\nfetch('/api/pilotos')\n    .then(res => res.json())\n    .then(dados => {\n        console.log(dados)\n    })\n\n// Enviar\nfetch('/api/pilotos', {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify({ nome: 'Hamilton', numero: 44 })\n})",
                        dica: "🔥 Use JSON.stringify para enviar dados para APIs. Use JSON.parse para processar respostas. Sempre use try/catch com JSON.parse."
                    }
                },
                {
                    id: "java-json",
                    nome: "JSON em Java (TUDO)",
                    icone: "☕",
                    descricao: "Jackson, Gson, ObjectMapper, @JsonProperty",
                    conteudo: {
                        explicacao: "Java tem bibliotecas poderosas para manipular JSON: Jackson (Spring) e Gson.",
                        codigo: "// ☕ JSON EM JAVA\n\n// 📌 JACKSON (Spring Boot)\nimport com.fasterxml.jackson.databind.ObjectMapper;\n\n// Objeto -> JSON\nObjectMapper mapper = new ObjectMapper();\nPiloto piloto = new Piloto(\"Hamilton\", 44);\nString json = mapper.writeValueAsString(piloto);\n\n// JSON -> Objeto\nPiloto piloto = mapper.readValue(json, Piloto.class);\n\n// 📌 ANOTAÇÕES JACKSON\nimport com.fasterxml.jackson.annotation.*;\n\npublic class Piloto {\n    @JsonProperty(\"nome_piloto\")  // Mapeia nome no JSON\n    private String nome;\n    \n    @JsonProperty(\"numero\")\n    private int numero;\n    \n    @JsonIgnore  // Ignora no JSON\n    private String senha;\n    \n    @JsonFormat(pattern = \"dd/MM/yyyy\")\n    private Date dataNascimento;\n}\n\n// 📌 GSON\nimport com.google.gson.Gson;\n\nGson gson = new Gson();\n\n// Objeto -> JSON\nString json = gson.toJson(piloto);\n\n// JSON -> Objeto\nPiloto piloto = gson.fromJson(json, Piloto.class);\n\n// 📌 ANOTAÇÕES GSON\npublic class Piloto {\n    @SerializedName(\"nome_piloto\")\n    private String nome;\n    \n    @Expose  // Inclui no JSON\n    private int numero;\n    \n    @Expose(serialize = false)  // Não serializa\n    private String senha;\n}\n\n// 📌 EXEMPLO SPRING BOOT - CONTROLLER\n@RestController\n@RequestMapping(\"/api/pilotos\")\npublic class PilotoController {\n    \n    @GetMapping\n    public List<Piloto> getPilotos() {\n        return pilotos;\n    }\n    \n    @PostMapping\n    public Piloto createPiloto(@RequestBody Piloto piloto) {\n        return pilotoService.save(piloto);\n    }\n}",
                        dica: "🔥 Jackson é o padrão no Spring Boot. Gson é mais simples e rápido. Use @JsonIgnore para campos sensíveis."
                    }
                },
                {
                    id: "python-json",
                    nome: "JSON em Python (TUDO)",
                    icone: "🐍",
                    descricao: "json.loads, json.dumps, manipulação de dados JSON",
                    conteudo: {
                        explicacao: "Python tem o módulo 'json' nativo para trabalhar com JSON.",
                        codigo: "# 🐍 JSON EM PYTHON\n\nimport json\n\n# 📌 json.dumps (DICT -> JSON)\npessoa = {\n    'nome': 'Hamilton',\n    'idade': 40,\n    'equipe': 'Ferrari'\n}\n\njson_str = json.dumps(pessoa)\n# '{\"nome\": \"Hamilton\", \"idade\": 40, \"equipe\": \"Ferrari\"}'\n\n# Com indentação\njson_str = json.dumps(pessoa, indent=2)\n# {\n#   \"nome\": \"Hamilton\",\n#   \"idade\": 40,\n#   \"equipe\": \"Ferrari\"\n# }\n\n# 📌 json.loads (JSON -> DICT)\njson_str = '{\"nome\": \"Hamilton\", \"idade\": 40, \"equipe\": \"Ferrari\"}'\ndados = json.loads(json_str)\nprint(dados['nome'])  # 'Hamilton'\n\n# 📌 TRATAMENTO DE ERROS\ntry:\n    dados = json.loads(json_invalido)\nexcept json.JSONDecodeError as e:\n    print(f'Erro ao parsear JSON: {e}')\n\n# 📌 MANIPULAÇÃO DE ARQUIVOS\n\n# Escrever\nwith open('dados.json', 'w') as f:\n    json.dump(pessoa, f, indent=2)\n\n# Ler\nwith open('dados.json', 'r') as f:\n    dados = json.load(f)\n\n# 📌 EXEMPLO PRÁTICO - API\nimport requests\n\nresponse = requests.get('https://api.example.com/pilotos')\ndados = response.json()\nprint(dados)\n\n# Enviar\nresponse = requests.post(\n    'https://api.example.com/pilotos',\n    json={'nome': 'Hamilton', 'numero': 44}\n)\n\n# 📌 DATACLASSES COM JSON\nfrom dataclasses import dataclass, asdict\n\n@dataclass\nclass Piloto:\n    nome: str\n    numero: int\n    equipe: str\n\npiloto = Piloto('Hamilton', 44, 'Ferrari')\njson_str = json.dumps(asdict(piloto))",
                        dica: "🔥 Python tem suporte NATIVO a JSON! json.loads e json.dumps são essenciais. Use dataclasses para estruturar dados."
                    }
                }
            ]
        },
        {
            id: "avancado",
            nome: "🔗 JSON AVANÇADO",
            icone: "⚡",
            descricao: "JSON Schema, JSON Patch, JSON Merge, JSON em bancos de dados",
            progresso: 0,
            subCards: [
                {
                    id: "json-schema",
                    nome: "JSON Schema (TUDO)",
                    icone: "📋",
                    descricao: "Validação, definição de esquemas, tipos, requiridos",
                    conteudo: {
                        explicacao: "JSON Schema é uma forma de descrever e validar a estrutura de dados JSON.",
                        codigo: "// 📋 JSON SCHEMA\n\n// 📌 EXEMPLO DE SCHEMA\n{\n    \"$schema\": \"http://json-schema.org/draft-07/schema#\",\n    \"title\": \"Piloto\",\n    \"type\": \"object\",\n    \"properties\": {\n        \"nome\": {\n            \"type\": \"string\",\n            \"minLength\": 2,\n            \"maxLength\": 100\n        },\n        \"numero\": {\n            \"type\": \"integer\",\n            \"minimum\": 1,\n            \"maximum\": 99\n        },\n        \"equipe\": {\n            \"type\": \"string\",\n            \"enum\": [\"Ferrari\", \"Red Bull\", \"Mercedes\"]\n        },\n        \"idade\": {\n            \"type\": \"integer\",\n            \"minimum\": 18,\n            \"maximum\": 60\n        },\n        \"campeao\": {\n            \"type\": \"boolean\"\n        }\n    },\n    \"required\": [\"nome\", \"numero\", \"equipe\"]\n}\n\n// 📌 VALIDAÇÃO\n// Usando bibliotecas como ajv (JavaScript)\nconst Ajv = require('ajv')\nconst ajv = new Ajv()\nconst validate = ajv.compile(schema)\nconst valid = validate(data)\n\nif (!valid) {\n    console.log(validate.errors)\n}\n\n// 📌 USO EM APIS\n// OpenAPI/Swagger usa JSON Schema\n// Validate dados de entrada automaticamente\n\n// 📌 EXEMPLO PRÁTICO - VALIDAÇÃO DE USUÁRIO\n{\n    \"type\": \"object\",\n    \"properties\": {\n        \"email\": {\n            \"type\": \"string\",\n            \"format\": \"email\"\n        },\n        \"senha\": {\n            \"type\": \"string\",\n            \"minLength\": 6\n        }\n    },\n    \"required\": [\"email\", \"senha\"]\n}",
                        dica: "🔥 JSON Schema é ESSENCIAL para validar dados em APIs. Use para garantir que os dados estão corretos antes de processar."
                    }
                },
                {
                    id: "json-bd",
                    nome: "JSON em Bancos de Dados",
                    icone: "🗄️",
                    descricao: "PostgreSQL JSON/JSONB, MongoDB, MySQL JSON",
                    conteudo: {
                        explicacao: "Bancos de dados modernos suportam JSON como tipo de dado nativo.",
                        codigo: "-- 🗄️ JSON EM BANCOS DE DADOS\n\n-- 📌 POSTGRESQL (JSONB)\nCREATE TABLE pilotos (\n    id SERIAL PRIMARY KEY,\n    dados JSONB\n);\n\n-- Inserir JSON\nINSERT INTO pilotos (dados) \nVALUES ('{\"nome\":\"Hamilton\",\"numero\":44,\"equipe\":\"Ferrari\"}');\n\n-- Query JSON\nSELECT dados->>'nome' AS nome,\n       dados->>'numero' AS numero\nFROM pilotos;\n\nSELECT * FROM pilotos\nWHERE dados->>'equipe' = 'Ferrari';\n\n-- Atualizar JSON\nUPDATE pilotos\nSET dados = jsonb_set(dados, '{equipe}', '\"Red Bull\"')\nWHERE dados->>'nome' = 'Hamilton';\n\n-- 📌 MONGODB\n// Inserir\ndb.pilotos.insertOne({\n    nome: 'Hamilton',\n    numero: 44,\n    equipe: 'Ferrari'\n})\n\n// Query\ndb.pilotos.find({ equipe: 'Ferrari' })\ndb.pilotos.find({ 'dados.equipe': 'Ferrari' })\n\n// Atualizar\ndb.pilotos.updateOne(\n    { nome: 'Hamilton' },\n    { $set: { equipe: 'Red Bull' } }\n)\n\n-- 📌 MYSQL (5.7+)\nCREATE TABLE pilotos (\n    id INT PRIMARY KEY,\n    dados JSON\n);\n\nINSERT INTO pilotos (id, dados)\nVALUES (1, '{\"nome\":\"Hamilton\",\"numero\":44,\"equipe\":\"Ferrari\"}');\n\nSELECT JSON_EXTRACT(dados, '$.nome') AS nome\nFROM pilotos;\n\nSELECT * FROM pilotos\nWHERE JSON_EXTRACT(dados, '$.equipe') = 'Ferrari';",
                        dica: "🔥 PostgreSQL com JSONB é a MELHOR combinação! Permite consultas SQL com dados NoSQL. MongoDB é nativo para JSON."
                    }
                },
                {
                    id: "json-api",
                    nome: "JSON em APIs (TUDO)",
                    icone: "🌐",
                    descricao: "REST APIs, JSON:API, HAL, JSON-LD, mensagens de erro",
                    conteudo: {
                        explicacao: "JSON é o formato padrão para APIs REST. Existem convenções para estruturar respostas.",
                        codigo: "// 🌐 JSON EM APIS\n\n// 📌 RESPOSTA DE SUCESSO\n{\n    \"status\": 200,\n    \"data\": {\n        \"id\": 1,\n        \"nome\": \"Lewis Hamilton\",\n        \"numero\": 44\n    },\n    \"timestamp\": \"2025-01-01T12:00:00Z\"\n}\n\n// 📌 RESPOSTA COM LISTA\n{\n    \"status\": 200,\n    \"data\": [\n        { \"id\": 1, \"nome\": \"Hamilton\" },\n        { \"id\": 2, \"nome\": \"Leclerc\" }\n    ],\n    \"pagination\": {\n        \"page\": 1,\n        \"total\": 10,\n        \"limit\": 10\n    }\n}\n\n// 📌 RESPOSTA DE ERRO\n{\n    \"status\": 404,\n    \"error\": \"Not Found\",\n    \"message\": \"Piloto não encontrado\",\n    \"timestamp\": \"2025-01-01T12:00:00Z\"\n}\n\n// 📌 VALIDAÇÃO DE ERRO\n{\n    \"status\": 400,\n    \"error\": \"Bad Request\",\n    \"messages\": [\n        \"Nome é obrigatório\",\n        \"Número deve ser entre 1 e 99\"\n    ]\n}\n\n// 📌 JSON:API FORMAT\n{\n    \"data\": {\n        \"type\": \"pilotos\",\n        \"id\": \"1\",\n        \"attributes\": {\n            \"nome\": \"Lewis Hamilton\",\n            \"numero\": 44\n        },\n        \"relationships\": {\n            \"equipe\": {\n                \"data\": {\n                    \"type\": \"equipes\",\n                    \"id\": \"1\"\n                }\n            }\n        }\n    }\n}\n\n// 📌 HAL (Hypertext Application Language)\n{\n    \"_links\": {\n        \"self\": { \"href\": \"/api/pilotos/1\" },\n        \"equipe\": { \"href\": \"/api/equipes/1\" }\n    },\n    \"nome\": \"Lewis Hamilton\",\n    \"numero\": 44\n}",
                        dica: "🔥 Padronize suas respostas JSON! Use status code + mensagem. Inclua paginação para listas. Documente com OpenAPI/Swagger."
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
    
    jsonData.categorias.forEach(function(categoria) {
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
    const categoria = jsonData.categorias.find(function(c) { return c.id === categoryId })
    
    if (!categoria) return
    
    let html = '<h2 class="section-title">🔗 ' + categoria.nome + ' 🔗</h2>'
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
    const categoria = jsonData.categorias.find(function(c) { return c.id === categoryId })
    const subCard = categoria ? categoria.subCards.find(function(s) { return s.id === subCardId }) : null
    
    if (!subCard) return
    
    const isCompleted = isSubCardCompleted(categoryId, subCardId)
    const btnText = isCompleted ? '✅ TÓPICO CONCLUÍDO!' : '🔗 MARCAR COMO CONCLUÍDO'
    
    let html = `
        <div class="content-card">
            <div class="content-title">${subCard.icone} ${subCard.nome}</div>
            <div class="content-explanation">${subCard.conteudo.explicacao}</div>
            
            <div class="code-block">
                <button class="copy-btn" onclick="copyCode(this)">📋 COPIAR</button>
                <pre>${escapeHtml(subCard.conteudo.codigo)}</pre>
            </div>
            
            <div class="tip">
                <strong>🔗 DICA DO HAMILTON:</strong> ${subCard.conteudo.dica}
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
    const saved = localStorage.getItem('completed_json_' + categoryId)
    if (!saved) return 0
    return JSON.parse(saved).length
}

function isSubCardCompleted(categoryId, subCardId) {
    const saved = localStorage.getItem('completed_json_' + categoryId)
    if (!saved) return false
    const completed = JSON.parse(saved)
    return completed.includes(subCardId)
}

function toggleComplete(categoryId, subCardId) {
    let completed = JSON.parse(localStorage.getItem('completed_json_' + categoryId) || '[]')
    
    if (completed.includes(subCardId)) {
        completed = completed.filter(function(id) { return id !== subCardId })
        console.log('%c📘 ' + subCardId + ' marcado como pendente', 'color: #ff8c00')
    } else {
        completed.push(subCardId)
        console.log('%c✅ ' + subCardId + ' concluído!', 'color: #00ff00')
    }
    
    localStorage.setItem('completed_json_' + categoryId, JSON.stringify(completed))
    
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
    console.log('%c🔗 JSON F1 carregado! Hamilton\'s Garage está pronto! 🔗', 'color: #5c5c5c; font-size: 14px; font-weight: bold;')
    console.log('%c⚡ Categorias → Tópicos → Conteúdo. Seu progresso é salvo automaticamente!', 'color: #ffd700; font-size: 12px;')
})