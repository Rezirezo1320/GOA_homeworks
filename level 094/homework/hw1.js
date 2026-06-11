let randomNumbers = [6, 2, 7, 2, 8, 1, 7, 4, 56, 9, 257, 8, 33, 87, 34, 84]

let even = element => {
    if (element%2==0){
        return element
    }
    return null
}

let odd = element => {
    if (element%2!=0){
        return element
    }
    return null
}

console.log(randomNumbers.map(even))
console.log(randomNumbers.map(odd))