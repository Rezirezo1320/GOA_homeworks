const myInfo = {
    nameMy : prompt('Enter name: '),
    surname : prompt('Enter surname: '),
    age : Number(prompt('Enter age: ')),
    hoby : prompt('Enter hoby: '),
    fullname: function(nameme){
        return "Wellcome "+nameme
    }
}


for (let element in myInfo){
    console.log(element + ' is ' + String(myInfo[element]))
}