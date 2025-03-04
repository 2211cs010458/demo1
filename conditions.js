// decision making
// if
// ifelse
// else
// switch
// ternary

// if (true) {
//     console.log("execute the block");
    
// }
// if else
// if is a true statement
// else is a false statement

if (false) {
    console.log("true block");
    
} else {
    console.log("false block");
    
}

let isAdult = 20;
if (isAdult >=18) {
    console.log("major");
    
} else {
    console.log("minor");
    
}

isAdult >= 18 ?console.log("Major") :console.log("Minor");

let day = 1;
if (day = 1) {
    console.log("sunday");
    
} else if (day = 2) {
    console.log("mon");
    
} else if (day = 3) {
    console.log("tuesday");
    
}
 else if (day = 4) {
    console.log("wed");
    
}
else if (day = 5) {
    console.log("thur");
    
}
else if (day = 6) {
    console.log("friday");
    
}
else if (day = 7) {
    console.log("sat");
    
} else {
    console.log("invalid ");
    
}

// switch
let days = Number(prompt('Enter  a day value'));
console.log(days, typeof (days));

switch (days) {
    case 1:
        console.log("sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("tuesday");
        break;
    case 4:
        console.log("wednesday");
        break;
    case 5:
        console.log("thursday");
        break;
    case 6:
        console.log("friday");
        break;
    case 7:
        console.log("saturday");
        break;

    default:
        console.log("enter a valid number");
        break;
}
