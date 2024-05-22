function ifExample(value1){
    console.log(`Before if statement`);
    if (value1 > 10){
        console.log(`value of ${value1} is larger than 10
        `);
 
    }
    console.log(`after if statement`);
}
ifExample(2);

const elseExample = (value2) => {
    if (value2 == "JavaScript") {
        console.log (`The value was true.`);
    } else {
        console.log(`The value was false.`);
    }
}
//elseExample("value2")
elseExample("JavaScript")

function elseIfExample (num1) {
    if (num1 <= 5) {
        console.log(` ${num1} is less than or equal to 5`)
    } else if (num1 <= 10){
        console.log(`${num1} is less than or equal to 10.
        `);
    } else if (num1 <= 15){
        console.log(`${num1} is less than or equal to 15.
        `)
    } else {
        console.log(`${num1} is greater than 15.`)
    }
}
//elseIfExample(8);
elseIfExample(20);

const logicalIfExample = (num3, num4) => {
    if (num3 == 10 && num4 > 10){
        console.log("Both conditions were true.")
    } else {
        console.log(`One or both of the conditions 
        was not true.`)
    }

    if (num3 <= 9 || num4 > 20){
        console.log(`One of the conditions were true.`)
    } else {
        console.log (`Both condition were false.`)
    }
}
logicalIfExample(10, 5)

// This is Ternary Expression
const ternaryExample = (param) => {
    const example = param > 10? `${param} is greater`: `${param} is less`
    console.log(example)
}
ternaryExample(5)
ternaryExample(12)

// This is for Switch Statement
function favoriteIcecream (flavor){
    switch (flavor){
        case `vanilla`:
            console.log (`Your favorite icecream is Vanilla flavor.`)
            break;
        case `chocolate`:
            console.log(`Your favorite icecream is Chocolate flavor.`)
            break;
        default:
            console.log(`We do not have your favorite icecream flavor.`)
            break;
     }

}
favoriteIcecream(`strawberry`)

const gradeEvaluator= (grade) => {
    switch (grade){
        case `A`:
        case `a`:
        case `S`:
        case `s`:
            console.log(`You got an A!`)
            break;
        case `B`:
        case `b`:
            console.log(`You got a B!`)
            break;
        case `C`:
        case `c`:
            console.log(`You got a C!`)
            break;
        case `D`:
        case `d`:
            console.log(`You got a D!`)
            break;
        default:
            console.log(`You got an F!`)
    }
}
gradeEvaluator('S')