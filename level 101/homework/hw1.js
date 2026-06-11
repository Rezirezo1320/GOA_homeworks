let btn = document.getElementById("add-btn")
let dlt = document.getElementsByClassName("delete-btn")
let list = document.getElementsByClassName("todo-list")
for (let i of JSON.parse(localStorage.getItem("users1"))){
    list[0].innerHTML+=`<div class="todo-item"><span>${i}</span><button class="delete-btn">Delete</button></div>`
}
btn.addEventListener("click", (e)=>{
    let list = document.getElementsByClassName("todo-list")
    let inp = document.getElementById("todo-input")
    let value = inp.value
    if (value.length > 0){
        list[0].innerHTML+=`<div class="todo-item"><span>${value}</span><button class="delete-btn">Delete</button></div>`
        for (let element of dlt){
            let dlt = document.getElementsByClassName("delete-btn")
            element.addEventListener("click", (e)=>{
                element.parentElement.remove()
            })
        }
        new_list = localStorage.getItem("users1") || []
        newer_list = JSON.parse(new_list)
        newer_list.push(value)
        localStorage.setItem("users1", JSON.stringify(newer_list))
        console.log(localStorage)
    }else {
        alert("You need to enter smthing")
    }
})

for (let element of dlt){
    element.addEventListener("click", (e)=>{
        element.parentElement.remove()
    })
}


console.log(localStorage)
