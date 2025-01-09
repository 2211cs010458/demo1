// function addToCart(){
//     alert("product is added to cart successfully");
//     document.body.style.background="GREY";
// }
// addToCart();

// ! without parameters

// function demo() {
//     console.log("Hello World!");
//     document.body.style.background = "grey";
//     document.body.style.color = "red";
// }

// demo();

// function add(a,b) {
//     console.log(a);
//     console.log(b);
    
// }
// add(5,6);
// function add(a,b) {
//     console.log(a+b);
//     console.log(b+a);
    
// }
// add(5,6);


// ! named function

function test() {
    console.log("test executing"); 
    
}

test();

// ! anonymous function

var demo = function() {
    console.log("anonymous function executing");
    
};
demo();

// ! function expression
let x = function() {
    console.log("test executing");
    
}
x();

// IIFE function

(function() {
    console.log("IIFE function executing");
    
})
    ();

// Arrow function

// let y = () => {
//     console.log("Arrow function executing");
    
// }
// y();

// //arrow function// // 
// var test = ()=>{
//     console.log("arrow function");
// }
// test();

// var test = (a,b)=> console.log(a+b);
// test(5,6);

// var test = (a,b)=> a+b;
// console.log(test(5,6));

//implicit return and explicit return   // //
function test(a,b){
    return a+b;
}
console.log(test(4,5));

var test = (a,b)=> a+b;
console.log(test(4,5));

// let y = (a,b)=> a+b;
// console.log(y(10, 100));

let y = (a, b) => a + b;

console.log(y(200, 100));

let z = (a, b) => {
    let sum = a + b;
    return sum;
}

console.log(z(300, 100));
