class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get initials() {
        return `${this.firstName.charAt(0)}${this.lastName.charAt(0)}`;
    }
    get ageInMonths() {
        return this.age * 12;
    }
    get isRetired() {
        return this.age >= 60;
    }
}

class Product {
    constructor(price, discount) {
        this.price = price;
        this.discount = discount;
    }
    get formattedPrice() {
        return `$${this.price.toFixed(2)}`;
    }
    get discountPrice() {
        return `$${(this.price * (1 - this.discount)).toFixed(2)}`;
    }
}

document.getElementById("actionButton").addEventListener("click", function() {
    let person = new Person("John", "Doe", 65);
    let product = new Product(100, 0.2);
    document.getElementById("output").innerHTML = `
        Initials: ${person.initials}<br>
        Age in Months: ${person.ageInMonths}<br>
        Is Retired: ${person.isRetired}<br>
        Formatted Price: ${product.formattedPrice}<br>
        Discount Price: ${product.discountPrice}
    `;
});