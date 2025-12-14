let form = document.getElementsByClassName("form-box")[0]
let active = document.getElementsByClassName("box")[0]
let complete = document.getElementsByClassName("box")[1]
let count = JSON.parse(localStorage.getItem("count")) || 0

class OrderManager {
    constructor(activeOrders = new Map(JSON.parse(localStorage.getItem("activeOrders"))) || new Map(), completedOrders = new Set(JSON.parse(localStorage.getItem("completedOrders")))|| new Set()) {
        this.activeOrders = activeOrders;
        this.completedOrders = completedOrders;
    }

    printStatus() {
        const arr = [...this.activeOrders];
        console.log("=>> activeOrders =>>");
        arr.forEach(([orderId, customerName]) => {
            console.log(orderId, customerName);
        });

        console.log("\n=>> completedOrders =>>");
        console.log(...this.completedOrders);
        console.log('');
    }

    processOrder(customerName, callback, OrderId) {
        if (callback == addOrder){
            OrderId++
            count++
            localStorage.setItem("count",JSON.parse(count))
            this.activeOrders.set(OrderId, customerName);
            localStorage.setItem("activeOrders", JSON.stringify([...this.activeOrders]))
            console.log("შეკვეთა მიღებულია, შეკვეთის დასამუშავებლად საჭიროა 3 წამი");
            setTimeout(() => {
                callback(OrderId);
            }, 2000)

            console.log("Current status(can take a bit):")
            this.printStatus();
        }

        else if (callback == completeOrder){
            console.log("Wait a bit")
            setTimeout(() => {
                count--
                localStorage.setItem("count",JSON.parse(count))
                this.completedOrders.add([customerName, OrderId]);
                localStorage.setItem("completedOrders", JSON.stringify([...this.completedOrders]))
                this.activeOrders.delete(OrderId);
                localStorage.setItem("activeOrders", JSON.stringify([...this.activeOrders]))
                setTimeout(() => {
                    callback(OrderId);
                }, 2000)
                this.printStatus();
            }, 3000);
        }
        else {
            console.error(`SyntaxError: ${callback} is not defined`)
        }
    }
}
let order = new OrderManager()

function completeOrder(orderId){
    console.log(`Order ${orderId} completed.`)
}

function addOrder(orderId){
    console.log(`Order ${orderId} added.`)
}

function updateActiveOrders(){
    for (let i of order.activeOrders){
        active.innerHTML +=`<p><span id="count">${i[0]}</span>. <span id="name">${i[1][0]}</span> <span id="food">${i[1][1]}</span><button class="completeBut">Complete</button></p>`
    }
}

function updateCompleteOrders(){
    for (let i of order.completedOrders){
        complete.innerHTML += `<p><span id="count">${i[1]}</span>. <span id="name">${i[0][0]}</span> <span id="food">${i[0][1]}</span></p>`
    }
}

function addCompleteEventListeners(){
    let complete = document.getElementsByClassName("completeBut")
    for (let i of complete){
        i.addEventListener("click", (e)=>{
            let complete = document.getElementsByClassName("box")[1]
            order.processOrder([i.parentElement.querySelector("#name").textContent, i.parentElement.querySelector("#food").textContent], completeOrder, Number(i.parentElement.querySelector("#count").textContent))
            console.log(Number(i.parentElement.querySelector("#count").textContent))
            setTimeout(() => {
                complete.innerHTML += `<p>${i.parentElement.querySelector("#count").textContent}. ${i.parentElement.querySelector("#name").textContent} ${i.parentElement.querySelector("#food").textContent}`
            }, 2000)
            i.parentElement.remove()
        })
    }
}

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let name = e.target.name.value
    let food = e.target.food.value
    if (name && food) {
        order.processOrder([name, food], addOrder, count)
        active.innerHTML += `<p><span id="count">${count}</span>. <span id="name">${name}</span> <span id="food">${food}</span><button class="completeBut">Complete</button></p>`
        addCompleteEventListeners()
    }
})

addCompleteEventListeners()
updateActiveOrders()
updateCompleteOrders()