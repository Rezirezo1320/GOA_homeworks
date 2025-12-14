let list = document.getElementsByClassName("todo-list")[0];

let addBtn = document.getElementsByClassName("add-btn")[0];
let compBtn = document.getElementsByClassName("comp-btn")[0];

let submit = document.getElementById("submit");

let input = document.getElementById("inp");

const addActiveItems = () => {
    const http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                let response = JSON.parse(this.responseText);
                list.innerHTML = '';
                response.map(element => {
                    if (!element.completed) {
                        list.innerHTML += `<div class="todo-item">${element.id}. <span>${element.title}</span></div>`;
                    }
                });
            }
        }
        console.log(this.readyState);
    };
    http.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    http.send();
};

const addCompleteItems = () => {
    const http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                let response = JSON.parse(this.responseText);
                list.innerHTML = '';
                response.map(element => {
                    if (element.completed) {
                        list.innerHTML += `<div class="todo-item">${element.id}. <span>${element.title}</span></div>`;
                    }
                });
            }
        }
        console.log(this.readyState);
    };
    http.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    http.send();
};

const findElementById = id => {
    const http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                let response = JSON.parse(this.responseText);
                list.innerHTML = '';

                if (id.includes("-")) {
                    let range = id.split("-").map(Number);
                    for (let i = range[0]; i <= range[1]; i++) {
                        list.innerHTML += `<div class="todo-item">${response[i - 1].id}. <span>${response[i - 1].title}</span></div>`;
                    }
                } else { 
                    let idx = Number(id);
                    list.innerHTML = `<div class="todo-item">${response[idx - 1].id}. <span>${response[idx - 1].title}</span></div>`;
                }
            }
        }
    };
    http.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    http.send();
};


addBtn.addEventListener("click", (e) => {
    addActiveItems();
});

compBtn.addEventListener("click", (e) => {
    addCompleteItems();
});

submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value) {
        findElementById(input.value);
    }
});