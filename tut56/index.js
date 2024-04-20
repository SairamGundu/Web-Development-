console.log("this are conditioanal statements");

let age = 0;
// let grace = 2;

// console.log(age + grace);

// console.log(age - grace);

// console.log(age * grace);

// console.log(age / grace);

// console.log(age % grace);

// console.log(age ** grace);

if (age == 18) {
    console.log("you are eligible for driving");
}
else if (age == 0) {
    console.log("are u kidding");
}

else {
    console.log("you are not eligible for driving");
}

a = 6;
b = 8;
let c = a > b ? (a - b) : (b - a);

/*
translates to:
if(a>b){
    let c = a - b;
}
else {
    let c = a - b;
}

*/