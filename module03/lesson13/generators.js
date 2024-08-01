// Função geradora para a sequência de Fibonacci
function* fibonacci() {
    // Inicializa os dois primeiros números da sequência de Fibonacci
    let n1 = 1
    let n2 = 1

    // Loop infinito para gerar a sequência de Fibonacci
    while (true) {
        let current = n2       // Armazena o valor atual
        n2 = n1                // Atualiza n2 com o valor de n1
        n1 += current          // Atualiza n1 com a soma de n1 e o valor atual
        yield current          // Retorna o valor atual e pausa a execução
    }
}

// Cria uma instância do gerador de Fibonacci
let fibo = fibonacci()

// Imprimindo os primeiros valores da sequência de Fibonacci
console.log(fibo.next().value) // Saída: 1
console.log(fibo.next().value) // Saída: 1
console.log(fibo.next().value) // Saída: 2
console.log(fibo.next().value) // Saída: 3
console.log(fibo.next().value) // Saída: 5
console.log(fibo.next().value) // Saída: 8
console.log(fibo.next().value) // Saída: 13
