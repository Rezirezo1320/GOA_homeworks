let form = document.getElementById("form")
function Constructor(email, pass, rep, name){
    this.email = email
    this.pass = pass
    this.rep = rep
    this.name = name
}

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let users = new Constructor(e.target.name.value, e.target.email.value, e.target.pass.value, e.target.rep.value)
    if (String(pass)!=String(rep)){
        alert("Passwords doesnt match")
    }else {
        localStorage.setItem("user", `[]`)
        let arr = JSON.parse(localStorage.getItem("user"))
        arr.push(users.name, users.email, users.pass, users.rep, users.name)
        localStorage.setItem("user", JSON.stringify(arr))
        localStorage.setItem("status", "true")
        location.replace("login.html")
    }
})