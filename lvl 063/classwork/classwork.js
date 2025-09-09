// საკლასო დავალება:

// შექმენით greet ფუნქცია, რომელიც პარაგრაფს შეუცვლის კონტენტს და ის გახდება "welcome {თქვენი სახელი}!".

// ეს ფუნქცია ჩაწერეთ external js-ის მეთოდით.

// როდესაც პარაგრაფს დავაკლიკებთ, უნდა გამოიძახოს ეს ფუნქცია

function addClickEvent() {
    document.querySelector("p").addEventListener("click", greet);
}