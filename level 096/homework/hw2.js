function userInfo(email, password) {
    this.email = email;
    this.password = password;
}

let users = []
let form1 = document.querySelectorAll("form")[0]
form1.addEventListener("submit", e => {
    e.preventDefault()
    let email = e.target.email.value
    let password = e.target.password.value

    for(let i of users){
        if(i.email == email){
            alert("This email is already registered")
            return
        }
    }
    users.push(new userInfo(email, password))
})


let form2 = document.querySelectorAll("form")[1]
form2.addEventListener("submit", e => {
    e.preventDefault()
    let email = e.target.loginEmail.value
    let password = e.target.loginPassword.value

    for(let i of users){
        if(i.email == email && i.password == password){
            alert("Login successful")
            return
        }
    }
    alert("Login failed")
})