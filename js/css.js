// ESTRUTURA DE DADOS: Categorias -> SubCards -> Conteúdo
// CSS - Do Básico ao Avançado
const cssData = {
    categorias: [
        {
            id: "basico",
            nome: "🎨 CSS BÁSICO",
            icone: "📖",
            descricao: "Sintaxe, seletores, cores, box model e posicionamento",
            progresso: 0,
            subCards: [
                {
                    id: "sintaxe",
                    nome: "Sintaxe e Seletores (TUDO)",
                    icone: "📝",
                    descricao: "Regras, seletores, especificidade e cascata",
                    conteudo: {
                        explicacao: "CSS (Cascading Style Sheets) define a aparência dos elementos HTML. A sintaxe é formada por seletor, propriedade e valor.",
                        codigo: "/* 📝 SINTAXE CSS */\n\n/* Seletor { propriedade: valor; } */\nseletor {\n    propriedade: valor;\n}\n\n/* 📌 SELETORES BÁSICOS */\n\n/* Por elemento */\np { color: blue; }\ndiv { background: #f0f0f0; }\n\n/* Por classe */\n.minha-classe { font-size: 16px; }\n\n/* Por ID */\n#meu-id { border: 1px solid #000; }\n\n/* 📌 SELETORES AVANÇADOS */\n\n/* Combinador descendente */\ndiv p { color: red; }\n\n/* Combinador filho */\ndiv > p { color: green; }\n\n/* Adjacente (próximo irmão) */\nh1 + p { margin-top: 0; }\n\n/* Geral (todos irmãos) */\nh1 ~ p { color: purple; }\n\n/* 📌 SELETORES DE ATRIBUTO */\n\n/* Elemento com atributo */\ninput[type] { border: 1px solid #000; }\n\n/* Valor exato */\ninput[type=\"text\"] { background: #fff; }\n\n/* Valor contém */\na[href*=\"google\"] { color: blue; }\n\n/* Valor começa com */\na[href^=\"https\"] { color: green; }\n\n/* Valor termina com */\na[href$=\".pdf\"] { color: red; }\n\n/* 📌 PSEUDO-CLASSES (estado) */\n\n/* Hover (passar o mouse) */\nbutton:hover { background: #e44d26; }\n\n/* Focus (focado) */\ninput:focus { outline: 2px solid #264de4; }\n\n/* Visitado */\na:visited { color: purple; }\n\n/* Primeiro/Último filho */\nli:first-child { font-weight: bold; }\nli:last-child { border: none; }\n\n/* Enésimo filho */\nli:nth-child(2) { color: red; }\nli:nth-child(odd) { background: #f0f0f0; }\n\n/* 📌 PSEUDO-ELEMENTOS (partes do elemento) */\n\n/* Primeira linha */\np::first-line { font-weight: bold; }\n\n/* Primeira letra */\np::first-letter { font-size: 2em; }\n\n/* Antes e Depois */\n.elemento::before { content: \"👉 \"; }\n.elemento::after { content: \" 👈\"; }\n\n/* 📌 ESPECIFICIDADE (peso dos seletores) */\n/* ID = 100 */\n/* Classe = 10 */\n/* Elemento = 1 */\n#id { /* ganha sempre */ }",
                        dica: "💡 Quanto mais específico, maior prioridade. Use classes para reutilização, IDs para elementos únicos."
                    }
                },
                {
                    id: "cores",
                    nome: "Cores e Background (TUDO)",
                    icone: "🎨",
                    descricao: "Cores, gradientes, backgrounds e imagens",
                    conteudo: {
                        explicacao: "Cores dão vida ao seu design. CSS oferece várias formas de definir cores.",
                        codigo: "/* 🎨 CORES E BACKGROUND */\n\n/* 📌 CORES */\n\n/* Nome da cor */\ncolor: red;\ncolor: blue;\ncolor: white;\n\n/* Hexadecimal */\ncolor: #ff0000;    /* Vermelho */\ncolor: #00ff00;    /* Verde */\ncolor: #0000ff;    /* Azul */\ncolor: #ff6600;    /* Laranja */\ncolor: #333;       /* Cinza escuro (forma abreviada) */\n\n/* RGB */\ncolor: rgb(255, 0, 0);      /* Vermelho */\ncolor: rgba(255, 0, 0, 0.5); /* Vermelho com transparência */\n\n/* HSL */\ncolor: hsl(0, 100%, 50%);   /* Vermelho */\ncolor: hsla(0, 100%, 50%, 0.5); /* Com transparência */\n\n/* 📌 BACKGROUND */\n\n/* Cor de fundo */\nbackground-color: #264de4;\n\n/* Imagem de fundo */\nbackground-image: url('imagem.jpg');\n\n/* Repetição */\nbackground-repeat: no-repeat;\nbackground-repeat: repeat-x;\n\n/* Posição */\nbackground-position: center;\nbackground-position: top right;\n\n/* Tamanho */\nbackground-size: cover;\nbackground-size: contain;\n\n/* 📌 GRADIENTES */\n\n/* Linear */\nbackground: linear-gradient(to right, red, blue);\nbackground: linear-gradient(45deg, #ff6b6b, #264de4);\nbackground: linear-gradient(to bottom, #f7df1e, #e44d26);\n\n/* Radial */\nbackground: radial-gradient(circle, red, blue);\nbackground: radial-gradient(ellipse, #fff, #264de4);\n\n/* 📌 SOMBRAS */\n\n/* Sombra de texto */\ntext-shadow: 2px 2px 4px rgba(0,0,0,0.5);\n\n/* Sombra de caixa */\nbox-shadow: 0 4px 8px rgba(0,0,0,0.2);\nbox-shadow: 0 4px 8px rgba(0,0,0,0.2), 0 6px 20px rgba(0,0,0,0.19);",
                        dica: "🔥 Use CSS Variables para cores que se repetem. Gradientes são ótimos para backgrounds modernos."
                    }
                },
                {
                    id: "box-model",
                    nome: "Box Model (TUDO)",
                    icone: "📦",
                    descricao: "margin, padding, border, width, height e box-sizing",
                    conteudo: {
                        explicacao: "Box Model é o conceito fundamental do CSS. Todo elemento HTML é uma caixa retangular.",
                        codigo: "/* 📦 BOX MODEL */\n\n/* 📌 ESTRUTURA */\n/* margin (externa) > border > padding > content */\n\n.elemento {\n    /* CONTEÚDO */\n    width: 200px;\n    height: 100px;\n    \n    /* PADDING (espaçamento interno) */\n    padding: 10px;              /* Todos os lados */\n    padding: 10px 20px;         /* Cima/baixo | Esquerda/direita */\n    padding: 10px 20px 15px;    /* Cima | Lados | Baixo */\n    padding: 10px 20px 15px 5px; /* Cima | Direita | Baixo | Esquerda */\n    \n    /* BORDER (borda) */\n    border: 2px solid #264de4;\n    border: 2px dashed #e44d26;\n    border: 2px dotted #f7df1e;\n    border: 5px double #6db33f;\n    \n    /* MARGIN (espaçamento externo) */\n    margin: 20px;               /* Todos os lados */\n    margin: 20px 10px;          /* Cima/baixo | Esquerda/direita */\n    margin: 0 auto;             /* Centralizar horizontalmente */\n    \n    /* 📌 BOX-SIZING */\n    box-sizing: content-box;    /* Padrão (width = conteúdo) */\n    box-sizing: border-box;     /* width = conteúdo + padding + border */\n}\n\n/* 📌 EXEMPLO PRÁTICO */\n/* Usando border-box para facilitar */\n* {\n    box-sizing: border-box;\n}\n\n.card {\n    width: 300px;\n    padding: 20px;\n    border: 1px solid #ccc;\n    margin: 10px;\n    border-radius: 8px;\n}\n\n/* 📌 BORDER-RADIUS */\n/* Cantos arredondados */\nborder-radius: 5px;\nborder-radius: 50%;  /* Círculo */\nborder-radius: 10px 20px 30px 40px; /* Cada canto */",
                        dica: "🔥 SEMPRE use box-sizing: border-box. Isso facilita o cálculo de tamanhos."
                    }
                },
                {
                    id: "display-position",
                    nome: "Display e Position (TUDO)",
                    icone: "📐",
                    descricao: "display: block, inline, flex, grid; position: relative, absolute, fixed, sticky",
                    conteudo: {
                        explicacao: "Display define o tipo de caixa, Position controla o posicionamento dos elementos.",
                        codigo: "/* 📐 DISPLAY E POSITION */\n\n/* 📌 DISPLAY */\n\n/* Block - ocupa toda largura, quebra linha */\ndisplay: block;\n\n/* Inline - só ocupa o conteúdo, não quebra linha */\ndisplay: inline;\n\n/* Inline-Block - inline que aceita width/height */\ndisplay: inline-block;\n\n/* None - esconde o elemento */\ndisplay: none;\n\n/* 📌 POSITION */\n\n/* Static - padrão, segue o fluxo */\nposition: static;\n\n/* Relative - relativo à sua posição original */\nposition: relative;\ntop: 10px;\nleft: 20px;\n\n/* Absolute - relativo ao pai mais próximo com position */\nposition: absolute;\ntop: 0;\nright: 0;\n\n/* Fixed - relativo à viewport (janela) */\nposition: fixed;\ntop: 0;\nleft: 0;\nwidth: 100%;\n\n/* Sticky - mistura relative + fixed */\nposition: sticky;\ntop: 0;  /* Fica fixo ao rolar */\n\n/* 📌 Z-INDEX (sobreposição) */\nz-index: 10;  /* Maior número fica por cima */\n\n/* 📌 FLOAT (alinhamento) */\nfloat: left;\nfloat: right;\nclear: both;  /* Limpa floats */\n\n/* 📌 OVERFLOW (conteúdo que transborda) */\noverflow: visible;  /* Padrão */\noverflow: hidden;   /* Esconde */\noverflow: scroll;   /* Adiciona scroll */\noverflow: auto;     /* Scroll automático */",
                        dica: "💡 Use position: relative para containers de elementos absolutos. position: sticky é ótimo para headers fixos."
                    }
                }
            ]
        },
        {
            id: "flex-grid",
            nome: "🎨 FLEXBOX E GRID",
            icone: "📐",
            descricao: "Flexbox, Grid, alinhamento, responsividade e layouts modernos",
            progresso: 0,
            subCards: [
                {
                    id: "flexbox",
                    nome: "Flexbox (TUDO)",
                    icone: "📐",
                    descricao: "display: flex, flex-direction, justify-content, align-items, flex-wrap",
                    conteudo: {
                        explicacao: "Flexbox é um modelo de layout que distribui espaço entre itens de forma eficiente.",
                        codigo: "/* 📐 FLEXBOX */\n\n/* 📌 CONTAINER FLEX */\n.container {\n    display: flex;\n    \n    /* Direção do eixo principal */\n    flex-direction: row;        /* Padrão (linha) */\n    flex-direction: row-reverse; /* Linha invertida */\n    flex-direction: column;     /* Coluna */\n    flex-direction: column-reverse; /* Coluna invertida */\n    \n    /* Alinhamento no eixo principal */\n    justify-content: flex-start;    /* Início */\n    justify-content: flex-end;      /* Final */\n    justify-content: center;        /* Centralizado */\n    justify-content: space-between; /* Espaço entre */\n    justify-content: space-around;  /* Espaço ao redor */\n    justify-content: space-evenly;  /* Espaço igual */\n    \n    /* Alinhamento no eixo transversal */\n    align-items: stretch;      /* Esticar (padrão) */\n    align-items: flex-start;   /* Início */\n    align-items: flex-end;     /* Final */\n    align-items: center;       /* Centralizado */\n    align-items: baseline;     /* Linha de base */\n    \n    /* Quebra de linha */\n    flex-wrap: nowrap;         /* Não quebra (padrão) */\n    flex-wrap: wrap;           /* Quebra */\n    flex-wrap: wrap-reverse;   /* Quebra invertida */\n    \n    /* Espaçamento entre linhas */\n    align-content: center;\n    gap: 10px;\n}\n\n/* 📌 ITEMS FLEX */\n.item {\n    /* Ordem */\n    order: 2;\n    \n    /* Crescimento */\n    flex-grow: 1;  /* 0 = não cresce, 1 = cresce */\n    \n    /* Encolhimento */\n    flex-shrink: 1;\n    \n    /* Tamanho base */\n    flex-basis: auto;\n    \n    /* Shorthand */\n    flex: 1;                    /* grow:1, shrink:1, basis:0 */\n    flex: 1 1 200px;            /* grow:1, shrink:1, basis:200px */\n    \n    /* Alinhamento individual */\n    align-self: center;\n}\n\n/* 📌 EXEMPLO PRÁTICO */\n/* Centralizar um elemento */\n.centro {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n}\n\n/* Cards lado a lado */\n.cards {\n    display: flex;\n    gap: 20px;\n    flex-wrap: wrap;\n}\n.card {\n    flex: 1;\n    min-width: 200px;\n}",
                        dica: "🔥 Flexbox é ESSENCIAL para layouts modernos! Use justify-content para alinhamento no eixo principal, align-items para o transversal."
                    }
                },
                {
                    id: "grid",
                    nome: "Grid (TUDO)",
                    icone: "📐",
                    descricao: "display: grid, grid-template-columns, grid-template-rows, grid-area, gap",
                    conteudo: {
                        explicacao: "CSS Grid é o sistema de layout mais poderoso. Permite criar layouts bidimensionais complexos.",
                        codigo: "/* 📐 CSS GRID */\n\n/* 📌 CONTAINER GRID */\n.container {\n    display: grid;\n    \n    /* Definir colunas */\n    grid-template-columns: 100px 200px 100px;\n    grid-template-columns: 1fr 2fr 1fr;  /* Frações */\n    grid-template-columns: repeat(3, 1fr); /* 3 colunas iguais */\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Responsivo */\n    \n    /* Definir linhas */\n    grid-template-rows: 100px 200px;\n    grid-template-rows: auto 1fr auto;\n    \n    /* Espaçamento */\n    gap: 20px;\n    column-gap: 30px;\n    row-gap: 20px;\n    \n    /* Áreas nomeadas */\n    grid-template-areas:\n        \"header header header\"\n        \"sidebar main main\"\n        \"footer footer footer\";\n}\n\n/* 📌 ITEMS GRID */\n.item {\n    /* Ocupar colunas */\n    grid-column: 1 / 3;        /* Da coluna 1 até 3 */\n    grid-column: span 2;       /* Ocupar 2 colunas */\n    \n    /* Ocupar linhas */\n    grid-row: 2 / 4;\n    grid-row: span 2;\n    \n    /* Usar áreas nomeadas */\n    grid-area: header;\n    grid-area: sidebar;\n    grid-area: main;\n}\n\n/* 📌 EXEMPLO PRÁTICO - LAYOUT CLÁSSICO */\n.layout {\n    display: grid;\n    grid-template-columns: 250px 1fr;\n    grid-template-rows: 80px 1fr 60px;\n    grid-template-areas:\n        \"header header\"\n        \"sidebar main\"\n        \"footer footer\";\n    gap: 20px;\n    min-height: 100vh;\n}\n\n.header { grid-area: header; }\n.sidebar { grid-area: sidebar; }\n.main { grid-area: main; }\n.footer { grid-area: footer; }\n\n/* 📌 RESPONSIVO COM GRID */\n@media (max-width: 768px) {\n    .layout {\n        grid-template-columns: 1fr;\n        grid-template-rows: auto;\n        grid-template-areas:\n            \"header\"\n            \"main\"\n            \"sidebar\"\n            \"footer\";\n    }\n}",
                        dica: "🔥 Grid é o MAIS PODEROSO sistema de layout. Use grid-template-areas para layouts complexos e grid-template-columns com auto-fill para responsividade."
                    }
                }
            ]
        },
        {
            id: "responsivo",
            nome: "🎨 RESPONSIVIDADE",
            icone: "📱",
            descricao: "Media queries, breakpoints, mobile-first, viewport, unidades relativas",
            progresso: 0,
            subCards: [
                {
                    id: "media-queries",
                    nome: "Media Queries (TUDO)",
                    icone: "📱",
                    descricao: "@media, breakpoints, mobile-first, desktop-first",
                    conteudo: {
                        explicacao: "Media Queries permitem aplicar estilos diferentes com base nas características do dispositivo.",
                        codigo: "/* 📱 MEDIA QUERIES */\n\n/* 📌 BREAKPOINTS COMUNS */\n\n/* Mobile (até 480px) */\n/* Tablet (481px - 768px) */\n/* Desktop (769px - 1024px) */\n/* Desktop Grande (1025px+) */\n\n/* 📌 MOBILE-FIRST (RECOMENDADO) */\n\n/* Estilos base (mobile) */\n.elemento {\n    font-size: 14px;\n    padding: 10px;\n}\n\n/* Tablet */\n@media (min-width: 768px) {\n    .elemento {\n        font-size: 16px;\n        padding: 20px;\n    }\n}\n\n/* Desktop */\n@media (min-width: 1024px) {\n    .elemento {\n        font-size: 18px;\n        padding: 30px;\n    }\n}\n\n/* 📌 DESKTOP-FIRST */\n.elemento {\n    font-size: 18px;\n    padding: 30px;\n}\n\n@media (max-width: 1024px) {\n    .elemento {\n        font-size: 16px;\n        padding: 20px;\n    }\n}\n\n@media (max-width: 768px) {\n    .elemento {\n        font-size: 14px;\n        padding: 10px;\n    }\n}\n\n/* 📌 COMBINAÇÕES */\n\n/* Landscape (horizontal) */\n@media (orientation: landscape) {\n    .elemento {\n        flex-direction: row;\n    }\n}\n\n/* Retrato (vertical) */\n@media (orientation: portrait) {\n    .elemento {\n        flex-direction: column;\n    }\n}\n\n/* Telas com alta resolução */\n@media (min-resolution: 2dppx) {\n    .elemento {\n        background-image: url('imagem-2x.png');\n    }\n}\n\n/* 📌 EXEMPLO PRÁTICO */\n/* Grid responsivo */\n.grid {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 20px;\n}\n\n@media (min-width: 768px) {\n    .grid {\n        grid-template-columns: repeat(2, 1fr);\n    }\n}\n\n@media (min-width: 1024px) {\n    .grid {\n        grid-template-columns: repeat(4, 1fr);\n    }\n}",
                        dica: "🔥 MOBILE-FIRST é a melhor prática! Comece pelo mobile e vá adicionando estilos para telas maiores."
                    }
                },
                {
                    id: "unidades",
                    nome: "Unidades e Viewport (TUDO)",
                    icone: "📏",
                    descricao: "px, %, em, rem, vw, vh, vmin, vmax, calc()",
                    conteudo: {
                        explicacao: "Unidades relativas são essenciais para layouts responsivos e fluidos.",
                        codigo: "/* 📏 UNIDADES CSS */\n\n/* 📌 UNIDADES ABSOLUTAS */\npixels: px          /* 1px = 1/96 polegada */\n\n/* 📌 UNIDADES RELATIVAS */\n\n/* % - relativo ao elemento pai */\nwidth: 100%;\nfont-size: 150%;\n\n/* em - relativo ao font-size do pai */\nfont-size: 1.2em;    /* 1.2x o pai */\npadding: 1em;        /* igual ao font-size atual */\n\n/* rem - relativo ao root (html) */\nfont-size: 1.2rem;   /* 1.2x o html */\nmargin: 1rem;\n\n/* 📌 VIEWPORT */\n\n/* vw = 1% da largura da viewport */\nwidth: 100vw;\nfont-size: 2vw;\n\n/* vh = 1% da altura da viewport */\nheight: 100vh;\nmin-height: 100vh;\n\n/* vmin = 1% da menor dimensão */\nfont-size: 2vmin;\n\n/* vmax = 1% da maior dimensão */\nfont-size: 2vmax;\n\n/* 📌 FUNÇÃO CALC() */\nwidth: calc(100% - 40px);\nheight: calc(100vh - 80px);\nfont-size: calc(16px + 0.5vw);\n\n/* 📌 EXEMPLO PRÁTICO */\n.container {\n    max-width: 1200px;\n    width: 90%;\n    margin: 0 auto;\n}\n\n.hero {\n    min-height: 100vh;\n    display: flex;\n    align-items: center;\n    padding: 2rem;\n}\n\n.titulo {\n    font-size: clamp(2rem, 5vw, 4rem);\n    /* Mínimo: 2rem, Ideal: 5vw, Máximo: 4rem */\n}",
                        dica: "🔥 Use rem para fontes, % para larguras, vh/vw para full screen, clamp() para fontes responsivas."
                    }
                }
            ]
        },
        {
            id: "avancado",
            nome: "🎨 CSS AVANÇADO",
            icone: "⚡",
            descricao: "Transitions, animations, transform, variables, pseudo-classes, pseudo-elements",
            progresso: 0,
            subCards: [
                {
                    id: "animacoes",
                    nome: "Transitions e Animations (TUDO)",
                    icone: "🎬",
                    descricao: "transition, animation, @keyframes, transform",
                    conteudo: {
                        explicacao: "Animações e transições dão vida ao seu site, melhorando a experiência do usuário.",
                        codigo: "/* 🎬 ANIMAÇÕES CSS */\n\n/* 📌 TRANSITION (transições) */\n.elemento {\n    /* Propriedade, duração, easing, delay */\n    transition: all 0.3s ease;\n    transition: background-color 0.5s ease-in-out;\n    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.elemento:hover {\n    background-color: #264de4;\n    transform: scale(1.1);\n}\n\n/* 📌 KEYFRAMES (quadros-chave) */\n@keyframes pulse {\n    0% { transform: scale(1); }\n    50% { transform: scale(1.1); }\n    100% { transform: scale(1); }\n}\n\n@keyframes slideIn {\n    from {\n        transform: translateX(-100%);\n        opacity: 0;\n    }\n    to {\n        transform: translateX(0);\n        opacity: 1;\n    }\n}\n\n@keyframes fadeIn {\n    0% { opacity: 0; }\n    100% { opacity: 1; }\n}\n\n/* 📌 ANIMATION */\n.elemento {\n    animation: pulse 2s infinite;\n    animation: slideIn 0.5s ease-out;\n    animation: fadeIn 1s ease-in forwards;\n}\n\n/* Propriedades completas */\nanimation-name: pulse;\nanimation-duration: 2s;\nanimation-timing-function: ease-in-out;\nanimation-delay: 0.5s;\nanimation-iteration-count: infinite;\nanimation-direction: alternate;\nanimation-fill-mode: forwards;\n\n/* 📌 TRANSFORM (transformações) */\n/* Scale (escala) */\ntransform: scale(1.5);\ntransform: scaleX(2);\ntransform: scaleY(0.5);\n\n/* Translate (movimento) */\ntransform: translateX(50px);\ntransform: translateY(-20px);\ntransform: translate(50px, -20px);\n\n/* Rotate (rotação) */\ntransform: rotate(45deg);\ntransform: rotateX(180deg);\n\n/* Skew (inclinação) */\ntransform: skew(10deg, 5deg);\n\n/* Combine */\ntransform: translate(50px, 20px) rotate(45deg) scale(1.2);",
                        dica: "🔥 Use transitions para interações simples. Use animations para animações contínuas ou complexas."
                    }
                },
                {
                    id: "css-variables",
                    nome: "CSS Variables (TUDO)",
                    icone: "📦",
                    descricao: "var(), --var, custom properties, scoping",
                    conteudo: {
                        explicacao: "CSS Variables (Custom Properties) permitem reutilizar valores em todo o CSS.",
                        codigo: "/* 📦 CSS VARIABLES */\n\n/* 📌 DEFINIÇÃO (root) */\n:root {\n    /* Cores */\n    --primary: #264de4;\n    --secondary: #e44d26;\n    --accent: #f7df1e;\n    --success: #6db33f;\n    --danger: #ff6b6b;\n    \n    /* Espaçamento */\n    --spacing-sm: 8px;\n    --spacing-md: 16px;\n    --spacing-lg: 24px;\n    --spacing-xl: 32px;\n    \n    /* Fontes */\n    --font-size-sm: 14px;\n    --font-size-md: 16px;\n    --font-size-lg: 20px;\n    --font-size-xl: 24px;\n    \n    /* Outros */\n    --border-radius: 8px;\n    --box-shadow: 0 4px 8px rgba(0,0,0,0.1);\n}\n\n/* 📌 USO */\n.elemento {\n    color: var(--primary);\n    background: var(--secondary);\n    padding: var(--spacing-md);\n    border-radius: var(--border-radius);\n    box-shadow: var(--box-shadow);\n    font-size: var(--font-size-md);\n}\n\n/* 📌 ESCOPO (sobrescrever) */\n.card {\n    --primary: #e44d26;\n    color: var(--primary);\n}\n\n/* 📌 FALLBACK (valor padrão) */\n.elemento {\n    color: var(--cor-inexistente, #000);\n}\n\n/* 📌 EXEMPLO PRÁTICO - TEMAS */\n:root {\n    --bg: #fff;\n    --text: #333;\n}\n\n[data-theme=\"dark\"] {\n    --bg: #1a1a1a;\n    --text: #f5f5f5;\n}\n\nbody {\n    background: var(--bg);\n    color: var(--text);\n}",
                        dica: "🔥 CSS Variables são ESSENCIAIS para temas e manutenção. Use :root para variáveis globais."
                    }
                },
                {
                    id: "pseudo",
                    nome: "Pseudo-classes e Pseudo-elements (TUDO)",
                    icone: "🎯",
                    descricao: ":hover, :focus, :nth-child, ::before, ::after e muito mais",
                    conteudo: {
                        explicacao: "Pseudo-classes estilizam estados, Pseudo-elements estilizam partes específicas.",
                        codigo: "/* 🎯 PSEUDO-CLASSES E PSEUDO-ELEMENTS */\n\n/* 📌 PSEUDO-CLASSES (estados) */\n\n/* Hover */\nbutton:hover { background: #e44d26; }\n\n/* Focus */\ninput:focus { border-color: #264de4; }\n\n/* Active (clicado) */\nbutton:active { transform: scale(0.95); }\n\n/* Visited (links visitados) */\na:visited { color: purple; }\n\n/* Checked (checkbox/radio) */\ninput:checked { background: #264de4; }\n\n/* Disabled */\nbutton:disabled { opacity: 0.5; }\n\n/* Required */\ninput:required { border-color: #ff6b6b; }\n\n/* 📌 PSEUDO-ELEMENTS (partes) */\n\n/* Primeira linha */\np::first-line { font-weight: bold; }\n\n/* Primeira letra */\np::first-letter { font-size: 2em; }\n\n/* Selection (texto selecionado) */\n::selection {\n    background: #264de4;\n    color: #fff;\n}\n\n/* Before e After (conteúdo) */\n.elemento::before {\n    content: \"👉 \";\n    color: #e44d26;\n}\n\n.elemento::after {\n    content: \" 👈\";\n    color: #264de4;\n}\n\n/* 📌 PSEUDO-CLASSES COMUNS */\n\n/* Primeiro/Último filho */\nli:first-child { border-top: none; }\nli:last-child { border-bottom: none; }\n\n/* Enésimo filho */\nli:nth-child(2) { background: #f0f0f0; }\nli:nth-child(odd) { background: #f9f9f9; }\nli:nth-child(3n+1) { color: red; }\n\n/* Not (negação) */\nli:not(.ativo) { opacity: 0.5; }\n\n/* Has (tem filho) - moderno */\ndiv:has(p) { background: #f0f0f0; }",
                        dica: "🔥 Pseudo-classes: hover, focus, nth-child. Pseudo-elements: before, after (ótimos para ícones e decoração)."
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
    
    cssData.categorias.forEach(function(categoria) {
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
    const categoria = cssData.categorias.find(function(c) { return c.id === categoryId })
    
    if (!categoria) return
    
    let html = '<h2 class="section-title">🎨 ' + categoria.nome + ' 🎨</h2>'
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
    const categoria = cssData.categorias.find(function(c) { return c.id === categoryId })
    const subCard = categoria ? categoria.subCards.find(function(s) { return s.id === subCardId }) : null
    
    if (!subCard) return
    
    const isCompleted = isSubCardCompleted(categoryId, subCardId)
    const btnText = isCompleted ? '✅ TÓPICO CONCLUÍDO!' : '🎨 MARCAR COMO CONCLUÍDO'
    
    let html = `
        <div class="content-card">
            <div class="content-title">${subCard.icone} ${subCard.nome}</div>
            <div class="content-explanation">${subCard.conteudo.explicacao}</div>
            
            <div class="code-block">
                <button class="copy-btn" onclick="copyCode(this)">📋 COPIAR</button>
                <pre>${escapeHtml(subCard.conteudo.codigo)}</pre>
            </div>
            
            <div class="tip">
                <strong>🎨 DICA DO HAMILTON:</strong> ${subCard.conteudo.dica}
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
    const saved = localStorage.getItem('completed_css_' + categoryId)
    if (!saved) return 0
    return JSON.parse(saved).length
}

function isSubCardCompleted(categoryId, subCardId) {
    const saved = localStorage.getItem('completed_css_' + categoryId)
    if (!saved) return false
    const completed = JSON.parse(saved)
    return completed.includes(subCardId)
}

function toggleComplete(categoryId, subCardId) {
    let completed = JSON.parse(localStorage.getItem('completed_css_' + categoryId) || '[]')
    
    if (completed.includes(subCardId)) {
        completed = completed.filter(function(id) { return id !== subCardId })
        console.log('%c📘 ' + subCardId + ' marcado como pendente', 'color: #ff8c00')
    } else {
        completed.push(subCardId)
        console.log('%c✅ ' + subCardId + ' concluído!', 'color: #00ff00')
    }
    
    localStorage.setItem('completed_css_' + categoryId, JSON.stringify(completed))
    
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
    console.log('%c🎨 CSS F1 carregado! Hamilton\'s Garage está pronto! 🎨', 'color: #264de4; font-size: 14px; font-weight: bold;')
    console.log('%c⚡ Categorias → Tópicos → Conteúdo. Seu progresso é salvo automaticamente!', 'color: #ffd700; font-size: 12px;')
})