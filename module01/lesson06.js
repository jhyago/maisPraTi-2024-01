/*
    SWITCH CASE - O comando switch é um comando de seleção que permite selecionar um comando entre vários outros comandos.
    Isto é feito através da comparação de uma variável a um conjunto de constantes. Cada um dos comandos está ligado a uma constante.
*/

/*
    Estrutura básica do switch:
    switch (option) {
        case 1:
            // Indica para o switch que o case chegou ao final. Caso não for escrita, todo o conteúdo do case 1 e dos próximos seriam executados, até um break ser encontrado.
            break;
        
        // Funciona como um else, e pode não ser definido. Caso seja definido e nenhum case entre em loop, ele será ativado.
        default: 
            break;
    }
*/

const prompt = require('prompt-sync')();

// Exercício 1: Par ou Ímpar
let number = parseInt(prompt("Insira um número:"));

if (number % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}

// Exercício 2: Maior de Dois Números
let number1 = parseInt(prompt("Insira o primeiro número:"));
let number2 = parseInt(prompt("Insira o segundo número:"));

if (number1 > number2) {
    console.log("O primeiro número é maior.");
} else if (number2 > number1) {
    console.log("O segundo número é maior.");
} else {
    console.log("Os números são iguais.");
}

// Exercício 3: Triângulo
let side1 = parseInt(prompt("Insira o comprimento do primeiro lado:"));
let side2 = parseInt(prompt("Insira o comprimento do segundo lado:"));
let side3 = parseInt(prompt("Insira o comprimento do terceiro lado:"));

if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
    console.log("É possível formar um triângulo com esses comprimentos de lado.");
} else {
    console.log("Não é possível formar um triângulo com esses comprimentos de lado.");
}

// Exercício 4: Calculadora Simples
let num1 = parseInt(prompt("Insira o primeiro número:"));
let num2 = parseInt(prompt("Insira o segundo número:"));
let operation = prompt("Insira a operação desejada (+, -, *, /):");

let result;
if (operation === '+') {
    result = num1 + num2;
} else if (operation === '-') {
    result = num1 - num2;
} else if (operation === '*') {
    result = num1 * num2;
} else if (operation === '/') {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        console.log("Erro: divisão por zero.");
        result = undefined;
    }
} else {
    console.log("Operação inválida.");
    result = undefined;
}

if (result !== undefined) {
    console.log("Resultado:", result);
}

// Exemplo 1: Verificar o dia da semana
let day = parseInt(prompt("Insira o número do dia da semana (1 a 7):"));

let dayName;
switch (day) {
    case 1:
        dayName = "Domingo";
        break;
    case 2:
        dayName = "Segunda-feira";
        break;
    case 3:
        dayName = "Terça-feira";
        break;
    case 4:
        dayName = "Quarta-feira";
        break;
    case 5:
        dayName = "Quinta-feira";
        break;
    case 6:
        dayName = "Sexta-feira";
        break;
    case 7:
        dayName = "Sábado";
        break;
    default:
        dayName = "Dia inválido";
}

console.log("O dia é:", dayName);

// Exemplo 2: Calcular o número de dias em um mês
let month = parseInt(prompt("Insira o número do mês (1 a 12):"));

let daysInMonth;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        daysInMonth = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        daysInMonth = 30;
        break;
    case 2:
        daysInMonth = 28; // Assumindo que não é um ano bissexto
        break;
    default:
        daysInMonth = -1; // Mês inválido
}

if (daysInMonth !== -1) {
    console.log("O mês", month, "tem", daysInMonth, "dias.");
} else {
    console.log("Mês inválido.");
}

// Exemplo 3: Conversão de código de tecla para nome
let keyCode = parseInt(prompt("Insira o código da tecla (0 a 9):"));

let keyName;
switch (keyCode) {
    case 0:
        keyName = "Zero";
        break;
    case 1:
        keyName = "Um";
        break;
    case 2:
        keyName = "Dois";
        break;
    case 3:
        keyName = "Três";
        break;
    case 4:
        keyName = "Quatro";
        break;
    case 5:
        keyName = "Cinco";
        break;
    case 6:
        keyName = "Seis";
        break;
    case 7:
        keyName = "Sete";
        break;
    case 8:
        keyName = "Oito";
        break;
    case 9:
        keyName = "Nove";
        break;
    default:
        keyName = "Tecla inválida";
}

console.log("O código", keyCode, "corresponde à tecla:", keyName);

/*
    Estruturas de controle: repetição são estruturas que nos permitem executar mais de uma vez um mesmo trecho de código. 
    Trata-se de uma forma de executar blocos de comandos somente sob determinadas condições, mas com a opção de 
    repetir o mesmo bloco quantas vezes for necessário.
*/

// Exemplo: Impressão de multiplicação de 5
console.log(5 * 0);
console.log(5 * 1);
console.log(5 * 2);
console.log(5 * 3);
console.log(5 * 4);
console.log(5 * 5);
console.log(5 * 6);
console.log(5 * 7);
console.log(5 * 8);
console.log(5 * 9);
console.log(5 * 10);

let counter = 0;
let multiplier = 5;

// Estrutura do for
//   <variável>;   <condição>;     <incremento>
for (counter = 0; counter <= 10; counter++) {
    console.log(`${multiplier} * ${counter} =`, multiplier * counter);
}

// Imprimir os números pares de 1 a 20.
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// Calcular a soma dos números de 1 a 100.
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

// While - Estrutura de repetição enquanto a condição for verdadeira.
let control = 0;

while (control <= 10) {
    console.log(control);
    control++;
}

// Imprimir os números de 10 a 1 em ordem decrescente.
let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

// Imprimir os múltiplos de 5 menores que 100.
let num = 5;
while (num < 100) {
    console.log(num);
    num += 5;
}

// Solicitar números ao usuário até que ele insira um valor negativo.
let value;
do {
    value = parseInt(prompt("Digite um valor:"));
} while (value >= 0);

// Do-While - Estrutura de repetição que garante a execução do bloco pelo menos uma vez.

// Solicitar uma senha ao usuário.
let password;
do {
    password = prompt("Digite a senha:");
} while (password !== "senha_correta");
console.log("Senha correta! Acesso permitido.");

// Pedir ao usuário para adivinhar um número entre 1 e 10.
const correctNumber = Math.floor(Math.random() * 10) + 1;
let guess;
do {
    guess = parseInt(prompt("Adivinhe o número entre 1 e 10:"));
    if (guess < correctNumber) {
        console.log("Tente um número maior.");
    } else if (guess > correctNumber) {
        console.log("Tente um número menor.");
    }
} while (guess !== correctNumber);
console.log("Parabéns! Você acertou o número.");