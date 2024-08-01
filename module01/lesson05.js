// O método 'log' do objeto 'console' é utilizado para imprimir algo no console do navegador ou servidor, extremamente útil para debugar o código. Por padrão, console.log quebra a linha.

/*
    A diferença entre os dois primeiros exemplos é que, por exemplo, não seria possível adicionar aspas duplas no meu texto com aspas duplas,
    mas aspas simples sim, e vice-versa, pois o interpretador entende que se está fechando o primeiro grupo. 

    Já o terceiro exemplo é utilizado para algo chamado template string, um conteúdo que veremos futuramente,
    mas que mescla variáveis e textos literais. Dentro desse contexto, é possível utilizar tanto aspas simples quanto aspas duplas.
    Todos esses textos são considerados strings e essa atribuição é feita dinamicamente.
*/
console.log("Hello World");
console.log('Hello World');
console.log(`Hello World`);

console.log(1.2);
console.log(7);
console.log(1000, 1520.10, "Jaques"); // Nesse caso não quebrará linha

// Exercício 1 - Apresente no console a seguinte mensagem: Meu nome é "NOME" e estou na aula de sábado com o professor Jaques.
console.log('Meu nome é "Jaques" e estou na aula de sábado com o professor Jaques');

/* 
    VARIÁVEIS - Existem quatro formas de declararmos variáveis em JS. OBS: Não reinicialize variáveis.
    Inicialmente podemos dizer que uma das diferenças entre let e var é que o var permite redeclarar uma variável.
*/

globalName = "Jaques"; // Caso não seja especificado, criará uma variável global, não deve ser utilizada
let name = "Jaques"; // Declaração padrão
var anotherName = "Hyago"; // Bastante antigo

/*
    Constantes são variáveis que não mudam, seguindo as mesmas regras de nomeação que variáveis comuns.
    Não se pode modificar uma constante e é necessário sempre inicializá-la com algum valor.
*/
const NAME = "Jaques Hyago";

// TIPOS DE DADOS

/*
    O JS inevitavelmente inicializará essa variável, por mais que a mesma não tenha sido inicializada pelo desenvolvedor,
    ele atribuirá o valor Undefined para ela, um valor que não aponta para lugar nenhum na memória.
*/

let test;
console.log(test);
test = "any value";
console.log(test);

let myNull = null; // null, por outro lado, já é um valor.
console.log(myNull);

/*
    Qual a diferença entre null e undefined? Ambos não apontam para lugar algum. 
    O null é utilizado quando intencionalmente se quer desconfigurar uma variável,
    um exemplo seria em questões opcionais em uma aplicação, caso o usuário opte por não a ter, a esse campo seria atribuído null.
    Já o undefined é geralmente atribuído diretamente pelo JS.
*/

// Boolean geralmente utilizado como flag, indicando, por exemplo, atividade ou inatividade de uma conta, ou um aluno aprovado ou reprovado
let myBoolean = true;
myBoolean = false;

let myString = 'Isso é uma string';
let myNumber = 15.30;

console.log(typeof (myBoolean));
console.log(typeof (myString));
console.log(typeof (myNull));
console.log(typeof (myNumber));

/*
    OPERADORES ARITMÉTICOS 
    + - adição e concatenação
    - - subtração
    / - divisão
    * - multiplicação
    ** - potenciação
    %  - resto da divisão
    NaN - not a number, ocorre algum erro na conta devido ao tipo de dados

    ordem de precedência 
        ()
        **
        * / % 
        + -
    caso tenham a mesma, irá da esquerda para direita
*/

let num1 = 10;
let num2 = 5;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);
console.log(num1 % num2);
console.log(2 ** 2);

// Casting
let numTest = "5";
console.log(numTest + num1);
let numTest2 = parseInt(numTest);

// parseFloat ou ainda Number('5.2')

console.log(numTest2 + num1);

// Operadores de incremento ++ e decremento -- com pré e pós de 1 em 1

let counter = 1;
counter = counter + 1;
counter++;
counter++;
counter++;

console.log(counter);

console.log(counter++);
console.log(++counter);
console.log(counter);
counter--;

// OPERADORES DE ATRIBUIÇÃO

const step = 2;

counter = 0;
counter += step;
console.log(counter);

counter = 0;
counter -= step;
console.log(counter);

counter = 0;
counter *= step;
console.log(counter);

counter = 0;
counter /= step;
console.log(counter);

counter = 0;
counter **= step;
console.log(counter);

// OPERADORES RELACIONAIS

// > >= < <= == (valor) === (valor e tipo) != !==

console.log(10 < 5);
console.log(10 > 5);
console.log(10 >= 5);
console.log(10 <= 5);
console.log(10 == "10");
console.log(10 === "10");
console.log(10 != "10");
console.log(10 !== "10");

// Operadores lógicos and, or, not

console.log((10 > 5) && (10 > 2));
console.log((10 > 5) || (10 > 2));
console.log((10 > 5) && !(10 > 2));

const user = "Jaques";
const password = "123456";

const authentication = user === 'Jaques' && password === '123456';
console.log(authentication);

console.log(!true);
console.log(!!true);

// Estruturas de controle: condicionais

const grade = 60;

if (grade >= 60) {
    console.log("APROVADO");
}

if (grade >= 60) {
    console.log("APROVADO");
} else {
    console.log("REPROVADO");
}

const age = 30;

if ((age >= 18) && (age <= 32)) {
    console.log("Pode realizar o concurso");
} else if ((age > 32) || (age < 18)) {
    console.log("Não pode realizar o concurso");
}

/*
    Operador ternário: uma estrutura de decisão semelhante ao if/else, mas com sintaxe enxuta.
*/

/*
    <condicao> ? <verdadeiro> : <falso>; resultado receberá o retorno da operação ternária.
    É um operador que não permite grande lógica em seus resultados, apenas dados mais brutos, como strings ou numbers.
    Parênteses são opcionais.
*/

let ternaryResult = (10 < 100) ? 'Verdadeiro' : 'falso';
console.log(ternaryResult);

// Controle de entrada e saída

// npm install prompt-sync

const prompt = require('prompt-sync')();

let distance = prompt("Digite aqui a distância: ");