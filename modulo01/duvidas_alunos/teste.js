//Teste Técnico 1
function englishToAncient(word) {
    const vowels = 'aeiouy'
    let index = word.length

    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i].toLowerCase())) {
            index = i
            break
        }
    }

    if (index === word.length) {
        return word + "ay"
    }

    const prefix = word.slice(0, index)
    const stem = word.slice(index)

    return stem + prefix + "ay"
}

const testWords = ["stop", "no", "people", "bubble", "under", "admitted", "away"]
const translations = {}
testWords.forEach(word => {
    translations[word] = englishToAncient(word)
})

console.log(translations)

//Teste Técnico 2

let clientes = [
    {
        id: 1,
        nome: 'Luis Santos maria Silveira',
        idade: 18
    },
    {
        id: 2,
        nome: 'Ricardo Lopes Alves',
        idade: 30
    },
    {
        id: 3,
        nome: 'Gustavo Silva Junior',
        idade: 26
    }
];

clientes.forEach((cliente) => {
    let nome = cliente.nome.split(' ')
    let tamanho = nome.length
    console.log(`${nome[tamanho - 1]}, ${nome[0]}`)
})

//Exercício 2

let numero = "5(1)9-876-543-21"
let digitos = numero.replace(/\D/g, "")

let numeroFormatado = `(${digitos.slice(0, 2)}) ${digitos.slice(2, 3)} ${digitos.slice(3, 7)}-${digitos.slice(7, 11)}`

console.log(numeroFormatado)