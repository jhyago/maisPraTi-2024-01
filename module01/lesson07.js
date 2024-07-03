/*
    Array em JS é um objeto que possui seus métodos e atributos próprios, sendo necessária o instanciamento do mesmo parar criar uma variável desse 
    tipo. O índice pode ser mesclado, também.
*/

/*
    let fruitList = [] --- Também funciona como declaração. Pode ser indicado o valor para cada índice direto no construtor do array ou nos colchetes.

    let fruitList = Array ('Banana', 'Maça', 'Morango', 'Uva') --- Também funciona como declaração, tend como os índices sequenciais
    let fruitList = ['Banana', 'Maça', 'Morango', 'Uva'] --- Idem
*/


let fruitList = Array();

fruitList[1] = 100;
fruitList[2] = true;
fruitList['x'] = 'Strawberry';
fruitList[4] = 'Grape';

console.log(fruitList);

/*
    Arrays multidimensionais são arrays compostos por outros arrays, dentro de índices de um array podem ser encadeados outros arrays.
*/

let thingsList = Array();

thingsList['fruits'] = Array();

thingsList['fruits'][0] = 'Apple';
thingsList['fruits'][1] = 'Grape';
thingsList['fruits'][2] = 'Orange';
thingsList['fruits'][3] = 'Tangerine';

thingsList['people'] = Array('Person 1', 'Person 2', 'Person 3');

console.log(thingsList);

/*
    Inclusão de elementos no final do array com método nativo, passando como parâmetro o elemento para ser incluso no final
        
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

// Arrays multidimensionais: sintaxe de inserção e exclusão

let thingsList = Array();

thingsList['fruits'] = Array();
thingsList['people'] = [];

thingsList['fruits'].push('Apple');

console.log(thingsList);

/*
    Para pesquisas dentro de array é utilizado o método indexOf passando como parâmetro o elemento alvo da pesquisa. Caso o retorno seja (-1) significa que o elemento não existe. Caso exista o método retorna o índice do elemento.
*/

let fruitList = Array('Banana', 'Apple', 'Strawberry', 'Grape');

let aux = fruitList.indexOf('Strawberry');

if (aux === -1) {
    console.log('Elemento não existe');
} else {
    console.log('Elemento existe e está na posição ' + aux);
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

let fruitList = Array();

fruitList[0] = 12;
fruitList[1] = 40;
fruitList[2] = 3;
fruitList[3] = 7;
fruitList[4] = 19;
fruitList[5] = 1;

/*
    Declaração de função

    JS tem uma flexibilidade de parâmetros, mesmo que a função tenha parâmetros, em JS não precisa ser passado todos os parâmetros, podendo ser 
    passados mais, menos ou nenhum parâmetro e isso não gerará erro.
    Caso seja passado mais parâmetros, JS desconsidera os parâmetros adicionais. 
    Em caso de menos parâmetros, o que está ausente receberá o valor 'undefined', ou seja, os parâmetros não indicados, receberão undefined.

    JS possui 3 escopos: global (pode ser acessado no script como um todo), da função (escopo apenas dentro da função) e o escopo de bloco (instruções contidas dentro de comandos, como if e switch), caso seja escrito "var" antes da variável de escopo de bloco, ela se torna global (caso o escopo de bloco seja declarado dentro do escopo da função, essa elevação do escopo acontece, mas apenas para o nível da função e não global). Caso 'var' seja declarado dentro do escopo de uma função, o escopo não se torna global.
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
    Técnica de wrapper, o JS permite associar a uma variável não apenas tipos, mas também funções. 
    A variável passa a guardar uma referência para a função de modo a embrulhar a mesma.
*/

let displayFunction = function () {
    console.log('Hello, world!');
}

displayFunction();

/*
   Funções de callback geralmente são anônimas e servem de parâmetros para outras funções: 
*/

function showFunction(successCallback, errorCallback) {
    if (true) {
        successCallback('Funções de callback em JS', 'Funções de callback são muito utilizadas...');
    } else {
        errorCallback('Erro ao recuperar os dados');
    }
}

let successCallback = function (title) {
    console.log(title);
}

let errorCallback = function (error) {
    console.log(error);
}

showFunction(successCallback, errorCallback);