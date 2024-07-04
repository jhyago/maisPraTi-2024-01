/* Praticando aula 09 */

/*
    Use um loop for in para iterar sobre as propriedades dentro de professor.notas.
    Calcule a média das notas dos alunos.
    Imprima se o professor está acima da média de aprovação (considerando 3.0 como média).
*/

const professor = {
    name: "Tony Stark",
    subject: "Mathematics",
    grades: {
        student1: 3.5,
        student2: 4.0,
        student3: 2.8
    }
};

let sumGrades = 0;
let numberOfStudents = 0;

for (let student in professor.grades) {
    sumGrades += professor.grades[student];
    numberOfStudents++;
}

let average = sumGrades / numberOfStudents;

console.log(`The average grade is ${average.toFixed(2)}.`);
console.log(average >= 3.0 ? `${professor.name} is above the passing average.` : `${professor.name} is below the passing average.`);

/*
    Use um loop for of para iterar sobre o array biblioteca.
    Para cada livro, verifique se foi publicado antes de 2000.
    Imprima o título e o ano dos livros que atendem a essa condição.
*/

const library = [
    { title: "12 Rules for Life", author: "Jordan Peterson", year: 1925 },
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1967 },
    { title: "Dopamine Nation", author: "Dr. Anna Lembke", year: 1997 }
];

for (let book of library) {
    if (book.year < 2000) {
        console.log(`The book "${book.title}", written by ${book.author}, was published in ${book.year}.`);
    }
}

/*
    Use o método forEach para iterar sobre o array filmes.
    Crie um objeto para armazenar a contagem de filmes por gênero.
    Para cada filme no array, verifique se o gênero já existe no objeto de contagem. Se existir, incremente a contagem; se não, adicione o gênero ao objeto com a contagem inicial de 1.
    Após o loop, imprima cada gênero e o número de filmes correspondente.
*/

const movies = [
    { title: "Elite Squad", genre: "Action" },
    { title: "Captain Fantastic", genre: "Drama" },
    { title: "The Godfather", genre: "Crime" },
    { title: "The Boy in the Striped Pajamas", genre: "Drama" },
    { title: "High School Musical", genre: "Musical" },
    { title: "The Lord of the Rings: The Fellowship of the Ring", genre: "Fantasy" },
    { title: "Fight Club", genre: "Drama" },
];

let genreCount = {};

movies.forEach(movie => {
    if (genreCount[movie.genre]) {
        genreCount[movie.genre]++;
    } else {
        genreCount[movie.genre] = 1;
    }
});

for (let genre in genreCount) {
    console.log(`There are ${genreCount[genre]} movies in the ${genre} genre.`);
}

/* Atividade de processo seletivo */

/* Pesquisa Binária - Isso é um teste */

const binarySearch = (list, item) => {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const guess = list[mid];

        if (guess === item) {
            return mid;
        } else if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return null;
};

const myList = [1, 3, 5, 7, 9];

console.log(binarySearch(myList, 3)); // 1
console.log(binarySearch(myList, -1)); // null

/* Recursos e operadores novos */

/*
    Spread = espalhar
    Rest = juntar

    O que define se o operador é spread ou rest é o contexto em que está sendo utilizado, caso espalhe estruturas de dados é spread, caso junte, é rest.

    No contexto spread:
*/

let articleTitle = 'A new approach to convert rice husk waste in a quick and efficient adsorbent to remove cationic dye from water'

// Pode-se espalhar os caracteres da string com spread

console.log(articleTitle)
console.log(...articleTitle)

/*
    Espalha a string dentro de um array de forma que cada um dos caracteres ocupe um índice
*/

console.log([...articleTitle])

// Pode-se espalhar arrays em outros arrays
let courseList1 = ['Programming Logic', 'Git and Github']
let courseList2 = ['ReactJs', 'Java']
let completeCourseList = ['Spring Boot', 'Databases', ...courseList1, ...courseList2]

console.log(completeCourseList)

// Spread no contexto de objetos

let person = { name: 'John', age: 15 }
let completeData = { address: 'Test Street', ...person }

console.log(completeData)

/*
    No contexto Rest (muito utilizado em conjunto com funções):
    Recebe todos os parâmetros e os junta em estrutura de arrays, onde pode-se percorrer todos os índices de forma dinâmica.
 
    Na prática seria como: function sum([3, 8, 5, 7])
*/

function sum(...params) {
    let result = 0

    console.log(params)

    params.forEach(v => result += v)

    return result
}

console.log(sum(3, 8, 5, 7))

/*
    O primeiro parâmetro indicado será recebido pela função e armazenado em 'm', os demais parâmetros serão recebidos e unificados em um parâmetro array 'p'
*/

function multiplication(m, ...p) {
    console.log(m)
    console.log(p)

    let result = 0

    p.forEach(v => result += m * v)

    return result
}

console.log(multiplication(5, 7, 12, 3, 49))