// import x from './script.js';
// import userdetails from './userdetails.js';
// console.log(x);

//  named imports

import { x, user, users, obj } from "./script.js";

console.log(x);
console.log(user);

console.log(users);
users.map(user => {
    console.log(user);
})
console.log(obj.company);

