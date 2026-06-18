// ESTRUTURA DE DADOS: Categorias -> SubCards -> Conteúdo
// Terminal Linux - Do Básico ao Avançado (COM VIM, LESS E TUDO MAIS)
const terminalData = {
    categorias: [
        {
            id: "basico",
            nome: "🐧 COMANDOS BÁSICOS",
            icone: "📖",
            descricao: "Navegação, arquivos, permissões e operações essenciais",
            progresso: 0,
            subCards: [
                {
                    id: "navegacao",
                    nome: "Navegação no Sistema",
                    icone: "🚀",
                    descricao: "cd, ls, pwd e estrutura de diretórios",
                    conteudo: {
                        explicacao: "Os comandos de navegação são a base para se mover pelo sistema de arquivos do Linux.",
                        codigo: `# 📁 NAVEGAÇÃO BÁSICA

# Ver onde você está (Print Working Directory)
pwd

# Listar arquivos e pastas
ls                    # Lista arquivos
ls -l                 # Lista com detalhes (permissões, tamanho)
ls -la                # Lista TODOS os arquivos (inclui ocultos)
ls -lh                # Lista com tamanhos legíveis (human-readable)
ls -lt                # Lista ordenado por data (mais recente primeiro)
ls -ltr               # Lista ordenado por data (mais antigo primeiro)

# Navegar entre pastas (Change Directory)
cd /home              # Vai para a pasta /home
cd ~                  # Vai para sua pasta pessoal (home)
cd ..                 # Volta uma pasta (para trás)
cd ../..              # Volta duas pastas
cd -                  # Volta para a última pasta que estava
cd /                  # Vai para a raiz do sistema

# Exemplo prático
pwd                   # /home/usuario
ls -la                # Lista tudo na pasta atual
cd Documentos         # Entra na pasta Documentos
pwd                   # /home/usuario/Documentos
cd ..                 # Volta para /home/usuario`,
                        dica: "💡 Use 'ls -la' para ver arquivos ocultos (que começam com .). Use 'cd ~' para voltar rapidamente para sua home."
                    }
                },
                {
                    id: "manipulacao-arquivos",
                    nome: "Manipulação de Arquivos",
                    icone: "📝",
                    descricao: "Criar, copiar, mover, renomear e deletar",
                    conteudo: {
                        explicacao: "Comandos essenciais para gerenciar arquivos e pastas no terminal.",
                        codigo: `# 📄 CRIAR E EDITAR ARQUIVOS

# Criar arquivo vazio
touch arquivo.txt

# Criar arquivo com conteúdo (echo)
echo "Olá, mundo!" > arquivo.txt
echo "Mais uma linha" >> arquivo.txt  # Adiciona ao final

# Criar arquivo com cat (útil para múltiplas linhas)
cat > arquivo.txt
Linha 1
Linha 2
Ctrl+D          # Salva e sai

# Editar arquivo (nano é o mais simples)
nano arquivo.txt      # Abre o editor nano
vim arquivo.txt       # Abre o editor vim

# 📂 MANIPULAR PASTAS
mkdir nova_pasta              # Cria uma pasta
mkdir -p pasta/subpasta       # Cria pastas aninhadas
mkdir -p projeto/{src,bin,docs} # Cria múltiplas pastas de uma vez

# 📋 COPIAR ARQUIVOS
cp arquivo.txt backup.txt     # Copia arquivo
cp -r pasta/ backup/          # Copia pasta inteira (recursivo)
cp -r pasta/ backup/          # Copia pasta e conteúdo
cp -i arquivo.txt backup/     # Confirma antes de sobrescrever
cp -u arquivo.txt backup/     # Só copia se for mais novo

# ✏️ MOVER E RENOMEAR
mv arquivo.txt nova_pasta/    # Move arquivo para pasta
mv arquivo.txt novo_nome.txt  # Renomeia o arquivo
mv pasta/ nova_pasta/         # Renomeia pasta

# 🗑️ DELETAR
rm arquivo.txt                # Deleta arquivo (PERMANENTE!)
rm -i arquivo.txt             # Confirma antes de deletar
rm -r pasta/                  # Deleta pasta e todo conteúdo
rm -rf pasta/                 # Deleta FORÇADO (cuidado!)
rm -rf *                      # Deleta TUDO na pasta atual (PERIGOSO!)

# 📖 VER CONTEÚDO
cat arquivo.txt               # Mostra conteúdo do arquivo
less arquivo.txt              # Mostra com paginação (setas para navegar)
head arquivo.txt              # Mostra as primeiras 10 linhas
head -n 20 arquivo.txt        # Mostra as primeiras 20 linhas
tail arquivo.txt              # Mostra as últimas 10 linhas
tail -n 20 arquivo.txt        # Mostra as últimas 20 linhas
tail -f arquivo.txt           # Segue o arquivo em tempo real (logs)
tac arquivo.txt               # Mostra o arquivo de trás para frente

# 🔍 ENCONTRAR ARQUIVOS
find . -name "*.txt"          # Busca arquivos .txt na pasta atual
find /home -type f -size +100M   # Busca arquivos maiores que 100MB
find . -type f -mtime -7      # Arquivos modificados nos últimos 7 dias
find . -type f -exec rm {} \;  # Remove todos os arquivos encontrados`,
                        dica: "⚠️ CUIDADO: rm deleta PERMANENTEMENTE! SEMPRE confirme antes de deletar. Use 'rm -i' para confirmar."
                    }
                },
                {
                    id: "permissoes",
                    nome: "Permissões e Donos (TUDO)",
                    icone: "🔒",
                    descricao: "chmod, chown, chmod -R, umask e controle TOTAL",
                    conteudo: {
                        explicacao: "No Linux, cada arquivo tem dono e permissões. Domine chmod, chown e chmod -R para controle TOTAL do sistema.",
                        codigo: `# 📋 ENTENDENDO PERMISSÕES
# ls -l mostra: -rw-r--r-- 1 usuario grupo 1024 Jan 01 12:00 arquivo.txt
#         ↑         ↑       ↑      ↑
#     tipo    permissões  dono  grupo

# 🔐 PERMISSÕES (r=ler, w=escrever, x=executar)
# rwx = 7 (leitura + escrita + execução)
# rw- = 6 (leitura + escrita)
# r-x = 5 (leitura + execução)
# r-- = 4 (apenas leitura)

# 🔧 CHMOD - ALTERAR PERMISSÕES
chmod 755 script.sh           # Dono: tudo | Grupo: ler/exec | Outros: ler/exec
chmod 644 arquivo.txt         # Dono: ler/escrever | Grupo: ler | Outros: ler
chmod +x script.sh            # Torna executável (adiciona x)
chmod -x script.sh            # Remove execução
chmod u+x script.sh           # Adiciona execução SÓ para o dono
chmod g+w arquivo.txt         # Adiciona escrita para o grupo
chmod o-r arquivo.txt         # Remove leitura para outros

# 🔥 CHMOD -R (RECURSIVO) - MUDA TUDO DE UMA VEZ!
# ATENÇÃO: Isso muda TODOS os arquivos em TODAS as pastas!
chmod -R 755 pasta/           # Muda TODA a pasta para 755
chmod -R 777 pasta/           # Muda TODA a pasta para 777 (⚠️ PERIGOSO!)
chmod -R +x scripts/          # Torna TODOS os scripts executáveis
chmod -R 600 config/          # Só dono pode ler/escrever
chmod -R 644 *.txt            # Muda TODOS os .txt para 644

# ⚠️ CUIDADO COM 777! (PERIGOSO!)
# 777 = TODO MUNDO pode ler, escrever e executar
# NUNCA use 777 em produção ou em pastas sensíveis!
# Use 755 para pastas, 644 para arquivos

# 📊 CHMOD COM NOTAÇÃO SIMBÓLICA (MAIS PRECISO)
chmod u+x arquivo.txt        # Adiciona execução para o dono
chmod g-w arquivo.txt        # Remove escrita do grupo
chmod o+r arquivo.txt        # Adiciona leitura para outros
chmod u+rwx,g+rx,o-rwx script.sh  # Combinação avançada
chmod a+x arquivo.txt        # Adiciona execução para TODOS

# 👤 CHOWN - ALTERAR DONO
sudo chown usuario arquivo.txt      # Muda dono
sudo chown usuario:grupo arquivo.txt # Muda dono e grupo
sudo chown -R usuario:grupo pasta/  # Recursivo (TODA a pasta)
sudo chown -R usuario:usuarios *    # Muda dono de TUDO na pasta atual

# 🔒 UMASK - PERMISSÕES PADRÃO
umask                         # Mostra umask atual (ex: 0022)
umask 022                     # Define umask (padrão: 755 para pastas, 644 para arquivos)
umask 077                     # Mais restrito (700 para pastas, 600 para arquivos)
umask 002                     # Permissões mais permissivas

# 🎯 COMANDOS AVANÇADOS DE PERMISSÃO
# Ver permissões detalhadas
stat arquivo.txt              # Mostra todas as informações
ls -lZ                        # Mostra contexto SELinux
getfacl arquivo.txt           # Mostra ACLs (permissões estendidas)
setfacl -m u:joao:rw arquivo.txt # Dá permissão específica para um usuário

# 📂 PERMISSÕES ESPECIAIS
chmod +t /tmp                 # Sticky bit (só dono deleta)
chmod u+s programa            # SETUID (roda com permissões do dono)
chmod g+s pasta/              # SETGID (herda grupo da pasta)

# 🔥 EXEMPLOS PRÁTICOS DO DIA A DIA
# Corrigir permissões de um projeto web
chmod -R 755 projeto/
chmod -R 644 projeto/*.html
chmod -R 755 projeto/*.sh
chmod -R 777 projeto/uploads/  # ⚠️ Só se for necessário!

# Tornar todos os scripts executáveis
chmod +x *.sh
chmod +x scripts/*.py

# Corrigir permissões da pasta home
chmod -R 755 ~/Documentos/
chmod 700 ~/.ssh/             # Só o dono acessa a pasta SSH`,
                        dica: "🔥 chmod -R é PODEROSO mas PERIGOSO! Use 755 para pastas, 644 para arquivos. NUNCA use 777 em produção!"
                    }
                },
                {
                    id: "comandos-uteis",
                    nome: "Comandos Utilitários",
                    icone: "🛠️",
                    descricao: "grep, find, ps, du, df, history e mais",
                    conteudo: {
                        explicacao: "Comandos que facilitam o dia a dia no terminal - buscas, processos, espaço e histórico.",
                        codigo: `# 🔍 BUSCAR TEXTO EM ARQUIVOS (grep)
grep "palavra" arquivo.txt       # Busca palavra no arquivo
grep -r "erro" /var/log/         # Busca recursivamente em pastas
grep -i "palavra" arquivo.txt    # Ignora maiúsculas/minúsculas
grep -n "palavra" arquivo.txt    # Mostra o número da linha
grep -c "palavra" arquivo.txt    # Conta quantas ocorrências
grep -v "palavra" arquivo.txt    # Mostra linhas que NÃO contêm
grep -E "erro|warning" log.txt   # Busca múltiplos padrões (REGEX)
ps aux | grep "nginx"            # Procura processos do nginx

# 📂 ENCONTRAR ARQUIVOS (find)
find . -name "*.txt"             # Busca arquivos .txt na pasta atual
find /home -type f -size +100M   # Busca arquivos maiores que 100MB
find . -type f -mtime -7         # Arquivos modificados nos últimos 7 dias
find . -type f -exec chmod 644 {} \\;  # Muda permissões de todos os arquivos
find . -type d -exec chmod 755 {} \\;  # Muda permissões de todas as pastas
find . -name "*.log" -delete     # Deleta todos os arquivos .log

# 📊 PROCESSOS (ps)
ps aux                           # Lista todos os processos
ps aux | grep "java"             # Lista processos Java
ps aux --sort=-%mem | head -10   # Top 10 processos que mais usam memória
ps aux --sort=-%cpu | head -10   # Top 10 processos que mais usam CPU
htop                             # Monitor interativo (mais bonito que top)
top                              # Monitor de processos (q para sair)

# 💾 ESPAÇO EM DISCO (df, du)
df -h                            # Espaço disponível nos discos
df -h /home                      # Espaço disponível na partição /home
du -sh pasta/                    # Tamanho total de uma pasta
du -h --max-depth=1              # Tamanho das pastas no nível atual
du -sh *                         # Tamanho de todos os itens na pasta atual
du -h --max-depth=1 | sort -hr   # Ordena por tamanho (maior primeiro)

# 📜 HISTÓRICO
history                          # Mostra comandos usados
history | grep "ls"              # Busca comandos com 'ls'
!100                             # Executa o comando número 100
!!                               # Repete o último comando
sudo !!                          # Repete o último comando com sudo
!ls                              # Executa o último comando que começou com 'ls'

# ⏱️ TEMPO E SISTEMA
date                             # Data e hora atual
date "+%Y-%m-%d %H:%M:%S"       # Formato personalizado
uptime                           # Tempo que o sistema está ligado
whoami                           # Nome do usuário atual
hostname                         # Nome do computador
uname -a                         # Informações do kernel
neofetch                         # Informações bonitas do sistema (instale se quiser)

# 🔗 RSYNC - SINCRONIZAÇÃO AVANÇADA
rsync -av pasta/ backup/         # Sincroniza pastas (copia diferenças)
rsync -av --delete pasta/ backup/ # Sincroniza e deleta arquivos removidos
rsync -avz usuario@servidor:/pasta/ local/  # Sincroniza via SSH

# 📦 TAR - COMPACTAR/EXTRAIR
tar -czf backup.tar.gz pasta/    # Compacta em .tar.gz
tar -xzf backup.tar.gz           # Extrai .tar.gz
tar -cjf backup.tar.bz2 pasta/   # Compacta em .tar.bz2
tar -xvf backup.tar              # Extrai .tar
tar -tzf backup.tar.gz           # Lista conteúdo sem extrair

# 🔧 XARGS - EXECUTAR COMANDOS EM MÚLTIPLOS ARQUIVOS
find . -name "*.txt" | xargs rm  # Remove todos os .txt encontrados
find . -name "*.log" | xargs gzip # Compacta todos os .log
cat arquivos.txt | xargs -I {} cp {} backup/  # Copia arquivos da lista`,
                        dica: "💡 Use 'grep' combinado com 'ps' para encontrar processos. Use 'history' para reutilizar comandos. 'rsync' é INCRÍVEL para backups!"
                    }
                },
                {
                    id: "redirecionamento",
                    nome: "Redirecionamento e Pipes",
                    icone: "🔀",
                    descricao: ">, >>, |, < e encadeamento de comandos",
                    conteudo: {
                        explicacao: "Redirecionamento permite enviar saída de comandos para arquivos ou conectar comandos entre si.",
                        codigo: `# 📤 SAÍDA PARA ARQUIVO
echo "texto" > arquivo.txt     # SOBRESCREVE o conteúdo
echo "mais texto" >> arquivo.txt # ADICIONA ao final do arquivo
ls -la > lista.txt             # Salva lista de arquivos

# 📥 ENTRADA DE ARQUIVO
sort < arquivo.txt              # Lê do arquivo e ordena
wc -l < arquivo.txt             # Conta linhas do arquivo

# 🔗 PIPES (encadear comandos) - O PODER DO LINUX!
ls -la | grep ".txt"            # Lista e filtra arquivos .txt
cat arquivo.txt | sort | uniq   # Mostra, ordena e remove duplicados
ps aux | grep "nginx" | wc -l   # Conta processos do nginx
cat log.txt | grep "ERROR" | awk '{print $3}'  # Pega coluna específica

# 📋 COMBINAÇÕES PODEROSAS
# Buscar erro em logs e salvar em arquivo
grep "ERROR" /var/log/syslog > erros.txt

# Contar arquivos .js em um projeto
find . -name "*.js" | wc -l

# Ver processos e ordenar por uso de memória
ps aux --sort=-%mem | head -10

# Comandos condicionais (&& e ||)
mkdir pasta && cd pasta         # Cria pasta E entra (se criar com sucesso)
cd pasta || echo "Falhou"       # Se falhar, mostra erro
comando1 && comando2            # Executa comando2 só se comando1 deu certo
comando1 || comando2            # Executa comando2 só se comando1 falhou

# ⚡ REDIRECIONAMENTO DE ERRO
comando 2> erro.txt             # Redireciona ERROS para arquivo
comando > saida.txt 2> erro.txt # Saída e erro em arquivos diferentes
comando > /dev/null 2>&1        # Joga TUDO fora (silencia)

# 🔥 EXEMPLOS PRÁTICOS
# Contar quantas vezes "ERROR" aparece
grep -c "ERROR" log.txt

# Ver logs e seguir
tail -f /var/log/syslog | grep "ERROR"

# Filtrar e contar IPs únicos em log
cat access.log | awk '{print $1}' | sort | uniq -c | sort -nr

# Pipeline completo: achar erros, contar, mostrar top 10
grep -h "ERROR" *.log | awk '{print $5}' | sort | uniq -c | sort -nr | head -10`,
                        dica: "⚡ '|' é seu melhor amigo! Conecte comandos para criar pipelines poderosos. '>' sobrescreve, '>>' adiciona."
                    }
                }
            ]
        },
        {
            id: "intermediario",
            nome: "🐧 COMANDOS INTERMEDIÁRIOS",
            icone: "⚙️",
            descricao: "Processos, permissões avançadas, cron e rede",
            progresso: 0,
            subCards: [
                {
                    id: "processos",
                    nome: "Gerenciamento de Processos",
                    icone: "⚡",
                    descricao: "kill, bg, fg, jobs e monitoramento",
                    conteudo: {
                        explicacao: "Controle de processos em execução no sistema.",
                        codigo: `# 🔍 VER PROCESSOS
ps aux                          # Todos os processos
ps aux | grep "firefox"         # Buscar processo específico
pgrep firefox                   # Mostra PID do processo
pidof firefox                   # Mostra PID (mais direto)

# ⏹️ FINALIZAR PROCESSOS (kill)
kill 1234                       # Finaliza o processo PID 1234
kill -9 1234                    # Finaliza FORÇADO (SIGKILL)
kill -15 1234                   # Finaliza gentilmente (SIGTERM)
kill -2 1234                    # Ctrl+C (SIGINT)
kill -1 1234                    # Recarrega configuração (SIGHUP)
pkill firefox                   # Mata todos os processos com "firefox"
killall firefox                 # Mata todos com exato nome
pkill -f "python script.py"     # Mata por nome completo

# ⏰ EXECUTAR EM SEGUNDO PLANO
comando &                       # Executa em segundo plano
nohup comando &                 # Executa em segundo plano (continua se sair)
jobs                            # Mostra jobs em segundo plano
fg %1                          # Traz job 1 para primeiro plano
bg %1                          # Coloca job 1 em segundo plano
disown %1                      # Remove job da lista (não para execução)

# 📊 MONITORAMENTO
top                             # Monitor interativo (pressione q para sair)
htop                            # Versão melhorada (instale com apt install htop)
watch -n 1 "ls -la"            # Executa comando a cada 1 segundo
watch -n 5 "ps aux | grep nginx" # Monitora nginx a cada 5 segundos

# 🔄 PRIORIDADES (nice/renice)
nice -n 10 comando              # Executa com prioridade baixa (-20 a 19)
renice -n 5 -p 1234            # Muda prioridade de processo rodando

# EXEMPLO PRÁTICO
# Iniciar servidor em segundo plano
python3 -m http.server 8000 &
jobs                            # Vai aparecer [1]  + running
fg %1                          # Traz para frente
# Ctrl+C para parar

# Matar processo que travou a porta
sudo lsof -i :8080             # Descobre PID na porta 8080
kill -9 PID                    # Mata o processo`,
                        dica: "🔥 Use 'kill -9' só quando necessário (mata imediatamente). Prefira 'kill' sem número primeiro. 'nohup' mantém processo rodando mesmo se você sair."
                    }
                },
                {
                    id: "permissoes-avancadas",
                    nome: "Permissões Avançadas",
                    icone: "🔐",
                    descricao: "sudo, sticky bit, SETUID, ACLs e mais",
                    conteudo: {
                        explicacao: "Controle de acesso avançado e configurações especiais de permissões.",
                        codigo: `# 🔑 SUDO (executar como superusuário)
sudo apt update                 # Atualiza pacotes como root
sudo -i                         # Torna-se root (cuidado!)
sudo su -                       # Login como root
sudo !!                         # Repete último comando com sudo
sudo -l                         # Ver quais comandos você pode rodar com sudo

# 🏷️ STICKY BIT (arquivos só podem ser deletados pelo dono)
chmod +t /tmp                   # Aplica sticky bit no /tmp
# ls -ld /tmp                   # drwxrwxrwt (o 't' indica sticky bit)

# 🔓 SETUID (executar com permissões do dono)
chmod u+s programa              # Programa roda com permissões do dono
# -rwsr-xr-x (o 's' indica SETUID)
# Exemplo clássico: /usr/bin/passwd

# 🔓 SETGID (herdar grupo da pasta)
chmod g+s pasta/                # Novos arquivos herdam grupo da pasta
# drwxr-s--- (o 's' indica SETGID)

# 📋 ACLs (controle granular - mais detalhado)
getfacl arquivo.txt             # Ver permissões ACL
setfacl -m u:usuario:rw arquivo.txt  # Dá permissão para um usuário específico
setfacl -m g:grupo:r arquivo.txt    # Dá permissão para um grupo
setfacl -x u:usuario arquivo.txt    # Remove permissão do usuário
setfacl -b arquivo.txt              # Remove todas as ACLs

# 🔒 CHATTR (atributos imutáveis) - BLOQUEAR ARQUIVOS
sudo chattr +i arquivo.txt      # Torna arquivo IMUTÁVEL (não pode ser alterado)
sudo chattr -i arquivo.txt      # Remove imutabilidade
sudo chattr +a arquivo.txt      # Só permite adicionar (append-only)
lsattr arquivo.txt              # Ver atributos

# EXEMPLO PRÁTICO
# Dar permissão para um usuário específico em um arquivo
sudo setfacl -m u:joao:rw /etc/config.txt
# Verificar
getfacl /etc/config.txt

# Proteger arquivo crítico
sudo chattr +i /etc/hosts
# Agora ninguém pode alterar (nem root sem remover)`,
                        dica: "⚡ Sticky bit é útil para pastas compartilhadas (/tmp). SETUID é perigoso - use com cuidado! 'chattr +i' é ótimo para proteger arquivos."
                    }
                },
                {
                    id: "cron",
                    nome: "Agendamento (Cron)",
                    icone: "⏰",
                    descricao: "cron, at, jobs agendados e automação",
                    conteudo: {
                        explicacao: "Cron permite agendar tarefas para executar automaticamente em horários específicos.",
                        codigo: `# 📅 CRONTAB (agendar tarefas)
crontab -l                     # Lista seus jobs agendados
crontab -e                     # Edita seus jobs (escolha o editor)
crontab -r                     # Remove todos os jobs

# 📝 FORMATO DO CRON
# ┌───────── minuto (0-59)
# │ ┌─────── hora (0-23)
# │ │ ┌───── dia do mês (1-31)
# │ │ │ ┌─── mês (1-12)
# │ │ │ │ ┌─ dia da semana (0-6, domingo=0 ou 7)
# │ │ │ │ │
# * * * * * comando

# EXEMPLOS DE CRON
# Rodar todo dia às 2h30
30 2 * * * /home/scripts/backup.sh

# Rodar toda segunda-feira às 9h
0 9 * * 1 /home/scripts/report.sh

# Rodar a cada 5 minutos
*/5 * * * * /home/scripts/check.sh

# Rodar todo dia 1 do mês às 3h
0 3 1 * * /home/scripts/mensal.sh

# Rodar de segunda a sexta às 18h
0 18 * * 1-5 /home/scripts/fim_expediente.sh

# Rodar a cada hora
0 * * * * /home/scripts/horario.sh

# Rodar a cada 10 minutos das 9h às 17h
*/10 9-17 * * * /home/scripts/periodico.sh

# ⚡ COMANDOS ÚTEIS
# Rodar comando uma vez no futuro
echo "ls -la" | at 14:30        # Executa às 14:30 hoje
echo "backup.sh" | at now + 1 hour  # Executa daqui 1 hora
atq                            # Lista jobs agendados (at)
atrm 5                         # Remove job 5

# 📝 ANACRON (se sistema desligado)
# Roda jobs que foram perdidos quando o sistema estava desligado
anacron -n                     # Executa agora (ignora horário)

# 🔄 EXEMPLO PRÁTICO
# Criar backup diário com cron
# 1. Edite o crontab: crontab -e
# 2. Adicione:
# 0 3 * * * tar -czf /backups/backup_$(date +%Y%m%d).tar.gz /home/usuario/documentos

# Script de backup completo
#!/bin/bash
DATA=$(date +%Y%m%d_%H%M%S)
mkdir -p /backups
tar -czf /backups/backup_$DATA.tar.gz /home/usuario/important/
echo "Backup criado: backup_$DATA.tar.gz" >> /var/log/backup.log`,
                        dica: "💡 Teste comandos manualmente antes de colocar no cron. Use caminhos ABSOLUTOS (ex: /home/usuario/script.sh)."
                    }
                },
                {
                    id: "rede",
                    nome: "Comandos de Rede (TUDO)",
                    icone: "🌐",
                    descricao: "ping, ssh, curl, wget, netstat, ip, ss e mais",
                    conteudo: {
                        explicacao: "Comandos para testar e configurar conexões de rede.",
                        codigo: `# 🌐 TESTAR CONEXÃO (ping)
ping google.com                 # Testa conexão (Ctrl+C para parar)
ping -c 4 google.com            # Envia 4 pacotes
ping -i 2 google.com            # Envia a cada 2 segundos

# 📡 TRANSFERIR ARQUIVOS
wget https://exemplo.com/arquivo.zip   # Baixa arquivo
wget -O meu_arquivo.zip https://exemplo.com/arquivo.zip # Baixa com outro nome
wget -c https://exemplo.com/arquivo.zip # Resume download interrompido
curl -O https://exemplo.com/arquivo.zip # Outra forma de baixar
curl -I https://google.com     # Mostra apenas cabeçalhos HTTP

# 🔗 SSH (acesso remoto)
ssh usuario@192.168.1.100       # Conecta a outro computador
ssh -p 2222 usuario@host        # Porta personalizada
ssh -i chave.pem usuario@host   # Usa chave SSH
ssh usuario@host "ls -la"       # Executa comando remoto
ssh -f -N -L 8080:localhost:80 usuario@host # Túnel SSH

# 📂 SCP (copiar via SSH)
scp arquivo.txt usuario@host:/home/ # Copia arquivo via SSH
scp usuario@host:/home/arquivo.txt . # Baixa arquivo do servidor
scp -r pasta/ usuario@host:/home/   # Copia pasta recursiva

# 📊 VER CONEXÕES E PORTAS
netstat -tulpn                  # Portas abertas e serviços
netstat -tulpn | grep LISTEN    # Só portas ouvindo
ss -tulpn                       # Versão mais moderna do netstat
ss -tulpn | grep 80             # Ver porta específica
lsof -i :8080                   # Ver processo na porta 8080
lsof -i -n | grep LISTEN        # Todas as portas ouvindo

# 🧭 INFORMACÕES DE REDE
ip addr                         # Informações de rede (IPs)
ip link                         # Interfaces de rede
ifconfig                        # Similar ao ip addr (mas antigo)
ip route                        # Rota de rede
route -n                        # Tabela de roteamento (antigo)

# 🧠 RESOLVER DNS
nslookup google.com             # Descobre IP do domínio
dig google.com                  # Informações detalhadas de DNS
dig +short google.com           # Só o IP
host google.com                 # Simples e direto

# 🔥 EXEMPLOS PRÁTICOS
# Baixar e extrair arquivo
wget https://nodejs.org/dist/v18.0.0/node-v18.0.0-linux-x64.tar.xz
tar -xf node-v18.0.0-linux-x64.tar.xz

# Conectar ao servidor e executar comando
ssh usuario@servidor "ls -la /var/log"

# Verificar porta ocupada e matar processo
sudo lsof -i :8080
kill -9 PID

# Túnel SSH para acessar serviço local
ssh -L 8080:localhost:80 usuario@servidor
# Agora http://localhost:8080 mostra o serviço remoto`,
                        dica: "🔥 Use 'ssh' para acessar servidores remotos. 'scp' é excelente para transferir arquivos via SSH. 'lsof -i' é ESSENCIAL para debug de portas."
                    }
                }
            ]
        },
        {
            id: "avancado",
            nome: "🐧 COMANDOS AVANÇADOS",
            icone: "⚡",
            descricao: "Scripts, sed, awk, grep avançado, screen/tmux e automação",
            progresso: 0,
            subCards: [
                {
                    id: "scripts",
                    nome: "Scripts em Bash (TUDO)",
                    icone: "📜",
                    descricao: "Criar, executar, debugar e automação TOTAL",
                    conteudo: {
                        explicacao: "Scripts Bash automatizam tarefas repetitivas. São arquivos com comandos executáveis.",
                        codigo: `#!/bin/bash
# 🤖 SCRIPT BÁSICO - meu_script.sh

# Variáveis
NOME="Hamilton"
PASTA="/home/usuario"
NUMERO=10
DATA=$(date +%Y%m%d)

# Print com variável
echo "Olá, $NOME!"
echo "Hoje é $DATA"

# Comandos condicionais
if [ -d "$PASTA" ]; then
    echo "Pasta existe: $PASTA"
else
    echo "Pasta não encontrada"
fi

# If com números
if [ $NUMERO -gt 5 ]; then
    echo "$NUMERO é maior que 5"
fi

# Comparadores:
# -eq (igual), -ne (diferente), -gt (maior que), -lt (menor que)
# -ge (maior ou igual), -le (menor ou igual)
# -z (vazio), -n (não vazio)

# Loops
for i in {1..5}; do
    echo "Número: $i"
done

# Loop com lista
for nome in Hamilton Leclerc Sainz; do
    echo "Piloto: $nome"
done

# While loop
contador=0
while [ $contador -lt 5 ]; do
    echo "Contador: $contador"
    ((contador++))
done

# Funções
function saudacao() {
    echo "Olá, $1!"
}
saudacao "Piloto"

# Função com retorno
function soma() {
    return $(( $1 + $2 ))
}
soma 10 20
echo "Resultado: $?"  # $? captura o retorno

# 📝 ARGUMENTOS DO SCRIPT
echo "Nome do script: $0"
echo "Primeiro argumento: $1"
echo "Segundo argumento: $2"
echo "Todos os argumentos: $@"
echo "Número de argumentos: $#"

# 📝 COMO USAR
# 1. Crie o arquivo: nano meu_script.sh
# 2. Dê permissão: chmod +x meu_script.sh
# 3. Execute: ./meu_script.sh
# 4. Com argumentos: ./meu_script.sh arg1 arg2

# 🔧 DEBUG
bash -x meu_script.sh           # Executa mostrando cada comando
set -x                          # Ativa debug dentro do script
set +x                          # Desativa debug

# 📋 EXEMPLO: Backup automático
#!/bin/bash
DATA=$(date +%Y%m%d_%H%M%S)
PASTA_BACKUP="/backups"
ARQUIVO_BACKUP="backup_$DATA.tar.gz"

mkdir -p $PASTA_BACKUP
tar -czf $PASTA_BACKUP/$ARQUIVO_BACKUP /home/usuario/documentos

if [ $? -eq 0 ]; then
    echo "$(date): Backup criado: $ARQUIVO_BACKUP" >> /var/log/backup.log
else
    echo "$(date): ERRO no backup!" >> /var/log/backup.log
fi

# EXEMPLO: Script para monitorar serviço
#!/bin/bash
SERVICO="nginx"
if systemctl is-active --quiet $SERVICO; then
    echo "$SERVICO está rodando"
else
    echo "$SERVICO PARADO! Reiniciando..."
    sudo systemctl restart $SERVICO
fi`,
                        dica: "💡 SEMPRE comece com #!/bin/bash. Use 'chmod +x' para tornar executável. Teste com 'bash -x' para debug."
                    }
                },
                {
                    id: "sed-awk",
                    nome: "Sed e Awk (PODEROSOS)",
                    icone: "🔧",
                    descricao: "Processamento avançado de texto e transformação",
                    conteudo: {
                        explicacao: "Sed e Awk são ferramentas PODEROSAS para manipular e transformar texto no terminal.",
                        codigo: `# 📝 SED (Stream Editor) - substituir texto

# Substituir primeira ocorrência
sed 's/palavra/nova/' arquivo.txt

# Substituir TODAS as ocorrências
sed 's/palavra/nova/g' arquivo.txt

# Substituir e salvar no arquivo
sed -i 's/antigo/novo/g' arquivo.txt

# Deletar linhas com padrão
sed '/erro/d' arquivo.txt

# Deletar linhas vazias
sed '/^$/d' arquivo.txt

# Mostrar apenas linhas com padrão
sed -n '/erro/p' arquivo.txt

# Substituir com expressão regular
sed 's/[0-9]/X/g' arquivo.txt   # Substitui todos os números por X

# EXEMPLOS PRÁTICOS
# Substituir emails
sed 's/usuario@antigo.com/usuario@novo.com/g' contatos.txt

# Substituir e fazer backup
sed -i.bak 's/antigo/novo/g' arquivo.txt

# Remover comentários (linhas que começam com #)
sed '/^#/d' arquivo.txt

# 📊 AWK - processamento de colunas
# Imprimir coluna 1 e 3
awk '{print $1, $3}' arquivo.txt

# Filtrar linhas com padrão
awk '/erro/ {print}' log.txt

# Soma de valores na coluna 2
awk '{soma += $2} END {print soma}' dados.txt

# Média de uma coluna
awk '{total += $3; count++} END {print total/count}' dados.txt

# Imprimir linhas com coluna 2 > 100
awk '$2 > 100 {print}' dados.txt

# Formatar saída
awk '{printf "%-10s %5d\\n", $1, $2}' dados.txt

# EXEMPLOS PRÁTICOS COM AWK
# Ver uso de CPU por processo
ps aux | awk '{print $3, $11}' | sort -rn | head -10

# Ver uso de memória por processo
ps aux | awk '{print $4, $11}' | sort -rn | head -10

# Calcular média de valores em arquivo
awk '{total += $3; count++} END {print "Média: " total/count}' dados.txt

# Extrair IPs de um log
awk '{print $1}' access.log | sort | uniq -c | sort -nr | head -10

# 🔥 COMBINAÇÃO SED + AWK + GREP (PODER TOTAL)
# Extrair e transformar dados
cat log.txt | grep "ERROR" | awk '{print $1, $5}' | sed 's/ERROR/ERRO/g'

# Processar CSV
awk -F',' '{print $1, $2}' arquivo.csv`,
                        dica: "🔥 Sed = substituir texto. Awk = processar colunas. Juntos são uma dupla PODEROSA para manipulação de dados!"
                    }
                },
                {
                    id: "grep-avancado",
                    nome: "Grep Avançado",
                    icone: "🔍",
                    descricao: "Expressões regulares e busca poderosa",
                    conteudo: {
                        explicacao: "Grep com expressões regulares permite buscas precisas e complexas em arquivos.",
                        codigo: `# 📋 GREP BÁSICO
grep "texto" arquivo.txt          # Busca texto
grep -i "texto" arquivo.txt       # Ignora maiúsculas/minúsculas
grep -r "texto" /pasta/           # Busca recursiva
grep -v "texto" arquivo.txt       # Linhas que NÃO contêm
grep -n "texto" arquivo.txt       # Mostra número da linha
grep -c "texto" arquivo.txt       # Conta ocorrências
grep -l "texto" *.txt             # Só mostra nomes de arquivos
grep -L "texto" *.txt             # Arquivos que NÃO contêm

# 🎯 EXPRESSÕES REGULARES (REGEX) - PODER ABSOLUTO!
# ^ = início da linha
# $ = fim da linha
# . = qualquer caractere
# * = 0 ou mais
# + = 1 ou mais
# ? = 0 ou 1
# [] = conjunto de caracteres
# [^] = NEGAÇÃO
# | = ou
# \\ = escapa caractere especial
# () = agrupamento

# EXEMPLOS COM REGEX
# Linhas que começam com "ERROR"
grep "^ERROR" log.txt

# Linhas que terminam com .txt
grep "\\.txt$" arquivos.txt

# Números (0-9)
grep "[0-9]" arquivo.txt

# Letras maiúsculas
grep "[A-Z]" arquivo.txt

# Qualquer caractere exceto vogais
grep "[^aeiou]" arquivo.txt

# Emails
grep -E "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" contatos.txt

# IPs
grep -E "([0-9]{1,3}\.){3}[0-9]{1,3}" log.txt

# Datas (YYYY-MM-DD)
grep -E "[0-9]{4}-[0-9]{2}-[0-9]{2}" log.txt

# URLs
grep -E "https?://[a-zA-Z0-9./?=_-]*" texto.txt

# COMBINAÇÕES PODEROSAS
# Buscar e mostrar contexto
grep -C 3 "erro" log.txt         # 3 linhas antes e depois
grep -A 2 "erro" log.txt         # 2 linhas depois
grep -B 2 "erro" log.txt         # 2 linhas antes

# Buscar com "ou"
grep -E "erro|warning" log.txt

# Buscar arquivos que contêm e não contêm
grep -l "erro" *.log | xargs grep -v "warning"

# 🎯 GREP + FIND (busca avançada)
# Buscar em arquivos .txt e .log
find . -name "*.txt" -o -name "*.log" | xargs grep "erro"

# Buscar ignorando binários
grep -r --binary-files=without-match "texto" /pasta/

# 🚀 EXEMPLOS PRÁTICOS
# Buscar senhas em logs (MUITO CUIDADO!)
grep -r "password" /var/log/

# Buscar IPs em logs de acesso
grep -oE "([0-9]{1,3}\.){3}[0-9]{1,3}" access.log

# Buscar emails em arquivos de configuração
grep -rE "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" /etc/`,
                        dica: "🔥 Expressões regulares parecem complicadas, mas com prática são INCRIVELMENTE poderosas! Use -E para regex estendido."
                    }
                },
                {
                    id: "pacotes",
                    nome: "Gerenciamento de Pacotes",
                    icone: "📦",
                    descricao: "apt, yum, dnf, snaps e flatpaks",
                    conteudo: {
                        explicacao: "Instalar, atualizar e remover programas no Linux usando gerenciadores de pacotes.",
                        codigo: `# 📦 DEBIAN/UBUNTU (APT)
sudo apt update                  # Atualiza lista de pacotes
sudo apt upgrade                 # Atualiza todos os pacotes
sudo apt full-upgrade            # Atualiza com resolução de dependências
sudo apt install nginx           # Instala um pacote
sudo apt install -y nginx        # Instala sem confirmação
sudo apt remove nginx            # Remove um pacote
sudo apt purge nginx             # Remove pacote E configurações
sudo apt autoremove              # Remove dependências não usadas
sudo apt search "nodejs"         # Busca pacotes
sudo apt show nginx              # Mostra informações do pacote
sudo apt list --installed        # Lista pacotes instalados
sudo apt list --upgradable       # Lista pacotes com atualização

# 📦 RED HAT/FEDORA (DNF/YUM)
sudo dnf update                  # Atualiza pacotes
sudo dnf install nginx           # Instala pacote
sudo dnf remove nginx            # Remove pacote
sudo dnf search nodejs           # Busca pacotes
sudo dnf list installed          # Lista pacotes instalados

# 📦 SNAP (Universal)
sudo snap install nodejs         # Instala snap
sudo snap install --classic nodejs # Instala com permissões clássicas
sudo snap remove nodejs          # Remove snap
snap list                        # Lista snaps instalados
snap find firefox                # Busca snaps
snap refresh                     # Atualiza todos os snaps

# 📦 FLATPAK
flatpak install flathub firefox  # Instala flatpak
flatpak list                     # Lista flatpaks
flatpak remove firefox           # Remove flatpak
flatpak search firefox           # Busca flatpaks

# 🔍 PESQUISAR PACOTES
apt-cache search "editor"        # Busca no APT
dpkg -l | grep "nginx"           # Lista pacotes instalados com filtro
dpkg -L nginx                    # Lista arquivos de um pacote

# 📦 PACOTES .DEB (Ubuntu/Debian)
sudo dpkg -i pacote.deb          # Instala .deb
sudo dpkg -r pacote              # Remove pacote .deb
sudo dpkg -l                     # Lista todos os pacotes

# 🔥 EXEMPLO PRÁTICO
# Instalar Node.js no Ubuntu
sudo apt update
sudo apt install nodejs npm
node -v                         # Verifica versão

# Instalar Docker
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker $USER`,
                        dica: "💡 Use 'apt' no Ubuntu/Debian. 'dnf' no Fedora. SEMPRE faça 'apt update' antes de instalar."
                    }
                },
                {
                    id: "screen-tmux",
                    nome: "Screen e Tmux (Multitarefa)",
                    icone: "🖥️",
                    descricao: "Gerenciar múltiplas sessões terminais",
                    conteudo: {
                        explicacao: "Screen e Tmux permitem ter múltiplas sessões terminais em uma só, desconectar e reconectar sem perder o que estava rodando.",
                        codigo: `# 🖥️ SCREEN - COMANDOS BÁSICOS
screen                       # Inicia uma nova sessão
screen -S nome               # Inicia com nome
screen -ls                   # Lista sessões ativas
screen -r                    # Reconecta à última sessão
screen -r nome               # Reconecta à sessão com nome
screen -X -S nome quit       # Mata sessão

# 📋 DENTRO DO SCREEN (Ctrl+A é o prefixo)
Ctrl+A c                     # Cria nova janela
Ctrl+A n                     # Próxima janela
Ctrl+A p                     # Janela anterior
Ctrl+A d                     # Desconecta (detach)
Ctrl+A "                     # Lista janelas
Ctrl+A A                     # Renomeia janela
Ctrl+A |                     # Divide tela vertical
Ctrl+A S                     # Divide tela horizontal
Ctrl+A Tab                   # Navega entre splits
Ctrl+A Q                     # Remove todos os splits

# 🖥️ TMUX - COMANDOS BÁSICOS
tmux                         # Inicia sessão
tmux new -s nome             # Inicia com nome
tmux ls                      # Lista sessões
tmux attach -t nome          # Reconecta
tmux kill-session -t nome    # Mata sessão

# 📋 DENTRO DO TMUX (Ctrl+B é o prefixo)
Ctrl+B c                     # Cria nova janela
Ctrl+B n                     # Próxima janela
Ctrl+B p                     # Janela anterior
Ctrl+B d                     # Desconecta (detach)
Ctrl+B w                     # Lista janelas
Ctrl+B ,                     # Renomeia janela
Ctrl+B %                     # Divide tela vertical
Ctrl+B "                     # Divide tela horizontal
Ctrl+B setas                 # Navega entre splits
Ctrl+B z                     # Maximiza/restaura pane
Ctrl+B x                     # Fecha pane

# 🔥 EXEMPLOS PRÁTICOS
# Rodar comando longo sem perder se desconectar
screen
./script_longo.sh
Ctrl+A d                     # Desconecta e deixa rodando

# Reconectar depois
screen -r

# Múltiplas sessões
tmux new -s servidor
# Dentro: Ctrl+B c para nova janela
# Ctrl+B n para alternar

# Split para monitorar logs e editar ao mesmo tempo
tmux
Ctrl+B "                     # Divide horizontal
# Em cima: tail -f /var/log/syslog
# Em baixo: vim /etc/config

# Visualização em grid (tmux)
Ctrl+B %                     # Divide vertical
Ctrl+B "                     # Divide horizontal
# Agora você tem 4 painéis!`,
                        dica: "🔥 Screen e Tmux são ESSENCIAIS para servidores. Nunca perca uma sessão longa de novo! Tmux é mais moderno e poderoso."
                    }
                },
                {
                    id: "compilacao",
                    nome: "Compilação e Build",
                    icone: "⚙️",
                    descricao: "gcc, make, cmake e compilação",
                    conteudo: {
                        explicacao: "Compilar programas a partir do código fonte usando GCC, Make e CMake.",
                        codigo: `# 🔧 GCC (GNU Compiler Collection)
gcc programa.c -o programa       # Compila C para executável
gcc programa.c -o programa -Wall # Com warnings
gcc programa.c -o programa -O2   # Otimização nível 2
./programa                       # Executa

# 📦 COMPILANDO C++
g++ programa.cpp -o programa    # Compila C++
g++ -std=c++17 programa.cpp -o programa  # C++17
g++ -g programa.cpp -o programa # Com debug symbols

# 🐍 COMPILANDO PYTHON (compilar para bytecode)
python3 -m py_compile script.py  # Compila para .pyc

# 🏗️ MAKE (automação de build)
make                            # Compila usando Makefile
make -j4                        # Compila com 4 threads
make clean                      # Limpa arquivos compilados
make install                    # Instala o programa

# 📥 INSTALAR A PARTIR DO CÓDIGO FONTE
./configure                     # Configura o build
make                            # Compila
sudo make install              # Instala no sistema

# 🛠️ CMAKE (build system moderno)
mkdir build && cd build
cmake ..                        # Gera Makefile
make                            # Compila
sudo make install              # Instala

# 🔍 VERIFICAR DEPENDÊNCIAS
ldd programa                    # Mostra bibliotecas usadas
which gcc                      # Onde está o gcc
gcc --version                  # Versão do gcc

# EXEMPLO PRÁTICO
# Compilar um programa C simples
echo '#include <stdio.h>' > hello.c
echo 'int main(){ printf("Olá, Hamilton!\\n"); return 0; }' >> hello.c
gcc hello.c -o hello
./hello                        # "Olá, Hamilton!"

# Compilar com bibliotecas
gcc programa.c -lm -o programa  # Link com libm (matemática)

# Compilar projeto com Make
git clone https://github.com/projeto/projeto.git
cd projeto
./autogen.sh
./configure
make
sudo make install`,
                        dica: "🔥 GCC é o compilador C/C++ padrão. Make automatiza o processo de build. Aprenda a ler Makefiles!"
                    }
                }
            ]
        },
        {
            id: "vim",
            nome: "🐧 VIM - EDITOR DE TEXTO",
            icone: "📝",
            descricao: "Do básico ao avançado: navegação, edição, modos e plugins",
            progresso: 0,
            subCards: [
                {
                    id: "vim-basico",
                    nome: "VIM Básico (TUDO)",
                    icone: "📖",
                    descricao: "Modos, navegação e comandos essenciais",
                    conteudo: {
                        explicacao: "VIM é um editor de texto poderosíssimo. A curva de aprendizado é íngreme, mas vale cada segundo!",
                        codigo: `# 🚀 ABRINDO O VIM
vim arquivo.txt           # Abre arquivo
vim +10 arquivo.txt       # Abre na linha 10
vim +/palavra arquivo.txt # Abre na primeira ocorrência
vim -O arquivo1.txt arquivo2.txt # Abre em split vertical

# 🎯 MODOS DO VIM (O MAIS IMPORTANTE!)
# NORMAL    - Navegação e comandos (ESC para voltar)
# INSERT    - Escrever texto (i, I, a, A, o, O)
# VISUAL    - Selecionar texto (v, V, Ctrl+v)
# COMMAND   - Comandos especiais (:)

# 🔄 NAVEGAÇÃO (Modo NORMAL)
h j k l        # Esquerda, Baixo, Cima, Direita (use as setas também)
w              # Próxima palavra
b              # Palavra anterior
0              # Início da linha
$              # Fim da linha
gg             # Início do arquivo
G              # Fim do arquivo
10G            # Vai para linha 10
Ctrl+f         # Página para frente
Ctrl+b         # Página para trás
Ctrl+d         # Meia página para frente
Ctrl+u         # Meia página para trás

# ✏️ ENTRAR NO MODO INSERT
i              # Insere na posição atual
I              # Insere no início da linha
a              # Insere depois do cursor
A              # Insere no final da linha
o              # Nova linha abaixo
O              # Nova linha acima
s              # Substitui caractere
S              # Substitui linha toda
r              # Substitui caractere (sem entrar no insert)

# ❌ SAIR DO VIM (MODO COMMAND)
:w             # Salvar
:q             # Sair
:wq            # Salvar e sair
:x             # Salvar e sair (igual :wq)
:q!            # Sair sem salvar (FORÇADO)
:wq!           # Salvar e sair FORÇADO
ZZ             # Salvar e sair (sem dois pontos)
ZQ             # Sair sem salvar

# 📋 COMANDOS ESSENCIAIS (MODO NORMAL)
u              # Desfazer (undo)
Ctrl+r         # Refazer (redo)
dd             # Deleta linha atual
D              # Deleta até o fim da linha
dw             # Deleta palavra
d$             # Deleta até o fim da linha
dgg            # Deleta até o início do arquivo
dG             # Deleta até o fim do arquivo
yy             # Copia linha (yank)
yw             # Copia palavra
p              # Cola (paste) depois do cursor
P              # Cola antes do cursor
.              # Repete último comando

# 🔍 BUSCA E SUBSTITUIÇÃO
/palavra       # Busca "palavra" (pressione n para próximo, N para anterior)
?palavra       # Busca "palavra" para trás
*              # Busca palavra sob o cursor
#              # Busca palavra sob o cursor para trás
:%s/antigo/novo/g      # Substitui TODAS ocorrências
:%s/antigo/novo/gc     # Substitui com confirmação
:%s/antigo/novo/gi     # Ignora maiúsculas/minúsculas
:s/antigo/novo         # Substitui primeira na linha
:10,20s/antigo/novo/g  # Substitui das linhas 10 a 20

# 📝 COMANDOS DE TEXTO
>>             # Indenta linha para direita
<<             # Indenta linha para esquerda
=              # Auto-indenta linha
==             # Auto-indenta linha (igual)
J              # Junta linha com a próxima

# 🔧 ARQUIVOS E BUFFERS
:e arquivo2.txt  # Abre outro arquivo
:ls              # Lista buffers abertos
:b 2             # Vai para buffer 2
:bn              # Próximo buffer
:bp              # Buffer anterior
:bd              # Fecha buffer atual
:split           # Divide tela horizontal
:vsplit          # Divide tela vertical
Ctrl+w w         # Alterna entre splits
Ctrl+w h/j/k/l   # Move para split

# 🔥 EXEMPLO PRÁTICO
# 1. vim config.txt
# 2. Pressione i para editar
# 3. Escreva: "servidor=192.168.1.100"
# 4. ESC para sair do modo insert
# 5. :wq para salvar e sair
# 5. ESC + set number para mostrar números de linha`,
                        dica: "💡 A chave do VIM: entenda os MODOS! Normal = navegação, Insert = escrever, Command = comandos. ESC é seu melhor amigo!"
                    }
                },
                {
                    id: "vim-avancado",
                    nome: "VIM Avançado (NINJA)",
                    icone: "⚡",
                    descricao: "Macros, buffers, splits, plugins e personalização TOTAL",
                    conteudo: {
                        explicacao: "VIM avançado transforma você num NINJA da edição de texto. Macros, buffers e splits aumentam sua produtividade 10x!",
                        codigo: `# 📝 MACROS (GRAVAR E REPETIR AÇÕES)
q[a-z]         # Começa a gravar macro (ex: qa)
q              # Para de gravar
@[a-z]         # Executa macro (ex: @a)
@@             # Repete última macro
:[a-z]         # Mostra conteúdo da macro

# EXEMPLO: Adicionar "sudo " no início de 10 linhas
# 1. qa            # Começa gravar na tecla 'a'
# 2. I              # Vai para início da linha
# 3. sudo          # Escreve "sudo "
# 4. ESC           # Volta modo normal
# 5. j             # Vai para próxima linha
# 6. q             # Para gravar
# 7. 10@a          # Executa 10 vezes

# EXEMPLO: Adicionar ; no final de 50 linhas
# 1. qb            # Começa gravar na tecla 'b'
# 2. A              # Vai para fim da linha
# 3. ;              # Escreve ;
# 4. ESC           # Volta modo normal
# 5. j             # Vai para próxima linha
# 6. q             # Para gravar
# 7. 50@b          # Executa 50 vezes

# 📂 BUFFERS (MÚLTIPLOS ARQUIVOS)
:e arquivo2.txt  # Abre outro arquivo
:ls              # Lista buffers abertos
:b 2             # Vai para buffer 2
:bn              # Próximo buffer
:bp              # Buffer anterior
:bd              # Fecha buffer atual
:bufdo          # Executa comando em todos os buffers
:bufdo %s/antigo/novo/g | update  # Substitui em TODOS

# 📐 SPLITS (DIVIDIR TELA)
:split           # Divide tela horizontal
:vsplit          # Divide tela vertical
:split arquivo2.txt  # Abre arquivo em split
Ctrl+w w         # Alterna entre splits
Ctrl+w h/j/k/l   # Move para split esquerda/baixo/cima/direita
Ctrl+w =         # Equaliza tamanhos
Ctrl+w +         # Aumenta tamanho
Ctrl+w -         # Diminui tamanho
Ctrl+w q         # Fecha split
Ctrl+w o         # Fecha todos os outros splits (só mantém atual)

# 🔧 COMANDOS AVANÇADOS
:%!sort          # Ordena todo o arquivo
:%!column -t     # Formata em colunas (tabelas)
:%s/\\s\\+$//    # Remove espaços no fim das linhas
:%s/^/    /     # Adiciona 4 espaços no início (indenta)
:g/^$/d          # Remove linhas vazias
:g/pattern/d     # Remove linhas com padrão
:v/pattern/d     # Remove linhas SEM padrão
:set number      # Mostra números de linha
:set nonumber    # Esconde números
:set relativenumber # Números relativos
:set paste       # Modo paste (evita indentação automática)
:set nopaste     # Desativa modo paste

# 🎨 PERSONALIZAÇÃO (~/.vimrc)
" Meu .vimrc básico
set number           " Mostra números
set relativenumber   " Números relativos
syntax on            " Syntax highlight
set tabstop=4        " Tamanho do tab
set shiftwidth=4     " Indentação
set expandtab        " Usa espaços no lugar de tabs
set autoindent       " Indentação automática
set smartindent      " Indentação inteligente
set mouse=a          " Suporte a mouse
set backspace=indent,eol,start  " Backspace normal
set hlsearch         " Destaque de busca
set incsearch        " Busca incremental
set wildmenu         " Menu de autocompletar
set showmatch        " Mostra parênteses correspondentes

" Atalhos úteis
map <C-n> :NERDTreeToggle<CR>
map <C-f> :FZF<CR>
nnoremap <C-s> :w<CR>
inoremap <C-s> <Esc>:w<CR>

# 📦 PLUGINS (VIM-PLUG)
" Instale o vim-plug
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim

" Adicione no ~/.vimrc
call plug#begin()
Plug 'preservim/nerdtree'      " Explorador de arquivos
Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }  " Busca fuzzy
Plug 'junegunn/fzf.vim'        " Integração fzf
Plug 'tpope/vim-fugitive'      " Git integration
Plug 'vim-airline/vim-airline'  " Status bar bonita
Plug 'jiangmiao/auto-pairs'    " Fecha parênteses automaticamente
Plug 'neoclide/coc.nvim', {'branch': 'release'}  " Autocomplete LSP
call plug#end()

# 🔥 DICA: Plugins recomendados
# NERDTree - navegação de arquivos
# fzf - busca rápida
# vim-fugitive - Git integrado
# vim-airline - status bar
# coc.nvim - autocomplete (LSP)`,
                        dica: "🔥 Macros são SUPERPODERES! Grave uma ação uma vez e repita 100 vezes. Splits e buffers te fazem trabalhar com múltiplos arquivos sem esforço. Plugins transformam o VIM num IDE!"
                    }
                }
            ]
        },
        {
            id: "less",
            nome: "🐧 LESS - VISUALIZADOR",
            icone: "📄",
            descricao: "Visualizar arquivos grandes, logs e paginação",
            progresso: 0,
            subCards: [
                {
                    id: "less-basico",
                    nome: "LESS Básico (TUDO)",
                    icone: "📖",
                    descricao: "Navegação, busca e visualização de arquivos",
                    conteudo: {
                        explicacao: "LESS é o visualizador de arquivos mais usado no Linux. Permite navegar em arquivos grandes com facilidade.",
                        codigo: `# 🚀 COMANDOS BÁSICOS DO LESS
less arquivo.txt        # Abre arquivo
less -N arquivo.txt     # Mostra números de linha
less -S arquivo.txt     # Mostra linhas longas sem quebrar (scroll horizontal)
less -F arquivo.txt     # Mostra e sai se arquivo for pequeno
less -g arquivo.txt     # Destaque da busca
less -i arquivo.txt     # Busca ignora maiúsculas/minúsculas

# 🔄 NAVEGAÇÃO
Espaço / PgDn     # Próxima página
b / PgUp          # Página anterior
g                 # Início do arquivo
G                 # Fim do arquivo
j / seta para baixo  # Desce uma linha
k / seta para cima   # Sobe uma linha
d                 # Meia página para baixo
u                 # Meia página para cima
r                 # Recarrega o arquivo
R                 # Recarrega e reabre

# 🔍 BUSCA
/                 # Busca para frente (digite e Enter)
?                 # Busca para trás
n                 # Próxima ocorrência
N                 # Ocorrência anterior
&                 # Mostra só linhas que correspondem ao padrão
&[padrão]         # Filtra linhas (ex: &ERROR só mostra erros)

# 📋 COMANDOS ÚTEIS
h                 # Ajuda (mostra todos os comandos)
q                 # Sair do less
=                 # Mostra informações do arquivo (linhas, bytes, posição)
v                 # Abre o arquivo no editor (vi)
F                 # Segue o arquivo (tail -f) - Ctrl+C para parar
Ctrl+G            # Mostra posição atual
!                 # Executa comando shell (ex: !ls)
s                 # Salva arquivo com outro nome
_                 # Mostra informações da linha atual
-                 # Alterna opção (ex: -N para números)

# 🔧 OPÇÕES ÚTEIS
less -N arquivo.txt   # Números de linha
less -S arquivo.txt   # Corta linhas longas (scroll com setas)
less -I arquivo.txt   # Busca insensível a maiúsculas
less -p "ERROR" arquivo.txt  # Busca e destaca "ERROR"
less -n arquivo.txt   # Suprime números de linha
less -M arquivo.txt   # Mostra mais informações

# 📊 EXEMPLOS PRÁTICOS
# Ver logs em tempo real
less -F /var/log/syslog   # -F segue como tail -f

# Ver arquivo com números
less -N ~/.bashrc

# Ver arquivo e buscar
less arquivo.log
/ERROR               # Busca "ERROR"
n                    # Próxima ocorrência
N                    # Ocorrência anterior

# Ver múltiplos arquivos
less arquivo1.txt arquivo2.txt
:n                   # Próximo arquivo
:p                   # Arquivo anterior
:file                # Mostra arquivo atual

# Ver e filtrar
less arquivo.log
&ERROR               # Só mostra linhas com ERROR
&^ERROR              # Só linhas que começam com ERROR
&[a-z]               # Só linhas com letras minúsculas`,
                        dica: "💡 LESS é MUITO melhor que 'more'. Use 'F' para seguir logs em tempo real (igual tail -f). '&' filtra resultados!"
                    }
                },
                {
                    id: "less-avancado",
                    nome: "LESS Avançado (PODER)",
                    icone: "⚡",
                    descricao: "Filtros, pipes e combinações PODEROSAS",
                    conteudo: {
                        explicacao: "LESS combinado com outros comandos cria pipelines poderosos para análise de dados.",
                        codigo: `# 🔗 PIPES COM LESS
# Ver logs e buscar com destaquegrep "ERROR" /var/log/syslog | less -p ERROR
# -p destaca as ocorrências

# Ver saída de comando com paginação
ps aux | less -S          # -S não quebra linhas longas
journalctl -xe | less -N  # Com números
git diff | less           # Ver diffs com paginação
curl -I https://google.com | less  # Ver cabeçalhos HTTP

# 📊 FILTROS AVANÇADOS
# Ver apenas linhas com padrão e pular repetidas
cat arquivo.log | grep "ERROR" | sort | uniq | less

# Ver logs de hoje
journalctl --since today | less -N

# Ver arquivos comprimidos (less também funciona!)
less arquivo.tar.gz       # Funciona! (se tiver lesspipe)
zless arquivo.gz          # Ver arquivo .gz
bzless arquivo.bz2        # Ver arquivo .bz2

# 🔧 CONFIGURAÇÃO (~/.lesskey)
# Crie atalhos personalizados
lesskey -                 # Gera configuração padrão
# Edite ~/.lesskey e execute:
lesskey                    # Recarrega configuração

# 🎯 COMANDOS PODEROSOS
# Ver apenas linhas com informações específicas
grep "ERROR" log.txt | less -p ERROR -N

# Ver saída de comandos longos
find / -name "*.conf" 2>/dev/null | less

# Ver diff com paginação e busca
git diff | less -N
/function             # Busca dentro do less

# Ver processos com paginação e busca
ps aux | less -S
/POSTGRES          # Busca dentro do less

# 📝 EXEMPLO: ANALISANDO LOGS
# Ver erros dos últimos 10 minutos
journalctl --since "10 minutes ago" | grep -i error | less -N

# Ver acesso a URL específica
cat /var/log/nginx/access.log | grep "/api" | less -S

# Ver e contar ocorrências
grep "ERROR" /var/log/syslog | less -N | wc -l

# 🔥 COMBINAÇÕES AVANÇADAS
# Monitorar logs em tempo real com filtro
tail -f /var/log/syslog | grep "ERROR" | less -N

# Ver histórico de comandos com busca
history | less -N
/git                # Busca comandos com git

# Ver sistema de arquivos com busca
find / -type f -name "*.conf" 2>/dev/null | less -S
/nginx              # Busca arquivos com nginx

# Ver processos com ordenação e paginação
ps aux --sort=-%mem | less -S

# Ver logs de serviço específico
journalctl -u nginx.service -n 100 | less -N

# 🔍 GREP + LESS COMBO PERFEITO
# Encontrar e navegar por erros
grep -r "ERROR" /var/log/ 2>/dev/null | less -N -p ERROR

# Encontrar e ver contexto
grep -r "ERROR" /var/log/ -A 3 -B 3 | less -N

# Ver IPs únicos de log
cat access.log | awk '{print $1}' | sort | uniq -c | sort -nr | less -S`,
                        dica: "🔥 LESS + GREP + AWK = PODER ABSOLUTO! Use pipes para filtrar e visualizar dados gigantes com facilidade. 'less -S' é INCRÍVEL para logs longos."
                    }
                }
            ]
        },
        {
            id: "pratico",
            nome: "🐧 COMANDOS PRÁTICOS",
            icone: "🚀",
            descricao: "Comandos que você vai usar no DIA A DIA (Docker, Git, Aliases, Resolução)",
            progresso: 0,
            subCards: [
                {
                    id: "docker-comandos",
                    nome: "Comandos Docker (TUDO)",
                    icone: "🐳",
                    descricao: "Gerenciar containers, imagens, volumes e serviços",
                    conteudo: {
                        explicacao: "Comandos essenciais para trabalhar com Docker no terminal.",
                        codigo: `# 🐳 GERENCIAR CONTAINERS
docker ps                      # Containers rodando
docker ps -a                   # Todos os containers
docker ps -q                   # Só IDs dos containers
docker start container         # Inicia container
docker stop container          # Para container
docker restart container       # Reinicia container
docker rm container            # Remove container
docker rm -f container         # Remove FORÇADO
docker rm $(docker ps -a -q)   # Remove TODOS os containers

# 📦 IMAGENS
docker images                  # Lista imagens
docker pull nginx              # Baixa imagem
docker build -t app .          # Builda imagem
docker rmi imagem              # Remove imagem
docker rmi $(docker images -q) # Remove TODAS as imagens
docker tag imagem nova_tag    # Renomeia imagem

# 🔧 EXECUTAR COMANDOS
docker exec -it container bash # Entra no container
docker exec container comando  # Executa comando
docker logs container          # Ver logs
docker logs -f container       # Segue logs
docker logs -n 50 container    # Últimas 50 linhas
docker inspect container       # Ver informações detalhadas
docker stats container         # Ver uso de recursos

# 🌐 REDE
docker network ls              # Lista redes
docker network create rede     # Cria rede
docker network connect rede container  # Conecta container à rede
docker network disconnect rede container  # Desconecta

# 📁 VOLUMES
docker volume create dados     # Cria volume
docker volume ls               # Lista volumes
docker volume rm volume        # Remove volume
docker volume prune            # Remove volumes não usados

# 🏗️ DOCKER COMPOSE
docker-compose up -d          # Sobe serviços
docker-compose down           # Para serviços
docker-compose logs           # Ver logs
docker-compose ps             # Ver serviços
docker-compose exec service bash  # Entra no serviço
docker-compose build          # Reconstrói imagens
docker-compose restart        # Reinicia serviços

# 🚀 EXEMPLOS PRÁTICOS
# Rodar um container PostgreSQL
docker run -d --name meu-postgres -e POSTGRES_PASSWORD=senha -p 5432:5432 postgres

# Rodar um container com volume
docker run -d --name nginx -p 80:80 -v /meus-site:/usr/share/nginx/html nginx

# Entrar no container e executar comandos
docker exec -it meu-postgres bash
psql -U postgres

# Ver logs de um container
docker logs -f nginx

# Limpar tudo (CUIDADO!)
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
docker rmi $(docker images -q)`,
                        dica: "🔥 'docker ps -a' mostra todos os containers, 'docker logs' é essencial para debugar! 'docker exec -it' é seu melhor amigo."
                    }
                },
                {
                    id: "git-comandos",
                    nome: "Comandos Git (TUDO)",
                    icone: "📜",
                    descricao: "Controle de versão no terminal",
                    conteudo: {
                        explicacao: "Comandos essenciais do Git para controle de versão.",
                        codigo: `# 📜 CONFIGURAÇÃO INICIAL
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
git config --list              # Ver todas as configurações

# 🔧 CLONAR E CRIAR
git clone https://github.com/...   # Clona repositório
git init                          # Inicia repositório
git remote add origin url         # Adiciona remoto

# 📝 TRABALHAR COM CÓDIGO
git status                        # Ver mudanças
git add arquivo.txt               # Adiciona arquivo
git add .                         # Adiciona todos
git commit -m "mensagem"          # Commit
git commit -am "mensagem"         # Add + commit (só arquivos trackeados)
git push                          # Envia para remoto
git push -u origin main           # Primeiro push
git pull                          # Puxa do remoto
git fetch                         # Busca mudanças sem mesclar

# 🔍 BRANCHES
git branch                        # Lista branches
git branch -a                     # Lista TODAS (incluindo remotas)
git branch nova-feature           # Cria branch
git checkout nova-feature         # Troca para branch
git checkout -b nova-feature      # Cria e troca
git merge nova-feature            # Mescla branch
git branch -d nova-feature        # Deleta branch
git push origin --delete branch   # Deleta branch remota

# 🚀 COMANDOS ÚTEIS
git log                           # Histórico
git log --oneline                 # Histórico resumido
git log --graph --oneline         # Visual gráfico
git diff                          # Ver mudanças
git diff --staged                 # Mudanças prontas para commit
git stash                         # Guarda mudanças
git stash list                    # Lista stashes
git stash pop                     # Recupera stash
git stash drop                    # Remove stash
git reset HEAD arquivo.txt        # Remove do staged
git reset --hard HEAD             # Volta para último commit (PERDE MUDANÇAS!)
git reset --soft HEAD~1           # Desfaz commit (mantém mudanças)

# 🔄 REBASE
git rebase main                   # Rebase com main
git rebase --continue             # Continua rebase
git rebase --abort                # Aborta rebase

# 🏷️ TAGS
git tag                           # Lista tags
git tag v1.0                      # Cria tag
git push --tags                   # Envia tags

# 🔥 EXEMPLOS PRÁTICOS
# Clonar e começar a trabalhar
git clone https://github.com/seu/repo.git
cd repo
git checkout -b feature
git add .
git commit -m "Adiciona nova feature"
git push origin feature

# Corrigir commit
git commit --amend -m "Nova mensagem"  # Altera último commit
git push --force                      # Força push (CUIDADO!)

# Reverter mudanças
git log --oneline
git revert COMMIT_ID                   # Reverte commit específico

# Puxar mudanças e resolver conflitos
git pull
git status                          # Ver arquivos em conflito
# Editar arquivos para resolver
git add .
git commit -m "Resolve conflitos"`,
                        dica: "💡 Use 'git status' CONSTANTEMENTE. 'git log --oneline --graph' mostra o histórico visualmente. 'git stash' é vida!"
                    }
                },
                {
                    id: "alias",
                    nome: "Aliases (Atalhos PODEROSOS)",
                    icone: "⚡",
                    descricao: "Criar atalhos para comandos longos",
                    conteudo: {
                        explicacao: "Aliases são atalhos para comandos. Aumentam sua produtividade no terminal.",
                        codigo: `# 🔧 ALIASES TEMPORÁRIOS
alias ll='ls -la'                 # Lista com detalhes
alias gs='git status'             # Status do git
alias update='sudo apt update'    # Atualiza pacotes
alias ..='cd ..'                  # Volta uma pasta
alias ...='cd ../..'              # Volta duas pastas
alias ....='cd ../../..'          # Volta três pastas

# 🔧 ALIASES PERMANENTES
# Adicione no arquivo ~/.bashrc ou ~/.bash_aliases
nano ~/.bashrc                    # Edita o arquivo

# ADICIONE NO FINAL:
# 📁 Navegação
alias ll='ls -la'
alias la='ls -A'
alias l='ls -CF'
alias ..='cd ..'
alias ...='cd ../..'
alias ....='cd ../../..'

# 📦 Git
alias gs='git status'
alias ga='git add'
alias gc='git commit -m'
alias gp='git pull'
alias gpush='git push'
alias gco='git checkout'
alias gb='git branch'
alias glog='git log --oneline --graph'

# 🐳 Docker
alias d='docker'
alias dps='docker ps'
alias dpsa='docker ps -a'
alias dstop='docker stop'
alias drm='docker rm'
alias dlogs='docker logs -f'

# 📦 APT
alias update='sudo apt update'
alias upgrade='sudo apt upgrade'
alias install='sudo apt install'
alias remove='sudo apt remove'
alias search='apt-cache search'

# 🔧 Utilitários
alias ports='sudo lsof -i -n | grep LISTEN'
alias mem='ps aux --sort=-%mem | head -10'
alias cpu='ps aux --sort=-%cpu | head -10'
alias dfh='df -h'
alias duh='du -sh *'

# 🚀 Comandos comuns
alias grep='grep --color=auto'
alias egrep='egrep --color=auto'
alias fgrep='fgrep --color=auto'

# RECARREGAR CONFIGURAÇÃO
source ~/.bashrc                  # Recarrega os aliases

# 📋 VER ALIASES
alias                            # Lista todos os aliases
unalias ll                       # Remove alias

# 🔥 EXEMPLO PRÁTICO
# Criar aliases para comandos frequentes
echo "alias d='docker'" >> ~/.bashrc
echo "alias dps='docker ps'" >> ~/.bashrc
echo "alias dlogs='docker logs -f'" >> ~/.bashrc
echo "alias gs='git status'" >> ~/.bashrc
echo "alias gpush='git push origin HEAD'" >> ~/.bashrc
source ~/.bashrc`,
                        dica: "🔥 Aliases transformam comandos longos em atalhos de 2-3 letras. Use para os comandos que você mais usa! É o segredo dos devs rápidos."
                    }
                },
                {
                    id: "resolucao-problemas",
                    nome: "Resolução de Problemas (TUDO)",
                    icone: "🔧",
                    descricao: "Diagnosticar e resolver problemas comuns",
                    conteudo: {
                        explicacao: "Técnicas para identificar e resolver problemas no Linux.",
                        codigo: `# 🔍 PROBLEMAS DE PERFORMANCE
htop                            # Ver CPU e memória
top                             # Monitor de processos (q para sair)
dmesg | tail                    # Ver mensagens do kernel
journalctl -xe                  # Ver erros do sistema
df -h                           # Ver espaço em disco
du -sh *                        # Ver tamanho de arquivos
iostat                          # Estatísticas de I/O
vmstat 1                        # Estatísticas do sistema a cada 1s
free -h                         # Memória disponível

# 🔌 PROBLEMAS DE REDE
ping 8.8.8.8                   # Testa conectividade
ping google.com                 # Testa DNS e rede
traceroute google.com          # Rota até o destino
traceroute -n google.com       # Mostra IPs
nslookup google.com            # Resolve DNS
dig google.com                 # DNS detalhado
curl -I https://google.com    # Testa resposta HTTP
curl -v https://google.com    # Verbose (detalhado)
wget --spider https://google.com # Testa se URL existe
sudo systemctl restart networking  # Reinicia rede

# 🛑 PROBLEMAS COM SERVIÇOS
sudo systemctl status nginx    # Status do serviço
sudo systemctl restart nginx   # Reinicia
sudo systemctl start nginx     # Inicia
sudo systemctl stop nginx      # Para
sudo systemctl enable nginx    # Habilita no boot
sudo journalctl -u nginx -n 50 # Últimas 50 linhas do log
sudo journalctl -u nginx -f    # Segue logs

# 💾 PROBLEMAS DE PERMISSÃO
ls -la arquivo                 # Ver permissões
chmod +x arquivo               # Torna executável
sudo chown usuario:grupo arquivo  # Muda dono
sudo chmod -R 755 pasta/       # Recursivo

# 📝 PROBLEMAS COM SUDO
sudo -l                        # Ver seus privilégios
visudo                         # Edita o sudoers (cuidado!)
sudo su -                      # Vira root

# 💥 PROBLEMAS COM DISCO CHEIO
df -h                          # Ver partições
du -sh * | sort -h             # Pastas por tamanho
find / -size +100M -type f | less  # Arquivos grandes
sudo apt autoremove            # Remove pacotes não usados
sudo apt autoclean             # Limpa cache
journalctl --vacuum-size=100M  # Limpa logs

# 🚨 PROBLEMAS COM PROCESSOS TRAVADOS
ps aux | grep "processo"      # Encontrar PID
kill -9 PID                   # Matar FORÇADO
sudo killall -9 processo      # Mata todos os processos

# 🔥 EXEMPLO PRÁTICO
# Site não está carregando
curl -I localhost              # Testa servidor local
sudo systemctl status nginx   # Verifica status
sudo journalctl -u nginx -f   # Segue logs
sudo systemctl restart nginx  # Reinicia se necessário

# Debug passo a passo
# 1. Verificar serviço: systemctl status
# 2. Ver logs: journalctl -u servico -n 50
# 3. Ver porta: ss -tulpn | grep 80
# 4. Ver processo: ps aux | grep nginx
# 5. Reiniciar: systemctl restart servico`,
                        dica: "💡 Sempre comece pelo básico: 'ping' pra rede, 'df -h' pra espaço, 'journalctl' pra logs. 80% dos problemas são simples!"
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
    
    terminalData.categorias.forEach(categoria => {
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
    const categoria = terminalData.categorias.find(c => c.id === categoryId);
    
    if (!categoria) return;
    
    let html = `<h2 class="section-title">🐧 ${categoria.nome} 🐧</h2>`;
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
    const categoria = terminalData.categorias.find(c => c.id === categoryId);
    const subCard = categoria?.subCards.find(s => s.id === subCardId);
    
    if (!subCard) return;
    
    const isCompleted = isSubCardCompleted(categoryId, subCardId);
    const btnText = isCompleted ? '✅ TÓPICO CONCLUÍDO!' : '🐧 MARCAR COMO CONCLUÍDO';
    
    let html = `
        <div class="content-card">
            <div class="content-title">${subCard.icone} ${subCard.nome}</div>
            <div class="content-explanation">${subCard.conteudo.explicacao}</div>
            
            <div class="code-block">
                <button class="copy-btn" onclick="copyCode(this)">📋 COPIAR</button>
                <pre>${escapeHtml(subCard.conteudo.codigo)}</pre>
            </div>
            
            <div class="tip">
                <strong>🐧 DICA DO HAMILTON:</strong> ${subCard.conteudo.dica}
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
    const saved = localStorage.getItem(`completed_terminal_${categoryId}`);
    if (!saved) return 0;
    return JSON.parse(saved).length;
}

function isSubCardCompleted(categoryId, subCardId) {
    const saved = localStorage.getItem(`completed_terminal_${categoryId}`);
    if (!saved) return false;
    const completed = JSON.parse(saved);
    return completed.includes(subCardId);
}

function toggleComplete(categoryId, subCardId) {
    let completed = JSON.parse(localStorage.getItem(`completed_terminal_${categoryId}`) || '[]');
    
    if (completed.includes(subCardId)) {
        completed = completed.filter(id => id !== subCardId);
        console.log(`%c📘 ${subCardId} marcado como pendente`, "color: #ff8c00");
    } else {
        completed.push(subCardId);
        console.log(`%c✅ ${subCardId} concluído!`, "color: #00ff00");
    }
    
    localStorage.setItem(`completed_terminal_${categoryId}`, JSON.stringify(completed));
    
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
    console.log("%c🐧 Terminal Linux F1 carregado! Hamilton's Garage está pronto! 🐧", "color: #00cc00; font-size: 14px; font-weight: bold;");
    console.log("%c⚡ Categorias → Tópicos → Conteúdo. Seu progresso é salvo automaticamente!", "color: #ffd700; font-size: 12px;");
});