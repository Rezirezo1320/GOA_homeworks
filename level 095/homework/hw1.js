let numbers = [43, 63, 86, 25, 95, 25, 73, 23, 85, 103]

let odd = (element, index) => element%2!=0 && index%2!=0

let filteredNumbers = numbers.filter(odd)

console.log(filteredNumbers)