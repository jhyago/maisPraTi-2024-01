/**
 * Objetos em JavaScript são coleções de pares de chave e valor. Cada chave funciona como um identificador para um valor associado,
 * e esses valores podem ser de qualquer tipo, como números, strings, funções ou até mesmo outros objetos. Isso permite que dados e funcionalidades 
 * sejam organizados de uma maneira estruturada e acessível.
 */

let book = {
    title: "1984",
    author: "George Orwell",
    year: 1949
};

console.log(book.title);  // Exibe: 1984
console.log(book.author);   // Exibe: George Orwell
console.log(book.year);     // Exibe: 1949


// Objeto literal (ES5)
let carES5 = {
    brand: 'Toyota',
    model: 'Corolla',
    displayInfo: function () {
        console.log(`Brand: ${this.brand}, Model: ${this.model}`)
    }
}

carES5.displayInfo()

// Forma ES5 de escrever o objeto literal
/*
let manufacturer = 'Ford'
let year = 2020
let color = 'Blue'
let type = 'Sedan'

let vehicle = {
    manufacturer: manufacturer,
    year: year,
    color: color,
    type: type,

    displayDetails: function(){
        console.log(`${this.manufacturer}, year ${this.year}, color ${this.color}, type ${this.type}`)
    }
}

console.log(vehicle)
vehicle.displayDetails()
*/

// Forma ES6 - Em situações que a variável tem o mesmo nome do nome/valor
let manufacturer = 'Ford'
let year = 2020
let color = 'Blue'
let type = 'Sedan'

let vehicleES6 = {
    manufacturer,
    year,
    color,
    type,

    displayDetails() {
        console.log(`${this.manufacturer}, year ${this.year}, color ${this.color}, type ${this.type}`)
    }
}

vehicleES6.manufacturer = 'Chevrolet'

console.log(vehicleES6)
vehicleES6.displayDetails()

// Inclusão de atributos e métodos posteriormente

let player = {
    name: 'John',
    age: 30
}

console.log(player)

player.position = 'Forward'

console.log(player)

player.celebrate = () => console.log('Goal!')

player.celebrate()

// Exemplificação de como o objeto literal é único

let configuration = {
    userId: 102,
    setting: 'Dark mode',
    status() {
        console.log('Active')
    }
}

console.log(configuration.setting)

let z = configuration
console.log(z.setting)

z.setting = 'Light mode'

console.log(configuration.setting)
console.log(z.setting)

/*
    Outro meio de criação de objetos. Trata de uma função que possui um escopo e que vai ser recuperada dentro do código a partir do operador new.
*/

let Computer = function () {
    this.processor = 'Intel i7'
    this.ram = '16GB'
    this.diskSpace = '1TB'
    this.on = false

    this.turnOn = function () {
        this.on = true
        console.log('Computer turned on')
    }

    this.getProcessor = function () {
        return this.processor
    }

    this.setProcessor = function (processor) {
        this.processor = processor
    }
}

let pc = new Computer()

// Factory e atribuição dinâmica de valores
let CellPhoneFactory = function (brand, memory, battery) {
    return {
        brand,
        memory,
        battery,
        turnOn() { console.log('Cell phone turned on') }
    }
}

let CellPhone2 = CellPhoneFactory('Samsung', '128GB', '4500mAh')
console.log(CellPhone2)

console.log(`Brand: ${CellPhone2.brand}`)
CellPhone2.turnOn()

/*
    Em JavaScript, os loops for in, for of e .forEach() são estruturas usadas para iterar sobre coleções de dados como objetos e arrays. 
*/

/* 
    for in -> O loop for in é utilizado para iterar sobre as propriedades enumeráveis de um objeto. Ele percorre as chaves do objeto, 
    permitindo que você acesse os valores correspondentes a cada chave.
*/

const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2021
};

for (let key in car) {
    console.log(key + ": " + car[key]);
}

// Este código irá imprimir o nome da chave e o valor associado para cada propriedade do objeto carro.

/*
    for of -> O loop for of é usado para iterar sobre estruturas de dados iteráveis, como arrays, strings, e outros objetos iteráveis. 
    Ele percorre os valores da coleção, facilitando a manipulação de cada item diretamente.
*/

const colors = ["Red", "Blue", "Green"];

for (let color of colors) {
    console.log(color);
}

// Este código irá imprimir cada cor no array cores.

/*
    forEach() -> O método .forEach() é específico de arrays em JavaScript. Ele executa uma função em cada elemento de um array. 
    É uma maneira elegante e funcional de iterar sobre arrays, especialmente quando você não precisa de um loop de controle específico ou de parar/break o loop.
*/


const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    console.log(number);
});

// Este código irá imprimir cada número no array numeros.

// Cada uma dessas abordagens tem seu uso ideal dependendo do tipo de dado que você está manipulando e do que precisa fazer com esses dados.