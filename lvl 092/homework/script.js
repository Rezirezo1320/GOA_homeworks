function checkPasswordStrength() {
    const passwordInput = document.getElementById("password");
    const strengthText = document.getElementById("strength-text");

    const password = passwordInput.value;
    let strength = "";
    let className = "";

    if (password.length >= 10) {
        let hasUpperCase = false;
        let hasNumber = false;
        let hasSpecialCharacter = false;

        for (let i = 0; i < password.length; i++) {
            if (password[i] >= "A" && password[i] <= "Z") {
                hasUpperCase = true;
                break;
            }
        }

        for (let i = 0; i < password.length; i++) {
            if (password[i] >= "0" && password[i] <= "9") {
                hasNumber = true;
                break;
            }
        }

        const specialCharacters = "!@#$%^&*";
        for (let i = 0; i < password.length; i++) {
            if (specialCharacters.includes(password[i])) {
                hasSpecialCharacter = true;
                break;
            }
        }

        if (hasUpperCase && hasNumber && hasSpecialCharacter) {
            strength = "ძლიერი პაროლი";
            className = "strong";
        }
    }
    if (strength === "" && password.length >= 8) {
        let hasUpperCaseOrNumber = false;
        for (let i = 0; i < password.length; i++) {
            if (
                (password[i] >= "A" && password[i] <= "Z") ||
                (password[i] >= "0" && password[i] <= "9")
            ) {
                hasUpperCaseOrNumber = true;
                break;
            }
        }

        if (hasUpperCaseOrNumber) {
            strength = "საშუალო პაროლი";
            className = "medium";
        }
    }

    if (strength === "" && password.length >= 6) {
        strength = "დაბალი პაროლი";
        className = "low";
    }

    if (strength === "") {
        strength = "პაროლი ძალიან მოკლეა";
        className = "";
    }

    strengthText.textContent = strength;
    passwordInput.className = "password-input " + className;
}
