let count = 0;
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

function increase() {
    count++;
    updateCounter();
}

function decrease() {
    count--;
    updateCounter();
}
function reset() {
    count = 0;
    updateCounter();
}
