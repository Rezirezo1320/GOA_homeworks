class Transport{
    constructor(maxSpeed,color,fuel,distanceTraveled){
        tihs.maxSpeed = maxSpeed;
        this.color = color;
        this.fuel = fuel;
        this.distanceTraveled = distanceTraveled || 0;
    }
    refuel(liter){
        if(typeof liter !== 'number' || liter < 0){
            console.log('Invalid fuel amount');
        }else{
            this.fuel += liter;
        }
    }
    changeColor(color){
        if(typeof color !== 'string'){
            console.log('Invalid color');
        }else{
            this.color = color;
        }
    }
    getInfo(){
        return `ეს არის რაღაც ტრანსპორტი, რომლის მაქს. სიჩქარეა - ${this.maxSpeed}; ფერი - ${this.color}; საწვავის რაოდენობა - ${this.fuel}; განვლილი მანძილი - ${this.distanceTraveled}`;
    }
    move(distance, fuelNeeded){
        if(typeof distance !== 'number' || typeof fuelNeeded !== 'number'){
            console.log('Invalid arguments');
            return;
        }
        if(this.fuel < fuelNeeded){
            console.log('Not enough fuel');
        }else{
            this.distanceTraveled += distance;
            this.fuel -= fuelNeeded;
        }
    }
}
class Car extends Transport{
    getInfo(){
        return `ეს არის რაღაც მანქანა, რომლის მაქს. სიჩქარეა - ${this.maxSpeed}; ფერი - ${this.color}; საწვავის რაოდენობა - ${this.fuel}; განვლილი მანძილი - ${this.distanceTraveled}`;
    }
}