/**
 * Objetos em JavaScript são coleções de pares de chave e valor. Cada chave funciona como um identificador para um valor associado,
 * e esses valores podem ser de qualquer tipo, como números, strings, funções ou até mesmo outros objetos. Isso permite que dados e funcionalidades 
 * sejam organizados de uma maneira estruturada e acessível.
 */

let livro = {
    titulo: "1984",
    autor: "George Orwell",
    ano: 1949
};

console.log(livro.titulo);  // Exibe: 1984
console.log(livro.autor);   // Exibe: George Orwell
console.log(livro.ano);     // Exibe: 1949


// Objeto literal (ES5)
let carroES5 = {
    marca: 'Toyota',
    modelo: 'Corolla',
    exibirInfo: function () {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`)
    }
}

carroES5.exibirInfo()

// Forma ES5 de escrever o objeto literal
/*
let fabricante = 'Ford'
let ano = 2020
let cor = 'Azul'
let tipo = 'Sedan'

let veiculo = {
    fabricante: fabricante,
    ano: ano,
    cor: cor,
    tipo: tipo,

    exibirDetalhes: function(){
        console.log(`${this.fabricante}, ano ${this.ano}, cor ${this.cor}, tipo ${this.tipo}`)
    }
}

console.log(veiculo)
veiculo.exibirDetalhes()
*/

// Forma ES6 - Em situações que a variável tem o mesmo nome do nome/valor
let fabricante = 'Ford'
let ano = 2020
let cor = 'Azul'
let tipo = 'Sedan'

let veiculoES6 = {
    fabricante,
    ano,
    cor,
    tipo,

    exibirDetalhes() {
        console.log(`${this.fabricante}, ano ${this.ano}, cor ${this.cor}, tipo ${this.tipo}`)
    }
}

veiculoES6.fabricante = 'Chevrolet'

console.log(veiculoES6)
veiculoES6.exibirDetalhes()

// Inclusão de atributos e métodos posteriormente

let jogador = {
    nome: 'João',
    idade: 30
}

console.log(jogador)

jogador.posicao = 'Atacante'

console.log(jogador)

jogador.comemorar = () => console.log('Gol!')

jogador.comemorar()

// Exemplificação de como o objeto literal é único

let configuracao = {
    usuarioId: 102,
    configuracao: 'Modo escuro',
    status() {
        console.log('Ativo')
    }
}

console.log(configuracao.configuracao)

let z = configuracao
console.log(z.configuracao)

z.configuracao = 'Modo claro'

console.log(configuracao.configuracao)
console.log(z.configuracao)

/*
    Outro meio de criação de objetos. Trata de uma função que possui um escopo e que vai ser recuperada dentro do código a partir do operador new.
*/

let Computador = function () {
    this.processador = 'Intel i7'
    this.memoriaRam = '16GB'
    this.espacoDisco = '1TB'
    this.ligado = false

    this.ligar = function () {
        this.ligado = true
        console.log('Computador ligado')
    }

    this.getProcessador = function () {
        return this.processador
    }

    this.setProcessador = function (processador) {
        this.processador = processador
    }
}

let pc = new Computador()

// Factory e atribuição dinâmica de valores
let CelularFactory = function (marca, memoria, bateria) {
    return {
        marca,
        memoria,
        bateria,
        ligar() { console.log('Celular ligado') }
    }
}

let Celular2 = CelularFactory('Samsung', '128GB', '4500mAh')
console.log(Celular2)

console.log(`Marca: ${Celular2.marca}`)
Celular2.ligar()

/*
    Em JavaScript, os loops for in, for of e .forEach() são estruturas usadas para iterar sobre coleções de dados como objetos e arrays. 
*/

/* 
    for in -> O loop for in é utilizado para iterar sobre as propriedades enumeráveis de um objeto. Ele percorre as chaves do objeto, 
    permitindo que você acesse os valores correspondentes a cada chave.
*/

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2021
};

for (let chave in carro) {
    console.log(chave + ": " + carro[chave]);
}

//Este código irá imprimir o nome da chave e o valor associado para cada propriedade do objeto carro.

/*
    for of -> O loop for of é usado para iterar sobre estruturas de dados iteráveis, como arrays, strings, e outros objetos iteráveis. 
    Ele percorre os valores da coleção, facilitando a manipulação de cada item diretamente.
*/

const cores = ["Vermelho", "Azul", "Verde"];

for (let cor of cores) {
    console.log(cor);
}

//Este código irá imprimir cada cor no array cores.

/*
    forEach() -> O método .forEach() é específico de arrays em JavaScript. Ele executa uma função em cada elemento de um array. 
    É uma maneira elegante e funcional de iterar sobre arrays, especialmente quando você não precisa de um loop de controle específico ou de parar/break o loop.
*/


const numeros = [1, 2, 3, 4, 5];

numeros.forEach(function(numero) {
    console.log(numero);
});

//Este código irá imprimir cada número no array numeros.

//Cada uma dessas abordagens tem seu uso ideal dependendo do tipo de dado que você está manipulando e do que precisa fazer com esses dados.
