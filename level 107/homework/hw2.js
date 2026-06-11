//3) შექმენით ობიექტი მინიმუმ 3 კუთვნილებით(name, age, height). გამოიყენეთ ამ ობიექტზე დესტრუქცია ისე, რომ name კუთვნილება შეინახოს ცვლადში, ხოლო დანარჩენი კუთვნილებებისგან შეიქმნას ახალი ობიექტი(დაგჭირდებათ rest ოპერატორი)

const object = {
    name: "aleksandre",
    age: undefined,
    height: null
}

const {name, ...rest} = object

console.log(name, rest)