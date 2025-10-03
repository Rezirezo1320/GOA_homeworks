// 1: .createElement -  this method creates new paragraph
let newParagraph = document.createElement("p");


let newDiv = document.createElement("div");


let newButton = document.createElement("button");


let newImage = document.createElement("img");

let newListItem = document.createElement("li");


// 2: .appendChild - This method adds a new element (child) to the end of a specified parent element
document.body.appendChild(newParagraph);


let container = document.getElementById("container");
container.appendChild(newDiv);

newDiv.appendChild(newButton);

document.body.appendChild(newImage);

let ul = document.getElementById("myList");
ul.appendChild(newListItem);

//3:  .insertBefore -this method inserts a new element before an existing element.

let existingDiv = document.getElementById("existingDiv");
document.body.insertBefore(newDiv, existingDiv);


let existingParagraph = document.getElementById("existingParagraph");
document.body.insertBefore(newParagraph, existingParagraph);

let existingButton = document.getElementById("existingButton");
document.body.insertBefore(newButton, existingButton);


let existingListItem = document.getElementById("existingListItem");
ul.insertBefore(newListItem, existingListItem);


let existingImage = document.getElementById("existingImage");
document.body.insertBefore(newImage, existingImage);


// 4: .removeChild(node) - this method removes a specified child element from its parent.

document.body.removeChild(existingParagraph);

container.removeChild(existingDiv);


container.removeChild(existingButton);

ul.removeChild(existingListItem);

document.body.removeChild(existingImage);


// 5: .parentNode - this property refers to the parent of an element, allowing you to access or manipulate the parent
let parentOfParagraph = newParagraph.parentNode;

let parentOfDiv = newDiv.parentNode;

let parentOfButton = newButton.parentNode;

let parentOfListItem = newListItem.parentNode;

let parentOfImage = newImage.parentNode;



