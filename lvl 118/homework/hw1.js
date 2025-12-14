class Employee{
    #id
    #monthSalary
    constructor(id,firstName,lastName,monthSalary){
        this.#id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.#monthSalary = monthSalary;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(name){
        const [first,last] = name.split(' ')
        this.firstName = first
        this.lastName = last
    }

    get yearSalary(){
        return this.#monthSalary*12
    }
    set monthlySalary(newSalary){
        if(newSalary > 0){
            this.#monthSalary = newSalary
        }else{
            console.log("the new salary must be a positive number")
        }
    }
    get monthlySalary(){
        return this.#monthSalary
    }

    get iD(){
        return this.#id
    }   
}

class Manager extends Employee{
    constructor(id,firstName,last,monthSalary, departament){
        super(id,firstName,last,monthSalary)
        this.departament = departament
    }

    set changeDepartment(newInfo){
        const [newDep,newSalary] = newInfo
        if(newSalary > this.monthSalary){
            this.departament = newDep
            this.monthSalary = newSalary
        }else{
            console.log("it is not a good promotion")
        }
    }

    info(){
        return `${this.firstName}, ${this.lastName}, ${this.iD}, ${this.monthlySalary}, ${this.yearSalary}, ${this.departament}`
    }
    get yearSalary(){
        return this.monthlySalary * 14
    }
}