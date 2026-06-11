let myArr = [132123123,123123123123,13221412345,535353,5345]

let sum = 0
for (let i of myArr) {
    if (i%2==0) {
        sum+=i**2
    }
}
console.log(sum)

