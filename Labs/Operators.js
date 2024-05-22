// Task 1
const mathOrder = () => {
    const total = 10 + 32 * 12 / 3
    const total1 = total + 30
    console.log(`answer: ${total}\nanswer: ${total1}`)
}
mathOrder()

// Task 2
const utilityOperatorAddition = (x,y) => {
    x += y
    console.log(`Addition answer: ${x}`)
}
utilityOperatorAddition(3,6)

const utilityOperatorMultiplication = (a,b) => {
    a *= b
    console.log(`Multiplication answer: ${a}`)
}
utilityOperatorMultiplication(7,8)

const utilityOperatorModulus = (K,t) => {
    K %= t
    console.log(`Modulus answer: ${K}`)
}
utilityOperatorModulus(10,8)

//Task 3
const comparisonOperators = (value1, value2) => {
    const doubleEquals = value1 == value2
    const reverseEquals = value1 != value2
    const tripleEquals = value1 ===value2
    console.log(`The following statements are true:\n 
    equal:${doubleEquals}\n 
    not equal:${reverseEquals}\n
    equal value and equal type:${tripleEquals}`)
}
comparisonOperators(4,'4')
