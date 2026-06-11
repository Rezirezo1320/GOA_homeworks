let names = ["aleksandre", 'Giorgi', 'vano', "Gurami", "ana", "Sandro"]

let nameCorrection = element => element[0] == element[0].toUpperCase()

let filteredNames = names.filter(nameCorrection)

console.log(filteredNames)