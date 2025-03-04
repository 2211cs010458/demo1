// let user1 = "sachin";
// let user2 = "satwik";
// let user3 = "akshay";
// let user4 = "ram";
// let user5 = "raj";

// console.log(user1, user2, user3, user4, user5);


let user = ["sachin", "satwik", "akshay", "ram", "raj"];
// console.log(user);
// console.log(user[0]);
// console.log(user[1]);
// console.log(user[2]);
// console.log(user[3]);
// console.log(user[4]);

// for (let i = 0; i < user.length; i++){
//     console.log(user[i]);
    
// }

// user.map((user, i) => {
//     console.log(user,i);
    
// })

let x = user.forEach((user, i) => {
    console.log(user);
    return user;
    
});
console.log(x);


// !nested Object

// let userDetails = {
//     name: "Aravind",
//     age: 28,
//     address: {
//         street: "No 123 Main St",
//         city: "New York",
//         state: "NY"
//     },
//     hobbies: ["Reading", "Coding", "Traveling"]
// };
// console.log(userDetails.address);

// ! nested object
// let userDetails = {
//     name :"Akshay",
//     age:22,
//    address:{
//     city:"Hyderabad",
//     area:"siddipet",
//     streetNo : 123,
//     pincode : {
//         pin1:123456,
//         pin2:654321
//     }
//    }
// };
// console.log(userDetails.name);
// console.log(userDetails.address.city);
// console.log(userDetails.address.pincode.pin1);

// ! create array of objects
// let user1 ={
//     name:"sathvik",
//     city:"Karimnagar"
// }

// let user2={
//     name:"Raghu",
//     city:"ananthpur"
// }

// let user3={
//     name:"Shilpa",
//     city:"Kammam"
// }

// let user4={
//     name:"Bharath",
//     city:"Sathupalli"
// }

// console.log(user1.name);
// console.log(user2.name);

// let userDetails =[
//     {
//         name:"sathvik",
//         city:"Karimnagar"
//     },
//     {
//         name:"Raghu",
//         city:"ananthpur"
//     },
//     {
//         name:"Shilpa",
//         city:"Kammam"
//     },
//     {
//         name:"Bharath",
//         city:"Sathupalli"
//     }
// ];

// userDetails.map((user)=>{
// console.log(user.name);
// })

let userData = {
    name: "Akshay",
    age: 22,
    city:"Siddipet"
}
console.log(userData);

let Y = JSON.stringify(userData);

console.log(Y);
let z = JSON.parse(Y);

console.log(z);
    