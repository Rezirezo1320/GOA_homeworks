let count = 0;
let resetCount = 0;

function updateCounter() {
    const counterElement = document.getElementById('counter');
    counterElement.textContent = count;

    if (count < 0) {
        counterElement.className = 'red';
    } else if (count > 0) {
        counterElement.className = 'green';
    } else {
        counterElement.className = 'neutral';
    }
}

function getInputValue() {
    const input = document.getElementById('inputNumber');
    let value = parseInt(input.value);
    if (isNaN(value)) {
        value = 0;
    }
    return value;
}

function increase() {
    const value = getInputValue();
    if (value > 100) {
        alert('You added more than 100!');
        return;
    }
    count += value;
    updateCounter();
}

function decrease() {
    const value = getInputValue();
    if (value > 100) {
        alert('it is more than 100!');
        return;
    }
    count -= value;
    updateCounter();
}

function reset() {
    if (resetCount >= 0) {
        resetCount++;
        if (resetCount > 1) {
            alert('You cannot reset more than once!');
            return;
        }
    }
    count = 0;
    updateCounter();
}