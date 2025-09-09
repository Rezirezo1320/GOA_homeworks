const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
const increase10 = document.getElementById("point10");
const increase25 = document.getElementById("point25");
const increase100 = document.getElementById("point100");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count
}


increase10.onclick = function(){
    count = count + 10;
    countLabel.textContent = count
}

increase25.onclick = function(){
    count = count + 25;
    countLabel.textContent = count
}

increase100.onclick = function(){
    count = count + 100
    countLabel.textContent = count
}