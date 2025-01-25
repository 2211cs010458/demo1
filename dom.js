// let element = document.getElementById("demo");
// // element.innerText = "DOM"
// element.innerHTML = "DOM"
// console.log(element);

// let test = document.getElementById("test");
// // test.innerText = "Header"
// test.innerHTML = "<h1>Header</h1>"
// console.log(test);

// !

// let ele = document.getElementsByClassName("test");
// ele[0].style.backgroundColor="dodgerblue"
// console.log(ele);
// console.log(Array.isArray(ele));//this method used to check whether the arry is pure or not

//!spread operator :- this operator is used to take out each and every value from
//! original array and store it in one more new array(pure array).
// syntax of spread -   [...variable]

// let x = [...ele];
// console.log(x , Array.isArray(x));
// x.map(element=>{
//     // console.log(element);
//     element.style.backgroundColor="tomato";
//     element.style.color="white";
//     element.style.textTransform = "uppercase";
// })


// !
// let ele = document.getElementsByTagName("div");
// // console.log(ele);
// [...ele].map(element=>{
//     console.log(element.innerText);
// })

//!
// let ele = document.getElementsByName("username");
// // console.log(ele , Array.isArray(ele));
// [...ele].map(u=>{
//     console.log(u.value);
// })

//!
// let ele = document.querySelector("#demo");
// console.log(ele);
// let ele = document.querySelector(".test");
// console.log(ele);


// let ele = document.querySelectorAll(".test");
// console.log(ele);

// let demo =document.getElementById("demo");
// demo.addEventListener("click",()=>{
//     // console.log("button clicked");
//     // alert("hi")
//     document.body.style.backgroundColor="orange"
// });

// let demo =document.getElementById("demo");

// demo.addEventListener("dblclick",()=>{
//     console.log("double click");
// })

// let demo =document.getElementById("demo");

// demo.addEventListener("mouseover",()=>{
//     document.body.style.backgroundColor="red";
// })

// demo.addEventListener("mouseleave",()=>{
//     document.body.style.backgroundColor="teal";
// })
// let red = document.getElementById("red");
// red.addEventListener("mouseover", () => {
//     document.body.style.backgroundColor = "red";
// });
// let green = document.getElementById("green");
// green.addEventListener("mouseover", () => {
//     document.body.style.backgroundColor = "green";
// });
// let blue = document.getElementById("blue");
// blue.addEventListener("mouseover", () => {
//     document.body.style.backgroundColor = "blue";
// });
// let teal = document.getElementById("teal");
// teal.addEventListener("mouseover", () => {
//     document.body.style.backgroundColor = "teal";
// });
// let yellow = document.getElementById("yellow");
// yellow.addEventListener("mouseover", () => {
//     document.body.style.backgroundColor = "yellow";
// });

    
//////////////////////////////////////////
 
// const colors = ["red", "green", "blue", "teal", "yellow"];

// colors.forEach(color => {
//     let element = document.getElementById(color);
//     element.addEventListener("mouseover", () => {
//         document.body.style.backgroundColor = color;
//     });
// });

// let bgcolor = document.querySelectorAll(".bgcolor");

// [...bgcolor].map(element => {
//     element.addEventListener("mouseover", () => {
//         element.style.backgroundColor = element.innerText; // Corrected property: innerText
//     });

//     element.addEventListener("mouseleave", () => {
//         element.style.backgroundColor = "white";
//     });
// });


let ele = document.createElement("h1");
ele.innerText = "dynamic content html discrete";
ele.setAttribute("id", "demo");
console.log(ele);

document.body.appendChild(ele);

let img = document.createElement("img");

img.src = "./3606208.jpg"; 
console.log(img);

document.body.appendChild(img);
