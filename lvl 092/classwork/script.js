function countCharacters() {
    const text = document.getElementById('textInput').value;

    const charCount = text.length
    document.getElementById('charCount').innerText = charCount;
}


function validateInput() {
    const input = document.getElementById("textInput").value;
    const errorMessage = document.getElementById("error");
            
    const lettersOnly = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    if (!lettersOnly.test(input)) {
         errorMessage.innerText = "Error";
    } else {
        errorMessage.innerText = "";

    }
}


    
    
           
     