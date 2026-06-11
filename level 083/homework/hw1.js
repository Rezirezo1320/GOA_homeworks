let body = document.body
let span = document.getElementById("span")
let changer = document.getElementById("changer")
let header = document.getElementById("header")
let str = "0123456789abcdef"
changer.addEventListener('click', function(){
    let color = '#'
    for (let i = 0; i<6;i++){
        color+=str[Math.floor(Math.random() * 16)]
    }
    body.style = `background-color: ${color}`
    span.style = `color: ${color}`
    span.textContent = color
    header.style = "background-color: white;"
    let newSound = new Audio("mixkit-classic-car-horn-1565.wav")
    newSound.play()
})