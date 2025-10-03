document.getElementById("changeTextButton").addEventListener("click", function() {
    document.getElementById("textParagraph").textContent = "Text has been changed!";
    console.log("Button clicked: Text content has been changed");
});


document.getElementById("reverseColorButton").addEventListener("click", function() {
    const colorDiv = document.getElementById("colorDiv");
    const currentDivColor = window.getComputedStyle(colorDiv).backgroundColor;
    const currentTextColor = window.getComputedStyle(colorDiv).color;
    
    colorDiv.style.backgroundColor = currentTextColor;
    colorDiv.style.color = currentDivColor;
});


document.getElementById("hideElementButton").addEventListener("click", function() {
    document.getElementById("elementToHide").style.display = "none";
});

document.getElementById("changeFontButton").addEventListener("click", function() {
    const elements = document.getElementsByClassName("fontChange");
    for (let element of elements) {
        element.style.fontFamily = "Courier New, monospace";
    }
});


document.getElementById("changeParagraphContentButton").addEventListener("click", function() {
    document.getElementById("paragraphToChange").textContent = "The paragraph content has been changed!";
});



document.getElementById("changeImageButton").addEventListener("click", function() {
    document.getElementById("imageToChange").src = "images.png";
});



document.getElementById("displayInputButton").addEventListener("click", function() {
    const userInput = document.getElementById("userInput").value;
    document.getElementById("displayText").textContent = userInput;
});
