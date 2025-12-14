/*
1) შექმენით Shape მშობელი კლასი, რომელსაც ექნება: 
--- თვისებები --- 
სოგრძე: Number, 
სიგანე: Number, 
ფერი: String 
და კოორდინატები(სიის/მასივის სახით[x;y]): Array
--- მეთოდები --- 
სიგრძის შეცვლა(გაზრდა/შემცირება), 
სიგანის შეცვლა(გაზრდა/შემცირება), 
ფერის შეცვლა,
კოორდინატების შევლა,
ფიგურის დახატვა - მეთოდი, რომელიც კონსოლზე დაბეჭდავს: 
'კოორდინატებზე - ${კოორდინატები} იხატება ფიგურა, რომლის ზომებია ${სიგრძე}/${სიგანე}, რომლის ფერია &{ფერი}.
--- --- --- --- --- ---
შექმნეთი შვილეული კლასები - მაგ(Cirle, Rectangle, Triangle და ა.შ.), რომლებიც მემკვიდრეობით მიიღებენ Shape კლასის თვისებებსა და მეთოდებს.
--- --- --- --- --- ---
შეუცვალეთ თითოეულ შვილეულ კლასს ფიგურის დახატვის მეთოდი, მაგ. Triangle კლასის შემთქვევაში, ფიგურის დახატვის მეთოდი კონსოლზე დაბეჭდავს:
'კოორდინატებზე - ${კოორდინატები} იხატება სამკუთხედი, რომლის ზომებია ${სიგრძე}/${სიგანე}, რომლის ფერია &{ფერი}.
2) შემდეგი გაკვეთილისთვის დაასრულეთ/დახვეწეთ ToDo აპლიკაცია.
*/

class Shape {
    constructor(lengthShape, widthShape, color, cords){
        this.lengthShape = Number(lengthShape)
        this.widthShape = Number(widthShape)
        this.color = color
        this.cords = cords
    }

    lengthIncrease(increase){
        this.lengthShape += increase
        return `new length - ${this.lengthShape}`
    }
    lentghDicrease(dicrease){
        this.lengthShape -= dicrease
        return `new length - ${this.lengthShape}`
    }

    widthIncrease(increase){
        this.widthShape += increase
        return `new length - ${this.widthShape}`
    }
    widthDicrease(dicrease){
        this.widthShape -= dicrease
        return `new width - ${this.widthShape}`
    }

    changeColor(newColor){
        this.color = newColor
        return `new color -  ${this.color}`
    }

    changeCord(newCord){
        this.cords = newCord
        return `new cords - ${this.cords}`
    }

    drawShape(){
        return `კოორდინატებზე - ${this.cords} იხატება ფიგურა, რომლის ზომებია ${this.lengthShape}/${this.widthShape}, რომლის ფერია ${this.color}.`
    }
}

class Triangle extends Shape {
    drawTriange(){
        return `კოორდინატებზე - ${this.cords} იხატება სამკუთხედი, რომლის ზომებია ${this.lengthShape}/${this.widthShape}, რომლის ფერია ${this.color}.`
    }
}

const square = new Shape(10, 20, "red", [40, 50])


