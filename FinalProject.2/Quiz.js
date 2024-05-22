const chalk = require("chalk");
const prompt = require("prompt-sync")({ sigint: true });
const fs = require("fs");

const Title =
  "================================================\n" +
  "=\t\t\t\t\t       =\n" +
  "=\t\t" +
  "  " +
  "QUIZ PROJECT!" +
  "\t\t       =" +
  "\n=\t\t\t\t\t       =" +
  "\n================================================";

const greeting =
  " Hi! Today, you will be taking a quiz.\n Each question will be 'true or false' or multiple choice.\n You will have 10 questions to answer. Please enter your name before we begin.";
console.log(Title);
console.log(greeting);

const firstName = prompt("First Name: ");
const lastName = prompt("Last Name: ");

function newUser() {
  console.log(
    `Hello ${firstName} ${lastName}! Date: ` + new Date().toLocaleDateString()
  );
}
console.log();
newUser();
console.log();
grade = 0;

const question1 = "How many days are in a week?";
console.log(question1);
let answers1 = prompt("a. 4 days b. 6 days c. 7 days d. 12 days ");

while (!("aAbBcCdD".includes(answers1) && answers1.length == 1)) {
  answers1 = prompt("Please enter only a given letter: ");
}
if (answers1.trim().toLowerCase() == "c") {
  grade = grade + 2;
  console.log(
    chalk.green(
      "Hurray! Babylonians created the 7-day-week calendar that we, nationally, used today."
    )
  );
} else {
  answers1.trim().toLowerCase() == "a", "b", "d";
  {
    console.log(chalk.red("That is not the correct answer!"));
  }
}
console.log();

console.log();
const question2 = "What State is the capital city of 'Des Moines' in?";
console.log(question2);
let answers2 = prompt("a. Missouri b. Chicago c. Michigan d. Iowa ");

while (!("aAbBcCdD".includes(answers2) && answers2.length == 1)) {
  answers2 = prompt("Please enter only a given letter: ");
}
if (answers2.trim().toLowerCase() == "d") {
  grade = grade + 2;
  console.log(
    chalk.green(
      "Very good! Des Moines is known as the 'Insurance Capitol of the World'. "
    )
  );
} else {
  answers2.trim().toLowerCase() == "a", "b", "c";
  {
    console.log(chalk.red("That is not the correct answer!"));
  }
}
console.log();

console.log();
const question3 = "True or False? Celcius is measured in 0 - 100 degrees.";
console.log(question3);
let answers3 = prompt("a. True b. False ");

while (!("aAbB".includes(answers3) && answers3.length == 1)) {
  answers3 = prompt("Please enter only a given letter: ");
}
if (answers3.trim().toLowerCase() == "a") {
  grade = grade + 2;
  console.log(
    chalk.green(
      "Yes! Unlike fahrenheit, Celcius's freezing point of water is 0 degrees, and boiling point of water is 100 degrees"
    )
  );
}
if (answers3.trim().toLowerCase() == "b") {
  console.log(chalk.red("That is not the correct answer!"));
}
console.log();
const question4 = "Aureolin is a shade of what color?";
console.log(question4);
let answers4 = prompt("a. Red b. Yellow c. Blue d. Brown ");

while (!("aAbBcCdD".includes(answers4) && answers4.length == 1)) {
  answers4 = prompt("Please enter only a given letter: ");
}
if (answers4.trim().toLowerCase() == "b") {
  grade = grade + 2;
  console.log(
    chalk.green(
      "Awesome! Even though Aureolin looks green, it is a medium shade of yellow."
    )
  );
} else {
  answers4.trim().toLowerCase() == "a", "b", "c";
  {
    console.log(chalk.red("That is not the correct answer!"));
  }
}
console.log();
const question5 = "What type of animal is a platypus?";
console.log(question5);
let answers5 = prompt("a. Bird b. Fish c. Reptile d. Mammal ");

while (!("aAbBcCdD".includes(answers5) && answers5.length == 1)) {
  answers5 = prompt("Please enter only a given letter: ");
}
if (answers5.trim().toLowerCase() == "d") {
  grade = grade + 2;
  console.log(
    chalk.green("Woohoo! The platypus is the only mammal that can lay eggs.")
  );
} else {
  answers5.trim().toLowerCase() == "a", "b", "c";
  {
    console.log(chalk.red("That is not the correct answer!"));
  }
}
console.log();
const question6 =
  "What is the symbol for Gold in the Periodic Table of Elements?";
console.log(question6);
let answers6 = prompt("a. Au b. Go c. Ag d. U ");

while (!("aAbBcCdD".includes(answers6) && answers6.length == 1)) {
  answers6 = prompt("Please enter only a given letter: ");
}
if (answers6.trim().toLowerCase() == "a") {
  grade = grade + 2;
  console.log(
    chalk.green(
      "Neat! 'Aye You! Give me back my Gold!' It is the 79th element on the Periodic Table."
    )
  );
} else {
  answers6.trim().toLowerCase() == "b", "c", "d";
  {
    console.log(chalk.red("That is not the correct answer!"));
  }
}
console.log();
const question7 = "What Planet has the most moons?";
console.log(question7);
let answers7 = prompt("a. Earth b. Jupiter c. Venus d. Saturn ");

while (!("aAbBcCdD".includes(answers7) && answers7.length == 1)) {
  answers7 = prompt("Please enter only a given letter: ");
}
if (answers7.trim().toLowerCase() == "d") {
  grade = grade + 2;
  console.log(
    chalk.green(
      "Yay! Saturn has a total of 146 moons. Titan being the largest, which is the size of a Sports Arena."
    )
  );
} else {
  answers7.trim().toLowerCase() == "a", "b", "c";
  {
    console.log(chalk.red("That is not the correct answer!"));
  }
}
console.log();
const question8 = "True or False? AB- is the most common blood type.";
console.log(question8);
let answers8 = prompt("a. True b. False ");

while (!("aAbB".includes(answers8) && answers8.length == 1)) {
  answers8 = prompt("Please enter only a given letter: ");
}
if (answers8.trim().toLowerCase() == "b") {
  grade = grade + 2;
  console.log(
    chalk.green(
      "Very Well! AB- is actually the rarest blood type.. O- is the most common."
    )
  );
} else {
  answers8.trim().toLowerCase() == "a";
  {
    console.log(chalk.red("That is not the correct answer!"));
  }
}
console.log();
const question9 = "What sign is the opposite of Scorpio in Zodiac?";
console.log(question9);
let answers9 = prompt("a. Virgo b. Capricorn c. Taurus d. Gemini ");

while (!("aAbBcCdD".includes(answers9) && answers9.length == 1)) {
  answers9 = prompt("Please enter only a given letter: ");
}
if (answers9.trim().toLowerCase() == "c") {
  grade = grade + 2;
  console.log(chalk.green("Mmhmm. Taurus means 'bull' in latin."));
} else {
  answers9.trim().toLowerCase() == "a", "b", "d";
  {
    console.log(chalk.red("That is not the correct answer!"));
  }
}
console.log();
const question10 =
  "True or False? The Unicorn is the National Animal of Scotland.";
console.log(question10);
let answers10 = prompt("a. True b. False ");

while (!("aAbB".includes(answers10) && answers10.length == 1)) {
  answers10 = prompt("Please enter only a given letter: ");
}
if (answers10.trim().toLowerCase() == "a") {
  grade = grade + 2;
  console.log(
    chalk.green(
      "You got it! A Unicorn is a symbol of purity, innocence, and power in Celtic Mythology."
    )
  );
} else {
  answers10.trim().toLowerCase() == "b";
  {
    console.log(chalk.red("That is not the correct answer!"));
  }
}
console.log();
console.log("You're finished! Let's see how you did...");
const percentage = () => {
  const getGrade = (grade / 20) * 100;
  console.log(`Your final score is ${getGrade}%`);
};
percentage();

if (grade >= 20) {
  console.log(`Awesome! You got an A+. `);
} else if (grade >= 18) {
  console.log(`Great Job! You got an A. `);
} else if (grade >= 16) {
  console.log(`Great Job! You got a B. `);
} else if (grade >= 14) {
  console.log(`Great Job! You got a C. `);
} else if (grade >= 12) {
  console.log(`Sorry, you got a D. `);
} else {
  console.log(`Sorry, you got an F. `);
}

userAccount = {
  name: firstName + "" + lastName,
  date: new Date().toLocaleDateString(),
  score: grade,
};

fs.writeFile(
  "userAccountDatabase.txt",
  JSON.stringify(userAccount),
  (err) => {
    if (err) throw err;
  }
);


