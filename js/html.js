// ESTRUTURA DE DADOS: Categorias -> SubCards -> Conteúdo
// HTML - Do Básico ao Avançado
const htmlData = {
    categorias: [
        {
            id: "basico",
            nome: "🌐 HTML BÁSICO",
            icone: "📖",
            descricao: "Estrutura, tags, atributos, headings, parágrafos, links, imagens",
            progresso: 0,
            subCards: [
                {
                    id: "estrutura",
                    nome: "Estrutura HTML (TUDO)",
                    icone: "🏗️",
                    descricao: "DOCTYPE, html, head, body, meta, title, lang",
                    conteudo: {
                        explicacao: "A estrutura HTML é a base de toda página web. Todo documento HTML começa com a declaração DOCTYPE e segue uma hierarquia de tags.",
                        codigo: "<!DOCTYPE html>\n<html lang=\"pt-br\">\n<head>\n    <!-- Metadados da página -->\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta name=\"description\" content=\"Minha página web\">\n    <title>Minha Página</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n    <!-- Conteúdo visível da página -->\n    <header>\n        <h1>Minha Página</h1>\n        <nav>\n            <ul>\n                <li><a href=\"#\">Home</a></li>\n                <li><a href=\"#\">Sobre</a></li>\n            </ul>\n        </nav>\n    </header>\n    \n    <main>\n        <section>\n            <h2>Conteúdo Principal</h2>\n            <p>Texto da minha página.</p>\n        </section>\n    </main>\n    \n    <footer>\n        <p>© 2025 - Meu Site</p>\n    </footer>\n    \n    <script src=\"script.js\"></script>\n</body>\n</html>",
                        dica: "💡 SEMPRE declare DOCTYPE e charset UTF-8. Use lang para acessibilidade. A estrutura semanticamente correta é essencial!"
                    }
                },
                {
                    id: "tags-basicas",
                    nome: "Tags Básicas (TUDO)",
                    icone: "🏷️",
                    descricao: "h1-h6, p, a, img, br, hr, strong, em, span, div",
                    conteudo: {
                        explicacao: "Tags básicas são os blocos de construção do HTML. Elas definem a estrutura e o conteúdo da página.",
                        codigo: "<!-- 📌 HEADINGS (Títulos) -->\n<h1>Título Principal</h1>\n<h2>Subtítulo</h2>\n<h3>Sub-subtítulo</h3>\n<h4>Nível 4</h4>\n<h5>Nível 5</h5>\n<h6>Nível 6</h6>\n\n<!-- 📌 PARÁGRAFOS -->\n<p>Este é um parágrafo de texto. Ele contém informações importantes.</p>\n<p>Outro parágrafo com <strong>texto em negrito</strong> e <em>texto em itálico</em>.</p>\n\n<!-- 📌 LINKS (Âncoras) -->\n<a href=\"https://www.google.com\">Google</a>\n<a href=\"#secao\">Link interno</a>\n<a href=\"mailto:email@exemplo.com\">Email</a>\n<a href=\"tel:+5511999999999\">Telefone</a>\n<a href=\"https://site.com\" target=\"_blank\">Abrir em nova aba</a>\n\n<!-- 📌 IMAGENS -->\n<img src=\"imagem.jpg\" alt=\"Descrição da imagem\">\n<img src=\"imagem.jpg\" alt=\"Descrição\" width=\"300\" height=\"200\">\n\n<!-- 📌 QUEBRAS -->\n<br>  <!-- Quebra de linha -->\n<hr>  <!-- Linha horizontal -->\n\n<!-- 📌 FORMATAÇÃO DE TEXTO -->\n<strong>Texto importante (negrito)</strong>\n<em>Texto enfatizado (itálico)</em>\n<u>Texto sublinhado</u>\n<s>Texto riscado</s>\n<mark>Texto destacado</mark>\n<small>Texto menor</small>\n<del>Texto deletado</del>\n<ins>Texto inserido</ins>\n<sub>Texto subscrito</sub>\n<sup>Texto sobrescrito</sup>\n\n<!-- 📌 CONTAINERS -->\n<div>Container de bloco</div>\n<span>Container inline</span>",
                        dica: "🔥 Use tags semânticas sempre que possível. h1 deve ser único por página. Use alt nas imagens para acessibilidade."
                    }
                },
                {
                    id: "listas",
                    nome: "Listas (TUDO)",
                    icone: "📋",
                    descricao: "ul, ol, li, dl, dt, dd, listas aninhadas",
                    conteudo: {
                        explicacao: "Listas organizam informações de forma estruturada. HTML tem listas ordenadas, não ordenadas e de definição.",
                        codigo: "<!-- 📌 LISTA NÃO ORDENADA -->\n<ul>\n    <li>Item 1</li>\n    <li>Item 2</li>\n    <li>Item 3</li>\n</ul>\n\n<!-- 📌 LISTA ORDENADA -->\n<ol>\n    <li>Primeiro item</li>\n    <li>Segundo item</li>\n    <li>Terceiro item</li>\n</ol>\n\n<!-- 📌 LISTA ORDENADA COM ATRIBUTOS -->\n<ol type=\"A\">  <!-- A, a, I, i, 1 -->\n    <li>Item A</li>\n    <li>Item B</li>\n</ol>\n\n<ol start=\"5\">  <!-- Começa do 5 -->\n    <li>Item 5</li>\n    <li>Item 6</li>\n</ol>\n\n<!-- 📌 LISTA DE DEFINIÇÃO -->\n<dl>\n    <dt>HTML</dt>\n    <dd>Linguagem de marcação para páginas web</dd>\n    <dt>CSS</dt>\n    <dd>Linguagem de estilização</dd>\n    <dt>JavaScript</dt>\n    <dd>Linguagem de programação para interatividade</dd>\n</dl>\n\n<!-- 📌 LISTAS ANINHADAS -->\n<ul>\n    <li>Frontend\n        <ul>\n            <li>HTML</li>\n            <li>CSS</li>\n            <li>JavaScript</li>\n        </ul>\n    </li>\n    <li>Backend\n        <ul>\n            <li>Java</li>\n            <li>Python</li>\n        </ul>\n    </li>\n</ul>",
                        dica: "💡 Use ul para listas não ordenadas, ol para listas ordenadas. Listas aninhadas são ótimas para menus e hierarquias."
                    }
                },
                {
                    id: "tabelas",
                    nome: "Tabelas (TUDO)",
                    icone: "📊",
                    descricao: "table, tr, td, th, thead, tbody, tfoot, colspan, rowspan",
                    conteudo: {
                        explicacao: "Tabelas organizam dados em linhas e colunas. São essenciais para apresentar informações tabulares.",
                        codigo: "<!-- 📌 TABELA BÁSICA -->\n<table border=\"1\">\n    <tr>\n        <th>Nome</th>\n        <th>Idade</th>\n        <th>Cidade</th>\n    </tr>\n    <tr>\n        <td>Hamilton</td>\n        <td>44</td>\n        <td>Londres</td>\n    </tr>\n    <tr>\n        <td>Leclerc</td>\n        <td>26</td>\n        <td>Mônaco</td>\n    </tr>\n</table>\n\n<!-- 📌 TABELA COMPLETA -->\n<table border=\"1\">\n    <caption>Pilotos F1</caption>\n    <thead>\n        <tr>\n            <th>Nome</th>\n            <th>Número</th>\n            <th>Equipe</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>Hamilton</td>\n            <td>44</td>\n            <td>Ferrari</td>\n        </tr>\n        <tr>\n            <td>Leclerc</td>\n            <td>16</td>\n            <td>Ferrari</td>\n        </tr>\n    </tbody>\n    <tfoot>\n        <tr>\n            <td colspan=\"3\">Total: 2 pilotos</td>\n        </tr>\n    </tfoot>\n</table>\n\n<!-- 📌 COLSPAN E ROWSPAN -->\n<table border=\"1\">\n    <tr>\n        <th colspan=\"2\">Informações Pessoais</th>\n        <th>Equipe</th>\n    </tr>\n    <tr>\n        <td>Nome</td>\n        <td>Hamilton</td>\n        <td rowspan=\"2\">Ferrari</td>\n    </tr>\n    <tr>\n        <td>Idade</td>\n        <td>44</td>\n    </tr>\n</table>",
                        dica: "🔥 Use thead, tbody, tfoot para organizar tabelas grandes. Use colspan para mesclar colunas, rowspan para mesclar linhas."
                    }
                }
            ]
        },
        {
            id: "formularios",
            nome: "🌐 FORMULÁRIOS",
            icone: "📝",
            descricao: "form, input, button, select, textarea, label, fieldset, legend",
            progresso: 0,
            subCards: [
                {
                    id: "form-basico",
                    nome: "Formulários (TUDO)",
                    icone: "📝",
                    descricao: "form, action, method, input types, button, label",
                    conteudo: {
                        explicacao: "Formulários são a base da interação do usuário. Permitem enviar dados para o servidor.",
                        codigo: "<!-- 📌 FORMULÁRIO BÁSICO -->\n<form action=\"/enviar\" method=\"POST\">\n    <label for=\"nome\">Nome:</label>\n    <input type=\"text\" id=\"nome\" name=\"nome\" required>\n    \n    <label for=\"email\">Email:</label>\n    <input type=\"email\" id=\"email\" name=\"email\" required>\n    \n    <label for=\"senha\">Senha:</label>\n    <input type=\"password\" id=\"senha\" name=\"senha\">\n    \n    <button type=\"submit\">Enviar</button>\n</form>\n\n<!-- 📌 INPUT TYPES -->\n<input type=\"text\">           <!-- Texto -->\n<input type=\"email\">          <!-- Email -->\n<input type=\"password\">       <!-- Senha -->\n<input type=\"number\">         <!-- Número -->\n<input type=\"tel\">            <!-- Telefone -->\n<input type=\"url\">            <!-- URL -->\n<input type=\"date\">           <!-- Data -->\n<input type=\"time\">           <!-- Hora -->\n<input type=\"datetime-local\"> <!-- Data e hora -->\n<input type=\"color\">          <!-- Cor -->\n<input type=\"range\">          <!-- Controle deslizante -->\n<input type=\"file\">           <!-- Arquivo -->\n<input type=\"checkbox\">       <!-- Checkbox -->\n<input type=\"radio\">          <!-- Radio -->\n<input type=\"search\">         <!-- Busca -->\n<input type=\"hidden\">         <!-- Oculto -->\n\n<!-- 📌 ATRIBUTOS IMPORTANTES -->\n<input type=\"text\" \n       placeholder=\"Digite seu nome\" \n       required \n       maxlength=\"100\" \n       minlength=\"3\"\n       pattern=\"[A-Za-z]+\"\n       value=\"Valor padrão\"\n       readonly\n       disabled>",
                        dica: "💡 SEMPRE use label com for ligado ao input id. Use required para campos obrigatórios. Use type específico para validação automática."
                    }
                },
                {
                    id: "form-avancado",
                    nome: "Formulários Avançados",
                    icone: "⚡",
                    descricao: "select, textarea, fieldset, legend, datalist, progress, meter",
                    conteudo: {
                        explicacao: "Elementos avançados para formulários mais complexos e interativos.",
                        codigo: "<!-- 📌 SELECT (Dropdown) -->\n<label for=\"pais\">País:</label>\n<select id=\"pais\" name=\"pais\">\n    <option value=\"\">Selecione um país</option>\n    <option value=\"BR\">Brasil</option>\n    <option value=\"US\">EUA</option>\n    <option value=\"UK\">Reino Unido</option>\n</select>\n\n<!-- 📌 SELECT MÚLTIPLO -->\n<select id=\"interesses\" name=\"interesses\" multiple>\n    <option value=\"esporte\">Esporte</option>\n    <option value=\"musica\">Música</option>\n    <option value=\"tecnologia\">Tecnologia</option>\n</select>\n\n<!-- 📌 TEXTAREA -->\n<label for=\"mensagem\">Mensagem:</label>\n<textarea id=\"mensagem\" name=\"mensagem\" rows=\"5\" cols=\"30\" placeholder=\"Digite sua mensagem...\"></textarea>\n\n<!-- 📌 FIELDSET E LEGEND -->\n<fieldset>\n    <legend>Dados Pessoais</legend>\n    <label for=\"nome\">Nome:</label>\n    <input type=\"text\" id=\"nome\" name=\"nome\">\n    \n    <label for=\"idade\">Idade:</label>\n    <input type=\"number\" id=\"idade\" name=\"idade\">\n</fieldset>\n\n<!-- 📌 DATALIST (Autocomplete) -->\n<input list=\"linguagens\" name=\"linguagem\">\n<datalist id=\"linguagens\">\n    <option value=\"HTML\">\n    <option value=\"CSS\">\n    <option value=\"JavaScript\">\n    <option value=\"Java\">\n    <option value=\"Python\">\n</datalist>\n\n<!-- 📌 PROGRESS E METER -->\n<label for=\"progresso\">Progresso:</label>\n<progress id=\"progresso\" value=\"70\" max=\"100\">70%</progress>\n\n<label for=\"nivel\">Nível:</label>\n<meter id=\"nivel\" value=\"8\" min=\"0\" max=\"10\">80%</meter>",
                        dica: "🔥 Use fieldset e legend para agrupar campos relacionados. Datalist oferece autocomplete sem obrigar seleção."
                    }
                }
            ]
        },
        {
            id: "semantica",
            nome: "🌐 HTML SEMÂNTICO",
            icone: "🎯",
            descricao: "header, nav, main, section, article, aside, footer, figure, figcaption",
            progresso: 0,
            subCards: [
                {
                    id: "semantica-basica",
                    nome: "Tags Semânticas (TUDO)",
                    icone: "🎯",
                    descricao: "header, nav, main, section, article, aside, footer",
                    conteudo: {
                        explicacao: "Tags semânticas dão significado ao conteúdo, melhoram acessibilidade e SEO.",
                        codigo: "<!-- 📌 ESTRUTURA SEMÂNTICA COMPLETA -->\n<body>\n    <!-- CABEÇALHO -->\n    <header>\n        <h1>Meu Site</h1>\n        <p>Subtítulo do site</p>\n    </header>\n    \n    <!-- NAVEGAÇÃO -->\n    <nav>\n        <ul>\n            <li><a href=\"#\">Home</a></li>\n            <li><a href=\"#\">Sobre</a></li>\n            <li><a href=\"#\">Contato</a></li>\n        </ul>\n    </nav>\n    \n    <!-- CONTEÚDO PRINCIPAL -->\n    <main>\n        <!-- SEÇÃO -->\n        <section>\n            <h2>Sobre Nós</h2>\n            <p>Texto sobre a empresa.</p>\n            \n            <!-- ARTICLE (conteúdo independente) -->\n            <article>\n                <h3>Notícia 1</h3>\n                <p>Conteúdo da notícia.</p>\n                <time datetime=\"2025-01-01\">1 de janeiro de 2025</time>\n            </article>\n            \n            <article>\n                <h3>Notícia 2</h3>\n                <p>Conteúdo da notícia.</p>\n            </article>\n        </section>\n        \n        <!-- ASIDE (conteúdo relacionado) -->\n        <aside>\n            <h3>Links Úteis</h3>\n            <ul>\n                <li><a href=\"#\">Link 1</a></li>\n                <li><a href=\"#\">Link 2</a></li>\n            </ul>\n        </aside>\n    </main>\n    \n    <!-- RODAPÉ -->\n    <footer>\n        <p>© 2025 - Todos os direitos reservados</p>\n        <p>Desenvolvido por F1 Code</p>\n    </footer>\n</body>\n\n<!-- 📌 FIGURE E FIGCAPTION -->\n<figure>\n    <img src=\"imagem.jpg\" alt=\"Descrição\">\n    <figcaption>Legenda da imagem</figcaption>\n</figure>\n\n<!-- 📌 TIME -->\n<p>Publicado em <time datetime=\"2025-01-01\">1 de janeiro de 2025</time></p>\n<p>Horário: <time datetime=\"14:30\">14:30</time></p>",
                        dica: "🔥 Tags semânticas são OBRIGATÓRIAS para acessibilidade e SEO. Use main apenas uma vez por página. Section agrupa conteúdo relacionado."
                    }
                },
                {
                    id: "acessibilidade",
                    nome: "Acessibilidade (TUDO)",
                    icone: "♿",
                    descricao: "aria, role, alt, title, lang, tabindex, focus management",
                    conteudo: {
                        explicacao: "Acessibilidade garante que todos possam usar seu site, incluindo pessoas com deficiências.",
                        codigo: "<!-- 📌 ATRIBUTOS DE ACESSIBILIDADE -->\n\n<!-- ARIA (Accessible Rich Internet Applications) -->\n<nav role=\"navigation\">\n    <ul>\n        <li><a href=\"#\" aria-current=\"page\">Home</a></li>\n        <li><a href=\"#\">Sobre</a></li>\n    </ul>\n</nav>\n\n<button aria-label=\"Fechar menu\" aria-expanded=\"false\">\n    ☰\n</button>\n\n<div role=\"dialog\" aria-labelledby=\"titulo-modal\" aria-modal=\"true\">\n    <h2 id=\"titulo-modal\">Modal</h2>\n    <p>Conteúdo do modal</p>\n</div>\n\n<!-- 📌 ROLES -->\n<header role=\"banner\"></header>\n<nav role=\"navigation\"></nav>\n<main role=\"main\"></main>\n<section role=\"region\"></section>\n<article role=\"article\"></article>\n<aside role=\"complementary\"></aside>\n<footer role=\"contentinfo\"></footer>\n\n<!-- 📌 CONTROLE DE FOCO -->\n<!-- tabindex: ordem de navegação por tab -->\n<div tabindex=\"0\">Elemento focável</div>\n<button tabindex=\"-1\">Elemento removido da ordem tab</button>\n\n<!-- 📌 Acessibilidade em imagens -->\n<img src=\"logo.png\" alt=\"Logo da F1 Code\">\n<img src=\"decoracao.png\" alt=\"\" role=\"presentation\">\n\n<!-- 📌 Acessibilidade em formulários -->\n<label for=\"nome\">Nome:</label>\n<input type=\"text\" id=\"nome\" aria-required=\"true\" aria-describedby=\"ajuda-nome\">\n<span id=\"ajuda-nome\">Digite seu nome completo</span>\n\n<!-- 📌 SKIP LINKS (pular para conteúdo) -->\n<a href=\"#conteudo\" class=\"skip-link\">Pular para o conteúdo</a>\n\n<!-- 📌 ARIA-LIVE (atualizações dinâmicas) -->\n<div aria-live=\"polite\" aria-atomic=\"true\">\n    <!-- Conteúdo que será atualizado -->\n</div>",
                        dica: "🔥 Acessibilidade é LEI! Use alt em todas as imagens, labels em todos os inputs, e roles quando necessário."
                    }
                }
            ]
        },
        {
            id: "multimidia",
            nome: "🌐 MULTIMÍDIA",
            icone: "🎬",
            descricao: "audio, video, embed, iframe, picture, source, figure",
            progresso: 0,
            subCards: [
                {
                    id: "audio-video",
                    nome: "Áudio e Vídeo (TUDO)",
                    icone: "🎬",
                    descricao: "audio, video, source, track, autoplay, controls, loop",
                    conteudo: {
                        explicacao: "HTML5 permite incorporar áudio e vídeo nativamente, sem plugins.",
                        codigo: "<!-- 📌 ÁUDIO -->\n<audio controls>\n    <source src=\"audio.mp3\" type=\"audio/mpeg\">\n    <source src=\"audio.ogg\" type=\"audio/ogg\">\n    <p>Seu navegador não suporta áudio.</p>\n</audio>\n\n<!-- 📌 ÁUDIO COM ATRIBUTOS -->\n<audio controls autoplay loop muted preload=\"auto\">\n    <source src=\"musica.mp3\" type=\"audio/mpeg\">\n</audio>\n\n<!-- 📌 VÍDEO -->\n<video controls width=\"640\" height=\"360\">\n    <source src=\"video.mp4\" type=\"video/mp4\">\n    <source src=\"video.webm\" type=\"video/webm\">\n    <track kind=\"subtitles\" src=\"legendas.vtt\" srclang=\"pt\" label=\"Português\">\n    <track kind=\"subtitles\" src=\"legendas-en.vtt\" srclang=\"en\" label=\"English\">\n    <p>Seu navegador não suporta vídeo.</p>\n</video>\n\n<!-- 📌 VÍDEO COM ATRIBUTOS -->\n<video controls autoplay loop muted poster=\"thumb.jpg\" playsinline>\n    <source src=\"video.mp4\" type=\"video/mp4\">\n</video>\n\n<!-- 📌 IFRAME (incorporar conteúdo) -->\n<iframe src=\"https://www.google.com/maps/embed\" \n        width=\"600\" \n        height=\"450\" \n        allowfullscreen>\n</iframe>\n\n<!-- 📌 IFRAME COM SEGURANÇA -->\n<iframe src=\"https://site.com\" \n        sandbox=\"allow-scripts allow-same-origin\" \n        loading=\"lazy\">\n</iframe>\n\n<!-- 📌 EMBED (objetos embutidos) -->\n<embed src=\"documento.pdf\" type=\"application/pdf\" width=\"100%\" height=\"600\">\n\n<!-- 📌 PICTURE (imagens responsivas) -->\n<picture>\n    <source media=\"(min-width: 1024px)\" srcset=\"imagem-grande.jpg\">\n    <source media=\"(min-width: 768px)\" srcset=\"imagem-media.jpg\">\n    <img src=\"imagem-pequena.jpg\" alt=\"Imagem responsiva\">\n</picture>",
                        dica: "🔥 Use múltiplos source para compatibilidade. Sempre inclua controles para usuário. Use picture para imagens responsivas."
                    }
                }
            ]
        },
        {
            id: "avancado",
            nome: "🌐 HTML AVANÇADO",
            icone: "⚡",
            descricao: "Canvas, SVG, Web Components, Templates, Drag and Drop, Geolocation",
            progresso: 0,
            subCards: [
                {
                    id: "canvas-svg",
                    nome: "Canvas e SVG (TUDO)",
                    icone: "🎨",
                    descricao: "canvas, svg, desenho gráfico e animações",
                    conteudo: {
                        explicacao: "Canvas e SVG permitem criar gráficos diretamente no navegador.",
                        codigo: "<!-- 📌 SVG (Gráficos vetoriais) -->\n<svg width=\"200\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\">\n    <!-- Círculo -->\n    <circle cx=\"100\" cy=\"100\" r=\"50\" fill=\"#e44d26\" stroke=\"#fff\" stroke-width=\"3\"/>\n    \n    <!-- Retângulo -->\n    <rect x=\"50\" y=\"50\" width=\"100\" height=\"80\" fill=\"#f7df1e\" rx=\"10\"/>\n    \n    <!-- Linha -->\n    <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"20\" stroke=\"#fff\" stroke-width=\"3\"/>\n    \n    <!-- Texto -->\n    <text x=\"100\" y=\"120\" font-size=\"24\" text-anchor=\"middle\" fill=\"#000\">F1</text>\n    \n    <!-- Caminho (path) -->\n    <path d=\"M10 10 L100 10 L100 100 Z\" fill=\"#6db33f\"/>\n</svg>\n\n<!-- 📌 CANVAS (Desenho via JS) -->\n<canvas id=\"meuCanvas\" width=\"400\" height=\"300\"></canvas>\n\n<script>\n    const canvas = document.getElementById('meuCanvas')\n    const ctx = canvas.getContext('2d')\n    \n    // Retângulo\n    ctx.fillStyle = '#e44d26'\n    ctx.fillRect(50, 50, 100, 80)\n    \n    // Círculo\n    ctx.beginPath()\n    ctx.arc(250, 90, 40, 0, Math.PI * 2)\n    ctx.fillStyle = '#f7df1e'\n    ctx.fill()\n    \n    // Texto\n    ctx.fillStyle = '#fff'\n    ctx.font = '24px Arial'\n    ctx.fillText('F1 Code', 100, 200)\n</script>",
                        dica: "💡 Use SVG para ícones e gráficos simples. Use Canvas para gráficos complexos e jogos. SVG é escalável, Canvas é pixel-based."
                    }
                },
                {
                    id: "web-components",
                    nome: "Web Components",
                    icone: "🧩",
                    descricao: "Custom Elements, Shadow DOM, Templates, Slots",
                    conteudo: {
                        explicacao: "Web Components permitem criar elementos HTML reutilizáveis com funcionalidades encapsuladas.",
                        codigo: "<!-- 📌 TEMPLATE (HTML reutilizável) -->\n<template id=\"meu-template\">\n    <style>\n        .card {\n            border: 1px solid #ccc;\n            padding: 20px;\n            border-radius: 8px;\n        }\n    </style>\n    <div class=\"card\">\n        <slot name=\"titulo\">Título padrão</slot>\n        <slot name=\"conteudo\">Conteúdo padrão</slot>\n    </div>\n</template>\n\n<!-- 📌 USANDO O TEMPLATE -->\n<div id=\"app\"></div>\n<script>\n    const template = document.getElementById('meu-template')\n    const clone = template.content.cloneNode(true)\n    \n    // Personalizando slots\n    clone.querySelector('[name=\"titulo\"]').textContent = 'Meu Título'\n    clone.querySelector('[name=\"conteudo\"]').textContent = 'Meu Conteúdo'\n    \n    document.getElementById('app').appendChild(clone)\n</script>\n\n<!-- 📌 CUSTOM ELEMENTS -->\n<script>\n    class MeuCard extends HTMLElement {\n        constructor() {\n            super()\n            const shadow = this.attachShadow({ mode: 'open' })\n            shadow.innerHTML = `\n                <style>\n                    .card {\n                        border: 2px solid #e44d26;\n                        padding: 20px;\n                        border-radius: 8px;\n                    }\n                </style>\n                <div class=\"card\">\n                    <slot name=\"titulo\">Título</slot>\n                    <slot name=\"conteudo\">Conteúdo</slot>\n                </div>\n            `\n        }\n    }\n    customElements.define('meu-card', MeuCard)\n</script>\n\n<!-- 📌 USANDO O CUSTOM ELEMENT -->\n<meu-card>\n    <span slot=\"titulo\">Hamilton</span>\n    <p slot=\"conteudo\">Piloto da Ferrari</p>\n</meu-card>",
                        dica: "🔥 Web Components são o futuro! Permitem criar componentes reutilizáveis em qualquer framework ou sem framework."
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
    
    htmlData.categorias.forEach(function(categoria) {
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
    const categoria = htmlData.categorias.find(function(c) { return c.id === categoryId })
    
    if (!categoria) return
    
    let html = '<h2 class="section-title">🌐 ' + categoria.nome + ' 🌐</h2>'
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
    const categoria = htmlData.categorias.find(function(c) { return c.id === categoryId })
    const subCard = categoria ? categoria.subCards.find(function(s) { return s.id === subCardId }) : null
    
    if (!subCard) return
    
    const isCompleted = isSubCardCompleted(categoryId, subCardId)
    const btnText = isCompleted ? '✅ TÓPICO CONCLUÍDO!' : '🌐 MARCAR COMO CONCLUÍDO'
    
    let html = `
        <div class="content-card">
            <div class="content-title">${subCard.icone} ${subCard.nome}</div>
            <div class="content-explanation">${subCard.conteudo.explicacao}</div>
            
            <div class="code-block">
                <button class="copy-btn" onclick="copyCode(this)">📋 COPIAR</button>
                <pre>${escapeHtml(subCard.conteudo.codigo)}</pre>
            </div>
            
            <div class="tip">
                <strong>🌐 DICA DO HAMILTON:</strong> ${subCard.conteudo.dica}
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
    const saved = localStorage.getItem('completed_html_' + categoryId)
    if (!saved) return 0
    return JSON.parse(saved).length
}

function isSubCardCompleted(categoryId, subCardId) {
    const saved = localStorage.getItem('completed_html_' + categoryId)
    if (!saved) return false
    const completed = JSON.parse(saved)
    return completed.includes(subCardId)
}

function toggleComplete(categoryId, subCardId) {
    let completed = JSON.parse(localStorage.getItem('completed_html_' + categoryId) || '[]')
    
    if (completed.includes(subCardId)) {
        completed = completed.filter(function(id) { return id !== subCardId })
        console.log('%c📘 ' + subCardId + ' marcado como pendente', 'color: #ff8c00')
    } else {
        completed.push(subCardId)
        console.log('%c✅ ' + subCardId + ' concluído!', 'color: #00ff00')
    }
    
    localStorage.setItem('completed_html_' + categoryId, JSON.stringify(completed))
    
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
    console.log('%c🌐 HTML F1 carregado! Hamilton\'s Garage está pronto! 🌐', 'color: #e44d26; font-size: 14px; font-weight: bold;')
    console.log('%c⚡ Categorias → Tópicos → Conteúdo. Seu progresso é salvo automaticamente!', 'color: #ffd700; font-size: 12px;')
})