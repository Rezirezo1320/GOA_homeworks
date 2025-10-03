function calculate() {
    const payment = document.getElementById('payment');
    const tip = document.getElementById('tip percentage');
    
}

if (payment ==="" || tip ==="" ||payment<=0 ||tip <0 ){
    document.getElementById('result').textContent="enter positive number";
    return;
}

let tipAmount = (payment + tip);
let totalAmount = payment + tipAmount;

document.getElementById('result')
