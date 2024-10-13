// ---------------------------------------------
// 1. Conversão de Celsius para Fahrenheit
// ---------------------------------------------

function celsiusParaFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

let celsius = 25; // Exemplo de entrada
console.log(`Temperatura em Fahrenheit: ${celsiusParaFahrenheit(celsius)}`);

// ---------------------------------------------
// 2. Percentual de votos em relação ao total de eleitores
// ---------------------------------------------

function percentualVotos(eleitores, brancos, nulos, validos) {
    let percentualBrancos = (brancos / eleitores) * 100;
    let percentualNulos = (nulos / eleitores) * 100;
    let percentualValidos = (validos / eleitores) * 100;

    console.log(`Percentual de votos brancos: ${percentualBrancos.toFixed(2)}%`);
    console.log(`Percentual de votos nulos: ${percentualNulos.toFixed(2)}%`);
    console.log(`Percentual de votos válidos: ${percentualValidos.toFixed(2)}%`);
}

percentualVotos(1000, 200, 100, 700);

// ---------------------------------------------
// 3. Operações com quatro números inteiros
// ---------------------------------------------

function operacoesComNumeros(a, b, c, d) {
    a += 25;
    b *= 3;
    c = c * 0.12;
    d = a + b + c;

    console.log(`Novo valor de A: ${a}`);
    console.log(`Novo valor de B: ${b}`);
    console.log(`Novo valor de C (12% do valor original): ${c}`);
    console.log(`Soma de A, B e C: ${d}`);
}

operacoesComNumeros(10, 5, 20, 0);

// ---------------------------------------------
// 4. Média de notas e verificar aprovação
// ---------------------------------------------

function verificaAprovacao(nota1, nota2) {
    let media = (nota1 + nota2) / 2;
    if (media >= 6.0) {
        console.log(`PARABÉNS! Você foi aprovado com média ${media}`);
    } else {
        console.log(`Você foi REPROVADO! Estude mais, sua média foi ${media}`);
    }
}

verificaAprovacao(7.0, 5.5);

// ---------------------------------------------
// 5. Verificação de tipo de triângulo
// ---------------------------------------------

function verificaTriangulo(a, b, c) {
    if (a < b + c && b < a + c && c < a + b) {
        if (a === b && b === c) {
            console.log("O triângulo é Equilátero.");
        } else if (a === b || a === c || b === c) {
            console.log("O triângulo é Isósceles.");
        } else {
            console.log("O triângulo é Escaleno.");
        }
    } else {
        console.log("Os valores fornecidos não formam um triângulo.");
    }
}

verificaTriangulo(5, 5, 8);

// ---------------------------------------------
// 6. Cálculo do valor total da compra de maçãs
// ---------------------------------------------

function calculaValorMacas(quantidade) {
    let preco = quantidade >= 12 ? 0.25 : 0.30;
    let valorTotal = quantidade * preco;
    console.log(`O valor total da compra é R$ ${valorTotal.toFixed(2)}`);
}

calculaValorMacas(15);

// ---------------------------------------------
// 7. Ordenar dois valores em ordem crescente
// ---------------------------------------------

function ordenaValores(a, b) {
    if (a < b) {
        console.log(`${a}, ${b}`);
    } else {
        console.log(`${b}, ${a}`);
    }
}

ordenaValores(7, 3);

// ---------------------------------------------
// 8. Verificar a região do produto com base no código de origem
// ---------------------------------------------

function verificaRegiaoProduto(codigo) {
    switch (codigo) {
        case 1:
            console.log("Região: Sul");
            break;
        case 2:
            console.log("Região: Norte");
            break;
        case 3:
            console.log("Região: Leste");
            break;
        case 4:
            console.log("Região: Oeste");
            break;
        default:
            console.log("Código inválido");
            break;
    }
}

verificaRegiaoProduto(3);

// ---------------------------------------------
// 9. Ler e imprimir número inteiro 10 vezes
// ---------------------------------------------

function imprimeNumeroDezVezes(numero) {
    for (let i = 0; i < 10; i++) {
        console.log(numero);
    }
}

imprimeNumeroDezVezes(42);

// ---------------------------------------------
// 10. Verificar se valores são pares ou ímpares até que valor negativo ou nulo seja inserido
// ---------------------------------------------

function verificaParImpar() {
    let numero;
    do {
        numero = parseInt(prompt("Digite um número (nulo ou negativo para encerrar): "));
        if (numero > 0) {
            if (numero % 2 === 0) {
                console.log(`${numero} é PAR`);
            } else {
                console.log(`${numero} é ÍMPAR`);
            }
        }
    } while (numero > 0);
}

verificaParImpar();

// ---------------------------------------------
// 11. Números de 1000 a 1999 que divididos por 11 têm resto igual a 5
// ---------------------------------------------

function verificaDivisaoPorOnze() {
    for (let i = 1000; i < 2000; i++) {
        if (i % 11 === 5) {
            console.log(i);
        }
    }
}

verificaDivisaoPorOnze();

// ---------------------------------------------
// 12. Tabuada de 1 até N para cada valor dado
// ---------------------------------------------

function tabuada(numero) {
    for (let i = 1; i <= numero; i++) {
        console.log(`${i} x ${numero} = ${i * numero}`);
    }
}

function lerCincoValores() {
    for (let i = 0; i < 5; i++) {
        let valor = parseInt(prompt("Digite um número: "));
        tabuada(valor);
    }
}

lerCincoValores();

// ---------------------------------------------
// 13. Média aritmética de números decimais até que 0 seja digitado
// ---------------------------------------------

function calculaMediaAritmetica() {
    let soma = 0;
    let contador = 0;
    let numero;

    do {
        numero = parseFloat(prompt("Digite um número (0 para encerrar): "));
        if (numero !== 0) {
            soma += numero;
            contador++;
        }
    } while (numero !== 0);

    if (contador > 0) {
        console.log(`A média é: ${soma / contador}`);
    } else {
        console.log("Nenhum número foi inserido.");
    }
}

calculaMediaAritmetica();

// ---------------------------------------------
// 14. Média ponderada até que o número 0 seja digitado
// ---------------------------------------------

function calculaMediaPonderada() {
    let somaPesos = 0;
    let somaValores = 0;
    let numero, peso;

    do {
        numero = parseFloat(prompt("Digite um número (0 para encerrar): "));
        if (numero !== 0) {
            peso = parseFloat(prompt("Digite o peso: "));
            somaValores += numero * peso;
            somaPesos += peso;
        }
    } while (numero !== 0);

    if (somaPesos > 0) {
        console.log(`A média ponderada é: ${somaValores / somaPesos}`);
    } else {
        console.log("Nenhum número foi inserido.");
    }
}

calculaMediaPonderada();

// ---------------------------------------------
// 15. Imprimir os 50 primeiros números primos maiores que 100
// ---------------------------------------------

function ehPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

function imprimePrimos() {
    let contador = 0;
    let numero = 101;

    while (contador < 50) {
        if (ehPrimo(numero)) {
            console.log(numero);
            contador++;
        }
        numero++;
    }
}

imprimePrimos();
