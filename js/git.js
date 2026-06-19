// ESTRUTURA DE DADOS: Categorias -> SubCards -> Conteúdo
// Git e GitHub - Do Básico ao Avançado
const gitData = {
    categorias: [
        {
            id: "basico",
            nome: "📜 GIT BÁSICO",
            icone: "📖",
            descricao: "O que é Git, instalação, configuração e primeiros passos",
            progresso: 0,
            subCards: [
                {
                    id: "o-que-e-git",
                    nome: "O que é Git?",
                    icone: "🎯",
                    descricao: "Conceitos, VCS, repositórios e como funciona",
                    conteudo: {
                        explicacao: "Git é um sistema de <strong>controle de versão</strong> distribuído. Ele permite rastrear alterações em arquivos, trabalhar em equipe e manter o histórico do projeto.",
                        codigo: `# 🎯 O QUE É GIT?

# ✅ CONCEITOS FUNDAMENTAIS
# - Controle de Versão Distribuído (DVCS)
# - Cada desenvolvedor tem o histórico completo
# - Snapshots (não diferenças)
# - Trabalho offline

# 🏗️ TRÊS ESTADOS DO GIT
# 1. Working Directory (arquivos que você está editando)
# 2. Staging Area (arquivos prontos para commit)
# 3. Repository (arquivos commitados)

# 🔄 CICLO DE VIDA DE UM ARQUIVO
# Untracked → Staged → Committed
#    ↓           ↓          ↓
#  Novo      Add      Commit
#  arquivo    ↓          ↓
#         Working   Repository

# 💡 ONDE O GIT GUARDA DADOS?
# - .git/ (pasta oculta na raiz do projeto)
# - Contém TODOS os snapshots
# - Contém histórico completo

# 🚀 COMANDOS BÁSICOS
git --version              # Versão instalada
git help                   # Ajuda
git help init              # Ajuda para um comando`,
                        dica: "💡 Git guarda snapshots (fotos) dos seus arquivos, não apenas diferenças. Cada commit é uma foto completa do projeto naquele momento!"
                    }
                },
                {
                    id: "instalacao-git",
                    nome: "Instalação e Configuração",
                    icone: "⚙️",
                    descricao: "Instalar Git, configurar usuário, email e aliases",
                    conteudo: {
                        explicacao: "Configuração inicial do Git com seu nome e email para identificar seus commits.",
                        codigo: `# ⚙️ INSTALAÇÃO DO GIT

# 🐧 LINUX (Ubuntu/Debian)
sudo apt update
sudo apt install git

# 🍎 MAC (via Homebrew)
brew install git

# 🪟 WINDOWS
# Baixe: https://git-scm.com/download/win

# 🔧 CONFIGURAÇÃO GLOBAL
git config --global user.name "Lewis Hamilton"
git config --global user.email "lewis@f1code.com"

# 📋 VER CONFIGURAÇÕES
git config --list                    # Todas as configurações
git config --global user.name        # Ver nome do usuário
git config --global user.email       # Ver email

# 🎨 PERSONALIZAÇÃO
git config --global core.editor "code --wait"  # Editor padrão (VS Code)
git config --global init.defaultBranch main   # Branch padrão
git config --global color.ui auto             # Cores no terminal

# 🔥 ALIASES (ATALHOS PODEROSOS)
git config --global alias.s status
git config --global alias.l "log --oneline --graph"
git config --global alias.c commit
git config --global alias.b branch
git config --global alias.co checkout
git config --global alias.st "status -s"
git config --global alias.a "add ."
git config --global alias.lg "log --oneline --graph --all"
git config --global alias.unstage "reset HEAD --"

# 📝 EXEMPLO: depois de criar aliases
git s           # git status
git l           # git log --oneline --graph
git c -m "msg"  # git commit -m "msg"
git co main     # git checkout main
git a           # git add .`,
                        dica: "🔥 SEMPRE configure user.name e user.email antes de começar. ALIASES são ESSENCIAIS para produtividade!"
                    }
                },
                {
                    id: "primeiros-comandos",
                    nome: "Primeiros Comandos",
                    icone: "🚀",
                    descricao: "init, status, add, commit, log, diff",
                    conteudo: {
                        explicacao: "Comandos essenciais que você vai usar em TODO projeto com Git.",
                        codigo: `# 🚀 COMANDOS ESSENCIAIS

# 📁 CRIAR REPOSITÓRIO
git init                    # Inicia repositório na pasta atual
git init nome-projeto       # Cria pasta e inicia repositório

# 📋 VER STATUS
git status                  # Status dos arquivos
git status -s               # Status resumido (short)

# ➕ ADICIONAR ARQUIVOS (STAGE)
git add arquivo.txt         # Adiciona um arquivo específico
git add .                   # Adiciona TODOS os arquivos
git add *.js                # Adiciona todos os .js
git add -A                  # Adiciona tudo (incluindo removidos)

# 📦 COMMIT (SALVAR)
git commit -m "mensagem"    # Commit com mensagem
git commit -am "msg"        # Add + Commit (só arquivos trackeados)
git commit --amend -m "nova msg"  # Altera último commit

# 📖 VER HISTÓRICO
git log                     # Histórico completo
git log --oneline           # Histórico resumido (1 linha por commit)
git log --graph             # Histórico com gráfico
git log --oneline --graph   # Resumido com gráfico
git log -p                  # Mostra mudanças em cada commit
git log --author="Hamilton" # Filtra por autor

# 🔍 VER MUDANÇAS
git diff                    # Mudanças não stageadas
git diff --staged           # Mudanças stageadas (prontas para commit)
git diff HEAD               # Mudanças desde o último commit
git diff main..feature      # Diferença entre branches

# ❌ DESFAZER MUDANÇAS
git restore arquivo.txt     # Descarta mudanças no arquivo
git restore --staged arquivo.txt  # Remove do stage
git reset HEAD~1            # Desfaz último commit (mantém mudanças)
git reset --hard HEAD~1     # Desfaz último commit (PERDE mudanças!)

# 📝 EXEMPLO PRÁTICO
# 1. Criar projeto
mkdir meu-projeto
cd meu-projeto
git init

# 2. Criar arquivo
echo "# Meu Projeto" > README.md

# 3. Ver status
git status   # README.md está untracked

# 4. Adicionar e commit
git add README.md
git commit -m "Adiciona README.md"

# 5. Ver log
git log --oneline`,
                        dica: "💡 Use 'git status' CONSTANTEMENTE! É o comando mais importante do Git."
                    }
                }
            ]
        },
        {
            id: "branches",
            nome: "📜 BRANCHES E MERGE",
            icone: "🔀",
            descricao: "Criar, listar, trocar, merge e resolver conflitos",
            progresso: 0,
            subCards: [
                {
                    id: "branches-basico",
                    nome: "Branches (TUDO)",
                    icone: "🌿",
                    descricao: "O que são branches, criar, listar, trocar e deletar",
                    conteudo: {
                        explicacao: "Branches (ramos) são linhas independentes de desenvolvimento. Permitem trabalhar em features sem afetar o código principal.",
                        codigo: `# 🌿 BRANCHES - GUIA COMPLETO

# 📋 LISTAR BRANCHES
git branch                  # Lista branches locais
git branch -r               # Lista branches remotas
git branch -a               # Lista TODAS (locais + remotas)
git branch -v               # Lista com último commit
git branch --merged         # Branches já mesclados
git branch --no-merged      # Branches NÃO mesclados

# ➕ CRIAR BRANCH
git branch feature          # Cria branch 'feature'
git checkout -b feature     # Cria E TROCA para 'feature'
git switch -c feature       # Nova sintaxe (Git 2.23+)

# 🔄 TROCAR DE BRANCH
git checkout main           # Troca para 'main'
git checkout feature        # Troca para 'feature'
git switch main             # Nova sintaxe
git checkout -              # Volta para branch anterior

# 🏷️ VER BRANCH ATUAL
git branch --show-current   # Mostra branch atual
git status                  # Também mostra

# ❌ DELETAR BRANCH
git branch -d feature       # Deleta branch (seguro, mesclado)
git branch -D feature       # Deleta FORÇADO (perde commits!)
git push origin --delete feature  # Deleta branch remota

# 🔄 RENOMEAR BRANCH
git branch -m feature nova-feature  # Renomeia branch local

# 📝 EXEMPLO PRÁTICO
# Criar e trabalhar em uma nova feature
git checkout -b feature/login
# ... trabalha no código ...
git add .
git commit -m "Adiciona tela de login"
git checkout main
git merge feature/login
git branch -d feature/login`,
                        dica: "🔥 Branches são a base do Git! Crie uma branch para CADA feature/bugfix. NUNCA trabalhe direto na main!"
                    }
                },
                {
                    id: "merge",
                    nome: "Merge (TUDO)",
                    icone: "🔗",
                    descricao: "git merge, fast-forward, merge commit, conflitos",
                    conteudo: {
                        explicacao: "Merge combina mudanças de uma branch em outra. Pode ser fast-forward ou criar um commit de merge.",
                        codigo: `# 🔗 MERGE - GUIA COMPLETO

# 📌 TIPOS DE MERGE
# 1. Fast-forward (sem commit extra)
# 2. 3-way merge (cria commit de merge)
# 3. Squash merge (condensa commits)

# 🔄 MERGE BÁSICO
git checkout main           # Vai para a branch principal
git merge feature           # Mescla feature na main

# 📝 MERGE COM MENSAGEM
git merge feature -m "Mescla feature de login"

# 📦 SQUASH MERGE (condensa commits)
git merge --squash feature  # Junta TODOS os commits em 1
git commit -m "Adiciona feature completa"

# 🚫 EVITAR FAST-FORWARD
git merge --no-ff feature   # Cria commit de merge mesmo se puder

# ⚡ ABORTAR MERGE
git merge --abort           # Cancela merge em andamento

# 🔥 RESOLVER CONFLITOS
# 1. git status - identifica arquivos em conflito
# 2. Editar arquivos conflitantes
# 3. git add . (marca como resolvido)
# 4. git commit -m "Resolve conflitos"

# 🎯 FERRAMENTAS DE MERGE
git mergetool               # Abre ferramenta visual
git diff                    # Ver diferenças

# 📝 EXEMPLO COM CONFLITO
git checkout main
git merge feature
# CONFLITO em arquivo.txt
git status                 # Vê conflitos
# Editar arquivo.txt e resolver
git add arquivo.txt
git commit -m "Resolve conflito no arquivo.txt"

# 🔧 DICA: USAR O MERGE COM CUIDADO!
# ✅ Sempre faça commit antes de merge
# ✅ Teste após resolver conflitos
# ✅ Use --no-ff para rastrear quando foi mesclado`,
                        dica: "🔥 SEEMPRE resolva conflitos com calma. Leia as marcações <<<<<<<, ======= e >>>>>>> para entender as diferenças."
                    }
                },
                {
                    id: "rebase",
                    nome: "Rebase (TUDO)",
                    icone: "🔄",
                    descricao: "git rebase, interactive rebase, squash, reorder",
                    conteudo: {
                        explicacao: "Rebase é uma alternativa ao merge. Ele reorganiza os commits em uma base linear.",
                        codigo: `# 🔄 REBASE - GUIA COMPLETO

# 📌 REBASE BÁSICO
git checkout feature        # Vai para a branch feature
git rebase main             # Aplica commits da feature sobre o main

# 🔥 INTERACTIVE REBASE (PODEROSO!)
git rebase -i HEAD~3        # Rebase dos 3 últimos commits

# 🎯 OPÇÕES DO INTERACTIVE REBASE
# pick   - mantém o commit
# reword - altera mensagem do commit
# edit   - altera conteúdo do commit
# squash - junta com commit anterior
# fixup  - junta e descarta mensagem
# drop   - remove commit

# 📝 SQUASH (JUNTAR COMMITS)
git rebase -i HEAD~4
# No editor:
# pick 1234567 Primeiro commit
# squash abcdefg Segundo commit (junta com anterior)
# squash 789abcd Terceiro commit (junta com anterior)
# pick 789defg Quarto commit

# 🔧 REWORD (ALTERAR MENSAGEM)
git rebase -i HEAD~2
# pick 1234567 Mensagem antiga
# reword abcdefg Mensagem que quero mudar

# ⚡ ABORTAR REBASE
git rebase --abort          # Cancela rebase

# 🔄 CONTINUAR REBASE
git rebase --continue       # Após resolver conflitos

# 📋 REBASE vs MERGE
# Rebase:     | Merge:
# - Histórico linear | - Histórico com bifurcações
# - Mais limpo       | - Mais preciso
# - "Reescreve" história | - Mantém história real

# 🚀 EXEMPLO PRÁTICO
# Rebase para manter histórico limpo
git checkout feature
git rebase main
# Resolver conflitos se houver
git add .
git rebase --continue
git push --force-with-lease  # CUIDADO! Força push!`,
                        dica: "🔥 Rebase DEIXA O HISTÓRICO MAIS LIMPO! Use interactive rebase para squash commits antes de enviar para o repositório remoto."
                    }
                }
            ]
        },
        {
            id: "remoto",
            nome: "📜 GITHUB E REMOTOS",
            icone: "🌐",
            descricao: "GitHub, remote, clone, push, pull, fetch, PRs",
            progresso: 0,
            subCards: [
                {
                    id: "github-basico",
                    nome: "GitHub Básico",
                    icone: "🐙",
                    descricao: "O que é GitHub, criar conta, criar repositórios",
                    conteudo: {
                        explicacao: "GitHub é uma plataforma de hospedagem de código-fonte baseada em Git. Permite colaboração, revisão de código e gerenciamento de projetos.",
                        codigo: `# 🐙 GITHUB - GUIA COMPLETO

# 📝 O QUE É GITHUB?
# - Plataforma de hospedagem de repositórios Git
# - Colaboração em equipe
# - Pull Requests (revisão de código)
# - Issues (tracking de bugs)
# - Actions (CI/CD)
# - Pages (hospedagem de sites)

# 🔧 CRIAR CONTA
# Acesse: https://github.com

# 📁 CRIAR REPOSITÓRIO (via web)
# 1. Clique em "New Repository"
# 2. Nome: meu-projeto
# 3. Descrição (opcional)
# 4. Public ou Private
# 5. Inicializar com README (ou não)

# 🔗 CONECTAR REPOSITÓRIO LOCAL AO REMOTO
git remote add origin https://github.com/usuario/meu-projeto.git

# 📋 VER REMOTOS
git remote -v               # Lista remotos configurados
git remote show origin      # Detalhes do remoto

# 🔧 ALTERAR REMOTO
git remote set-url origin https://github.com/usuario/novo-repo.git

# ❌ REMOVER REMOTO
git remote remove origin

# 📝 EXEMPLO PRÁTICO
# 1. Criar repositório no GitHub
# 2. Conectar local
git init
git add .
git commit -m "Primeiro commit"
git branch -M main
git remote add origin https://github.com/seu-user/meu-repo.git
git push -u origin main`,
                        dica: "💡 GitHub é ESSENCIAL para colaboração. Aprenda a usar Pull Requests e Issues para trabalho em equipe."
                    }
                },
                {
                    id: "push-pull",
                    nome: "Push, Pull e Fetch (TUDO)",
                    icone: "📤",
                    descricao: "git push, git pull, git fetch, git clone",
                    conteudo: {
                        explicacao: "Comandos para sincronizar seu repositório local com o remoto.",
                        codigo: `# 📤 PUSH, PULL E FETCH

# 📥 CLONAR REPOSITÓRIO
git clone https://github.com/usuario/repo.git          # Clona via HTTPS
git clone git@github.com:usuario/repo.git              # Clona via SSH
git clone https://github.com/usuario/repo.git meu-pasta # Clona com nome diferente
git clone --branch develop https://github.com/usuario/repo.git  # Clona branch específica

# 📤 PUSH (Enviar para remoto)
git push                  # Envia para o remoto configurado
git push origin main      # Envia para a branch main no origin
git push -u origin main   # Primeiro push (configura upstream)
git push --force          # Força push (CUIDADO!)
git push --force-with-lease  # Mais seguro que --force
git push --tags           # Envia tags também
git push origin --delete branch  # Deleta branch remota

# 📥 PULL (Buscar E mesclar)
git pull                  # Fetch + Merge (atualiza)
git pull origin main      # Pull da branch main
git pull --rebase         # Pull com rebase (histórico mais limpo)

# 📡 FETCH (Buscar sem mesclar)
git fetch                 # Busca mudanças do remoto
git fetch origin          # Busca mudanças do origin
git fetch --prune         # Remove referências remotas deletadas

# 🔄 SYNC COMPLETO
# 1. git fetch origin
# 2. git checkout main
# 3. git pull
# 4. git checkout feature
# 5. git rebase main
# 6. git push --force-with-lease

# 📝 EXEMPLO PRÁTICO
# Primeiro push
git init
git add .
git commit -m "Primeiro commit"
git remote add origin https://github.com/usuario/repo.git
git branch -M main
git push -u origin main

# Atualizar projeto
git pull
git add .
git commit -m "Nova feature"
git push`,
                        dica: "🔥 Sempre use 'git pull' antes de começar a trabalhar. Use 'git push --force-with-lease' em vez de '--force' para evitar problemas."
                    }
                },
                {
                    id: "pull-requests",
                    nome: "Pull Requests (TUDO)",
                    icone: "👥",
                    descricao: "Criar, revisar, aprovar e mergear PRs",
                    conteudo: {
                        explicacao: "Pull Requests são a forma de colaborar no GitHub. Permitem revisar código antes de mesclar.",
                        codigo: `# 👥 PULL REQUESTS - GUIA COMPLETO

# 📝 O QUE É UM PULL REQUEST?
# - Solicitação para mesclar mudanças
# - Permite revisão de código
# - Discussão sobre as mudanças
# - Aprovação antes do merge

# 🔄 FLUXO DE UM PR
# 1. Fork/Criar branch
# 2. Fazer mudanças
# 3. Push da branch
# 4. Abrir Pull Request
# 5. Revisão de código
# 6. Aprovação
# 7. Merge

# 📋 CRIAR UM PR (via CLI)
# 1. Criar branch
git checkout -b feature/nova-funcionalidade

# 2. Trabalhar no código
git add .
git commit -m "Adiciona nova funcionalidade"

# 3. Push para o GitHub
git push -u origin feature/nova-funcionalidade

# 4. Abrir PR no GitHub (via web)

# 🔧 COMANDOS ÚTEIS PARA PRS
# Revisar PR localmente
git fetch origin pull/ID/head:pr-branch
git checkout pr-branch

# 🎯 BOAS PRÁTICAS PARA PRS
# ✅ Título descritivo
# ✅ Descrição com o que foi feito
# ✅ Link para issues relacionadas
# ✅ Screenshots (quando aplicável)
# ✅ Commits limpos e organizados

# 📝 TEMPLATE DE PR
# ## O que foi feito?
# - Implementa feature X
# - Corrige bug Y

# ## Como testar?
# 1. Faça checkout da branch
# 2. Execute os testes

# ## Screenshots
# [imagem]

# 🔥 DICAS IMPORTANTES
# - PR pequenos são mais fáceis de revisar
# - Responda aos comentários
# - Atualize o PR com mudanças
# - Não force push após revisões (mantém histórico)`,
                        dica: "🔥 Pull Requests são a MELHOR forma de colaborar! PRs pequenos e descritivos são mais fáceis de revisar e aprovar."
                    }
                }
            ]
        },
        {
            id: "avancado",
            nome: "📜 GIT AVANÇADO",
            icone: "⚡",
            descricao: "Stash, Cherry-pick, Reset, Revert, Bisect, Hooks",
            progresso: 0,
            subCards: [
                {
                    id: "stash",
                    nome: "Stash (Guardar mudanças)",
                    icone: "📦",
                    descricao: "guardar, listar, aplicar, dropar e pop",
                    conteudo: {
                        explicacao: "Stash permite guardar mudanças temporariamente sem fazer commit. Útil para trocar de branch rapidamente.",
                        codigo: `# 📦 STASH - GUIA COMPLETO

# 🔧 GUARDAR MUDANÇAS
git stash                  # Guarda mudanças (com nome padrão)
git stash save "mensagem"  # Guarda com mensagem
git stash -u               # Guarda também arquivos não trackeados

# 📋 VER STASHES
git stash list             # Lista todos os stashes
git stash show             # Mostra o último stash
git stash show -p          # Mostra mudanças detalhadas

# 📤 APLICAR STASH
git stash apply            # Aplica o último stash (mantém no stash)
git stash pop              # Aplica e REMOVE do stash
git stash apply stash@{1}  # Aplica um stash específico

# ❌ REMOVER STASH
git stash drop             # Remove o último stash
git stash drop stash@{1}   # Remove stash específico
git stash clear            # Remove TODOS os stashes

# 🔥 EXEMPLO PRÁTICO
# Estava trabalhando em uma feature, precisa corrigir um bug urgente
git stash save "WIP: feature login"
git checkout main
git pull
git checkout -b hotfix/bug
# corrige o bug
git add .
git commit -m "Corrige bug"
git checkout feature/login
git stash pop              # Recupera as mudanças
# continuar trabalhando

# 🎯 DICAS
# - Use git stash frequentemente
# - Dê nomes descritivos
# - Não acumule muitos stashes
# - git stash pop é o mais usado`,
                        dica: "🔥 Stash é VIDA! Permite trocar de contexto rapidamente sem perder mudanças. Use stash pop para recuperar e remover."
                    }
                },
                {
                    id: "cherry-pick",
                    nome: "Cherry-pick (TUDO)",
                    icone: "🍒",
                    descricao: "Aplicar commits específicos em outra branch",
                    conteudo: {
                        explicacao: "Cherry-pick permite aplicar commits específicos de uma branch em outra.",
                        codigo: `# 🍒 CHERRY-PICK - GUIA COMPLETO

# 📌 APLICAR COMMIT ESPECÍFICO
git cherry-pick COMMIT_ID           # Aplica commit específico
git cherry-pick COMMIT_ID1 COMMIT_ID2  # Aplica múltiplos
git cherry-pick ..COMMIT_ID         # Aplica até o commit
git cherry-pick COMMIT_ID^..COMMIT_ID # Aplica intervalo

# 🔧 OPÇÕES
git cherry-pick -n COMMIT_ID        # Aplica sem commit (--no-commit)
git cherry-pick -e COMMIT_ID        # Edita mensagem do commit
git cherry-pick -x COMMIT_ID        # Adiciona referência ao commit original

# ⚡ RESOLVER CONFLITOS
git cherry-pick --continue          # Continua após resolver conflitos
git cherry-pick --abort             # Aborta cherry-pick
git cherry-pick --quit              # Sai do cherry-pick

# 🔥 EXEMPLO PRÁTICO
# Aplicar correção de bug em produção
git checkout production
git cherry-pick abc1234  # Commit do bug fix
git push

# 🔧 QUANDO USAR
# ✅ Aplicar correção em múltiplas branches
# ✅ Reverter commit específico
# ✅ Mover feature para outra branch
# ❌ EVITAR para features complexas (use merge/rebase)`,
                        dica: "🔥 Cherry-pick é ótimo para aplicar correções específicas em branches diferentes. Use com moderação para features grandes."
                    }
                },
                {
                    id: "reset-revert",
                    nome: "Reset e Revert (TUDO)",
                    icone: "↩️",
                    descricao: "git reset, git revert, soft, mixed, hard",
                    conteudo: {
                        explicacao: "Reset e Revert são formas de desfazer mudanças. Reset move o HEAD, Revert cria um novo commit que desfaz as mudanças.",
                        codigo: `# ↩️ RESET E REVERT - GUIA COMPLETO

# 📌 GIT RESET (Move o HEAD)
# --soft    : Só move o HEAD (mantém mudanças no stage)
# --mixed   : Move HEAD e remove do stage (mantém mudanças no working)
# --hard    : Move HEAD e DESCARTAR mudanças (PERIGOSO!)

# 🔧 GIT RESET
git reset --soft HEAD~1      # Desfaz commit, mantém mudanças stageadas
git reset --mixed HEAD~1     # Desfaz commit, remove do stage
git reset --hard HEAD~1      # Desfaz commit, PERDE mudanças!

# 📋 RESET PARA COMMIT ESPECÍFICO
git reset --soft abc1234     # Volta para o commit abc1234
git reset --hard abc1234     # Volta e DESCARTAR mudanças

# ➕ RESET DE ARQUIVO ESPECÍFICO
git reset HEAD arquivo.txt   # Remove do stage (unstage)
git checkout -- arquivo.txt  # Descarta mudanças no arquivo

# 🔄 GIT REVERT (Cria novo commit desfazendo)
git revert abc1234           # Cria commit que desfaz abc1234
git revert HEAD              # Desfaz o último commit
git revert -n abc1234        # Reverte sem commit (--no-commit)

# ⚡ REVERT COM CONFLITOS
git revert --continue        # Continua após resolver
git revert --abort           # Aborta revert

# 📊 COMPARAÇÃO
# Reset:   | Revert:
# - Move HEAD | - Cria novo commit
# - Reescreve história | - Mantém história
# - Perigoso em remoto | - Seguro em remoto
# - Remove commits | - Adiciona commit

# 🎯 QUANDO USAR
# Reset:    | Revert:
# - Local   | - Remoto
# - Trabalho privado | - Trabalho compartilhado
# - Desfazer commits locais | - Desfazer commits públicos`,
                        dica: "🔥 Use RESET localmente (antes do push), use REVERT para commits já compartilhados. Reset --hard é PERIGOSO!"
                    }
                },
                {
                    id: "bisect-hooks",
                    nome: "Bisect e Hooks (TUDO)",
                    icone: "🔍",
                    descricao: "git bisect, git hooks, automação e debug",
                    conteudo: {
                        explicacao: "Bisect ajuda a encontrar bugs, Hooks automatizam tarefas.",
                        codigo: `# 🔍 BISECT - ENCONTRAR BUGS

# 📌 INICIAR BISECT
git bisect start            # Inicia a busca
git bisect bad              # Marca commit atual como ruim
git bisect good abc1234     # Marca commit bom (que funcionava)

# 🔄 PROCESSO
# Git alterna entre commits
# Você testa e marca como bom ou ruim
git bisect good             # Se funcionar
git bisect bad              # Se estiver quebrado

# ✅ FINALIZAR
git bisect reset            # Volta para o commit original

# 🔧 EXEMPLO
git bisect start
git bisect bad              # Atual está ruim
git bisect good HEAD~100    # 100 commits atrás funcionava
# Testa commit 50
git bisect good
# Testa commit 75
git bisect bad
# ... até encontrar o commit que quebrou

# 📦 GIT HOOKS - AUTOMAÇÃO
# Hooks são scripts executados em eventos do Git

# 📂 ONDE FICAM?
# .git/hooks/ (dentro do repositório)

# 🔧 HOOKS MAIS COMUNS
# pre-commit    - Antes do commit
# commit-msg    - Antes de salvar mensagem
# post-commit   - Após o commit
# pre-push      - Antes do push
# post-receive  - No servidor após receber push

# 📝 EXEMPLO: pre-commit (validar código)
#!/bin/bash
# .git/hooks/pre-commit

# Verifica se tem arquivos .js
if git diff --cached --name-only | grep ".js$"; then
    npm run lint
    if [ $? -ne 0 ]; then
        echo "❌ Lint falhou! Commit cancelado."
        exit 1
    fi
fi

# 🚀 EXEMPLO DE HOOKS COM HUSKY (Node.js)
npm install husky --save-dev
npx husky install
npx husky add .husky/pre-commit "npm test"
npx husky add .husky/commit-msg "npx --no-install commitlint --edit"`,
                        dica: "🔥 Bisect é INCRÍVEL para encontrar bugs! Hooks automatizam tarefas e previnem erros."
                    }
                }
            ]
        },
        {
            id: "pratico",
            nome: "📜 GIT PRÁTICO",
            icone: "🚀",
            descricao: "Fluxos de trabalho, problemas comuns e soluções",
            progresso: 0,
            subCards: [
                {
                    id: "workflows",
                    nome: "Fluxos de Trabalho (TUDO)",
                    icone: "🔄",
                    descricao: "Git Flow, GitHub Flow, trunk-based, CI/CD",
                    conteudo: {
                        explicacao: "Diferentes estratégias de uso do Git em equipe.",
                        codigo: `# 🔄 FLUXOS DE TRABALHO

# 📌 GIT FLOW (Clássico)
# - main (produção)
# - develop (desenvolvimento)
# - feature/* (features)
# - hotfix/* (correções urgentes)
# - release/* (preparação de release)

# 🌿 GITHUB FLOW (Simples)
# - main (sempre deployável)
# - feature/* (branches curtas)
# - PRs para revisão
# - Merge após aprovação

# 🚀 TRUNK-BASED (CI/CD)
# - main (single branch)
# - Feature flags
# - Short-lived branches
# - Deploy frequente

# 🔧 FLUXO PRÁTICO (GitHub Flow)
# 1. git checkout -b feature/nova-feature
# 2. Trabalhar e commitar
# 3. git push origin feature/nova-feature
# 4. Abrir Pull Request
# 5. Revisar e aprovar
# 6. Merge
# 7. git checkout main && git pull
# 8. git branch -d feature/nova-feature

# 🔥 MELHORES PRÁTICAS
# ✅ Commits pequenos e frequentes
# ✅ Mensagens descritivas
# ✅ Branches curtas (< 1 semana)
# ✅ Pull Requests revisados
# ✅ Tests passam antes do merge
# ✅ CI/CD automatizado

# 📝 EXEMPLO DE GIT FLOW
# Iniciar feature
git checkout develop
git pull
git checkout -b feature/login

# Finalizar feature
git checkout develop
git merge --no-ff feature/login
git branch -d feature/login

# Hotfix urgente
git checkout main
git checkout -b hotfix/bug
# corrigir bug
git commit -m "Corrige bug"
git checkout main
git merge --no-ff hotfix/bug
git checkout develop
git merge --no-ff hotfix/bug`,
                        dica: "🔥 GitHub Flow é o mais simples e recomendado para a maioria dos projetos. Git Flow para projetos com releases agendados."
                    }
                },
                {
                    id: "troubleshooting-git",
                    nome: "Resolução de Problemas (TUDO)",
                    icone: "🔧",
                    descricao: "Problemas comuns e soluções no Git",
                    conteudo: {
                        explicacao: "Problemas comuns no Git e como resolvê-los rapidamente.",
                        codigo: `# 🔧 PROBLEMAS COMUNS E SOLUÇÕES

# 1️⃣ "Commit não foi para o remoto"
# Solução:
git push origin branch

# 2️⃣ "Conflito no merge"
# Solução:
git status                   # Ver arquivos conflitantes
# Editar arquivos
git add .
git commit -m "Resolve conflito"

# 3️⃣ "Esqueci de adicionar um arquivo"
# Solução:
git add arquivo-esquecido.txt
git commit --amend --no-edit  # Adiciona ao último commit

# 4️⃣ "Commit errado (mensagem ou arquivo)"
# Solução (antes do push):
git commit --amend -m "Nova mensagem"
# Solução (depois do push):
git revert COMMIT_ID

# 5️⃣ "Perdi um commit com reset --hard"
# Solução:
git reflog                    # Encontra o commit perdido
git reset --hard HASH        # Restaura o commit

# 6️⃣ "Erro de autenticação no push"
# Solução:
# Verificar credenciais
git config --global credential.helper
# Atualizar token/password
# Usar SSH

# 7️⃣ "Branch remota não aparece local"
# Solução:
git fetch --all
git checkout -b branch origin/branch

# 8️⃣ "Quero desfazer mudanças locais"
# Solução:
git restore arquivo.txt      # Descarta mudanças
git clean -fd                # Remove arquivos não trackeados

# 9️⃣ "Pull não funciona (diverge)"
# Solução:
git pull --rebase
# ou
git fetch
git rebase origin/main

# 🔟 "Erro: 'detached HEAD' state"
# Solução:
git switch main              # Volta para branch

# 🔥 COMANDOS DE EMERGÊNCIA
git reflog                    # Ver histórico de movimentos
git fsck                      # Verificar integridade
git gc                        # Limpar arquivos desnecessários
git stash drop                # Limpar stash`,
                        dica: "💡 git reflog SALVA VIDAS! Use para recuperar commits perdidos. git restore para descartar mudanças."
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
    
    gitData.categorias.forEach(categoria => {
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
    const categoria = gitData.categorias.find(c => c.id === categoryId);
    
    if (!categoria) return;
    
    let html = `<h2 class="section-title">📜 ${categoria.nome} 📜</h2>`;
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
    const categoria = gitData.categorias.find(c => c.id === categoryId);
    const subCard = categoria?.subCards.find(s => s.id === subCardId);
    
    if (!subCard) return;
    
    const isCompleted = isSubCardCompleted(categoryId, subCardId);
    const btnText = isCompleted ? '✅ TÓPICO CONCLUÍDO!' : '📜 MARCAR COMO CONCLUÍDO';
    
    let html = `
        <div class="content-card">
            <div class="content-title">${subCard.icone} ${subCard.nome}</div>
            <div class="content-explanation">${subCard.conteudo.explicacao}</div>
            
            <div class="code-block">
                <button class="copy-btn" onclick="copyCode(this)">📋 COPIAR</button>
                <pre>${escapeHtml(subCard.conteudo.codigo)}</pre>
            </div>
            
            <div class="tip">
                <strong>📜 DICA DO HAMILTON:</strong> ${subCard.conteudo.dica}
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
    const saved = localStorage.getItem(`completed_git_${categoryId}`);
    if (!saved) return 0;
    return JSON.parse(saved).length;
}

function isSubCardCompleted(categoryId, subCardId) {
    const saved = localStorage.getItem(`completed_git_${categoryId}`);
    if (!saved) return false;
    const completed = JSON.parse(saved);
    return completed.includes(subCardId);
}

function toggleComplete(categoryId, subCardId) {
    let completed = JSON.parse(localStorage.getItem(`completed_git_${categoryId}`) || '[]');
    
    if (completed.includes(subCardId)) {
        completed = completed.filter(id => id !== subCardId);
        console.log(`%c📘 ${subCardId} marcado como pendente`, "color: #ff8c00");
    } else {
        completed.push(subCardId);
        console.log(`%c✅ ${subCardId} concluído!`, "color: #00ff00");
    }
    
    localStorage.setItem(`completed_git_${categoryId}`, JSON.stringify(completed));
    
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
    console.log("%c📜 Git e GitHub F1 carregado! Hamilton's Garage está pronto! 📜", "color: #f05032; font-size: 14px; font-weight: bold;");
    console.log("%c⚡ Categorias → Tópicos → Conteúdo. Seu progresso é salvo automaticamente!", "color: #ffd700; font-size: 12px;");
});