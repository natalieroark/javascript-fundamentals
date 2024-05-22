// Addition and subtraction
function exampleAddSubtract(num1, num2){
    const add = num1 + num2
    const sub = num1 + num2
    console.log(`Addition ${add}, Subtraction ${sub}`)
}

function exampleMultiplyDivide(num3, num4){
    const mul = num3 * num4
    const div = num4 / num3
    console.log(`Multiplying ${mul}, Divide ${div}`)
}

exampleAddSubtract(7, 12);
exampleMultiplyDivide(4, 14);

// Modulus
const exampleModulus = () =>{
    const answer1 = 10 % 4;
    const answer2 = 12 % 3;
    console.log(`1st is ${answer1}, 2nd is ${answer2}`)
}
exampleModulus()

// Exponentiation
const exampleExponent = (value) =>{
    const answer3 = 2 ** value
    console.log(answer3)
}
exampleExponent(5);

// PEMDAS
const mathOrder = () => {
    const total = (10/(3+2)) * 4 + 5 ** 2 + 7 - 10;
    console.log(`Math Order ${total}`)
}
mathOrder()

// Assignment operator
const additionAssign =() => {
    let numAdd1 = 5
    let numAdd2 = 10
    numAdd1 += numAdd2
    console.log(`Addition Assignment Operator ${numAdd1}`)
}
additionAssign();

const subtractAssign =() => {
    let numSub1 = 20
    let numSub2 = 8
    numSub1 -= numSub2
    console.log(`Subtraction Assignment Operator ${numSub1}`);
}
subtractAssign();

const multiplyAssign = (num5,num6) => {
    num5 *= num6;
    console.log(`Multiply Assignmnet Operator ${num5}`)
}
multiplyAssign(4,7);

const divideAssign = (num7,num8) => {
    num7 /= num8;
    console.log(`Divide Assignment Operator ${num7}`)
}
divideAssign(12,4);

const modulusAssign = (num9) => {
    num9 %= 34
    console.log(`Modulus Assignment Operator ${num9}`);
}
modulusAssign(16);

const exponentAssign = (value6,powerOf) => {
    return (value6 **= powerOf)
}
console.log(exponentAssign(12,3))

// Comparison Operators
const compareExample =(value1, value2) => {
    const twoEqualSigns = value1 == value2
    const threeEqualSigns = value1 === value2
    const exclamationEqual = value1 != value2
    console.log(`
    Is twoEqualSigns same: ${twoEqualSigns}\n
    Is threeEqualSigns same: ${threeEqualSigns}\n
    Is exclamationEqual same: ${exclamationEqual}
    `)
}
compareExample(2,'2');

const greater = (value3, value4) => value3 > value4;
console.log(greater(15,4));

//Logical Operators
const logicalExample = (num10,num11) => {
    const doubleAmpersand = num10 < 20 && num11 > 10;
    const doublePipe = num10 === 5 || num11 == '5';
    const reverse = !(num10 == num11);
    console.log(`
    Is doubleAmpersand same: ${doubleAmpersand}\n
    Is doublePipe same: ${doublePipe}\n
    Is reverse true: ${reverse}
    `)
}
logicalExample(10, 10);

// Increment/Decrement operators
const incrementExample = () => {
    let num = 20
    const sum = num++
    console.log(`Increment Post = num: ${num}, sum: ${sum}`)

    let num1 = 10
    const sum1= ++num1
    console.log(`Incement Post = num1: ${num1}, sum1: ${sum1}`)
}
incrementExample();

function decrementExample(){
    let foxtrot = 10
    const sum3 = foxtrot--
    console.log(`Decement Post = foxtrot: ${foxtrot}, sum3: ${sum3}`)
}
decrementExample();
