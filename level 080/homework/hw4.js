function myFunc(){
    const input1 = document.getElementById("password")
    const input2 = document.getElementById("password1")
    if (input1.value !== '' && input2.value !== ''){
        if (input1.value === input2.value){
            alert("Your login was successful")
        }else {
            alert("Passwords do not match eachother. Try again.")
        }
    }else {
        alert("Input fields cannot be empty.")
    }
    return false
}