// Dados dos cards com os links das páginas
const tecnologias = [
    {
        nome: "Java",
        icone: "☕",
        descricao: "Linguagem robusta, multiplataforma e orientada a objetos",
        status: "🏁 Nível: Piloto Principal",
        link: "./pages/java.html"
    },
    {
        nome: "Spring Boot 3",
        icone: "🍃",
        descricao: "Framework poderoso para APIs e microsserviços",
        status: "⚡ Velocidade máxima!",
        link: "#"
    },
    {
        nome: "Maven",
        icone: "📦",
        descricao: "Gerenciador de dependências e build automation",
        status: "🏗️ Construa como um campeão",
        link: "#"
    },
    {
        nome: "JavaScript",
        icone: "🟡",
        descricao: "A alma da interatividade web",
        status: "🎯 Na mira da vitória!",
        link: "#"
    },
    {
        nome: "HTML",
        icone: "🌐",
        descricao: "Estrutura e semântica da web",
        status: "🕸️ O chassi do seu carro",
        link: "#"
    },
    {
        nome: "CSS",
        icone: "🎨",
        descricao: "Estilização e design responsivo",
        status: "🔥 Pintura da Ferrari",
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
        status: "💨 Pit Stop rápido!",
        link: "#"
    },
    {
        nome: "Docker",
        icone: "🐳",
        descricao: "Containerização e ambientes isolados",
        status: "📦 Seu box de corrida",
        link: "./pages/docker.html"
    },
    {
        nome: "Git",
        icone: "📜",
        descricao: "Controle de versão e colaboração",
        status: "🔄 Pit Stop de código",
        link: "#"
    },
    {
        nome: "JSON",
        icone: "🔗",
        descricao: "Formato leve de troca de dados",
        status: "📡 Telemetria da corrida",
        link: "#"
    },
    {
        nome: "Terminal Linux",
        icone: "💻",
        descricao: "Poder e controle nos seus dedos",
        status: "⌨️ Seu volante de comando",
        link: "./pages/terminal.html"
    },
    {
        nome: "Lógica de Programação",
        icone: "🧠",
        descricao: "Pensamento computacional e algoritmos",
        status: "🏁 Estratégia de corrida",
        link: "#"
    },
    {
        nome: "Segurança da Informação",
        icone: "🔒",
        descricao: "Proteção de dados, criptografia e boas práticas",
        status: "🛡️ Escudo do piloto",
        link: "#"
    },
    {
        nome: "N8N",
        icone: "⚙️",
        descricao: "Automação de workflows e integrações",
        status: "🏎️ Pit Crew automatizado",
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
                window.location.href = tech.link;
            } else {
                alert(`🏁 Prepare-se para dominar ${tech.nome}! 🏁\n\n"A velocidade é nada sem controle" - Lewis Hamilton\n\n📌 Página em desenvolvimento. Em breve na pista!`);
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

// Animação ao clicar no carro (IMAGEM REAL)
function setupCarClick() {
    const carWrapper = document.querySelector('.ferrari-car-wrapper');
    if (!carWrapper) return;
    
    carWrapper.addEventListener('click', () => {
        console.log("%c🏎️ VROOOM! HAMILTON NA PISTA! 🏎️", "color: #dc0000; font-size: 16px; font-weight: bold;");
        console.log("%c🏁 Acelere seus estudos! 🏁", "color: #ffd700; font-size: 14px;");
        
        // Efeito de "aceleração"
        carWrapper.style.transition = 'all 0.3s ease';
        carWrapper.style.transform = 'scale(1.05) rotate(-1deg)';
        carWrapper.style.boxShadow = '0 20px 80px rgba(220, 0, 0, 0.8)';
        
        // Efeito de flash na imagem
        const image = carWrapper.querySelector('.ferrari-car-image');
        if (image) {
            image.style.transition = 'all 0.2s';
            image.style.filter = 'brightness(1.3) saturate(1.5)';
        }
        
        setTimeout(() => {
            carWrapper.style.transform = 'scale(1) rotate(0deg)';
            carWrapper.style.boxShadow = '0 10px 40px rgba(220, 0, 0, 0.4)';
            if (image) {
                image.style.filter = 'brightness(0.85) saturate(1.1)';
            }
        }, 500);
    });
}

// Verificar se a imagem carregou corretamente
function checkImageLoad() {
    const img = document.querySelector('.ferrari-car-image');
    if (!img) return;
    
    img.addEventListener('load', () => {
        console.log("%c✅ Imagem da Ferrari carregada com sucesso!", "color: #00ff00; font-size: 12px;");
    });
    
    img.addEventListener('error', () => {
        console.log("%c❌ ERRO: Imagem não encontrada. Verifique o link ou baixe a imagem localmente.", "color: #ff0000; font-size: 12px;");
        // Fallback: tenta carregar uma imagem alternativa
        img.src = 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80';
    });
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    criarCards();
    setupCarClick();
    typeWriterEffect();
    checkImageLoad();
    
    console.log("%c🏎️ F1 Code carregado! Hamilton's Garage está pronto! 🏎️", "color: #dc0000; font-size: 14px; font-weight: bold;");
    console.log("%c🏁 Lewis Hamilton #44 — Scuderia Ferrari 🏁", "color: #ffd700; font-size: 12px;");
});