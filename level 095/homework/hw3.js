let students = [{name : "Aleksandre", marks : [46, 100, 87, 60, 89, 100]}, {name : "Giorgi", marks : [78, 34, 80, 100, 100, 78]}, {name : "ana",  marks : [100, 100, 100, 100, 100, 100]}, {name : "Gabrieli", marks : [100, 100, 100, 100, 100, 100]}, {name : "Paparaci", marks : [10, 20, 32, 40, 12, 50]}]

let bestStudents = element => {
    let avarage = 0
    for (let i of element.marks){
        avarage+=i
    }
    return (avarage/element.marks.length)>=90
}
let filteredStudents = students.filter(bestStudents)

let onlyNames = element => element.name

console.log(filteredStudents.map(onlyNames))