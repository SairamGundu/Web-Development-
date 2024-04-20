console.log("I am a tut on loops");
let a = 1;
// console.log(a);
// console.log(a + 1);
// // console.log(a + 2);
// for (let i = 0; i < 100; i++) {
//     console.log(a + i);

// }

let obj = {
    name: "John",
    age: 30,
    city: "New York"
}

for (const key in obj) {

    console.log(key);

}

for (const c of "Sairam") {
    console.log(c);

}

// let i = 1;
// while (i < 6) {
//     console.log(i);
//     i++;
// }

let i = 1;
do {
    console.log(i);
    i++;
} while ((i < 6));
