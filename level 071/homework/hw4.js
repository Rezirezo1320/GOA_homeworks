let arr = ['aleksandre dzukaevi', 'gabriel molodini']
let initials = []

for (let fullname of arr) {
    let parts = fullname.split(" ")
    initials.push(parts[0][0]+'.'+parts[1][0])
}

console.log(initials)