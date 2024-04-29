//Exercitando Arrays e funções

//Exercício 1: Somar todos os elementos de um array
function somaElementos(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}

console.log("Teste Soma Elementos:", somaElementos([1, 2, 3, 4]));  // Deve retornar 10

//Exercício 2: Encontrar o maior número em um array
function maiorNumero(array) {
    let maior = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }
    return maior;
}

console.log("Teste Maior Número:", maiorNumero([1, 22, 3, 4]));    // Deve retornar 22

//Exercício 3: Reverter um array
function inverteArray(array) {
    let resultado = [];
    for (let i = array.length - 1; i >= 0; i--) {
        resultado.push(array[i]);
    }
    return resultado;
}

console.log("Teste Inverte Array:", inverteArray([1, 2, 3, 4]));  // Deve retornar [4, 3, 2, 1]

//Exercício 4: Contar a frequência de elementos
function frequenciaElementos(array) {
    let frequencia = {};
    for (let i = 0; i < array.length; i++) {
        if (frequencia[array[i]]) {
            frequencia[array[i]] += 1;
        } else {
            frequencia[array[i]] = 1;
        }
    }
    return frequencia;
}

console.log("Teste Frequência Elementos:", frequenciaElementos([1, 2, 2, 3, 3, 3])); // Deve retornar {1: 1, 2: 2, 3: 3}

//Exercício 5: Remover duplicatas de um array
function removeDuplicatas(array) {
    let unicos = [];
    let itensEncontrados = {};
    for (let i = 0; i < array.length; i++) {
        if (!itensEncontrados[array[i]]) {
            unicos.push(array[i]);
            itensEncontrados[array[i]] = true;
        }
    }
    return unicos;
}

console.log("Teste Remove Duplicatas:", removeDuplicatas([1, 2, 2, 3, 3, 3, 4])); // Deve retornar [1, 2, 3, 4]

//Exercício 6: Calcular a média de notas de uma turma - Esta função recebe um array de notas e retorna a média dessas notas.
function calculaMediaNotas(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}

console.log("Média das notas:", calculaMediaNotas([10, 20, 30, 40, 50])); // Deve retornar 30

//Exercício 7: Verificar se todos os números de um array são positivos - Esta função verifica se todos os números em um array são positivos e retorna true ou false.
function todosPositivos(numeros) {
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] <= 0) {
            return false;
        }
    }
    return true;
}

console.log("Todos são positivos?", todosPositivos([1, 2, 3, -4, 5])); // Deve retornar false

//Exercício 8: Encontrar o número de vezes que um dado nome aparece em uma lista - Esta função conta quantas vezes um nome específico aparece em um array de nomes.
function contaOcorrencias(nomes, nomeProcurado) {
    let contagem = 0;
    for (let i = 0; i < nomes.length; i++) {
        if (nomes[i] === nomeProcurado) {
            contagem++;
        }
    }
    return contagem;
}

console.log("Ocorrências do nome 'Ana':", contaOcorrencias(["Ana", "Pedro", "Ana", "Maria"], "Ana")); // Deve retornar 2

//Exercício 9: Filtrar números menores que 10 de um array - Esta função cria um novo array contendo apenas os números menores que 10.
function filtraMenoresQueDez(numeros) {
    let resultado = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < 10) {
            resultado.push(numeros[i]);
        }
    }
    return resultado;
}

console.log("Números menores que 10:", filtraMenoresQueDez([5, 15, 8, 10, 3])); // Deve retornar [5, 8, 3]

//Exercício 10: Concatenar dois arrays - Esta função recebe dois arrays e retorna um novo array que é a concatenação dos dois.
function concatenaArrays(array1, array2) {
    let resultado = array1.slice(); // Cria uma cópia do primeiro array
    for (let i = 0; i < array2.length; i++) {
        resultado.push(array2[i]);
    }
    return resultado;
}

console.log("Arrays concatenados:", concatenaArrays([1, 2, 3], [4, 5, 6])); // Deve retornar [1, 2, 3, 4, 5, 6]

//Exercitando matrizes e funções

//Exercício 1: Somar todos os elementos de uma matriz
function somaElementosMatriz(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
    }
    return soma;
}

console.log("Soma dos elementos:", somaElementosMatriz([[1, 2], [3, 4]]));

//Exercício 2: Encontrar o maior número em uma matriz
function maiorNumeroMatriz(matriz) {
    let maior = matriz[0][0];
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] > maior) {
                maior = matriz[i][j];
            }
        }
    }
    return maior;
}

console.log("Maior número:", maiorNumeroMatriz([[1, 2], [3, 4]])); 


// Exercício 3: Reservas de Sala
function contarReservas(semana) {
    let totalReservas = 0;
    for (let i = 0; i < semana.length; i++) {
        for (let j = 0; j < semana[i].length; j++) {
            if (semana[i][j] === 1) { // 1 indica uma reserva
                totalReservas++;
            }
        }
    }
    return totalReservas;
}

console.log("Total de reservas:", contarReservas([
    [1, 0, 0, 1],
    [0, 1, 1, 0],
    [1, 1, 0, 0],
    [0, 0, 0, 1],
    [1, 0, 1, 0]
]));

// Exercício 4: Disponibilidade de Assentos
function verificarFileiraDisponivel(cinema) {
    for (let i = 0; i < cinema.length; i++) {
        let todosDisponiveis = true;
        for (let j = 0; j < cinema[i].length; j++) {
            if (cinema[i][j] === 0) { // 0 indica assento ocupado
                todosDisponiveis = false;
                break;
            }
        }
        if (todosDisponiveis) {
            return true;
        }
    }
    return false;
}

console.log("Fileira completamente disponível:", verificarFileiraDisponivel([
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [0, 0, 0, 0],
    [1, 1, 1, 1]
]));


//Funções Avançadas: STRING

/*
    String é considerado um valor primitivo, porém, ao ser interpretado o JS os converte em objetos, possuindo propriedades e métodos;
*/

// Length é um atributo retorna a quantidade de caracteres de uma string
console.log('Jaques Hyago'.length)

// É um método que retorna o número do indice que um caractere ocupa 
console.log('Jaques Hyago'.charAt(7))

//É um método que retorna a posição do caractere na sua primeira ocorrência na string, sendo case sensitive
let nome = 'Jaques Hyago'
console.log(nome.indexOf('H'))

// É um método que permite substituir textos dentro de uma string, se o método encontrar a primeira cadeia de caracteres, ele substituirá pelo outro parâmetro 
console.log(nome.replace('Jaques Hyago', 'Hyago Jaques'))

// É um método que permite extrair parte de uma string, com base numa posição inicial, e o segundo parâmetro indica quantos caracaters devem ser exibidos na sequencia
console.log(nome.substr('7', '5'))

// Métodos como toLocaleLowerCase, toLocaleUpperCase, toLowerCase e toUpperCase são auto explicativos
console.log(nome.toLocaleUpperCase())

// Método que remove as extremidades em branco de uma string 
console.log('-' + nome.trim() + '-')

//Funções Avançadas: MATEMÁTICAS

//Faz arredondamentos para cima
let x = Math.ceil(10.380)
console.log(x)

//Arredondamento para baixo
let y = Math.floor(10.380)
console.log(y)

//arredondamento com base em média, exemplo em passar de 0.5, valor até 4: arredonda pra baixo, maior ou igual a 5 arrendonda pra cima
let z = Math.round(10.380)
console.log(z)

//Fornece um mundo aleatório entre 0 e 1
let v = Math.random()
console.log(v)

//Funções Avançadas: DATAS

//Date precisa ser instanciado, e todas as datas são baseadas com base no SO, possuindo getters e setters normalmente.
let data = new Date()

//Recupera a data do dia atual
console.log(data.getDate())

//Como é de 0 a 11, soma-se 1 para os 12 da vida reala
console.log(data.getMonth() + 1)

console.log(data.getFullYear())

//adicionar / remover dias
console.log(data.toString())
data.setDate(data.getDate() + 720)
console.log(data.toString())

//adicionar / remover meses
console.log(data.toString())
data.setMonth(data.getMonth() + 1)

console.log(data.toString())

//adicionar / remover anos
console.log(data.toString())
data.setFullYear(data.getFullYear() + 1)

console.log(data.toString())

//15/01/2017
let data1 = new Date(2017, 0, 15)

//23/02/2017
let data2 = new Date(2017, 1, 23)

console.log(data1.toString())

console.log(data2.toString())

//converter datas para algo que possamos calcular
console.log(data1.getTime())

console.log(data2.getTime())

//1 de janeiro de 1970


//encontar a qtde de milissegundos entre data1 e data2
let milissegundos_entre_datas = Math.abs(data1.getTime() - data2.getTime())
console.log(milissegundos_entre_datas)

//1 dia tem 24, cada hora tem 60 minutos, 
//cada minuto tem 60 segundos e 
//cada segundo tem 1000 milissegundos
//então quantos milissegundos existem em um dia?
let milissegundos_por_dia = (1 * 24 * 60 * 60 * 1000)
console.log(' 1 dia tem: ' + milissegundos_por_dia + ' milissegundos')


console.log('A diferença entre data1 e data2 é de ' + Math.ceil(milissegundos_entre_datas / milissegundos_por_dia) + ' dia(s)')