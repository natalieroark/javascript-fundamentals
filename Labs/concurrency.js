function returnPromise(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve (`This task was ran ${time} times`)
        }, 2000);
    });
}
console.log('Lets start the task...')
 async function myAsync(echo){
    try {
        const result = await returnPromise(echo)
        console.log(result)
    } catch (error) {
        console.log(error)
        
    }
 }

 for (let index = 0; index < 5; index++) {
    myAsync(index + 1)
    
 }