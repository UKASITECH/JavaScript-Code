// math objrct is used to represent a mathematical object like squreroot, power, random numbers etc...
import { MathObject } from './math_object.js';
// we can also use it directly without importing this math object

// doing round of a number
console.log(Math.round(4.5));   // 5
console.log(Math.round(4.4));   // 4

// doing square root of a number
console.log(Math.sqrt(16));      // 4
console.log(Math.sqrt(2));       // 1.4142135623730951

// doing power of a number  
console.log(Math.pow(2, 3));     // 8
console.log(Math.pow(3, 2));     // 9

// doing random number generation
console.log(Math.random());       // 0.123456789 (random number between 0 and 1)
console.log(Math.random() * 10); // 0.123456789 (random number between 0 and 10)

