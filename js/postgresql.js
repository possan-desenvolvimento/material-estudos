// ESTRUTURA DE DADOS: Categorias -> SubCards -> Conteúdo
// PostgreSQL - Do Básico ao Avançado
const postgresData = {
    categorias: [
        {
            id: "basico",
            nome: "🐘 POSTGRES BÁSICO",
            icone: "📖",
            descricao: "O que é PostgreSQL, instalação, comandos básicos e tipos de dados",
            progresso: 0,
            subCards: [
                {
                    id: "o-que-e-postgres",
                    nome: "O que é PostgreSQL?",
                    icone: "🎯",
                    descricao: "Conceitos, vantagens e diferenças para outros bancos",
                    conteudo: {
                        explicacao: "PostgreSQL é um sistema de gerenciamento de banco de dados <strong>relacional</strong> e <strong>orientado a objetos</strong> de código aberto. É conhecido por sua robustez, extensibilidade e conformidade com padrões SQL.",
                        codigo: "-- 🎯 O QUE É POSTGRESQL?\n\n-- ✅ CARACTERÍSTICAS PRINCIPAIS\n-- - Open Source (código aberto)\n-- - ACID (Atomicidade, Consistência, Isolamento, Durabilidade)\n-- - Suporte a JSON e JSONB\n-- - Full-text search\n-- - Extensões (PostGIS, TimescaleDB, etc)\n-- - Replicação e alta disponibilidade\n-- - Comunidade ativa\n\n-- 🔄 DIFERENÇAS PARA OUTROS BANCOS\n-- MySQL:  | PostgreSQL:\n-- - Mais simples | - Mais robusto\n-- - MyISAM/InnoDB | - ACID completo\n-- - Menos features | - Mais features\n-- - Mais popular para web | - Mais para aplicações complexas\n\n-- SQLite:  | PostgreSQL:\n-- - Leve | - Pesado\n-- - Sem servidor | - Servidor dedicado\n-- - Para mobile | - Para produção\n\n-- 🏗️ ARQUITETURA\n-- Cliente (psql, aplicações)\n--   ↓\n-- Servidor PostgreSQL (postgres)\n--   ↓\n-- Bancos de dados\n--   ↓\n-- Tabelas, índices, views\n\n-- 📦 ONDE USAR?\n-- - Aplicações web (alta concorrência)\n-- - Sistemas financeiros\n-- - Georreferenciamento (PostGIS)\n-- - Data warehousing\n-- - Aplicações com JSON/NoSQL",
                        dica: "💡 PostgreSQL é o banco mais avançado do mercado open-source. Use para aplicações que precisam de consistência e features avançadas."
                    }
                },
                {
                    id: "instalacao-postgres",
                    nome: "Instalação e Configuração",
                    icone: "⚙️",
                    descricao: "Instalar, configurar, acessar e primeiro login",
                    conteudo: {
                        explicacao: "Instalação do PostgreSQL e configuração inicial para começar a usar.",
                        codigo: "-- ⚙️ INSTALAÇÃO DO POSTGRESQL\n\n-- 🐧 LINUX (Ubuntu/Debian)\nsudo apt update\nsudo apt install postgresql postgresql-contrib\n\n-- 🐧 LINUX (Fedora/RHEL)\nsudo dnf install postgresql-server postgresql-contrib\nsudo postgresql-setup --initdb\nsudo systemctl start postgresql\n\n-- 🍎 MAC (via Homebrew)\nbrew install postgresql\nbrew services start postgresql\n\n-- 🪟 WINDOWS\n-- Baixe: https://www.postgresql.org/download/windows/\n\n-- 🔧 VERIFICAR INSTALAÇÃO\npsql --version\nsudo systemctl status postgresql\n\n-- 🔑 PRIMEIRO ACESSO\nsudo -u postgres psql        # Entra como usuário postgres\n\n-- 🔒 ALTERAR SENHA DO POSTGRES\nALTER USER postgres WITH PASSWORD 'nova_senha';\n\n-- 👤 CRIAR USUÁRIO\nCREATE USER meu_usuario WITH PASSWORD 'minha_senha';\n\n-- 📁 CRIAR BANCO DE DADOS\nCREATE DATABASE meu_banco OWNER meu_usuario;\n\n-- 📋 CONFIGURAR ACESSO REMOTO\n-- Editar /etc/postgresql/15/main/postgresql.conf\nlisten_addresses = '*'\n\n-- Editar /etc/postgresql/15/main/pg_hba.conf\nhost    all             all             0.0.0.0/0               md5\n\n-- 🔄 REINICIAR SERVIÇO\nsudo systemctl restart postgresql",
                        dica: "🔥 Após instalar, sempre altere a senha do usuário postgres. Crie usuários específicos para cada aplicação."
                    }
                },
                {
                    id: "comandos-basicos",
                    nome: "Comandos Básicos (TUDO)",
                    icone: "⌨️",
                    descricao: "psql, \l, \d, \dt, CREATE, INSERT, SELECT, UPDATE, DELETE",
                    conteudo: {
                        explicacao: "Comandos essenciais do PostgreSQL para gerenciar bancos de dados e tabelas.",
                        codigo: "-- ⌨️ COMANDOS BÁSICOS DO PSQL\n\n-- 📌 COMANDOS DO PSQL (dentro do terminal)\n\\l                    -- Lista bancos de dados\n\\c nome_banco         -- Conecta ao banco\n\\dt                   -- Lista tabelas\n\\d nome_tabela        -- Descreve tabela\n\\du                   -- Lista usuários\n\\dn                   -- Lista schemas\n\\?                    -- Ajuda\n\\q                    -- Sai\n\\i script.sql         -- Executa script\n\n-- 📌 COMANDOS SQL BÁSICOS\n\n-- Criar banco\nCREATE DATABASE meu_banco;\n\n-- Conectar\n\\c meu_banco;\n\n-- Criar tabela\nCREATE TABLE pilotos (\n    id SERIAL PRIMARY KEY,\n    nome VARCHAR(100) NOT NULL,\n    numero INT UNIQUE NOT NULL,\n    equipe VARCHAR(100),\n    idade INT,\n    ativo BOOLEAN DEFAULT true,\n    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\n-- Inserir dados\nINSERT INTO pilotos (nome, numero, equipe, idade) \nVALUES ('Lewis Hamilton', 44, 'Ferrari', 40);\n\nINSERT INTO pilotos (nome, numero, equipe, idade) \nVALUES \n    ('Charles Leclerc', 16, 'Ferrari', 26),\n    ('Carlos Sainz', 55, 'Ferrari', 29);\n\n-- Consultar dados\nSELECT * FROM pilotos;\nSELECT nome, numero FROM pilotos WHERE equipe = 'Ferrari';\nSELECT * FROM pilotos ORDER BY numero;\n\n-- Atualizar dados\nUPDATE pilotos SET idade = 41 WHERE nome = 'Lewis Hamilton';\n\n-- Deletar dados\nDELETE FROM pilotos WHERE numero = 55;\n\n-- 📌 EXEMPLOS PRÁTICOS\n-- Contar registros\nSELECT COUNT(*) FROM pilotos;\n\n-- Buscar com LIKE\nSELECT * FROM pilotos WHERE nome LIKE 'L%';\n\n-- Buscar com limite\nSELECT * FROM pilotos LIMIT 5;\nSELECT * FROM pilotos OFFSET 10 LIMIT 5;",
                        dica: "💡 \\l, \\c, \\dt são ESSENCIAIS. \\d nome_tabela mostra a estrutura completa da tabela."
                    }
                },
                {
                    id: "tipos-dados",
                    nome: "Tipos de Dados (TUDO)",
                    icone: "📊",
                    descricao: "Integer, VARCHAR, TEXT, BOOLEAN, DATE, TIMESTAMP, JSON, JSONB, ARRAY",
                    conteudo: {
                        explicacao: "PostgreSQL tem uma vasta gama de tipos de dados, incluindo JSON e arrays nativos.",
                        codigo: "-- 📊 TIPOS DE DADOS POSTGRESQL\n\n-- 📌 TIPOS NUMÉRICOS\nINTEGER              -- Números inteiros (4 bytes)\nBIGINT               -- Inteiros grandes (8 bytes)\nSMALLINT             -- Inteiros pequenos (2 bytes)\nDECIMAL(10,2)        -- Decimais com precisão\nNUMERIC(10,2)        -- Decimais com precisão (exato)\nREAL                 -- Ponto flutuante (4 bytes)\nDOUBLE PRECISION     -- Ponto flutuante (8 bytes)\nSERIAL               -- Auto increment (INTEGER)\nBIGSERIAL            -- Auto increment (BIGINT)\n\n-- 📌 TIPOS DE TEXTO\nVARCHAR(255)         -- Texto com tamanho limitado\nTEXT                 -- Texto ilimitado\nCHAR(10)             -- Texto com tamanho fixo\n\n-- 📌 TIPOS BOOLEANOS\nBOOLEAN              -- true / false\n\n-- 📌 TIPOS DE DATA/HORA\nDATE                 -- Data (YYYY-MM-DD)\nTIME                 -- Hora (HH:MM:SS)\nTIMESTAMP            -- Data e hora\nTIMESTAMPTZ          -- Data e hora com timezone\nINTERVAL             -- Intervalo de tempo\n\n-- 📌 TIPOS ESPECIAIS\nJSON                 -- Dados JSON (texto)\nJSONB                -- Dados JSON (binário, mais rápido)\nARRAY                -- Arrays: INTEGER[], TEXT[]\nUUID                 -- Identificador único universal\nINET                 -- Endereços IP\nMACADDR              -- Endereço MAC\n\n-- 📌 EXEMPLO PRÁTICO\nCREATE TABLE usuarios (\n    id SERIAL PRIMARY KEY,\n    nome VARCHAR(100) NOT NULL,\n    email VARCHAR(255) UNIQUE,\n    idade INTEGER CHECK (idade >= 18),\n    ativo BOOLEAN DEFAULT true,\n    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    ultimo_acesso TIMESTAMPTZ,\n    preferencias JSONB DEFAULT '{}'::jsonb,\n    tags TEXT[],\n    ip INET\n);\n\nINSERT INTO usuarios (nome, email, idade, preferencias, tags, ip) \nVALUES (\n    'Hamilton', \n    'hamilton@f1.com', \n    40,\n    '{\"tema\": \"escuro\", \"notificacoes\": true}'::jsonb,\n    ARRAY['piloto', 'campeao'],\n    '192.168.1.100'::inet\n);",
                        dica: "🔥 Use JSONB para dados semi-estruturados. Use TEXT para textos sem limite. Use TIMESTAMPTZ para datas com timezone."
                    }
                }
            ]
        },
        {
            id: "consultas",
            nome: "🐘 CONSULTAS SQL",
            icone: "🔍",
            descricao: "SELECT, WHERE, ORDER BY, GROUP BY, JOINs, subqueries, CTE, window functions",
            progresso: 0,
            subCards: [
                {
                    id: "select-basico",
                    nome: "SELECT Básico (TUDO)",
                    icone: "🔍",
                    descricao: "SELECT, WHERE, ORDER BY, LIMIT, OFFSET, DISTINCT",
                    conteudo: {
                        explicacao: "SELECT é o comando mais usado. Permite consultar dados das tabelas.",
                        codigo: "-- 🔍 SELECT BÁSICO\n\n-- 📌 SELECIONAR DADOS\nSELECT * FROM pilotos;\nSELECT nome, numero FROM pilotos;\nSELECT nome AS nome_piloto, numero FROM pilotos;\n\n-- 📌 WHERE (filtrar)\nSELECT * FROM pilotos WHERE equipe = 'Ferrari';\nSELECT * FROM pilotos WHERE idade > 30;\nSELECT * FROM pilotos WHERE nome LIKE 'L%';\nSELECT * FROM pilotos WHERE nome ILIKE 'l%';\nSELECT * FROM pilotos WHERE nome IN ('Hamilton', 'Leclerc');\nSELECT * FROM pilotos WHERE idade BETWEEN 25 AND 35;\n\n-- 📌 ORDER BY (ordenar)\nSELECT * FROM pilotos ORDER BY nome ASC;     -- Crescente\nSELECT * FROM pilotos ORDER BY idade DESC;   -- Decrescente\nSELECT * FROM pilotos ORDER BY equipe, nome; -- Múltiplos\n\n-- 📌 LIMIT e OFFSET (paginação)\nSELECT * FROM pilotos LIMIT 10;               -- 10 primeiros\nSELECT * FROM pilotos LIMIT 10 OFFSET 20;     -- Página 3 (10 itens)\n\n-- 📌 DISTINCT (valores únicos)\nSELECT DISTINCT equipe FROM pilotos;\nSELECT COUNT(DISTINCT equipe) FROM pilotos;\n\n-- 📌 OPERADORES LÓGICOS\nSELECT * FROM pilotos \nWHERE equipe = 'Ferrari' AND idade > 30;\n\nSELECT * FROM pilotos \nWHERE equipe = 'Ferrari' OR equipe = 'Red Bull';\n\nSELECT * FROM pilotos \nWHERE NOT equipe = 'Ferrari';\n\n-- 📌 IS NULL e IS NOT NULL\nSELECT * FROM pilotos WHERE equipe IS NULL;\nSELECT * FROM pilotos WHERE equipe IS NOT NULL;",
                        dica: "💡 Use ORDER BY com LIMIT/OFFSET para paginação. Use DISTINCT para valores únicos. Use ILIKE para buscas case-insensitive."
                    }
                },
                {
                    id: "joins",
                    nome: "JOINs (TUDO)",
                    icone: "🔗",
                    descricao: "INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN, CROSS JOIN, SELF JOIN",
                    conteudo: {
                        explicacao: "JOINs permitem combinar dados de múltiplas tabelas relacionadas.",
                        codigo: "-- 🔗 JOINs NO POSTGRESQL\n\n-- 📌 TABELAS EXEMPLO\nCREATE TABLE pilotos (\n    id SERIAL PRIMARY KEY,\n    nome VARCHAR(100)\n);\n\nCREATE TABLE equipes (\n    id SERIAL PRIMARY KEY,\n    nome VARCHAR(100),\n    piloto_id INT REFERENCES pilotos(id)\n);\n\nCREATE TABLE corridas (\n    id SERIAL PRIMARY KEY,\n    nome VARCHAR(100),\n    vencedor_id INT REFERENCES pilotos(id)\n);\n\n-- 📌 INNER JOIN (só registros que têm correspondência)\nSELECT p.nome AS piloto, e.nome AS equipe\nFROM pilotos p\nINNER JOIN equipes e ON p.id = e.piloto_id;\n\n-- 📌 LEFT JOIN (todos da esquerda + correspondentes)\nSELECT p.nome, e.nome AS equipe\nFROM pilotos p\nLEFT JOIN equipes e ON p.id = e.piloto_id;\n\n-- 📌 RIGHT JOIN (todos da direita + correspondentes)\nSELECT p.nome, e.nome AS equipe\nFROM pilotos p\nRIGHT JOIN equipes e ON p.id = e.piloto_id;\n\n-- 📌 FULL JOIN (todos de ambos)\nSELECT p.nome, e.nome AS equipe\nFROM pilotos p\nFULL JOIN equipes e ON p.id = e.piloto_id;\n\n-- 📌 CROSS JOIN (produto cartesiano)\nSELECT p.nome, e.nome\nFROM pilotos p\nCROSS JOIN equipes e;\n\n-- 📌 SELF JOIN (joins com ela mesma)\nSELECT p1.nome AS piloto, p2.nome AS colega\nFROM pilotos p1\nJOIN pilotos p2 ON p1.equipe = p2.equipe\nWHERE p1.id != p2.id;\n\n-- 📌 MÚLTIPLOS JOINS\nSELECT \n    p.nome AS piloto,\n    e.nome AS equipe,\n    c.nome AS corrida\nFROM pilotos p\nJOIN equipes e ON p.id = e.piloto_id\nJOIN corridas c ON p.id = c.vencedor_id;\n\n-- 📌 JOIN COM FILTROS\nSELECT p.nome, e.nome\nFROM pilotos p\nJOIN equipes e ON p.id = e.piloto_id\nWHERE e.nome = 'Ferrari';",
                        dica: "🔥 INNER JOIN é o mais usado. LEFT JOIN quando você quer todos os registros da tabela principal mesmo sem correspondência."
                    }
                },
                {
                    id: "group-by",
                    nome: "GROUP BY e Agregação (TUDO)",
                    icone: "📊",
                    descricao: "GROUP BY, HAVING, COUNT, SUM, AVG, MAX, MIN, ARRAY_AGG",
                    conteudo: {
                        explicacao: "Funções de agregação permitem resumir e analisar dados.",
                        codigo: "-- 📊 GROUP BY E AGREGAÇÕES\n\n-- 📌 FUNÇÕES DE AGREGAÇÃO\nCOUNT(*)              -- Conta registros\nCOUNT(coluna)         -- Conta não-nulos\nSUM(coluna)           -- Soma\nAVG(coluna)           -- Média\nMAX(coluna)           -- Máximo\nMIN(coluna)           -- Mínimo\n\n-- 📌 GROUP BY (agrupar)\n-- Contar pilotos por equipe\nSELECT equipe, COUNT(*) AS total\nFROM pilotos\nGROUP BY equipe;\n\n-- Média de idade por equipe\nSELECT equipe, AVG(idade) AS media_idade\nFROM pilotos\nGROUP BY equipe;\n\n-- 📌 HAVING (filtrar grupos)\nSELECT equipe, COUNT(*) AS total\nFROM pilotos\nGROUP BY equipe\nHAVING COUNT(*) > 1;\n\nSELECT equipe, AVG(idade) AS media\nFROM pilotos\nGROUP BY equipe\nHAVING AVG(idade) > 30;\n\n-- 📌 MÚLTIPLAS AGREGAÇÕES\nSELECT \n    equipe,\n    COUNT(*) AS total,\n    AVG(idade) AS media,\n    MAX(idade) AS maximo,\n    MIN(idade) AS minimo,\n    SUM(idade) AS soma\nFROM pilotos\nGROUP BY equipe;\n\n-- 📌 ARRAY_AGG (agrupar em array)\nSELECT \n    equipe,\n    ARRAY_AGG(nome) AS pilotos,\n    COUNT(*) AS total\nFROM pilotos\nGROUP BY equipe;\n\n-- 📌 STRING_AGG (agrupar em string)\nSELECT \n    equipe,\n    STRING_AGG(nome, ', ') AS lista_pilotos\nFROM pilotos\nGROUP BY equipe;\n\n-- 📌 GROUP BY com ORDER BY\nSELECT equipe, COUNT(*) AS total\nFROM pilotos\nGROUP BY equipe\nORDER BY total DESC;",
                        dica: "🔥 GROUP BY é usado com funções de agregação. HAVING filtra grupos (WHERE filtra linhas)."
                    }
                },
                {
                    id: "subqueries-cte",
                    nome: "Subqueries e CTE (TUDO)",
                    icone: "📋",
                    descricao: "Subqueries, CTE (WITH), queries aninhadas, EXISTS, IN",
                    conteudo: {
                        explicacao: "Subqueries e CTE (Common Table Expressions) permitem escrever consultas mais complexas e organizadas.",
                        codigo: "-- 📋 SUBQUERIES E CTE\n\n-- 📌 SUBQUERY BÁSICA\nSELECT * FROM pilotos\nWHERE idade > (SELECT AVG(idade) FROM pilotos);\n\n-- 📌 SUBQUERY COM IN\nSELECT * FROM pilotos\nWHERE equipe IN (SELECT nome FROM equipes WHERE pais = 'Italia');\n\n-- 📌 SUBQUERY COM EXISTS\nSELECT * FROM pilotos p\nWHERE EXISTS (SELECT 1 FROM corridas c WHERE c.vencedor_id = p.id);\n\n-- 📌 SUBQUERY COM ANY/ALL\nSELECT * FROM pilotos\nWHERE idade > ANY (SELECT idade FROM pilotos WHERE equipe = 'Ferrari');\n\n-- 📌 CTE (WITH) - Consulta temporária\nWITH pilotos_ferrari AS (\n    SELECT * FROM pilotos WHERE equipe = 'Ferrari'\n),\npilotos_redbull AS (\n    SELECT * FROM pilotos WHERE equipe = 'Red Bull'\n)\nSELECT \n    f.nome AS ferrari,\n    r.nome AS redbull\nFROM pilotos_ferrari f\nJOIN pilotos_redbull r ON f.numero = r.numero;\n\n-- 📌 CTE RECURSIVA (árvores/hierarquias)\nWITH RECURSIVE hierarquia AS (\n    -- Caso base\n    SELECT id, nome, gerente_id, 1 AS nivel\n    FROM funcionarios\n    WHERE gerente_id IS NULL\n    \n    UNION ALL\n    \n    -- Caso recursivo\n    SELECT f.id, f.nome, f.gerente_id, h.nivel + 1\n    FROM funcionarios f\n    JOIN hierarquia h ON f.gerente_id = h.id\n)\nSELECT * FROM hierarquia;\n\n-- 📌 SUBQUERY COM WINDOW FUNCTIONS\nSELECT \n    nome,\n    idade,\n    ROW_NUMBER() OVER (ORDER BY idade DESC) AS posicao,\n    AVG(idade) OVER () AS media_geral\nFROM pilotos;",
                        dica: "🔥 CTE (WITH) torna consultas complexas mais legíveis. Use CTE recursivas para estruturas hierárquicas."
                    }
                }
            ]
        },
        {
            id: "avancado",
            nome: "🐘 POSTGRES AVANÇADO",
            icone: "⚡",
            descricao: "Índices, views, triggers, funções, stored procedures, transações, locks",
            progresso: 0,
            subCards: [
                {
                    id: "indices",
                    nome: "Índices (TUDO)",
                    icone: "🔍",
                    descricao: "CREATE INDEX, B-tree, Hash, GIN, GiST, partial indexes, expression indexes",
                    conteudo: {
                        explicacao: "Índices melhoram drasticamente a performance de consultas. São essenciais em bancos de dados grandes.",
                        codigo: "-- 🔍 ÍNDICES NO POSTGRESQL\n\n-- 📌 CRIAR ÍNDICE BÁSICO (B-tree)\nCREATE INDEX idx_pilotos_nome ON pilotos(nome);\nCREATE INDEX idx_pilotos_equipe ON pilotos(equipe);\n\n-- 📌 ÍNDICE ÚNICO\nCREATE UNIQUE INDEX idx_pilotos_numero ON pilotos(numero);\n\n-- 📌 ÍNDICE COMPOSTO (múltiplas colunas)\nCREATE INDEX idx_pilotos_equipe_idade ON pilotos(equipe, idade);\n\n-- 📌 ÍNDICE PARCIAL (só alguns registros)\nCREATE INDEX idx_pilotos_ferrari ON pilotos(nome)\nWHERE equipe = 'Ferrari';\n\n-- 📌 ÍNDICE POR EXPRESSÃO\nCREATE INDEX idx_pilotos_nome_lower ON pilotos(LOWER(nome));\n\n-- 📌 ÍNDICE GIN (para JSON, arrays, full-text)\nCREATE INDEX idx_pilotos_preferencias ON pilotos USING GIN(preferencias);\n\n-- 📌 ÍNDICE GIST (para geolocalização, range)\nCREATE INDEX idx_pilotos_localizacao ON pilotos USING GIST(localizacao);\n\n-- 📌 VER ÍNDICES\n\\di                           -- Lista índices\nSELECT * FROM pg_indexes;\n\n-- 📌 ANALISAR QUERY\nEXPLAIN SELECT * FROM pilotos WHERE nome = 'Hamilton';\nEXPLAIN ANALYZE SELECT * FROM pilotos WHERE nome = 'Hamilton';\n\n-- 📌 REMOVER ÍNDICE\nDROP INDEX idx_pilotos_nome;\n\n-- 📌 BOAS PRÁTICAS\n-- ✅ Índices em colunas usadas em WHERE, JOIN, ORDER BY\n-- ✅ Índices únicos em colunas com valores únicos\n-- ✅ Índices parciais para filtros comuns\n-- ❌ Não criar índices em colunas com poucos valores (boolean)\n-- ❌ Não criar índices em colunas que mudam muito",
                        dica: "🔥 Índices são essenciais para performance! Use EXPLAIN para ver se a query está usando o índice."
                    }
                },
                {
                    id: "views",
                    nome: "Views e Materialized Views (TUDO)",
                    icone: "👁️",
                    descricao: "CREATE VIEW, CREATE MATERIALIZED VIEW, REFRESH, atualização",
                    conteudo: {
                        explicacao: "Views são consultas salvas que se comportam como tabelas. Materialized Views são cacheadas.",
                        codigo: "-- 👁️ VIEWS E MATERIALIZED VIEWS\n\n-- 📌 VIEW (consultas salvas)\nCREATE VIEW pilotos_ferrari AS\nSELECT id, nome, numero, idade\nFROM pilotos\nWHERE equipe = 'Ferrari';\n\n-- Usar a view\nSELECT * FROM pilotos_ferrari;\n\n-- 📌 VIEW COM JOIN\nCREATE VIEW relatorio_pilotos AS\nSELECT \n    p.nome AS piloto,\n    e.nome AS equipe,\n    p.idade,\n    c.nome AS ultima_corrida\nFROM pilotos p\nJOIN equipes e ON p.equipe_id = e.id\nLEFT JOIN corridas c ON p.id = c.vencedor_id\nORDER BY p.nome;\n\n-- 📌 MATERIALIZED VIEW (cacheada)\nCREATE MATERIALIZED VIEW pilotos_ferrari_cache AS\nSELECT id, nome, numero\nFROM pilotos\nWHERE equipe = 'Ferrari';\n\n-- Atualizar materialized view\nREFRESH MATERIALIZED VIEW pilotos_ferrari_cache;\n\n-- 📌 MATERIALIZED VIEW COM ÍNDICES\nCREATE UNIQUE INDEX idx_mv_pilotos_id ON pilotos_ferrari_cache(id);\n\n-- 📌 VIEW COM WITH CHECK OPTION\nCREATE VIEW pilotos_ativos AS\nSELECT * FROM pilotos WHERE ativo = true\nWITH CHECK OPTION;\n\n-- 📌 REMOVER VIEW\nDROP VIEW pilotos_ferrari;\nDROP MATERIALIZED VIEW pilotos_ferrari_cache;\n\n-- 📌 QUANDO USAR\n-- View: para consultas complexas que você usa com frequência\n-- Materialized View: para dados que mudam pouco e queries pesadas",
                        dica: "💡 Views são ótimas para simplificar consultas. Materialized Views são ótimas para performance em dados que não mudam muito."
                    }
                },
                {
                    id: "triggers",
                    nome: "Triggers e Funções (TUDO)",
                    icone: "⚡",
                    descricao: "CREATE FUNCTION, CREATE TRIGGER, triggers, stored procedures, PL/pgSQL",
                    conteudo: {
                        explicacao: "Triggers executam ações automaticamente em eventos (INSERT, UPDATE, DELETE). Funções permitem lógica avançada.",
                        codigo: "-- ⚡ TRIGGERS E FUNÇÕES\n\n-- 📌 FUNÇÃO (PL/pgSQL)\nCREATE FUNCTION calcular_idade(data_nascimento DATE)\nRETURNS INTEGER\nLANGUAGE plpgsql\nAS $$\nBEGIN\n    RETURN EXTRACT(YEAR FROM AGE(CURRENT_DATE, data_nascimento))::INTEGER;\nEND;\n$$;\n\n-- Usar função\nSELECT calcular_idade('1985-01-07');\n\n-- 📌 FUNÇÃO COM TABELA (RETURN TABLE)\nCREATE FUNCTION get_pilotos_por_equipe(equipe_nome TEXT)\nRETURNS TABLE(\n    id INTEGER,\n    nome VARCHAR(100),\n    numero INTEGER\n)\nLANGUAGE plpgsql\nAS $$\nBEGIN\n    RETURN QUERY\n    SELECT p.id, p.nome, p.numero\n    FROM pilotos p\n    WHERE p.equipe = equipe_nome;\nEND;\n$$;\n\n-- Usar\nSELECT * FROM get_pilotos_por_equipe('Ferrari');\n\n-- 📌 TRIGGER (executa automaticamente)\nCREATE TABLE log_pilotos (\n    id SERIAL PRIMARY KEY,\n    acao VARCHAR(50),\n    piloto_id INTEGER,\n    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\nCREATE FUNCTION log_alteracao_piloto()\nRETURNS TRIGGER\nLANGUAGE plpgsql\nAS $$\nBEGIN\n    IF TG_OP = 'INSERT' THEN\n        INSERT INTO log_pilotos(acao, piloto_id)\n        VALUES ('INSERT', NEW.id);\n    ELSIF TG_OP = 'UPDATE' THEN\n        INSERT INTO log_pilotos(acao, piloto_id)\n        VALUES ('UPDATE', NEW.id);\n    ELSIF TG_OP = 'DELETE' THEN\n        INSERT INTO log_pilotos(acao, piloto_id)\n        VALUES ('DELETE', OLD.id);\n    END IF;\n    RETURN NEW;\nEND;\n$$;\n\nCREATE TRIGGER trigger_log_piloto\nAFTER INSERT OR UPDATE OR DELETE ON pilotos\nFOR EACH ROW\nEXECUTE FUNCTION log_alteracao_piloto();\n\n-- 📌 STORED PROCEDURE\nCREATE PROCEDURE atualizar_idade_pilotos()\nLANGUAGE plpgsql\nAS $$\nBEGIN\n    UPDATE pilotos SET idade = calcular_idade(data_nascimento);\nEND;\n$$;\n\nCALL atualizar_idade_pilotos();",
                        dica: "🔥 Triggers são poderosas para auditoria e validação. Use funções para lógica complexa reutilizável."
                    }
                },
                {
                    id: "transacoes",
                    nome: "Transações e Locks (TUDO)",
                    icone: "🔒",
                    descricao: "BEGIN, COMMIT, ROLLBACK, SAVEPOINT, ACID, locks, isolation levels",
                    conteudo: {
                        explicacao: "Transações garantem consistência dos dados. Locks controlam concorrência.",
                        codigo: "-- 🔒 TRANSAÇÕES E LOCKS\n\n-- 📌 TRANSAÇÃO BÁSICA\nBEGIN;\n    INSERT INTO pilotos (nome, numero) VALUES ('Hamilton', 44);\n    UPDATE pilotos SET numero = 16 WHERE nome = 'Leclerc';\nCOMMIT;  -- ou ROLLBACK;\n\n-- 📌 SAVEPOINT (checkpoint dentro da transação)\nBEGIN;\n    INSERT INTO pilotos (nome, numero) VALUES ('Piloto1', 1);\n    SAVEPOINT ponto1;\n    INSERT INTO pilotos (nome, numero) VALUES ('Piloto2', 2);\n    ROLLBACK TO SAVEPOINT ponto1;  -- Desfaz Piloto2\nCOMMIT;\n\n-- 📌 ISOLATION LEVEL (níveis de isolamento)\nSET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;\nSET TRANSACTION ISOLATION LEVEL READ COMMITTED;   -- Padrão\nSET TRANSACTION ISOLATION LEVEL REPEATABLE READ;\nSET TRANSACTION ISOLATION LEVEL SERIALIZABLE;\n\n-- 📌 TRANSAÇÃO COM ERRO (rollback automático)\nBEGIN;\n    INSERT INTO pilotos (nome, numero) VALUES ('Piloto', 1);\n    -- Se der erro aqui, rollback automático\nCOMMIT;\n\n-- 📌 LOCK TABLE (bloquear tabela)\nLOCK TABLE pilotos IN ACCESS EXCLUSIVE MODE;\n\n-- 📌 PESSIMISTIC LOCK (bloquear linha)\nBEGIN;\n    SELECT * FROM pilotos WHERE id = 1 FOR UPDATE;\n    -- Update\nCOMMIT;\n\n-- 📌 ADVISORY LOCK (lock aplicação)\nSELECT pg_advisory_lock(12345);\nSELECT pg_advisory_unlock(12345);\n\n-- 📌 VER LOCKS\nSELECT * FROM pg_locks;\nSELECT * FROM pg_stat_activity;\n\n-- 📌 BOAS PRÁTICAS\n-- ✅ Mantenha transações curtas\n-- ✅ Use SAVEPOINT para operações críticas\n-- ✅ Sempre COMMIT ou ROLLBACK\n-- ❌ Evite transações longas (causam locks)",
                        dica: "🔥 Transações garantem ACID. Use BEGIN/COMMIT para operações que precisam ser atômicas. SAVEPOINT é útil para operações complexas."
                    }
                }
            ]
        },
        {
            id: "docker",
            nome: "🐘 POSTGRES COM DOCKER",
            icone: "🐳",
            descricao: "Docker, docker-compose, volume, backup, restore",
            progresso: 0,
            subCards: [
                {
                    id: "docker-postgres",
                    nome: "PostgreSQL com Docker (TUDO)",
                    icone: "🐳",
                    descricao: "Docker, docker-compose, volumes, backup, restore, persistência",
                    conteudo: {
                        explicacao: "PostgreSQL no Docker é a forma mais fácil de rodar o banco em desenvolvimento e produção.",
                        codigo: "-- 🐳 POSTGRESQL COM DOCKER\n\n# 📌 DOCKER RUN BÁSICO\ndocker run -d \\\n    --name meu-postgres \\\n    -e POSTGRES_USER=usuario \\\n    -e POSTGRES_PASSWORD=senha \\\n    -e POSTGRES_DB=meu_banco \\\n    -p 5432:5432 \\\n    postgres:15-alpine\n\n# 📌 DOCKER RUN COM VOLUME (persistência)\ndocker run -d \\\n    --name meu-postgres \\\n    -e POSTGRES_PASSWORD=senha \\\n    -v postgres_data:/var/lib/postgresql/data \\\n    -p 5432:5432 \\\n    postgres:15-alpine\n\n# 📌 ACESSAR DENTRO DO CONTAINER\ndocker exec -it meu-postgres psql -U usuario\n\n# 📌 DOCKER-COMPOSE COMPLETO\nversion: '3.8'\nservices:\n  postgres:\n    image: postgres:15-alpine\n    container_name: postgres-f1\n    environment:\n      POSTGRES_USER: usuario\n      POSTGRES_PASSWORD: senha\n      POSTGRES_DB: meu_banco\n      TZ: America/Sao_Paulo\n    volumes:\n      - postgres_data:/var/lib/postgresql/data\n      - ./init.sql:/docker-entrypoint-initdb.d/init.sql\n      - ./backup:/backup\n    ports:\n      - \"5432:5432\"\n    restart: unless-stopped\n    networks:\n      - app-network\n  \n  adminer:\n    image: adminer:latest\n    container_name: adminer\n    ports:\n      - \"8080:8080\"\n    environment:\n      ADMINER_DEFAULT_SERVER: postgres\n    depends_on:\n      - postgres\n    networks:\n      - app-network\n\nnetworks:\n  app-network:\n\nvolumes:\n  postgres_data:\n\n# 🚀 SUBIR\nsudo docker-compose up -d\n\n# 🔍 VER LOGS\ndocker-compose logs -f postgres\n\n# 💾 BACKUP\ndocker exec postgres-f1 pg_dump -U usuario meu_banco > backup.sql\n\n# 📥 RESTORE\ndocker exec -i postgres-f1 psql -U usuario meu_banco < backup.sql\n\n# 📦 BACKUP COM DATA\nmkdir -p backup\ndocker exec postgres-f1 pg_dump -U usuario -Fc meu_banco > backup/backup_$(date +%Y%m%d_%H%M%S).dump\n\n# 📥 RESTORE DO DUMP\ndocker exec -i postgres-f1 pg_restore -U usuario -d meu_banco < backup/backup_20250101_120000.dump",
                        dica: "🔥 Docker é a forma MAIS FÁCIL de rodar PostgreSQL! Use volumes para persistência e docker-compose para projetos completos."
                    }
                }
            ]
        },
        {
            id: "pratico",
            nome: "🐘 POSTGRES PRÁTICO",
            icone: "🚀",
            descricao: "Backup, restore, performance, tuning, troubleshooting",
            progresso: 0,
            subCards: [
                {
                    id: "backup-restore",
                    nome: "Backup e Restore (TUDO)",
                    icone: "💾",
                    descricao: "pg_dump, pg_restore, backup automatizado, restore de emergência",
                    conteudo: {
                        explicacao: "Backup é essencial para proteger seus dados. PostgreSQL oferece várias ferramentas.",
                        codigo: "-- 💾 BACKUP E RESTORE\n\n-- 📌 BACKUP (SQL)\npg_dump -U usuario -h localhost meu_banco > backup.sql\npg_dump -U usuario -h localhost -Fc meu_banco > backup.dump  # Formato custom\npg_dump -U usuario -h localhost -Ft meu_banco > backup.tar   # Formato tar\n\n-- 📌 BACKUP COMPRIMIDO\npg_dump -U usuario meu_banco | gzip > backup.sql.gz\n\n-- 📌 BACKUP COM DATA\npg_dump -U usuario meu_banco > backup_$(date +%Y%m%d_%H%M%S).sql\n\n-- 📌 BACKUP DE TABELA ESPECÍFICA\npg_dump -U usuario -t pilotos meu_banco > pilotos_backup.sql\n\n-- 📌 BACKUP DE MÚLTIPLAS TABELAS\npg_dump -U usuario -t pilotos -t equipes meu_banco > backup.sql\n\n-- 📌 BACKUP APENAS SCHEMA\npg_dump -U usuario -s meu_banco > schema.sql\n\n-- 📌 BACKUP APENAS DADOS\npg_dump -U usuario -a meu_banco > dados.sql\n\n-- 📌 RESTORE (SQL)\npsql -U usuario meu_banco < backup.sql\n\n-- 📌 RESTORE (dump custom)\npg_restore -U usuario -d meu_banco backup.dump\n\n-- 📌 RESTORE COMPRIMIDO\nzcat backup.sql.gz | psql -U usuario meu_banco\n\n-- 📌 RESTORE APENAS TABELA\npg_restore -U usuario -t pilotos -d meu_banco backup.dump\n\n-- 📌 BACKUP AUTOMATIZADO (CRON)\n# 0 2 * * * pg_dump -U usuario meu_banco > /backups/backup_$(date +\\%Y\\%m\\%d).sql\n\n-- 📌 SCRIPT DE BACKUP COMPLETO\n#!/bin/bash\nBACKUP_DIR=\"/backups\"\nDB_NAME=\"meu_banco\"\nDB_USER=\"usuario\"\nDATE=$(date +%Y%m%d_%H%M%S)\n\npg_dump -U $DB_USER -Fc $DB_NAME > $BACKUP_DIR/backup_$DATE.dump\nfind $BACKUP_DIR -name \"*.dump\" -mtime +7 -delete",
                        dica: "🔥 Backups são OBRIGATÓRIOS! Use pg_dump com -Fc para formato custom, que é mais rápido e flexível."
                    }
                },
                {
                    id: "performance",
                    nome: "Performance e Tuning (TUDO)",
                    icone: "⚡",
                    descricao: "EXPLAIN, ANALYZE, índices, VACUUM, ANALYZE, tuning de queries",
                    conteudo: {
                        explicacao: "Performance é crucial para bancos de dados de produção. Postgres oferece várias ferramentas.",
                        codigo: "-- ⚡ PERFORMANCE E TUNING\n\n-- 📌 EXPLAIN e ANALYZE\nEXPLAIN SELECT * FROM pilotos WHERE nome = 'Hamilton';\nEXPLAIN ANALYZE SELECT * FROM pilotos WHERE nome = 'Hamilton';\n\n-- 📌 VERIFICAR USO DE ÍNDICES\nEXPLAIN (ANALYZE, BUFFERS) SELECT * FROM pilotos WHERE nome = 'Hamilton';\n\n-- 📌 VACUUM (limpeza)\nVACUUM;                              -- Limpa espaço\nVACUUM ANALYZE;                      -- Limpa e atualiza estatísticas\nVACUUM FULL;                         -- Limpa e compacta (lock!) \n\n-- 📌 ANALYZE (estatísticas)\nANALYZE pilotos;\nANALYZE;                             -- Todas as tabelas\n\n-- 📌 QUERY LENTA\n-- Encontrar queries lentas\nSELECT * FROM pg_stat_activity WHERE state = 'active';\n\n-- 📌 LIVECKS\nSELECT * FROM pg_locks WHERE granted = false;\n\n-- 📌 TAMANHO DO BANCO\nSELECT pg_database_size('meu_banco');\nSELECT pg_size_pretty(pg_database_size('meu_banco'));\n\n-- 📌 TAMANHO DA TABELA\nSELECT pg_size_pretty(pg_total_relation_size('pilotos'));\n\n-- 📌 MAIORES TABELAS\nSELECT \n    schemaname,\n    tablename,\n    pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) AS size\nFROM pg_tables\nORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC\nLIMIT 10;\n\n-- 📌 INDEX SCANS\nSELECT \n    schemaname,\n    tablename,\n    indexname,\n    idx_scan,\n    idx_tup_read,\n    idx_tup_fetch\nFROM pg_stat_user_indexes\nORDER BY idx_scan;\n\n-- 📌 DICAS DE PERFORMANCE\n-- 1. Use índices nas colunas de WHERE\n-- 2. Use EXPLAIN ANALYZE para entender queries\n-- 3. Mantenha estatísticas atualizadas (ANALYZE)\n-- 4. Faça VACUUM regularmente\n-- 5. Evite SELECT * (busque só as colunas necessárias)\n-- 6. Use JOINs corretamente\n-- 7. Evite subqueries quando possível",
                        dica: "🔥 VACUUM e ANALYZE são essenciais para performance. Use EXPLAIN ANALYZE para debugar queries lentas."
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
    
    postgresData.categorias.forEach(function(categoria) {
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
    const categoria = postgresData.categorias.find(function(c) { return c.id === categoryId })
    
    if (!categoria) return
    
    let html = '<h2 class="section-title">🐘 ' + categoria.nome + ' 🐘</h2>'
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
    const categoria = postgresData.categorias.find(function(c) { return c.id === categoryId })
    const subCard = categoria ? categoria.subCards.find(function(s) { return s.id === subCardId }) : null
    
    if (!subCard) return
    
    const isCompleted = isSubCardCompleted(categoryId, subCardId)
    const btnText = isCompleted ? '✅ TÓPICO CONCLUÍDO!' : '🐘 MARCAR COMO CONCLUÍDO'
    
    let html = `
        <div class="content-card">
            <div class="content-title">${subCard.icone} ${subCard.nome}</div>
            <div class="content-explanation">${subCard.conteudo.explicacao}</div>
            
            <div class="code-block">
                <button class="copy-btn" onclick="copyCode(this)">📋 COPIAR</button>
                <pre>${escapeHtml(subCard.conteudo.codigo)}</pre>
            </div>
            
            <div class="tip">
                <strong>🐘 DICA DO HAMILTON:</strong> ${subCard.conteudo.dica}
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
    const saved = localStorage.getItem('completed_postgres_' + categoryId)
    if (!saved) return 0
    return JSON.parse(saved).length
}

function isSubCardCompleted(categoryId, subCardId) {
    const saved = localStorage.getItem('completed_postgres_' + categoryId)
    if (!saved) return false
    const completed = JSON.parse(saved)
    return completed.includes(subCardId)
}

function toggleComplete(categoryId, subCardId) {
    let completed = JSON.parse(localStorage.getItem('completed_postgres_' + categoryId) || '[]')
    
    if (completed.includes(subCardId)) {
        completed = completed.filter(function(id) { return id !== subCardId })
        console.log('%c📘 ' + subCardId + ' marcado como pendente', 'color: #ff8c00')
    } else {
        completed.push(subCardId)
        console.log('%c✅ ' + subCardId + ' concluído!', 'color: #00ff00')
    }
    
    localStorage.setItem('completed_postgres_' + categoryId, JSON.stringify(completed))
    
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
    console.log('%c🐘 PostgreSQL F1 carregado! Hamilton\'s Garage está pronto! 🐘', 'color: #336791; font-size: 14px; font-weight: bold;')
    console.log('%c⚡ Categorias → Tópicos → Conteúdo. Seu progresso é salvo automaticamente!', 'color: #ffd700; font-size: 12px;')
})