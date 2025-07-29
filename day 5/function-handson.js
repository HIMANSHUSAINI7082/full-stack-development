function greet() {
    console.log("Hello, my name is himanshu ");
}
greet();


function greetWithName(name) {
    console.log("Hello, my name is " + name);
}
greetWithName("himanshu");

function greetWithFullName(firstName, lastName) {
    console.log("Hello, my full name is " + firstName + "" + lastName);
    console.log('Hello, my full name is ${firstName} ${lastName}');
}
greetWithFullName("HIMANSHU", "SAINI");

function addNumbers(a,b) {
    return a + b;
}
let result = addNumbers(10,20);
console.log("The sum is:" + result);