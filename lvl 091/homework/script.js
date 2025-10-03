function validateName() {
    const name = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    const regex = /^[A-Za-z ]{3,}$/;

    if (regex.test(name.value)) {
        name.classList.add("valid");
        name.classList.remove("invalid");
        nameError.textContent = "";
    } else {
        name.classList.add("invalid");
        name.classList.remove("valid");
        nameError.textContent = "Name must be at least 3 letters and only contain letters.";
    }
}

function validateEmail() {
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email.value)) {
        email.classList.add("valid");
        email.classList.remove("invalid");
        emailError.textContent = "";
    } else {
        email.classList.add("invalid");
        email.classList.remove("valid");
        emailError.textContent = "Enter a valid email address (example@domain.com).";
    }
}

function validatePassword() {
    const password = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (regex.test(password.value)) {
        password.classList.add("valid");
        password.classList.remove("invalid");
        passwordError.textContent = "";
    } else {
        password.classList.add("invalid");
        password.classList.remove("valid");
        passwordError.textContent = "Password must be at least 8 characters, include 1 uppercase letter, 1 number, and 1 special character.";
    }
}

function validateRepeatPassword() {
    const password = document.getElementById("password").value;
    const repeatPassword = document.getElementById("passwordRepeat");
    const repeatPasswordError = document.getElementById("passwordRepeatError");

    if (repeatPassword.value === password && password !== "") {
        repeatPassword.classList.add("valid");
        repeatPassword.classList.remove("invalid");
        repeatPasswordError.textContent = "";
    } else {
        repeatPassword.classList.add("invalid");
        repeatPassword.classList.remove("valid");
        repeatPasswordError.textContent = "Passwords do not match.";
    }
}

function validateAge() {
    const age = document.getElementById("age");
    const ageError = document.getElementById("ageError");

    if (age.value >= 18) {
        age.classList.add("valid");
        age.classList.remove("invalid");
        ageError.textContent = "";
    } else {
        age.classList.add("invalid");
        age.classList.remove("valid");
        ageError.textContent = "You must be at least 18 years old.";
    }
}

function validateForm() {
    validateName();
    validateEmail();
    validatePassword();
    validateRepeatPassword();
    validateAge();

    const errors = document.querySelectorAll(".invalid");

    if (errors.length > 0) {
        document.getElementById("errorMessage").textContent = "Please fix the errors before submitting.";
        return false;
    }

    alert("You successfully registered!");
    return true;
}
