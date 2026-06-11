let body = document.body
let divParent = document.createElement("div")
let divChildOne = document.createElement("div")
let divChildTwo = document.createElement("div")
body.appendChild(divParent)
divParent.appendChild(divChildOne)
divParent.appendChild(divChildTwo)
divParent.style = "width: 500px; height: 500px; background-color: blue; display: flex; flex-direction: column; justify-content: space-between; align-items: center;"

divChildOne.style = "width: 100px; height: 100px; background-color: red"
divChildTwo.style = "width: 100px; height: 100px; background-color: green"