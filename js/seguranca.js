// ESTRUTURA DE DADOS: Categorias -> SubCards -> Conteúdo
// Segurança da Informação - Do Básico ao Avançado
const segurancaData = {
    categorias: [
        {
            id: "fundamentos",
            nome: "🛡️ FUNDAMENTOS",
            icone: "📖",
            descricao: "Conceitos básicos, pilares, tipos de ameaças e ataques",
            progresso: 0,
            subCards: [
                {
                    id: "pilares",
                    nome: "Pilares da Segurança (TUDO)",
                    icone: "🎯",
                    descricao: "Confidencialidade, Integridade, Disponibilidade, Autenticidade, Irretratabilidade",
                    conteudo: {
                        explicacao: "Os pilares da segurança da informação são os <strong>princípios fundamentais</strong> para proteger dados e sistemas.",
                        codigo: "// 🎯 PILARES DA SEGURANÇA\n\n// 📌 O TRIÂNGULO CIA\n// 1. Confidencialidade - Apenas autorizados acessam\n// 2. Integridade - Dados não são alterados indevidamente\n// 3. Disponibilidade - Dados estão acessíveis quando necessários\n\n// 📌 OUTROS PILARES\n// 4. Autenticidade - Garantia de que a informação é verdadeira\n// 5. Irretratabilidade - Não se pode negar a autoria\n\n// 📌 EXEMPLO PRÁTICO\n// Sistema bancário:\n// Confidencialidade: saldo só o dono vê\n// Integridade: saldo não pode ser alterado indevidamente\n// Disponibilidade: sistema está sempre online\n// Autenticidade: operações são realmente do cliente\n// Irretratabilidade: cliente não pode negar transação\n\n// 📌 APRENDER COM UMA FRASE\n// \"A segurança não é um produto, é um processo.\"\n// - Bruce Schneier\n\n// 📌 SEGURANÇA OFENSIVA vs DEFENSIVA\n// Defensiva: proteger, prevenir, detectar\n// Ofensiva: testar, encontrar vulnerabilidades (hacking ético)\n\n// 📌 FERRAMENTAS\n// - Firewall (defensiva)\n// - Antivírus (defensiva)\n// - Kali Linux (ofensiva)\n// - Nmap (ofensiva)\n// - Wireshark (defensiva/analítica)",
                        dica: "💡 Lembre-se do TRIÂNGULO CIA: Confidencialidade, Integridade, Disponibilidade. É a base de toda segurança!"
                    }
                },
                {
                    id: "ameacas",
                    nome: "Ameaças e Ataques (TUDO)",
                    icone: "⚠️",
                    descricao: "Malware, phishing, engenharia social, DDoS, ransomware, SQL Injection",
                    conteudo: {
                        explicacao: "Conhecer as ameaças é o primeiro passo para se proteger. Entenda os principais tipos de ataques.",
                        codigo: "// ⚠️ AMEAÇAS E ATAQUES\n\n// 📌 MALWARE (Software Malicioso)\n// - Vírus: se espalha e infecta arquivos\n// - Worm: se espalha pela rede\n// - Trojan: parece legítimo, mas é malicioso\n// - Ransomware: criptografa dados e pede resgate\n// - Spyware: espiona o usuário\n// - Adware: exibe anúncios indesejados\n\n// 📌 ATAQUES COMUNS\n// - Phishing: emails enganosos para roubar dados\n// - Engenharia Social: manipulação psicológica\n// - DDoS: sobrecarga de servidores\n// - SQL Injection: injeção de código SQL\n// - XSS: injeção de scripts\n// - Man-in-the-Middle: interceptação de comunicação\n// - Força Bruta: tentativa de senhas\n\n// 📌 EXEMPLO - SQL INJECTION\n// Código vulnerável:\n// SELECT * FROM usuarios WHERE nome = '${nomeUsuario}'\n\n// Ataque:\n// nomeUsuario = ' OR '1'='1\n// SELECT * FROM usuarios WHERE nome = '' OR '1'='1'\n// RETORNA TODOS OS USUÁRIOS!\n\n// 📌 EXEMPLO - XSS\n// Código vulnerável:\n// <div>${conteudoUsuario}</div>\n\n// Ataque:\n// conteudoUsuario = '<script>alert(\"Hackeado!\")</script>'\n\n// 📌 COMO SE PROTEGER\n// - Valide entradas de usuário\n// - Use prepared statements\n// - Mantenha software atualizado\n// - Use autenticação forte\n// - Treine usuários",
                        dica: "🔥 Conheça as ameaças para se proteger! SQL Injection e XSS são os ataques mais comuns em aplicações web."
                    }
                },
                {
                    id: "owasp",
                    nome: "OWASP Top 10 (TUDO)",
                    icone: "📋",
                    descricao: "As 10 vulnerabilidades mais críticas em aplicações web",
                    conteudo: {
                        explicacao: "OWASP Top 10 é a lista das 10 vulnerabilidades mais críticas em aplicações web. É essencial conhecer cada uma.",
                        codigo: "// 📋 OWASP TOP 10\n\n// 📌 1. INJEÇÃO (Injection)\n// - SQL, NoSQL, OS Command\n// - Solução: Prepared Statements, validação\n\n// 📌 2. FALHA DE AUTENTICAÇÃO (Broken Authentication)\n// - Senhas fracas, sessões expostas\n// - Solução: Autenticação forte, MFA\n\n// 📌 3. EXPOSIÇÃO DE DADOS SENSÍVEIS (Sensitive Data Exposure)\n// - Dados expostos em texto\n// - Solução: Criptografia, HTTPS\n\n// 📌 4. ENTIDADES EXTERNAS XML (XXE)\n// - Ataques a parsers XML\n// - Solução: Desativar entidades externas\n\n// 📌 5. CONTROLE DE ACESSO QUEBRADO (Broken Access Control)\n// - Usuários acessam recursos indevidos\n// - Solução: Validar permissões em todo acesso\n\n// 📌 6. CONFIGURAÇÕES INCORRETAS (Security Misconfiguration)\n// - Configurações padrão, portas abertas\n// - Solução: Hardening, revisão de configurações\n\n// 📌 7. XSS (Cross-Site Scripting)\n// - Injeção de scripts em páginas\n// - Solução: Escapar saída, validar entrada\n\n// 📌 8. DESSERIALIZAÇÃO INSEGURA (Insecure Deserialization)\n// - Dados serializados maliciosos\n// - Solução: Validar dados serializados\n\n// 📌 9. USO DE COMPONENTES VULNERÁVEIS\n// - Bibliotecas desatualizadas\n// - Solução: Atualizar dependências\n\n// 📌 10. REGISTRO E MONITORAMENTO INSUFICIENTES\n// - Falta de logs para detectar ataques\n// - Solução: Logs, monitoramento, alertas\n\n// 📌 COMO MITIGAR\n// - Validar entradas\n// - Escapar saídas\n// - Usar HTTPS\n// - Atualizar dependências\n// - Fazer testes de segurança",
                        dica: "🔥 OWASP Top 10 é a BÍBLIA da segurança web! Domine cada uma dessas vulnerabilidades para desenvolver código seguro."
                    }
                }
            ]
        },
        {
            id: "criptografia",
            nome: "🛡️ CRIPTOGRAFIA",
            icone: "🔐",
            descricao: "Criptografia simétrica, assimétrica, hash, SSL/TLS, certificados",
            progresso: 0,
            subCards: [
                {
                    id: "criptografia-basica",
                    nome: "Criptografia (TUDO)",
                    icone: "🔐",
                    descricao: "Simétrica, assimétrica, hash, criptografia em Java, Python, JS",
                    conteudo: {
                        explicacao: "Criptografia é a arte de proteger informações transformando dados em um formato ilegível para não autorizados.",
                        codigo: "// 🔐 CRIPTOGRAFIA\n\n// 📌 TIPOS DE CRIPTOGRAFIA\n\n// 1. SIMÉTRICA (mesma chave para cifrar/decifrar)\n// - AES, DES, Blowfish\n// - Rápida, mas chave precisa ser compartilhada\n\n// 2. ASSIMÉTRICA (chave pública/privada)\n// - RSA, ECC\n// - Mais lenta, mas mais segura\n\n// 3. HASH (função de mão única)\n// - MD5, SHA-1, SHA-256\n// - Não pode ser revertido\n\n// 📌 EXEMPLO - HASH EM JAVASCRIPT\nconst bcrypt = require('bcrypt')\n\nconst senha = 'minha_senha'\nconst salt = bcrypt.genSaltSync(10)\nconst hash = bcrypt.hashSync(senha, salt)\nconsole.log(hash)  // $2b$10$...\n\nconst verificar = bcrypt.compareSync(senha, hash)\nconsole.log(verificar)  // true\n\n// 📌 EXEMPLO - HASH EM JAVA\n// BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();\n// String senhaHash = encoder.encode(\"minha_senha\");\n// boolean valido = encoder.matches(\"minha_senha\", senhaHash);\n\n// 📌 EXEMPLO - HASH EM PYTHON\n// import hashlib\n// hash = hashlib.sha256(b'minha_senha').hexdigest()\n\n// 📌 BOAS PRÁTICAS\n// ✅ Use bcrypt, scrypt, Argon2 para senhas\n// ✅ Use HTTPS (SSL/TLS)\n// ✅ Use AES-256 para dados\n// ✅ Nunca armazene senhas em texto\n// ✅ Use sal (salt) em hashes",
                        dica: "🔥 NUNCA armazene senhas em texto! Use bcrypt ou Argon2 para hash de senhas. Sempre use HTTPS."
                    }
                },
                {
                    id: "ssl-tls",
                    nome: "SSL/TLS e Certificados (TUDO)",
                    icone: "🔒",
                    descricao: "SSL, TLS, certificados, HTTPS, Let's Encrypt",
                    conteudo: {
                        explicacao: "SSL/TLS é a base da segurança na internet. Protege a comunicação entre cliente e servidor.",
                        codigo: "// 🔒 SSL/TLS E CERTIFICADOS\n\n// 📌 O QUE É SSL/TLS?\n// - Secure Sockets Layer / Transport Layer Security\n// - Protocolo de criptografia para internet\n// - Garante privacidade e integridade\n\n// 📌 HTTPS = HTTP + SSL/TLS\n// - Dados criptografados\n// - Autenticação do servidor\n// - Integridade da comunicação\n\n// 📌 CERTIFICADOS DIGITAIS\n// - Identificam servidores\n// - Emitidos por Certificate Authorities (CA)\n// - Exemplo: DigiCert, Let's Encrypt, Comodo\n\n// 📌 TIPOS DE CERTIFICADOS\n// - DV (Domain Validation): só valida domínio\n// - OV (Organization Validation): valida organização\n// - EV (Extended Validation): validação estendida\n\n// 📌 GERAR CERTIFICADO COM OPENSSL\n// Gerar chave privada\nopenssl genrsa -out chave-privada.pem 2048\n\n// Gerar CSR (Certificate Signing Request)\nopenssl req -new -key chave-privada.pem -out csr.pem\n\n// Gerar certificado autoassinado\nopenssl x509 -req -in csr.pem -signkey chave-privada.pem -out certificado.pem\n\n// 📌 USAR COM NGINX\nserver {\n    listen 443 ssl;\n    server_name exemplo.com;\n\n    ssl_certificate /caminho/certificado.pem;\n    ssl_certificate_key /caminho/chave-privada.pem;\n    ssl_protocols TLSv1.2 TLSv1.3;\n}\n\n// 📌 LET'S ENCRYPT (GRATUITO)\nsudo apt install certbot\nsudo certbot --nginx -d exemplo.com\n\n// 📌 VERIFICAR CERTIFICADO\nopenssl s_client -connect google.com:443",
                        dica: "🔥 SEMPRE use HTTPS em produção! Let's Encrypt oferece certificados GRATUITOS. TLS 1.2 e 1.3 são os mais seguros."
                    }
                }
            ]
        },
        {
            id: "seguranca-dev",
            nome: "🛡️ SEGURANÇA NO DESENVOLVIMENTO",
            icone: "💻",
            descricao: "Secure coding, OWASP, testes de segurança, DevSecOps, SAST, DAST",
            progresso: 0,
            subCards: [
                {
                    id: "secure-coding",
                    nome: "Secure Coding (TUDO)",
                    icone: "💻",
                    descricao: "Boas práticas de desenvolvimento seguro",
                    conteudo: {
                        explicacao: "Secure Coding é a prática de escrever código que seja resistente a ataques e vulnerabilidades.",
                        codigo: "// 💻 SECURE CODING\n\n// 📌 VALIDAÇÃO DE ENTRADA\n// ❌ ERRADO\nconst sql = `SELECT * FROM usuarios WHERE nome = '${nome}'`\n\n// ✅ CERTO (Prepared Statement)\nconst sql = 'SELECT * FROM usuarios WHERE nome = ?'\n\n// 📌 ESCAPAR SAÍDA (evitar XSS)\n// ❌ ERRADO\nelemento.innerHTML = conteudoUsuario\n\n// ✅ CERTO\nelemento.textContent = conteudoUsuario\n// ou\nconst sanitizado = escapeHtml(conteudoUsuario)\n\n// 📌 AUTENTICAÇÃO FORTE\n// ❌ ERRADO\nif (senha === senhaDigitada) {\n    login()\n}\n\n// ✅ CERTO\nif (await bcrypt.compare(senhaDigitada, hashSalvo)) {\n    login()\n}\n\n// 📌 CONTROLE DE ACESSO\n// ❌ ERRADO\nif (req.usuario.role === 'admin') {\n    // admin\n}\n\n// ✅ CERTO (validar no backend)\nif (!usuario.temPermissao('admin')) {\n    return res.status(403).json({ erro: 'Sem permissão' })\n}\n\n// 📌 REGISTRO DE LOGS\n// ✅ SEMPRE logue ações importantes\nconsole.log(`Usuário ${usuario.id} acessou ${recurso}`)\n\n// 📌 BOAS PRÁTICAS\n// ✅ Valide sempre entrada do usuário\n// ✅ Use Prepared Statements\n// ✅ Escape saída\n// ✅ Use HTTPS\n// ✅ Autentique e autorize\n// ✅ Registre logs\n// ✅ Atualize dependências\n// ✅ Teste segurança",
                        dica: "🔥 SEMPRE valide entrada, escape saída, use Prepared Statements, e autentique/autorie tudo! Segurança começa no código."
                    }
                },
                {
                    id: "devsecops",
                    nome: "DevSecOps (TUDO)",
                    icone: "🔄",
                    descricao: "SAST, DAST, SCA, pipelines seguros, segurança em CI/CD",
                    conteudo: {
                        explicacao: "DevSecOps integra segurança em todo o ciclo de desenvolvimento, desde o código até a produção.",
                        codigo: "// 🔄 DEVSECOPS\n\n// 📌 SEGURANÇA NO CICLO DE VIDA\n// 1. Planejamento → 2. Desenvolvimento → 3. Build\n// 4. Teste → 5. Deploy → 6. Operação\n// 7. Monitoramento\n\n// 📌 FERRAMENTAS\n// - SAST (Static Application Security Testing): SonarQube\n// - DAST (Dynamic Application Security Testing): OWASP ZAP\n// - SCA (Software Composition Analysis): Snyk\n// - IAST (Interactive Application Security Testing)\n// - RASP (Runtime Application Self-Protection)\n\n// 📌 EXEMPLO - GITHUB ACTIONS COM SEGURANÇA\nname: Security Scan\non: [push]\njobs:\n  security:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      \n      - name: SAST (SonarQube)\n        run: sonar-scanner\n      \n      - name: Snyk (dependências)\n        run: snyk test\n      \n      - name: Trivy (container)\n        run: trivy image minha-app\n\n// 📌 EXEMPLO - PIPELINE SEGURO\nstages:\n  - build\n  - security-scan\n  - test\n  - deploy\n\nsecurity-scan:\n  stage: security-scan\n  script:\n    - snyk test\n    - sonar-scanner\n    - trivy fs .\n\n// 📌 BOAS PRÁTICAS DE SEGURANÇA\n// ✅ Scan de código (SAST)\n// ✅ Scan de dependências (SCA)\n// ✅ Testes de penetração\n// ✅ Hardening de containers\n// ✅ Gerenciamento de segredos\n// ✅ Políticas de acesso\n// ✅ Treinamento da equipe",
                        dica: "🔥 DevSecOps = Segurança em TODAS as etapas! Use SAST, DAST e SCA para detectar vulnerabilidades cedo."
                    }
                }
            ]
        },
        {
            id: "seguranca-sistemas",
            nome: "🛡️ SEGURANÇA DE SISTEMAS",
            icone: "🖥️",
            descricao: "Firewall, hardening, políticas de acesso, backup, logs",
            progresso: 0,
            subCards: [
                {
                    id: "firewall-hardening",
                    nome: "Firewall e Hardening (TUDO)",
                    icone: "🛡️",
                    descricao: "Firewall, UFW, iptables, hardening de servidor, segurança em Linux",
                    conteudo: {
                        explicacao: "Firewall e hardening são essenciais para proteger servidores e sistemas contra ataques.",
                        codigo: "# 🛡️ FIREWALL E HARDENING\n\n# 📌 UFW (UBUNTU FIREWALL)\nsudo ufw status\nsudo ufw enable\nsudo ufw allow ssh\nsudo ufw allow 80/tcp\nsudo ufw allow 443/tcp\nsudo ufw deny 22  # Bloqueia SSH (se não for usar)\n\n# 📌 IPTABLES (MAIS AVANÇADO)\nsudo iptables -L\nsudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT\nsudo iptables -A INPUT -j DROP\n\n# 📌 HARDENING DE SERVIDOR\n# 1. Desativar serviços desnecessários\nsudo systemctl disable bluetooth\n\n# 2. SSH Seguro\n# Editar /etc/ssh/sshd_config:\nPort 2222\nPermitRootLogin no\nPasswordAuthentication no\n\n# 3. Atualizar sistema\nsudo apt update && sudo apt upgrade\n\n# 4. Instalar fail2ban\nsudo apt install fail2ban\nsudo systemctl enable fail2ban\n\n# 📌 SEGURANÇA EM LINUX\n# Verificar portas abertas\nsudo netstat -tulpn\n\n# Verificar processos suspeitos\nps aux | grep -v root\n\n# Verificar logs de autenticação\ntail -f /var/log/auth.log\n\n# 📌 BACKUP\n# Agendar backups automáticos\n# Usar rsync, rclone, ou ferramentas de backup\n\n# 📌 MONITORAMENTO\n# Ver logs do sistema\njournalctl -xe\n\n# Verificar uso de recursos\nhtop\nnethogs",
                        dica: "🔥 SEMPRE: firewall ativo, SSH seguro, atualizações automáticas, fail2ban, e monitoramento de logs!"
                    }
                },
                {
                    id: "auth-security",
                    nome: "Autenticação e Autorização (TUDO)",
                    icone: "🔑",
                    descricao: "Autenticação, autorização, JWT, OAuth2, SSO, MFA",
                    conteudo: {
                        explicacao: "Autenticação verifica quem é o usuário. Autorização verifica o que ele pode fazer.",
                        codigo: "// 🔑 AUTENTICAÇÃO E AUTORIZAÇÃO\n\n// 📌 AUTENTICAÇÃO (quem é você?)\n// - Login/Senha\n// - Biometria\n// - Token (JWT)\n// - OAuth2\n// - SSO (Single Sign-On)\n// - MFA (Multi-Factor Authentication)\n\n// 📌 AUTORIZAÇÃO (o que você pode fazer?)\n// - RBAC (Role-Based Access Control)\n// - ABAC (Attribute-Based Access Control)\n// - Permissões\n\n// 📌 JWT (JSON Web Token)\nconst jwt = require('jsonwebtoken')\n\n// Gerar token\nconst token = jwt.sign(\n    { userId: 1, role: 'admin' },\n    'segredo',\n    { expiresIn: '1h' }\n)\n\n// Validar token\nconst decoded = jwt.verify(token, 'segredo')\n\n// 📌 OAuth2\n// Fluxo: Client → Authorization Server → Resource Server\n// Exemplo: Login com Google, Facebook\n\n// 📌 MFA (Multi-Factor Authentication)\n// 1. Algo que você SABE (senha)\n// 2. Algo que você TEM (token, celular)\n// 3. Algo que você É (biometria)\n\n// 📌 SPRING SECURITY (Java)\n@Configuration\n@EnableWebSecurity\npublic class SecurityConfig {\n    \n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .authorizeHttpRequests(auth -> auth\n                .requestMatchers(\"/public/**\").permitAll()\n                .requestMatchers(\"/admin/**\").hasRole(\"ADMIN\")\n                .anyRequest().authenticated()\n            );\n    }\n}\n\n// 📌 BOAS PRÁTICAS\n// ✅ Use HTTPS\n// ✅ Hash de senhas\n// ✅ Tokens com expiração\n// ✅ MFA para contas importantes\n// ✅ Políticas de senha fortes",
                        dica: "🔥 SEMPRE hash de senhas, use HTTPS, JWT com expiração, e MFA para contas críticas!"
                    }
                }
            ]
        },
        {
            id: "pratico",
            nome: "🛡️ SEGURANÇA PRÁTICA",
            icone: "🚀",
            descricao: "Ferramentas, testes, boas práticas e checklist",
            progresso: 0,
            subCards: [
                {
                    id: "checklist",
                    nome: "Checklist de Segurança (TUDO)",
                    icone: "✅",
                    descricao: "Checklist completo para sistemas seguros",
                    conteudo: {
                        explicacao: "Checklist de segurança para garantir que seu sistema está protegido.",
                        codigo: "// ✅ CHECKLIST DE SEGURANÇA\n\n// 📌 APLICAÇÃO WEB\n// ☐ HTTPS configurado\n// ☐ Validação de entrada\n// ☐ Escape de saída\n// ☐ Prepared Statements\n// ☐ Autenticação forte\n// ☐ Autorização em toda requisição\n// ☐ Tokens CSRF\n// ☐ Headers de segurança (CSP, HSTS)\n// ☐ Logs de acesso\n// ☐ Limitação de tentativas\n\n// 📌 BANCO DE DADOS\n// ☐ Conexão SSL/TLS\n// ☐ Usuários com privilégios mínimos\n// ☐ Backup automático\n// ☐ Criptografia de dados sensíveis\n// ☐ Auditoria de acessos\n\n// 📌 SERVIDOR\n// ☐ Firewall ativo\n// ☐ SSH seguro (porta, root, chaves)\n// ☐ Atualizações automáticas\n// ☐ Fail2ban\n// ☐ Monitoramento de logs\n// ☐ Backup automático\n\n// 📌 DEPENDÊNCIAS\n// ☐ Atualizadas regularmente\n// ☐ Scan de vulnerabilidades (Snyk)\n// ☐ Sem dependências obsoletas\n\n// 📌 DESENVOLVIMENTO\n// ☐ Code review\n// ☐ SAST (SonarQube)\n// ☐ DAST (OWASP ZAP)\n// ☐ Testes de penetração\n// ☐ Treinamento da equipe\n\n// 📌 INCIDENTES\n// ☐ Plano de resposta\n// ☐ Contatos de emergência\n// ☐ Procedimentos de backup\n// ☐ Comunicação com stakeholders",
                        dica: "🔥 Use esta checklist em TODO projeto! Segurança não é opcional, é OBRIGATÓRIA!"
                    }
                },
                {
                    id: "ferramentas",
                    nome: "Ferramentas (TUDO)",
                    icone: "🛠️",
                    descricao: "Nmap, Wireshark, Kali Linux, OWASP ZAP, Burp Suite, Metasploit",
                    conteudo: {
                        explicacao: "Ferramentas essenciais para testar e garantir a segurança dos sistemas.",
                        codigo: "// 🛠️ FERRAMENTAS DE SEGURANÇA\n\n// 📌 SCAN DE REDE\n// - Nmap: scanner de portas\nnmap -sV 192.168.1.1\nnmap -sS 192.168.1.0/24\n\n// 📌 ANÁLISE DE TRÁFEGO\n// - Wireshark: análise de pacotes\n// - Tcpdump: captura de pacotes\nsudo tcpdump -i eth0\n\n// 📌 TESTE DE PENETRAÇÃO\n// - Kali Linux: sistema para pentest\n// - Metasploit: framework de exploração\n// - Burp Suite: proxy para testes web\n// - OWASP ZAP: scanner de vulnerabilidades web\n\n// 📌 SCAN DE CÓDIGO\n// - SonarQube: SAST\n// - Snyk: SCA\n// - ESLint: linting de código\n\n// 📌 MONITORAMENTO\n// - Grafana + Prometheus\n// - ELK Stack (Elasticsearch, Logstash, Kibana)\n// - Wazuh: SIEM open-source\n\n// 📌 FIREWALL\n// - UFW (Linux)\n// - iptables (Linux)\n// - pfSense (appliance)\n\n// 📌 GERENCIAMENTO DE SENHAS\n// - Bitwarden\n// - LastPass\n// - KeePassXC\n\n// 📌 COMANDOS ÚTEIS\n# Ver portas abertas\nsudo netstat -tulpn\nsudo ss -tulpn\n\n# Ver processos\nps aux\nhtop\n\n# Ver logs\ntail -f /var/log/syslog\njournalctl -xe\n\n# Ver conexões\nnetstat -an | grep ESTABLISHED\nss -an | grep ESTABLISHED",
                        dica: "🔥 Use Nmap para scan de rede, Wireshark para análise, e OWASP ZAP para testes web. Essas ferramentas são ESSENCIAIS!"
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
    
    segurancaData.categorias.forEach(function(categoria) {
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
    const categoria = segurancaData.categorias.find(function(c) { return c.id === categoryId })
    
    if (!categoria) return
    
    let html = '<h2 class="section-title">🛡️ ' + categoria.nome + ' 🛡️</h2>'
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
    const categoria = segurancaData.categorias.find(function(c) { return c.id === categoryId })
    const subCard = categoria ? categoria.subCards.find(function(s) { return s.id === subCardId }) : null
    
    if (!subCard) return
    
    const isCompleted = isSubCardCompleted(categoryId, subCardId)
    const btnText = isCompleted ? '✅ TÓPICO CONCLUÍDO!' : '🛡️ MARCAR COMO CONCLUÍDO'
    
    let html = `
        <div class="content-card">
            <div class="content-title">${subCard.icone} ${subCard.nome}</div>
            <div class="content-explanation">${subCard.conteudo.explicacao}</div>
            
            <div class="code-block">
                <button class="copy-btn" onclick="copyCode(this)">📋 COPIAR</button>
                <pre>${escapeHtml(subCard.conteudo.codigo)}</pre>
            </div>
            
            <div class="tip">
                <strong>🛡️ DICA DO HAMILTON:</strong> ${subCard.conteudo.dica}
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
    const saved = localStorage.getItem('completed_seguranca_' + categoryId)
    if (!saved) return 0
    return JSON.parse(saved).length
}

function isSubCardCompleted(categoryId, subCardId) {
    const saved = localStorage.getItem('completed_seguranca_' + categoryId)
    if (!saved) return false
    const completed = JSON.parse(saved)
    return completed.includes(subCardId)
}

function toggleComplete(categoryId, subCardId) {
    let completed = JSON.parse(localStorage.getItem('completed_seguranca_' + categoryId) || '[]')
    
    if (completed.includes(subCardId)) {
        completed = completed.filter(function(id) { return id !== subCardId })
        console.log('%c📘 ' + subCardId + ' marcado como pendente', 'color: #ff8c00')
    } else {
        completed.push(subCardId)
        console.log('%c✅ ' + subCardId + ' concluído!', 'color: #00ff00')
    }
    
    localStorage.setItem('completed_seguranca_' + categoryId, JSON.stringify(completed))
    
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
    console.log('%c🛡️ Segurança da Informação F1 carregado! Hamilton\'s Garage está pronto! 🛡️', 'color: #00aa44; font-size: 14px; font-weight: bold;')
    console.log('%c⚡ Categorias → Tópicos → Conteúdo. Seu progresso é salvo automaticamente!', 'color: #ffd700; font-size: 12px;')
})