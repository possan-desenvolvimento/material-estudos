// ESTRUTURA DE DADOS: Categorias -> SubCards -> Conteúdo
const javaData = {
    categorias: [
        {
            id: "basico",
            nome: "JAVA BÁSICO",
            icone: "📚",
            descricao: "Fundamentos essenciais: variáveis, tipos, condicionais e loops",
            progresso: 0,
            subCards: [
                {
                    id: "variaveis",
                    nome: "Variáveis e Tipos",
                    icone: "📦",
                    descricao: "int, double, String, boolean e declaração",
                    conteudo: {
                        explicacao: "Java é <strong>fortemente tipada</strong> - você DEVE declarar o tipo de cada variável antes de usar. Isso evita erros bobos e torna o código mais seguro.",
                        codigo: `// Tipos mais usados no dia a dia
int idade = 25;              // números inteiros
double altura = 1.75;       // números decimais
String nome = "Scorpion";   // texto
boolean vivo = true;        // verdadeiro/falso

// Declarando múltiplas variáveis
int a = 10, b = 20, c = 30;

// Declarar sem valor inicial
int xp;
xp = 1000;  // depois atribui`,
                        dica: "💡 REGRA DE OURO: Sempre comece com int para números, double para decimais, String para texto!"
                    }
                },
                {
                    id: "conversao",
                    nome: "Conversão de Tipos",
                    icone: "🔄",
                    descricao: "Casting, parseInt e conversões entre tipos",
                    conteudo: {
                        explicacao: "Às vezes você precisa converter um tipo em outro. Java faz automaticamente (quando é seguro) ou exige conversão manual.",
                        codigo: `// Conversão automática (menor → maior) - SEGURO
int numero = 10;
double decimal = numero;     // 10.0 (OK! não perde dados)

// Conversão manual (maior → menor) - PODE PERDER DADOS!
double nota = 8.7;
int notaInteira = (int) nota;  // 8 (perdeu o ,7)

// String → Número (MUITO USADO no dia a dia!)
String idadeTexto = "25";
int idadeNumero = Integer.parseInt(idadeTexto);

// Número → String
int xp = 1500;
String xpTexto = String.valueOf(xp);  // "1500"`,
                        dica: "⚡ MAIS USADO: Integer.parseInt() para converter texto de formulários/API em números!"
                    }
                },
                {
                    id: "condicionais",
                    nome: "Condicionais (if/else)",
                    icone: "🎯",
                    descricao: "if, else, else if e switch",
                    conteudo: {
                        explicacao: "Estruturas que executam código APENAS se uma condição for verdadeira.",
                        codigo: `// IF simples
int idade = 18;
if (idade >= 18) {
    System.out.println("Pode dirigir!");
}

// IF/ELSE
int nota = 65;
if (nota >= 60) {
    System.out.println("Aprovado!");
} else {
    System.out.println("Reprovado!");
}

// ELSE IF (múltiplas condições)
int pontuacao = 85;
if (pontuacao >= 90) {
    System.out.println("Nota A");
} else if (pontuacao >= 80) {
    System.out.println("Nota B");
} else if (pontuacao >= 70) {
    System.out.println("Nota C");
} else {
    System.out.println("Precisa melhorar");
}

// SWITCH (múltiplas opções fixas)
String dia = "segunda";
switch (dia) {
    case "segunda":
        System.out.println("Início da semana 🔥");
        break;
    case "sexta":
        System.out.println("Quase lá!");
        break;
    default:
        System.out.println("Dia normal");
}`,
                        dica: "🔥 Use if/else para 2-3 condições. Use switch para muitas opções fixas (dias, menus)."
                    }
                },
                {
                    id: "operador-ternario",
                    nome: "Operador Ternário",
                    icone: "⚡",
                    descricao: "if/else em uma linha",
                    conteudo: {
                        explicacao: "Um if/else em UMA LINHA. Perfeito para atribuições rápidas e simples.",
                        codigo: `// Estrutura: condição ? valor_se_verdadeiro : valor_se_falso

// Exemplo 1: Atribuição simples
int idade = 18;
String status = (idade >= 18) ? "Maior de idade" : "Menor de idade";
System.out.println(status);  // "Maior de idade"

// Exemplo 2: Com números
int nota = 75;
String resultado = (nota >= 60) ? "Aprovado" : "Reprovado";

// Exemplo 3: No System.out.println
System.out.println((5 > 3) ? "Verdadeiro" : "Falso");`,
                        dica: "⚡ USE quando: for uma condição simples e você quer atribuir um valor. NÃO aninhe muitos!"
                    }
                },
                {
                    id: "loops",
                    nome: "Loops (For/While)",
                    icone: "🔄",
                    descricao: "FOR, WHILE, DO-WHILE, Break e Continue",
                    conteudo: {
                        explicacao: "Estruturas que repetem código. FOR quando sabe quantas vezes, WHILE quando não sabe.",
                        codigo: `// FOR - quando sabe quantas vezes
for (int i = 0; i < 5; i++) {
    System.out.println("Número: " + i);
}

// FOR-EACH - para arrays/coleções
String[] lutadores = {"Scorpion", "Sub-Zero"};
for (String lutador : lutadores) {
    System.out.println("🔥 " + lutador);
}

// WHILE - quando não sabe quantas vezes
int contador = 0;
while (contador < 5) {
    System.out.println("Volta: " + contador);
    contador++;
}

// DO-WHILE - executa pelo menos uma vez
int tentativa = 0;
do {
    System.out.println("Tentativa " + (tentativa + 1));
    tentativa++;
} while (tentativa < 3);

// BREAK - para o loop
for (int i = 0; i < 10; i++) {
    if (i == 5) break;
    System.out.println(i);
}

// CONTINUE - pula iteração
for (int i = 0; i < 5; i++) {
    if (i == 2) continue;
    System.out.println(i);
}`,
                        dica: "💡 FOR = sei quantas vezes. WHILE = não sei quantas vezes. DO-WHILE = executa pelo menos uma vez."
                    }
                }
            ]
        },
        {
            id: "metodos",
            nome: "JAVA MÉTODOS",
            icone: "🛠️",
            descricao: "Criação, parâmetros, retorno e sobrecarga de métodos",
            progresso: 0,
            subCards: [
                {
                    id: "criando-metodos",
                    nome: "Criando Métodos",
                    icone: "⚙️",
                    descricao: "Sintaxe, tipos de retorno e parâmetros",
                    conteudo: {
                        explicacao: "Métodos são blocos de código reutilizáveis. Eles podem receber parâmetros e retornar valores.",
                        codigo: `// Método SIMPLES (não retorna nada)
public void dizerOla() {
    System.out.println("Olá, Scorpion!");
}

// Método com PARÂMETRO
public void saudacao(String nome) {
    System.out.println("Olá, " + nome + "!");
}

// Método com RETORNO
public int somar(int a, int b) {
    return a + b;
}

// Método com RETORNO BOOLEAN
public boolean ehMaior(int a, int b) {
    return a > b;
}

// Chamando os métodos
dizerOla();
saudacao("Sub-Zero");
int resultado = somar(10, 20);  // resultado = 30
boolean maior = ehMaior(100, 50);  // true`,
                        dica: "💡 Métodos evitam repetição de código. Use nomes claros e verbos no início (calcular, buscar, validar)."
                    }
                },
                {
                    id: "sobrecarga",
                    nome: "Sobrecarga (Overload)",
                    icone: "🔄",
                    descricao: "Múltiplos métodos com mesmo nome",
                    conteudo: {
                        explicacao: "Sobrecarga permite criar MÚLTIPLOS métodos com o MESMO nome, mas parâmetros DIFERENTES.",
                        codigo: `// MESMO nome, PARÂMETROS diferentes
public int somar(int a, int b) {
    return a + b;
}

public int somar(int a, int b, int c) {
    return a + b + c;
}

public double somar(double a, double b) {
    return a + b;
}

// Usando a sobrecarga
System.out.println(somar(10, 20));          // 30
System.out.println(somar(10, 20, 30));      // 60
System.out.println(somar(10.5, 20.5));      // 31.0`,
                        dica: "⚡ Sobrecarga = mesmo nome, parâmetros diferentes. Útil para flexibilidade!"
                    }
                }
            ]
        },
        {
            id: "classes",
            nome: "JAVA CLASSES",
            icone: "🏗️",
            descricao: "Atributos, construtores, encapsulamento e objetos",
            progresso: 0,
            subCards: [
                {
                    id: "criando-classes",
                    nome: "Criando Classes",
                    icone: "📦",
                    descricao: "Atributos, métodos e objetos",
                    conteudo: {
                        explicacao: "Classe é o molde. Objeto é a instância. Atributos são características, métodos são ações.",
                        codigo: `// Definindo uma CLASSE
public class Lutador {
    // Atributos (características)
    String nome;
    int poder;
    double vida;
    
    // Método (ação)
    void socar() {
        System.out.println(nome + " deu um soco!");
    }
    
    void golpeEspecial() {
        System.out.println(nome + " usou GET OVER HERE! 💀");
    }
}

// Usando a classe (criando OBJETOS)
public class Main {
    public static void main(String[] args) {
        Lutador scorpion = new Lutador();
        scorpion.nome = "Scorpion";
        scorpion.poder = 9000;
        scorpion.vida = 100.0;
        
        scorpion.socar();            // "Scorpion deu um soco!"
        scorpion.golpeEspecial();     // "Scorpion usou GET OVER HERE!"
    }
}`,
                        dica: "🔥 Classe = molde. Objeto = o que você cria com o molde. Atributos = características. Métodos = ações."
                    }
                },
                {
                    id: "construtores",
                    nome: "Construtores",
                    icone: "🏗️",
                    descricao: "Inicializando objetos ao criar",
                    conteudo: {
                        explicacao: "Construtor é um método especial que roda AUTOMATICAMENTE quando você cria um objeto.",
                        codigo: `public class Lutador {
    String nome;
    int poder;
    
    // CONSTRUTOR (mesmo nome da classe)
    public Lutador(String nome, int poder) {
        this.nome = nome;    // this se refere ao atributo da classe
        this.poder = poder;
        System.out.println(nome + " foi criado! 🔥");
    }
    
    void exibir() {
        System.out.println(nome + " tem " + poder + " de poder");
    }
}

// Criando objetos (construtor é chamado automaticamente)
Lutador scorpion = new Lutador("Scorpion", 9000);
Lutador subzero = new Lutador("Sub-Zero", 8500);

scorpion.exibir();  // "Scorpion tem 9000 de poder"`,
                        dica: "💡 Construtor garante que o objeto já nasce com valores válidos. Use 'this' para diferenciar atributo de parâmetro."
                    }
                },
                {
                    id: "encapsulamento",
                    nome: "Encapsulamento",
                    icone: "🔒",
                    descricao: "private, getters e setters",
                    conteudo: {
                        explicacao: "Encapsulamento protege os atributos. Use 'private' e crie getters/setters para acessar.",
                        codigo: `public class Lutador {
    private String nome;   // private = só a classe pode acessar
    private int poder;
    
    // Construtor
    public Lutador(String nome, int poder) {
        this.nome = nome;
        this.poder = poder;
    }
    
    // GETTER (acessar o valor)
    public String getNome() {
        return nome;
    }
    
    public int getPoder() {
        return poder;
    }
    
    // SETTER (modificar o valor)
    public void setPoder(int poder) {
        if (poder > 0) {
            this.poder = poder;
        }
    }
}

// Usando
Lutador scorpion = new Lutador("Scorpion", 9000);
System.out.println(scorpion.getNome());    // "Scorpion"
scorpion.setPoder(9999);                    // modifica poder`,
                        dica: "⚡ Private protege. Getter lê. Setter modifica com validação. Isso é encapsulamento!"
                    }
                }
            ]
        },
        {
            id: "poo",
            nome: "JAVA OOP",
            icone: "🎭",
            descricao: "Herança, polimorfismo, abstração e interfaces",
            progresso: 0,
            subCards: [
                {
                    id: "heranca",
                    nome: "Herança",
                    icone: "👨‍👦",
                    descricao: "Reutilizando código com 'extends'",
                    conteudo: {
                        explicacao: "Herança permite uma classe herdar atributos e métodos de outra. Usa 'extends'.",
                        codigo: `// Classe PAI (superclasse)
public class Personagem {
    String nome;
    int vida;
    
    void atacar() {
        System.out.println(nome + " atacou!");
    }
}

// Classe FILHA (subclasse) - herda tudo do PAI
public class Lutador extends Personagem {
    int poder;
    
    void golpeEspecial() {
        System.out.println(nome + " usou Golpe Especial!");
    }
}

// Usando
Lutador scorpion = new Lutador();
scorpion.nome = "Scorpion";     // veio do PAI
scorpion.poder = 9000;          // da própria classe
scorpion.atacar();              // veio do PAI
scorpion.golpeEspecial();       // da própria classe`,
                        dica: "💡 Herança = REAPROVEITAMENTO. Use quando uma classe é UMA ESPÉCIE de outra (Lutador é UM Personagem)."
                    }
                },
                {
                    id: "polimorfismo",
                    nome: "Polimorfismo",
                    icone: "🔄",
                    descricao: "Métodos com comportamentos diferentes",
                    conteudo: {
                        explicacao: "Polimorfismo permite uma MESMA ação se comportar de formas DIFERENTES.",
                        codigo: `// Classe PAI
public class Animal {
    void fazerSom() {
        System.out.println("Animal faz algum som");
    }
}

// Classes FILHAS sobrescrevem o método
public class Cachorro extends Animal {
    @Override
    void fazerSom() {
        System.out.println("Au au! 🐕");
    }
}

public class Gato extends Animal {
    @Override
    void fazerSom() {
        System.out.println("Miau! 🐱");
    }
}

// Usando polimorfismo
Animal animal1 = new Cachorro();
Animal animal2 = new Gato();

animal1.fazerSom();  // "Au au!"
animal2.fazerSom();  // "Miau!"`,
                        dica: "⚡ Polimorfismo = MESMO método, COMPORTAMENTOS diferentes. Use @Override para sobrescrever."
                    }
                }
            ]
        },
        {
            id: "avancado",
            nome: "JAVA AVANÇADO",
            icone: "⚡",
            descricao: "Collections, Exceções, Generics e muito mais",
            progresso: 0,
            subCards: [
                {
                    id: "collections",
                    nome: "Collections",
                    icone: "📋",
                    descricao: "ArrayList, HashMap e estruturas de dados",
                    conteudo: {
                        explicacao: "Collections são estruturas de dados prontas. ArrayList (lista), HashMap (chave/valor).",
                        codigo: `import java.util.ArrayList;
import java.util.HashMap;

// ARRAYLIST (lista dinâmica)
ArrayList<String> nomes = new ArrayList<>();
nomes.add("Scorpion");
nomes.add("Sub-Zero");
nomes.add("Liu Kang");

System.out.println(nomes.get(0));  // "Scorpion"
System.out.println(nomes.size());  // 3

for (String nome : nomes) {
    System.out.println("Lutador: " + nome);
}

// HASHMAP (chave → valor)
HashMap<String, Integer> poderes = new HashMap<>();
poderes.put("Scorpion", 9000);
poderes.put("Sub-Zero", 8500);

System.out.println(poderes.get("Scorpion"));  // 9000`,
                        dica: "💡 ArrayList = lista flexível. HashMap = dicionário (busca por chave). São os mais usados!"
                    }
                },
                {
                    id: "excecoes",
                    nome: "Exceções",
                    icone: "⚠️",
                    descricao: "try-catch, tratamento de erros",
                    conteudo: {
                        explicacao: "Exceções são ERROS. Use try-catch para tratar sem quebrar o programa.",
                        codigo: `// TRY-CATCH (tenta fazer, se errar, captura)
try {
    int[] numeros = {1, 2, 3};
    System.out.println(numeros[10]);  // ERRO! posição não existe
} catch (ArrayIndexOutOfBoundsException erro) {
    System.out.println("Posição inválida! " + erro.getMessage());
}

// TRY-CATCH com FINALLY (sempre executa)
try {
    int resultado = 10 / 0;  // ERRO! divisão por zero
} catch (ArithmeticException e) {
    System.out.println("Não pode dividir por zero!");
} finally {
    System.out.println("Isso sempre executa!");
}

// USO PRÁTICO: Converter texto para número com segurança
String idadeTexto = "abc";
try {
    int idade = Integer.parseInt(idadeTexto);
    System.out.println("Idade: " + idade);
} catch (NumberFormatException e) {
    System.out.println("Texto não é um número válido!");
}`,
                        dica: "🔥 Use try-catch para evitar que erros parem seu programa. Sempre trate exceções específicas!"
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
    
    javaData.categorias.forEach(categoria => {
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
    const categoria = javaData.categorias.find(c => c.id === categoryId);
    
    if (!categoria) return;
    
    let html = `<h2 class="section-title">🔥 ${categoria.nome} 🔥</h2>`;
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
    const categoria = javaData.categorias.find(c => c.id === categoryId);
    const subCard = categoria?.subCards.find(s => s.id === subCardId);
    
    if (!subCard) return;
    
    const isCompleted = isSubCardCompleted(categoryId, subCardId);
    const btnText = isCompleted ? '✅ TÓPICO CONCLUÍDO!' : '📌 MARCAR COMO CONCLUÍDO';
    
    let html = `
        <div class="content-card">
            <div class="content-title">${subCard.icone} ${subCard.nome}</div>
            <div class="content-explanation">${subCard.conteudo.explicacao}</div>
            
            <div class="code-block">
                <button class="copy-btn" onclick="copyCode(this)">📋 COPIAR</button>
                <pre>${escapeHtml(subCard.conteudo.codigo)}</pre>
            </div>
            
            <div class="tip">
                <strong>🔥 DICA DO SCORPION:</strong> ${subCard.conteudo.dica}
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
    const saved = localStorage.getItem(`completed_${categoryId}`);
    if (!saved) return 0;
    return JSON.parse(saved).length;
}

function isSubCardCompleted(categoryId, subCardId) {
    const saved = localStorage.getItem(`completed_${categoryId}`);
    if (!saved) return false;
    const completed = JSON.parse(saved);
    return completed.includes(subCardId);
}

function toggleComplete(categoryId, subCardId) {
    let completed = JSON.parse(localStorage.getItem(`completed_${categoryId}`) || '[]');
    
    if (completed.includes(subCardId)) {
        completed = completed.filter(id => id !== subCardId);
        console.log(`%c📘 ${subCardId} marcado como pendente`, "color: #ff8c00");
    } else {
        completed.push(subCardId);
        console.log(`%c✅ ${subCardId} concluído!`, "color: #00ff00");
    }
    
    localStorage.setItem(`completed_${categoryId}`, JSON.stringify(completed));
    
    // Recarregar a view atual
    if (currentSubCardId) {
        renderContent(categoryId, subCardId);
    }
    
    // Atualizar os cards da categoria atual se estiver visível
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
    console.log("%c🔥 Página Java carregada! Get over here and study! 🔥", "color: #ff4500; font-size: 14px; font-weight: bold;");
    console.log("%c📚 Estrutura: Categorias → Tópicos → Conteúdo. Seu progresso é salvo automaticamente!", "color: #ffd700; font-size: 12px;");
});