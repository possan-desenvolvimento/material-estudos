// ESTRUTURA DE DADOS: Categorias -> SubCards -> Conteúdo
// Lógica de Programação - Do Básico ao Avançado
const logicaData = {
    categorias: [
        {
            id: "fundamentos",
            nome: "🧠 FUNDAMENTOS",
            icone: "📖",
            descricao: "Pensamento computacional, algoritmos, fluxogramas e resolução de problemas",
            progresso: 0,
            subCards: [
                {
                    id: "pensamento-computacional",
                    nome: "Pensamento Computacional",
                    icone: "🎯",
                    descricao: "Decomposição, padrões, abstração e algoritmos",
                    conteudo: {
                        explicacao: "Pensamento computacional é a capacidade de <strong>resolver problemas</strong> usando conceitos da computação. É a base da programação.",
                        codigo: "// 🎯 PENSAMENTO COMPUTACIONAL\n\n// 📌 4 PILARES\n// 1. Decomposição - Dividir o problema em partes menores\n// 2. Reconhecimento de Padrões - Identificar similaridades\n// 3. Abstração - Focar no essencial, ignorar detalhes\n// 4. Algoritmos - Sequência de passos para resolver\n\n// 📌 EXEMPLO - FAZER UM CAFÉ\n// Decomposição:\n// 1. Pegar a xícara\n// 2. Adicionar café\n// 3. Adicionar água\n// 4. Adicionar açúcar\n// 5. Mexer\n\n// 📌 EXEMPLO - CALCULAR MÉDIA\n// Entrada: notas dos alunos\n// Processo: somar e dividir pela quantidade\n// Saída: resultado da média\n\n// 📌 APLICAÇÃO EM PROGRAMAÇÃO\nfunction calcularMedia(notas) {\n    // Decomposição: somar e dividir\n    let soma = 0\n    for (let nota of notas) {\n        soma += nota  // Acumula\n    }\n    return soma / notas.length\n}\n\n// 📌 PADRÕES\n// Padrão: calcular soma de números\nfunction somar(numeros) {\n    let total = 0\n    for (let n of numeros) {\n        total += n\n    }\n    return total\n}",
                        dica: "💡 Programar é resolver problemas. Antes de codar, PENSE! Decomponha o problema, encontre padrões e crie um algoritmo."
                    }
                },
                {
                    id: "algoritmos",
                    nome: "Algoritmos (TUDO)",
                    icone: "📋",
                    descricao: "O que é um algoritmo, características, exemplos práticos",
                    conteudo: {
                        explicacao: "Um algoritmo é uma <strong>sequência finita de passos</strong> para resolver um problema. É a receita do que fazer.",
                        codigo: "// 📋 ALGORITMOS\n\n// 📌 O QUE É UM ALGORITMO?\n// - Sequência de passos\n// - Finita (termina)\n// - Definida (sem ambiguidade)\n// - Eficiente\n\n// 📌 CARACTERÍSTICAS\n// 1. Entrada (dados de entrada)\n// 2. Processamento (passos)\n// 3. Saída (resultado)\n\n// 📌 EXEMPLO 1 - TROCO\n// Problema: Calcular troco de uma compra\n// Entrada: valor_pago, valor_compra\n// Processo: troco = valor_pago - valor_compra\n// Saída: troco\n\nfunction calcularTroco(valorPago, valorCompra) {\n    let troco = valorPago - valorCompra\n    return troco\n}\n\n// 📌 EXEMPLO 2 - PAR OU ÍMPAR\n// Entrada: número\n// Processo: verificar se é divisível por 2\n// Saída: 'Par' ou 'Ímpar'\n\nfunction parOuImpar(numero) {\n    if (numero % 2 === 0) {\n        return 'Par'\n    } else {\n        return 'Ímpar'\n    }\n}\n\n// 📌 EXEMPLO 3 - MAIOR DE DOIS\nfunction maior(a, b) {\n    if (a > b) {\n        return a\n    } else {\n        return b\n    }\n}\n\n// 📌 EXEMPLO 4 - FATORIAL (recursivo)\nfunction fatorial(n) {\n    if (n <= 1) return 1\n    return n * fatorial(n - 1)\n}",
                        dica: "🔥 Algoritmo = sequência de passos. Antes de programar, escreva o algoritmo em português (pseudocódigo)."
                    }
                },
                {
                    id: "fluxogramas",
                    nome: "Fluxogramas (TUDO)",
                    icone: "📊",
                    descricao: "Diagramas, símbolos, fluxo, tomada de decisão e loops",
                    conteudo: {
                        explicacao: "Fluxogramas são representações visuais de algoritmos. Ajudam a entender o fluxo do programa.",
                        codigo: "// 📊 FLUXOGRAMAS\n\n// 📌 SÍMBOLOS\n// ⭕ Início/Fim (elipse)\n// ◻️ Processo (retângulo)\n// ◇ Decisão (losango)\n// 📥 Entrada/Saída (paralelogramo)\n// 🔄 Loop (hexágono)\n// ⬆️ Conector (círculo)\n// ⬇️ Setas (fluxo)\n\n// 📌 EXEMPLO 1 - PAR OU ÍMPAR\n/*\nInício\n  │\n  ▼\n📥 Ler número\n  │\n  ▼\n◇ número % 2 == 0?\n  ├─── Sim ────┐\n  │            ▼\n  │        📤 \"Par\"\n  │            │\n  └─ Não ────┐ │\n             │ │\n             ▼ ▼\n         📤 \"Ímpar\"\n             │\n             ▼\n           Fim\n*/\n\n// 📌 EXEMPLO 2 - CONTAGEM\n/*\nInício\n  │\n  ▼\n📥 Ler N\n  │\n  ▼\n  i = 1\n  │\n  ▼\n◇ i <= N?\n  │\n  Sim ───────┐\n  │          ▼\n  │      📤 i\n  │          │\n  │      i = i + 1\n  │          │\n  └──────────┘\n  │\n  Não\n  │\n  ▼\n Fim\n*/\n\n// 📌 EXEMPLO 3 - SOMA DE 1 A N\n/*\nInício\n  │\n  ▼\n📥 Ler N\n  │\n  ▼\n soma = 0\n  │\n  ▼\n i = 1\n  │\n  ▼\n◇ i <= N?\n  │\n  Sim ───────┐\n  │          ▼\n  │      soma = soma + i\n  │          │\n  │      i = i + 1\n  │          │\n  └──────────┘\n  │\n  Não\n  │\n  ▼\n📤 soma\n  │\n  ▼\n Fim\n*/",
                        dica: "💡 Fluxogramas são ótimos para visualizar a lógica. Use antes de codificar para evitar erros."
                    }
                }
            ]
        },
        {
            id: "estruturas",
            nome: "🧠 ESTRUTURAS DE CONTROLE",
            icone: "🎯",
            descricao: "Sequência, seleção (if/else), repetição (loops) e desvio",
            progresso: 0,
            subCards: [
                {
                    id: "sequencia",
                    nome: "Estrutura Sequencial (TUDO)",
                    icone: "➡️",
                    descricao: "Instruções executadas em ordem, entrada, processamento, saída",
                    conteudo: {
                        explicacao: "Estrutura sequencial é a mais simples: as instruções são executadas uma após a outra, em ordem.",
                        codigo: "// ➡️ ESTRUTURA SEQUENCIAL\n\n// 📌 CONCEITO\n// As instruções são executadas linha por linha\n// Da primeira à última\n\n// 📌 EXEMPLO 1 - SOMA\nlet a = 10\nlet b = 20\nlet soma = a + b\nconsole.log(soma)  // 30\n\n// 📌 EXEMPLO 2 - MÉDIA\nlet nota1 = 8.5\nlet nota2 = 7.0\nlet nota3 = 9.5\nlet media = (nota1 + nota2 + nota3) / 3\nconsole.log(media)\n\n// 📌 EXEMPLO 3 - TROCO\nlet valorCompra = 100\nlet valorPago = 150\nlet troco = valorPago - valorCompra\nconsole.log('Troco: R$ ' + troco)\n\n// 📌 EXEMPLO 4 - CONVERSÃO\nlet reais = 100\nlet cotacao = 5.50\nlet dolares = reais / cotacao\nconsole.log('R$ ' + reais + ' = US$ ' + dolares)\n\n// 📌 EXEMPLO 5 - CALCULADORA SIMPLES\nlet num1 = 10\nlet num2 = 5\nlet soma = num1 + num2\nlet subtracao = num1 - num2\nlet multiplicacao = num1 * num2\nlet divisao = num1 / num2\n\nconsole.log('Soma:', soma)\nconsole.log('Subtração:', subtracao)\nconsole.log('Multiplicação:', multiplicacao)\nconsole.log('Divisão:', divisao)\n\n// 📌 PSEUDOCÓDIGO\n/*\nInício\n  📥 Ler num1\n  📥 Ler num2\n  📤 soma = num1 + num2\n  📤 resultado\nFim\n*/",
                        dica: "💡 A estrutura sequencial é a base de TODOS os programas. Sempre comece com ela e depois adicione condições e loops."
                    }
                },
                {
                    id: "selecao",
                    nome: "Estrutura de Seleção (TUDO)",
                    icone: "🎯",
                    descricao: "if, else, else if, switch, operador ternário",
                    conteudo: {
                        explicacao: "Estruturas de seleção permitem tomar decisões no código, executando diferentes blocos de acordo com condições.",
                        codigo: "// 🎯 ESTRUTURA DE SELEÇÃO\n\n// 📌 IF SIMPLES\nlet idade = 18\n\nif (idade >= 18) {\n    console.log('Pode dirigir')\n}\n\n// 📌 IF/ELSE\nlet nota = 65\n\nif (nota >= 60) {\n    console.log('Aprovado')\n} else {\n    console.log('Reprovado')\n}\n\n// 📌 ELSE IF (múltiplas condições)\nlet pontuacao = 85\n\nif (pontuacao >= 90) {\n    console.log('A')\n} else if (pontuacao >= 80) {\n    console.log('B')\n} else if (pontuacao >= 70) {\n    console.log('C')\n} else {\n    console.log('Reprovado')\n}\n\n// 📌 SWITCH\nlet dia = 'segunda'\n\nswitch (dia) {\n    case 'segunda':\n        console.log('Início da semana')\n        break\n    case 'sexta':\n        console.log('Quase lá!')\n        break\n    default:\n        console.log('Dia normal')\n}\n\n// 📌 OPERADOR TERNÁRIO (if/else em uma linha)\nlet idade = 18\nlet status = idade >= 18 ? 'Maior' : 'Menor'\nconsole.log(status)\n\n// 📌 EXEMPLO PRÁTICO - CALCULADORA\nfunction calculadora(a, b, operacao) {\n    switch (operacao) {\n        case '+': return a + b\n        case '-': return a - b\n        case '*': return a * b\n        case '/': return b !== 0 ? a / b : 'Divisão por zero'\n        default: return 'Operação inválida'\n    }\n}",
                        dica: "🔥 Use if/else para poucas condições, switch para muitas condições fixas. Ternário para atribuições simples."
                    }
                },
                {
                    id: "repeticao",
                    nome: "Estrutura de Repetição (TUDO)",
                    icone: "🔄",
                    descricao: "for, while, do-while, loops aninhados, break, continue",
                    conteudo: {
                        explicacao: "Estruturas de repetição executam um bloco de código várias vezes.",
                        codigo: "// 🔄 ESTRUTURA DE REPETIÇÃO\n\n// 📌 FOR - repetição definida\nfor (let i = 1; i <= 5; i++) {\n    console.log('Número:', i)\n}\n\n// 📌 FOR COM PASSO\nfor (let i = 0; i < 10; i += 2) {\n    console.log('Par:', i)  // 0, 2, 4, 6, 8\n}\n\n// 📌 WHILE - repetição indefinida\nlet contador = 0\nwhile (contador < 5) {\n    console.log('Contador:', contador)\n    contador++\n}\n\n// 📌 DO-WHILE - executa pelo menos uma vez\nlet tentativa = 0\ndo {\n    console.log('Tentativa:', tentativa + 1)\n    tentativa++\n} while (tentativa < 3)\n\n// 📌 BREAK - interrompe o loop\nfor (let i = 1; i <= 10; i++) {\n    if (i === 5) break\n    console.log(i)  // 1, 2, 3, 4\n}\n\n// 📌 CONTINUE - pula iteração\nfor (let i = 1; i <= 5; i++) {\n    if (i === 3) continue\n    console.log(i)  // 1, 2, 4, 5\n}\n\n// 📌 LOOP ANINHADO\nfor (let i = 1; i <= 3; i++) {\n    for (let j = 1; j <= 3; j++) {\n        console.log(i + 'x' + j + ' = ' + (i * j))\n    }\n}\n\n// 📌 EXEMPLO - SOMA DE 1 A N\nfunction somaAteN(n) {\n    let soma = 0\n    for (let i = 1; i <= n; i++) {\n        soma += i\n    }\n    return soma\n}",
                        dica: "🔥 Use FOR quando sabe quantas vezes vai repetir. Use WHILE quando não sabe. DO-WHILE para executar pelo menos uma vez."
                    }
                }
            ]
        },
        {
            id: "estruturas-dados",
            nome: "🧠 ESTRUTURAS DE DADOS",
            icone: "📦",
            descricao: "Vetores, matrizes, listas, pilhas, filas, árvores, grafos",
            progresso: 0,
            subCards: [
                {
                    id: "vetores-matrizes",
                    nome: "Vetores e Matrizes (TUDO)",
                    icone: "📊",
                    descricao: "Arrays unidimensionais, multidimensionais, operações",
                    conteudo: {
                        explicacao: "Vetores (arrays) são estruturas que armazenam múltiplos valores. Matrizes são arrays de arrays.",
                        codigo: "// 📊 VETORES E MATRIZES\n\n// 📌 VETOR (Array 1D)\nlet numeros = [10, 20, 30, 40, 50]\n\n// Acessar elementos\nconsole.log(numeros[0])  // 10\nconsole.log(numeros[2])  // 30\n\n// Percorrer\nfor (let i = 0; i < numeros.length; i++) {\n    console.log('Posição', i, ':', numeros[i])\n}\n\n// 📌 MANIPULAÇÃO DE VETORES\nlet frutas = ['Maçã', 'Banana', 'Laranja']\nfrutas.push('Uva')       // Adiciona no final\nfrutas.pop()             // Remove do final\nfrutas.unshift('Morango') // Adiciona no início\nfrutas.shift()           // Remove do início\n\n// 📌 MATRIZ (Array 2D)\nlet matriz = [\n    [1, 2, 3],\n    [4, 5, 6],\n    [7, 8, 9]\n]\n\nconsole.log(matriz[0][0])  // 1\nconsole.log(matriz[1][2])  // 6\n\n// Percorrer matriz\nfor (let i = 0; i < matriz.length; i++) {\n    for (let j = 0; j < matriz[i].length; j++) {\n        console.log('Posição [' + i + '][' + j + '] =', matriz[i][j])\n    }\n}\n\n// 📌 EXEMPLO - SOMA DOS ELEMENTOS\nfunction somarVetor(vetor) {\n    let soma = 0\n    for (let i = 0; i < vetor.length; i++) {\n        soma += vetor[i]\n    }\n    return soma\n}\n\n// 📌 EXEMPLO - BUSCAR MAIOR\nfunction maiorValor(vetor) {\n    let maior = vetor[0]\n    for (let i = 1; i < vetor.length; i++) {\n        if (vetor[i] > maior) {\n            maior = vetor[i]\n        }\n    }\n    return maior\n}",
                        dica: "💡 Arrays são a estrutura mais usada. Domine a navegação e manipulação deles."
                    }
                },
                {
                    id: "pilhas-filas",
                    nome: "Pilhas e Filas (TUDO)",
                    icone: "📋",
                    descricao: "LIFO, FIFO, operações push/pop, enqueue/dequeue",
                    conteudo: {
                        explicacao: "Pilhas (LIFO) e Filas (FIFO) são estruturas com regras específicas de acesso.",
                        codigo: "// 📋 PILHAS E FILAS\n\n// 📌 PILHA (LIFO - Last In, First Out)\nclass Pilha {\n    constructor() {\n        this.itens = []\n    }\n    \n    push(elemento) {\n        this.itens.push(elemento)\n    }\n    \n    pop() {\n        return this.itens.pop()\n    }\n    \n    top() {\n        return this.itens[this.itens.length - 1]\n    }\n    \n    isEmpty() {\n        return this.itens.length === 0\n    }\n    \n    size() {\n        return this.itens.length\n    }\n}\n\nlet pilha = new Pilha()\npilha.push(1)\npilha.push(2)\npilha.push(3)\nconsole.log(pilha.pop())  // 3\nconsole.log(pilha.pop())  // 2\nconsole.log(pilha.pop())  // 1\n\n// 📌 FILA (FIFO - First In, First Out)\nclass Fila {\n    constructor() {\n        this.itens = []\n    }\n    \n    enqueue(elemento) {\n        this.itens.push(elemento)\n    }\n    \n    dequeue() {\n        return this.itens.shift()\n    }\n    \n    front() {\n        return this.itens[0]\n    }\n    \n    isEmpty() {\n        return this.itens.length === 0\n    }\n    \n    size() {\n        return this.itens.length\n    }\n}\n\nlet fila = new Fila()\nfila.enqueue(1)\nfila.enqueue(2)\nfila.enqueue(3)\nconsole.log(fila.dequeue())  // 1\nconsole.log(fila.dequeue())  // 2\nconsole.log(fila.dequeue())  // 3\n\n// 📌 EXEMPLO - INVERTER PALAVRA (pilha)\nfunction inverterPalavra(palavra) {\n    let pilha = new Pilha()\n    for (let letra of palavra) {\n        pilha.push(letra)\n    }\n    let invertida = ''\n    while (!pilha.isEmpty()) {\n        invertida += pilha.pop()\n    }\n    return invertida\n}\n\nconsole.log(inverterPalavra('Hamilton'))  // 'notlimaH'",
                        dica: "🔥 Pilha = LIFO (último que entra, primeiro que sai). Fila = FIFO (primeiro que entra, primeiro que sai)."
                    }
                },
                {
                    id: "recursividade",
                    nome: "Recursividade (TUDO)",
                    icone: "🔄",
                    descricao: "Funções recursivas, casos base, casos recursivos, exemplos",
                    conteudo: {
                        explicacao: "Recursividade é quando uma função chama a si mesma para resolver um problema menor.",
                        codigo: "// 🔄 RECURSIVIDADE\n\n// 📌 CONCEITO\n// Uma função recursiva chama a si mesma\n// Precisa de um caso base (condição de parada)\n// E um caso recursivo (chamada para um problema menor)\n\n// 📌 EXEMPLO 1 - FATORIAL\nfunction fatorial(n) {\n    // Caso base\n    if (n <= 1) {\n        return 1\n    }\n    // Caso recursivo\n    return n * fatorial(n - 1)\n}\nconsole.log(fatorial(5))  // 120\n\n// 📌 EXEMPLO 2 - FIBONACCI\nfunction fibonacci(n) {\n    // Caso base\n    if (n <= 1) {\n        return n\n    }\n    // Caso recursivo\n    return fibonacci(n - 1) + fibonacci(n - 2)\n}\nconsole.log(fibonacci(10))  // 55\n\n// 📌 EXEMPLO 3 - SOMA DE 1 A N\nfunction somaAteN(n) {\n    if (n <= 0) {\n        return 0\n    }\n    return n + somaAteN(n - 1)\n}\nconsole.log(somaAteN(10))  // 55\n\n// 📌 EXEMPLO 4 - POTÊNCIA\nfunction potencia(base, expoente) {\n    if (expoente === 0) {\n        return 1\n    }\n    if (expoente < 0) {\n        return 1 / potencia(base, -expoente)\n    }\n    return base * potencia(base, expoente - 1)\n}\nconsole.log(potencia(2, 3))  // 8\n\n// 📌 EXEMPLO 5 - INVERTER STRING\nfunction inverter(s) {\n    if (s === '') {\n        return ''\n    }\n    return inverter(s.slice(1)) + s[0]\n}\nconsole.log(inverter('Hamilton'))  // 'notlimaH'\n\n// 📌 QUANDO USAR?\n// ✅ Problemas que podem ser divididos em subproblemas\n// ✅ Estruturas hierárquicas (árvores)\n// ❌ Para problemas simples (loop é mais eficiente)\n// ❌ Muitas chamadas recursivas (pode estourar a pilha)",
                        dica: "🔥 SEMPRE tenha um caso base! Recursividade é elegante mas pode ser mais lenta que loops. Use para problemas que são naturalmente recursivos."
                    }
                }
            ]
        },
        {
            id: "algoritmos-busca",
            nome: "🧠 ALGORITMOS DE BUSCA E ORDENAÇÃO",
            icone: "🔍",
            descricao: "Busca linear, busca binária, bubble sort, selection sort, merge sort",
            progresso: 0,
            subCards: [
                {
                    id: "busca",
                    nome: "Busca Linear e Binária (TUDO)",
                    icone: "🔍",
                    descricao: "Busca sequencial, busca binária, complexidade O(n) vs O(log n)",
                    conteudo: {
                        explicacao: "Busca é encontrar um elemento em uma coleção. Busca linear percorre tudo. Busca binária divide ao meio.",
                        codigo: "// 🔍 BUSCA LINEAR E BINÁRIA\n\n// 📌 BUSCA LINEAR (O(n))\nfunction buscaLinear(vetor, alvo) {\n    for (let i = 0; i < vetor.length; i++) {\n        if (vetor[i] === alvo) {\n            return i  // Encontrou\n        }\n    }\n    return -1  // Não encontrou\n}\n\nlet numeros = [10, 20, 30, 40, 50]\nconsole.log(buscaLinear(numeros, 30))  // 2\nconsole.log(buscaLinear(numeros, 100)) // -1\n\n// 📌 BUSCA BINÁRIA (O(log n)) - ARRAY ORDENADO!\nfunction buscaBinaria(vetor, alvo) {\n    let inicio = 0\n    let fim = vetor.length - 1\n    \n    while (inicio <= fim) {\n        let meio = Math.floor((inicio + fim) / 2)\n        \n        if (vetor[meio] === alvo) {\n            return meio  // Encontrou\n        }\n        if (vetor[meio] < alvo) {\n            inicio = meio + 1\n        } else {\n            fim = meio - 1\n        }\n    }\n    return -1  // Não encontrou\n}\n\nlet ordenados = [10, 20, 30, 40, 50, 60, 70]\nconsole.log(buscaBinaria(ordenados, 50))  // 4\n\n// 📌 COMPARAÇÃO\n// Busca Linear: O(n) - percorre todos\n// Busca Binária: O(log n) - divide ao meio\n// Busca Binária é MUITO mais rápida para grandes dados\n\n// 📌 EXEMPLO - NÚMERO DE PASSOS\n// Array de 1.000.000 elementos\n// Linear: até 1.000.000 passos\n// Binária: apenas ~20 passos!",
                        dica: "🔥 Busca Linear = percorre tudo. Busca Binária = divide ao meio (requer array ordenado). Binária é MUITO mais rápida!"
                    }
                },
                {
                    id: "ordenacao",
                    nome: "Ordenação (TUDO)",
                    icone: "📊",
                    descricao: "Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort",
                    conteudo: {
                        explicacao: "Ordenação organiza dados em uma ordem específica (crescente ou decrescente).",
                        codigo: "// 📊 ORDENAÇÃO\n\n// 📌 BUBBLE SORT (O(n²))\nfunction bubbleSort(vetor) {\n    let n = vetor.length\n    for (let i = 0; i < n - 1; i++) {\n        for (let j = 0; j < n - i - 1; j++) {\n            if (vetor[j] > vetor[j + 1]) {\n                // Troca\n                [vetor[j], vetor[j + 1]] = [vetor[j + 1], vetor[j]]\n            }\n        }\n    }\n    return vetor\n}\n\nconsole.log(bubbleSort([5, 2, 4, 1, 3]))  // [1, 2, 3, 4, 5]\n\n// 📌 SELECTION SORT (O(n²))\nfunction selectionSort(vetor) {\n    for (let i = 0; i < vetor.length - 1; i++) {\n        let minIndex = i\n        for (let j = i + 1; j < vetor.length; j++) {\n            if (vetor[j] < vetor[minIndex]) {\n                minIndex = j\n            }\n        }\n        if (minIndex !== i) {\n            [vetor[i], vetor[minIndex]] = [vetor[minIndex], vetor[i]]\n        }\n    }\n    return vetor\n}\n\n// 📌 MERGE SORT (O(n log n)) - DIVIDE E CONQUISTA\nfunction mergeSort(vetor) {\n    if (vetor.length <= 1) {\n        return vetor\n    }\n    \n    let meio = Math.floor(vetor.length / 2)\n    let esquerda = mergeSort(vetor.slice(0, meio))\n    let direita = mergeSort(vetor.slice(meio))\n    \n    return merge(esquerda, direita)\n}\n\nfunction merge(esquerda, direita) {\n    let resultado = []\n    let i = 0\n    let j = 0\n    \n    while (i < esquerda.length && j < direita.length) {\n        if (esquerda[i] < direita[j]) {\n            resultado.push(esquerda[i])\n            i++\n        } else {\n            resultado.push(direita[j])\n            j++\n        }\n    }\n    \n    return [...resultado, ...esquerda.slice(i), ...direita.slice(j)]\n}\n\nconsole.log(mergeSort([5, 2, 4, 1, 3]))  // [1, 2, 3, 4, 5]\n\n// 📌 COMPARAÇÃO DE COMPLEXIDADE\n// Bubble Sort: O(n²) - lento\n// Selection Sort: O(n²) - lento\n// Merge Sort: O(n log n) - rápido\n// Quick Sort: O(n log n) - rápido",
                        dica: "🔥 Para arrays pequenos, qualquer algoritmo serve. Para arrays grandes, use Merge Sort ou Quick Sort."
                    }
                }
            ]
        },
        {
            id: "pratico",
            nome: "🧠 LÓGICA PRÁTICA",
            icone: "🚀",
            descricao: "Problemas comuns, exercícios, desafios, entrevistas",
            progresso: 0,
            subCards: [
                {
                    id: "problemas-comuns",
                    nome: "Problemas Comuns (TUDO)",
                    icone: "💡",
                    descricao: "Solução de problemas clássicos de lógica",
                    conteudo: {
                        explicacao: "Problemas clássicos que testam sua lógica de programação.",
                        codigo: "// 💡 PROBLEMAS COMUNS\n\n// 📌 1. NÚMEROS PRIMOS\nfunction isPrimo(n) {\n    if (n < 2) return false\n    for (let i = 2; i <= Math.sqrt(n); i++) {\n        if (n % i === 0) return false\n    }\n    return true\n}\n\nconsole.log(isPrimo(7))   // true\nconsole.log(isPrimo(10))  // false\n\n// 📌 2. PALÍNDROMO\nfunction isPalindromo(palavra) {\n    let invertida = palavra.split('').reverse().join('')\n    return palavra === invertida\n}\n\nconsole.log(isPalindromo('arara'))  // true\nconsole.log(isPalindromo('casa'))   // false\n\n// 📌 3. FIBONACCI\nfunction fibonacci(n) {\n    let a = 0, b = 1\n    for (let i = 0; i < n; i++) {\n        console.log(a)\n        let temp = a\n        a = b\n        b = temp + b\n    }\n}\nfibonacci(10)  // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34\n\n// 📌 4. FATORIAL\nfunction fatorial(n) {\n    if (n <= 1) return 1\n    return n * fatorial(n - 1)\n}\nconsole.log(fatorial(5))  // 120\n\n// 📌 5. SOMA DE DÍGITOS\nfunction somaDigitos(numero) {\n    let soma = 0\n    while (numero > 0) {\n        soma += numero % 10\n        numero = Math.floor(numero / 10)\n    }\n    return soma\n}\nconsole.log(somaDigitos(12345))  // 15\n\n// 📌 6. INVERTER NÚMERO\nfunction inverterNumero(numero) {\n    let invertido = 0\n    while (numero > 0) {\n        invertido = invertido * 10 + numero % 10\n        numero = Math.floor(numero / 10)\n    }\n    return invertido\n}\nconsole.log(inverterNumero(12345))  // 54321\n\n// 📌 7. MMC (Mínimo Múltiplo Comum)\nfunction mmc(a, b) {\n    let max = Math.max(a, b)\n    while (true) {\n        if (max % a === 0 && max % b === 0) {\n            return max\n        }\n        max++\n    }\n}\nconsole.log(mmc(12, 18))  // 36",
                        dica: "🔥 Pratique estes problemas! Eles são clássicos em entrevistas e desenvolvem o raciocínio lógico."
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
    
    logicaData.categorias.forEach(function(categoria) {
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
    const categoria = logicaData.categorias.find(function(c) { return c.id === categoryId })
    
    if (!categoria) return
    
    let html = '<h2 class="section-title">🧠 ' + categoria.nome + ' 🧠</h2>'
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
    const categoria = logicaData.categorias.find(function(c) { return c.id === categoryId })
    const subCard = categoria ? categoria.subCards.find(function(s) { return s.id === subCardId }) : null
    
    if (!subCard) return
    
    const isCompleted = isSubCardCompleted(categoryId, subCardId)
    const btnText = isCompleted ? '✅ TÓPICO CONCLUÍDO!' : '🧠 MARCAR COMO CONCLUÍDO'
    
    let html = `
        <div class="content-card">
            <div class="content-title">${subCard.icone} ${subCard.nome}</div>
            <div class="content-explanation">${subCard.conteudo.explicacao}</div>
            
            <div class="code-block">
                <button class="copy-btn" onclick="copyCode(this)">📋 COPIAR</button>
                <pre>${escapeHtml(subCard.conteudo.codigo)}</pre>
            </div>
            
            <div class="tip">
                <strong>🧠 DICA DO HAMILTON:</strong> ${subCard.conteudo.dica}
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
    const saved = localStorage.getItem('completed_logica_' + categoryId)
    if (!saved) return 0
    return JSON.parse(saved).length
}

function isSubCardCompleted(categoryId, subCardId) {
    const saved = localStorage.getItem('completed_logica_' + categoryId)
    if (!saved) return false
    const completed = JSON.parse(saved)
    return completed.includes(subCardId)
}

function toggleComplete(categoryId, subCardId) {
    let completed = JSON.parse(localStorage.getItem('completed_logica_' + categoryId) || '[]')
    
    if (completed.includes(subCardId)) {
        completed = completed.filter(function(id) { return id !== subCardId })
        console.log('%c📘 ' + subCardId + ' marcado como pendente', 'color: #ff8c00')
    } else {
        completed.push(subCardId)
        console.log('%c✅ ' + subCardId + ' concluído!', 'color: #00ff00')
    }
    
    localStorage.setItem('completed_logica_' + categoryId, JSON.stringify(completed))
    
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
    console.log('%c🧠 Lógica de Programação F1 carregado! Hamilton\'s Garage está pronto! 🧠', 'color: #7c3aed; font-size: 14px; font-weight: bold;')
    console.log('%c⚡ Categorias → Tópicos → Conteúdo. Seu progresso é salvo automaticamente!', 'color: #ffd700; font-size: 12px;')
})