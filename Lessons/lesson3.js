// Declare a string using single quotes
let felineType = 'Cat';
let felineAction = 'They meow quietly.';

// Declare a string using double quotes
let canineType = "Dog";
let canineAction = "They bark loudly.";

/* Using bracket notation on a variable of strings
will output 1 characters, or undefined */
console.log(canineType[3]);
console.log(felineAction[1]);
console.log(canineAction[4]);
console.log(felineType[0]);

let longSentence = "Lorem  ipsum dolor sit amet, consectetur," +
"consecteturlorum  ipsum dolor sit amet, consectetur  ipsum," +
"dolor sit amet, consectetur";

let longSecond = "Lorem  ipsum dolor sit amet, consectetur.\
\"Lorem  ipsum dolor sit amet, consecteturLorem  ipsum dolor.\
\"sit amet, consecteturLorem  ipsum dolor sit amet, consectetur";

const alpha = "Hello";
const beta = "World";

const combinedVariables = alpha + beta;
console.log(combinedVariables);

const combine2 = alpha + 40
console.log(combine2);

const combined3 = "The " + beta + " is vast";
console.log(combined3);

const value1 = 10;
const value2 = 20;

console.log("Thirty is " + (value1 + value2) + " and not " + (2 * value1 + value2));

console.log(`Thirty is ${value1 + value2} and not ${2 * value1 + value2}`);
console.log(`Here are more ${combinedVariables} + ${combine2}`);
console.log(`Canines are ${canineType}, ${canineAction}`);

// Single character form a UTF-8 character set
let letter = '\u00A9'
console.log(letter);

let phrase = 'My name Roger O\'Dell. \tHow are \n you doing today?'
 console.log(phrase);

 let phrase2 = 'Let\"s try   \\something \0'
 console.log(phrase2);

 // Using a string length property
 const example_length = 'Lorem  ipsum dolor sit amet, consectetur'
 console.log(example_length.length);

 const msg = ' Hello, World '

 console.log(msg.at(-2));
console.log(msg.at(4));

console.log(msg.charAt(2));

console.log(msg.includes('he'));
console.log(msg.includes('He'));

console.log(msg.indexOf('W'));
console.log(msg.toUpperCase());

