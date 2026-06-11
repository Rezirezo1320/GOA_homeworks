const user = {
    name : 'aleksandre',
    surname : 'dzukaevi',
    age : 13,
    school : 179,
    greed : function(name){
        return `hello ${name}`
    }
}

for (let element in user){
    console.log(element)
}
