let words = ["Banana", "Aid", 'Android', "APple", "Hello", "Beta", 'index']

let fiveSymbolsMoreWords = element => {
    if (element.length >= 5){
        return element
    }
    return null
}

console.log(words.map(fiveSymbolsMoreWords))