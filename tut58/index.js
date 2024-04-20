// console.log("Sairam is programmer");
// console.log("Sairam is developer");
// console.log("Sairam is author");
// console.log("Sairam is brillant");

function nice(name) {
    console.log(name + " is programmer");
    console.log(name + " is developer");
    console.log(name + " is author");
    console.log(name + " is brilliant");
}

nice("Sairam");
nice("naveen");

function sum(a, b, c = 5) {
    console.log(a, b, c);
    return a + b + c;

}
result1 = sum(1);
result2 = sum(3, 4);
result3 = sum(6, 5, 3);


console.log("The sum of two number is " + result1);
console.log("The sum of two number is " + result2);
console.log("The sum of two number is " + result3);

const func1 = (x) => {
    console.log("i am an arrow function", x);
}

func1(34)
func1(44)
func1(54)
