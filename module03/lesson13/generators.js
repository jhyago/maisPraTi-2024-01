// Função geradora para a sequência de Fibonacci
function* fibonacci() {
    let n1 = 1
    let n2 = 1
    // Loop infinito para gerar a sequência de Fibonacci
    while(true){
        let current = n2
        n2 = n1
        n1 += current
        yield current
    }
}

let fibo = fibonacci()
        
// Imprimindo os primeiros valores da sequência de Fibonacci
console.log(fibo.next())
console.log(fibo.next())
console.log(fibo.next())
