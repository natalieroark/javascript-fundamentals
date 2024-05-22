function simpleFunction(){
    console.log("Hello Javascript");
}

function simpleFunction2(){
    return `This is simple Function 2.`;
}
function simpleFunction3(message){
    console.log(message);

}

simpleFunction()
console.log(simpleFunction2());
simpleFunction3("This is simple function 3.");

const simple = simpleFunction2()
console.log(simple);

simpleFunction3(45);

const squareFoot = function(length, width){
    return length * width
}

console.log(squareFoot(24, 32));

function sample1(){
    const able = 32;
    let beta = "Hello";
    console.log(beta);
}

function sample2(){
    console.log(able);
    console.log(beta);
}

//sample2()
sample1()

// Nested Function
function outerFunction(value1){
    let charlie = 20;
    function innerFunction(){
        let total = charlie + value1;
        console.log(total);
    }

    innerFunction();
}
outerFunction(10)

// Closure Function
function init(){
    const name = "John Smith";
    function displayName(){
        console.log(name);
    }
    displayName();
}
init();

function parent(value){
    const number = 0;
    function child(){
        return value + number;
    }
    return child;
}
console.log(parent(10)());
const childFunc = parent(10);
console.log(childFunc);

function makeCounter(){
    let count = 0;
    return function(){
        return (count = count + 1);
    }
}
let counter = makeCounter();
console.log(counter()); //1
console.log(counter()); //2
console.log(counter()); //3

// Default parameters
function subtractThis(value1, value2 = 5){
    return value1 - value2;
}

console.log(subtractThis(15, 7));
console.log(subtractThis(15));

// Rest parameters
function groupSample(...args){
    console.log(args);
}
groupSample ( "Welcome", "to", "JavaScript", 10, 15, 20);

// Arrow function
const we = function (value){
    return value + 1000;
}
console.log(we(15));

// Another way of writing the function with the arrow syntax
const me = (value50) => value50 + 100;
//const me = (value50) => {
    //return value50 + 180;
//}
console.log(me(15));

// Arrow function with two parameters
const example = (num1, num2) => {
    return num1 + num2;
}
console.log(example)




