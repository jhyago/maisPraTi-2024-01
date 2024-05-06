/*
  SWITCH CASE - O comando switch é um comando de seleção que permite selecionar um comando entre vários outros comandos. 
  Isto é feito através da comparação de uma variável a um conjunto de constantes. Cada um dos comandos está ligado a uma constante.
*/

/*
switch (opcao) {
    case 1:
        // indica para o switch que o case chegou ao final, caso n for escrita, todo o conteudo do case 1 e dos proximos seriam executados, até um break ser encontrado.
        break 
        
    //Funciona como um else, e pode n ser definido, caso seja definido e nenhum case entre em loop, ele será ativado.
    default: 
        break;
}
*/

const prompt = require('prompt-sync')();

//Exercício 1: Par ou Ímpar

let numero = parseInt(prompt("Insira um número:"));

if (numero % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}

//Exercício 2: Maior de Dois Números
let numero1 = parseInt(prompt("Insira o primeiro número:"));
let numero2 = parseInt(prompt("Insira o segundo número:"));

if (numero1 > numero2) {
    console.log("O primeiro número é maior.");
} else if (numero2 > numero1) {
    console.log("O segundo número é maior.");
} else {
    console.log("Os números são iguais.");
}

//Exercício 3: Triângulo
let lado1 = parseInt(prompt("Insira o comprimento do primeiro lado:"));
let lado2 = parseInt(prompt("Insira o comprimento do segundo lado:"));
let lado3 = parseInt(prompt("Insira o comprimento do terceiro lado:"));
if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    console.log("É possível formar um triângulo com esses comprimentos de lado.");
} else {
    console.log("Não é possível formar um triângulo com esses comprimentos de lado.");
}

//Exercício 4: Calculadora Simples
let num1 = parseInt(prompt("Insira o primeiro número:"));
let num2 = parseInt(prompt("Insira o segundo número:"));
let operacao = prompt("Insira a operação desejada (+, -, *, /):");

let resultado;
if (operacao === '+') {
    resultado = num1 + num2;
} else if (operacao === '-') {
    resultado = num1 - num2;
} else if (operacao === '*') {
    resultado = num1 * num2;
} else if (operacao === '/') {
    if (num2 !== 0) {
        resultado = num1 / num2;
    } else {
        console.log("Erro: divisão por zero.");
        resultado = undefined;
    }
} else {
    console.log("Operação inválida.");
    resultado = undefined;
}

if (resultado !== undefined) {
    console.log("Resultado:", resultado);
}



//Exemplo 1: Verificar o dia da semana
let dia = parseInt(prompt("Insira o número do dia da semana (1 a 7):"));

let nomeDia;
switch (dia) {
    case 1:
        nomeDia = "Domingo";
        break;
    case 2:
        nomeDia = "Segunda-feira";
        break;
    case 3:
        nomeDia = "Terça-feira";
        break;
    case 4:
        nomeDia = "Quarta-feira";
        break;
    case 5:
        nomeDia = "Quinta-feira";
        break;
    case 6:
        nomeDia = "Sexta-feira";
        break;
    case 7:
        nomeDia = "Sábado";
        break;
    default:
        nomeDia = "Dia inválido";
}

console.log("O dia é:", nomeDia);

//Exemplo 2: Calcular o número de dias em um mês
let mes = parseInt(prompt("Insira o número do mês (1 a 12):"));

let diasNoMes;
switch (mes) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        diasNoMes = 31;
        break;
    case 4: case 6: case 9: case 11:
        diasNoMes = 30;
        break;
    case 2:
        diasNoMes = 28; // Assumindo que não é um ano bissexto
        break;
    default:
        diasNoMes = -1; // Mês inválido
}

if (diasNoMes !== -1) {
    console.log("O mês", mes, "tem", diasNoMes, "dias.");
} else {
    console.log("Mês inválido.");
}

//Exemplo 3: Conversão de código de tecla para nome
let codigoTecla = parseInt(prompt("Insira o código da tecla (0 a 9):"));

let nomeTecla;
switch (codigoTecla) {
    case 0:
        nomeTecla = "Zero";
        break;
    case 1:
        nomeTecla = "Um";
        break;
    case 2:
        nomeTecla = "Dois";
        break;
    case 3:
        nomeTecla = "Três";
        break;
    case 4:
        nomeTecla = "Quatro";
        break;
    case 5:
        nomeTecla = "Cinco";
        break;
    case 6:
        nomeTecla = "Seis";
        break;
    case 7:
        nomeTecla = "Sete";
        break;
    case 8:
        nomeTecla = "Oito";
        break;
    case 9:
        nomeTecla = "Nove";
        break;
    default:
        nomeTecla = "Tecla inválida";
}

console.log("O código", codigoTecla, "corresponde à tecla:", nomeTecla);


/*
    Estruturas de controle: repetição, são estruturas que nos permitem executar mais de uma vez um mesmo trecho de código. 
    Trata-se de uma forma de executar blocos de comandos somente sob determinadas condições, mas com a opção de 
    repetir o mesmo bloco quantas vezes for necessário.
*/

//For
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

let contador = 0
let multiplicando = 5

//   <variável>;   <condição>;     <incremento>
for (contador = 0; contador <= 10; contador++) {
    console.log(`${multiplicando} * ${contador} =`, multiplicando * contador);
}

//Imprimir os números pares de 1 a 20.

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

//Calcular a soma dos números de 1 a 100.
let soma = 0;
for (let i = 1; i <= 100; i++) {
    soma += i;
}
console.log(soma);


//While 

let controle = 0

while (controle <= 10) {
    console.log(controle)
    controle++
}

//Imprimir os números de 10 a 1 em ordem decrescente.
let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

//Imprimir os múltiplos de 5 menores que 100.
let num = 5;
while (num < 100) {
    console.log(num);
    num += 5;
}

//Solicitar números ao usuário até que ele insira um valor negativo.
let valor;
do {
    valor = parseInt(prompt("Digite um valor:"));
} while (valor >= 0);


//Do-While

//Solicitar uma senha ao usuário.

let senha;
do {
    senha = prompt("Digite a senha:");
} while (senha !== "senha_correta");
console.log("Senha correta! Acesso permitido.");


//Pedir ao usuário para adivinhar um número entre 1 e 10.
const numeroCorreto = Math.floor(Math.random() * 10) + 1;
let tentativa;
do {
    tentativa = parseInt(prompt("Adivinhe o número entre 1 e 10:"));
    if (tentativa < numeroCorreto) {
        console.log("Tente um número maior.");
    } else if (tentativa > numeroCorreto) {
        console.log("Tente um número menor.");
    }
} while (tentativa !== numeroCorreto);
console.log("Parabéns! Você acertou o número.");
