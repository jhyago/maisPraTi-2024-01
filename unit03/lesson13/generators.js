function* fibonacci() {
    let n1 = 1
    let n2 = 1

    while(true){
        let current = n2
        n2 = n1
        n1 += current
        yield current
    }
}

let fibo = fibonacci()
console.log(fibo.next())
console.log(fibo.next())
console.log(fibo.next())
console.log(fibo.next())
console.log(fibo.next())
console.log(fibo.next())
console.log(fibo.next())