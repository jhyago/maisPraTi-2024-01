// Exercitando Arrays e Funções

// Exercício 1: Somar todos os elementos de um array
function sumElements(array) {
    return array.reduce((sum, value) => sum + value, 0);
}

console.log("Teste Soma Elementos:", sumElements([1, 2, 3, 4]));  // Deve retornar 10

// Exercício 2: Encontrar o maior número em um array
function largestNumber(array) {
    return Math.max(...array);
}

console.log("Teste Maior Número:", largestNumber([1, 22, 3, 4]));  // Deve retornar 22

// Exercício 3: Reverter um array
function reverseArray(array) {
    return array.reverse();
}

console.log("Teste Inverte Array:", reverseArray([1, 2, 3, 4]));  // Deve retornar [4, 3, 2, 1]

// Exercício 4: Contar a frequência de elementos
function elementFrequency(array) {
    return array.reduce((frequency, item) => {
        frequency[item] = (frequency[item] || 0) + 1;
        return frequency;
    }, {});
}

console.log("Teste Frequência Elementos:", elementFrequency([1, 2, 2, 3, 3, 3])); // Deve retornar {1: 1, 2: 2, 3: 3}

// Exercício 5: Remover duplicatas de um array
function removeDuplicates(array) {
    return [...new Set(array)];
}

console.log("Teste Remove Duplicatas:", removeDuplicates([1, 2, 2, 3, 3, 3, 4])); // Deve retornar [1, 2, 3, 4]

// Exercício 6: Calcular a média de notas de uma turma
function calculateAverageGrades(grades) {
    const sum = grades.reduce((total, grade) => total + grade, 0);
    return sum / grades.length;
}

console.log("Média das notas:", calculateAverageGrades([10, 20, 30, 40, 50])); // Deve retornar 30

// Exercício 7: Verificar se todos os números de um array são positivos
function allPositive(numbers) {
    return numbers.every(num => num > 0);
}

console.log("Todos são positivos?", allPositive([1, 2, 3, -4, 5])); // Deve retornar false

// Exercício 8: Encontrar o número de vezes que um dado nome aparece em uma lista
function countOccurrences(names, targetName) {
    return names.filter(name => name === targetName).length;
}

console.log("Ocorrências do nome 'Ana':", countOccurrences(["Ana", "Pedro", "Ana", "Maria"], "Ana")); // Deve retornar 2

// Exercício 9: Filtrar números menores que 10 de um array
function filterLessThanTen(numbers) {
    return numbers.filter(num => num < 10);
}

console.log("Números menores que 10:", filterLessThanTen([5, 15, 8, 10, 3])); // Deve retornar [5, 8, 3]

// Exercício 10: Concatenar dois arrays
function concatenateArrays(array1, array2) {
    return array1.concat(array2);
}

console.log("Arrays concatenados:", concatenateArrays([1, 2, 3], [4, 5, 6])); // Deve retornar [1, 2, 3, 4, 5, 6]

// Exercitando Matrizes e Funções

// Exercício 1: Somar todos os elementos de uma matriz
function sumMatrixElements(matrix) {
    return matrix.flat().reduce((sum, num) => sum + num, 0);
}

console.log("Soma dos elementos:", sumMatrixElements([[1, 2], [3, 4]])); // Deve retornar 10

// Exercício 2: Encontrar o maior número em uma matriz
function largestMatrixNumber(matrix) {
    return Math.max(...matrix.flat());
}

console.log("Maior número:", largestMatrixNumber([[1, 2], [3, 4]])); // Deve retornar 4

// Exercício 3: Reservas de Sala
function countReservations(week) {
    return week.flat().reduce((count, reservation) => reservation === 1 ? count + 1 : count, 0);
}

console.log("Total de reservas:", countReservations([
    [1, 0, 0, 1],
    [0, 1, 1, 0],
    [1, 1, 0, 0],
    [0, 0, 0, 1],
    [1, 0, 1, 0]
])); // Deve retornar 8

// Exercício 4: Disponibilidade de Assentos
function checkRowAvailable(cinema) {
    return cinema.some(row => row.every(seat => seat === 1));
}

console.log("Fileira completamente disponível:", checkRowAvailable([
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [0, 0, 0, 0],
    [1, 1, 1, 1]
])); // Deve retornar true

// Funções Avançadas: STRING

/*
    String é considerado um valor primitivo, porém, ao ser interpretado, o JS os converte em objetos, possuindo propriedades e métodos.
*/

// Retorna a quantidade de caracteres de uma string
console.log('Jaques Hyago'.length); // 12

// Retorna o caractere na posição específica
console.log('Jaques Hyago'.charAt(7)); // H

// Retorna a posição do caractere na sua primeira ocorrência
let name = 'Jaques Hyago';
console.log(name.indexOf('H')); // 7

// Substitui textos dentro de uma string
console.log(name.replace('Jaques Hyago', 'Hyago Jaques')); // Hyago Jaques

// Extrai parte de uma string com base na posição inicial e a quantidade de caracteres
console.log(name.substr(7, 5)); // Hyago

// Converte a string para maiúsculas e minúsculas
console.log(name.toUpperCase()); // JAQUES HYAGO
console.log(name.toLowerCase()); // jaques hyago

// Remove as extremidades em branco de uma string 
console.log('-' + name.trim() + '-'); // -Jaques Hyago-

// Funções Avançadas: MATEMÁTICAS

// Arredondamentos para cima
console.log(Math.ceil(10.380)); // 11

// Arredondamento para baixo
console.log(Math.floor(10.380)); // 10

// Arredondamento com base em média
console.log(Math.round(10.380)); // 10

// Número aleatório entre 0 e 1
console.log(Math.random());

// Funções Avançadas: DATAS

// Date precisa ser instanciado, e todas as datas são baseadas no SO, possuindo getters e setters.
let date = new Date();

// Recupera a data do dia atual
console.log(date.getDate()); // Ex: 1

// Recupera o mês atual (0 a 11, soma-se 1 para representar corretamente)
console.log(date.getMonth() + 1); // Ex: 8

// Recupera o ano atual
console.log(date.getFullYear()); // Ex: 2024

// Adicionar / remover dias
date.setDate(date.getDate() + 720); // Adiciona 720 dias
console.log(date.toString());

// Adicionar / remover meses
date.setMonth(date.getMonth() + 1); // Adiciona 1 mês
console.log(date.toString());

// Adicionar / remover anos
date.setFullYear(date.getFullYear() + 1); // Adiciona 1 ano
console.log(date.toString());

// Manipulação de Datas

// Data específica: 15/01/2017
let date1 = new Date(2017, 0, 15);

// Data específica: 23/02/2017
let date2 = new Date(2017, 1, 23);

console.log(date1.toString());
console.log(date2.toString());

// Converter datas para milissegundos
console.log(date1.getTime());
console.log(date2.getTime());

// Calcular diferença entre datas em milissegundos
let milliseconds_between_dates = Math.abs(date1.getTime() - date2.getTime());
console.log(milliseconds_between_dates);

// Calcular milissegundos em um dia
let milliseconds_per_day = (1 * 24 * 60 * 60 * 1000);
console.log('1 dia tem: ' + milliseconds_per_day + ' milissegundos');

console.log('A diferença entre data1 e data2 é de ' + Math.ceil(milliseconds_between_dates / milliseconds_per_day) + ' dia(s)');