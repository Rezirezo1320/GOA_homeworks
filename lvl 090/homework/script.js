function manualSort(array) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}
let numbers1 = [5, 2, 9, 1, 5, 6];
console.log(anualSort(numbers1)); 



function manualFilter(array, threshold) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= threshold) {
            result.push(array[i]);
        }
    }
    return result;
}
let numbers = [5, 2, 9, 1, 5, 6];
let filteredNumbers = manualFilter(numbers, 5);
console.log("გაფილტრული მასივი:", filteredNumbers);