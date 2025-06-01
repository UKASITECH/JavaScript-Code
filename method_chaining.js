// Method chaining means calling multiple methods one after another on the same object or value.
let str = "   Hello JavaScript World!   ";

let result = str.trim().toLowerCase().replace("javascript", "JS").slice(0, 20);

console.log(result);  // "hello js world!"

// breakdown 
str.trim()             // "Hello JavaScript World!"
.toLowerCase()         // "hello javascript world!"
.replace("javascript", "JS")  // "hello js world!"
.slice(0, 20)          // "hello js world!"
