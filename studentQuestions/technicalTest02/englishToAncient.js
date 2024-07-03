// Função que converte uma palavra do inglês para um formato "antigo"
function englishToAncient(word) {
    // Define as vogais que serão consideradas
    const vowels = 'aeiouy';

    // Inicializa a variável index com o comprimento da palavra
    let index = word.length;

    // Loop para encontrar a primeira vogal na palavra
    for (let i = 0; i < word.length; i++) {
        // Verifica se o caractere atual é uma vogal
        if (vowels.includes(word[i].toLowerCase())) {
            // Se for uma vogal, atualiza index com a posição da vogal e interrompe o loop
            index = i;
            break;
        }
    }

    // Se nenhuma vogal foi encontrada, adiciona "ay" ao final da palavra
    if (index === word.length) {
        return word + "ay";
    }

    // Divide a palavra em prefixo (antes da vogal) e raiz (a partir da vogal)
    const prefix = word.slice(0, index);
    const stem = word.slice(index);

    // Retorna a palavra no formato "antigo" (raiz + prefixo + "ay")
    return stem + prefix + "ay";
}

// Lista de palavras para testar a função
const testWords = ["stop", "no", "people", "bubble", "under", "admitted", "away"];

// Objeto para armazenar as traduções
const translations = {};

// Aplica a função englishToAncient em cada palavra da lista e armazena no objeto translations
testWords.forEach(word => {
    translations[word] = englishToAncient(word);
});

// Imprime o objeto com as traduções no console
console.log(translations);