function validateForm() {
    const name= document.getElementById("name").value;
    const password = document.getElementById("password").value;
    const repeatPassword = document.getElementById("passwordRepeat").value;
    const age= document.getElementById("age").value;
    const error = document.getElementById("error");
    error.textContent = ";"

    if(users[name] !== password) {
        error.textContent  = "Name and pasaword do not match";
        return false;
    }
    if(password !== repeatPassword) {
        error.textContent = "Passwords do not match"
        return false;
     }

    if (age < 18) {
        error.textContent = "You're age is under 18";
        return false;
    }
    alert("You successfully registered");
    return true;
}
    