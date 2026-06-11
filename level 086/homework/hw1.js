const word = "duck"

const user = String(prompt("Enter lang(ge, fe, ja, tu, sc, af, ma)"))

switch(user){
    case "ge":
        console.log("ბატი")
        break
    case "fe":
        console.log("cane")
        break
    case "ja":
        console.log("アヒル")
        break
    case "tu":
        console.log("ördek")
        break
    case "sc":
        console.log("tunnag")
        break
    case "af":
        console.log("eend")
        break
    case "ma":
        console.log("pārera")
        break
    default:
        alert("incorrect input")
}