let clients = [
    {
        id: 1,
        name: 'Luis Santos maria Silveira',
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

clients.forEach((client) => {
    let name = client.name.split(' ')
    let length = name.length
    console.log(`${name[length - 1]}, ${name[0]}`)
})

// Exercise 2

let number = "5(1)9-876-543-21"
let digits = number.replace(/\D/g, "")

let formattedNumber = `(${digits.slice(0, 2)}) ${digits.slice(2, 3)} ${digits.slice(3, 7)}-${digits.slice(7, 11)}`

console.log(formattedNumber)
