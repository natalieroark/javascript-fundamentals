let variableB; //  // JS engine tolerates this
console.log(variableB);

//  // JS engine will not tolerate this
// const variableA;

// // You MUST define the initial value for the variable with const.
const variableA = "some values here";

//variableC, variableD;

//yourVar;
const yourVar = "Hi!"
yourVar;
//yourVar();

//console.log('Hi, there!';
//console.log'Hi, there!);
console.log('Hi,there!');

// const snack = 'Donuts'
// if(snack = 'Chips'){
//     console.log('That will be $2.50, please!');
// }

//const funcThree = 'funcThree';
const funcThree = () => console.log('I am the funcThree.');
const funcTwo =() => funcThree();
const funcOne = () => funcTwo();
funcOne();

for (let index = 0; index < 10; index++) {
    console.log(index);    
}

