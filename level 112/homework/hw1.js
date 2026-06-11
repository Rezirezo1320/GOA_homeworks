let form = document.getElementById("add-div")
let items = document.getElementById("items")
let itemsComp = document.getElementById("items-comp")
let clear = document.getElementById("clear")
let amount = document.getElementById("amount")
let amountComp = document.getElementById("amoun-comp")
let inp = document.getElementById("input")

let tasks = JSON.parse(localStorage.getItem("tasks")) || []
let complete = JSON.parse(localStorage.getItem("completed")) || []
let count = JSON.parse(localStorage.getItem("amount")) || 0
let count1 = JSON.parse(localStorage.getItem("completed-items-amount")) || 0

amount.textContent = count
amountComp.textContent = count1

let editStatus = false

function updateTasks(){
    for (let task of tasks) {
        items.innerHTML += createTaskElement(task)
    }
}

function updateCompTasks(){
    for (let compTask of complete) {
        itemsComp.innerHTML += createTaskElement(compTask, true)
    }
}


function createTaskElement(taskText, isCompleted = false) {
    if (isCompleted) {
        return `<li class="task-comp"><p>${taskText}</p><div class="delete-comp"></div></li>`
    }
    return `<li class="task"><p>${taskText}</p><div class="but-div"><div class="edit"></div><div class="complete"></div><div class="delete"></div></div></li>`
}

function editItem(e){
    editStatus = !editStatus
    e.target.parentElement.parentElement.querySelector("p").setAttribute("contenteditable", `${editStatus}`)
    e.target.parentElement.parentElement.querySelector("p").focus()
}

function submitEditedItem(e){
    // if (e.key == "Enter"){
    //     if (editItem){
    //         editItem = false

    //     }
    // }
}

function addEditListeners(){
    let editItems = document.getElementsByClassName("edit")
    for (let i of editItems){
        i.addEventListener("click", editItem)
    }
}


function addDeleteListeners() {
    let deletes = document.getElementsByClassName("delete")
    for (let btn of deletes) {
        btn.addEventListener("click", (e) => {
            let taskText = e.target.parentElement.parentElement.querySelector("p").textContent
            tasks.splice(tasks.indexOf(taskText), 1)
            localStorage.setItem("tasks", JSON.stringify(tasks))
            e.target.parentElement.parentElement.remove()
            count--
            localStorage.setItem("amount", JSON.stringify(count))
            amount.textContent = count
        })
    }
}

function addCompleteListeners() {
    let completes = document.getElementsByClassName("complete")
    for (let btn of completes) {
        btn.addEventListener("click", (e) => {
            let taskText = e.target.parentElement.parentElement.querySelector("p").textContent
            complete.push(taskText)
            localStorage.setItem("completed", JSON.stringify(complete))
            count1++
            localStorage.setItem("completed-items-amount", JSON.stringify(count1))
            amountComp.textContent = count1

            itemsComp.innerHTML += createTaskElement(taskText, true)
            e.target.parentElement.parentElement.remove()

            tasks.splice(tasks.indexOf(taskText), 1)
            localStorage.setItem("tasks", JSON.stringify(tasks))
            count--
            localStorage.setItem("amount", JSON.stringify(count))
            amount.textContent = count

            addDeleteCompListeners()
        })
    }
}

function addDeleteCompListeners() {
    let deleteComps = document.getElementsByClassName("delete-comp")
    for (let btn of deleteComps) {
        btn.addEventListener("click", (e) => {
            let taskText = e.target.parentElement.querySelector("p").textContent

            tasks.push(taskText)
            localStorage.setItem("tasks", JSON.stringify(tasks))
            count++
            localStorage.setItem("amount", JSON.stringify(count))
            amount.textContent = count

            complete.splice(complete.indexOf(taskText), 1)
            localStorage.setItem("completed", JSON.stringify(complete))
            count1--
            localStorage.setItem("completed-items-amount", JSON.stringify(count1))
            amountComp.textContent = count1

            e.target.parentElement.remove()
            items.innerHTML += createTaskElement(taskText)
            addDeleteListeners()
            addCompleteListeners()
        })
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let task = e.target.task.value
    if (task) {
        inp.value = ""
        tasks.push(task)
        localStorage.setItem("tasks", JSON.stringify(tasks))
        count++
        localStorage.setItem("amount", JSON.stringify(count))
        amount.textContent = count

        items.innerHTML += createTaskElement(task)
        addDeleteListeners()
        addCompleteListeners()
        addEditListeners()
    }
})

clear.addEventListener("click", () => {
    localStorage.setItem("tasks", "[]")
    localStorage.setItem("amount", "0")
    localStorage.setItem("completed", "[]")
    localStorage.setItem("completed-items-amount", "0")
    location.replace("hw1.html")
})

function updateTasks(){
    for (let task of tasks) {
        items.innerHTML += createTaskElement(task)
    }
}

function updateCompTasks(){
    for (let compTask of complete) {
        itemsComp.innerHTML += createTaskElement(compTask, true)
    }
}

updateTasks()
updateCompTasks()


addDeleteListeners()
addCompleteListeners()
addDeleteCompListeners()
addEditListeners()