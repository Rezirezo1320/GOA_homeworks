let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")

img1.addEventListener("click", function(){
    img1.src = "images/img2.jpg"
})

img2.addEventListener("click", function(){
    img2.src = "images/img1.jpg"
})

img3.addEventListener("click", function(){
    img1.src = "images/img1.jpg"
    img2.src = "images/img2.jpg"
    img3.src = "images/img3.jpg"
})