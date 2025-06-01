// switch operator is used to replace multiple if-else condtions when we are working with diffrent values
let x= prompt("Enter a number between 1 and 5");
switch (x) {
    case '1':
        console.log("You entered one");
        break;
    case '2':
        console.log("You entered two");
        break;
    case '3':
        console.log("You entered three");
        break;
    case '4':
        console.log("You entered four");
        break;
    case '5':
        console.log("You entered five");
        break;
    default:
        console.log("Invalid input, please enter a number between 1 and 5");
}