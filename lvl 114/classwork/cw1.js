class persususliZgvisGowi {
    constructor(color, size, birth_year, birth_month, birth_day){
        this.color = color
        this.size = size
        this.birth_year = birth_year
        this.birth_month = birth_month
        this.birth_day = birth_day
    }
    
    age() {
        let persAgeYear = 2025-this.birth_year
        let persAgeMonth = 6-this.birth_month
        let persAgeDay = 30.5-this.birth_day
        if (persAgeMonth < 0){
            persAgeYear-=1
            persAgeMonth=6
            persAgeDay = this.birth_day
        }
        console.log(`persusuligowi is ${persAgeYear} years, ${persAgeMonth} months and ${persAgeDay}days`)
    }
}

let gabrieli = new persususliZgvisGowi("kanisferi", 80, 2000, 4, 13)
gabrieli.age()