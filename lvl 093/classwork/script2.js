let counterCount = 0;

function createCounter() {
    if (counterCount >= 3) {
        alert("You can only create 3 counters.");
        return;
    }

    counterCount++;
    const container = document.getElementById("counterContainer");

    const counterWrapper = document.createElement("div");
    counterWrapper.className = "counter-wrapper";

    const counterDisplay = document.createElement("span");
    counterDisplay.className = "counter-display";
    counterDisplay.textContent = "0";

    let value = 0;
    let isLocked = false;

    function updateDisplay() {
        counterDisplay.textContent = value;
    }
    const incrementButton = document.createElement("button");
    incrementButton.textContent = "Increment";
    incrementButton.addEventListener("click", () => {
        if (!isLocked) {
            value++;
            updateDisplay();
        }
    });

    const decrementButton = document.createElement("button");
    decrementButton.textContent = "Decrement";
    decrementButton.addEventListener("click", () => {
        if (!isLocked) {
            value--;
            updateDisplay();
        }
    });

    const lockCheckbox = document.createElement("input");
    lockCheckbox.type = "checkbox";
    const lockLabel = document.createElement("label");
    lockLabel.textContent = "Lock Counter";
    lockCheckbox.addEventListener("change", () => {
        isLocked = lockCheckbox.checked;
        incrementButton.disabled = isLocked;
        decrementButton.disabled = isLocked;
    });

    counterWrapper.appendChild(counterDisplay);
    counterWrapper.appendChild(incrementButton);
    counterWrapper.appendChild(decrementButton);
    counterWrapper.appendChild(lockCheckbox);
    counterWrapper.appendChild(lockLabel);
    container.appendChild(counterWrapper);

    updateDisplay();
}
