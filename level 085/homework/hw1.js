let arr = ['w', 'a', 's', 'd', 'j', 'k', 'l']
let div = document.getElementById("prem")

let sounds = [new Audio("assets/crash.mp3"), new Audio("assets/kick-bass.mp3"), new Audio("assets/snare.mp3"), new Audio("assets/tom-1.mp3"), new Audio("assets/tom-2.mp3"), new Audio("assets/tom-3.mp3"), new Audio("assets/tom-4.mp3")]


document.addEventListener("click", function(event){
    sounds[arr.indexOf(`${event.target.textContent}`)].play()
})

document.addEventListener("keydown", function(e){
    sounds[arr.indexOf(e.key)].play()
})

div.addEventListener("click", function(){
    new Audio("assets/mixkit-arcade-retro-game-over-213.wav").play()
}, {once:true})