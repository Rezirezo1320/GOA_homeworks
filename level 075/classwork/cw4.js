const myInfo = {
    nameMy : prompt('Enter name: '),
    surname : prompt('Enter surname: '),
    age : Number(prompt('Enter age: ')),
    hoby : prompt('Enter hoby: '),
    fullname: function(nameme){
        return "Wellcome "+nameme
    }
}

console.log(Object.keys(myInfo))
console.log(Object.values(myInfo))