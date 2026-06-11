let img = document.querySelector("img")
let body = document.body
let x = 0
let y = 0
document.addEventListener("keydown", function(event){
    if (event.key === "ArrowRight"){
        x+=10
        event.target.style = `transform: translate(${x}px, ${y}px);`
    }else if (event.key === "ArrowLeft"){
        x-=10
        event.target.style =  `transform: translate(${x}px, ${y}px);`
    }else if (event.key === "ArrowDown"){
        y+=10
        event.target.style =  `transform: translate(${x}px, ${y}px);`
    }else if (event.key === "ArrowUp"){
        y-=10
        event.target.style =  `transform: translate(${x}px, ${y}px);`
        event.target.style =  `transform: translate(${x}px, ${y}px);`
    }}
)