let arr = [32422,-323434,244242,244224,-456456, 24242]

for (let i = 0; i<arr.length; i++) {
    if (arr[i]<0) {
        arr.splice(i, 1, 0)

    }
}

console.log(arr)