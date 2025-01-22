// console.log(10);
// console.log(20);
// // setTimeout(()=>{
// //     console.log(30);
// // } , 5000)
// setInterval(()=>{
//     // console.log("setInterval");
//     document.writeln("MRU");
// },1500)
// console.log(40);
// console.log(50);


//! Promise
// let p1 = new Promise(() => { });
// console.log(p1);
// let p2 = new Promise((resolve, reject) => { 
//     resolve("Success")
// });
// p2.then((res) => {
//     console.log(res);
// });  
// p2.finally(() => console.log(final));

// // console.log(p2);
// let p3 = new Promise((resolve, reject) => {
//     reject("Failure")
// });
//     p3
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
//     .finally(() => console.log("final"))

// console.log(p3);


// API fetching

function fetchUsers(){
    let response = fetch("https://jsonplaceholder.typicode.com/users");
    // console.log(response);
    response.then(res=>{
        // console.log(res)
        // console.log(res.json());
        return res.json().then(data=>{
            // console.log(data);
            let store = document.getElementById("store");
            data.map(user=>{
                console.log(user);
                store.innerHTML +=`
                <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.company.name}</td>
                </tr>
                `
            })
        })
    })
    .catch(err=>console.log(err))
}
fetchUsers();