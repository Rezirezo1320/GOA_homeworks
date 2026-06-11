let arr = ["images/image (7).png", "images/image (8).png", "images/image (9).png", "images/image (10).png", "images/image (11).png", "images/image (12).png"]
let count = 0
function changeImg(){
    if (count<6){
        let img = document.getElementById("car1")
        img.src = arr[count]
        count++
    }
}

function changeImg1(){
    if (count>0){
        img = document.getElementById("car1")
        count--
        img.src = arr[count]
    }
}
