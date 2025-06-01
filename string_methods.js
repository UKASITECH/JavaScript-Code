// A string in js is a sequence of characters, and it is immutable.
// but we can use it for some special purposes 

/*
✅ Commonly Used String Methods:
Method	            Description
length	            Returns string length
toUpperCase()	    Converts to uppercase
toLowerCase()	    Converts to lowercase
charAt(index)	    Returns character at index
indexOf(substring)	Returns index of first match (or -1)
lastIndexOf()	    Returns last index of match
includes(str)	    Checks if string contains str
startsWith(str)	    Checks if it starts with str
endsWith(str)	    Checks if it ends with str
replace(a, b)	    Replaces first a with b
replaceAll(a, b)	Replaces all a with b (ES2021+)
trim()	            Removes whitespace
split(delimiter)	Splits string into array
repeat(n)	        Repeats string n times
*/

let text = "  Hello JavaScript!  ";

console.log(text.length);                  // 21
console.log(text.trim());                  // "Hello JavaScript!"
console.log(text.toUpperCase());           // "  HELLO JAVASCRIPT!  "
console.log(text.includes("Java"));        // true
console.log(text.replace("Java", "Type")); // "  Hello TypeScript!  "
console.log(text.split(" "));              // ["", "", "Hello", "JavaScript!", "", ""]
console.log(text.charAt(0));               // " "
console.log(text.indexOf("Java"));         // 7      
console.log(text.lastIndexOf("!"));        // 20
console.log(text.startsWith("  Hello"));   // true
console.log(text.endsWith("!  "));         // true
console.log(text.repeat(2));               // "  Hello JavaScript!    Hello JavaScript!  "
console.log(text.split(" ").join("-"));    // "--Hello-JavaScript!--"