// src/basics/counter.js

let count = 0;

function increment() {
    count++;
    updateDisplay();
}

function decrement() {
    count--;
    updateDisplay();
}

function updateDisplay() {
    console.log(`Current count: ${count}`);
}

// Example usage
increment(); // Current count: 1
increment(); // Current count: 2
decrement(); // Current count: 1