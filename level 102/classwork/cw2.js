//2) დაამატეთ საიტზე ღილაკი როდესაც ამ ღილაკს დააჭერთ მომხმარებელს შემოატანინეთ სახელი, გვარი, ასაკი და მეილი ამ მონაცემების შექმენით ობიექტი შეგიძლიათ გამოიყენოთ კონსტრუქტორი, ეს ობიექტი დაამატეთ სიაში და შექმენით ექაუნთები, ეს ინფორმაცია უნდა ინახებოდეს localstorage ში, ყოველ ღილაკზე დაჭერის დროს უნდა შეიქმნას ახალი ექაუნთი(ობიექტი), დაემატოს ექაუნთებისთვის განკუთვნილ სიაში და განახლდეს localstorage
function Constructor(name, surname, age, email){
    this.name = name
    this.surname = surname
    this.age = age
    this.email = email
}
document.getElementById("form").addEventListener("submit", (e)=>{
    e.preventDefault()
    let user = new Constructor(e.target.name.value, e.target.surname.value, e.target.age.value, e.target.email.value)
    let arr = JSON.parse(localStorage.getItem("accs"))
    arr.push({username : user.name, usersurname : user.surname, userage : user.age, useremail : user.email})
    localStorage.setItem("accs", JSON.stringify(arr))
    console.log(localStorage)
})
