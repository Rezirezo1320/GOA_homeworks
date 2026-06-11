const person = {
    name: "Nino",
    age: 28
};

// გამოიყენე დესტრუქცია და მიანიჭე default მნიშვნელობა "Unknown" ცვლადს country, თუ ის არ არსებობს

const {name, age, country = "Unknown"} = person