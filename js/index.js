// Dados dos cards com os links das páginas
const tecnologias = [
    {
        nome: "Java",
        icone: "☕",
        descricao: "Linguagem robusta, multiplataforma e orientada a objetos",
        status: "🔥 Nível: Shirai Ryu",
        link: "./pages/java.html"
    },
    {
        nome: "Spring Boot 3",
        icone: "🍃",
        descricao: "Framework poderoso para APIs e microsserviços",
        status: "⚡ Get Over Here!",
        link: "#"
    },
    {
        nome: "Maven",
        icone: "📦",
        descricao: "Gerenciador de dependências e build automation",
        status: "🏗️ Construa como um mestre",
        link: "#"
    },
    {
        nome: "JavaScript",
        icone: "🟡",
        descricao: "A alma da interatividade web",
        status: "🎯 Toasty!",
        link: "#"
    },
    {
        nome: "HTML",
        icone: "🌐",
        descricao: "Estrutura e semântica da web",
        status: "🕸️ A armadura do ninja",
        link: "#"
    },
    {
        nome: "CSS",
        icone: "🎨",
        descricao: "Estilização e design responsivo",
        status: "🔥 Queime com estilo",
        link: "#"
    },
    {
        nome: "PostgreSQL",
        icone: "🐘",
        descricao: "Banco relacional avançado e confiável",
        status: "🗡️ Dados afiados",
        link: "#"
    },
    {
        nome: "Redis",
        icone: "⚡",
        descricao: "Banco em memória de altíssima performance",
        status: "💨 Velocidade de fogo",
        link: "#"
    },
    {
        nome: "Docker",
        icone: "🐳",
        descricao: "Containerização e ambientes isolados",
        status: "📦 Empacote sua kunai",
        link: "#"
    },
    {
        nome: "Git",
        icone: "📜",
        descricao: "Controle de versão e colaboração",
        status: "🔄 Clone, commit e victory!",
        link: "#"
    },
    {
        nome: "JSON",
        icone: "🔗",
        descricao: "Formato leve de troca de dados",
        status: "📡 Fatality na comunicação",
        link: "#"
    },
    {
        nome: "Terminal Linux",
        icone: "💻",
        descricao: "Poder e controle nos seus dedos",
        status: "⌨️ Comandos de verdade",
        link: "#"
    }
];

// Função para criar os cards
function criarCards() {
    const grid = document.getElementById('cardsGrid');
    
    if (!grid) return;
    
    tecnologias.forEach((tech, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        
        // Evento de clique com redirecionamento
        card.addEventListener('click', () => {
            if (tech.link && tech.link !== '#') {
                // Redireciona para a página específica
                window.location.href = tech.link;
            } else {
                // Mostra aviso para páginas em desenvolvimento
                alert(`⚔️ Prepare-se para dominar ${tech.nome}! ⚔️\n\n"Get over here and study!"\n\n📌 Página em desenvolvimento. Em breve, as chamas do conhecimento chegarão!`);
            }
        });
        
        card.innerHTML = `
            <div class="card-icon">${tech.icone}</div>
            <h3>${tech.nome}</h3>
            <div class="tech-desc">${tech.descricao}</div>
            <div class="tech-status">${tech.status}</div>
        `;
        
        grid.appendChild(card);
    });
}

// Efeito de digitação no título
function typeWriterEffect() {
    const title = document.querySelector('.logo h1');
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

// Efeito sonoro imaginário (console)
function playGetOverHere() {
    console.log("%c🔥 GET OVER HERE! 🔥", "color: #ff4500; font-size: 16px; font-weight: bold;");
    console.log("%c⚔️ Fatality em seus estudos! ⚔️", "color: #ffd700; font-size: 14px;");
}

// Animação ao clicar no Scorpion
function setupScorpionClick() {
    const scorpion = document.querySelector('.scorpion-silhouette');
    if (!scorpion) return;
    
    scorpion.addEventListener('click', () => {
        playGetOverHere();
        
        // Efeito visual temporário
        const spear = document.querySelector('.spear');
        if (spear) {
            spear.style.animation = 'none';
            setTimeout(() => {
                spear.style.animation = 'throwSpear 1s ease-in-out';
            }, 10);
            setTimeout(() => {
                spear.style.animation = 'throwSpear 3s ease-in-out infinite';
            }, 1000);
        }
    });
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    criarCards();
    setupScorpionClick();
    typeWriterEffect();
    
    console.log("%c🔥 Scorpion's Code carregado! Prepare-se para lutar! 🔥", "color: #ff4500; font-size: 14px; font-weight: bold;");
});