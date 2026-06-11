function positiveSum(arr) {
    let sum = 0
    for (let element of arr) {
        if (element >= 0) {
        sum+=element
        }
    }
    return sum
}