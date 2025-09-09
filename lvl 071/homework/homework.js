// let fruits = ["apple", "banana", "orange", "grape", "kiwi"];
// console.log("First fruit:", fruits[0]);
// console.log("Last fruit:", fruits[fruits.length - 1]);
// console.log("Total number of fruits:", fruits.length);

// let colors = ["red", "green", "blue"];
// colors.push("yellow");
// colors.shift();
// colors.unshift("purple");
// console.log("Final colors array:", colors);

// let numbers = [2, 3, 4, 5, 6];
// for (let i = 0; i < numbers.length; i++) {
//     console.log("Doubled:", numbers[i] * 2);
// }

// function sumArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log("Sum of [1, 2, 3]:", sumArray([1, 2, 3]));

// function findLargest(arr) {
//     let largest = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }
//     return largest;
// }
// console.log("Largest in [5, 2, 9, 1, 7]:", findLargest([5, 2, 9, 1, 7]));

// let favoriteMovies = ["Inception", "Interstellar", "Matrix", "Avatar", "Titanic"];
// let userMovie = prompt("Enter a movie name:");
// if (favoriteMovies.includes(userMovie)) {
//     alert("Yes, it's one of my favorites!");
// } else {
//     alert("No, I don't like that one much.");
// }

// let words = ["banana", "apple", "pear", "orange"];
// words.sort();
// let joinedWords = words.join(", ");
// console.log("Sorted and joined words:", joinedWords);

// function random1to10() {
//     return Math.floor(Math.random() * 10) + 1;
// }
// console.log("Random number between 1 and 10:", random1to10());

// let decimalInput = parseFloat(prompt("Enter a decimal number:"));
// console.log("Rounded down:", Math.floor(decimalInput));
// console.log("Rounded up:", Math.ceil(decimalInput));
// console.log("Rounded to nearest integer:", Math.round(decimalInput));

// let numArr = [12, 5, 8, 21, 3];

// function findMax(arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// function findMin(arr) {
//     let min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return min;
// }

// console.log("Largest number:", findMax(numArr));
// console.log("Smallest number:", findMin(numArr));