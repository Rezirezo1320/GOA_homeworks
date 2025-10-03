// let myDiv = document.querySelector("div");


// myDiv.innerHTML += `
//     <p>Paragraph 1</p>
//     <p>Paragraph 2</p>
//     <p>Paragraph 3</p>
//     <button>Click me</button>
//     <button>Submit</button>
// `;


// let list = document.getElementById("list");
// let ul = document.createElement("ul");
// let languages = ["JavaScript", "Python", "Java", "C++"];

// languages.forEach(language => {
//     let li = document.createElement("li");
//     li.textContent = language;
//     ul.appendChild(li);
// });

// list.appendChild(ul)

// const parent = div.parentNode


const userForm = document.getElementById("userForm");
const userTableBody = document.querySelector("#userTable tbody");

userForm.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;

    const newRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = firstName;
    
    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = lastName;
    
    const emailCell = document.createElement("td");
    emailCell.textContent = email;

    const actionCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function() {
        newRow.remove(); 
    });

    actionCell.appendChild(deleteButton);
    newRow.appendChild(firstNameCell);
    newRow.appendChild(lastNameCell);
    newRow.appendChild(emailCell);
    newRow.appendChild(actionCell);


    userTableBody.appendChild(newRow);


    userForm.reset();
});