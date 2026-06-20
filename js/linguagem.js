// 📖 DICIONÁRIO COMPLETO DE DESENVOLVEDORES
// Todos os termos, gírias e expressões que um dev precisa saber

const dicionarioData = [
    // ==================== GIT E VERSIONAMENTO ====================
    {
        termo: "Code Review",
        definicao: "Processo de revisar o código de um colega antes de mesclá-lo na branch principal. Essencial para qualidade e aprendizado.",
        categoria: "Git",
        exemplo: "\"Vamos fazer code review do PR antes de mergear.\"",
        detalhe: "Code review é sobre ENSINAR e APRENDER, não sobre criticar. Seja construtivo."
    },
    {
        termo: "Cherry Pick",
        definicao: "Aplicar um commit específico de uma branch em outra. Útil para hotfixes e correções urgentes.",
        categoria: "Git",
        exemplo: "\"Faz um cherry-pick do commit que corrigiu o bug na main.\"",
        detalhe: "Comando: git cherry-pick COMMIT_ID"
    },
    {
        termo: "Merge Conflict",
        definicao: "Conflito ao mesclar branches que alteraram as mesmas linhas de um arquivo. Normal e precisa ser resolvido manualmente.",
        categoria: "Git",
        exemplo: "\"Deu merge conflict no arquivo de configuração, vou resolver.\"",
        detalhe: "Git mostra: <<<<<<< HEAD, =======, >>>>>>> branch"
    },
    {
        termo: "Hotfix",
        definicao: "Correção crítica aplicada diretamente em produção para resolver um bug urgente.",
        categoria: "Git",
        exemplo: "\"Temos um hotfix urgente para fazer hoje.\"",
        detalhe: "Hotfix é para EMERGÊNCIAS. Não pule os testes mínimos."
    },
    {
        termo: "Pull Request (PR)",
        definicao: "Solicitação para mesclar alterações de uma branch em outra. Onde o code review acontece.",
        categoria: "Git",
        exemplo: "\"Abri um PR, podem revisar?\"",
        detalhe: "PRs pequenos e descritivos são mais fáceis de revisar."
    },
    {
        termo: "WIP (Work In Progress)",
        definicao: "Indica que o PR ainda não está pronto para ser revisado ou mesclado.",
        categoria: "Git",
        exemplo: "\"Subi o PR como WIP para mostrar o progresso.\"",
        detalhe: "Remove o WIP quando o código estiver completo."
    },
    {
        termo: "LGTM (Looks Good To Me)",
        definicao: "\"Parece bom para mim\" - aprovado no code review.",
        categoria: "Git",
        exemplo: "\"LGTM, pode mergear!\"",
        detalhe: "A sigla mais usada em code reviews."
    },
    {
        termo: "Rollback",
        definicao: "Reverter mudanças, voltar para uma versão anterior. O plano B de todo deploy.",
        categoria: "Git",
        exemplo: "\"Vamos fazer rollback agora, o deploy deu problema.\"",
        detalhe: "Todo deploy deve ter um plano de rollback."
    },
    {
        termo: "Rebase",
        definicao: "Reescrever o histórico de commits para manter uma linha linear. Alternativa ao merge.",
        categoria: "Git",
        exemplo: "\"Vamos fazer rebase da feature com a main.\"",
        detalhe: "Rebase deixa o histórico mais limpo, mas reescreve commits."
    },
    {
        termo: "Squash",
        definicao: "Juntar múltiplos commits em um só antes de mergear. Mantém o histórico limpo.",
        categoria: "Git",
        exemplo: "\"Vamos squash os commits antes de mergear.\"",
        detalhe: "Comando: git rebase -i HEAD~N (squash)"
    },
    {
        termo: "Stash",
        definicao: "Guardar mudanças temporariamente sem fazer commit. Útil para trocar de branch rapidamente.",
        categoria: "Git",
        exemplo: "\"Vou dar stash nas minhas mudanças para trocar de branch.\"",
        detalhe: "Comando: git stash, git stash pop"
    },
    {
        termo: "Bisect",
        definicao: "Encontrar o commit que introduziu um bug usando busca binária no histórico.",
        categoria: "Git",
        exemplo: "\"Vamos usar bisect para achar onde o bug foi introduzido.\"",
        detalhe: "Comando: git bisect start, git bisect bad, git bisect good"
    },

    // ==================== METODOLOGIAS ÁGEIS ====================
    {
        termo: "Sprint",
        definicao: "Período de tempo fixo (geralmente 2 semanas) onde o time trabalha em um conjunto de tarefas.",
        categoria: "Ágil",
        exemplo: "\"Essa sprint estamos focados em entregar a feature de login.\"",
        detalhe: "Sprint Planning, Daily, Review e Retrospectiva."
    },
    {
        termo: "Standup / Daily",
        definicao: "Reunião diária de 15 minutos sobre o que fez, vai fazer e impedimentos.",
        categoria: "Ágil",
        exemplo: "\"Bora pra daily!\"",
        detalhe: "3 perguntas: o que fiz ontem? o que vou fazer hoje? tenho impedimentos?"
    },
    {
        termo: "Retrospectiva",
        definicao: "Reunião no final da sprint para avaliar o que foi bem, o que melhorar e o que ajustar.",
        categoria: "Ágil",
        exemplo: "\"Na retrospectiva vamos discutir como melhorar o code review.\"",
        detalhe: "Foco em melhoria contínua do time."
    },
    {
        termo: "Planning",
        definicao: "Reunião no início da sprint para planejar o que será feito e estimar as tarefas.",
        categoria: "Ágil",
        exemplo: "\"Hoje tem planning para a próxima sprint.\"",
        detalhe: "Time define o que cabe na sprint e estima esforço."
    },
    {
        termo: "Backlog",
        definicao: "Lista de tarefas, features e bugs a serem feitos, priorizadas pelo Product Owner.",
        categoria: "Ágil",
        exemplo: "\"Essa tarefa está no backlog, vamos priorizar.\"",
        detalhe: "Backlog é refinado constantemente."
    },
    {
        termo: "MVP (Minimum Viable Product)",
        definicao: "Versão mínima de um produto que entrega valor ao usuário. O mínimo para lançar.",
        categoria: "Ágil",
        exemplo: "\"Vamos lançar o MVP na próxima sprint.\"",
        detalhe: "Foco no essencial para validar a ideia."
    },
    {
        termo: "PO (Product Owner)",
        definicao: "Responsável por definir e priorizar o backlog, representando os interesses do cliente.",
        categoria: "Ágil",
        exemplo: "\"O PO definiu a prioridade dessa sprint.\"",
        detalhe: "É o guardião do backlog."
    },
    {
        termo: "SM (Scrum Master)",
        definicao: "Responsável por facilitar o processo ágil, remover impedimentos e ajudar o time.",
        categoria: "Ágil",
        exemplo: "\"O Scrum Master ajudou a resolver o impedimento.\"",
        detalhe: "Servant leader do time."
    },

    // ==================== ARQUITETURA E DESIGN ====================
    {
        termo: "Onion / Camadas",
        definicao: "Arquitetura em camadas concêntricas, onde a camada mais interna é o domínio (regras de negócio).",
        categoria: "Arquitetura",
        exemplo: "\"A arquitetura aqui é em camadas, domínio no centro.\"",
        detalhe: "Domain → Application → Infrastructure → Interface"
    },
    {
        termo: "Clean Architecture",
        definicao: "Arquitetura que separa o domínio das camadas externas, mantendo as regras de negócio isoladas.",
        categoria: "Arquitetura",
        exemplo: "\"Vamos usar Clean Architecture para manter o domínio independente.\"",
        detalhe: "Entities → Use Cases → Interface Adapters → Frameworks"
    },
    {
        termo: "Hexagonal Architecture",
        definicao: "Arquitetura que isola o domínio com portas (interfaces) e adaptadores para integrações externas.",
        categoria: "Arquitetura",
        exemplo: "\"A arquitetura hexagonal facilita testes e substituições.\"",
        detalhe: "Ports & Adapters"
    },
    {
        termo: "Microservices",
        definicao: "Arquitetura onde a aplicação é dividida em serviços pequenos, independentes e autônomos.",
        categoria: "Arquitetura",
        exemplo: "\"Vamos migrar para microservices para escalar melhor.\"",
        detalhe: "Cada serviço tem sua própria base de dados e ciclo de vida."
    },
    {
        termo: "Monólito",
        definicao: "Aplicação única onde todo o código está em um único deploy. Oposto de microservices.",
        categoria: "Arquitetura",
        exemplo: "\"O sistema atual é um monólito, vamos quebrar.\"",
        detalhe: "Mais simples de começar, mas difícil de escalar."
    },
    {
        termo: "Domain-Driven Design (DDD)",
        definicao: "Abordagem de design focada no domínio e nas regras de negócio, com linguagem ubíqua.",
        categoria: "Arquitetura",
        exemplo: "\"Estamos usando DDD para modelar o domínio.\"",
        detalhe: "Bounded Context, Entities, Value Objects, Aggregates"
    },
    {
        termo: "CQRS (Command Query Responsibility Segregation)",
        definicao: "Separação entre comandos (escrita) e queries (leitura) em diferentes modelos.",
        categoria: "Arquitetura",
        exemplo: "\"Vamos implementar CQRS para otimizar leituras.\"",
        detalhe: "Command (write) e Query (read) separados."
    },
    {
        termo: "Event Sourcing",
        definicao: "Armazenar o estado como uma sequência de eventos, permitindo reconstruir o estado a qualquer momento.",
        categoria: "Arquitetura",
        exemplo: "\"Estamos usando Event Sourcing para ter auditoria completa.\"",
        detalhe: "Event Store como fonte de verdade."
    },
    {
        termo: "Service Mesh",
        definicao: "Camada de infraestrutura para gerenciar comunicação entre microsserviços (ex: Istio).",
        categoria: "Arquitetura",
        exemplo: "\"Vamos implementar Service Mesh para observabilidade.\"",
        detalhe: "Sidecar proxy, mTLS, observabilidade."
    },

    // ==================== PADRÕES DE PROJETO ====================
    {
        termo: "Singleton",
        definicao: "Padrão que garante que uma classe tenha apenas uma instância e fornece um ponto global de acesso.",
        categoria: "Design Patterns",
        exemplo: "\"Vamos usar Singleton para o gerenciador de conexões.\"",
        detalhe: "Útil para recursos compartilhados (ex: pool de conexões)."
    },
    {
        termo: "Factory",
        definicao: "Padrão que encapsula a criação de objetos, delegando a responsabilidade para uma fábrica.",
        categoria: "Design Patterns",
        exemplo: "\"Vamos usar Factory para criar diferentes tipos de notificações.\"",
        detalhe: "Factory Method e Abstract Factory."
    },
    {
        termo: "Observer",
        definicao: "Padrão onde um objeto (sujeito) notifica outros (observadores) sobre mudanças de estado.",
        categoria: "Design Patterns",
        exemplo: "\"Vamos usar Observer para o sistema de eventos.\"",
        detalhe: "Útil para sistemas de notificação e eventos."
    },
    {
        termo: "Strategy",
        definicao: "Padrão que permite definir uma família de algoritmos, encapsulá-los e torná-los intercambiáveis.",
        categoria: "Design Patterns",
        exemplo: "\"Vamos usar Strategy para diferentes estratégias de pagamento.\"",
        detalhe: "Comportamento pode ser alterado em tempo de execução."
    },
    {
        termo: "Decorator",
        definicao: "Padrão que permite adicionar responsabilidades a um objeto dinamicamente.",
        categoria: "Design Patterns",
        exemplo: "\"Vamos usar Decorator para adicionar logging ao serviço.\"",
        detalhe: "Wrapper que adiciona funcionalidades."
    },
    {
        termo: "DTO (Data Transfer Object)",
        definicao: "Objeto que transporta dados entre camadas, sem lógica de negócio.",
        categoria: "Design Patterns",
        exemplo: "\"Vamos usar DTO para a resposta da API.\"",
        detalhe: "NUNCA exponha entidades diretamente."
    },

    // ==================== DESENVOLVIMENTO E PRÁTICAS ====================
    {
        termo: "Refatoração",
        definicao: "Reescrever código sem mudar comportamento externo, melhorando legibilidade e manutenibilidade.",
        categoria: "Dev",
        exemplo: "\"Vamos refatorar essa parte antes de adicionar nova feature.\"",
        detalhe: "Refatoração é INVESTIMENTO, não custo."
    },
    {
        termo: "Tech Debt (Dívida Técnica)",
        definicao: "Custo futuro de fazer código rápido e sujo hoje. Acumula juros com o tempo.",
        categoria: "Dev",
        exemplo: "\"Essa parte acumulou muita dívida técnica.\"",
        detalhe: "Pague a dívida continuamente, não deixe acumular."
    },
    {
        termo: "Pair Programming",
        definicao: "Duas pessoas programando juntas no mesmo computador. Uma escreve (driver), outra revisa (navigator).",
        categoria: "Dev",
        exemplo: "\"Bora fazer um pair para resolver esse bug?\"",
        detalhe: "Troque papéis a cada 20-30 minutos."
    },
    {
        termo: "Mob Programming",
        definicao: "Time todo programando junto no mesmo computador. Todos contribuem.",
        categoria: "Dev",
        exemplo: "\"Vamos fazer mob programming para essa feature complexa.\"",
        detalhe: "Muito bom para alinhar o time."
    },
    {
        termo: "DoD (Definition of Done)",
        definicao: "Critérios que uma tarefa precisa atender para ser considerada concluída.",
        categoria: "Dev",
        exemplo: "\"A tarefa não está pronta, não atende o DoD.\"",
        detalhe: "Ex: testado, revisado, documentado, deployado."
    },
    {
        termo: "DRY (Don't Repeat Yourself)",
        definicao: "Princípio de não repetir código. Cada conhecimento deve ter uma representação única.",
        categoria: "Dev",
        exemplo: "\"Isso viola o DRY, vamos extrair para uma função.\"",
        detalhe: "Código duplicado = manutenção dobrada."
    },
    {
        termo: "KISS (Keep It Simple, Stupid)",
        definicao: "Princípio de manter as coisas simples. Evitar complexidade desnecessária.",
        categoria: "Dev",
        exemplo: "\"Vamos manter o KISS, não precisamos de tanta complexidade.\"",
        detalhe: "Simplicidade é a chave para manutenibilidade."
    },
    {
        termo: "YAGNI (You Aren't Gonna Need It)",
        definicao: "Princípio de não adicionar funcionalidades que você não precisa agora.",
        categoria: "Dev",
        exemplo: "\"Isso é YAGNI, não vamos precisar disso agora.\"",
        detalhe: "Não antecipe requisitos que podem nunca existir."
    },
    {
        termo: "SOLID",
        definicao: "Conjunto de 5 princípios de design orientado a objetos (Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion).",
        categoria: "Dev",
        exemplo: "\"Vamos aplicar SOLID para manter o código desacoplado.\"",
        detalhe: "S.O.L.I.D. = 5 princípios fundamentais."
    },
    {
        termo: "TDD (Test-Driven Development)",
        definicao: "Desenvolver escrevendo testes antes do código. Ciclo: Red-Green-Refactor.",
        categoria: "Dev",
        exemplo: "\"Vamos usar TDD para essa feature.\"",
        detalhe: "Teste → Código → Refatoração."
    },
    {
        termo: "BDD (Behavior-Driven Development)",
        definicao: "Desenvolvimento orientado a comportamento, com testes escritos em linguagem natural (Given-When-Then).",
        categoria: "Dev",
        exemplo: "\"Vamos escrever os cenários em BDD antes de codar.\"",
        detalhe: "Given (dado), When (quando), Then (então)."
    },
    {
        termo: "CI/CD (Continuous Integration / Continuous Delivery)",
        definicao: "Prática de integrar código frequentemente e entregar rapidamente, com automação de builds e deploys.",
        categoria: "DevOps",
        exemplo: "\"Nosso pipeline de CI/CD está rodando.\"",
        detalhe: "CI = integração contínua, CD = entrega contínua."
    },
    {
        termo: "Orquestração",
        definicao: "Gerenciamento automatizado de containers em escala (Kubernetes, Docker Swarm).",
        categoria: "DevOps",
        exemplo: "\"Vamos usar Kubernetes para orquestração.\"",
        detalhe: "Kubernetes é o orquestrador mais usado."
    },

    // ==================== BANCO DE DADOS ====================
    {
        termo: "ACID",
        definicao: "Propriedades de transações: Atomicidade, Consistência, Isolamento, Durabilidade.",
        categoria: "Banco de Dados",
        exemplo: "\"Nosso banco é ACID, garantimos consistência.\"",
        detalhe: "A = Atomicidade, C = Consistência, I = Isolamento, D = Durabilidade."
    },
    {
        termo: "CAP Theorem",
        definicao: "Teorema que diz que em sistemas distribuídos você pode ter apenas 2 de 3: Consistência, Disponibilidade, Tolerância a Partições.",
        categoria: "Banco de Dados",
        exemplo: "\"Precisamos escolher entre C e A no CAP.\"",
        detalhe: "Consistency (C), Availability (A), Partition Tolerance (P)."
    },
    {
        termo: "ORM (Object-Relational Mapping)",
        definicao: "Técnica para mapear objetos de código para tabelas de banco de dados relacional.",
        categoria: "Banco de Dados",
        exemplo: "\"Vamos usar JPA/Hibernate como ORM.\"",
        detalhe: "Facilita a persistência, mas pode ter custo de performance."
    },
    {
        termo: "Migration",
        definicao: "Scripts para versionar mudanças no schema do banco de dados.",
        categoria: "Banco de Dados",
        exemplo: "\"Vamos criar uma migration para adicionar a nova coluna.\"",
        detalhe: "Ferramentas: Flyway, Liquibase."
    },
    {
        termo: "Sharding",
        definicao: "Técnica de particionar dados horizontalmente em múltiplos servidores para escalabilidade.",
        categoria: "Banco de Dados",
        exemplo: "\"Vamos fazer sharding da tabela de usuários.\"",
        detalhe: "Distribui dados por múltiplas instâncias."
    },
    {
        termo: "Replicação",
        definicao: "Copiar dados de um banco para outro (master-slave) para alta disponibilidade.",
        categoria: "Banco de Dados",
        exemplo: "\"Temos replicação para o banco de leitura.\"",
        detalhe: "Master para escrita, slaves para leitura."
    },

    // ==================== SEGURANÇA ====================
    {
        termo: "CVE (Common Vulnerabilities and Exposures)",
        definicao: "Identificador público de vulnerabilidades de segurança.",
        categoria: "Segurança",
        exemplo: "\"Essa biblioteca tem uma CVE crítica, precisamos atualizar.\"",
        detalhe: "Exemplo: CVE-2021-44228 (Log4Shell)."
    },
    {
        termo: "OWASP",
        definicao: "Organização que publica o Top 10 de vulnerabilidades mais críticas em aplicações web.",
        categoria: "Segurança",
        exemplo: "\"Vamos verificar o OWASP Top 10 para garantir segurança.\"",
        detalhe: "OWASP Top 10 é a BÍBLIA da segurança web."
    },
    {
        termo: "XSS (Cross-Site Scripting)",
        definicao: "Vulnerabilidade que permite injetar scripts em páginas web.",
        categoria: "Segurança",
        exemplo: "\"Precisamos escapar a saída para evitar XSS.\"",
        detalhe: "Escapar saída e validar entrada são as defesas."
    },
    {
        termo: "SQL Injection",
        definicao: "Vulnerabilidade que permite injetar código SQL em consultas.",
        categoria: "Segurança",
        exemplo: "\"Use prepared statements para evitar SQL Injection.\"",
        detalhe: "Uma das vulnerabilidades mais comuns."
    },
    {
        termo: "CSRF (Cross-Site Request Forgery)",
        definicao: "Vulnerabilidade onde um site malicioso faz requisições em nome do usuário autenticado.",
        categoria: "Segurança",
        exemplo: "\"Vamos usar tokens CSRF para proteger os formulários.\"",
        detalhe: "Tokens anti-CSRF evitam ataques."
    },
    {
        termo: "MFA (Multi-Factor Authentication)",
        definicao: "Autenticação que exige múltiplos fatores (ex: senha + token).",
        categoria: "Segurança",
        exemplo: "\"Vamos implementar MFA para contas administrativas.\"",
        detalhe: "Algo que você sabe, tem, e é."
    },
    {
        termo: "Zero Trust",
        definicao: "Modelo de segurança que não confia em ninguém, mesmo dentro da rede. \"Never trust, always verify\".",
        categoria: "Segurança",
        exemplo: "\"Vamos adotar a arquitetura Zero Trust.\"",
        detalhe: "Autenticação e autorização em cada requisição."
    },
    {
        termo: "Hashing",
        definicao: "Função de mão única que transforma dados em um hash. Não pode ser revertido.",
        categoria: "Segurança",
        exemplo: "\"Vamos fazer hash das senhas antes de salvar.\"",
        detalhe: "NUNCA armazene senhas em texto."
    },
    {
        termo: "Criptografia",
        definicao: "Transformar dados em formato ilegível para não autorizados. Pode ser simétrica (mesma chave) ou assimétrica (pública/privada).",
        categoria: "Segurança",
        exemplo: "\"Vamos criptografar os dados sensíveis.\"",
        detalhe: "Simétrica = mesma chave, Assimétrica = par de chaves."
    },

    // ==================== INFRAESTRUTURA E CLOUD ====================
    {
        termo: "Deploy",
        definicao: "Colocar código em um ambiente (produção, staging, etc).",
        categoria: "Infraestrutura",
        exemplo: "\"Vamos fazer o deploy hoje.\"",
        detalhe: "Deploy = colocar no ar."
    },
    {
        termo: "Rollback",
        definicao: "Reverter mudanças, voltar para uma versão anterior.",
        categoria: "Infraestrutura",
        exemplo: "\"Vamos fazer rollback, o deploy deu problema.\"",
        detalhe: "Todo deploy deve ter plano de rollback."
    },
    {
        termo: "Blue-Green Deployment",
        definicao: "Estratégia de deploy onde duas versões (azul e verde) coexistem. Uma ativa, uma em standby.",
        categoria: "Infraestrutura",
        exemplo: "\"Vamos usar Blue-Green para deploy sem downtime.\"",
        detalhe: "Muda o tráfego de uma para outra."
    },
    {
        termo: "Canary Deployment",
        definicao: "Estratégia onde uma nova versão é liberada gradualmente para um pequeno grupo de usuários.",
        categoria: "Infraestrutura",
        exemplo: "\"Vamos fazer canary deployment para testar a nova versão.\"",
        detalhe: "Liberação gradual com monitoramento."
    },
    {
        termo: "Infrastructure as Code (IaC)",
        definicao: "Gerenciar infraestrutura através de código (ex: Terraform, CloudFormation).",
        categoria: "Infraestrutura",
        exemplo: "\"Vamos usar IaC para provisionar a infraestrutura.\"",
        detalhe: "Infraestrutura versionada e automatizada."
    },
    {
        termo: "Load Balancer",
        definicao: "Distribui tráfego entre múltiplos servidores para balanceamento de carga.",
        categoria: "Infraestrutura",
        exemplo: "\"Vamos colocar um load balancer na frente dos servidores.\"",
        detalhe: "Aumenta disponibilidade e escalabilidade."
    },
    {
        termo: "Escalabilidade (Horizontal vs Vertical)",
        definicao: "Horizontal = adicionar mais máquinas. Vertical = aumentar recursos de uma máquina.",
        categoria: "Infraestrutura",
        exemplo: "\"Vamos escalar horizontalmente com mais instâncias.\"",
        detalhe: "Horizontal = scale-out, Vertical = scale-up."
    },
    {
        termo: "Observabilidade",
        definicao: "Capacidade de entender o estado interno de um sistema através de logs, métricas e traces.",
        categoria: "Infraestrutura",
        exemplo: "\"Precisamos melhorar a observabilidade do sistema.\"",
        detalhe: "Logs + Métricas + Traces = Observabilidade."
    },
    {
        termo: "SLI, SLO, SLA",
        definicao: "SLI = Indicador de nível de serviço (ex: tempo de resposta). SLO = Objetivo de nível de serviço (ex: 99.9%). SLA = Acordo de nível de serviço (contrato).",
        categoria: "Infraestrutura",
        exemplo: "\"Nosso SLO é 99.9% de disponibilidade.\"",
        detalhe: "SLI mede, SLO define, SLA garante."
    },

    // ==================== BORA VIBE ====================
    {
        termo: "Bora Codar",
        definicao: "Expressão para iniciar uma atividade de programação com energia positiva.",
        categoria: "Vibe",
        exemplo: "\"Bora codar essa feature!\"",
        detalhe: "Bora = disposição, energia, união."
    },
    {
        termo: "Bora Feedback",
        definicao: "Cultura de dar e receber feedback constante para melhorar.",
        categoria: "Vibe",
        exemplo: "\"Bora feedbacks sobre o código?\"",
        detalhe: "Feedback é presente, agradeça sempre."
    },
    {
        termo: "Bora Vibe",
        definicao: "A energia positiva do time que está alinhado, motivado e focado em entregar.",
        categoria: "Vibe",
        exemplo: "\"O time está com a Bora Vibe!\"",
        detalhe: "É a cultura do 'bora fazer acontecer'."
    }
]

// ==================== FUNÇÕES DA APLICAÇÃO ====================

let filteredData = dicionarioData

function renderDicionario() {
    const container = document.getElementById('dicionarioContainer')
    if (!container) return
    
    let html = ''
    
    // Input de busca
    html += `
        <div class="search-container">
            <input type="text" class="search-input" id="searchInput" placeholder="🔍 Buscar termo, categoria ou definição...">
            <div class="filter-buttons">
                <button class="filter-btn active" data-filter="todos">Todos</button>
                <button class="filter-btn" data-filter="Git">Git</button>
                <button class="filter-btn" data-filter="Ágil">Ágil</button>
                <button class="filter-btn" data-filter="Arquitetura">Arquitetura</button>
                <button class="filter-btn" data-filter="Design Patterns">Design Patterns</button>
                <button class="filter-btn" data-filter="Dev">Dev</button>
                <button class="filter-btn" data-filter="DevOps">DevOps</button>
                <button class="filter-btn" data-filter="Banco de Dados">Banco de Dados</button>
                <button class="filter-btn" data-filter="Segurança">Segurança</button>
                <button class="filter-btn" data-filter="Infraestrutura">Infraestrutura</button>
                <button class="filter-btn" data-filter="Vibe">Vibe</button>
            </div>
        </div>
    `
    
    // Cards dos termos
    html += `<div class="dicionario-grid">`
    
    filteredData.forEach(function(item) {
        html += `
            <div class="termo-card" onclick="showTermoDetalhado('${escapeHtml(item.termo)}')">
                <div class="termo">${item.termo}</div>
                <div class="definicao">${item.definicao}</div>
                <span class="categoria-tag">${item.categoria}</span>
            </div>
        `
    })
    
    html += `</div>`
    
    container.innerHTML = html
    
    // Configurar busca e filtros
    setupSearchAndFilters()
}

function showTermoDetalhado(termo) {
    const item = dicionarioData.find(function(t) { return t.termo === termo })
    if (!item) return
    
    const container = document.getElementById('contentContainer')
    const dicionario = document.getElementById('dicionarioContainer')
    const backButton = document.getElementById('backToDicionario')
    
    dicionario.style.display = 'none'
    container.style.display = 'block'
    backButton.style.display = 'inline-block'
    
    let html = `
        <div class="content-card">
            <div class="content-title">${item.termo}</div>
            <div class="content-explanation">
                <strong>📌 O que significa:</strong><br>
                ${item.definicao}
                
                <br><br>
                <strong>📂 Categoria:</strong> ${item.categoria}
                
                ${item.exemplo ? `
                    <br><br>
                    <strong>💬 Exemplo de uso:</strong>
                    <span class="exemplo">${item.exemplo}</span>
                ` : ''}
                
                ${item.detalhe ? `
                    <br><br>
                    <strong>🔍 Detalhe importante:</strong><br>
                    ${item.detalhe}
                ` : ''}
            </div>
            
            <div class="tip">
                <strong>🗣️ DICA DO HAMILTON:</strong> "${item.termo}" é um termo que TODO dev precisa conhecer para se comunicar bem no time. Domine a linguagem e você dominará a comunicação!
            </div>
        </div>
    `
    
    container.innerHTML = html
}

function setupSearchAndFilters() {
    const searchInput = document.getElementById('searchInput')
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            filterTerms()
        })
    }
    
    const filterBtns = document.querySelectorAll('.filter-btn')
    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            filterBtns.forEach(function(b) { b.classList.remove('active') })
            btn.classList.add('active')
            filterTerms()
        })
    })
}

function filterTerms() {
    const searchText = document.getElementById('searchInput').value.toLowerCase()
    const activeFilter = document.querySelector('.filter-btn.active')
    const filterCategory = activeFilter ? activeFilter.dataset.filter : 'todos'
    
    filteredData = dicionarioData.filter(function(item) {
        const matchSearch = item.termo.toLowerCase().includes(searchText) ||
                           item.definicao.toLowerCase().includes(searchText) ||
                           item.categoria.toLowerCase().includes(searchText)
        
        const matchCategory = filterCategory === 'todos' || item.categoria === filterCategory
        
        return matchSearch && matchCategory
    })
    
    renderDicionarioCards()
}

function renderDicionarioCards() {
    const container = document.querySelector('.dicionario-grid')
    if (!container) return
    
    let html = ''
    
    filteredData.forEach(function(item) {
        html += `
            <div class="termo-card" onclick="showTermoDetalhado('${escapeHtml(item.termo)}')">
                <div class="termo">${item.termo}</div>
                <div class="definicao">${item.definicao}</div>
                <span class="categoria-tag">${item.categoria}</span>
            </div>
        `
    })
    
    container.innerHTML = html
}

function escapeHtml(text) {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
}

function goBackToDicionario() {
    document.getElementById('contentContainer').style.display = 'none'
    document.getElementById('dicionarioContainer').style.display = 'block'
    document.getElementById('backToDicionario').style.display = 'none'
    window.scrollTo(0, 0)
}

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

document.addEventListener('DOMContentLoaded', function() {
    renderDicionario()
    typeWriterEffect()
    
    const backButton = document.getElementById('backToDicionario')
    if (backButton) {
        backButton.addEventListener('click', goBackToDicionario)
    }
    
    console.log('%c📖 Dicionário de Devs F1 carregado! Hamilton\'s Garage está pronto! 📖', 'color: #6c5ce7; font-size: 14px; font-weight: bold;')
})