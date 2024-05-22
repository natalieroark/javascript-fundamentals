// Task 1
function literalExpression(variable1, variable2){
    return variable1 + variable2
}
console.log(literalExpression(25,35));

// Task 2
function addingThis(variable1, variable2 = 15){
    return variable1 + variable2
}
console.log(addingThis(5,10))
console.log(addingThis(11,4))

// Task 3
const newTerm = (variable1, variable2) => {
    return variable1 + variable2
}
console.log(newTerm(2,6))
