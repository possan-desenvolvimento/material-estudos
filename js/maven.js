// ESTRUTURA DE DADOS: Categorias -> SubCards -> Conteúdo
// Maven - Do Básico ao Avançado
const mavenData = {
    categorias: [
        {
            id: "basico",
            nome: "📦 MAVEN BÁSICO",
            icone: "📖",
            descricao: "O que é Maven, instalação, arquitetura e primeiros passos",
            progresso: 0,
            subCards: [
                {
                    id: "o-que-e-maven",
                    nome: "O que é Maven?",
                    icone: "🎯",
                    descricao: "Conceitos, ciclo de vida, POM e dependências",
                    conteudo: {
                        explicacao: "Maven é uma ferramenta de <strong>gerenciamento de projetos</strong> e <strong>automação de build</strong> para Java. Ele gerencia dependências, compilação, testes e empacotamento.",
                        codigo: "# 🎯 O QUE É MAVEN?\n\n# ✅ CARACTERÍSTICAS PRINCIPAIS\n# - Gerenciamento de dependências\n# - Build automatizado\n# - Ciclo de vida padronizado\n# - Estrutura de projeto consistente\n# - Plugins extensíveis\n\n# 📂 ESTRUTURA DO PROJETO MAVEN\n# meu-projeto/\n# ├── pom.xml                    # Coração do projeto\n# ├── src/\n# │   ├── main/\n# │   │   ├── java/              # Código fonte\n# │   │   ├── resources/         # Recursos (config, properties)\n# │   │   └── webapp/            # Aplicações web (opcional)\n# │   └── test/\n# │       ├── java/              # Testes\n# │       └── resources/         # Recursos de teste\n# └── target/                    # Arquivos compilados (gerado)\n\n# 🔄 CICLO DE VIDA (LIFECYCLE)\n# clean → validate → compile → test → package → verify → install → deploy\n\n# 📋 FASES MAIS IMPORTANTES\n# compile   - Compila o código\n# test      - Executa os testes\n# package   - Empacota (JAR, WAR)\n# install   - Instala no repositório local\n# deploy    - Envia para repositório remoto\n\n# ⚡ COMANDOS BÁSICOS\nmvn --version                # Versão do Maven\nmvn clean                    # Limpa o diretório target\nmvn compile                  # Compila o código\nmvn test                     # Executa testes\nmvn package                  # Empacota o projeto\nmvn install                  # Instala no repositório local\nmvn clean install            # Limpa e instala",
                        dica: "💡 Maven tem um ciclo de vida padronizado. Aprenda compile, test, package, install - são os que você vai usar TODO DIA!"
                    }
                },
                {
                    id: "instalacao-maven",
                    nome: "Instalação e Configuração",
                    icone: "⚙️",
                    descricao: "Instalar Maven, configurar PATH e settings.xml",
                    conteudo: {
                        explicacao: "Instalação do Maven e configuração do ambiente para começar a usar.",
                        codigo: "# ⚙️ INSTALAÇÃO DO MAVEN\n\n# 🐧 LINUX (Ubuntu/Debian)\nsudo apt update\nsudo apt install maven\n\n# 🍎 MAC (via Homebrew)\nbrew install maven\n\n# 🪟 WINDOWS\n# 1. Baixe: https://maven.apache.org/download.cgi\n# 2. Extraia: C:\\apache-maven\n# 3. Configure PATH:\n#    - MAVEN_HOME = C:\\apache-maven\n#    - Adicione %MAVEN_HOME%\\bin ao PATH\n\n# 🔧 VERIFICAR INSTALAÇÃO\nmvn --version\n\n# 📁 REPOSITÓRIO LOCAL\n# ~/.m2/repository/ (Linux/Mac)\n# C:\\Users\\Usuario\\.m2\\repository (Windows)\n\n# 📝 SETTINGS.XML (~/.m2/settings.xml)\n# Configuração global do Maven",
                        dica: "🔥 Após instalar, configure o PATH para poder usar o Maven de qualquer lugar. O repositório local fica em ~/.m2/"
                    }
                },
                {
                    id: "pom-xml",
                    nome: "POM.XML (TUDO)",
                    icone: "📝",
                    descricao: "groupId, artifactId, version, packaging, properties, dependencies",
                    conteudo: {
                        explicacao: "POM (Project Object Model) é o arquivo de configuração do Maven. Define tudo sobre o projeto.",
                        codigo: "# 📝 POM.XML - GUIA COMPLETO\n\n# 📂 ESTRUTURA BÁSICA\n<project>\n    <modelVersion>4.0.0</modelVersion>\n\n    <!-- 📌 IDENTIFICAÇÃO DO PROJETO -->\n    <groupId>com.exemplo</groupId>\n    <artifactId>meu-projeto</artifactId>\n    <version>1.0.0</version>\n    <packaging>jar</packaging>\n\n    <!-- 📌 PROPRIEDADES -->\n    <properties>\n        <java.version>17</java.version>\n        <maven.compiler.source>17</maven.compiler.source>\n        <maven.compiler.target>17</maven.compiler.target>\n    </properties>\n\n    <!-- 📦 DEPENDÊNCIAS -->\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n            <version>3.1.0</version>\n        </dependency>\n    </dependencies>\n\n    <!-- 🏗️ BUILD -->\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-compiler-plugin</artifactId>\n                <version>3.11.0</version>\n            </plugin>\n        </plugins>\n    </build>\n</project>",
                        dica: "🔥 POM é o CORAÇÃO do Maven! groupId + artifactId + version = coordenada única. Use properties para centralizar versões."
                    }
                },
                {
                    id: "criar-projeto",
                    nome: "Criando um Projeto Maven",
                    icone: "🚀",
                    descricao: "mvn archetype:generate, estrutura e primeiros passos",
                    conteudo: {
                        explicacao: "Crie projetos Maven rapidamente usando archetypes (templates).",
                        codigo: "# 🚀 CRIAR PROJETO MAVEN\n\n# 🎯 CRIAR PROJETO BÁSICO (JAR)\nmvn archetype:generate \\\n    -DgroupId=com.exemplo \\\n    -DartifactId=meu-projeto \\\n    -DarchetypeArtifactId=maven-archetype-quickstart \\\n    -DinteractiveMode=false\n\n# 🌐 CRIAR PROJETO WEB (WAR)\nmvn archetype:generate \\\n    -DgroupId=com.exemplo \\\n    -DartifactId=meu-webapp \\\n    -DarchetypeArtifactId=maven-archetype-webapp \\\n    -DinteractiveMode=false\n\n# 🍃 SPRING BOOT (via start.spring.io)\ncurl https://start.spring.io/starter.zip \\\n    -d groupId=com.exemplo \\\n    -d artifactId=meu-spring-app \\\n    -d dependencies=web,data-jpa \\\n    -o meu-spring-app.zip\n\n# 🚀 COMPILAR E EXECUTAR\ncd meu-projeto\nmvn compile\nmvn test\nmvn package\njava -cp target/meu-projeto-1.0-SNAPSHOT.jar com.exemplo.App",
                        dica: "🔥 Sempre use archetypes para criar projetos padronizados. maven-archetype-quickstart é o mais comum para projetos Java simples."
                    }
                }
            ]
        },
        {
            id: "dependencias",
            nome: "📦 DEPENDÊNCIAS",
            icone: "🔗",
            descricao: "Gerenciar dependências, escopos e versionamento",
            progresso: 0,
            subCards: [
                {
                    id: "dependencias-basico",
                    nome: "Dependências (TUDO)",
                    icone: "📦",
                    descricao: "Adicionar, remover, versionar e escopos de dependências",
                    conteudo: {
                        explicacao: "Dependências são bibliotecas externas que seu projeto precisa. O Maven baixa elas automaticamente.",
                        codigo: "# 📦 GERENCIANDO DEPENDÊNCIAS\n\n# 📌 ADICIONAR DEPENDÊNCIA\n# 1. Encontre a dependência (Maven Central: https://mvnrepository.com)\n# 2. Adicione no <dependencies> do pom.xml\n\n<dependencies>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-web</artifactId>\n        <version>3.1.0</version>\n    </dependency>\n    \n    <dependency>\n        <groupId>org.postgresql</groupId>\n        <artifactId>postgresql</artifactId>\n        <version>42.6.0</version>\n    </dependency>\n    \n    <dependency>\n        <groupId>org.projectlombok</groupId>\n        <artifactId>lombok</artifactId>\n        <version>1.18.28</version>\n        <scope>provided</scope>\n    </dependency>\n</dependencies>\n\n# 🎯 ESCOPOS DE DEPENDÊNCIA (scope)\n# compile   - Padrão (em todo lugar)\n# test      - Só durante testes\n# runtime   - Só em execução (não compila)\n# provided  - Fornecido pelo container\n\n# 🔧 COMANDOS\nmvn dependency:tree\nmvn dependency:resolve\nmvn clean install",
                        dica: "💡 Use 'mvn dependency:tree' para ver todas as dependências do seu projeto. Ajuda a identificar conflitos de versão!"
                    }
                },
                {
                    id: "versionamento",
                    nome: "Versionamento de Dependências",
                    icone: "📋",
                    descricao: "SNAPSHOT, versions, BOM e dependencyManagement",
                    conteudo: {
                        explicacao: "Gerenciamento de versões de dependências de forma centralizada e eficiente.",
                        codigo: "# 📋 VERSIONAMENTO DE DEPENDÊNCIAS\n\n# 📌 PROPERTIES (centralizar versões)\n<properties>\n    <java.version>17</java.version>\n    <spring-boot.version>3.1.0</spring-boot.version>\n    <lombok.version>1.18.28</lombok.version>\n</properties>\n\n<dependencies>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-web</artifactId>\n        <version>${spring-boot.version}</version>\n    </dependency>\n</dependencies>\n\n# 📌 SNAPSHOT (versões em desenvolvimento)\n# 1.0.0-SNAPSHOT = versão em desenvolvimento\n\n# 📌 BOM (Spring Boot Starter Parent)\n<parent>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-parent</artifactId>\n    <version>3.1.0</version>\n</parent>\n\n# 🎯 VERSIONS MAVEN PLUGIN\nmvn versions:display-dependency-updates\nmvn versions:set -DnewVersion=2.0.0",
                        dica: "🔥 Use properties para centralizar versões. Spring Boot Starter Parent já gerencia as versões das dependências Spring!"
                    }
                }
            ]
        },
        {
            id: "build",
            nome: "📦 BUILD E PLUGINS",
            icone: "🏗️",
            descricao: "Compilar, testar, empacotar e plugins",
            progresso: 0,
            subCards: [
                {
                    id: "build-lifecycle",
                    nome: "Ciclo de Build (TUDO)",
                    icone: "🔄",
                    descricao: "Compile, test, package, install, deploy",
                    conteudo: {
                        explicacao: "Ciclo de vida do Maven: sequência de fases que transformam seu código em um artefato.",
                        codigo: "# 🔄 CICLO DE VIDA DO MAVEN\n\n# 📌 FASES PRINCIPAIS (em ordem)\n# validate     → Valida se o projeto está correto\n# compile      → Compila o código fonte\n# test         → Executa os testes\n# package      → Empacota (JAR, WAR, etc)\n# verify       → Verifica o pacote\n# install      → Instala no repositório local\n# deploy       → Envia para repositório remoto\n\n# 🚀 COMANDOS MAIS USADOS\nmvn clean                # Limpa target\nmvn compile              # Compila o código\nmvn test                 # Executa testes\nmvn package              # Gera JAR/WAR\nmvn install              # Instala no repositório local\nmvn clean install        # MAIS USADO!\n\n# 🎯 SKIP TESTES\nmvn clean install -DskipTests\nmvn clean install -Dmaven.test.skip=true\n\n# 🔧 PROFILES\nmvn clean install -Pdev\nmvn clean install -Pprod",
                        dica: "🔥 'mvn clean install' é o comando que você vai usar 90% das vezes! Limpa, compila, testa e instala no repositório local."
                    }
                },
                {
                    id: "plugins",
                    nome: "Plugins Essenciais",
                    icone: "🔌",
                    descricao: "Compiler, Surefire, Jar, War, Spring Boot",
                    conteudo: {
                        explicacao: "Plugins estendem as funcionalidades do Maven. Cada fase do ciclo de vida é executada por plugins.",
                        codigo: "# 🔌 PLUGINS MAIS USADOS\n\n# 📦 COMPILER PLUGIN\n<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-compiler-plugin</artifactId>\n    <version>3.11.0</version>\n    <configuration>\n        <source>17</source>\n        <target>17</target>\n    </configuration>\n</plugin>\n\n# 🧪 SUREFIRE PLUGIN (testes)\n<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-surefire-plugin</artifactId>\n    <version>3.1.2</version>\n</plugin>\n\n# 📦 JAR PLUGIN\n<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-jar-plugin</artifactId>\n    <version>3.3.0</version>\n    <configuration>\n        <archive>\n            <manifest>\n                <mainClass>com.exemplo.App</mainClass>\n            </manifest>\n        </archive>\n    </configuration>\n</plugin>\n\n# 🍃 SPRING BOOT PLUGIN\n<plugin>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-maven-plugin</artifactId>\n    <version>3.1.0</version>\n</plugin>\n\n# 📊 COMMANDS\nmvn spring-boot:run\nmvn spring-boot:build-image",
                        dica: "🔥 Os plugins mais importantes: compiler (Java), surefire (testes), jar/war (empacotamento), spring-boot (Spring Boot)."
                    }
                },
                {
                    id: "multi-module",
                    nome: "Projetos Multi-Módulo",
                    icone: "📂",
                    descricao: "Módulos, parent POM, dependências entre módulos",
                    conteudo: {
                        explicacao: "Projetos multi-módulo organizam um grande projeto em módulos menores e reutilizáveis.",
                        codigo: "# 📂 PROJETO MULTI-MÓDULO\n\n# 📁 ESTRUTURA\n# meu-projeto/\n# ├── pom.xml (parent)\n# ├── modulo-core/\n# │   └── pom.xml\n# ├── modulo-api/\n# │   └── pom.xml\n# └── modulo-web/\n#     └── pom.xml\n\n# 📝 PARENT POM (raiz)\n<project>\n    <groupId>com.exemplo</groupId>\n    <artifactId>meu-projeto</artifactId>\n    <version>1.0.0</version>\n    <packaging>pom</packaging>\n    \n    <modules>\n        <module>modulo-core</module>\n        <module>modulo-api</module>\n        <module>modulo-web</module>\n    </modules>\n</project>\n\n# 📝 MODULO-CORE/pom.xml\n<project>\n    <parent>\n        <groupId>com.exemplo</groupId>\n        <artifactId>meu-projeto</artifactId>\n        <version>1.0.0</version>\n    </parent>\n    \n    <artifactId>modulo-core</artifactId>\n</project>\n\n# 🚀 COMANDOS\nmvn clean install\nmvn clean install -pl modulo-core\nmvn clean install -am",
                        dica: "🔥 Multi-módulo é ESSENCIAL para projetos grandes! Permite reutilização de código e builds mais rápidos."
                    }
                }
            ]
        },
        {
            id: "avancado",
            nome: "📦 MAVEN AVANÇADO",
            icone: "⚡",
            descricao: "Profiles, repositórios, troubleshooting, boas práticas",
            progresso: 0,
            subCards: [
                {
                    id: "profiles",
                    nome: "Profiles (TUDO)",
                    icone: "🎯",
                    descricao: "Ambientes, configurações específicas e ativação",
                    conteudo: {
                        explicacao: "Profiles permitem configurar diferentes ambientes (dev, test, prod) com configurações específicas.",
                        codigo: "# 🎯 PROFILES - GUIA COMPLETO\n\n# 📌 DEFINIR PROFILES\n<profiles>\n    <profile>\n        <id>dev</id>\n        <properties>\n            <db.url>jdbc:postgresql://localhost:5432/dev</db.url>\n            <db.user>dev</db.user>\n        </properties>\n        <activation>\n            <activeByDefault>true</activeByDefault>\n        </activation>\n    </profile>\n    \n    <profile>\n        <id>prod</id>\n        <properties>\n            <db.url>jdbc:postgresql://prod-server:5432/prod</db.url>\n            <db.user>prod</db.user>\n        </properties>\n    </profile>\n</profiles>\n\n# 🔧 ATIVAR PROFILES\nmvn clean install -Pdev\nmvn clean install -Pprod\n\n# 📝 USAR PROPRIEDADES\n# application.properties\nspring.datasource.url=${db.url}\n\n# 📌 PROFILES NO SETTINGS.XML\n<settings>\n    <activeProfiles>\n        <activeProfile>dev</activeProfile>\n    </activeProfiles>\n</settings>",
                        dica: "🔥 Profiles são ESSENCIAIS para separar configurações de ambiente. Use -P para ativar o profile correto."
                    }
                },
                {
                    id: "repositorios",
                    nome: "Repositórios (TUDO)",
                    icone: "🌐",
                    descricao: "Central, remoto, local, Nexus, Artifactory",
                    conteudo: {
                        explicacao: "Repositórios armazenam artefatos (JARs) do Maven. O Maven baixa dependências de repositórios configurados.",
                        codigo: "# 🌐 REPOSITÓRIOS MAVEN\n\n# 📦 TIPOS DE REPOSITÓRIOS\n# 1. Local     - ~/.m2/repository (cache)\n# 2. Central   - Maven Central (padrão)\n# 3. Remote    - Repositórios externos\n\n# 📌 CONFIGURAR REPOSITÓRIOS\n<repositories>\n    <repository>\n        <id>spring-milestones</id>\n        <url>https://repo.spring.io/milestone</url>\n    </repository>\n    \n    <repository>\n        <id>nexus</id>\n        <url>https://nexus.empresa.com/repository/maven-public</url>\n    </repository>\n</repositories>\n\n# 📌 CONFIGURAR SETTINGS.XML\n<settings>\n    <servers>\n        <server>\n            <id>nexus</id>\n            <username>${env.NEXUS_USER}</username>\n            <password>${env.NEXUS_PASS}</password>\n        </server>\n    </servers>\n</settings>\n\n# 🚀 COMANDOS\nmvn clean install -U\nmvn dependency:purge-local-repository",
                        dica: "💡 Use Nexus ou Artifactory para repositórios corporativos. Centralize dependências internas e acelere builds."
                    }
                },
                {
                    id: "troubleshooting-maven",
                    nome: "Resolução de Problemas (TUDO)",
                    icone: "🔧",
                    descricao: "Erros comuns e soluções no Maven",
                    conteudo: {
                        explicacao: "Problemas comuns no Maven e como resolvê-los rapidamente.",
                        codigo: "# 🔧 PROBLEMAS COMUNS E SOLUÇÕES\n\n# 1️⃣ Dependência não encontrada\nmvn clean install -U\nrm -rf ~/.m2/repository/groupId/artifactId\n\n# 2️⃣ Falha na compilação\nmvn clean compile -X\nmvn --version\n\n# 3️⃣ Testes falhando\nmvn test -Dtest=NomeTeste\nmvn test -Dmaven.test.failure.ignore=true\n\n# 4️⃣ Memória insuficiente\nexport MAVEN_OPTS=\"-Xmx1024m\"\n\n# 5️⃣ Conflito de versões\nmvn dependency:tree\n<exclusions>\n    <exclusion>\n        <groupId>conflito</groupId>\n        <artifactId>lib</artifactId>\n    </exclusion>\n</exclusions>\n\n# 6️⃣ Build lento\nmvn clean install -T 4\nmvn clean install -o\n\n# 🔥 COMANDOS DE EMERGÊNCIA\nmvn clean\nmvn dependency:purge-local-repository\nmvn help:effective-pom\nmvn dependency:tree -Dverbose",
                        dica: "💡 Maven logs são detalhados! Use -X para debug. dependency:tree é seu melhor amigo para resolver conflitos de versão."
                    }
                }
            ]
        },
        {
            id: "pratico",
            nome: "📦 MAVEN PRÁTICO",
            icone: "🚀",
            descricao: "Projetos reais, Spring Boot, Docker, CI/CD",
            progresso: 0,
            subCards: [
                {
                    id: "spring-boot-maven",
                    nome: "Spring Boot com Maven",
                    icone: "🍃",
                    descricao: "Configuração, plugins, perfis e deploy",
                    conteudo: {
                        explicacao: "Maven + Spring Boot é a combinação MAIS USADA no ecossistema Java.",
                        codigo: "# 🍃 SPRING BOOT + MAVEN\n\n# 📦 POM.XML COMPLETO\n<project>\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>3.1.0</version>\n    </parent>\n    \n    <groupId>com.exemplo</groupId>\n    <artifactId>meu-spring-app</artifactId>\n    <version>1.0.0</version>\n    \n    <properties>\n        <java.version>17</java.version>\n    </properties>\n    \n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.postgresql</groupId>\n            <artifactId>postgresql</artifactId>\n            <scope>runtime</scope>\n        </dependency>\n    </dependencies>\n</project>\n\n# 🚀 COMANDOS\nmvn spring-boot:run\nmvn clean package\njava -jar target/meu-spring-app-1.0.0.jar\n\n# 🐳 GERAR IMAGEM DOCKER\nmvn spring-boot:build-image\n\n# 📊 PROFILES\nmvn spring-boot:run -Dspring-boot.run.profiles=dev",
                        dica: "🔥 spring-boot:run é INCRÍVEL para desenvolvimento! spring-boot:build-image cria imagens Docker prontas!"
                    }
                },
                {
                    id: "docker-maven",
                    nome: "Docker com Maven",
                    icone: "🐳",
                    descricao: "Dockerfile, build, push, deploy",
                    conteudo: {
                        explicacao: "Integração do Maven com Docker para criar imagens e automatizar deploys.",
                        codigo: "# 🐳 DOCKER + MAVEN\n\n# 📦 SPRING BOOT PLUGIN\n<plugin>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-maven-plugin</artifactId>\n    <version>3.1.0</version>\n    <configuration>\n        <image>\n            <name>${project.artifactId}:${project.version}</name>\n        </image>\n    </configuration>\n</plugin>\n\n# 🚀 COMANDOS\nmvn spring-boot:build-image\ndocker run -p 8080:8080 meu-spring-app:1.0.0\n\n# 📝 DOCKERFILE MANUAL\nFROM openjdk:17-alpine\nCOPY target/*.jar app.jar\nEXPOSE 8080\nENTRYPOINT [\"java\", \"-jar\", \"app.jar\"]\n\n# 🏗️ MULTI-STAGE DOCKERFILE\nFROM maven:3.8-openjdk-17 AS builder\nWORKDIR /app\nCOPY pom.xml .\nRUN mvn dependency:go-offline\nCOPY src ./src\nRUN mvn package -DskipTests\n\nFROM openjdk:17-alpine\nCOPY --from=builder /app/target/*.jar app.jar\nEXPOSE 8080\nENTRYPOINT [\"java\", \"-jar\", \"app.jar\"]",
                        dica: "🔥 spring-boot:build-image é a forma MAIS FÁCIL de gerar imagens Docker! Multi-stage reduz o tamanho da imagem."
                    }
                },
                {
                    id: "ci-cd",
                    nome: "CI/CD com Maven",
                    icone: "🔄",
                    descricao: "GitHub Actions, Jenkins, GitLab CI",
                    conteudo: {
                        explicacao: "Integração contínua com Maven para automatizar builds, testes e deploys.",
                        codigo: "# 🔄 GITHUB ACTIONS + MAVEN\n\n# 📝 .github/workflows/build.yml\nname: Build and Test\non:\n  push:\n    branches: [ main ]\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v3\n    - name: Set up JDK 17\n      uses: actions/setup-java@v3\n      with:\n        java-version: '17'\n        distribution: 'temurin'\n    - name: Build with Maven\n      run: mvn clean install\n    - name: Run tests\n      run: mvn test\n\n# 📝 GITLAB CI (.gitlab-ci.yml)\nimage: maven:3.8-openjdk-17\nstages:\n  - build\n  - test\n\nbuild:\n  stage: build\n  script:\n    - mvn clean compile\n\ntest:\n  stage: test\n  script:\n    - mvn test\n\n# 📝 JENKINS PIPELINE\npipeline {\n    agent any\n    stages {\n        stage('Build') {\n            steps {\n                sh 'mvn clean compile'\n            }\n        }\n        stage('Test') {\n            steps {\n                sh 'mvn test'\n            }\n        }\n    }\n}",
                        dica: "🔥 CI/CD automatiza tudo! GitHub Actions é gratuito e integrado com GitHub. Jenkins é o padrão em empresas."
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
    
    mavenData.categorias.forEach(function(categoria) {
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
    const categoria = mavenData.categorias.find(function(c) { return c.id === categoryId })
    
    if (!categoria) return
    
    let html = '<h2 class="section-title">📦 ' + categoria.nome + ' 📦</h2>'
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
    const categoria = mavenData.categorias.find(function(c) { return c.id === categoryId })
    const subCard = categoria ? categoria.subCards.find(function(s) { return s.id === subCardId }) : null
    
    if (!subCard) return
    
    const isCompleted = isSubCardCompleted(categoryId, subCardId)
    const btnText = isCompleted ? '✅ TÓPICO CONCLUÍDO!' : '📦 MARCAR COMO CONCLUÍDO'
    
    let html = `
        <div class="content-card">
            <div class="content-title">${subCard.icone} ${subCard.nome}</div>
            <div class="content-explanation">${subCard.conteudo.explicacao}</div>
            
            <div class="code-block">
                <button class="copy-btn" onclick="copyCode(this)">📋 COPIAR</button>
                <pre>${escapeHtml(subCard.conteudo.codigo)}</pre>
            </div>
            
            <div class="tip">
                <strong>📦 DICA DO HAMILTON:</strong> ${subCard.conteudo.dica}
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
    const saved = localStorage.getItem('completed_maven_' + categoryId)
    if (!saved) return 0
    return JSON.parse(saved).length
}

function isSubCardCompleted(categoryId, subCardId) {
    const saved = localStorage.getItem('completed_maven_' + categoryId)
    if (!saved) return false
    const completed = JSON.parse(saved)
    return completed.includes(subCardId)
}

function toggleComplete(categoryId, subCardId) {
    let completed = JSON.parse(localStorage.getItem('completed_maven_' + categoryId) || '[]')
    
    if (completed.includes(subCardId)) {
        completed = completed.filter(function(id) { return id !== subCardId })
        console.log('%c📘 ' + subCardId + ' marcado como pendente', 'color: #ff8c00')
    } else {
        completed.push(subCardId)
        console.log('%c✅ ' + subCardId + ' concluído!', 'color: #00ff00')
    }
    
    localStorage.setItem('completed_maven_' + categoryId, JSON.stringify(completed))
    
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
    console.log('%c📦 Maven F1 carregado! Hamilton\'s Garage está pronto! 📦', 'color: #c1462a; font-size: 14px; font-weight: bold;')
    console.log('%c⚡ Categorias → Tópicos → Conteúdo. Seu progresso é salvo automaticamente!', 'color: #ffd700; font-size: 12px;')
})