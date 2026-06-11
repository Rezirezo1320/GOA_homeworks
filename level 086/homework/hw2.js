const user = Number(prompt("Enter time"))

const time = {
    morning : [4, 5, 6, 7, 8, 9, 10],
    middleday : [11, 12, 13, 14, 15],
    day : [16, 17, 18, 19],
    afternoon : [20, 21, 22, 23],
    night : [0, 1, 2, 3]
}

switch(true){
    case (time.morning.includes(user)):
        console.log("its morning")
        break
    case (time.middleday.includes(user)):
        console.log("its middleday")
        break
    case (time.day.includes(user)):
        console.log("its day")
        break
    case (time.afternoon.includes(user)):
        console.log("its afternoon")
        break
    case (time.night.includes(user)):
        console.log("its night")
        break
    default:
        console.log("No time like that exist")
}