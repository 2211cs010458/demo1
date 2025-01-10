// write a condition to check greatest among 3 numbers using if else and switch case
// take a b c from prompt 
// write in both if else and switch case

let a = parseInt(prompt("Enter the first number"));
let b = parseInt(prompt("Enter the second number"));
let c = parseInt(prompt("Enter the third number")); ``

if (a > b && a > c) {
    console.log("a is greatest");
}
else if (b > a && b > c) {
    console.log("b is greatest");
}
else {
    console.log("c is greatest");
}

//using switch case
switch (true) {
    case a > b && a > c:
        console.log("a is greatest");
        break;
    case b > a && b > c:
        console.log("b is greatest");
        break;
    default:
        console.log("c is greatest");
        break;
}