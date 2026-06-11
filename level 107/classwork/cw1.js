const myFunc = (first, second, ...rest) => {
    const firstArg = first
    const secondArg = second
    if (rest.length+2 <5){
        console.log("At leats 5 arguments")
    }else {
        let sum = 0
        for (let i of rest){
            sum+=i
        }
        console.log(`Sum: ${sum}`)
        console.log(`The first two numebrs multiplied: ${firstArg*secondArg}`)
    }
}
myFunc(5, 2, 3, 4, 5, 6, 7)