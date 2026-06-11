let names = ["Aleksandre Dzukaevi", "Giorgi Bibilashvili", "Goga Chalauri", "Saba Bokuchava", "Giorgi Gloveli", "Giorgi Tskadadze", "Gabriel Molodini", "Ana Puturidze", "Gio Samsonidze", "Giorgi Khutsishvili"]

let initial = element => {
    let i = element.split(" ")
    return `${i[0][0]}.${i[1][0]}`
}

console.log(names.map(initial))