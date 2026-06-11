// 2) შექმენით 3 სია, spread ოპერატორის გამოყენებით დაშალეთ თითოეული მათგანი და ჩასვით ახალ სიაში. ამ სიაში ასევე ჩაამატეთ 5 ნებისმიერი ელემენტი და დაბეჭდეთ.

const firstArr = [1, 2, 3, "Gabro", 5, 6]
const secondArr = [{name: "Aleksandre", surname: "dzukaevi"}, {name: "Nika", surname: "kvaracxelia"}]
const result = [...firstArr, ...secondArr, "Hello", 5.6, {tel: "(995)592-43-66-51"}, [1, 2, 3], "Georgia"]
console.log(result)