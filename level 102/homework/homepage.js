window.addEventListener("DOMContentLoaded", ()=>{
    const userExist = localStorage.getItem("user")
    let status = localStorage.getItem("status")
    let body = document.body
    if (userExist && status=="true"){
        body.innerHTML = `<a href="profile.html"><button class="user" id="profile">Profile</button></a>`
    }else {
        body.innerHTML = `
            <a href="login.html"><button class="user" id="login">Log in</button></a>
            <a href="signup.html"><button class="user" id="signup">Sign up</button></a>
        `
    }
})
