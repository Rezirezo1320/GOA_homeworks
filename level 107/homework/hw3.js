// 4) შექმენით 3 ობიექტი, შემდეგ შექმენით ახალი ობიექტი, სადაც ჩააკოპირებთ სამივე მათგანს.(გამოიყენეთ spread ოპერატორი)

const first = {
    name: "Aleksandre"
}

const second = {
    age: undefined
}

const third = {
    height: null
}

const newObj = {...first, ...second, ...third}
console.log(newObj)