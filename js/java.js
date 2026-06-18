// ESTRUTURA DE DADOS: Categorias -> SubCards -> Conteúdo
// Baseado no menu do W3Schools Java
const javaData = {
    categorias: [
        {
            id: "home",
            nome: "JAVA HOME",
            icone: "🏠",
            descricao: "Introdução, sintaxe, variáveis, tipos e operadores",
            progresso: 0,
            subCards: [
                {
                    id: "intro",
                    nome: "Introdução ao Java",
                    icone: "📖",
                    descricao: "O que é Java, instalação e primeiro programa",
                    conteudo: {
                        explicacao: "Java é uma linguagem de programação de alto nível, orientada a objetos, desenvolvida pela Sun Microsystems em 1995. É amplamente usada para desenvolvimento de aplicações desktop, web, mobile e sistemas corporativos.",
                        codigo: `// Seu primeiro programa Java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
                        dica: "💡 Para compilar: javac Main.java | Para executar: java Main"
                    }
                },
                {
                    id: "sintaxe",
                    nome: "Sintaxe Básica",
                    icone: "✍️",
                    descricao: "Estrutura, palavras-chave e regras do Java",
                    conteudo: {
                        explicacao: "A sintaxe do Java é similar ao C/C++. Cada programa deve ter uma classe e um método main como ponto de entrada.",
                        codigo: `// Estrutura básica de um programa Java
public class NomeDaClasse {
    public static void main(String[] args) {
        // Seu código aqui
        System.out.println("Olá, mundo!");
    }
}

// Palavras-chave comuns:
// public, static, void, int, double, String, boolean, if, else, for, while, return`,
                        dica: "🔥 O nome do arquivo deve ser igual ao nome da classe (NomeDaClasse.java)"
                    }
                },
                {
                    id: "variaveis",
                    nome: "Variáveis e Tipos",
                    icone: "📦",
                    descricao: "int, double, String, boolean e declaração",
                    conteudo: {
                        explicacao: "Java é <strong>fortemente tipada</strong> - você DEVE declarar o tipo de cada variável antes de usar.",
                        codigo: `// Tipos mais usados no dia a dia
int idade = 25;              // números inteiros
double altura = 1.75;       // números decimais
String nome = "Hamilton";   // texto
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
                    id: "tipos",
                    nome: "Tipos de Dados",
                    icone: "📊",
                    descricao: "Primitivos e não-primitivos",
                    conteudo: {
                        explicacao: "Java tem tipos primitivos (int, double, boolean) e tipos de referência (String, arrays, classes).",
                        codigo: `// TIPOS PRIMITIVOS
byte b = 100;           // 8 bits
short s = 1000;         // 16 bits
int i = 100000;         // 32 bits
long l = 1000000000L;   // 64 bits (coloca L)
float f = 10.5f;        // 32 bits (coloca f)
double d = 10.5;        // 64 bits
char c = 'A';           // 16 bits (aspas simples)
boolean bool = true;    // true ou false

// TIPOS DE REFERÊNCIA
String texto = "Olá";   // String (classe)
int[] numeros = {1,2,3}; // Array`,
                        dica: "⚡ Use int para números, double para decimais, String para texto. São os mais usados!"
                    }
                },
                {
                    id: "operadores",
                    nome: "Operadores",
                    icone: "➕",
                    descricao: "Aritméticos, lógicos, relacionais e mais",
                    conteudo: {
                        explicacao: "Operadores são símbolos que realizam operações sobre valores e variáveis.",
                        codigo: `// OPERADORES ARITMÉTICOS
int soma = 10 + 5;       // 15
int sub = 10 - 5;        // 5
int mult = 10 * 5;       // 50
int div = 10 / 5;        // 2
int mod = 10 % 3;        // 1 (resto)

// OPERADORES RELACIONAIS
boolean igual = (10 == 5);      // false
boolean diferente = (10 != 5);  // true
boolean maior = (10 > 5);       // true
boolean menor = (10 < 5);       // false
boolean maiorIgual = (10 >= 5); // true

// OPERADORES LÓGICOS
boolean and = (true && false);   // false
boolean or = (true || false);    // true
boolean not = !true;             // false

// OPERADORES DE ATRIBUIÇÃO
int x = 10;
x += 5;  // x = x + 5 (15)
x -= 3;  // x = x - 3 (12)`,
                        dica: "🔥 Precedência: ( ) → * / % → + - → < > → == != → && → ||"
                    }
                },
                {
                    id: "strings",
                    nome: "Strings",
                    icone: "🔤",
                    descricao: "Manipulação de texto em Java",
                    conteudo: {
                        explicacao: "String é uma classe para representar texto. É imutável - uma vez criada, não pode ser alterada.",
                        codigo: `// Criando Strings
String nome = "Lewis";
String sobrenome = "Hamilton";

// Concatenação
String completo = nome + " " + sobrenome;  // "Lewis Hamilton"

// Métodos úteis
int tamanho = completo.length();           // 14
char letra = completo.charAt(0);           // 'L'
String upper = completo.toUpperCase();     // "LEWIS HAMILTON"
String lower = completo.toLowerCase();     // "lewis hamilton"
boolean contem = completo.contains("Ham"); // true
String sub = completo.substring(0, 5);     // "Lewis"

// Comparação
boolean igual = nome.equals("Lewis");      // true
boolean ignorar = nome.equalsIgnoreCase("lewis"); // true`,
                        dica: "⚡ Use .equals() para comparar Strings, NUNCA use == (compara referências)!"
                    }
                },
                {
                    id: "math",
                    nome: "Math (Matemática)",
                    icone: "🧮",
                    descricao: "Operações matemáticas e funções",
                    conteudo: {
                        explicacao: "A classe Math fornece métodos para operações matemáticas como exponenciação, raiz quadrada, trigonometria e mais.",
                        codigo: `// CONSTANTES
double pi = Math.PI;       // 3.141592653589793
double e = Math.E;         // 2.718281828459045

// MÉTODOS ÚTEIS
int max = Math.max(10, 20);   // 20
int min = Math.min(10, 20);   // 10
double raiz = Math.sqrt(25);  // 5.0
double potencia = Math.pow(2, 3);  // 8.0
double absoluto = Math.abs(-10);   // 10
double aleatorio = Math.random();  // 0.0 a 1.0

// Arredondamento
double valor = 10.5;
long arredondado = Math.round(valor);  // 11
double floor = Math.floor(10.9);       // 10.0
double ceil = Math.ceil(10.1);         // 11.0`,
                        dica: "💡 Math.random() gera números aleatórios entre 0.0 e 1.0. Multiplique pelo intervalo desejado!"
                    }
                }
            ]
        },
        {
            id: "condicionais",
            nome: "CONDICIONAIS",
            icone: "🎯",
            descricao: "if, else, switch e operador ternário",
            progresso: 0,
            subCards: [
                {
                    id: "if-else",
                    nome: "If...Else",
                    icone: "🔀",
                    descricao: "Condições if, else if e else",
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
}`,
                        dica: "🔥 Use if/else para 2-3 condições. Para muitas opções fixas, use switch."
                    }
                },
                {
                    id: "switch",
                    nome: "Switch",
                    icone: "🎛️",
                    descricao: "Múltiplas opções com switch-case",
                    conteudo: {
                        explicacao: "Switch é usado para selecionar um bloco de código entre várias opções.",
                        codigo: `// SWITCH (múltiplas opções fixas)
String dia = "segunda";
switch (dia) {
    case "segunda":
        System.out.println("Início da semana 🔥");
        break;
    case "terca":
        System.out.println("Dia normal");
        break;
    case "sexta":
        System.out.println("Quase lá!");
        break;
    default:
        System.out.println("Dia normal");
}

// Switch com números
int mes = 3;
switch (mes) {
    case 1:
        System.out.println("Janeiro");
        break;
    case 2:
        System.out.println("Fevereiro");
        break;
    case 3:
        System.out.println("Março");
        break;
    default:
        System.out.println("Mês inválido");
}`,
                        dica: "⚡ Use break para evitar que os casos seguintes sejam executados. Use default como fallback."
                    }
                },
                {
                    id: "ternario",
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
System.out.println((5 > 3) ? "Verdadeiro" : "Falso");

// Exemplo 4: Atribuição de valor
int valor = (10 > 5) ? 100 : 50;  // valor = 100`,
                        dica: "⚡ USE quando: for uma condição simples e você quer atribuir um valor. NÃO aninhe muitos!"
                    }
                }
            ]
        },
        {
            id: "loops",
            nome: "LOOPS",
            icone: "🔄",
            descricao: "For, While, Do-While, Break e Continue",
            progresso: 0,
            subCards: [
                {
                    id: "for",
                    nome: "For Loop",
                    icone: "🔄",
                    descricao: "Quando você sabe quantas vezes repetir",
                    conteudo: {
                        explicacao: "FOR é usado quando você sabe exatamente quantas vezes vai repetir o código.",
                        codigo: `// Estrutura: for(início; condição; incremento)

// Exemplo 1: Contar de 0 a 4
for (int i = 0; i < 5; i++) {
    System.out.println("Número: " + i);
}

// Exemplo 2: Contagem regressiva
for (int i = 5; i > 0; i--) {
    System.out.println("Lançamento em: " + i);
}

// Exemplo 3: Percorrer array
String[] pilotos = {"Hamilton", "Leclerc", "Sainz"};
for (int i = 0; i < pilotos.length; i++) {
    System.out.println("Piloto: " + pilotos[i]);
}

// Exemplo 4: FOR-EACH (mais simples)
for (String piloto : pilotos) {
    System.out.println("🏎️ " + piloto);
}`,
                        dica: "💡 USE FOR quando: Você sabe exatamente quantas vezes vai repetir."
                    }
                },
                {
                    id: "while",
                    nome: "While Loop",
                    icone: "🔄",
                    descricao: "Quando você NÃO sabe quantas vezes",
                    conteudo: {
                        explicacao: "WHILE executa ENQUANTO a condição for verdadeira. Verifica ANTES de executar.",
                        codigo: `// Estrutura: while(condição) { código }

// Exemplo 1: Contador simples
int contador = 0;
while (contador < 5) {
    System.out.println("Volta: " + contador);
    contador++;
}

// Exemplo 2: Validando entrada
Scanner scanner = new Scanner(System.in);
int idade = 0;
while (idade <= 0) {
    System.out.print("Digite sua idade (positiva): ");
    idade = scanner.nextInt();
}

// Exemplo 3: Loop até comando
String comando = "";
while (!comando.equals("sair")) {
    System.out.print("Digite um comando: ");
    comando = scanner.nextLine();
    System.out.println("Você digitou: " + comando);
}`,
                        dica: "💡 USE WHILE quando: Não sabe quantas vezes vai repetir (ex: até usuário digitar 'sair')."
                    }
                },
                {
                    id: "do-while",
                    nome: "Do-While",
                    icone: "🔄",
                    descricao: "Executa PELO MENOS UMA VEZ",
                    conteudo: {
                        explicacao: "DO-WHILE executa o código PRIMEIRO e DEPOIS verifica a condição. Garante pelo menos uma execução.",
                        codigo: `// Estrutura: do { código } while(condição);

// Exemplo 1: Executa pelo menos uma vez
int tentativa = 0;
do {
    System.out.println("Tentativa " + (tentativa + 1));
    tentativa++;
} while (tentativa < 3);

// Exemplo 2: Menu (sempre mostra uma vez)
Scanner scanner = new Scanner(System.in);
int opcao;
do {
    System.out.println("=== MENU ===");
    System.out.println("1 - Iniciar");
    System.out.println("2 - Sair");
    System.out.print("Escolha: ");
    opcao = scanner.nextInt();
    
    if (opcao == 1) {
        System.out.println("🏎️ Corrida iniciada!");
    }
} while (opcao != 2);

System.out.println("Fim da corrida!");`,
                        dica: "💡 USE DO-WHILE quando: O código precisa rodar PELO MENOS UMA VEZ (ex: menu, tentativas)."
                    }
                },
                {
                    id: "break-continue",
                    nome: "Break e Continue",
                    icone: "⏹️",
                    descricao: "Controle de loops",
                    conteudo: {
                        explicacao: "BREAK sai do loop imediatamente. CONTINUE pula para a próxima iteração.",
                        codigo: `// BREAK - Para o loop completamente
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        System.out.println("Achou o 5! Parando...");
        break;  // Sai do loop
    }
    System.out.println("Número: " + i);
}

// CONTINUE - Pula a iteração atual
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue;  // Pula números pares
    }
    System.out.println("Ímpar: " + i);
}

// BREAK em while
int numero = 0;
while (true) {  // Loop infinito
    numero++;
    if (numero > 10) {
        break;  // Sai quando passar de 10
    }
    System.out.println("Número: " + numero);
}`,
                        dica: "🔥 Break é ótimo para 'achou e para'. Continue é ótimo para 'pular certos valores'."
                    }
                }
            ]
        },
        {
            id: "metodos",
            nome: "MÉTODOS JAVA",
            icone: "🛠️",
            descricao: "Criação, parâmetros, retorno e sobrecarga",
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
    System.out.println("Olá, Hamilton!");
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
saudacao("Leclerc");
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
                },
                {
                    id: "escopo",
                    nome: "Escopo (Scope)",
                    icone: "🎯",
                    descricao: "Visibilidade de variáveis",
                    conteudo: {
                        explicacao: "Escopo define onde uma variável pode ser acessada. Variáveis declaradas dentro de métodos só existem ali.",
                        codigo: `// ESCOPO DE CLASSE (atributos)
public class Carro {
    String marca;  // Visível em toda a classe
    
    public void acelerar() {
        int velocidade = 0;  // Visível SÓ neste método
        velocidade += 10;
        System.out.println(marca + " acelerou para " + velocidade);
    }
    
    public void frear() {
        // velocidade NÃO é acessível aqui (só existe no método acelerar)
        System.out.println(marca + " freou");
    }
}

// ESCOPO DE BLOCO
if (true) {
    int x = 10;  // Só existe dentro deste bloco
}
// x NÃO é acessível aqui`,
                        dica: "💡 Variáveis declaradas dentro de {} só existem dentro daquele bloco."
                    }
                },
                {
                    id: "recursao",
                    nome: "Recursão",
                    icone: "🔁",
                    descricao: "Método que chama a si mesmo",
                    conteudo: {
                        explicacao: "Recursão é quando um método chama a si mesmo. Útil para problemas que podem ser divididos em subproblemas.",
                        codigo: `// EXEMPLO: Fatorial (5! = 5*4*3*2*1)
public int fatorial(int n) {
    // Condição de parada (base)
    if (n <= 1) {
        return 1;
    }
    // Chamada recursiva
    return n * fatorial(n - 1);
}

// EXEMPLO: Fibonacci
public int fibonacci(int n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Usando
System.out.println(fatorial(5));   // 120
System.out.println(fibonacci(10)); // 55`,
                        dica: "⚡ SEMPRE tenha uma condição de parada para evitar loop infinito!"
                    }
                }
            ]
        },
        {
            id: "classes",
            nome: "CLASSES JAVA",
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
public class Piloto {
    // Atributos (características)
    String nome;
    int numero;
    String equipe;
    
    // Método (ação)
    void acelerar() {
        System.out.println(nome + " acelerou! 🏎️");
    }
    
    void ultrapassar() {
        System.out.println(nome + " fez uma ultrapassagem!");
    }
}

// Usando a classe (criando OBJETOS)
public class Main {
    public static void main(String[] args) {
        Piloto hamilton = new Piloto();
        hamilton.nome = "Lewis Hamilton";
        hamilton.numero = 44;
        hamilton.equipe = "Ferrari";
        
        hamilton.acelerar();      // "Lewis Hamilton acelerou!"
        hamilton.ultrapassar();   // "Lewis Hamilton fez uma ultrapassagem!"
    }
}`,
                        dica: "🔥 Classe = molde. Objeto = o que você cria com o molde."
                    }
                },
                {
                    id: "construtores",
                    nome: "Construtores",
                    icone: "🏗️",
                    descricao: "Inicializando objetos ao criar",
                    conteudo: {
                        explicacao: "Construtor é um método especial que roda AUTOMATICAMENTE quando você cria um objeto.",
                        codigo: `public class Piloto {
    String nome;
    int numero;
    
    // CONSTRUTOR (mesmo nome da classe)
    public Piloto(String nome, int numero) {
        this.nome = nome;    // this se refere ao atributo da classe
        this.numero = numero;
        System.out.println(nome + " (#" + numero + ") entrou na pista! 🏎️");
    }
    
    void exibir() {
        System.out.println("Piloto: " + nome + " #" + numero);
    }
}

// Criando objetos (construtor é chamado automaticamente)
Piloto hamilton = new Piloto("Lewis Hamilton", 44);
Piloto leclerc = new Piloto("Charles Leclerc", 16);

hamilton.exibir();  // "Piloto: Lewis Hamilton #44"`,
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
                        codigo: `public class Piloto {
    private String nome;   // private = só a classe pode acessar
    private int numero;
    private int velocidade;
    
    // Construtor
    public Piloto(String nome, int numero) {
        this.nome = nome;
        this.numero = numero;
        this.velocidade = 0;
    }
    
    // GETTER (acessar o valor)
    public String getNome() {
        return nome;
    }
    
    public int getNumero() {
        return numero;
    }
    
    public int getVelocidade() {
        return velocidade;
    }
    
    // SETTER (modificar o valor)
    public void setVelocidade(int velocidade) {
        if (velocidade >= 0 && velocidade <= 350) {
            this.velocidade = velocidade;
        } else {
            System.out.println("Velocidade inválida!");
        }
    }
}

// Usando
Piloto hamilton = new Piloto("Lewis Hamilton", 44);
System.out.println(hamilton.getNome());    // "Lewis Hamilton"
hamilton.setVelocidade(320);               // modifica velocidade`,
                        dica: "⚡ Private protege. Getter lê. Setter modifica com validação. Isso é encapsulamento!"
                    }
                },
                {
                    id: "heranca",
                    nome: "Herança",
                    icone: "👨‍👦",
                    descricao: "Reutilizando código com 'extends'",
                    conteudo: {
                        explicacao: "Herança permite uma classe herdar atributos e métodos de outra. Usa 'extends'.",
                        codigo: `// Classe PAI (superclasse)
public class Veiculo {
    String modelo;
    int ano;
    
    void ligar() {
        System.out.println("Veículo ligado!");
    }
}

// Classe FILHA (subclasse) - herda tudo do PAI
public class Carro extends Veiculo {
    int potencia;
    String cor;
    
    void acelerar() {
        System.out.println("Carro acelerou! 🏎️");
    }
}

// Usando
Carro ferrari = new Carro();
ferrari.modelo = "SF-25";   // veio do PAI
ferrari.potencia = 1000;    // da própria classe
ferrari.ligar();            // veio do PAI
ferrari.acelerar();         // da própria classe`,
                        dica: "💡 Herança = REAPROVEITAMENTO. Use quando uma classe é UMA ESPÉCIE de outra."
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
public class Veiculo {
    void mover() {
        System.out.println("Veículo se moveu");
    }
}

// Classes FILHAS sobrescrevem o método
public class Carro extends Veiculo {
    @Override
    void mover() {
        System.out.println("Carro andou na pista! 🏎️");
    }
}

public class Aviao extends Veiculo {
    @Override
    void mover() {
        System.out.println("Avião voou! ✈️");
    }
}

// Usando polimorfismo
Veiculo v1 = new Carro();
Veiculo v2 = new Aviao();

v1.mover();  // "Carro andou na pista!"
v2.mover();  // "Avião voou!"`,
                        dica: "⚡ Polimorfismo = MESMO método, COMPORTAMENTOS diferentes. Use @Override para sobrescrever."
                    }
                }
            ]
        },
        {
            id: "erros",
            nome: "ERROS JAVA",
            icone: "⚠️",
            descricao: "Tratamento de exceções e debugging",
            progresso: 0,
            subCards: [
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
                },
                {
                    id: "multi-excecoes",
                    nome: "Múltiplas Exceções",
                    icone: "⚠️",
                    descricao: "try-catch com múltiplos tipos de erro",
                    conteudo: {
                        explicacao: "Você pode capturar vários tipos de exceção em um único bloco try-catch.",
                        codigo: `// MÚLTIPLOS CATCH
try {
    String texto = null;
    System.out.println(texto.length());  // NullPointerException
    
    int[] numeros = {1, 2, 3};
    System.out.println(numeros[10]);     // ArrayIndexOutOfBoundsException
    
    int x = 10 / 0;                      // ArithmeticException
} catch (NullPointerException e) {
    System.out.println("Erro: objeto é nulo!");
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Erro: posição não existe!");
} catch (ArithmeticException e) {
    System.out.println("Erro: divisão por zero!");
} catch (Exception e) {
    System.out.println("Erro genérico: " + e.getMessage());
}

// EXCEÇÕES PERSONALIZADAS
class VelocidadeException extends Exception {
    public VelocidadeException(String mensagem) {
        super(mensagem);
    }
}

try {
    int velocidade = 400;
    if (velocidade > 350) {
        throw new VelocidadeException("Velocidade máxima é 350!");
    }
} catch (VelocidadeException e) {
    System.out.println("Erro: " + e.getMessage());
}`,
                        dica: "⚡ Sempre coloque as exceções mais específicas primeiro, e Exception por último."
                    }
                },
                {
                    id: "try-with-resources",
                    nome: "Try-with-Resources",
                    icone: "🔧",
                    descricao: "Fechamento automático de recursos",
                    conteudo: {
                        explicacao: "Try-with-resources fecha automaticamente recursos como arquivos e conexões após o uso.",
                        codigo: `// TRY-WITH-RESOURCES (fecha recursos automaticamente)
import java.io.*;

try (FileWriter writer = new FileWriter("arquivo.txt")) {
    writer.write("Olá, Hamilton!");
} catch (IOException e) {
    System.out.println("Erro ao escrever: " + e.getMessage());
}

// COM SCANNER
try (Scanner scanner = new Scanner(System.in)) {
    System.out.print("Digite seu nome: ");
    String nome = scanner.nextLine();
    System.out.println("Olá, " + nome);
}

// COM CONEXÃO DE BANCO (exemplo)
try (Connection conn = DriverManager.getConnection(url, user, pass)) {
    // Usa a conexão
    // Fecha automaticamente ao final
}`,
                        dica: "💡 Sempre use try-with-resources para arquivos, conexões de banco e streams. Fecha automaticamente!"
                    }
                }
            ]
        },
        {
            id: "arquivos",
            nome: "MANIPULAÇÃO DE ARQUIVOS",
            icone: "📁",
            descricao: "Criar, ler, escrever e excluir arquivos",
            progresso: 0,
            subCards: [
                {
                    id: "criar-arquivos",
                    nome: "Criar e Escrever",
                    icone: "✏️",
                    descricao: "Criar e escrever dados em arquivos",
                    conteudo: {
                        explicacao: "Java permite criar e escrever arquivos usando classes como FileWriter e BufferedWriter.",
                        codigo: `// CRIAR E ESCREVER ARQUIVO
import java.io.*;

try (FileWriter writer = new FileWriter("pilotos.txt")) {
    writer.write("Lewis Hamilton\n");
    writer.write("Charles Leclerc\n");
    writer.write("Carlos Sainz\n");
    System.out.println("Arquivo criado com sucesso!");
} catch (IOException e) {
    System.out.println("Erro: " + e.getMessage());
}

// COM BUFFEREDWRITER (mais eficiente)
try (BufferedWriter bw = new BufferedWriter(new FileWriter("dados.txt"))) {
    bw.write("Linha 1");
    bw.newLine();
    bw.write("Linha 2");
    bw.newLine();
    System.out.println("Escrita concluída!");
} catch (IOException e) {
    System.out.println("Erro: " + e.getMessage());
}`,
                        dica: "💡 Use BufferedWriter para melhor performance em muitos dados. Sempre use try-with-resources!"
                    }
                },
                {
                    id: "ler-arquivos",
                    nome: "Ler Arquivos",
                    icone: "📖",
                    descricao: "Ler dados de arquivos",
                    conteudo: {
                        explicacao: "Use FileReader e BufferedReader para ler arquivos em Java.",
                        codigo: `// LER ARQUIVO LINHA POR LINHA
import java.io.*;

try (BufferedReader br = new BufferedReader(new FileReader("pilotos.txt"))) {
    String linha;
    System.out.println("Pilotos: ");
    while ((linha = br.readLine()) != null) {
        System.out.println("🏎️ " + linha);
    }
} catch (IOException e) {
    System.out.println("Erro: " + e.getMessage());
}

// LER ARQUIVO INTEIRO COM SCANNER
try (Scanner scanner = new Scanner(new File("pilotos.txt"))) {
    while (scanner.hasNextLine()) {
        System.out.println(scanner.nextLine());
    }
} catch (FileNotFoundException e) {
    System.out.println("Arquivo não encontrado!");
}`,
                        dica: "🔥 BufferedReader é mais eficiente para arquivos grandes. Use Scanner para arquivos simples."
                    }
                },
                {
                    id: "deletar-arquivos",
                    nome: "Deletar Arquivos",
                    icone: "🗑️",
                    descricao: "Excluir arquivos do sistema",
                    conteudo: {
                        explicacao: "Use a classe File para deletar arquivos em Java.",
                        codigo: `// DELETAR ARQUIVO
import java.io.*;

File arquivo = new File("pilotos.txt");

if (arquivo.delete()) {
    System.out.println("Arquivo deletado: " + arquivo.getName());
} else {
    System.out.println("Falha ao deletar arquivo.");
}

// VERIFICAR SE ARQUIVO EXISTE
if (arquivo.exists()) {
    System.out.println("Arquivo existe!");
    System.out.println("Tamanho: " + arquivo.length() + " bytes");
} else {
    System.out.println("Arquivo não encontrado.");
}

// LISTAR ARQUIVOS DE UMA PASTA
File pasta = new File(".");
File[] arquivos = pasta.listFiles();
for (File f : arquivos) {
    if (f.isFile()) {
        System.out.println("📄 " + f.getName());
    } else if (f.isDirectory()) {
        System.out.println("📁 " + f.getName());
    }
}`,
                        dica: "⚡ Sempre verifique se o arquivo existe antes de deletar para evitar erros!"
                    }
                }
            ]
        },
        {
            id: "io",
            nome: "FLUXOS DE E/S",
            icone: "📊",
            descricao: "InputStream, OutputStream, BufferedReader e mais",
            progresso: 0,
            subCards: [
                {
                    id: "inputstream",
                    nome: "InputStream",
                    icone: "📥",
                    descricao: "Ler dados de fontes externas",
                    conteudo: {
                        explicacao: "InputStream é usado para ler dados de fontes como arquivos, rede ou teclado.",
                        codigo: `// LER DO TECLADO COM SCANNER
import java.util.Scanner;

Scanner scanner = new Scanner(System.in);
System.out.print("Digite seu nome: ");
String nome = scanner.nextLine();
System.out.println("Olá, " + nome + "!");

// LER ARQUIVO COM FILEINPUTSTREAM
import java.io.*;

try (FileInputStream fis = new FileInputStream("dados.txt")) {
    int dado;
    while ((dado = fis.read()) != -1) {
        System.out.print((char) dado);
    }
} catch (IOException e) {
    System.out.println("Erro: " + e.getMessage());
}`,
                        dica: "💡 Scanner é mais fácil para texto. FileInputStream é para dados binários."
                    }
                },
                {
                    id: "outputstream",
                    nome: "OutputStream",
                    icone: "📤",
                    descricao: "Escrever dados para destinos externos",
                    conteudo: {
                        explicacao: "OutputStream é usado para escrever dados para arquivos, rede ou console.",
                        codigo: `// ESCREVER EM ARQUIVO COM FILEOUTPUTSTREAM
try (FileOutputStream fos = new FileOutputStream("dados.bin")) {
    String texto = "Dados da F1";
    fos.write(texto.getBytes());
    System.out.println("Dados escritos com sucesso!");
} catch (IOException e) {
    System.out.println("Erro: " + e.getMessage());
}

// ESCREVER COM BUFFEREDWRITER (texto)
try (BufferedWriter writer = new BufferedWriter(new FileWriter("relatorio.txt"))) {
    writer.write("Relatório da Corrida");
    writer.newLine();
    writer.write("Vencedor: Lewis Hamilton");
    writer.newLine();
    System.out.println("Relatório salvo!");
} catch (IOException e) {
    System.out.println("Erro: " + e.getMessage());
}`,
                        dica: "⚡ Use FileOutputStream para dados binários. Use BufferedWriter para texto."
                    }
                },
                {
                    id: "buffered",
                    nome: "BufferedReader/Writer",
                    icone: "📝",
                    descricao: "Leitura e escrita eficiente",
                    conteudo: {
                        explicacao: "BufferedReader e BufferedWriter melhoram a performance de operações de I/O usando buffer.",
                        codigo: `// BUFFEREDREADER - LEITURA EFICIENTE
try (BufferedReader br = new BufferedReader(new FileReader("grande_arquivo.txt"))) {
    String linha;
    int contador = 0;
    while ((linha = br.readLine()) != null) {
        contador++;
        if (contador % 1000 == 0) {
            System.out.println("Lidas " + contador + " linhas...");
        }
    }
    System.out.println("Total: " + contador + " linhas");
} catch (IOException e) {
    System.out.println("Erro: " + e.getMessage());
}

// BUFFEREDWRITER - ESCRITA EFICIENTE
try (BufferedWriter bw = new BufferedWriter(new FileWriter("saida.txt"))) {
    for (int i = 0; i < 10000; i++) {
        bw.write("Linha " + i);
        bw.newLine();
    }
    System.out.println("10000 linhas escritas!");
} catch (IOException e) {
    System.out.println("Erro: " + e.getMessage());
}`,
                        dica: "🔥 BufferedReader é até 10x mais rápido que Scanner para arquivos grandes!"
                    }
                }
            ]
        },
        {
            id: "estruturas",
            nome: "ESTRUTURA DE DADOS",
            icone: "📋",
            descricao: "ArrayList, HashMap, LinkedList e mais",
            progresso: 0,
            subCards: [
                {
                    id: "arraylist",
                    nome: "ArrayList",
                    icone: "📋",
                    descricao: "Lista dinâmica e flexível",
                    conteudo: {
                        explicacao: "ArrayList é uma lista redimensionável que permite adicionar, remover e acessar elementos facilmente.",
                        codigo: `import java.util.ArrayList;

// CRIANDO ARRAYLIST
ArrayList<String> pilotos = new ArrayList<>();

// ADICIONANDO ELEMENTOS
pilotos.add("Hamilton");
pilotos.add("Leclerc");
pilotos.add("Sainz");
pilotos.add(1, "Verstappen"); // Insere na posição 1

// ACESSANDO ELEMENTOS
System.out.println(pilotos.get(0));  // "Hamilton"
System.out.println(pilotos.get(1));  // "Verstappen"

// PERCORRENDO
for (String piloto : pilotos) {
    System.out.println("🏎️ " + piloto);
}

// REMOVENDO
pilotos.remove("Verstappen");  // Remove por objeto
pilotos.remove(0);             // Remove por índice

// TAMANHO
System.out.println("Total: " + pilotos.size());  // 2

// VERIFICANDO
if (pilotos.contains("Hamilton")) {
    System.out.println("Hamilton está na lista!");
}`,
                        dica: "💡 ArrayList é a lista mais usada. Use para listas dinâmicas onde ordem importa."
                    }
                },
                {
                    id: "hashmap",
                    nome: "HashMap",
                    icone: "🗂️",
                    descricao: "Chave → Valor (dicionário)",
                    conteudo: {
                        explicacao: "HashMap armazena pares chave-valor. Acesso rápido por chave.",
                        codigo: `import java.util.HashMap;

// CRIANDO HASHMAP
HashMap<String, Integer> poderes = new HashMap<>();

// ADICIONANDO
poderes.put("Hamilton", 95);
poderes.put("Leclerc", 88);
poderes.put("Sainz", 85);

// ACESSANDO POR CHAVE
System.out.println(poderes.get("Hamilton"));  // 95
System.out.println(poderes.getOrDefault("Alonso", 0));  // 0

// PERCORRENDO
for (String chave : poderes.keySet()) {
    System.out.println(chave + " → " + poderes.get(chave));
}

// PERCORRENDO COM ENTRY
for (HashMap.Entry<String, Integer> entry : poderes.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}

// VERIFICANDO
if (poderes.containsKey("Hamilton")) {
    System.out.println("Hamilton está no mapa!");
}

// TAMANHO
System.out.println("Total: " + poderes.size());  // 3`,
                        dica: "⚡ HashMap é perfeito para buscar por chave (como um dicionário). Use .get(chave) para acessar."
                    }
                },
                {
                    id: "linkedlist",
                    nome: "LinkedList",
                    icone: "🔗",
                    descricao: "Lista encadeada para inserções frequentes",
                    conteudo: {
                        explicacao: "LinkedList é otimizada para inserções e remoções no início e meio da lista.",
                        codigo: `import java.util.LinkedList;

// CRIANDO LINKEDLIST
LinkedList<String> fila = new LinkedList<>();

// ADICIONANDO
fila.add("Primeiro");
fila.add("Segundo");
fila.add("Terceiro");

// ADICIONANDO NO INÍCIO/FIM
fila.addFirst("Zero");
fila.addLast("Quarto");

System.out.println(fila);  // [Zero, Primeiro, Segundo, Terceiro, Quarto]

// REMOVENDO DO INÍCIO/FIM
String primeiro = fila.removeFirst();  // "Zero"
String ultimo = fila.removeLast();     // "Quarto"

// USANDO COMO FILA (FIFO)
fila.offer("Novo");          // Adiciona no fim
String elemento = fila.poll();  // Remove e retorna o primeiro

// USANDO COMO PILHA (LIFO)
fila.push("Topo");           // Adiciona no início
String topo = fila.pop();    // Remove e retorna o primeiro`,
                        dica: "💡 Use LinkedList quando precisar de muitas inserções/remoções no início ou meio."
                    }
                }
            ]
        },
        {
            id: "avancado",
            nome: "JAVA AVANÇADO",
            icone: "⚡",
            descricao: "Generics, Threads, Lambda e mais",
            progresso: 0,
            subCards: [
                {
                    id: "generics",
                    nome: "Generics",
                    icone: "🧬",
                    descricao: "Tipos genéricos para reutilização",
                    conteudo: {
                        explicacao: "Generics permitem criar classes, interfaces e métodos que trabalham com tipos genéricos.",
                        codigo: `// CLASSE GENÉRICA
public class Box<T> {
    private T conteudo;
    
    public void set(T conteudo) {
        this.conteudo = conteudo;
    }
    
    public T get() {
        return conteudo;
    }
}

// USANDO
Box<String> caixaTexto = new Box<>();
caixaTexto.set("Olá");
String texto = caixaTexto.get();  // "Olá"

Box<Integer> caixaNumero = new Box<>();
caixaNumero.set(42);
Integer numero = caixaNumero.get();  // 42

// MÉTODO GENÉRICO
public <T> void imprimir(T[] array) {
    for (T elemento : array) {
        System.out.println(elemento);
    }
}

// USANDO MÉTODO GENÉRICO
String[] nomes = {"Hamilton", "Leclerc"};
Integer[] numeros = {1, 2, 3};

imprimir(nomes);    // Hamilton, Leclerc
imprimir(numeros);  // 1, 2, 3`,
                        dica: "🔥 Generics fornecem segurança de tipos e reutilização de código."
                    }
                },
                {
                    id: "threads",
                    nome: "Threads",
                    icone: "🧵",
                    descricao: "Programação concorrente",
                    conteudo: {
                        explicacao: "Threads permitem executar múltiplas tarefas simultaneamente.",
                        codigo: `// EXTENDENDO THREAD
public class PilotoCorrida extends Thread {
    private String nome;
    
    public PilotoCorrida(String nome) {
        this.nome = nome;
    }
    
    @Override
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(nome + " - Volta " + i);
            try {
                Thread.sleep(1000);  // Espera 1 segundo
            } catch (InterruptedException e) {
                System.out.println("Interrompido!");
            }
        }
    }
}

// USANDO
public class Main {
    public static void main(String[] args) {
        PilotoCorrida p1 = new PilotoCorrida("Hamilton");
        PilotoCorrida p2 = new PilotoCorrida("Leclerc");
        PilotoCorrida p3 = new PilotoCorrida("Sainz");
        
        p1.start();  // Inicia a thread
        p2.start();
        p3.start();
        
        // Aguarda todas terminarem
        try {
            p1.join();
            p2.join();
            p3.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("🏁 Corrida finalizada!");
    }
}`,
                        dica: "⚡ Use start() para iniciar a thread. O método run() contém o código a ser executado."
                    }
                },
                {
                    id: "lambda",
                    nome: "Lambda",
                    icone: "λ",
                    descricao: "Programação funcional",
                    conteudo: {
                        explicacao: "Expressões Lambda permitem escrever código mais conciso usando programação funcional.",
                        codigo: `// EXPRESSÃO LAMBDA BÁSICA
// Sintaxe: (parâmetros) -> { corpo }

// EXEMPLO 1: Sem parâmetros
() -> System.out.println("Olá, Hamilton!");

// EXEMPLO 2: Com um parâmetro
(String nome) -> System.out.println("Olá, " + nome);

// EXEMPLO 3: Com retorno
(int a, int b) -> a + b;

// USANDO LAMBDA COM ARRAYLIST
import java.util.ArrayList;
import java.util.Comparator;

ArrayList<String> pilotos = new ArrayList<>();
pilotos.add("Hamilton");
pilotos.add("Leclerc");
pilotos.add("Sainz");
pilotos.add("Verstappen");

// ORDENAR COM LAMBDA
pilotos.sort((a, b) -> a.compareTo(b));

// PERCORRER COM LAMBDA
pilotos.forEach(piloto -> System.out.println("🏎️ " + piloto));

// FILTRAR COM LAMBDA
pilotos.stream()
    .filter(p -> p.startsWith("H"))
    .forEach(p -> System.out.println("Filtrado: " + p));`,
                        dica: "🔥 Lambda torna o código mais conciso. Use com coleções e streams."
                    }
                }
            ]
        },
        {
            id: "referencia",
            nome: "REFERÊNCIA JAVA",
            icone: "📚",
            descricao: "Palavras-chave, métodos e classes",
            progresso: 0,
            subCards: [
                {
                    id: "palavras-chave",
                    nome: "Palavras-Chave",
                    icone: "🔑",
                    descricao: "Lista de palavras reservadas do Java",
                    conteudo: {
                        explicacao: "Palavras-chave são palavras reservadas pelo Java que têm significado especial. Você NÃO pode usá-las como nomes de variáveis.",
                        codigo: `// MODIFICADORES DE ACESSO
public    // Acessível de qualquer lugar
private   // Acessível apenas dentro da classe
protected // Acessível no pacote e subclasses

// MODIFICADORES DE CLASSE
abstract  // Não pode ser instanciada
final     // Não pode ser estendida
static    // Pertence à classe, não à instância

// PRIMITIVOS E TIPOS
int       // Número inteiro
double    // Número decimal
boolean   // Verdadeiro/falso
char      // Caractere único
void      // Não retorna valor

// CONTROLE DE FLUXO
if        // Condicional
else      // Alternativa
switch    // Múltiplas opções
case      // Opção do switch
default   // Opção padrão
for       // Loop definido
while     // Loop condicional
do        // Loop com execução garantida
break     // Sai do loop
continue  // Pula iteração
return    // Retorna valor

// EXCEÇÕES
try       // Bloco que pode lançar exceção
catch     // Captura exceção
finally   // Sempre executa
throw     // Lança exceção
throws    // Declara exceção no método

// OUTRAS
new       // Cria objeto
class     // Define classe
this      // Refere-se à instância atual
super     // Refere-se à classe pai
null      // Valor nulo`,
                        dica: "💡 Não use palavras-chave como nomes de variáveis! O IDE destaca elas em cores."
                    }
                },
                {
                    id: "metodos-comuns",
                    nome: "Métodos Comuns",
                    icone: "📖",
                    descricao: "Métodos mais usados da API Java",
                    conteudo: {
                        explicacao: "Métodos essenciais que você vai usar todo dia em Java.",
                        codigo: `// STRING
String nome = "Hamilton";
nome.length();          // 8
nome.toUpperCase();     // "HAMILTON"
nome.toLowerCase();     // "hamilton"
nome.charAt(0);         // 'H'
nome.substring(0, 3);   // "Ham"
nome.equals("Hamilton"); // true
nome.contains("ton");   // true

// ARRAY
int[] numeros = {1, 2, 3, 4, 5};
Arrays.sort(numeros);   // Ordena
Arrays.toString(numeros); // "[1, 2, 3, 4, 5]"

// MATH
Math.max(10, 20);      // 20
Math.min(10, 20);      // 10
Math.sqrt(25);         // 5.0
Math.pow(2, 3);        // 8.0
Math.random();         // 0.0 a 1.0

// SYSTEM
System.out.println();  // Imprime com quebra
System.out.print();    // Imprime sem quebra
System.currentTimeMillis(); // Tempo em ms

// INTEGER
Integer.parseInt("123");  // 123
Integer.toString(123);    // "123"
Integer.MAX_VALUE;        // 2147483647`,
                        dica: "🔥 Memorize os mais comuns: .length(), .equals(), .charAt(), parseInt(). Você vai usar todo dia!"
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
    
    let html = `<h2 class="section-title">🏁 ${categoria.nome} 🏁</h2>`;
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
    const btnText = isCompleted ? '✅ TÓPICO CONCLUÍDO!' : '🏁 MARCAR COMO CONCLUÍDO';
    
    let html = `
        <div class="content-card">
            <div class="content-title">${subCard.icone} ${subCard.nome}</div>
            <div class="content-explanation">${subCard.conteudo.explicacao}</div>
            
            <div class="code-block">
                <button class="copy-btn" onclick="copyCode(this)">📋 COPIAR</button>
                <pre>${escapeHtml(subCard.conteudo.codigo)}</pre>
            </div>
            
            <div class="tip">
                <strong>🏁 DICA DO HAMILTON:</strong> ${subCard.conteudo.dica}
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
    console.log("%c🏎️ Página Java F1 carregada! Hamilton's Garage está pronto! 🏎️", "color: #dc0000; font-size: 14px; font-weight: bold;");
    console.log("%c🏁 Categorias → Tópicos → Conteúdo. Seu progresso é salvo automaticamente!", "color: #ffd700; font-size: 12px;");
});