const car = {
    company : 'mini cooper',
    model : 'f90',
    milage : '5L',
    year : 1991,
    condition : 'good',
    cond : function(condition){
        return `the car is in ${condition} condition`
    }
}

car.color = 'gray'
car.price = 4000 + '$'
delete car.milage;
console.log(car)
