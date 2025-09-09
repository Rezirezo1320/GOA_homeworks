// function equal () {
//     console.log (10==10)
// }

// equal()

// function shedareba () {
//     console.log (10>10)
// }

// shedareba()

// function less () {
//     console.log (10<=10)
// }

// less()


// function not_equal () {
//     console.log (10!=10)
// }

// not_equal()

// function more_or_equal (num) {
//     console.log (num >= 100)
// }

// more_or_equal(101)


// function showConfirmAndLog() {
//     const result1 = confirm("Do you like JavaScript?");
//     console.log(result1);
// }
// showConfirmAndLog();

// function setupButtonConfirm() {
//     const button = document.getElementById('myButton');
//     if (button) {
//         button.onclick = function() {
//             const result2 = confirm("Are you sure you want to continue?");
//             console.log("Button confirm result:", result2);
//         };
//     }
// }
// setupButtonConfirm();

// function showConfirmOnLoad() {
//     window.addEventListener('DOMContentLoaded', function() {
//         const result3 = confirm("Do you want to see an alert with your choice?");
//         alert("Your choice was: " + result3);
//     });
// }
// showConfirmOnLoad();


// var form = document.forms[0];
// if (form) {
//     form.onsubmit = function(event) {
//         event.preventDefault();
//         var usernameInput = form.elements["username"];
//         if (usernameInput) {
//             console.log(usernameInput.value);
//         }
//     };
// }


// var clearEmailBtn = document.getElementById('clearEmailBtn');
// if (clearEmailBtn) {
//     clearEmailBtn.onclick = function() {
//         var emailInput = document.getElementsByName('email')[0];
//         if (emailInput) {
//             emailInput.value = '';
//         }
//     };
// }


// var alertPhoneBtn = document.getElementById('alertPhoneBtn');
// if (alertPhoneBtn) {
//     alertPhoneBtn.onclick = function() {
//         var phoneInput = document.getElementsByName('phone')[0];
//         if (phoneInput) {
//             alert(phoneInput.value);
//         }
//     };
// }