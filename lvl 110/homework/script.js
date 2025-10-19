class Animal {
    constructor(name, species, age) {
      this.name = name;
      this.species = species;
      this.age = age;
    }
  
    makeSound() {
      return `${this.name} says: "Hello, I am a ${this.species}!"`;
    }
  }
  

  class Car {
    constructor(brand, model, year) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
  
    getDetails() {
      return `${this.brand} ${this.model} (${this.year})`;
    }
  }
  

  class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    introduce() {
      return `Hi, my name is ${this.firstName} ${this.lastName}, and I am ${this.age} years old.`;
    }
  }
  
  const animal1 = new Animal('Leo', 'Lion', 5);
  const animal2 = new Animal('Milo', 'Cat', 2);
  const animal3 = new Animal('Bella', 'Dog', 3);
  
  const car1 = new Car('Toyota', 'Corolla', 2020);
  const car2 = new Car('BMW', 'X5', 2018);
  const car3 = new Car('Tesla', 'Model 3', 2022);

  const person1 = new Person('John', 'Doe', 30);
  const person2 = new Person('Anna', 'Smith', 25);
  const person3 = new Person('Michael', 'Brown', 40);

  console.log(animal1, animal1.makeSound());
  console.log(animal2, animal2.makeSound());
  console.log(animal3, animal3.makeSound());
  
  console.log(car1, car1.getDetails());
  console.log(car2, car2.getDetails());
  console.log(car3, car3.getDetails());
  
  console.log(person1, person1.introduce());
  console.log(person2, person2.introduce());
  console.log(person3, person3.introduce());