let form = document.querySelector("form")
form.addEventListener("submit", e=>{
    e.preventDefault()
    let fullname = e.target.fullname.value
    let email = e.target.email.value
    let password = e.target.password.value

    document.body.innerHTML += `
        <h1>User Data</h1>
        <p>Fullname: ${fullname}</p>
        <p>Email: ${email}</p>
        <p>Password: ${password}</p>
    `
})