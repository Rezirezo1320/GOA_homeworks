let time = document.querySelectorAll(".countdown")

let days = time[0]
let hours = time[1]
let minutes = time[2]
let seconds = time[3]

let date = new Date()
days.textContent = 365-((date.getMonth()+1)*30)-1
hours.textContent = 24-date.getHours()-1
minutes.textContent = 60-date.getMinutes()-1
seconds.textContent = 60-date.getSeconds()
setInterval(function(){
    let date = new Date()
    let time = document.querySelectorAll(".countdown")
    let days = time[0]
    days.innerHTML = 365-((date.getMonth()+1)*30)
}, 86400000)
setInterval(function(){
    let date = new Date()
    let time = document.querySelectorAll(".countdown")
    let hours = time[1]
    hours.innerHTML = 24-date.getHours()-1
}, 3600000)
setInterval(function(){
    let date = new Date()
    let time = document.querySelectorAll(".countdown")
    let minutes = time[2]
    minutes.innerHTML = 60-date.getMinutes()-1
}, 60000)
setInterval(function(){
    let date = new Date()
    let time = document.querySelectorAll(".countdown")
    let seconds = time[3]
    seconds.innerHTML = 60-date.getSeconds()
}, 1000)
console.log(date.getHours())