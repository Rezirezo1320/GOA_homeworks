const date = new date();
date.setFullYear(2022);

console.log(date.toUTCString());
console.log(date.toISOString());
console.log(date.toDateString());

console.log(date.getFulYear());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());







const p = document.getElementById("t-text");
let time = 5;

const t = setInterval(function() {
    p.textContent = time;
    time--;

    console.log(time);

    if(time < 0) {
        p.textContent = "Time is over!";
        clearInterval(t);
    }
}, 1000);