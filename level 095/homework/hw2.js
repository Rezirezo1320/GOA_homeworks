let userInfo = [{name : "Aleksandre", age : 13}, {name : "Giorgi", age : 21}, {name : "ana", age : 16}, {name : "Gabrieli", age : 50}, {name : "Paparaci", age : 12}]

let ageVerification = element => element.age >= 18

let filteredUserInfo = userInfo.filter(ageVerification)

console.log(filteredUserInfo)