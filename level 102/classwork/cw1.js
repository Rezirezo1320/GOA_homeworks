let form = document.getElementById("form")
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let email = e.target.em.value
    let pass = e.target.pass.value
    let newlst = JSON.parse(localStorage.getItem("users"))
    newlst.push({Mail : email, Password : pass})
    localStorage.setItem("users", JSON.stringify(newlst))
    console.log(localStorage)
})
