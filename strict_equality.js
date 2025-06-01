// strict equality is used to compare two values for equality
// it has two values
// == - loose equality
// === - strict equality

console.log(5 == "5");   // true (value same, type different)
console.log(5 === "5");  // false (type is different)
console.log(5 === 5);    // true (value & type both same)


// why
console.log(false == 0);       // true (loose equality)
console.log(false === 0);      // false (strict: boolean vs number)

console.log(null == undefined);  // true
console.log(null === undefined); // false
