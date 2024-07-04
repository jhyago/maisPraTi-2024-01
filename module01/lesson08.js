// Exercitando Arrays e funções

// Exercício 1: Somar todos os elementos de um array
function sumElements(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log("Teste Soma Elementos:", sumElements([1, 2, 3, 4]));  // Deve retornar 10

// Exercício 2: Encontrar o maior número em um array
function largestNumber(array) {
    let largest = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }
    return largest;
}

console.log("Teste Maior Número:", largestNumber([1, 22, 3, 4]));    // Deve retornar 22

// Exercício 3: Reverter um array
function reverseArray(array) {
    let result = [];
    for (let i = array.length - 1; i >= 0; i--) {
        result.push(array[i]);
    }
    return result;
}

console.log("Teste Inverte Array:", reverseArray([1, 2, 3, 4]));  // Deve retornar [4, 3, 2, 1]

// Exercício 4: Contar a frequência de elementos
function elementFrequency(array) {
    let frequency = {};
    for (let i = 0; i < array.length; i++) {
        if (frequency[array[i]]) {
            frequency[array[i]] += 1;
        } else {
            frequency[array[i]] = 1;
        }
    }
    return frequency;
}

console.log("Teste Frequência Elementos:", elementFrequency([1, 2, 2, 3, 3, 3])); // Deve retornar {1: 1, 2: 2, 3: 3}

// Exercício 5: Remover duplicatas de um array
function removeDuplicates(array) {
    let unique = [];
    let itemsFound = {};
    for (let i = 0; i < array.length; i++) {
        if (!itemsFound[array[i]]) {
            unique.push(array[i]);
            itemsFound[array[i]] = true;
        }
    }
    return unique;
}

console.log("Teste Remove Duplicatas:", removeDuplicates([1, 2, 2, 3, 3, 3, 4])); // Deve retornar [1, 2, 3, 4]

// Exercício 6: Calcular a média de notas de uma turma - Esta função recebe um array de notas e retorna a média dessas notas.
function calculateAverageGrades(grades) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    return sum / grades.length;
}

console.log("Média das notas:", calculateAverageGrades([10, 20, 30, 40, 50])); // Deve retornar 30

// Exercício 7: Verificar se todos os números de um array são positivos - Esta função verifica se todos os números em um array são positivos e retorna true ou false.
function allPositive(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] <= 0) {
            return false;
        }
    }
    return true;
}

console.log("Todos são positivos?", allPositive([1, 2, 3, -4, 5])); // Deve retornar false

// Exercício 8: Encontrar o número de vezes que um dado nome aparece em uma lista - Esta função conta quantas vezes um nome específico aparece em um array de nomes.
function countOccurrences(names, targetName) {
    let count = 0;
    for (let i = 0; i < names.length; i++) {
        if (names[i] === targetName) {
            count++;
        }
    }
    return count;
}

console.log("Ocorrências do nome 'Ana':", countOccurrences(["Ana", "Pedro", "Ana", "Maria"], "Ana")); // Deve retornar 2

// Exercício 9: Filtrar números menores que 10 de um array - Esta função cria um novo array contendo apenas os números menores que 10.
function filterLessThanTen(numbers) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 10) {
            result.push(numbers[i]);
        }
    }
    return result;
}

console.log("Números menores que 10:", filterLessThanTen([5, 15, 8, 10, 3])); // Deve retornar [5, 8, 3]

// Exercício 10: Concatenar dois arrays - Esta função recebe dois arrays e retorna um novo array que é a concatenação dos dois.
function concatenateArrays(array1, array2) {
    let result = array1.slice(); // Cria uma cópia do primeiro array
    for (let i = 0; i < array2.length; i++) {
        result.push(array2[i]);
    }
    return result;
}

console.log("Arrays concatenados:", concatenateArrays([1, 2, 3], [4, 5, 6])); // Deve retornar [1, 2, 3, 4, 5, 6]

// Exercitando matrizes e funções

// Exercício 1: Somar todos os elementos de uma matriz
function sumMatrixElements(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
        }
    }
    return sum;
}

console.log("Soma dos elementos:", sumMatrixElements([[1, 2], [3, 4]]));

// Exercício 2: Encontrar o maior número em uma matriz
function largestMatrixNumber(matrix) {
    let largest = matrix[0][0];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > largest) {
                largest = matrix[i][j];
            }
        }
    }
    return largest;
}

console.log("Maior número:", largestMatrixNumber([[1, 2], [3, 4]]));

// Exercício 3: Reservas de Sala
function countReservations(week) {
    let totalReservations = 0;
    for (let i = 0; i < week.length; i++) {
        for (let j = 0; j < week[i].length; j++) {
            if (week[i][j] === 1) { // 1 indica uma reserva
                totalReservations++;
            }
        }
    }
    return totalReservations;
}

console.log("Total de reservas:", countReservations([
    [1, 0, 0, 1],
    [0, 1, 1, 0],
    [1, 1, 0, 0],
    [0, 0, 0, 1],
    [1, 0, 1, 0]
]));

// Exercício 4: Disponibilidade de Assentos
function checkRowAvailable(cinema) {
    for (let i = 0; i < cinema.length; i++) {
        let allAvailable = true;
        for (let j = 0; j < cinema[i].length; j++) {
            if (cinema[i][j] === 0) { // 0 indica assento ocupado
                allAvailable = false;
                break;
            }
        }
        if (allAvailable) {
            return true;
        }
    }
    return false;
}

console.log("Fileira completamente disponível:", checkRowAvailable([
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [0, 0, 0, 0],
    [1, 1, 1, 1]
]));

// Funções Avançadas: STRING

/*
    String é considerado um valor primitivo, porém, ao ser interpretado o JS os converte em objetos, possuindo propriedades e métodos;
*/

// Length é um atributo que retorna a quantidade de caracteres de uma string
console.log('Jaques Hyago'.length)

// É um método que retorna o número do índice que um caractere ocupa 
console.log('Jaques Hyago'.charAt(7))

// É um método que retorna a posição do caractere na sua primeira ocorrência na string, sendo case sensitive
let name = 'Jaques Hyago'
console.log(name.indexOf('H'))

// É um método que permite substituir textos dentro de uma string, se o método encontrar a primeira cadeia de caracteres, ele substituirá pelo outro parâmetro 
console.log(name.replace('Jaques Hyago', 'Hyago Jaques'))

// É um método que permite extrair parte de uma string, com base numa posição inicial, e o segundo parâmetro indica quantos caracteres devem ser exibidos na sequência
console.log(name.substr('7', '5'))

// Métodos como toLocaleLowerCase, toLocaleUpperCase, toLowerCase e toUpperCase são autoexplicativos
console.log(name.toLocaleUpperCase())

// Método que remove as extremidades em branco de uma string 
console.log('-' + name.trim() + '-')

// Funções Avançadas: MATEMÁTICAS

// Faz arredondamentos para cima
let x = Math.ceil(10.380)
console.log(x)

// Arredondamento para baixo
let y = Math.floor(10.380)
console.log(y)

// Arredondamento com base em média, exemplo em passar de 0.5, valor até 4: arredonda pra baixo, maior ou igual a 5 arredonda pra cima
let z = Math.round(10.380)
console.log(z)

// Fornece um número aleatório entre 0 e 1
let v = Math.random()
console.log(v)

// Funções Avançadas: DATAS

// Date precisa ser instanciado, e todas as datas são baseadas com base no SO, possuindo getters e setters normalmente.
let date = new Date()

// Recupera a data do dia atual
console.log(date.getDate())

// Como é de 0 a 11, soma-se 1 para os 12 da vida real
console.log(date.getMonth() + 1)

console.log(date.getFullYear())

// Adicionar / remover dias
console.log(date.toString())
date.setDate(date.getDate() + 720)
console.log(date.toString())

// Adicionar / remover meses
console.log(date.toString())
date.setMonth(date.getMonth() + 1)

console.log(date.toString())

// Adicionar / remover anos
console.log(date.toString())
date.setFullYear(date.getFullYear() + 1)

console.log(date.toString())

// 15/01/2017
let date1 = new Date(2017, 0, 15)

// 23/02/2017
let date2 = new Date(2017, 1, 23)

console.log(date1.toString())

console.log(date2.toString())

// Converter datas para algo que possamos calcular
console.log(date1.getTime())

console.log(date2.getTime())

// 1 de janeiro de 1970

// Encontrar a quantidade de milissegundos entre data1 e data2
let milliseconds_between_dates = Math.abs(date1.getTime() - date2.getTime())
console.log(milliseconds_between_dates)

// 1 dia tem 24, cada hora tem 60 minutos, 
// cada minuto tem 60 segundos e 
// cada segundo tem 1000 milissegundos
// então quantos milissegundos existem em um dia?
let milliseconds_per_day = (1 * 24 * 60 * 60 * 1000)
console.log('1 dia tem: ' + milliseconds_per_day + ' milissegundos')

console.log('A diferença entre data1 e data2 é de ' + Math.ceil(milliseconds_between_dates / milliseconds_per_day) + ' dia(s)')