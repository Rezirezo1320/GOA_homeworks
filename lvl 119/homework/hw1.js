let animals = new Map([["cat", "meow"], ["dog", "bark"], ["snake", "hiss"]])

for (let i of animals.keys()){
    console.log(animals.get(i))
}