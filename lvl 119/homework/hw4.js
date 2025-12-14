let animals = new Map([["cat", "meow"], ["dog", "bark"]])

animals.delete("dog")

if(!animals.has("dog")){
    console.log(true)
}else{
    console.log(false)
}