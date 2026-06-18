// ESTRUTURA DE DADOS: Categorias -> SubCards -> Conteúdo
// Docker - Do Básico ao Avançado (COM DOCKER COMPOSE COMPLETO)
const dockerData = {
    categorias: [
        {
            id: "basico",
            nome: "🐳 DOCKER BÁSICO",
            icone: "📖",
            descricao: "Conceitos, instalação, containers, imagens e primeiros comandos",
            progresso: 0,
            subCards: [
                {
                    id: "conceitos",
                    nome: "Conceitos Fundamentais",
                    icone: "🎯",
                    descricao: "O que é Docker, containers, imagens e diferença de VMs",
                    conteudo: {
                        explicacao: "Docker é uma plataforma que permite <strong>empacotar</strong> aplicações em <strong>containers</strong>. Containers são leves, portáveis e isolados. Diferente de VMs, eles compartilham o kernel do host, sendo muito mais rápidos e eficientes.",
                        codigo: `# 🎯 CONCEITOS CHAVE

# 🐳 CONTAINER
# - Unidade de software que empacota código e dependências
# - Leve (MBs, não GBs)
# - Isolado, mas compartilha kernel do host

# 📦 IMAGEM
# - Template para criar containers
# - Contém sistema de arquivos + configurações
# - Imutável (não muda, gera novas versões)

# 📂 DOCKERFILE
# - Receita para construir imagens
# - Instruções passo a passo

# 🌐 REGISTRY
# - Repositório de imagens (Docker Hub)
# - Pública ou privada

# ⚡ DIFERENÇA VM vs CONTAINER
# VM: Kernel próprio, recursos dedicados, GBs, lenta
# Container: Kernel compartilhado, recursos dinâmicos, MBs, rápida

# 🏗️ DOCKER ARCHITECTURE
# Cliente (docker CLI)
#   ↓
# Daemon (dockerd)
#   ↓
# Registry (Docker Hub)

# 🔧 COMANDOS DE VERIFICAÇÃO
docker --version              # Versão do Docker
docker info                   # Informações do sistema
docker version                # Versão detalhada`,
                        dica: "💡 Container != VM. Container é como um processo isolado, não uma máquina virtual completa. É por isso que é tão rápido!"
                    }
                },
                {
                    id: "instalacao",
                    nome: "Instalação e Configuração",
                    icone: "⚙️",
                    descricao: "Instalar Docker em Linux, Windows e Mac",
                    conteudo: {
                        explicacao: "Instalação do Docker em diferentes sistemas operacionais.",
                        codigo: `# 🐧 LINUX (Ubuntu/Debian)
sudo apt update
sudo apt install -y ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# 👤 ADICIONAR USUÁRIO AO GRUPO DOCKER
sudo usermod -aG docker $USER
# Logout e login novamente

# 🔧 VERIFICAR INSTALAÇÃO
docker --version
docker run hello-world

# 🏁 COMANDO RÁPIDO (instalação simplificada)
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# 🪟 WINDOWS (WSL2)
# 1. Instale WSL2
wsl --install
# 2. Baixe Docker Desktop
# https://www.docker.com/products/docker-desktop/

# 🍎 MAC
# Baixe Docker Desktop
# https://www.docker.com/products/docker-desktop/`,
                        dica: "🔥 Após instalar, adicione seu usuário ao grupo docker para não precisar usar 'sudo' sempre. Reboot necessário!"
                    }
                },
                {
                    id: "primeiros-comandos",
                    nome: "Primeiros Comandos",
                    icone: "🚀",
                    descricao: "run, ps, pull, images, rm e primeiros containers",
                    conteudo: {
                        explicacao: "Comandos essenciais para começar a usar Docker.",
                        codigo: `# 🚀 RODAR PRIMEIRO CONTAINER
docker run hello-world         # Teste: baixa e roda hello-world

# 📦 BAIXAR IMAGEM
docker pull nginx              # Baixa imagem do Nginx
docker pull ubuntu:22.04       # Baixa Ubuntu 22.04

# 🐳 RODAR CONTAINER
docker run nginx               # Roda Nginx (modo normal)
docker run -d nginx            # Roda em background (detached)
docker run -d --name meu-nginx nginx  # Roda com nome

# 📋 VER CONTAINERS
docker ps                      # Containers rodando
docker ps -a                   # TODOS os containers (incluindo parados)

# 📸 VER IMAGENS
docker images                  # Lista imagens baixadas
docker image ls                # Mesmo comando

# 🛑 PARAR CONTAINER
docker stop meu-nginx          # Para o container
docker stop $(docker ps -q)    # Para TODOS os containers

# ▶️ INICIAR CONTAINER PARADO
docker start meu-nginx         # Inicia container parado

# ❌ REMOVER CONTAINER
docker rm meu-nginx            # Remove container
docker rm -f meu-nginx         # Remove FORÇADO (mesmo rodando)
docker rm $(docker ps -a -q)   # Remove TODOS os containers

# 🗑️ REMOVER IMAGEM
docker rmi nginx               # Remove imagem
docker rmi $(docker images -q) # Remove TODAS as imagens

# 🔍 LOGS
docker logs meu-nginx          # Ver logs
docker logs -f meu-nginx       # Seguir logs (tail -f)

# 🔧 EXECUTAR COMANDOS
docker exec -it meu-nginx bash # Entra no container (bash)
docker exec meu-nginx ls -la   # Executa comando sem entrar

# 🌐 PORTAS
docker run -d -p 8080:80 --name web nginx  # Mapeia porta 8080 local -> 80 container
# Agora acesse: http://localhost:8080`,
                        dica: "💡 'docker ps -a' é SEU AMIGO! Mostra todos os containers, até os parados. Use 'docker logs' para debugar!"
                    }
                },
                {
                    id: "management",
                    nome: "Gerenciamento de Containers",
                    icone: "⚡",
                    descricao: "start, stop, restart, pause, unpause, rename, stats",
                    conteudo: {
                        explicacao: "Comandos para gerenciar containers em execução.",
                        codigo: `# 🎮 GERENCIAR CONTAINERS
docker start container         # Inicia container parado
docker stop container          # Para container gentilmente
docker restart container       # Reinicia container
docker pause container         # Pausa processos no container
docker unpause container       # Despausa container
docker rename container novo_nome  # Renomeia container

# 📊 MONITORAMENTO
docker stats                   # Monitor uso de recursos (CPU, memória)
docker stats container         # Monitor específico
docker top container           # Processos rodando no container
docker inspect container       # TODAS as informações do container
docker inspect container | grep IPAddress  # Ver IP do container

# 🔍 PORTAS E PROCESSOS
docker port container          # Mostra portas mapeadas
docker ps -a                   # Lista TODOS os containers
docker ps -q                   # Só IDs dos containers
docker ps -a -q                # Só IDs de TODOS os containers

# 🔥 COMANDOS ÚTEIS
# Parar TODOS os containers
docker stop $(docker ps -aq)

# Remover TODOS os containers (parados)
docker rm $(docker ps -aq)

# Remover TODAS as imagens não usadas
docker image prune -a

# Remover TUDO que não está sendo usado
docker system prune -af

# Ver uso de espaço
docker system df

# 📝 EXEMPLO PRÁTICO
# Criar container, pausar, despausar e parar
docker run -d --name teste nginx
docker ps                      # Container rodando
docker pause teste             # Pausa
docker ps                      # Status: Paused
docker unpause teste           # Despausa
docker ps                      # Status: Running
docker stop teste              # Para
docker ps -a                   # Status: Exited`,
                        dica: "🔥 'docker inspect' é o comando mais poderoso para debug! Mostra TUDO sobre o container. Use 'docker system prune' para limpar espaço."
                    }
                }
            ]
        },
        {
            id: "imagens",
            nome: "🐳 IMAGENS E DOCKERFILE",
            icone: "📦",
            descricao: "Dockerfile, build, tags, layers e boas práticas",
            progresso: 0,
            subCards: [
                {
                    id: "dockerfile",
                    nome: "Dockerfile - Criando Imagens",
                    icone: "📝",
                    descricao: "FROM, RUN, COPY, ADD, CMD, ENTRYPOINT, EXPOSE",
                    conteudo: {
                        explicacao: "Dockerfile é a receita para construir imagens. Cada instrução cria uma layer (camada) na imagem.",
                        codigo: `# 📝 DOCKERFILE BÁSICO
# FROM - Base da imagem
FROM ubuntu:22.04

# LABEL - Metadados (opcional)
LABEL maintainer="seu@email.com"
LABEL version="1.0"

# ENV - Variáveis de ambiente
ENV APP_HOME=/app
ENV NODE_VERSION=18

# RUN - Executa comandos durante o build
RUN apt-get update && apt-get install -y \\
    curl \\
    wget \\
    && rm -rf /var/lib/apt/lists/*

# WORKDIR - Define diretório de trabalho
WORKDIR $APP_HOME

# COPY - Copia arquivos LOCAL -> CONTAINER
COPY package*.json ./

# RUN - Instala dependências
RUN npm install

# COPY - Copia o resto do código
COPY . .

# EXPOSE - Porta que será exposta
EXPOSE 3000

# CMD - Comando executado quando o container roda
CMD ["npm", "start"]

# 🔧 BUILD DA IMAGEM
docker build -t minha-app .              # Builda com nome
docker build -t minha-app:1.0 .          # Builda com tag
docker build -f Dockerfile.prod -t app . # Build com Dockerfile específico

# 🏷️ TAGS
docker tag minha-app:1.0 usuario/minha-app:1.0  # Tag para registry
docker tag minha-app:1.0 minha-app:latest        # Tag latest

# 📤 PUSH PARA REGISTRY
docker login
docker push usuario/minha-app:1.0

# 🔥 DOCKERFILE AVANÇADO
# Multi-stage build (imagem menor!)
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`,
                        dica: "🔥 Use multi-stage builds para criar imagens MUITO menores. Cada RUN cria uma layer - agrupe comandos com && para reduzir tamanho."
                    }
                },
                {
                    id: "dockerfile-avancado",
                    nome: "Dockerfile Avançado",
                    icone: "⚡",
                    descricao: "ARG, ONBUILD, HEALTHCHECK, SHELL, USER, VOLUME",
                    conteudo: {
                        explicacao: "Comandos avançados do Dockerfile para construir imagens profissionais.",
                        codigo: `# 🎯 DOCKERFILE AVANÇADO
# ARG - Argumentos para build
ARG VERSION=latest
FROM node:\${VERSION}

# USER - Troca usuário (melhora segurança)
RUN groupadd -r node && useradd -r -g node node
USER node

# VOLUME - Ponto de montagem
VOLUME ["/app/data"]

# HEALTHCHECK - Verifica se container está saudável
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \\
    CMD curl -f http://localhost/ || exit 1

# SHELL - Define shell padrão
SHELL ["/bin/bash", "-c"]

# ONBUILD - Comandos executados em imagens que usam esta como base
ONBUILD RUN npm install

# ENTRYPOINT vs CMD
# ENTRYPOINT - Comando principal (não pode ser sobrescrito facilmente)
ENTRYPOINT ["python"]
CMD ["app.py"]

# ARG com valor padrão
ARG NODE_VERSION=18
FROM node:\${NODE_VERSION}-alpine

# 🔧 BUILD COM ARGS
docker build --build-arg VERSION=18-alpine -t app .

# 📋 BOAS PRÁTICAS
# ✅ Use imagens oficiais (alpine para menores)
FROM node:18-alpine

# ✅ Combine RUNs para reduzir layers
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# ✅ Use .dockerignore
# Crie um arquivo .dockerignore:
node_modules
npm-debug.log
.git
.env

# ✅ Ordene instruções do menos para o mais mutável
COPY package*.json ./
RUN npm install
COPY . .

# ✅ Use multi-stage build para reduzir tamanho
FROM node:18 AS builder
# ... build
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html`,
                        dica: "🔥 HEALTHCHECK é ESSENCIAL para orquestradores (Kubernetes). Multi-stage build reduz imagens em 90%!"
                    }
                },
                {
                    id: "layers-cache",
                    nome: "Layers e Cache",
                    icone: "🧩",
                    descricao: "Entendendo layers, cache e otimização de builds",
                    conteudo: {
                        explicacao: "Docker usa um sistema de cache para acelerar builds. Cada instrução cria uma layer.",
                        codigo: `# 🧩 ENTENDENDO LAYERS
# Cada comando no Dockerfile cria uma layer
FROM ubuntu:22.04    # Layer 1
RUN apt-get update   # Layer 2
RUN apt-get install -y curl  # Layer 3
COPY . .             # Layer 4
CMD ["bash"]         # Layer 5

# 🔥 CACHE DO DOCKER
# Docker usa cache das layers anteriores SE nenhuma mudança ocorrer

# EXEMPLO: Build eficiente
FROM node:18-alpine

# 1. Primeiro copia package.json (menos mutável)
WORKDIR /app
COPY package*.json ./

# 2. Instala dependências (cached se package.json não mudou)
RUN npm install

# 3. Depois copia o resto (mais mutável)
COPY . .

# 4. Build final
RUN npm run build

# ⚡ OTIMIZANDO BUILDS
# ✅ Coloque comandos que mudam menos primeiro
# ✅ Use .dockerignore para evitar copiar arquivos desnecessários
# ✅ Combine RUNs para reduzir layers
# ✅ Use cache mount para melhor performance

# 🔧 BUILD SEM CACHE
docker build --no-cache -t app .

# 📊 VER LAYERS
docker history app      # Mostra todas as layers da imagem
docker history --no-trunc app  # Sem truncar

# 🗑️ LIMPAR CACHE
docker builder prune   # Remove cache não usado
docker builder prune -a # Remove TODO o cache

# 📝 EXEMPLO: OPTIMIZADO
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["node", "dist/index.js"]`,
                        dica: "🔥 Ordem das instruções no Dockerfile impacta MUITO a performance do cache. Coloque o que muda menos primeiro!"
                    }
                },
                {
                    id: "registries",
                    nome: "Registries (Docker Hub)",
                    icone: "🌐",
                    descricao: "Docker Hub, push, pull, login e registries privados",
                    conteudo: {
                        explicacao: "Registries são repositórios para armazenar e compartilhar imagens Docker.",
                        codigo: `# 🌐 DOCKER HUB
# 🔑 LOGIN
docker login                      # Login interativo
docker login -u usuario           # Login com usuário
docker login -u usuario -p senha  # Login inline (inseguro)

# 📤 PUSH (enviar)
docker tag minha-app:latest usuario/minha-app:1.0
docker push usuario/minha-app:1.0
docker push usuario/minha-app:latest

# 📥 PULL (baixar)
docker pull ubuntu:22.04
docker pull nginx:alpine
docker pull usuario/minha-app:1.0

# 🔍 BUSCAR
docker search nginx              # Busca no Docker Hub
docker search ubuntu --limit 5   # Limita resultados

# 🏠 REGISTRY PRIVADO
# AWS ECR
aws ecr get-login-password | docker login --username AWS --password-stdin AWS_ACCOUNT.dkr.ecr.region.amazonaws.com
docker tag app AWS_ACCOUNT.dkr.ecr.region.amazonaws.com/app
docker push AWS_ACCOUNT.dkr.ecr.region.amazonaws.com/app

# GCR (Google)
docker tag app gcr.io/projeto/app
docker push gcr.io/projeto/app

# GitHub Container Registry
docker tag app ghcr.io/usuario/app
docker push ghcr.io/usuario/app

# 🔧 REGISTRY LOCAL
docker run -d -p 5000:5000 --name registry registry:2
docker tag app localhost:5000/app
docker push localhost:5000/app
docker pull localhost:5000/app

# 📋 COMANDOS ÚTEIS
docker logout                    # Logout do registry
docker system prune -a           # Remove imagens não usadas`,
                        dica: "💡 Docker Hub tem limites de pulls anônimos. Use um registry privado para imagens internas da empresa."
                    }
                }
            ]
        },
        {
            id: "network",
            nome: "🐳 REDES E VOLUMES",
            icone: "🌐",
            descricao: "Bridge, host, overlay, volumes e bind mounts",
            progresso: 0,
            subCards: [
                {
                    id: "networks",
                    nome: "Redes Docker (TUDO)",
                    icone: "🌐",
                    descricao: "bridge, host, overlay, macvlan, ipvlan e criação de redes",
                    conteudo: {
                        explicacao: "Redes permitem comunicação entre containers e com o host. Docker cria redes automaticamente.",
                        codigo: `# 🔍 VER REDES
docker network ls                    # Lista redes
docker network inspect bridge        # Detalhes da rede bridge
docker network inspect host          # Detalhes da rede host

# 🏗️ TIPOS DE REDE
# 1. bridge (padrão) - Isolada, com NAT
# 2. host - Usa rede do host (sem isolamento)
# 3. none - Sem rede
# 4. overlay - Para Swarm/Kubernetes
# 5. macvlan - Atribui MAC próprio

# 🔧 CRIAR REDES
docker network create minha-rede     # Cria rede bridge
docker network create -d bridge minha-rede  # Cria bridge explícita
docker network create --subnet=172.20.0.0/16 minha-rede  # Com subnet

# 🐳 CONECTAR CONTAINERS A REDES
docker run -d --name app1 --net minha-rede nginx
docker run -d --name app2 --net minha-rede nginx

# 🔗 CONECTAR CONTAINER EXISTENTE
docker network connect minha-rede app1
docker network disconnect minha-rede app1

# 🔍 INSERIR CONTAINER
docker inspect app1 | grep IPAddress  # Ver IP do container
docker exec app1 ping app2            # Container se comunica pelo nome!

# 🔥 REDE BRIDGE (Padrão)
# Containers na mesma bridge se comunicam
docker run -d --name web1 nginx
docker run -d --name web2 nginx
docker exec web1 ping web2  # Funciona!

# 🌐 REDE HOST (Sem isolamento)
docker run -d --name app --net host nginx
# Acessa localhost:80 diretamente

# 📊 PORTAS COM REDES
docker run -d -p 8080:80 --name web nginx  # Mapeia porta

# 🔧 EXEMPLO PRÁTICO
# Criar rede para aplicação completa
docker network create app-network

# Banco de dados na rede
docker run -d --name postgres --net app-network -e POSTGRES_PASSWORD=senha postgres

# Aplicação na mesma rede (conecta via 'postgres')
docker run -d --name app --net app-network -p 3000:3000 minha-app`,
                        dica: "🔥 Containers na MESMA rede se comunicam pelo NOME. Use --net para conectar containers."
                    }
                },
                {
                    id: "volumes",
                    nome: "Volumes e Bind Mounts (TUDO)",
                    icone: "📁",
                    descricao: "Volumes, bind mounts, tmpfs, backup e persistência",
                    conteudo: {
                        explicacao: "Volumes permitem persistir dados além do ciclo de vida do container.",
                        codigo: `# 📁 TIPOS DE VOLUME
# 1. Volume (gerenciado pelo Docker) - Recomendado
# 2. Bind Mount (pasta do host) - Para desenvolvimento
# 3. tmpfs (memória) - Dados temporários

# 🔧 CRIAR VOLUMES
docker volume create meu-volume     # Cria volume
docker volume create --name dados   # Cria volume
docker volume ls                    # Lista volumes
docker volume inspect meu-volume    # Ver detalhes
docker volume rm meu-volume         # Remove volume
docker volume prune                 # Remove volumes não usados

# 🐳 USAR VOLUMES
# Criar container com volume
docker run -d --name app -v meu-volume:/app/data nginx

# Criar volume na criação do container
docker run -d --name app --mount source=meu-volume,target=/app/data nginx

# Bind Mount (pasta local)
docker run -d --name dev -v $(pwd):/app -p 3000:3000 node npm start

# Bind Mount com read-only
docker run -d --name dev -v $(pwd):/app:ro node

# 📋 VOLUME COM NOMES (mais fácil)
docker run -d --name postgres -v postgres-data:/var/lib/postgresql/data -e POSTGRES_PASSWORD=senha postgres

# 🔄 BACKUP DE VOLUME
docker run --rm -v meu-volume:/source -v $(pwd):/backup alpine tar czf /backup/backup.tar.gz -C /source .

# 📥 RESTAURAR BACKUP
docker run --rm -v meu-volume:/target -v $(pwd):/backup alpine tar xzf /backup/backup.tar.gz -C /target

# 🗑️ REMOVER VOLUMES ÓRFÃOS
docker volume prune          # Remove volumes não usados
docker volume rm $(docker volume ls -q)  # Remove TODOS

# 🔧 DOCKER COMPOSE COM VOLUMES
# version: '3'
# services:
#   app:
#     volumes:
#       - dados:/app/data
# volumes:
#   dados:

# 📝 EXEMPLO PRÁTICO
# Desenvolvimento com bind mount
docker run -d --name dev -v $(pwd):/app -p 3000:3000 node:18 npm run dev

# Banco com volume persistente
docker run -d --name postgres -v pgdata:/var/lib/postgresql/data -e POSTGRES_PASSWORD=senha postgres

# Criar backup do banco
docker exec postgres pg_dump -U postgres banco > backup.sql`,
                        dica: "🔥 Use VOLUMES para dados persistentes (banco, arquivos). Use BIND MOUNTS para desenvolvimento (código). Volume é mais performático e seguro."
                    }
                }
            ]
        },
        {
            id: "compose",
            nome: "🐳 DOCKER COMPOSE - TUDO!",
            icone: "📋",
            descricao: "docker-compose.yml, serviços, dependências, networks, volumes e comandos",
            progresso: 0,
            subCards: [
                {
                    id: "compose-basico",
                    nome: "Docker Compose Básico",
                    icone: "📝",
                    descricao: "O que é, para que serve, estrutura e primeiros passos",
                    conteudo: {
                        explicacao: "Docker Compose permite definir e rodar múltiplos containers com um único arquivo YAML. É a ferramenta ESSENCIAL para projetos com múltiplos serviços.",
                        codigo: `# 📋 O QUE É DOCKER COMPOSE?
# - Ferramenta para definir aplicações multi-container
# - Usa um arquivo YAML (docker-compose.yml)
# - Um comando sobe TODOS os serviços
# - Ideal para desenvolvimento e produção

# 🎯 PARA QUE SERVE?
# ✅ Orquestrar múltiplos containers
# ✅ Definir redes, volumes e dependências
# ✅ Configurar variáveis de ambiente
# ✅ Subir ambientes completos com um comando
# ✅ Reprodutibilidade (todos rodam igual)

# 📂 ESTRUTURA BÁSICA
# docker-compose.yml
version: '3.8'

services:
  web:
    image: nginx:alpine
    ports:
      - "80:80"

# 🚀 COMANDOS BÁSICOS
docker-compose up          # Sobe os serviços (logs no terminal)
docker-compose up -d       # Sobe em background (detached)
docker-compose down        # Para e remove containers
docker-compose ps          # Lista serviços rodando
docker-compose logs        # Ver logs de todos
docker-compose logs web    # Ver logs do serviço web

# 🔥 EXEMPLO COMPLETO
version: '3.8'
services:
  web:
    image: nginx:alpine
    container_name: meu-nginx
    ports:
      - "8080:80"
    volumes:
      - ./html:/usr/share/nginx/html
    restart: unless-stopped

# 📝 PASSO A PASSO
# 1. Crie o arquivo docker-compose.yml
# 2. Adicione os serviços
# 3. Rode: docker-compose up -d
# 4. Acesse: http://localhost:8080
# 5. Pare: docker-compose down`,
                        dica: "💡 Docker Compose transforma 'docker run' com várias flags em um arquivo YAML simples e versionado!"
                    }
                },
                {
                    id: "compose-avancado",
                    nome: "Compose Avançado",
                    icone: "⚡",
                    descricao: "depends_on, networks, volumes, environment, restart e healthcheck",
                    conteudo: {
                        explicacao: "Docker Compose avançado para projetos complexos com múltiplos serviços interdependentes.",
                        codigo: `# 🎯 DOCKER-COMPOSE.YML COMPLETO
version: '3.8'

# 📦 DEFINIÇÃO DE SERVIÇOS
services:
  # ============ 1. POSTGRESQL ============
  postgres:
    image: postgres:15-alpine
    container_name: meu-postgres
    environment:
      POSTGRES_USER: usuario
      POSTGRES_PASSWORD: senha
      POSTGRES_DB: meu_banco
    volumes:
      - postgres-data:/var/lib/postgresql/data
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
    ports:
      - "5432:5432"
    networks:
      - app-network
    restart: unless-stopped
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U usuario"]
      interval: 10s
      timeout: 5s
      retries: 5

  # ============ 2. REDIS ============
  redis:
    image: redis:7-alpine
    container_name: meu-redis
    ports:
      - "6379:6379"
    networks:
      - app-network
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 3s
      retries: 3

  # ============ 3. APLICAÇÃO ============
  app:
    build:
      context: .
      dockerfile: Dockerfile
      args:
        NODE_VERSION: 18
    container_name: minha-app
    ports:
      - "3000:3000"
    environment:
      DATABASE_URL: postgresql://usuario:senha@postgres:5432/meu_banco
      REDIS_URL: redis://redis:6379
      NODE_ENV: development
    volumes:
      - ./src:/app/src
      - /app/node_modules
    networks:
      - app-network
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_healthy
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 5s
      retries: 3

  # ============ 4. NGINX (PROXY) ============
  nginx:
    image: nginx:alpine
    container_name: meu-nginx
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - ./ssl:/etc/nginx/ssl:ro
      - ./static:/usr/share/nginx/html:ro
    networks:
      - app-network
    depends_on:
      - app
    restart: unless-stopped

  # ============ 5. ADMINER (DB MANAGEMENT) ============
  adminer:
    image: adminer:latest
    container_name: adminer
    ports:
      - "8080:8080"
    networks:
      - app-network
    restart: unless-stopped

# 🌐 REDES
networks:
  app-network:
    driver: bridge
    ipam:
      config:
        - subnet: 172.20.0.0/16

# 📁 VOLUMES
volumes:
  postgres-data:
    driver: local

# 🚀 COMANDOS AVANÇADOS
docker-compose up -d --build    # Sobe com rebuild
docker-compose down -v          # Para e remove VOLUMES
docker-compose restart app      # Reinicia só o app
docker-compose exec app bash    # Entra no container
docker-compose exec postgres psql -U usuario  # Executa comando
docker-compose config           # Valida o arquivo
docker-compose pull             # Atualiza imagens
docker-compose logs -f app      # Segue logs do app

# 🔥 VARIÁVEIS DE AMBIENTE (.env)
# Crie um arquivo .env:
DATABASE_URL=postgresql://usuario:senha@postgres:5432/meu_banco
REDIS_URL=redis://redis:6379
NODE_ENV=production

# Use no docker-compose.yml:
environment:
  DATABASE_URL: \${DATABASE_URL}
  REDIS_URL: \${REDIS_URL}`,
                        dica: "🔥 depends_on com condition: service_healthy garante que o serviço só inicia quando o outro está SAUDÁVEL!"
                    }
                },
                {
                    id: "compose-comandos",
                    nome: "Comandos Compose (TUDO)",
                    icone: "⌨️",
                    descricao: "up, down, logs, exec, ps, build, pull, restart, stop, start",
                    conteudo: {
                        explicacao: "Todos os comandos do Docker Compose que você vai usar no dia a dia.",
                        codigo: `# 🚀 COMANDOS DOCKER COMPOSE - GUIA COMPLETO

# 📦 GERENCIAR SERVIÇOS
docker-compose up                # Sobe serviços (logs no terminal)
docker-compose up -d             # Sobe em background (detached)
docker-compose down              # Para e remove containers
docker-compose down -v           # Para e remove VOLUMES
docker-compose down --rmi all    # Remove imagens também

# 📋 VER STATUS
docker-compose ps                # Lista serviços rodando
docker-compose ps -a             # Todos (incluindo parados)
docker-compose top               # Processos nos containers

# 📊 LOGS
docker-compose logs              # Ver logs de TODOS
docker-compose logs app          # Ver logs do serviço app
docker-compose logs -f app       # Seguir logs do app
docker-compose logs --tail=50    # Últimas 50 linhas

# 🔧 EXECUTAR COMANDOS
docker-compose exec app bash     # Entra no container app
docker-compose exec postgres psql -U usuario  # Executa comando
docker-compose run app npm test  # Roda comando em novo container

# 🏗️ BUILD
docker-compose build             # Reconstrói imagens
docker-compose build --no-cache  # Build sem cache
docker-compose build app         # Build só do app
docker-compose up -d --build     # Sobe com rebuild

# 🔄 GERENCIAR CICLO DE VIDA
docker-compose restart           # Reinicia serviços
docker-compose restart app       # Reinicia só o app
docker-compose stop              # Para serviços
docker-compose stop app          # Para só o app
docker-compose start             # Inicia serviços
docker-compose pause             # Pausa serviços
docker-compose unpause           # Despausa serviços

# 📥 IMAGENS
docker-compose pull              # Atualiza imagens
docker-compose push              # Envia imagens para registry

# 🔍 DIAGNÓSTICO
docker-compose config            # Valida arquivo YAML
docker-compose config --services # Lista serviços
docker-compose config --volumes  # Lista volumes
docker-compose events            # Eventos em tempo real
docker-compose port app 3000     # Porta mapeada

# 📝 EXEMPLOS PRÁTICOS
# Subir tudo em background
docker-compose up -d

# Ver logs de todos
docker-compose logs -f

# Entrar no container da app
docker-compose exec app bash

# Reiniciar app só
docker-compose restart app

# Parar tudo
docker-compose down

# Subir com rebuild e ver logs
docker-compose up -d --build
docker-compose logs -f app`,
                        dica: "💡 Use 'docker-compose up -d' para desenvolvimento. 'docker-compose logs -f' é seu melhor amigo para debug!"
                    }
                },
                {
                    id: "compose-exemplos",
                    nome: "Projetos Reais com Compose",
                    icone: "📁",
                    descricao: "WordPress, Node.js + PostgreSQL + Redis, Java + PostgreSQL, Python + PostgreSQL",
                    conteudo: {
                        explicacao: "Exemplos práticos de projetos reais usando Docker Compose.",
                        codigo: `# 📝 PROJETO 1: WORDPRESS + MYSQL
# docker-compose.yml
version: '3.8'
services:
  db:
    image: mysql:8
    container_name: wordpress-db
    environment:
      MYSQL_ROOT_PASSWORD: senha
      MYSQL_DATABASE: wordpress
    volumes:
      - db-data:/var/lib/mysql
    restart: unless-stopped

  wordpress:
    image: wordpress:latest
    container_name: wordpress-app
    ports:
      - "8080:80"
    environment:
      WORDPRESS_DB_HOST: db
      WORDPRESS_DB_USER: root
      WORDPRESS_DB_PASSWORD: senha
      WORDPRESS_DB_NAME: wordpress
    volumes:
      - wp-data:/var/www/html
    depends_on:
      - db
    restart: unless-stopped

volumes:
  db-data:
  wp-data:

# 🚀 PROJETO 2: NODE.JS + POSTGRESQL + REDIS
version: '3.8'
services:
  postgres:
    image: postgres:15-alpine
    container_name: app-postgres
    environment:
      POSTGRES_USER: app
      POSTGRES_PASSWORD: senha
      POSTGRES_DB: app
    volumes:
      - pgdata:/var/lib/postgresql/data
    ports:
      - "5432:5432"
    networks:
      - app-network

  redis:
    image: redis:7-alpine
    container_name: app-redis
    ports:
      - "6379:6379"
    networks:
      - app-network

  app:
    build: .
    container_name: app-node
    ports:
      - "3000:3000"
    environment:
      DATABASE_URL: postgresql://app:senha@postgres:5432/app
      REDIS_URL: redis://redis:6379
    volumes:
      - ./src:/app/src
    depends_on:
      - postgres
      - redis
    networks:
      - app-network

networks:
  app-network:

volumes:
  pgdata:

# ☕ PROJETO 3: JAVA + POSTGRESQL + NGINX
version: '3.8'
services:
  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: app
      POSTGRES_USER: app
      POSTGRES_PASSWORD: senha
    volumes:
      - pgdata:/var/lib/postgresql/data
    networks:
      - app-network

  app:
    build: .
    container_name: app-java
    environment:
      SPRING_DATASOURCE_URL: jdbc:postgresql://postgres:5432/app
      SPRING_DATASOURCE_USERNAME: app
      SPRING_DATASOURCE_PASSWORD: senha
    depends_on:
      - postgres
    networks:
      - app-network

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
    depends_on:
      - app
    networks:
      - app-network

networks:
  app-network:

volumes:
  pgdata:

# 🐍 PROJETO 4: PYTHON + FLASK + POSTGRESQL
version: '3.8'
services:
  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: app
      POSTGRES_USER: app
      POSTGRES_PASSWORD: senha
    volumes:
      - pgdata:/var/lib/postgresql/data

  app:
    build: .
    ports:
      - "5000:5000"
    environment:
      DATABASE_URL: postgresql://app:senha@postgres:5432/app
    depends_on:
      - postgres
    volumes:
      - ./app:/app

volumes:
  pgdata:

# 🚀 PROJETO 5: STACK COMPLETA (Node + PostgreSQL + Redis + Nginx)
# Subir: docker-compose up -d
# Parar: docker-compose down
# Logs: docker-compose logs -f
# Entrar: docker-compose exec app bash`,
                        dica: "🔥 Docker Compose permite SUBIR AMBIENTES COMPLETOS com UM COMANDO! Perfeito para desenvolvimento e produção."
                    }
                }
            ]
        },
        {
            id: "avancado",
            nome: "🐳 DOCKER AVANÇADO",
            icone: "⚡",
            descricao: "Dockerfile multi-stage, healthcheck, security, swarm e best practices",
            progresso: 0,
            subCards: [
                {
                    id: "multi-stage",
                    nome: "Multi-Stage Builds",
                    icone: "🏗️",
                    descricao: "Reduzindo tamanho de imagens drasticamente",
                    conteudo: {
                        explicacao: "Multi-stage builds permitem usar múltiplos FROM no Dockerfile, reduzindo drasticamente o tamanho da imagem final.",
                        codigo: `# 🏗️ MULTI-STAGE BUILD - GO
FROM golang:1.19 AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o /app/main .

FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=builder /app/main .
EXPOSE 8080
CMD ["./main"]

# 🏗️ MULTI-STAGE - Node.js
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["node", "dist/index.js"]

# 🏗️ MULTI-STAGE - Java
FROM maven:3.8-openjdk-17 AS builder
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn package -DskipTests

FROM openjdk:17-alpine
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]

# 🏗️ MULTI-STAGE - Python
FROM python:3.11 AS builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --user -r requirements.txt

FROM python:3.11-slim
WORKDIR /app
COPY --from=builder /root/.local /root/.local
COPY . .
ENV PATH=/root/.local/bin:$PATH
CMD ["python", "app.py"]

# 📊 COMPARAÇÃO DE TAMANHOS
# Node.js: 800MB -> 50MB (redução de 94%)
# Java: 600MB -> 150MB (redução de 75%)
# Python: 400MB -> 80MB (redução de 80%)
# Go: 800MB -> 12MB (redução de 98.5%)`,
                        dica: "🔥 Multi-stage build reduz imagens em ATÉ 95%! Use Alpine para imagens ainda menores."
                    }
                },
                {
                    id: "healthcheck",
                    nome: "Healthcheck",
                    icone: "❤️",
                    descricao: "Monitorando saúde dos containers",
                    conteudo: {
                        explicacao: "HEALTHCHECK permite ao Docker verificar se o container está saudável.",
                        codigo: `# ❤️ HEALTHCHECK NO DOCKERFILE
FROM nginx:alpine

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
  CMD curl -f http://localhost/ || exit 1

# ⏱️ PARÂMETROS
# --interval=30s   # Verifica a cada 30s
# --timeout=3s     # Timeout de 3s
# --start-period=5s # Espera 5s antes de começar
# --retries=3      # 3 falhas = unhealthy

# 🔧 HEALTHCHECK EM CONTAINER RODANDO
docker inspect --format='{{.State.Health}}' meu-container

# Ver status de saúde
docker ps --filter "health=healthy"
docker ps --filter "health=unhealthy"

# 🐳 EXEMPLOS PRÁTICOS
# PostgreSQL
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \\
  CMD pg_isready -U postgres || exit 1

# Redis
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \\
  CMD redis-cli ping || exit 1

# Node.js API
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \\
  CMD node healthcheck.js || exit 1

# 🔍 COMANDOS ÚTEIS
# Ver health status
docker inspect container_name | grep -A 10 Health

# Ver logs de healthcheck
docker logs container_name

# Forçar healthcheck manual
docker exec container_name curl -f http://localhost/health

# 📋 DOCKER-COMPOSE COM HEALTHCHECK
services:
  app:
    image: minha-app
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 5s
      retries: 3
      start_period: 10s
    depends_on:
      postgres:
        condition: service_healthy

  postgres:
    image: postgres:15
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 10s
      timeout: 5s
      retries: 5`,
                        dica: "🔥 HEALTHCHECK é ESSENCIAL para orquestradores (Kubernetes, Swarm). Use condition: service_healthy no Compose."
                    }
                },
                {
                    id: "security",
                    nome: "Segurança Docker (TUDO)",
                    icone: "🔒",
                    descricao: "Usuários, recursos, TLS, secrets e boas práticas",
                    conteudo: {
                        explicacao: "Segurança é fundamental em containers. Use usuários não-root, limite recursos e proteja secrets.",
                        codigo: `# 🔒 DOCKERFILE SEGURO
# ❌ NÃO FAÇA
FROM node:18
RUN npm install -g npm
RUN npm install
CMD ["node", "app.js"]

# ✅ FAÇA ASSIM
FROM node:18-alpine

# 1. Crie usuário não-root
RUN addgroup -g 1001 -S nodejs && \\
    adduser -S nodejs -u 1001

# 2. Mude para o usuário
USER nodejs

# 3. Use diretório do usuário
WORKDIR /home/nodejs/app

# 4. Copie com permissões corretas
COPY --chown=nodejs:nodejs package*.json ./
RUN npm ci --only=production

# 5. Cuidado com o CMD
CMD ["node", "app.js"]

# 🔐 SECRETS (Docker Compose)
version: '3.8'
services:
  app:
    image: minha-app
    secrets:
      - db_password
      - api_key
    environment:
      DB_PASSWORD_FILE: /run/secrets/db_password
      API_KEY_FILE: /run/secrets/api_key

secrets:
  db_password:
    file: ./secrets/db_password.txt
  api_key:
    external: true

# 🔧 LIMITAR RECURSOS
docker run -d --name app \\
  --memory=512m \\
  --memory-swap=1g \\
  --cpus=0.5 \\
  --ulimit nofile=65536:65536 \\
  minha-app

# DOCKER-COMPOSE COM LIMITES
services:
  app:
    image: minha-app
    deploy:
      resources:
        limits:
          cpus: '0.5'
          memory: 512M
        reservations:
          cpus: '0.25'
          memory: 256M

# 🛡️ SECURITY SCANNING
docker scan minha-app          # Ver vulnerabilidades
docker scout quickview         # Visão rápida (Docker Scout)
docker scout cves minha-app    # Lista CVEs

# 📋 BOAS PRÁTICAS
# ✅ Use imagens oficiais (ou verified)
# ✅ Mantenha imagens atualizadas
# ✅ Execute como usuário não-root
# ✅ Limite recursos
# ✅ Use secrets para dados sensíveis
# ✅ Use Docker Scout para vulnerabilidades
# ✅ Não salve credenciais na imagem
# ✅ Use multistage para reduzir superfície`,
                        dica: "⚡ SEMPRE use usuário não-root! NUNCA rode como root em produção. Use Docker Scout para ver vulnerabilidades."
                    }
                },
                {
                    id: "swarm",
                    nome: "Docker Swarm",
                    icone: "👥",
                    descricao: "Clusters, serviços, replicação e orquestração",
                    conteudo: {
                        explicacao: "Docker Swarm é o orquestrador nativo do Docker para clusters.",
                        codigo: `# 👥 INICIALIZAR SWARM
docker swarm init                 # Inicia cluster (modo manager)
docker swarm init --advertise-addr 192.168.1.100  # Com IP específico
docker swarm join --token TOKEN MANAGER_IP:2377  # Junta como worker

# 📋 NÓS
docker node ls                    # Lista nós no cluster
docker node inspect node1         # Detalhes do nó
docker node update --availability drain node1  # Drena nó

# 🚀 SERVIÇOS
docker service create --name web --publish 80:80 nginx
docker service ls                 # Lista serviços
docker service ps web             # Tasks do serviço
docker service inspect web        # Detalhes

# 📈 ESCALAR
docker service scale web=5        # 5 réplicas
docker service update --replicas 3 web  # Atualiza réplicas

# 🔄 ATUALIZAR
docker service update --image nginx:alpine web  # Atualiza imagem
docker service update --rollback web            # Rollback

# 🏗️ DOCKER-COMPOSE PARA SWARM
version: '3.8'
services:
  web:
    image: nginx:alpine
    ports:
      - "80:80"
    deploy:
      replicas: 3
      update_config:
        parallelism: 2
        delay: 10s
      restart_policy:
        condition: on-failure

  app:
    image: minha-app
    deploy:
      replicas: 5
      resources:
        limits:
          memory: 512M

# 🚀 DEPLOY NO SWARM
docker stack deploy -c docker-compose.yml minha-stack
docker stack ls                    # Lista stacks
docker stack ps minha-stack        # Tasks da stack
docker stack services minha-stack  # Serviços da stack
docker stack rm minha-stack        # Remove stack

# 📊 COMANDOS ÚTEIS
docker node ls                     # Nós no cluster
docker service logs web            # Logs do serviço
docker service logs -f web         # Seguir logs
docker service rm web              # Remove serviço

# 🔄 ROLLING UPDATE
docker service update \\
  --image minha-app:2.0 \\
  --update-parallelism 2 \\
  --update-delay 10s \\
  web`,
                        dica: "🔥 Swarm é mais simples que Kubernetes e vem nativo no Docker. Ótimo para começar com orquestração."
                    }
                }
            ]
        },
        {
            id: "pratico",
            nome: "🐳 DOCKER PRÁTICO",
            icone: "🚀",
            descricao: "Projetos reais, problemas comuns e soluções",
            progresso: 0,
            subCards: [
                {
                    id: "projetos",
                    nome: "Projetos Reais (TUDO)",
                    icone: "📁",
                    descricao: "WordPress, Node.js, Python, Java, PostgreSQL, Redis, Nginx",
                    conteudo: {
                        explicacao: "Exemplos práticos de projetos reais usando Docker.",
                        codigo: `# 📝 WORDPRESS + MYSQL
docker run -d --name mysql \\
  -e MYSQL_ROOT_PASSWORD=senha \\
  -e MYSQL_DATABASE=wordpress \\
  mysql:8

docker run -d --name wordpress \\
  -p 8080:80 \\
  -e WORDPASSWORD_DB_HOST=mysql \\
  -e WORDPASSWORD_DB_USER=root \\
  -e WORDPASSWORD_DB_PASSWORD=senha \\
  -e WORDPASSWORD_DB_NAME=wordpress \\
  wordpress:latest

# 🚀 Node.js + PostgreSQL + Redis
# docker-compose.yml
version: '3.8'
services:
  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_USER: app
      POSTGRES_PASSWORD: senha
      POSTGRES_DB: app
    volumes:
      - pgdata:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      DATABASE_URL: postgresql://app:senha@postgres:5432/app
      REDIS_URL: redis://redis:6379
    depends_on:
      - postgres
      - redis
    volumes:
      - ./src:/app/src

volumes:
  pgdata:

# ☕ Java + PostgreSQL + Nginx
version: '3.8'
services:
  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: app
      POSTGRES_USER: app
      POSTGRES_PASSWORD: senha
    volumes:
      - pgdata:/var/lib/postgresql/data

  app:
    build: .
    environment:
      SPRING_DATASOURCE_URL: jdbc:postgresql://postgres:5432/app
      SPRING_DATASOURCE_USERNAME: app
      SPRING_DATASOURCE_PASSWORD: senha
    depends_on:
      - postgres

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
    depends_on:
      - app

volumes:
  pgdata:

# 🐍 Python + Flask + PostgreSQL
version: '3.8'
services:
  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: app
      POSTGRES_USER: app
      POSTGRES_PASSWORD: senha
    volumes:
      - pgdata:/var/lib/postgresql/data

  app:
    build: .
    ports:
      - "5000:5000"
    environment:
      DATABASE_URL: postgresql://app:senha@postgres:5432/app
    depends_on:
      - postgres
    volumes:
      - ./app:/app

volumes:
  pgdata:

# 🐳 COMANDOS ÚTEIS
# Parar tudo
docker-compose down

# Subir tudo
docker-compose up -d

# Ver logs
docker-compose logs -f

# Entrar no banco
docker-compose exec postgres psql -U app`,
                        dica: "🔥 Use docker-compose para projetos reais. Separe serviços em containers diferentes para melhor escalabilidade."
                    }
                },
                {
                    id: "troubleshooting",
                    nome: "Resolução de Problemas (TUDO)",
                    icone: "🔧",
                    descricao: "Debug, logs, portas, volumes e problemas comuns",
                    conteudo: {
                        explicacao: "Como resolver problemas comuns no Docker.",
                        codigo: `# 🔍 DEBUG CONTAINER
# Problema: Container não sobe
docker logs container_name        # Ver logs
docker logs -f container_name     # Seguir logs
docker inspect container_name     # Ver TUDO

# Problema: Porta já ocupada
sudo lsof -i :8080                # Ver PID na porta
kill -9 PID                       # Mata processo

# Problema: Volume não funciona
docker inspect container_name | grep Mounts  # Ver volumes montados
docker exec container_name ls /mount/point   # Ver conteúdo

# Problema: Rede não funciona
docker exec container_name ping google.com   # Testa rede
docker exec container_name curl localhost    # Testa serviço
docker inspect container_name | grep IPAddress

# 🔧 PROBLEMAS COMUNS
# 1. Container não acessível
# Verifique: docker ps (está rodando?)
# Verifique: docker logs (algum erro?)
# Verifique: docker port container (portas mapeadas?)

# 2. Imagem não baixa
# docker pull nginx --verbose
# Check DNS: /etc/docker/daemon.json
# {
#   "dns": ["8.8.8.8", "8.8.4.4"]
# }

# 3. Espaço em disco
docker system df                   # Ver uso
docker system prune -af            # Limpa TUDO
docker volume prune                # Remove volumes não usados

# 4. Build falha
docker build --no-cache -t app .   # Build sem cache
docker build --progress=plain .    # Log detalhado

# 5. Performance lenta
docker stats                       # Ver recursos
docker update --cpus 0.5 container # Limitar CPU
docker update --memory 512m container # Limitar memória

# 🔥 COMANDOS DE EMERGÊNCIA
# Parar tudo
docker stop $(docker ps -aq)

# Remover tudo (CUIDADO!)
docker system prune -af
docker volume prune
docker rmi $(docker images -aq)

# Reset Docker
sudo systemctl stop docker
sudo rm -rf /var/lib/docker
sudo systemctl start docker

# Ver configurações
docker info
docker system info

# 📝 EXEMPLO PRÁTICO
# Diagnóstico completo
echo "=== CONTAINERS ==="
docker ps -a
echo "=== IMAGES ==="
docker images
echo "=== VOLUMES ==="
docker volume ls
echo "=== NETWORKS ==="
docker network ls
echo "=== DISK USAGE ==="
docker system df`,
                        dica: "💡 docker logs é SEU MELHOR AMIGO para debug. docker inspect mostra TUDO. Use system prune para limpar espaço."
                    }
                }
            ]
        }
    ]
};

// Estado da aplicação
let currentCategoryId = null;
let currentSubCardId = null;

// Funções de navegação
function showCategories() {
    document.getElementById('categoriesContainer').style.display = 'grid';
    document.getElementById('subCardsContainer').style.display = 'none';
    document.getElementById('contentContainer').style.display = 'none';
    document.getElementById('backToCategories').style.display = 'none';
    document.getElementById('backToSubCards').style.display = 'none';
    renderCategories();
}

function showSubCards(categoryId) {
    currentCategoryId = categoryId;
    document.getElementById('categoriesContainer').style.display = 'none';
    document.getElementById('subCardsContainer').style.display = 'block';
    document.getElementById('contentContainer').style.display = 'none';
    document.getElementById('backToCategories').style.display = 'inline-block';
    document.getElementById('backToSubCards').style.display = 'none';
    renderSubCards(categoryId);
}

function showContent(categoryId, subCardId) {
    currentCategoryId = categoryId;
    currentSubCardId = subCardId;
    document.getElementById('categoriesContainer').style.display = 'none';
    document.getElementById('subCardsContainer').style.display = 'none';
    document.getElementById('contentContainer').style.display = 'block';
    document.getElementById('backToCategories').style.display = 'none';
    document.getElementById('backToSubCards').style.display = 'inline-block';
    renderContent(categoryId, subCardId);
}

// Renderizar categorias principais
function renderCategories() {
    const container = document.getElementById('categoriesContainer');
    if (!container) return;
    
    let html = '';
    
    dockerData.categorias.forEach(categoria => {
        const completed = getCompletedCount(categoria.id);
        const total = categoria.subCards.length;
        const percent = Math.floor((completed / total) * 100);
        
        html += `
            <div class="category-card" onclick="showSubCards('${categoria.id}')">
                <div class="category-icon">${categoria.icone}</div>
                <h2>${categoria.nome}</h2>
                <p>${categoria.descricao}</p>
                <div class="category-progress">
                    📊 ${completed}/${total} tópicos (${percent}%)
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Renderizar sub-cards
function renderSubCards(categoryId) {
    const container = document.getElementById('subCardsContainer');
    const categoria = dockerData.categorias.find(c => c.id === categoryId);
    
    if (!categoria) return;
    
    let html = `<h2 class="section-title">🐳 ${categoria.nome} 🐳</h2>`;
    html += `<div class="sub-cards-grid">`;
    
    categoria.subCards.forEach(subCard => {
        const isCompleted = isSubCardCompleted(categoryId, subCard.id);
        const completedClass = isCompleted ? 'completed' : '';
        
        html += `
            <div class="sub-card ${completedClass}" onclick="showContent('${categoryId}', '${subCard.id}')">
                <div class="sub-card-icon">${subCard.icone}</div>
                <h3>${subCard.nome}</h3>
                <p>${subCard.descricao}</p>
            </div>
        `;
    });
    
    html += `</div>`;
    container.innerHTML = html;
}

// Renderizar conteúdo do tópico
function renderContent(categoryId, subCardId) {
    const container = document.getElementById('contentContainer');
    const categoria = dockerData.categorias.find(c => c.id === categoryId);
    const subCard = categoria?.subCards.find(s => s.id === subCardId);
    
    if (!subCard) return;
    
    const isCompleted = isSubCardCompleted(categoryId, subCardId);
    const btnText = isCompleted ? '✅ TÓPICO CONCLUÍDO!' : '🐳 MARCAR COMO CONCLUÍDO';
    
    let html = `
        <div class="content-card">
            <div class="content-title">${subCard.icone} ${subCard.nome}</div>
            <div class="content-explanation">${subCard.conteudo.explicacao}</div>
            
            <div class="code-block">
                <button class="copy-btn" onclick="copyCode(this)">📋 COPIAR</button>
                <pre>${escapeHtml(subCard.conteudo.codigo)}</pre>
            </div>
            
            <div class="tip">
                <strong>🐳 DICA DO HAMILTON:</strong> ${subCard.conteudo.dica}
            </div>
            
            <button id="markCompleteBtn" class="mark-complete-btn ${isCompleted ? 'completed' : ''}" onclick="toggleComplete('${categoryId}', '${subCardId}')">
                ${btnText}
            </button>
        </div>
    `;
    
    container.innerHTML = html;
}

// Função para copiar código
function copyCode(button) {
    const codeBlock = button.nextElementSibling;
    const code = codeBlock.innerText;
    navigator.clipboard.writeText(code).then(() => {
        const originalText = button.innerText;
        button.innerText = '✓ COPIADO!';
        setTimeout(() => {
            button.innerText = originalText;
        }, 2000);
    });
}

// Função para escapar HTML
function escapeHtml(text) {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// Gerenciar progresso
function getCompletedCount(categoryId) {
    const saved = localStorage.getItem(`completed_docker_${categoryId}`);
    if (!saved) return 0;
    return JSON.parse(saved).length;
}

function isSubCardCompleted(categoryId, subCardId) {
    const saved = localStorage.getItem(`completed_docker_${categoryId}`);
    if (!saved) return false;
    const completed = JSON.parse(saved);
    return completed.includes(subCardId);
}

function toggleComplete(categoryId, subCardId) {
    let completed = JSON.parse(localStorage.getItem(`completed_docker_${categoryId}`) || '[]');
    
    if (completed.includes(subCardId)) {
        completed = completed.filter(id => id !== subCardId);
        console.log(`%c📘 ${subCardId} marcado como pendente`, "color: #ff8c00");
    } else {
        completed.push(subCardId);
        console.log(`%c✅ ${subCardId} concluído!`, "color: #00ff00");
    }
    
    localStorage.setItem(`completed_docker_${categoryId}`, JSON.stringify(completed));
    
    if (currentSubCardId) {
        renderContent(categoryId, subCardId);
    }
    
    if (document.getElementById('subCardsContainer').style.display === 'block') {
        renderSubCards(categoryId);
    }
    
    if (document.getElementById('categoriesContainer').style.display === 'grid') {
        renderCategories();
    }
}

// Efeito de digitação no título
function typeWriterEffect() {
    const title = document.querySelector('.tech-header h1');
    if (!title) return;
    
    const originalText = title.innerText;
    title.innerText = '';
    let i = 0;
    
    function type() {
        if (i < originalText.length) {
            title.innerText += originalText.charAt(i);
            i++;
            setTimeout(type, 80);
        }
    }
    
    type();
}

// Configurar botões de navegação
function setupNavigationButtons() {
    const backToCategories = document.getElementById('backToCategories');
    const backToSubCards = document.getElementById('backToSubCards');
    
    if (backToCategories) {
        backToCategories.addEventListener('click', () => {
            showCategories();
        });
    }
    
    if (backToSubCards) {
        backToSubCards.addEventListener('click', () => {
            if (currentCategoryId) {
                showSubCards(currentCategoryId);
            }
        });
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    showCategories();
    setupNavigationButtons();
    typeWriterEffect();
    console.log("%c🐳 Docker F1 carregado! Hamilton's Garage está pronto! 🐳", "color: #2496ed; font-size: 14px; font-weight: bold;");
    console.log("%c⚡ Categorias → Tópicos → Conteúdo. Seu progresso é salvo automaticamente!", "color: #ffd700; font-size: 12px;");
});