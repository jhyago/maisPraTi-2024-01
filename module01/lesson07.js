/*
    Arrays em JS são objetos que possuem seus métodos e atributos próprios, sendo necessária a criação de uma instância para utilizá-los.
    O índice pode ser mesclado, também.
*/

/*
    let fruitList = []  // Também funciona como declaração. Pode-se indicar o valor para cada índice direto no construtor do array ou nos colchetes.

    let fruitList = Array('Banana', 'Maçã', 'Morango', 'Uva') // Também funciona como declaração, criando índices sequenciais
    let fruitList = ['Banana', 'Maçã', 'Morango', 'Uva'] // Idem
*/

let fruitList = Array();

fruitList[1] = 100;
fruitList[2] = true;
fruitList['x'] = 'Strawberry';
fruitList[4] = 'Grape';

console.log(fruitList); // [ <1 empty item>, 100, true, <1 empty item>, 'Grape', x: 'Strawberry' ]

/*
    Arrays multidimensionais são arrays compostos por outros arrays. Dentro dos índices de um array, podem ser encadeados outros arrays.
*/

let thingsList = Array();

thingsList['fruits'] = Array();

thingsList['fruits'][0] = 'Apple';
thingsList['fruits'][1] = 'Grape';
thingsList['fruits'][2] = 'Orange';
thingsList['fruits'][3] = 'Tangerine';

thingsList['people'] = Array('Person 1', 'Person 2', 'Person 3');

console.log(thingsList); // { fruits: [ 'Apple', 'Grape', 'Orange', 'Tangerine' ], people: [ 'Person 1', 'Person 2', 'Person 3' ] }

/*
    Inclusão de elementos no final do array com método nativo, passando como parâmetro o elemento para ser incluído no final
    
    let fruitList = Array()

    fruitList[0] = 'Banana'
    fruitList[1] = 'Apple'

    // Inclusão de elemento no final do array
    fruitList.push('Grape')

    // Inclusão de elemento no início do array
    fruitList.unshift('Orange')

    // Exclusão de elemento no final do array
    fruitList.pop()

    // Exclusão no início do array
    fruitList.shift()

    console.log(fruitList)
*/

let myFruits = Array();

myFruits.push('Banana');  // ['Banana']
myFruits.push('Apple');   // ['Banana', 'Apple']
myFruits.unshift('Orange'); // ['Orange', 'Banana', 'Apple']
myFruits.pop(); // ['Orange', 'Banana']
myFruits.shift(); // ['Banana']

console.log(myFruits); // ['Banana']

// Arrays multidimensionais: sintaxe de inserção e exclusão

let things = Array();

things['fruits'] = Array();
things['people'] = [];

things['fruits'].push('Apple');

console.log(things); // { fruits: [ 'Apple' ], people: [] }

/*
    Para pesquisas dentro de array, é utilizado o método indexOf passando como parâmetro o elemento alvo da pesquisa. 
    Caso o retorno seja (-1), significa que o elemento não existe. Caso exista, o método retorna o índice do elemento.
*/

let fruitBasket = Array('Banana', 'Apple', 'Strawberry', 'Grape');

let index = fruitBasket.indexOf('Strawberry');

if (index === -1) {
    console.log('Elemento não existe');
} else {
    console.log('Elemento existe e está na posição ' + index);
}

/*
    Ordenação alfabética: usa-se o método sort, que faz a ordenação alfabética e rearranja os índices

    let fruitList =  Array()

    fruitList[0] = 'Apple'
    fruitList[1] = 'Grape'
    fruitList[2] = 'Banana'
    fruitList[3] = 'Strawberry'

    console.log(fruitList.sort())
*/

let numberList = Array();

numberList[0] = 12;
numberList[1] = 40;
numberList[2] = 3;
numberList[3] = 7;
numberList[4] = 19;
numberList[5] = 1;

console.log(numberList.sort()); // [ 1, 12, 19, 3, 40, 7 ] - Note que a ordenação alfabética afeta os números

// Ordenação numérica correta:
console.log(numberList.sort((a, b) => a - b)); // [ 1, 3, 7, 12, 19, 40 ]

/*
    Declaração de função

    JS tem uma flexibilidade de parâmetros. Mesmo que a função tenha parâmetros, em JS não precisa ser passado todos os parâmetros, podendo ser 
    passados mais, menos ou nenhum parâmetro e isso não gerará erro.
    Caso sejam passados mais parâmetros, JS desconsidera os parâmetros adicionais. 
    Em caso de menos parâmetros, o que está ausente receberá o valor 'undefined', ou seja, os parâmetros não indicados, receberão undefined.

    JS possui 3 escopos: global (pode ser acessado no script como um todo), da função (escopo apenas dentro da função) e o escopo de bloco (instruções contidas dentro de comandos, como if e switch).
    Caso seja escrito "var" antes da variável de escopo de bloco, ela se torna global (caso o escopo de bloco seja declarado dentro do escopo da função, essa elevação do escopo acontece, mas apenas para o nível da função e não global).
    Caso 'var' seja declarado dentro do escopo de uma função, o escopo não se torna global.
*/

function calculateLandArea(width, length) {
    let area = width * length;
    return area;
}

let width = prompt('Digite a largura do terreno em metros');
let length = prompt('Digite o comprimento do terreno em metros');

// Chamada da função e passagem de parâmetros
let result = calculateLandArea(width, length);
console.log('O terreno possui ' + result + ' metros quadrados');

/*
    Funções anônimas têm a sintaxe idêntica a uma função comum, a diferença está no fato de que elas não possuem nome, recursos muito utilizados principalmente dentro de callbacks (funções dentro de funções). Declaração:
*/

/* 
    function(){
        console.log('Olá, mundo!')
    }
*/

/*
    Técnica de wrapper: o JS permite associar a uma variável não apenas tipos, mas também funções. 
    A variável passa a guardar uma referência para a função de modo a embrulhar a mesma.
*/

let displayFunction = function () {
    console.log('Hello, world!');
}

displayFunction(); // Chamada da função atribuída à variável

/*
    Funções de callback geralmente são anônimas e servem de parâmetros para outras funções. 
    Elas permitem que uma função seja chamada após outra operação ser concluída.
*/

function showFunction(successCallback, errorCallback) {
    if (true) { // Simulação de sucesso
        successCallback('Funções de callback em JS', 'Funções de callback são muito utilizadas...');
    } else {
        errorCallback('Erro ao recuperar os dados');
    }
}

let successCallback = function (title, message) {
    console.log(title);
    console.log(message);
}

let errorCallback = function (error) {
    console.log(error);
}

showFunction(successCallback, errorCallback);

/*
    Exemplo melhorado de callback com operação assíncrona simulada (setTimeout).
*/

function fetchData(callback) {
    setTimeout(function () {
        // Simula uma operação assíncrona
        callback('Dados recuperados com sucesso!');
    }, 2000);
}

fetchData(function (data) {
    console.log(data); // Exibe a mensagem após 2 segundos
});