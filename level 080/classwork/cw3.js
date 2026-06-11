function myFunc(){
    const input1 = document.getElementById("password")
    const input2 = document.getElementById("password1")
    if (input1.value !== '' && input2.value !== ''){
        if (input1.value === input2.value){
            console.log("The operation was successful")
        }else {
            console.log("The values should be equal and not blank")
        }
    }else {
        console.log("The values should be equal and not blank")
    }
    return false
}