function func(operation, ...args) {
    if (typeof operation !== 'function') {
        throw new Error("The first argument must be a function.");
    }

    if (args.length === 0) {
        throw new Error("You must provide at least one number.");
    }

    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] !== 'number' || !Number.isInteger(args[i])) {
            throw new Error("All arguments after the first must be integers.");
        }
    }

    return operation(...args);
}

function add(...nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}

function subtract(...nums) {
    let result = nums[0];
    for (let i = 1; i < nums.length; i++) {
        result -= nums[i];
    }
    return result;
}

function multiply(...nums) {
    let result = 1;
    for (let i = 0; i < nums.length; i++) {
        result *= nums[i];
    }
    return result;
}
