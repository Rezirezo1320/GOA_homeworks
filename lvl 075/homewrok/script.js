const todoForm = document.getElementById("todoForm");
const taskInput = document.getElementById("taskInput");
const todoList = document.getElementById("todoList");
const clearAllButton = document.getElementById("clearAllButton");

let counter = 0; 

todoForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const taskText = taskInput.value; 
    if (taskText === "") return; 

    const li = document.createElement("li");
    li.id = `task-${counter}`;
    li.textContent = taskText;


    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = function() {
        editTask(li);
    };

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        deleteTask(li.id);
    };


    li.appendChild(editButton);
    li.appendChild(deleteButton);

    todoList.appendChild(li);


    taskInput.value = "";
    counter++;
});


function deleteTask(id) {
    const task = document.getElementById(id);
    todoList.removeChild(task);
}

function editTask(taskItem) {
    const currentText = taskItem.firstChild.textContent; 
    const inputField = document.createElement("input"); 
    inputField.type = "text";
    inputField.value = currentText;

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.onclick = function() {
        taskItem.firstChild.textContent = inputField.value; 
        taskItem.replaceChild(editButton, inputField); 
        taskItem.replaceChild(deleteButton, saveButton); 
    };

    taskItem.replaceChild(inputField, taskItem.firstChild);
    taskItem.replaceChild(saveButton, taskItem.childNodes[1]);
}


clearAllButton.onclick = function() {
    todoList.innerHTML = ""; 
};
