const conditionalVariable=(num1, num2) => {
    if (num1 == 10 && num2 <= 10)
    console.log(`Both statements are true.`)
    else {
        console.log(`One or both statements are false.`)
    }
}
conditionalVariable(10,5)
conditionalVariable(10,10)
conditionalVariable(0,10)

const gradingLog=(grade) => {
    switch (grade){
        case `E`:
            console.log('Excellent');
            break;
        case `V`:
            console.log('Very Good');
            break;
        case `G`:
            console.log('Good');
            break;
        case `A`:
            console.log('Average');
            break;
        case `F`:
            console.log('Fail')
            break;
        default:
            console.log('Not a valid grade')
    }
}
gradingLog('E');
gradingLog('V');
gradingLog('G');
gradingLog('A');
gradingLog('F');
gradingLog();


