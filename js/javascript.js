// ESTRUTURA DE DADOS: Categorias -> SubCards -> Conteúdo
// JavaScript - Do Básico ao Avançado
const jsData = {
    categorias: [
        {
            id: "basico",
            nome: "🟡 JS BÁSICO",
            icone: "📖",
            descricao: "Variáveis, tipos, operadores, funções e condicionais",
            progresso: 0,
            subCards: [
                {
                    id: "variaveis",
                    nome: "Variáveis (var, let, const)",
                    icone: "📦",
                    descricao: "var, let, const, escopo e hoisting",
                    conteudo: {
                        explicacao: "JavaScript tem três formas de declarar variáveis. Cada uma tem comportamentos diferentes de escopo e hoisting.",
                        codigo: "// 📦 VARIÁVEIS EM JS\n\n// 🔴 VAR (NÃO USE!)\nvar nome = 'Hamilton'        // Escopo de função\nvar idade = 44               // Pode ser redeclarada\n\n// 🟢 LET (USE!)\nlet nome = 'Hamilton'        // Escopo de bloco\nlet idade = 44               // Pode ser reatribuída\nnome = 'Lewis'               // ✅ Permite reatribuição\n\n// 🔵 CONST (USE!)\nconst nome = 'Hamilton'      // Escopo de bloco\nconst idade = 44             // NÃO pode ser reatribuída\n// nome = 'Lewis'            // ❌ ERRO! Não pode reatribuir\n\n// 📋 REGRAS DE OURO\n// - Use const SEMPRE que possível\n// - Use let quando precisar reatribuir\n// - NUNCA use var\n\n// 🎯 ESCOPO\nif (true) {\n    let x = 10          // Só existe dentro do bloco\n    const y = 20        // Só existe dentro do bloco\n    var z = 30          // Existe fora do bloco (EVITAR!)\n}\nconsole.log(z)          // 30 (funciona, mas é ruim!)\n\n// 🔄 HOISTING\nconsole.log(a)           // undefined (hoisting)\nvar a = 10\n// console.log(b)        // ❌ ERRO! (let não tem hoisting)\nlet b = 20",
                        dica: "💡 SEMPRE use const. Use let quando precisar reatribuir. NUNCA use var!"
                    }
                },
                {
                    id: "tipos",
                    nome: "Tipos de Dados",
                    icone: "📊",
                    descricao: "string, number, boolean, null, undefined, object, symbol",
                    conteudo: {
                        explicacao: "JavaScript tem 7 tipos primitivos e 1 tipo de objeto. Entender tipos é fundamental.",
                        codigo: "// 📊 TIPOS PRIMITIVOS\n\n// String - Texto\nlet nome = 'Hamilton'\nlet saudacao = 'Olá, ' + nome\nlet template = `Olá, ${nome}`  // Template strings\n\n// Number - Números\nlet idade = 44\nlet preco = 99.99\nlet negativo = -10\nlet infinito = Infinity\nlet notANumber = NaN\n\n// Boolean - Verdadeiro/Falso\nlet ativo = true\nlet admin = false\nlet maior = 10 > 5  // true\n\n// Null - Vazio intencional\nlet usuario = null\n\n// Undefined - Não definido\nlet carro           // undefined\n\n// Symbol - Único (ES6)\nlet id = Symbol('id')\nlet id2 = Symbol('id')  // id !== id2\n\n// BigInt - Números grandes\nlet big = 9007199254740991n\n\n// 📦 TIPOS DE REFERÊNCIA\n// Object\nlet pessoa = {\n    nome: 'Hamilton',\n    idade: 44\n}\n\n// Array\nlet pilotos = ['Hamilton', 'Leclerc', 'Sainz']\n\n// Function\nfunction saudacao() {\n    return 'Olá!'\n}\n\n// 🔍 VERIFICANDO TIPOS\ntypeof nome          // 'string'\ntypeof idade         // 'number'\ntypeof ativo         // 'boolean'\ntypeof usuario       // 'object' (null é bug!)\ntypeof carro         // 'undefined'\ntypeof saudacao      // 'function'\n\n// 🎯 CONVERSÃO DE TIPOS\nString(123)          // '123'\nNumber('123')        // 123\nBoolean(0)           // false\nBoolean('')          // false\nBoolean('texto')     // true",
                        dica: "💡 Use typeof para verificar tipos. Lembre-se: null é typeof 'object' (é um bug histórico do JS)!"
                    }
                },
                {
                    id: "operadores",
                    nome: "Operadores (TUDO)",
                    icone: "➕",
                    descricao: "Aritméticos, comparação, lógicos, ternário, spread, rest",
                    conteudo: {
                        explicacao: "Operadores são símbolos que realizam operações sobre valores.",
                        codigo: "// ➕ OPERADORES EM JS\n\n// 📌 ARITMÉTICOS\nlet soma = 10 + 5          // 15\nlet sub = 10 - 5           // 5\nlet mult = 10 * 5          // 50\nlet div = 10 / 5           // 2\nlet mod = 10 % 3           // 1 (resto)\nlet exp = 2 ** 3           // 8 (exponenciação)\nlet inc = 10; inc++        // 11\nlet dec = 10; dec--        // 9\n\n// 📌 COMPARAÇÃO\nlet igual = 10 == '10'     // true (compara valor)\nlet estrito = 10 === '10'  // false (compara tipo)\nlet diferente = 10 != '10' // false\nlet estritoDif = 10 !== '10' // true\nlet maior = 10 > 5         // true\nlet menor = 10 < 5         // false\nlet maiorIgual = 10 >= 10  // true\n\n// 📌 LÓGICOS\nlet e = true && false      // false\nlet ou = true || false     // true\nlet nao = !true            // false\n\n// 📌 TERNÁRIO\nlet idade = 18\nlet status = idade >= 18 ? 'Maior' : 'Menor'\n\n// 📌 SPREAD (...) - Espalha elementos\nlet numeros = [1, 2, 3]\nlet novos = [...numeros, 4, 5]  // [1,2,3,4,5]\nlet pessoa = { nome: 'Hamilton' }\nlet clone = { ...pessoa, idade: 44 }\n\n// 📌 REST (...) - Agrupa argumentos\nfunction soma(...args) {\n    return args.reduce((a, b) => a + b)\n}\nsoma(1, 2, 3, 4)          // 10\n\n// 📌 NULLISH COALESCING (??)\nlet valor = null\nlet resultado = valor ?? 'padrão'  // 'padrão'\n\n// 📌 OPTIONAL CHAINING (?.)\nlet user = { name: 'Hamilton' }\nconsole.log(user?.address?.city)  // undefined (sem erro!)",
                        dica: "🔥 SEMPRE use === (comparação estrita) em vez de ==. Use ?? para valores null/undefined. Use ?. para acessos seguros."
                    }
                },
                {
                    id: "funcoes",
                    nome: "Funções (TUDO)",
                    icone: "⚙️",
                    descricao: "function, arrow functions, parâmetros, retorno, closures",
                    conteudo: {
                        explicacao: "Funções são blocos de código reutilizáveis. JavaScript tem várias formas de declarar funções.",
                        codigo: "// ⚙️ FUNÇÕES EM JS\n\n// 📌 FUNÇÃO TRADICIONAL\nfunction saudacao(nome) {\n    return 'Olá, ' + nome + '!'\n}\nsaudacao('Hamilton')  // 'Olá, Hamilton!'\n\n// 📌 ARROW FUNCTION (ES6)\nconst saudacao = (nome) => {\n    return 'Olá, ' + nome + '!'\n}\n\n// Arrow function simplificada\nconst saudacao = nome => 'Olá, ' + nome + '!'\n\n// Arrow com múltiplos parâmetros\nconst soma = (a, b) => a + b\n\n// Arrow sem parâmetros\nconst ola = () => 'Olá!'\n\n// 📌 PARÂMETROS PADRÃO\nfunction saudacao(nome = 'Visitante') {\n    return 'Olá, ' + nome\n}\nsaudacao()  // 'Olá, Visitante'\n\n// 📌 REST PARAMETERS\nfunction soma(...numeros) {\n    return numeros.reduce((total, n) => total + n, 0)\n}\nsoma(1, 2, 3, 4)  // 10\n\n// 📌 FUNÇÃO ANÔNIMA\nconst dobrar = function(x) {\n    return x * 2\n}\n\n// 📌 FUNÇÃO IMEDIATA (IIFE)\n;(function() {\n    console.log('Executou imediatamente!')\n})()\n\n// 📌 CLOSURES (função que lembra o escopo)\nfunction contador() {\n    let count = 0\n    return function() {\n        count++\n        return count\n    }\n}\nconst incrementar = contador()\nincrementar()  // 1\nincrementar()  // 2\n\n// 📌 CALLBACKS\nfunction processar(callback) {\n    let resultado = 10\n    callback(resultado)\n}\nprocessar(valor => console.log(valor * 2))  // 20",
                        dica: "🔥 Use arrow functions para funções curtas. Use function para funções que precisam de hoisting. Arrow functions NÃO têm seu próprio 'this'."
                    }
                },
                {
                    id: "condicionais",
                    nome: "Condicionais (TUDO)",
                    icone: "🎯",
                    descricao: "if, else, else if, switch, operador ternário",
                    conteudo: {
                        explicacao: "Condicionais executam código baseado em condições.",
                        codigo: "// 🎯 CONDICIONAIS EM JS\n\n// 📌 IF/ELSE\nlet idade = 18\nif (idade >= 18) {\n    console.log('Pode dirigir')\n} else {\n    console.log('Não pode dirigir')\n}\n\n// 📌 ELSE IF\nlet nota = 85\nif (nota >= 90) {\n    console.log('A')\n} else if (nota >= 80) {\n    console.log('B')\n} else if (nota >= 70) {\n    console.log('C')\n} else {\n    console.log('Reprovado')\n}\n\n// 📌 SWITCH\nlet dia = 'segunda'\nswitch (dia) {\n    case 'segunda':\n        console.log('Início da semana')\n        break\n    case 'sexta':\n        console.log('Quase lá!')\n        break\n    default:\n        console.log('Dia normal')\n}\n\n// 📌 OPERADOR TERNÁRIO\nlet idade = 18\nlet status = idade >= 18 ? 'Maior' : 'Menor'\n\n// Ternário aninhado (use com moderação!)\nlet nota = 85\nlet resultado = nota >= 90 ? 'A' : nota >= 80 ? 'B' : nota >= 70 ? 'C' : 'Reprovado'\n\n// 📌 SHORT-CIRCUIT (&& e ||)\nlet nome = ''\nlet exibir = nome || 'Anônimo'  // 'Anônimo'\nlet logado = true\nlogado && console.log('Usuário logado')  // Executa se logado\n\n// 📌 NULLISH COALESCING (??)\nlet valor = null\nlet resultado = valor ?? 'padrão'  // 'padrão'\n\n// 🔥 DICA: Prefira ternário para atribuições simples\n// Use if/else para lógica mais complexa",
                        dica: "💡 Use if/else para lógica complexa. Use ternário para atribuições simples. Use switch para múltiplas opções fixas."
                    }
                },
                {
                    id: "loops",
                    nome: "Loops (TUDO)",
                    icone: "🔄",
                    descricao: "for, while, do-while, for...of, for...in, forEach",
                    conteudo: {
                        explicacao: "Loops repetem código. JavaScript tem várias formas de iterar.",
                        codigo: "// 🔄 LOOPS EM JS\n\n// 📌 FOR CLÁSSICO\nfor (let i = 0; i < 5; i++) {\n    console.log(i)  // 0, 1, 2, 3, 4\n}\n\n// 📌 FOR...OF (itera sobre valores)\nlet pilotos = ['Hamilton', 'Leclerc', 'Sainz']\nfor (let piloto of pilotos) {\n    console.log(piloto)\n}\n\n// 📌 FOR...IN (itera sobre propriedades)\nlet pessoa = { nome: 'Hamilton', idade: 44 }\nfor (let chave in pessoa) {\n    console.log(chave + ': ' + pessoa[chave])\n}\n\n// 📌 FOR...EACH (array)\nlet pilotos = ['Hamilton', 'Leclerc', 'Sainz']\npilotos.forEach(function(piloto, index) {\n    console.log(index + ': ' + piloto)\n})\n\n// 📌 WHILE\nlet i = 0\nwhile (i < 5) {\n    console.log(i)\n    i++\n}\n\n// 📌 DO...WHILE (executa pelo menos uma vez)\nlet i = 0\ndo {\n    console.log(i)\n    i++\n} while (i < 5)\n\n// 📌 BREAK e CONTINUE\nfor (let i = 0; i < 10; i++) {\n    if (i === 5) break        // Para em 5\n    if (i % 2 === 0) continue // Pula pares\n    console.log(i)            // 1, 3\n}\n\n// 📌 MAP (cria novo array)\nlet numeros = [1, 2, 3]\nlet dobrados = numeros.map(n => n * 2)  // [2, 4, 6]\n\n// 📌 FILTER (filtra array)\nlet numeros = [1, 2, 3, 4, 5]\nlet pares = numeros.filter(n => n % 2 === 0)  // [2, 4]\n\n// 📌 REDUCE (acumula valores)\nlet numeros = [1, 2, 3, 4]\nlet soma = numeros.reduce((acc, n) => acc + n, 0)  // 10",
                        dica: "🔥 Use for...of para arrays, for...in para objetos. Use map/filter/reduce para programação funcional."
                    }
                }
            ]
        },
        {
            id: "intermediario",
            nome: "🟡 JS INTERMEDIÁRIO",
            icone: "⚡",
            descricao: "Arrays, objetos, DOM, eventos, JSON, Promises",
            progresso: 0,
            subCards: [
                {
                    id: "arrays",
                    nome: "Arrays (TUDO)",
                    icone: "📋",
                    descricao: "Métodos: map, filter, reduce, forEach, find, some, every",
                    conteudo: {
                        explicacao: "Arrays são listas de valores. JavaScript tem métodos poderosos para manipular arrays.",
                        codigo: "// 📋 ARRAYS EM JS\n\nlet pilotos = ['Hamilton', 'Leclerc', 'Sainz']\n\n// 📌 ADICIONAR/REMOVER\npilotos.push('Verstappen')    // Adiciona no final\npilotos.pop()                 // Remove do final\npilotos.unshift('Alonso')     // Adiciona no início\npilotos.shift()               // Remove do início\n\n// 📌 ACESSAR\npilotos[0]            // Primeiro\npilotos[pilotos.length - 1]  // Último\n\n// 📌 MÉTODOS DE ITERAÇÃO\n// map - transforma cada elemento\nlet nomes = pilotos.map(p => p.toUpperCase())\n\n// filter - filtra elementos\nlet temH = pilotos.filter(p => p.includes('H'))\n\n// find - encontra primeiro elemento\nlet encontrado = pilotos.find(p => p === 'Hamilton')\n\n// some - verifica se algum atende condição\nlet temLeclerc = pilotos.some(p => p === 'Leclerc')\n\n// every - verifica se todos atendem condição\nlet todosTemA = pilotos.every(p => p.includes('a'))\n\n// forEach - executa para cada elemento\npilotos.forEach((p, i) => console.log(i + ': ' + p))\n\n// reduce - reduz a um valor\nlet numeros = [1, 2, 3, 4]\nlet soma = numeros.reduce((acc, n) => acc + n, 0)\n\n// sort - ordena\nlet ordenados = pilotos.sort()\n\n// reverse - inverte\nlet invertidos = pilotos.reverse()\n\n// includes - verifica se existe\nlet existe = pilotos.includes('Hamilton')\n\n// indexOf - encontra índice\nlet index = pilotos.indexOf('Hamilton')\n\n// slice - fatia array\nlet primeiros = pilotos.slice(0, 2)\n\n// spread - espalha array\nlet novos = [...pilotos, 'Novo']",
                        dica: "🔥 Use map para transformar, filter para filtrar, reduce para acumular. São os mais poderosos!"
                    }
                },
                {
                    id: "objetos",
                    nome: "Objetos (TUDO)",
                    icone: "📦",
                    descricao: "Criação, propriedades, métodos, destructuring, spread",
                    conteudo: {
                        explicacao: "Objetos são coleções de propriedades chave-valor. São fundamentais em JS.",
                        codigo: "// 📦 OBJETOS EM JS\n\n// 📌 CRIAÇÃO\nlet pessoa = {\n    nome: 'Hamilton',\n    idade: 44,\n    equipe: 'Ferrari'\n}\n\n// 📌 ACESSAR PROPRIEDADES\npessoa.nome          // 'Hamilton'\npessoa['idade']      // 44\n\n// 📌 ADICIONAR/ATUALIZAR\npessoa.campeao = 7\npessoa.idade = 45\n\n// 📌 DELETAR\ndelete pessoa.campeao\n\n// 📌 MÉTODOS\nlet pessoa = {\n    nome: 'Hamilton',\n    saudacao: function() {\n        return 'Olá, ' + this.nome\n    },\n    // Sintaxe simplificada (ES6)\n    despedida() {\n        return 'Até mais, ' + this.nome\n    }\n}\n\n// 📌 DESTRUCTURING\nlet { nome, idade } = pessoa\nconsole.log(nome, idade)\n\n// 📌 SPREAD (clonar objeto)\nlet clone = { ...pessoa }\nlet comEquipe = { ...pessoa, equipe: 'Ferrari' }\n\n// 📌 OBJECT METHODS\nObject.keys(pessoa)    // ['nome', 'idade', 'equipe']\nObject.values(pessoa)  // ['Hamilton', 44, 'Ferrari']\nObject.entries(pessoa) // [['nome','Hamilton'], ...]\n\n// 📌 CLASSES (ES6)\nclass Piloto {\n    constructor(nome, numero) {\n        this.nome = nome\n        this.numero = numero\n    }\n    \n    acelerar() {\n        console.log(this.nome + ' acelerou!')\n    }\n}\n\nlet hamilton = new Piloto('Hamilton', 44)\nhamilton.acelerar()",
                        dica: "💡 Use destructuring para extrair propriedades. Use spread para clonar objetos de forma segura."
                    }
                },
                {
                    id: "dom",
                    nome: "DOM (Manipulação HTML)",
                    icone: "🌐",
                    descricao: "Seletores, eventos, manipulação de elementos, estilos",
                    conteudo: {
                        explicacao: "O DOM (Document Object Model) é a API para manipular HTML e CSS com JavaScript.",
                        codigo: "// 🌐 DOM EM JS\n\n// 📌 SELECIONAR ELEMENTOS\n// Por ID\ndocument.getElementById('meuId')\n\n// Por classe\ndocument.getElementsByClassName('minhaClasse')\n\n// Por tag\ndocument.getElementsByTagName('div')\n\n// Por seletor CSS (RECOMENDADO!)\ndocument.querySelector('.minhaClasse')\ndocument.querySelectorAll('div .item')\n\n// 📌 MANIPULAR CONTEÚDO\nelemento.textContent = 'Novo texto'           // Só texto\nelemento.innerHTML = '<strong>HTML</strong>'  // HTML\nelemento.value = 'Novo valor'                // Inputs\n\n// 📌 MANIPULAR ATRIBUTOS\nelemento.setAttribute('class', 'novo')\nelemento.getAttribute('class')\nelemento.removeAttribute('class')\n\n// 📌 MANIPULAR CLASSES\nelemento.classList.add('ativo')\nelemento.classList.remove('ativo')\nelemento.classList.toggle('ativo')\nelemento.classList.contains('ativo')\n\n// 📌 MANIPULAR ESTILOS\nelemento.style.color = 'red'\nelemento.style.backgroundColor = 'black'\nelemento.style.display = 'none'\n\n// 📌 CRIAR ELEMENTOS\nlet div = document.createElement('div')\ndiv.textContent = 'Novo elemento'\ndocument.body.appendChild(div)\n\n// 📌 EVENTOS\nelemento.addEventListener('click', function(event) {\n    console.log('Clicou!')\n})\n\n// Eventos comuns\n// click, mouseover, mouseout, keydown, keyup, submit, change\n\n// 📌 EXEMPLO PRÁTICO\nlet botao = document.querySelector('#meuBotao')\nbotao.addEventListener('click', function() {\n    let paragrafo = document.querySelector('#texto')\n    paragrafo.textContent = 'Cliquei no botão!'\n})",
                        dica: "🔥 Use querySelector/querySelectorAll para selecionar elementos. addEventListener é a forma moderna de adicionar eventos."
                    }
                },
                {
                    id: "json",
                    nome: "JSON (TUDO)",
                    icone: "🔗",
                    descricao: "JSON.parse, JSON.stringify e manipulação de dados",
                    conteudo: {
                        explicacao: "JSON (JavaScript Object Notation) é o formato padrão para troca de dados na web.",
                        codigo: "// 🔗 JSON EM JS\n\n// 📌 OBJETO JS -> JSON\nlet pessoa = {\n    nome: 'Hamilton',\n    idade: 44,\n    ativo: true\n}\n\nlet json = JSON.stringify(pessoa)\nconsole.log(json)  // '{\"nome\":\"Hamilton\",\"idade\":44,\"ativo\":true}'\n\n// 📌 JSON -> OBJETO JS\nlet json = '{\"nome\":\"Hamilton\",\"idade\":44,\"ativo\":true}'\nlet objeto = JSON.parse(json)\nconsole.log(objeto.nome)  // 'Hamilton'\n\n// 📌 TRATANDO ERROS\ntry {\n    let dados = JSON.parse(jsonInvalido)\n} catch (error) {\n    console.log('Erro ao parsear JSON:', error.message)\n}\n\n// 📌 JSON COM ARRAYS\nlet pilotos = ['Hamilton', 'Leclerc', 'Sainz']\nlet json = JSON.stringify(pilotos)\nlet array = JSON.parse(json)\n\n// 📌 JSON COM OBJETOS ANINHADOS\nlet dados = {\n    nome: 'Hamilton',\n    carro: {\n        modelo: 'SF-25',\n        ano: 2025\n    },\n    estatisticas: {\n        poles: 100,\n        vitorias: 105\n    }\n}\nlet json = JSON.stringify(dados)\nlet objeto = JSON.parse(json)\n\n// 📌 EXEMPLO PRÁTICO\n// Enviar para API\nfetch('/api/usuario', {\n    method: 'POST',\n    headers: {\n        'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({ nome: 'Hamilton' })\n})\n\n// Receber da API\nfetch('/api/usuario')\n    .then(res => res.json())\n    .then(dados => console.log(dados))",
                        dica: "🔥 JSON.parse e JSON.stringify são ESSENCIAIS para APIs. Sempre use try/catch com JSON.parse."
                    }
                },
                {
                    id: "promises",
                    nome: "Promises e Async/Await",
                    icone: "⚡",
                    descricao: "Promise, then, catch, finally, async/await, fetch",
                    conteudo: {
                        explicacao: "Promises são a forma moderna de lidar com código assíncrono em JavaScript.",
                        codigo: "// ⚡ PROMISES E ASYNC/AWAIT\n\n// 📌 PROMISE BÁSICA\nconst minhaPromise = new Promise((resolve, reject) => {\n    // Código assíncrono\n    let sucesso = true\n    if (sucesso) {\n        resolve('Deu certo!')\n    } else {\n        reject('Deu erro!')\n    }\n})\n\n// 📌 USANDO PROMISE\nminhaPromise\n    .then(resultado => console.log(resultado))\n    .catch(erro => console.log(erro))\n    .finally(() => console.log('Sempre executa'))\n\n// 📌 FETCH (API para requisições HTTP)\nfetch('https://api.exemplo.com/dados')\n    .then(response => response.json())\n    .then(dados => console.log(dados))\n    .catch(erro => console.log('Erro:', erro))\n\n// 📌 ASYNC/AWAIT (Sintaxe mais limpa)\nasync function buscarDados() {\n    try {\n        let response = await fetch('https://api.exemplo.com/dados')\n        let dados = await response.json()\n        console.log(dados)\n    } catch (error) {\n        console.log('Erro:', error)\n    }\n}\n\n// 📌 PROMISE ALL (várias em paralelo)\nlet promise1 = fetch('/api/1')\nlet promise2 = fetch('/api/2')\nlet promise3 = fetch('/api/3')\n\nPromise.all([promise1, promise2, promise3])\n    .then(respostas => console.log(respostas))\n\n// 📌 PROMISE RACE (primeira que terminar)\nPromise.race([promise1, promise2])\n    .then(primeira => console.log(primeira))\n\n// 📌 EXEMPLO PRÁTICO\nasync function getUsuario(id) {\n    try {\n        let response = await fetch('/api/usuario/' + id)\n        if (!response.ok) {\n            throw new Error('Usuário não encontrado')\n        }\n        let usuario = await response.json()\n        return usuario\n    } catch (error) {\n        console.error('Erro:', error.message)\n        return null\n    }\n}",
                        dica: "🔥 Async/Await é mais legível que then/catch. Sempre use try/catch com async/await. Fetch é o padrão para requisições HTTP."
                    }
                }
            ]
        },
        {
            id: "avancado",
            nome: "🟡 JS AVANÇADO",
            icone: "⚡",
            descricao: "ES6+, closures, prototypes, classes, módulos, this",
            progresso: 0,
            subCards: [
                {
                    id: "es6",
                    nome: "ES6+ (TUDO)",
                    icone: "🚀",
                    descricao: "Arrow functions, destructuring, spread, template literals, modules",
                    conteudo: {
                        explicacao: "ES6 (ECMAScript 2015) revolucionou o JavaScript. Essas features são ESSENCIAIS hoje.",
                        codigo: "// 🚀 ES6+ - FEATURES ESSENCIAIS\n\n// 📌 ARROW FUNCTIONS\nconst soma = (a, b) => a + b\nconst quadrado = x => x * x\nconst ola = () => 'Olá!'\n\n// 📌 DESTRUCTURING\n// Arrays\nlet [a, b, c] = [1, 2, 3]\nlet [primeiro, ...resto] = [1, 2, 3, 4]\n\n// Objetos\nlet { nome, idade } = { nome: 'Hamilton', idade: 44 }\nlet { nome: nomePessoa } = { nome: 'Hamilton' }\n\n// Parâmetros\nfunction saudacao({ nome, idade }) {\n    console.log(nome, idade)\n}\n\n// 📌 SPREAD (...)\nlet arr1 = [1, 2, 3]\nlet arr2 = [...arr1, 4, 5]      // [1,2,3,4,5]\nlet obj1 = { a: 1, b: 2 }\nlet obj2 = { ...obj1, c: 3 }     // { a:1, b:2, c:3 }\n\n// 📌 REST PARAMETERS\nfunction soma(...numeros) {\n    return numeros.reduce((a, b) => a + b)\n}\n\n// 📌 TEMPLATE LITERALS\nlet nome = 'Hamilton'\nlet mensagem = `Olá, ${nome}!`\nlet html = `\n    <div>\n        <h1>${nome}</h1>\n    </div>\n`\n\n// 📌 MODULES (import/export)\n// export\nconst PI = 3.14159\nexport { PI }\nexport function soma(a, b) { return a + b }\nexport default class Usuario {}\n\n// import\nimport { PI, soma } from './math.js'\nimport Usuario from './usuario.js'\n\n// 📌 DEFAULT PARAMETERS\nfunction saudacao(nome = 'Visitante') {\n    return 'Olá, ' + nome\n}\n\n// 📌 SHORTHAND PROPERTIES\nlet nome = 'Hamilton'\nlet idade = 44\nlet pessoa = { nome, idade }  // { nome: 'Hamilton', idade: 44 }\n\n// 📌 COMPUTED PROPERTIES\nlet chave = 'nome'\nlet pessoa = {\n    [chave]: 'Hamilton'\n}",
                        dica: "🔥 ES6 é o padrão hoje. Arrow functions, destructuring e spread são usados TODO DIA!"
                    }
                },
                {
                    id: "this",
                    nome: "This (TUDO)",
                    icone: "🎯",
                    descricao: "Contexto, bind, call, apply, arrow functions e this",
                    conteudo: {
                        explicacao: "'this' é um dos conceitos mais confusos do JavaScript. Entender como funciona é fundamental.",
                        codigo: "// 🎯 THIS EM JS\n\n// 📌 THIS EM FUNÇÃO TRADICIONAL\nfunction saudacao() {\n    console.log(this)  // Depende de como é chamada\n}\n\n// 📌 THIS EM MÉTODO DE OBJETO\nlet pessoa = {\n    nome: 'Hamilton',\n    saudacao: function() {\n        console.log('Olá, ' + this.nome)  // this = pessoa\n    }\n}\npessoa.saudacao()  // 'Olá, Hamilton'\n\n// 📌 THIS EM FUNÇÃO CONSTRUTORA\nfunction Piloto(nome) {\n    this.nome = nome  // this = novo objeto\n}\nlet hamilton = new Piloto('Hamilton')\n\n// 📌 THIS EM ARROW FUNCTION\nlet pessoa = {\n    nome: 'Hamilton',\n    saudacao: () => {\n        console.log(this)  // this = escopo pai (window)\n    }\n}\n\n// 📌 BIND, CALL, APPLY\nfunction saudacao() {\n    console.log('Olá, ' + this.nome)\n}\nlet pessoa = { nome: 'Hamilton' }\n\n// bind - retorna nova função com this fixo\nlet saudar = saudacao.bind(pessoa)\nsaudar()\n\n// call - executa com this específico\nsaudacao.call(pessoa)\n\n// apply - igual call, mas com array de argumentos\nsaudacao.apply(pessoa)\n\n// 📌 CONTEXTO GLOBAL\n// No navegador: this = window\n// No Node.js: this = global\nconsole.log(this)  // window ou global\n\n// 📌 THIS EM CLASSES\nclass Piloto {\n    constructor(nome) {\n        this.nome = nome\n    }\n    \n    saudacao() {\n        console.log('Olá, ' + this.nome)\n    }\n}\n\n// 📌 DICA DE OURO\n// Arrow functions NÃO têm seu próprio 'this'\n// Em arrow functions, this é herdado do escopo pai",
                        dica: "🔥 Em métodos de objeto, this = objeto. Em funções tradicionais, this depende da chamada. Arrow functions herdam this do escopo pai."
                    }
                },
                {
                    id: "prototypes",
                    nome: "Prototypes e Classes",
                    icone: "🧬",
                    descricao: "Prototype chain, classes, herança, extends, super",
                    conteudo: {
                        explicacao: "JavaScript usa herança prototípica. Classes são 'syntactic sugar' sobre prototypes.",
                        codigo: "// 🧬 PROTOTYPES E CLASSES\n\n// 📌 PROTOTYPE CHAIN\nfunction Piloto(nome) {\n    this.nome = nome\n}\n\nPiloto.prototype.acelerar = function() {\n    console.log(this.nome + ' acelerou!')\n}\n\nlet hamilton = new Piloto('Hamilton')\nhamilton.acelerar()  // 'Hamilton acelerou!'\n\n// 📌 CLASSES (ES6)\nclass Piloto {\n    constructor(nome, numero) {\n        this.nome = nome\n        this.numero = numero\n    }\n    \n    acelerar() {\n        console.log(this.nome + ' acelerou!')\n    }\n    \n    frear() {\n        console.log(this.nome + ' freou!')\n    }\n}\n\n// 📌 HERANÇA (extends)\nclass PilotoFerrari extends Piloto {\n    constructor(nome, numero) {\n        super(nome, numero)  // Chama construtor pai\n        this.equipe = 'Ferrari'\n    }\n    \n    // Sobrescrever método\n    acelerar() {\n        console.log(this.nome + ' acelerou a Ferrari!')\n        super.acelerar()  // Chama método pai\n    }\n    \n    // Método novo\n    ultrapassar() {\n        console.log(this.nome + ' ultrapassou!')\n    }\n}\n\nlet lewis = new PilotoFerrari('Hamilton', 44)\nlewis.acelerar()\nlewis.ultrapassar()\n\n// 📌 INSTANCEOF\nlewis instanceof PilotoFerrari  // true\nlewis instanceof Piloto         // true\nlewis instanceof Object         // true\n\n// 📌 MÉTODOS ESTÁTICOS\nclass Piloto {\n    static getEquipe() {\n        return 'Ferrari'\n    }\n}\nPiloto.getEquipe()  // 'Ferrari'\n\n// 📌 GETTERS E SETTERS\nclass Piloto {\n    constructor(nome) {\n        this._nome = nome\n    }\n    \n    get nome() {\n        return this._nome.toUpperCase()\n    }\n    \n    set nome(valor) {\n        this._nome = valor.trim()\n    }\n}",
                        dica: "💡 Use classes para organizar código. extends para herança. super() chama o construtor pai."
                    }
                },
                {
                    id: "modules",
                    nome: "Módulos (ES Modules)",
                    icone: "📦",
                    descricao: "import, export, default, named exports, dynamic imports",
                    conteudo: {
                        explicacao: "Módulos permitem organizar código em arquivos separados, facilitando manutenção e reutilização.",
                        codigo: "// 📦 MÓDULOS EM JS\n\n// 📌 ARQUIVO: math.js\nexport const PI = 3.14159\nexport function soma(a, b) { return a + b }\nexport function subtrai(a, b) { return a - b }\n\n// Export default (apenas um por módulo)\nexport default class Calculadora {\n    static soma(a, b) { return a + b }\n}\n\n// 📌 ARQUIVO: main.js\n// Importar named exports\nimport { PI, soma, subtrai } from './math.js'\n\n// Importar default\nimport Calculadora from './math.js'\n\n// Importar tudo\nimport * as Math from './math.js'\nconsole.log(Math.PI)\nconsole.log(Math.soma(10, 20))\n\n// Renomear import\nimport { soma as adicionar } from './math.js'\n\n// 📌 ARQUIVO: utils.js\n// Exportar múltiplas funções\nexport function formatarData(data) {\n    return data.toLocaleDateString()\n}\n\nexport function formatarMoeda(valor) {\n    return 'R$ ' + valor.toFixed(2)\n}\n\n// 📌 ARQUIVO: main.js\nimport { formatarData, formatarMoeda } from './utils.js'\n\n// 📌 DYNAMIC IMPORT (carregar sob demanda)\nconst module = await import('./modulo.js')\nmodule.funcao()\n\n// 📌 IMPORT META (informações do módulo)\nconsole.log(import.meta.url)  // URL do arquivo\n\n// 📌 EXEMPLO PRÁTICO\n// Em vez de ter tudo em um arquivo,\n// organize seu código em módulos:\n// - utils.js (funções auxiliares)\n// - api.js (requisições HTTP)\n// - components.js (componentes UI)\n// - app.js (ponto de entrada)",
                        dica: "🔥 Módulos são ESSENCIAIS para projetos grandes. Use export/import para organizar seu código. Prefira named exports sobre default."
                    }
                }
            ]
        },
        {
            id: "pratico",
            nome: "🟡 JS PRÁTICO",
            icone: "🚀",
            descricao: "APIs, fetch, localStorage, eventos, formulários, DOM",
            progresso: 0,
            subCards: [
                {
                    id: "fetch-api",
                    nome: "Fetch API (TUDO)",
                    icone: "🌐",
                    descricao: "GET, POST, PUT, DELETE, headers, body, tratamento de erros",
                    conteudo: {
                        explicacao: "Fetch API é a forma moderna de fazer requisições HTTP em JavaScript.",
                        codigo: "// 🌐 FETCH API\n\n// 📌 GET\nasync function getUsuarios() {\n    try {\n        let response = await fetch('https://api.exemplo.com/usuarios')\n        if (!response.ok) {\n            throw new Error('Erro: ' + response.status)\n        }\n        let dados = await response.json()\n        return dados\n    } catch (error) {\n        console.error('Erro:', error)\n    }\n}\n\n// 📌 POST\nasync function criarUsuario(dados) {\n    try {\n        let response = await fetch('https://api.exemplo.com/usuarios', {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json',\n                'Authorization': 'Bearer token'\n            },\n            body: JSON.stringify(dados)\n        })\n        \n        if (!response.ok) {\n            throw new Error('Erro: ' + response.status)\n        }\n        \n        return await response.json()\n    } catch (error) {\n        console.error('Erro:', error)\n    }\n}\n\n// 📌 PUT (atualizar)\nasync function atualizarUsuario(id, dados) {\n    let response = await fetch('/api/usuarios/' + id, {\n        method: 'PUT',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify(dados)\n    })\n    return await response.json()\n}\n\n// 📌 DELETE\nasync function deletarUsuario(id) {\n    let response = await fetch('/api/usuarios/' + id, {\n        method: 'DELETE'\n    })\n    return response.ok\n}\n\n// 📌 TRATAMENTO DE ERROS COMPLETO\nasync function fazerRequest(url, options) {\n    try {\n        let response = await fetch(url, options)\n        \n        if (response.status === 404) {\n            throw new Error('Recurso não encontrado')\n        }\n        if (response.status === 401) {\n            throw new Error('Não autorizado')\n        }\n        if (response.status === 500) {\n            throw new Error('Erro no servidor')\n        }\n        if (!response.ok) {\n            throw new Error('Erro: ' + response.status)\n        }\n        \n        return await response.json()\n    } catch (error) {\n        console.error('Erro na requisição:', error)\n        throw error\n    }\n}",
                        dica: "🔥 Fetch + async/await é o padrão hoje. SEMPRE trate erros com try/catch. Verifique response.ok antes de usar os dados."
                    }
                },
                {
                    id: "storage",
                    nome: "Storage (localStorage, sessionStorage)",
                    icone: "💾",
                    descricao: "Salvar, recuperar, remover dados no navegador",
                    conteudo: {
                        explicacao: "localStorage e sessionStorage permitem salvar dados no navegador do usuário.",
                        codigo: "// 💾 STORAGE EM JS\n\n// 📌 LOCALSTORAGE (persistente)\n// Salvar\nlocalStorage.setItem('nome', 'Hamilton')\nlocalStorage.setItem('preferencias', JSON.stringify({ tema: 'escuro' }))\n\n// Recuperar\nlet nome = localStorage.getItem('nome')\nlet preferencias = JSON.parse(localStorage.getItem('preferencias'))\n\n// Remover\nlocalStorage.removeItem('nome')\nlocalStorage.clear()  // Remove tudo\n\n// 📌 SESSIONSTORAGE (apenas na sessão)\n// Mesma API do localStorage\nsessionStorage.setItem('token', 'abc123')\nlet token = sessionStorage.getItem('token')\nsessionStorage.removeItem('token')\n\n// 📌 EXEMPLO PRÁTICO - SALVAR TEMA\nfunction salvarTema(tema) {\n    localStorage.setItem('tema', tema)\n    document.body.className = tema\n}\n\nfunction carregarTema() {\n    let tema = localStorage.getItem('tema')\n    if (tema) {\n        document.body.className = tema\n    }\n}\n\n// 📌 EXEMPLO - HISTÓRICO DE BUSCAS\nfunction salvarBusca(termo) {\n    let historico = JSON.parse(localStorage.getItem('historico') || '[]')\n    historico.unshift(termo)  // Adiciona no início\n    historico = historico.slice(0, 10)  // Mantém 10 itens\n    localStorage.setItem('historico', JSON.stringify(historico))\n}\n\nfunction getHistorico() {\n    return JSON.parse(localStorage.getItem('historico') || '[]')\n}\n\n// 📌 DICAS\n// - localStorage não expira (apenas usuário remove)\n// - sessionStorage expira ao fechar navegador\n// - Só pode salvar strings (use JSON para objetos)\n// - Limite ~5-10MB por domínio",
                        dica: "💡 Use localStorage para dados permanentes (preferências, tema). Use sessionStorage para dados temporários (token de sessão)."
                    }
                },
                {
                    id: "dom-manipulation",
                    nome: "Manipulação DOM (TUDO)",
                    icone: "🖥️",
                    descricao: "Criar, remover, clonar, animar elementos",
                    conteudo: {
                        explicacao: "Manipulação avançada do DOM para criar interfaces dinâmicas.",
                        codigo: "// 🖥️ MANIPULAÇÃO DOM AVANÇADA\n\n// 📌 CRIAR ELEMENTOS\nlet div = document.createElement('div')\ndiv.className = 'container'\ndiv.id = 'principal'\ndiv.textContent = 'Texto'\ndiv.innerHTML = '<strong>HTML</strong>'\n\ndocument.body.appendChild(div)\n\n// 📌 INSERIR ANTES/DEPOIS\nlet pai = document.querySelector('.container')\nlet filho = document.createElement('p')\nfilho.textContent = 'Novo parágrafo'\n\npai.appendChild(filho)  // No final\npai.prepend(filho)      // No início\npai.insertBefore(filho, referencia)  // Antes de referencia\n\n// 📌 REMOVER\nelemento.remove()  // Remove elemento\nelemento.innerHTML = ''  // Remove filhos\n\n// 📌 CLONAR\nlet clone = elemento.cloneNode(true)  // true = clones filhos\n\n// 📌 REPLACE\npai.replaceChild(novo, velho)\n\n// 📌 ANIMAÇÕES\nfunction animar(elemento) {\n    elemento.style.transition = 'all 0.5s'\n    elemento.style.transform = 'scale(1.1)'\n    setTimeout(() => {\n        elemento.style.transform = 'scale(1)'\n    }, 500)\n}\n\n// 📌 EXEMPLO PRÁTICO - LISTA DINÂMICA\nfunction adicionarItem(texto) {\n    let lista = document.querySelector('#lista')\n    let item = document.createElement('li')\n    item.textContent = texto\n    \n    let botao = document.createElement('button')\n    botao.textContent = '❌'\n    botao.addEventListener('click', function() {\n        item.remove()\n    })\n    \n    item.appendChild(botao)\n    lista.appendChild(item)\n}",
                        dica: "🔥 Use createElement + appendChild para criar elementos dinamicamente. Remova listeners quando remover elementos para evitar memory leaks."
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
    
    jsData.categorias.forEach(function(categoria) {
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
    const categoria = jsData.categorias.find(function(c) { return c.id === categoryId })
    
    if (!categoria) return
    
    let html = '<h2 class="section-title">🟡 ' + categoria.nome + ' 🟡</h2>'
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
    const categoria = jsData.categorias.find(function(c) { return c.id === categoryId })
    const subCard = categoria ? categoria.subCards.find(function(s) { return s.id === subCardId }) : null
    
    if (!subCard) return
    
    const isCompleted = isSubCardCompleted(categoryId, subCardId)
    const btnText = isCompleted ? '✅ TÓPICO CONCLUÍDO!' : '🟡 MARCAR COMO CONCLUÍDO'
    
    let html = `
        <div class="content-card">
            <div class="content-title">${subCard.icone} ${subCard.nome}</div>
            <div class="content-explanation">${subCard.conteudo.explicacao}</div>
            
            <div class="code-block">
                <button class="copy-btn" onclick="copyCode(this)">📋 COPIAR</button>
                <pre>${escapeHtml(subCard.conteudo.codigo)}</pre>
            </div>
            
            <div class="tip">
                <strong>🟡 DICA DO HAMILTON:</strong> ${subCard.conteudo.dica}
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
    const saved = localStorage.getItem('completed_js_' + categoryId)
    if (!saved) return 0
    return JSON.parse(saved).length
}

function isSubCardCompleted(categoryId, subCardId) {
    const saved = localStorage.getItem('completed_js_' + categoryId)
    if (!saved) return false
    const completed = JSON.parse(saved)
    return completed.includes(subCardId)
}

function toggleComplete(categoryId, subCardId) {
    let completed = JSON.parse(localStorage.getItem('completed_js_' + categoryId) || '[]')
    
    if (completed.includes(subCardId)) {
        completed = completed.filter(function(id) { return id !== subCardId })
        console.log('%c📘 ' + subCardId + ' marcado como pendente', 'color: #ff8c00')
    } else {
        completed.push(subCardId)
        console.log('%c✅ ' + subCardId + ' concluído!', 'color: #00ff00')
    }
    
    localStorage.setItem('completed_js_' + categoryId, JSON.stringify(completed))
    
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
    console.log('%c🟡 JavaScript F1 carregado! Hamilton\'s Garage está pronto! 🟡', 'color: #f7df1e; font-size: 14px; font-weight: bold;')
    console.log('%c⚡ Categorias → Tópicos → Conteúdo. Seu progresso é salvo automaticamente!', 'color: #ffd700; font-size: 12px;')
})