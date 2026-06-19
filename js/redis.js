// ESTRUTURA DE DADOS: Categorias -> SubCards -> Conteúdo
// Redis - Do Básico ao Avançado
const redisData = {
    categorias: [
        {
            id: "basico",
            nome: "⚡ REDIS BÁSICO",
            icone: "📖",
            descricao: "O que é Redis, instalação, comandos básicos e tipos de dados",
            progresso: 0,
            subCards: [
                {
                    id: "o-que-e-redis",
                    nome: "O que é Redis?",
                    icone: "🎯",
                    descricao: "Conceitos, vantagens e diferenças para outros bancos",
                    conteudo: {
                        explicacao: "Redis é um banco de dados <strong>em memória</strong> de código aberto, usado como cache, message broker e banco de dados NoSQL. É extremamente rápido porque mantém os dados na RAM.",
                        codigo: "# 🎯 O QUE É REDIS?\n\n# ✅ CARACTERÍSTICAS PRINCIPAIS\n# - In-memory (dados na RAM)\n# - Extremamente rápido (microssegundos)\n# - Persistência opcional (RDB, AOF)\n# - Suporte a múltiplas estruturas de dados\n# - Pub/Sub (mensageria)\n# - Transações\n# - Lua scripting\n# - Cluster e replicação\n\n# 🔄 DIFERENÇAS\n# Redis:          | PostgreSQL:\n# - In-memory     | - Disco\n# - Microssegundos| - Milissegundos\n# - NoSQL         | - SQL\n# - Cache/Queue   | - Dados persistentes\n\n# 🏗️ TIPOS DE DADOS\n# - String (texto/números)\n# - List (lista ordenada)\n# - Set (conjunto único)\n# - Hash (objeto/JSON)\n# - Sorted Set (conjunto ordenado)\n# - Bitmaps (bits)\n# - HyperLogLog (contagem aproximada)\n# - Streams (mensageria)\n\n# 📦 CASOS DE USO\n# - Cache de dados (DRAM)\n# - Sessões de usuário\n# - Fila de tarefas (Queue)\n# - Rate Limiting\n# - Leaderboards\n# - Chat/Notificações\n# - Contadores em tempo real",
                        dica: "💡 Redis é 100x mais rápido que banco de dados tradicional. Use para dados que precisam ser acessados EXTREMAMENTE rápido."
                    }
                },
                {
                    id: "instalacao-redis",
                    nome: "Instalação e Configuração",
                    icone: "⚙️",
                    descricao: "Instalar, configurar, acessar e primeiro login",
                    conteudo: {
                        explicacao: "Instalação do Redis e configuração inicial para começar a usar.",
                        codigo: "# ⚙️ INSTALAÇÃO DO REDIS\n\n# 🐧 LINUX (Ubuntu/Debian)\nsudo apt update\nsudo apt install redis-server\n\n# 🐧 LINUX (Fedora/RHEL)\nsudo dnf install redis\nsudo systemctl start redis\n\n# 🍎 MAC (via Homebrew)\nbrew install redis\nbrew services start redis\n\n# 🪟 WINDOWS\n# WSL2: instalar no Linux\n# Ou usar: https://github.com/tporadowski/redis/releases\n\n# 🐳 DOCKER (RECOMENDADO!)\ndocker run -d --name redis -p 6379:6379 redis:7-alpine\n\n# 🔧 VERIFICAR INSTALAÇÃO\nredis-cli --version\nsudo systemctl status redis\n\n# 🔑 ACESSAR\nredis-cli\n\n# 📋 CONFIGURAÇÃO\n# /etc/redis/redis.conf\nbind 0.0.0.0              # Permitir acesso externo\nport 6379                 # Porta padrão\nrequirepass senha         # Senha (opcional)\nmaxmemory 2gb             # Limite de memória\nmaxmemory-policy allkeys-lru  # Política de evicção\nsave 900 1                # Snapshot a cada 15min\nappendonly yes            # Persistência AOF\n\n# 🔄 REINICIAR\nsudo systemctl restart redis\n\n# 🔐 COMANDOS BÁSICOS\nredis-cli ping             # PONG = funciona!\nredis-cli --stat           # Estatísticas\nredis-cli monitor          # Monitorar comandos\nredis-cli info             # Informações do servidor",
                        dica: "🔥 Docker é a forma MAIS FÁCIL de rodar Redis! Use redis:7-alpine para imagem pequena."
                    }
                },
                {
                    id: "comandos-basicos",
                    nome: "Comandos Básicos (TUDO)",
                    icone: "⌨️",
                    descricao: "SET, GET, DEL, EXISTS, EXPIRE, TTL, KEYS, FLUSHALL",
                    conteudo: {
                        explicacao: "Comandos essenciais do Redis para manipular dados.",
                        codigo: "# ⌨️ COMANDOS BÁSICOS DO REDIS\n\n# 📌 STRINGS (texto/números)\nSET nome 'Hamilton'        # Cria/atualiza\nGET nome                    # Recupera 'Hamilton'\nSET idade 40                # Número como string\nGET idade                   # '40'\nDEL nome                    # Deleta\nEXISTS idade                # 1 (true) ou 0 (false)\n\n# 📌 EXPIRAÇÃO (TTL)\nSET sessao 'abc123' EX 3600  # Expira em 1 hora\nSETEX sessao 3600 'abc123'   # Expira em 1 hora\nEXPIRE sessao 600            # Expira em 10 min\nTTL sessao                   # Tempo restante (segundos)\nPERSIST sessao               # Remove expiração\n\n# 📌 OPERAÇÕES COM NÚMEROS\nSET contador 10\nINCR contador               # 11\nINCRBY contador 5           # 16\nDECR contador               # 15\nDECRBY contador 3           # 12\n\n# 📌 COMANDOS ÚTEIS\nKEYS *                      # Lista TODAS as chaves (EVITAR EM PRODUÇÃO!)\nKEYS user:*                 # Busca chaves com padrão\nSCAN 0                      # Iteração segura (recomendado)\nEXISTS chave                # Verifica se existe\nTYPE chave                  # Retorna tipo da chave\nRENAME chave novo_nome      # Renomeia\nRANDOMKEY                   # Retorna chave aleatória\n\n# 📌 LIMPEZA\nFLUSHDB                     # Limpa banco atual\nFLUSHALL                    # Limpa TODOS os bancos\n\n# 📌 EXEMPLO PRÁTICO - CACHE\nSET usuario:1:perfil '{\"nome\":\"Hamilton\",\"equipe\":\"Ferrari\"}'\nGET usuario:1:perfil\nEXPIRE usuario:1:perfil 3600\n\n# 📌 PASSWORD (se configurado)\nAUTH senha\n\n# 📌 SAIR\nquit",
                        dica: "💡 Use SET com EX para cache com expiração. EVITE KEYS * em produção (use SCAN)."
                    }
                }
            ]
        },
        {
            id: "tipos-dados",
            nome: "⚡ TIPOS DE DADOS",
            icone: "📊",
            descricao: "Strings, Lists, Sets, Hashes, Sorted Sets, Bitmaps, HyperLogLog, Streams",
            progresso: 0,
            subCards: [
                {
                    id: "lists-sets",
                    nome: "Lists e Sets (TUDO)",
                    icone: "📋",
                    descricao: "Listas, conjuntos, operações de lista, operações de conjunto",
                    conteudo: {
                        explicacao: "Lists são listas ordenadas. Sets são conjuntos de valores únicos.",
                        codigo: "# 📋 LISTS E SETS\n\n# 📌 LISTS (listas ordenadas)\n# LPUSH - adiciona no início\nLPUSH tarefas 'Tarefa 1'\nLPUSH tarefas 'Tarefa 2'\nLPUSH tarefas 'Tarefa 3'\n\n# RPUSH - adiciona no final\nRPUSH tarefas 'Tarefa 4'\n\n# LRANGE - lista elementos\nLRANGE tarefas 0 -1      # Todos\nLRANGE tarefas 0 2       # Primeiros 3\n\n# LPOP - remove do início\nLPOP tarefas\n\n# RPOP - remove do final\nRPOP tarefas\n\n# LLEN - tamanho\nLLEN tarefas\n\n# LINDEX - elemento por índice\nLINDEX tarefas 0\n\n# 📌 USO: FILAS (Queue)\nLPUSH fila 'job1'\nLPUSH fila 'job2'\nRPOP fila              # Processa o mais antigo\n\n# 📌 USO: PILHAS (Stack)\nLPUSH pilha 'item1'\nLPUSH pilha 'item2'\nLPOP pilha             # Processa o mais novo\n\n# 📌 SETS (conjuntos únicos)\nSADD cores 'vermelho'\nSADD cores 'azul'\nSADD cores 'vermelho'    # Ignorado (já existe)\n\n# SMEMBERS - lista todos\nSMEMBERS cores\n\n# SISMEMBER - verifica se existe\nSISMEMBER cores 'azul'   # 1 (true)\n\n# SCARD - cardinalidade (quantos)\nSCARD cores\n\n# SREM - remove\nSREM cores 'azul'\n\n# 📌 OPERAÇÕES DE CONJUNTO\nSADD equipe_a 'Hamilton' 'Leclerc'\nSADD equipe_b 'Verstappen' 'Perez'\n\nSUNION equipe_a equipe_b    # União\nSINTER equipe_a equipe_b    # Interseção\nSDIFF equipe_a equipe_b     # Diferença\n\n# 📌 EXEMPLO - TAGS\nSADD post:1:tags 'java' 'spring' 'redis'\nSADD post:2:tags 'java' 'docker' 'redis'\n\nSINTER post:1:tags post:2:tags  # Posts com tags em comum\nSUNION post:1:tags post:2:tags  # Todas as tags",
                        dica: "🔥 Use LPUSH + RPOP para filas (FIFO). Use SADD para conjuntos únicos. SINTER é ótimo para recomendações."
                    }
                },
                {
                    id: "hashes-sorted",
                    nome: "Hashes e Sorted Sets (TUDO)",
                    icone: "📦",
                    descricao: "Hashes (objetos), Sorted Sets (conjuntos ordenados), operações",
                    conteudo: {
                        explicacao: "Hashes são como objetos/JSON. Sorted Sets são conjuntos com score (pontuação).",
                        codigo: "# 📦 HASHES E SORTED SETS\n\n# 📌 HASHES (objetos)\nHSET usuario:1 nome 'Hamilton' equipe 'Ferrari' idade 40\n\nHGET usuario:1 nome          # 'Hamilton'\nHGETALL usuario:1            # Todos os campos\n\nHMGET usuario:1 nome idade   # Múltiplos campos\n\nHSET usuario:1 idade 41      # Atualiza campo\nHDEL usuario:1 idade         # Remove campo\n\nHEXISTS usuario:1 nome       # Verifica campo\nHKEYS usuario:1              # Lista chaves\nHVALS usuario:1              # Lista valores\nHLEN usuario:1               # Quantos campos\n\n# 📌 EXEMPLO PRÁTICO - SESSÃO\nHSET session:abc123 \n    usuario_id 1 \n    nome 'Hamilton' \n    ultimo_acesso '2025-01-01'\nEXPIRE session:abc123 3600\n\n# 📌 SORTED SETS (conjuntos ordenados por score)\nZADD ranking 100 'Hamilton'\nZADD ranking 85 'Leclerc'\nZADD ranking 70 'Sainz'\nZADD ranking 95 'Verstappen'\n\nZRANGE ranking 0 -1           # Ordem crescente\nZREVRANGE ranking 0 -1        # Ordem decrescente\n\nZRANGE ranking 0 2            # Top 3\nZREVRANGE ranking 0 2 WITHSCORES  # Top 3 com scores\n\nZSCORE ranking 'Hamilton'     # Score (100)\nZRANK ranking 'Hamilton'      # Posição (0)\nZREVRANK ranking 'Hamilton'   # Posição reversa\n\nZINCRBY ranking 10 'Hamilton' # Incrementa score\n\nZREM ranking 'Sainz'          # Remove\nZCARD ranking                 # Quantos elementos\n\n# 📌 EXEMPLO - LEADERBOARD\n# Adicionar pontuações\nZADD game:leaderboard 1500 'player1'\nZADD game:leaderboard 2200 'player2'\nZADD game:leaderboard 1800 'player3'\n\n# Top 10\nZREVRANGE game:leaderboard 0 9 WITHSCORES\n\n# Posição do jogador\nZREVRANK game:leaderboard 'player2'",
                        dica: "🔥 Hashes são perfeitos para objetos JSON. Sorted Sets são ideais para leaderboards e rankings."
                    }
                },
                {
                    id: "pubsub",
                    nome: "Pub/Sub (TUDO)",
                    icone: "📡",
                    descricao: "PUBLISH, SUBSCRIBE, UNSUBSCRIBE, PSUBSCRIBE, mensageria",
                    conteudo: {
                        explicacao: "Pub/Sub (Publish/Subscribe) é um sistema de mensageria onde publicadores enviam mensagens para canais e assinantes as recebem.",
                        codigo: "# 📡 PUB/SUB (MENSAGERIA)\n\n# 📌 PUBLICAR (PUBLISH)\nPUBLISH canal 'Mensagem'\nPUBLISH notificacoes 'Novo usuário cadastrado'\nPUBLISH chat:geral 'Olá, pessoal!'\n\n# 📌 ASSINAR (SUBSCRIBE)\nSUBSCRIBE canal\nSUBSCRIBE notificacoes chat:geral\n\n# 📌 ASSINAR COM PADRÃO (PSUBSCRIBE)\nPSUBSCRIBE chat:*        # Assina todos os canais chat:*\nPSUBSCRIBE *:notificacoes\n\n# 📌 CANCELAR ASSINATURA\nUNSUBSCRIBE canal\nUNSUBSCRIBE chat:geral\n\n# 📌 EXEMPLO PRÁTICO - CHAT\n# Terminal 1 (Assinante)\nSUBSCRIBE chat:geral\n\n# Terminal 2 (Publicador)\nPUBLISH chat:geral 'Olá, pessoal!'\nPUBLISH chat:geral 'Como vocês estão?'\n\n# 📌 EXEMPLO - NOTIFICAÇÕES\n# Assinante\nSUBSCRIBE notificacoes\n\n# Publicador\nPUBLISH notificacoes '{\"evento\":\"novo_usuario\",\"id\":123}'\nPUBLISH notificacoes '{\"evento\":\"pedido\",\"id\":456}'\n\n# 📌 EXEMPLO - LOGS EM TEMPO REAL\n# Assinante\nSUBSCRIBE logs:erro\n\n# Publicador (aplicação)\nPUBLISH logs:erro '{\"timestamp\":\"2025-01-01\",\"erro\":\"DB connection failed\"}'\n\n# 🔍 VER CANAIS\nPUBSUB CHANNELS                # Lista canais ativos\nPUBSUB CHANNELS chat:*         # Filtra por padrão\nPUBSUB NUMSUB canal1 canal2    # Número de assinantes",
                        dica: "🔥 Pub/Sub é ótimo para chats, notificações e eventos em tempo real. PSUBSCRIBE permite assinar padrões."
                    }
                }
            ]
        },
        {
            id: "avancado",
            nome: "⚡ REDIS AVANÇADO",
            icone: "⚡",
            descricao: "Transações, Lua scripting, pipeline, cluster, replicação, persistência",
            progresso: 0,
            subCards: [
                {
                    id: "transactions",
                    nome: "Transações e Pipeline (TUDO)",
                    icone: "🔒",
                    descricao: "MULTI, EXEC, DISCARD, WATCH, pipeline, transações atômicas",
                    conteudo: {
                        explicacao: "Transações permitem executar múltiplos comandos de forma atômica. Pipeline envia múltiplos comandos de uma vez.",
                        codigo: "# 🔒 TRANSAÇÕES E PIPELINE\n\n# 📌 TRANSAÇÃO BÁSICA (MULTI/EXEC)\nMULTI                     # Inicia transação\nSET usuario:1 'Hamilton'\nSET usuario:2 'Leclerc'\nEXEC                      # Executa todos\n\n# 📌 DISCARD (cancelar)\nMULTI\nSET usuario:1 'Hamilton'\nDISCARD                   # Cancela transação\n\n# 📌 WATCH (optimistic locking)\nWATCH usuario:1           # Monitora chave\nGET usuario:1\nMULTI\nSET usuario:1 'Novo valor'\nEXEC                      # Falha se a chave foi alterada\n\n# 📌 PIPELINE (envio em lote)\n# No Redis, você pode enviar comandos em pipeline\n# Exemplo com redis-cli:\necho -e \"SET a 1\\nSET b 2\\nGET a\\nGET b\" | redis-cli --pipe\n\n# 📌 EXEMPLO - TRANSFERÊNCIA\nWATCH conta1\nGET conta1\nMULTI\nDECR conta1\nINCR conta2\nEXEC\n\n# 📌 EXEMPLO - FILA ATÔMICA\nMULTI\nLPUSH fila 'job1'\nLPUSH fila 'job2'\nEXEC\n\n# 📌 LUA SCRIPTING (scripts atômicos)\nEVAL \"return redis.call('SET', KEYS[1], ARGV[1])\" 1 chave valor\n\nEVAL \"\n    local valor = redis.call('GET', KEYS[1])\n    if valor then\n        return redis.call('INCR', KEYS[1])\n    else\n        return redis.call('SET', KEYS[1], 1)\n    end\n\" 1 contador",
                        dica: "🔥 Use WATCH para locking otimista. Use transações para operações atômicas. Pipeline é mais rápido que comandos individuais."
                    }
                },
                {
                    id: "persistencia",
                    nome: "Persistência (TUDO)",
                    icone: "💾",
                    descricao: "RDB, AOF, snapshots, backup, restore, persistência híbrida",
                    conteudo: {
                        explicacao: "Redis pode persistir dados em disco. RDB (snapshots) e AOF (logs de comandos).",
                        codigo: "# 💾 PERSISTÊNCIA\n\n# 📌 RDB (snapshots)\n# Salva snapshot do banco em intervalos\n# - Mais rápido para restore\n# - Pode perder dados se cair\n\n# 📌 AOF (Append Only File)\n# Registra cada comando\n# - Mais seguro (perde menos dados)\n# - Arquivo maior e mais lento\n\n# 🔧 CONFIGURAÇÕES (redis.conf)\n\n# RDB\nsave 900 1              # Snapshot a cada 15min se 1 mudança\nsave 300 10             # Snapshot a cada 5min se 10 mudanças\nsave 60 10000           # Snapshot a cada 1min se 10000 mudanças\n\ndbfilename dump.rdb     # Nome do arquivo\ndir /var/lib/redis      # Diretório\n\n# AOF\nappendonly yes          # Ativa AOF\nappendfilename appendonly.aof\nappendfsync everysec    # Sync a cada segundo (recomendado)\n\n# 🔧 COMANDOS\nSAVE                    # Snapshot síncrono (bloqueia!)\nBGSAVE                  # Snapshot em background (recomendado)\nLASTSAVE                # Último snapshot\n\nBGREWRITEAOF            # Reescreve AOF (compacta)\n\n# 💾 BACKUP\n# Copiar arquivos RDB/AOF\ncp /var/lib/redis/dump.rdb backup.rdb\n\n# 📥 RESTORE\n# Parar Redis, copiar arquivo, iniciar\nsudo systemctl stop redis\ncp backup.rdb /var/lib/redis/dump.rdb\nsudo systemctl start redis\n\n# 📌 BOAS PRÁTICAS\n# - Use RDB + AOF (híbrido)\n# - Backups automáticos\n# - Teste restores regularmente\n# - Monitore tamanho do AOF",
                        dica: "🔥 Use RDB + AOF para máxima segurança. Faça backups regulares dos arquivos dump.rdb e appendonly.aof."
                    }
                },
                {
                    id: "docker-redis",
                    nome: "Redis com Docker (TUDO)",
                    icone: "🐳",
                    descricao: "Docker, docker-compose, volumes, persistência, cluster",
                    conteudo: {
                        explicacao: "Redis no Docker é a forma mais fácil de rodar em desenvolvimento e produção.",
                        codigo: "# 🐳 REDIS COM DOCKER\n\n# 📌 DOCKER RUN BÁSICO\ndocker run -d \\\n    --name redis \\\n    -p 6379:6379 \\\n    redis:7-alpine\n\n# 📌 DOCKER RUN COM VOLUME\ndocker run -d \\\n    --name redis \\\n    -p 6379:6379 \\\n    -v redis_data:/data \\\n    redis:7-alpine redis-server --appendonly yes\n\n# 📌 DOCKER RUN COM SENHA\ndocker run -d \\\n    --name redis \\\n    -p 6379:6379 \\\n    -v redis_data:/data \\\n    redis:7-alpine redis-server --requirepass minha_senha\n\n# 📌 DOCKER-COMPOSE COMPLETO\nversion: '3.8'\nservices:\n  redis:\n    image: redis:7-alpine\n    container_name: redis-f1\n    command: redis-server --appendonly yes --requirepass senha\n    volumes:\n      - redis_data:/data\n      - ./redis.conf:/usr/local/etc/redis/redis.conf\n    ports:\n      - \"6379:6379\"\n    restart: unless-stopped\n    networks:\n      - app-network\n    healthcheck:\n      test: [\"CMD\", \"redis-cli\", \"ping\"]\n      interval: 10s\n      timeout: 5s\n      retries: 5\n  \n  redis-insight:\n    image: redis/redisinsight:latest\n    container_name: redis-insight\n    ports:\n      - \"5540:5540\"\n    volumes:\n      - redis-insight:/db\n    depends_on:\n      - redis\n    networks:\n      - app-network\n\nnetworks:\n  app-network:\n\nvolumes:\n  redis_data:\n  redis-insight:\n\n# 🚀 SUBIR\ndocker-compose up -d\n\n# 🔍 ACESSAR\ndocker exec -it redis-f1 redis-cli -a senha\n\n# 📊 VER LOGS\ndocker-compose logs -f redis\n\n# 💾 BACKUP\ndocker exec redis-f1 redis-cli -a senha SAVE\ndocker cp redis-f1:/data/dump.rdb ./backup.rdb",
                        dica: "🔥 Docker é a forma MAIS FÁCIL de rodar Redis! Use redis:7-alpine para imagem pequena. Redis Insight é ótimo para visualização."
                    }
                }
            ]
        },
        {
            id: "pratico",
            nome: "⚡ REDIS PRÁTICO",
            icone: "🚀",
            descricao: "Cache, rate limiting, sessões, leaderboards, filas, monitoramento",
            progresso: 0,
            subCards: [
                {
                    id: "use-cases",
                    nome: "Casos de Uso (TUDO)",
                    icone: "💡",
                    descricao: "Cache, sessões, rate limiting, líderes, filas, contadores",
                    conteudo: {
                        explicacao: "Redis tem vários casos de uso práticos para aplicações reais.",
                        codigo: "# 💡 CASOS DE USO DO REDIS\n\n# 📌 1. CACHE DE DADOS\n# Cache de respostas da API\nSET api:user:1 '{\"nome\":\"Hamilton\",\"equipe\":\"Ferrari\"}' EX 3600\n\n# Cache com invalidação\nHSET cache:config timeout 3600\nSET api:products:list '[...]' EX 300\n\n# 📌 2. SESSÕES DE USUÁRIO\nHSET session:abc123 \n    user_id 1 \n    nome 'Hamilton' \n    role 'admin'\nEXPIRE session:abc123 7200\n\n# 📌 3. RATE LIMITING\n# Limitar requisições\nINCR rate:user:1\nEXPIRE rate:user:1 60\nGET rate:user:1  # Se > 100, bloqueia\n\n# 📌 4. LEADERBOARDS (Ranking)\nZADD game:leaderboard 1000 'player1'\nZADD game:leaderboard 2000 'player2'\nZADD game:leaderboard 1500 'player3'\nZREVRANGE game:leaderboard 0 9 WITHSCORES\n\n# 📌 5. FILAS (QUEUE)\nLPUSH tasks 'email:joao@email.com'\nRPOP tasks  # Processa\n\n# 📌 6. CONTADORES EM TEMPO REAL\nINCR views:post:123\nINCRBY likes:post:123 1\nINCRBY shares:post:123 1\n\n# 📌 7. GEOLOCALIZAÇÃO\nGEOADD locations -23.5505 -46.6333 'Sao Paulo'\nGEOADD locations -22.9068 -43.1729 'Rio de Janeiro'\nGEODIST locations 'Sao Paulo' 'Rio de Janeiro' km\n\n# 📌 8. NOTIFICAÇÕES (Pub/Sub)\nPUBLISH notifications '{\"user\":1,\"message\":\"Nova mensagem\"}'\n\n# 📌 9. CACHE DE PÁGINAS\nSET page:home:pt '<html>...</html>' EX 300\n\n# 📌 10. AUTENTICAÇÃO 2FA\nSET 2fa:user:1 '123456' EX 300  # 5 minutos para validar",
                        dica: "🔥 Redis é VERSÁTIL! Cache, filas, rate limiting e leaderboards são os casos de uso mais comuns."
                    }
                },
                {
                    id: "monitoring",
                    nome: "Monitoramento (TUDO)",
                    icone: "📊",
                    descricao: "INFO, MONITOR, SLOWLOG, estatísticas, alertas",
                    conteudo: {
                        explicacao: "Monitorar Redis é essencial para garantir performance e disponibilidade.",
                        codigo: "# 📊 MONITORAMENTO DO REDIS\n\n# 📌 INFO (estatísticas)\nINFO                          # Todas as informações\nINFO server                   # Servidor\nINFO clients                  # Conexões\nINFO memory                   # Memória\nINFO stats                    # Estatísticas\nINFO replication              # Replicação\nINFO keyspace                 # Chaves por banco\n\n# 📌 MONITOR (comandos em tempo real)\nMONITOR                       # Mostra todos os comandos\n\n# 📌 SLOW LOG (queries lentas)\nCONFIG GET slowlog*            # Ver configuração\nCONFIG SET slowlog-log-slower-than 100000\nCONFIG SET slowlog-max-len 1000\nSLOWLOG GET 10                 # Últimas 10 queries lentas\nSLOWLOG LEN                    # Quantas queries lentas\nSLOWLOG RESET                  # Limpa slow log\n\n# 📌 CLIENTES\nCLIENT LIST                    # Lista conexões\nCLIENT KILL addr:port          # Mata conexão\nCLIENT SETNAME nome            # Nomeia conexão\nCLIENT GETNAME                 # Nome da conexão\n\n# 📌 ESTATÍSTICAS DE PERFORMANCE\nredis-cli --stat\nredis-cli --bigkeys             # Chaves grandes\nredis-cli --memkeys             # Uso de memória por chave\n\n# 📌 LATÊNCIA\nredis-cli --latency\nredis-cli --latency-history\nredis-cli --latency-dist\n\n# 📌 MEMÓRIA\nMEMORY STATS                   # Estatísticas de memória\nMEMORY DOCTOR                  # Diagnóstico de memória\nMEMORY USAGE chave             # Uso de memória da chave\n\n# 📌 MONITORAMENTO COM DOCKER\ndocker stats redis-f1\ndocker logs -f redis-f1\n\n# 📌 ALERTAS (exemplo)\n# Memória > 80%\n# Conexões > 1000\n# Slow log > 10 por minuto\n# Monitoramento com Prometheus + Grafana",
                        dica: "🔥 Use INFO para monitorar memória e conexões. MONITOR é ótimo para debug. SLOWLOG ajuda a encontrar queries lentas."
                    }
                },
                {
                    id: "spring-redis",
                    nome: "Spring Boot com Redis (TUDO)",
                    icone: "🍃",
                    descricao: "Spring Data Redis, @Cacheable, RedisTemplate, @CacheEvict, @CachePut",
                    conteudo: {
                        explicacao: "Integração do Spring Boot com Redis para cache e dados em tempo real.",
                        codigo: "# 🍃 SPRING BOOT + REDIS\n\n# 📦 DEPENDÊNCIA (pom.xml)\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-data-redis</artifactId>\n</dependency>\n<dependency>\n    <groupId>org.apache.commons</groupId>\n    <artifactId>commons-pool2</artifactId>\n</dependency>\n\n# ⚙️ CONFIGURAÇÃO (application.properties)\nspring.redis.host=localhost\nspring.redis.port=6379\nspring.redis.password=senha\nspring.redis.timeout=5000ms\nspring.redis.lettuce.pool.max-active=8\nspring.redis.lettuce.pool.max-idle=8\n\n# 📌 CONFIGURAÇÃO JAVA\n@Configuration\n@EnableCaching\npublic class RedisConfig {\n    \n    @Bean\n    public RedisTemplate<String, Object> redisTemplate(\n            RedisConnectionFactory connectionFactory) {\n        RedisTemplate<String, Object> template = new RedisTemplate<>();\n        template.setConnectionFactory(connectionFactory);\n        template.setKeySerializer(new StringRedisSerializer());\n        template.setValueSerializer(new GenericJackson2JsonRedisSerializer());\n        return template;\n    }\n    \n    @Bean\n    public CacheManager cacheManager(RedisConnectionFactory factory) {\n        RedisCacheConfiguration config = RedisCacheConfiguration.defaultCacheConfig()\n            .entryTtl(Duration.ofMinutes(10))\n            .serializeValuesWith(\n                RedisSerializationContext.SerializationPair\n                    .fromSerializer(new GenericJackson2JsonRedisSerializer()));\n        return RedisCacheManager.builder(factory)\n            .cacheDefaults(config)\n            .build();\n    }\n}\n\n# 📌 @Cacheable (cachear resultado)\n@Service\npublic class UserService {\n    \n    @Cacheable(value = \"users\", key = \"#id\")\n    public User findById(Long id) {\n        // Consulta ao banco (executa só na primeira vez)\n        return userRepository.findById(id).orElse(null);\n    }\n    \n    @CacheEvict(value = \"users\", key = \"#id\")\n    public void delete(Long id) {\n        userRepository.deleteById(id);\n    }\n}\n\n# 📌 RedisTemplate\n@Service\npublic class RedisService {\n    \n    @Autowired\n    private RedisTemplate<String, Object> redisTemplate;\n    \n    public void save(String key, Object value) {\n        redisTemplate.opsForValue().set(key, value, 60, TimeUnit.MINUTES);\n    }\n    \n    public Object get(String key) {\n        return redisTemplate.opsForValue().get(key);\n    }\n    \n    public void delete(String key) {\n        redisTemplate.delete(key);\n    }\n}",
                        dica: "🔥 Spring Boot com Redis é SUPER FÁCIL! @Cacheable faz cache automático. RedisTemplate para operações manuais."
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
    
    redisData.categorias.forEach(function(categoria) {
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
    const categoria = redisData.categorias.find(function(c) { return c.id === categoryId })
    
    if (!categoria) return
    
    let html = '<h2 class="section-title">⚡ ' + categoria.nome + ' ⚡</h2>'
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
    const categoria = redisData.categorias.find(function(c) { return c.id === categoryId })
    const subCard = categoria ? categoria.subCards.find(function(s) { return s.id === subCardId }) : null
    
    if (!subCard) return
    
    const isCompleted = isSubCardCompleted(categoryId, subCardId)
    const btnText = isCompleted ? '✅ TÓPICO CONCLUÍDO!' : '⚡ MARCAR COMO CONCLUÍDO'
    
    let html = `
        <div class="content-card">
            <div class="content-title">${subCard.icone} ${subCard.nome}</div>
            <div class="content-explanation">${subCard.conteudo.explicacao}</div>
            
            <div class="code-block">
                <button class="copy-btn" onclick="copyCode(this)">📋 COPIAR</button>
                <pre>${escapeHtml(subCard.conteudo.codigo)}</pre>
            </div>
            
            <div class="tip">
                <strong>⚡ DICA DO HAMILTON:</strong> ${subCard.conteudo.dica}
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
    const saved = localStorage.getItem('completed_redis_' + categoryId)
    if (!saved) return 0
    return JSON.parse(saved).length
}

function isSubCardCompleted(categoryId, subCardId) {
    const saved = localStorage.getItem('completed_redis_' + categoryId)
    if (!saved) return false
    const completed = JSON.parse(saved)
    return completed.includes(subCardId)
}

function toggleComplete(categoryId, subCardId) {
    let completed = JSON.parse(localStorage.getItem('completed_redis_' + categoryId) || '[]')
    
    if (completed.includes(subCardId)) {
        completed = completed.filter(function(id) { return id !== subCardId })
        console.log('%c📘 ' + subCardId + ' marcado como pendente', 'color: #ff8c00')
    } else {
        completed.push(subCardId)
        console.log('%c✅ ' + subCardId + ' concluído!', 'color: #00ff00')
    }
    
    localStorage.setItem('completed_redis_' + categoryId, JSON.stringify(completed))
    
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
    console.log('%c⚡ Redis F1 carregado! Hamilton\'s Garage está pronto! ⚡', 'color: #dc382d; font-size: 14px; font-weight: bold;')
    console.log('%c⚡ Categorias → Tópicos → Conteúdo. Seu progresso é salvo automaticamente!', 'color: #ffd700; font-size: 12px;')
})