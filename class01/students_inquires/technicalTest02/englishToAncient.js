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