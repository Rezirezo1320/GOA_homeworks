let numbers = [-5, 7, 3, -16, 17, -73]

let onlyNegativeNumbers = element => element < 0

let filteredNumbers = numbers.filter(onlyNegativeNumbers)

console.log(filteredNumbers)

let negativeToPositive = element => element-element*2

console.log(filteredNumbers.map(negativeToPositive))