const greet = (name = "მაყურებელი") => `გამარჯობა, ${name}!`;

const sum = (a = 0, b = 5) => a + b;

const max = (a = 10, b = 20) => (a > b ? a : b);

const multiply = (a = 1, b = 2, c = 3) => a * b * c;

const calculatePrice = (price, tax = 0.05) => price + price * tax;

const repeatText = (text, times = 3) => text.repeat(times);


const isGreater = (a = 5, b = 10) => a > b;