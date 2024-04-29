//método 'log' do objeto 'console', utilizado para imprimir algo no console do navegador ou servidor, extremamente útil para debugar o código e por padrão a console.log quebra a linha

/*
    A diferença entre os dois primeiros exemplos é que, por exemplo, não seria possível adicionar aspas duplas no meu texto com aspas duplas 
    mas aspas simples sim, e vice versa, pois o interpretador entende que se está fechando o primeiro grupo. 
    
    Já o terceiro exemplo, é utilizado para algo chamado template string, um conteúdo que veremos futuramente, mas que mescla variáveis e textos literais
    mas dentro desse contexto, é possível utilizar tanto aspas simples quanto aspas duplas todos esses textos são considerados strings e essa atribuição é feita dinâmicamente 
*/
console.log("Hello World");
console.log('Hello World');
console.log(`Hello World`);


console.log(1.2);
console.log(7);
console.log(1000, 1520.10, "Jaques"); //nesse caso não quebrará linha

// Exercício 1 - Apresente no console a seguinte mensagem: Meu nome é "NOME" e estou na aula de sábado com o professor Jaques.
console.log("Meu nome é Jaques e estou na aula ", 0o5, " do o professor Jaques");

/* 
    VARIÁVEIS - Existem quatro formas de declararmos variáveis em JS. OBS: Não reinicialize variáveis
    inicialmente podemos dizer que uma das diferenças entre let e var é que o var permite redeclarar uma variável
*/

nome = "Jaques"; // caso não seja especificado, criará uma variável global, n deve ser utilizada
let nome = "Jaques"; //declaração padrão
var name = "Hyago"; //bastante antigo

/*
    Constantes são variáveis que não mudam, seguindo as mesmas regras de nomeação que variáveis comuns, não se pode modificar uma constante e é necessário sempre inicializá-la com algum valor
*/
const NOME = "Jaques Hyago";

//TIPOS DE DADOS

/*
    o JS inevitavelmente inicializará essa variável, por mais que a mesma não tenha sido inicializada pelo desenvolvedor, ele atribuirá o valor Undefined para ela, um valor que não aponta para lugar nenhum na memória
*/

let teste;
console.log(teste);
teste = "qualquer valor";
console.log(teste);

let meuNull = null; //null, por outro, lado já é um valor.
console.log(meuNull);

/*
    Qual a diferença entre null e Undefined? Ambos não apontam para lugar algum, o null é utilizado quando intencionalmente se quer desconfigurar uma variável
    um exemplo seria em questões opcionais em uma aplicação, caso o usuário opte por não a ter, a esse campo seria atribuido null
    já o Undefined ele é geralmente atribuído diretamente pelo JS
*/

//Boolean geralmente utilizado como flag, indicando por exemplo, atividade ou inatividade de uma conta, ou um aluno aprovado ou reprovado
let meuBoolean = true
meuBoolean = false

let minhaString = 'Isso é uma string';
let meuNumber = 15.30;

console.log(typeof (meuBoolean));
console.log(typeof (minhaString));
console.log(typeof (meuNull));
console.log(typeof (meuNumber));

/*
    OPERADORES ARITMÉTICOS 
    + - adição e concatenação
    - - subtração
    / - divisão
    * - multiplicação
    ** - potenciação
    %  - resto da divisão
    NaN not a number deu algum erro na conta devido ao tipo de dados

    ordem de precedência 
        ()
        **
        * \ % 
        + -
    caso tenham a mesma, irá da esquerda para direita
*/

let num1 = 10;
let num2 = 5;

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 / num2)
console.log(num1 * num2)
console.log(num1 % num2)
console.log(2 ** 2)

//casting
let numTest = "5"
console.log(numTest + num1)
let numTest2 = parseInt(numTest);

//parseFloat ou ainda Number('5.2')

console.log(numTest2 + num1)

//Operadores de incremento ++ e decremento -- com pré e pós de 1 em 1

let contador = 1
contador = contador + 1
contador++
contador++
contador++

console.log(contador)

console.log(contador++)
console.log(++contador)
console.log(contador)
contador--

// OPERADORES DE ATRIBUIÇÃO

const passo = 2;

contador = 0
contador += passo
console.log(contador)

contador = 0
contador -= passo
console.log(contador)

contador = 0
contador *= passo
console.log(contador)

contador = 0
contador /= passo
console.log(contador)

contador = 0
contador **= passo
console.log(contador)


//OPERADORES RELACIONAIS

// > >= < <= == (valor) === (valor e tipo) != !==

console.log(10 < 5)
console.log(10 > 5)
console.log(10 >= 5)
console.log(10 <= 5)
console.log(10 == "10")
console.log(10 === "10")
console.log(10 != "10")
console.log(10 !== "10")


// Operadores lógicos and, or, not

console.log((10 > 5) && (10 > 2))
console.log((10 > 5) || (10 > 2))
console.log((10 > 5) && !(10 > 2))

const usuario = "Jaques";
const senha = "123456";

const autenticacao = usuario === 'Jaques' && senha === '12345';
console.log(autenticacao)

console.log(!true)
console.log(!!true)


//Estruturas de controle: condicionais

const nota = 60

if (nota >= 60) {
    console.log("APROVADO")
}

if (nota >= 60) {
    console.log("APROVADO")
} else {
    console.log("REPROVADO")
}

const idade = 30

if ((idade >= 18) && (idade <= 32)) {
    console.log("Pode realizar o concurso")
} else if ((idade > 32) || (idade < 18)) {
    console.log("Não pode tirar ")
}

/*
    Operador ternário: uma estrutura de decisão semelhante ao if/else, mas com sintaxe enxuta.
*/

/*
    <condicao> ? <verdadeiro> : <falso>; resultado receberá o retorno da operação ternária. É um operador que não permite grande lógica em seus resultados, apenas dados mais brutos, como strings ou numbers. Parentêses são opcioanis.
*/

let resultadoTernario = (10 < 100) ? 'Verdadeiro' : 'falso'
console.log(reresultadoTernariosultado)

//Controle de entrada e saída

//npm install prompt-sync

const prompt = require('prompt-sync')();

var test = prompt("Digite aqui a distância: ");