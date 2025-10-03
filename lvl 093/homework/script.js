let cookies = 0; 
let gold = 0; 
let cookiesPerClick = 1; 
let goldPerClick = 1; 


let biggerFingerPrice = 50; 
let betterMinesPrice = 100; 
let doubleCookiesPrice = 200; 

const cookieButton = document.getElementById("cookie");
const cookieCountDisplay = document.getElementById("cookieCount");
const goldCountDisplay = document.getElementById("goldCount");
const biggerFingerButton = document.getElementById("biggerFinger");
const betterMinesButton = document.getElementById("betterMines");
const doubleCookiesButton = document.getElementById("doubleCookies");

function updateDisplay() {
    cookieCountDisplay.textContent = `Cookies: ${cookies}`;
    goldCountDisplay.textContent = `Gold: ${gold}`;
    biggerFingerButton.textContent = `Bigger Finger (+1 per click): ${biggerFingerPrice} Gold`;
    betterMinesButton.textContent = `Better Mines (+1 gold per click): ${betterMinesPrice} Cookies`;
    doubleCookiesButton.textContent = `Double Cookies (x2 per click): ${doubleCookiesPrice} Gold`;
}

cookieButton.addEventListener("click", () => {
    cookies += cookiesPerClick;
    gold += goldPerClick;
    updateDisplay();
});

biggerFingerButton.addEventListener("click", () => {
    if (gold >= biggerFingerPrice) {
        gold -= biggerFingerPrice;
        cookiesPerClick += 1;
        biggerFingerPrice *= 2; 
        updateDisplay();
    } else {
        alert("Not enough gold!");
    }
});


betterMinesButton.addEventListener("click", () => {
    if (cookies >= betterMinesPrice) {
        cookies -= betterMinesPrice;
        goldPerClick += 1;
        betterMinesPrice *= 2; 
        updateDisplay();
    } else {
        alert("Not enough cookies!");
    }
});


doubleCookiesButton.addEventListener("click", () => {
    if (gold >= doubleCookiesPrice) {
        gold -= doubleCookiesPrice;
        cookiesPerClick *= 2;
        doubleCookiesPrice *= 2;
        updateDisplay();
    } else {
        alert("Not enough gold!");
    }
});


updateDisplay();
