class Animal {
    constructor(name, species,  description, habitat, diet, behavior ) {
        this.name = name;
        this.species = species;
        this.description = description;
        this.habitat = habitat;
        this.diet = diet;
        this.behavior = behavior;
    }


    displayInfo() {
        document.getElementById("animal-name").innerText = this.name;
        document.getElementById("animal-description").innerText = this.description;
        document.getElementById("animal-habitat").innerText = `Habitat: ${this.habitat}`;
        document.getElementById("animal-diet").innerText = `Diet: ${this.diet}`;
        document.getElementById("animal-behavior").innerText = `Behavior: ${this.behavior}`;
    }
}


const dog = new Animal(
    "Dog",
    "Canine",
    "Dogs are loyal and friendly animals. They are often kept as pets.",
    "Homes, farms, and many environments.",
    "Omnivorous - they eat meat and plants.",
    "Friendly, protective, and playful.",
    
);

const cat = new Animal(
    "Cat",
    "Feline",
    "Cats are independent and curious animals. They are often kept as pets.",
    "Homes, barns, and rural areas.",
    "Carnivorous - they eat meat, especially fish.",
    "Independent, curious, and playful.",
);

const cow = new Animal(
    "Cow",
    "Bovine",
    "Cows are large herbivorous animals that provide milk.",
    "Pastures, farms, and grasslands.",
    "Herbivorous - they eat grass and plants.",
    "Gentle, social, and peaceful.",
);


function showAnimal(animalType) {
    let animal;

    if (animalType === 'dog') {
        animal = dog;
    } else if (animalType === 'cat') {
        animal = cat;
    } else if (animalType === 'cow') {
        animal = cow;
    }

    animal.displayInfo();
}
