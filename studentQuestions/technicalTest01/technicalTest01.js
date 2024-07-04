// Lista de clientes com id, nome e idade
let clients = [
    {
        id: 1,
        name: 'Luis Santos Maria Silveira',
        age: 18
    },
    {
        id: 2,
        name: 'Ricardo Lopes Alves',
        age: 30
    },
    {
        id: 3,
        name: 'Gustavo Silva Junior',
        age: 26
    }
];

// Itera sobre cada cliente na lista de clientes
clients.forEach((client) => {
    // Divide o nome completo em partes separadas por espaços
    let name = client.name.split(' ');

    // Obtém o número de partes do nome
    let length = name.length;
    
    // Imprime o último nome seguido do primeiro nome no formato "Sobrenome, Nome"
    console.log(`${name[length - 1]}, ${name[0]}`);
});

// Exercise 2

// Número de telefone com caracteres diversos
let number = "5(1)9-876-543-21";

// Remove todos os caracteres não numéricos da string
let digits = number.replace(/\D/g, "");

// Formata o número de telefone de acordo com o padrão brasileiro
let formattedNumber = `(${digits.slice(0, 2)}) ${digits.slice(2, 3)} ${digits.slice(3, 7)}-${digits.slice(7, 11)}`;

// Imprime o número de telefone formatado
console.log(formattedNumber);