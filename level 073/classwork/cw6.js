function countSheeps(sheep) {
    let count = 0
    for (let element of sheep) {
        if (element === true) {
        count+=1
        }
    }
    return count
}