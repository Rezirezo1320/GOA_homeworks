let form = document.getElementById("form")
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let email = e.target.email.value
    let password = e.target.password.value
    if (localStorage.getItem("user")!=null){
        if (email==JSON.parse(localStorage.getItem("user"))[1] && password==JSON.parse(localStorage.getItem("user"))[2]){
            localStorage.setItem("status", "true")
            location.replace("homepage.html")
        }else {
            alert("Incorrect password or email")
        }
    }else {
            alert("Incorrect password or email")
    }
})