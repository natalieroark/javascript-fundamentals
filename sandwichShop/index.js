const {
  checkYorN,
  chooseYourBun,
  chooseYourCheese,
  chooseYourMeat,
  chooseYourVegetables,
  getTotalCost
} = require("./helpers");
const Sandwich = require("./sandwich");
const chalk = require("chalk");
const prompt = require("prompt-sync")({ sigint: true });

const shopTitle =
  "=================================================\n" +
  "=\t\t\t\t\t        =\n" +
  "=\t\t" +
  "    " +
  "BOB SANDWICH" +
  "    " +
  "\t\t= \n" +
  "=\t\t\t\t\t        =\n" +
  "=================================================";
const welcomeStr = "Welcome to Bob Sandwich shop!\n";

console.log(shopTitle);
console.log(welcomeStr);

let userInput = prompt("Would you like to make an order: Y or N?: ");

while (!checkYorN(userInput)) {
  userInput = prompt('Please enter letter "Y" or letter "N": ');
}

// if (userInput.toLowerCase() == "n") {
//   console.log(chalk.yellow("Thank you for coming, bye!"));
// } else {
//   const bun = chooseYourBun();
//   const cheese = chooseYourCheese();
//   const meat = chooseYourMeat();
//   const vegetables = chooseYourVegetables();
//   const orderedSandwich = new Sandwich(bun, cheese, meat, vegetables);
//   orderedSandwich.showInfo();
//   console.log()
//   console.log(chalk.red("Your sandwich is being made. Please wait..."));
//   setTimeout(() => {
//     console.log(chalk.green("Your sandwich is ready!"));
//     console.log(`\nTotal cost: $${getTotalCost(orderedSandwich)}`);
//     console.log();
//   }, 6000);
// }
