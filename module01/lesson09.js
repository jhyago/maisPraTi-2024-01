/**
 * Objetos em JavaScript são coleções de pares de chave e valor. Cada chave funciona como um identificador para um valor associado,
 * e esses valores podem ser de qualquer tipo, como números, strings, funções ou até mesmo outros objetos. 
 * Isso permite que dados e funcionalidades sejam organizados de uma maneira estruturada e acessível.
 */

// Exemplo 1: Criando um objeto de livro
let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}.`;
    }
};

console.log(book.title);          // Exibe: The Great Gatsby
console.log(book.author);         // Exibe: F. Scott Fitzgerald
console.log(book.year);           // Exibe: 1925
console.log(book.getSummary());   // Exibe: The Great Gatsby was written by F. Scott Fitzgerald in 1925.


// Exemplo 2: Objeto com método em ES6
let car = {
    brand: 'Honda',
    model: 'Civic',
    year: 2022,
    displayInfo() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
};

car.displayInfo();  // Exibe: Brand: Honda, Model: Civic, Year: 2022


// Exemplo 3: Criando objetos com variáveis ES6
let manufacturer = 'Ford';
let year = 2023;
let color = 'Red';
let type = 'SUV';

let vehicle = {
    manufacturer,
    year,
    color,
    type,

    displayDetails() {
        console.log(`${this.manufacturer}, Year: ${this.year}, Color: ${this.color}, Type: ${this.type}`);
    }
};

vehicle.displayDetails(); // Exibe: Ford, Year: 2023, Color: Red, Type: SUV


// Exemplo 4: Adicionando propriedades e métodos dinamicamente
let athlete = {
    name: 'Serena Williams',
    sport: 'Tennis'
};

console.log(athlete); // Exibe: { name: 'Serena Williams', sport: 'Tennis' }

athlete.country = 'USA';
athlete.celebrateVictory = () => console.log('Victory!');

console.log(athlete); // Exibe: { name: 'Serena Williams', sport: 'Tennis', country: 'USA', celebrateVictory: [Function] }
athlete.celebrateVictory(); // Exibe: Victory!


// Exemplo 5: Comparando objetos
let config = {
    userId: 101,
    setting: 'Dark Mode'
};

let anotherConfig = config;

console.log(config.setting);        // Exibe: Dark Mode
console.log(anotherConfig.setting); // Exibe: Dark Mode

anotherConfig.setting = 'Light Mode';

console.log(config.setting);        // Exibe: Light Mode
console.log(anotherConfig.setting); // Exibe: Light Mode

/*
    Objetos são referências em JavaScript, o que significa que atribuir um objeto a uma nova variável cria uma referência ao mesmo objeto original, não uma cópia.
*/


// Exemplo 6: Função construtora de objetos
function Laptop(brand, processor, ram) {
    this.brand = brand;
    this.processor = processor;
    this.ram = ram;
    this.on = false;

    this.turnOn = function () {
        this.on = true;
        console.log(`${this.brand} laptop is now on.`);
    };

    this.getSpecs = function () {
        return `Processor: ${this.processor}, RAM: ${this.ram}`;
    };
}

let myLaptop = new Laptop('Apple', 'M1', '16GB');
console.log(myLaptop.getSpecs());  // Exibe: Processor: M1, RAM: 16GB
myLaptop.turnOn();                 // Exibe: Apple laptop is now on.


// Exemplo 7: Factory Function para criar objetos
function createSmartphone(brand, storage, batteryLife) {
    return {
        brand,
        storage,
        batteryLife,
        powerOn() {
            console.log(`${this.brand} smartphone is powered on.`);
        }
    };
}

let myPhone = createSmartphone('Google', '256GB', '4000mAh');
console.log(myPhone); // Exibe: { brand: 'Google', storage: '256GB', batteryLife: '4000mAh', powerOn: [Function] }
myPhone.powerOn();    // Exibe: Google smartphone is powered on.


/*
    Em JavaScript, os loops for in, for of e .forEach() são estruturas usadas para iterar sobre coleções de dados como objetos e arrays. 
*/

/* 
    for...in -> O loop for...in é utilizado para iterar sobre as propriedades enumeráveis de um objeto. 
    Ele percorre as chaves do objeto, permitindo que você acesse os valores correspondentes a cada chave.
*/

const person = {
    name: "Alice",
    age: 28,
    occupation: "Engineer"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Este código irá imprimir o nome da chave e o valor associado para cada propriedade do objeto person.

/*
    for...of -> O loop for...of é usado para iterar sobre estruturas de dados iteráveis, como arrays, strings, e outros objetos iteráveis. 
    Ele percorre os valores da coleção, facilitando a manipulação de cada item diretamente.
*/

const fruits = ["Apple", "Banana", "Cherry"];

for (let fruit of fruits) {
    console.log(fruit);
}

// Este código irá imprimir cada fruta no array fruits.

/*
    forEach() -> O método .forEach() é específico de arrays em JavaScript. Ele executa uma função em cada elemento de um array. 
    É uma maneira elegante e funcional de iterar sobre arrays, especialmente quando você não precisa de um loop de controle específico ou de parar/break o loop.
*/

const numbers = [10, 20, 30, 40, 50];

numbers.forEach(function (number, index) {
    console.log(`Index ${index}: ${number}`);
});

// Este código irá imprimir cada número no array numbers juntamente com seu índice.