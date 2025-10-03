let fruits = ["apple", "banana", "cherry"];
let [first, second, third] = fruits;

console.log(first); 
console.log(second);
console.log(third);


let person = { name: "Mariami", age: 17, city: "Tbilisi" };
let { name, age, city } = person;

console.log(name); 
console.log(age);
console.log(city); 


let person1 = {  name: "Mariami", age: 17, city: "Tbilisi" };
let { name: fullName, age: years } = person1;

console.log(fullName); 
console.log(years);   


let numbers = [1, 2, 3, 4, 5];
let [first1, , , , last] = numbers;

console.log(first1);
console.log(last);  


let users = [
    { name: "Mariami", age: 17 },
    { name: "Nikolozi", age: 13 }
  ];
  
  for (let { name, age } of users) {
    console.log(`${name} is ${age} years old.`);
  }


  let numbers1 = [1, 2, 3, 4, 5];
  let [first2, second2, ...rest] = numbers1;
  
  console.log(first2); 
  console.log(second2);
  console.log(rest);   


  
  let numbers3 = [1, 2, 3, 4, 5];
  let [first3, , , , last3] = numbers3;
  
  console.log(first3); 
  console.log(last3);  


  
