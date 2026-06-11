function findSmallestInt(arr) {
    let elem = arr[0]
    for (let element of arr) {
        if (element < elem) {
        elem=element
        }
    }
    return elem
}