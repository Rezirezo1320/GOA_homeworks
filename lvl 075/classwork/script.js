// const form = document.querySelector("form");
// const tbody = document.querySelector("table");

// form.addEventListener("submit", function(e) {
//     e.preventDefault(); 


//     const name = form.name.value;
//     const email = form.email.value;
//     const password = form.password.value;
//     const fbLink = form.fbLink.value;

//     const data = [name, email, password, fbLink];
//     const tr = document.createElement("tr");

//     for (let i = 0; i < data.length; i++) {
//         const td = document.createElement("td");
//         td.textContent = data[i];
//         tr.appendChild(td);
//     }

//     tbody.appendChild(tr);

//     form.name.value = "";
//     form.email.value = "";
//     form.password.value = "";
//     form.fbLink.value = "";
// });


const form = document.getElementById("todoForm");
const todoList = document.getElementById("todoList");

form.addEventListener("submit", function(e) {
    e.preventDefault(); 

    const taskValue = document.getElementById("taskInput").value;

    const li = document.createElement("li");

    const uniqueId = "task-" + Date.now();
    li.id = uniqueId;


    li.textContent = taskValue;
    li.addEventListener("click", function() {
        li.remove();
    });

    todoList.appendChild(li);

    document.getElementById("taskInput").value = "";
});







// const form = document.querySelector("form");
// const ol = document.querySelector("ol");

// let counter = 0;

// function deleteItem(id) {
//     const item = document.getElementById(id);
//     ol.removeChild(item);
// }


// form.addEventListener("submit", function(e) {
//     e.preventDefault();

//     // ფორმიდან ვირჩევ შესატან ველს, შემდეგ კი მაგ შესატანი ველიდან მომაქვს მნიშვნელობა
//     const itemValue = form.item.value;

//     // ვქმნით ახალ თეგს რომელიც არის li - list item
//     const li = document.createElement("li");

//     // ახალ შექმნილ თეგში შევცვალე ტექსტი და მივანიჭე მომხმ,არებლის შემოტანილი მნიშნელობა
//     li.textContent = itemValue;

//     // ახალ შექმნილ თეგს ვუცვლი და ვანიშებ უნიკალურ id 
//     li.id = `item-${counter}`;

//     li.onclick = function() {
//         deleteItem(li.id);
//     }

//     // ყოველ დადასტურებაზე ვზრდი counter ცვლადს ერთით
//     counter++;

//     // წამოღებულ სიაში ვამატებ ახალ შვილ ელემენტს რომელიც ძემოთ მოცემულ კოდში შევქმენი და შევცვალე
//     ol.appendChild(li);
// })