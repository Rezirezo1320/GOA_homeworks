let colors = document.getElementsByClassName("color")
let watch = document.getElementById("watch")
for (let i of colors){
    i.addEventListener("click", (e)=>{
        watch.style = `background-image: url(imgs/${e.target.id}.png)`
    })
}
let heartBeat = document.getElementById("heartbeat")
let timeBtn = document.getElementById("time")
let heartRateBtn = document.getElementById("heartrate")
heartBeat.style.display = "none"
let clock = document.getElementById("clock")
timeBtn.addEventListener("click", (e)=>{
    clock.style.display = "flex"
    heartBeat.style.display = "none"
})
heartRateBtn.addEventListener("click", (e)=>{
    clock.style.display = "none"
    heartBeat.style.display = "flex"
})