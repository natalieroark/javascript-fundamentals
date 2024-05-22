const bun = require("./ingredients/bun.json");
const cheese = require("./ingredients/cheese");
const vegetable = require("./ingredients/vegetables.json");
const prompt = require("prompt-sync")({ sigint: true });
const fs = require("fs");

const promptUser = (promptMsg1, menuNumbers) => {  
  let choice = prompt(promptMsg1);
  while (!(menuNumbers.includes(choice) && choice.length == 1)) {
    choice = prompt("Please enter only a number on the menu: ");
  } return (choice)
} 
const showMenu = (itemList) => {
  let menuNumbers = ''
  for (let index = 0; index < itemList.length; index++) {
    const arr = [...itemList[index]];
    arr.splice(1, 0, "- $");
    menuNumbers += (index + 1).toString();
    console.log(`${index + 1}. ${arr.join("")}`);
  }
  console.log();
  return menuNumbers.trim
};
exports.checkYorN = function (input) {
  return "ynYN".includes(input) && input.length == 1;
};

exports.chooseYourBun = () => {
  const buns = Object.entries(bun);
  // let menuNumbers = "";
  const menuNumbers = showMenu(buns)
  const bunChoice = promptUser("Please choose your bun: ");
  // // A more efficient way
  // console.log();
  // for (let index = 0; index < buns.length; index++) {
  //   const arr = [...buns[index]];
  //   arr.splice(1, 0, "- $");
  //   menuNumbers += (index + 1).toString();
  //   console.log(`${index + 1}. ${arr.join("")}`);
  // }
  // // A brute-force way
  //   console.log(`
  //   \n1. ${buns[0][0]} - $${buns[0][1]}
  //   \n2. ${buns[1][0]} - $${buns[1][1]}
  //   \n3. ${buns[2][0]} - $${buns[2][1]}
  //   \n4. ${buns[3][0]} - $${buns[3][1]}`);
  console.log();

  // let bunChoice = prompt("Please choose your bun: ");
  // while (!(menuNumbers.includes(bunChoice) && bunChoice.length == 1)) {
  //   bunChoice = prompt("Please enter only a number on the menu: ");
  // }

  return buns[parseInt(bunChoice) - 1];
};

exports.chooseYourCheese = function () {
  const cheeseList = Object.entries(cheese.cheese);
  // let menuNumbers = "";
const menuNumbers = showMenu(CheeseList)
const cheeseChoice = promptUser("Please choose your cheese: ")
  // console.log();
  // for (let index = 0; index < cheeseList.length; index++) {
  //   const arr = [...cheeseList[index]];
  //   arr.splice(1, 0, "- $");
  //   menuNumbers += (index + 1).toString();
  //   console.log(`${index + 1}. ${arr.join("")}`);
  // }
  console.log();

  // let cheeseChoice = prompt("Please choose your cheese: ");
  // while (!(menuNumbers.includes(cheeseChoice) && cheeseChoice.length == 1)) {
  //   cheeseChoice = prompt("Please enter only a number on the menu: ");
  // }
  return cheeseList[parseInt(cheeseChoice) - 1];
};

exports.chooseYourMeat = function () {
  try {
    let menuNumbers = "";

    const meatList = fs
      .readFileSync("sandwichShop\\ingredients\\meat.txt", "utf8")
      .split("\r\n")
      .slice(0, -1);
    // // Annother method to write the same code
    // const meatList = fs.readFileSync(
    //   "sandwichShop\\ingredients\\meat.txt",
    //   "utf8"
    // );
    // const v1 = meatList.split("\r\n");
    // const v2 = v1.slice(0, -1);
    console.log();
    for (let index = 0; index < meatList.length; index++) {
      const meatMenu = [
        `${index + 1}. `,
        meatList[index].slice(0, -5),
        " - $",
        meatList[index].slice(-4, meatList[index].length),
      ].join("");
      menuNumbers += (index + 1).toString();
      console.log(meatMenu);
    }
    console.log();
const meatChoice = promptUser("Please choose your meat: ")
    // let meatChoice = prompt("Please choose your meat: ");
    // while (!(menuNumbers.includes(meatChoice) && meatChoice.length == 1)) {
    //   meatChoice = prompt("Please enter only a number on the menu: ");
    // }
    return meatList[parseInt(meatChoice) - 1];
  } catch (error) {
    console.log("Error opening meat.txt file!");
  }
};

exports.chooseYourVegetables = function () {
  const vegetables = Object.entries(vegetable);
  let menuNumbers = "";
  console.log();
  for (let index = 0; index < vegetables.length + 1; index++) {
    menuNumbers += (index + 1).toString();
    if (index + 1 == vegetables.length + 1) {
      console.log(`${index + 1}. All`);
      break;
    }
    const arr = [...vegetables[index]];
    arr.splice(1, 0, "- $");
    console.log(`${index + 1}. ${arr.join("")}`);
  }
  console.log();
const vegieChoice = promptUser("Please choose your vegetables: ")
  // let vegieChoice = prompt("Please choose your vegetables: ");
  // while (!(menuNumbers.includes(vegieChoice) && vegieChoice.length == 1)) {
  //   vegieChoice = prompt("Please enter only a number on the menu: ");
  // }

  if (vegieChoice == "5") {
    return vegetables;
  } else {
    return vegetables[parseInt(vegieChoice) - 1];
  }
};

exports.getTotalCost = function (orderedSandwich) {
  let vegieTotalCost = 0;

  if (
    orderedSandwich.vegetables.length == 2 &&
    orderedSandwich.vegetables[0] != "object"
  ) {
    vegieTotalCost += orderedSandwich.vegetables[1];
  } else {
    for (let index = 0; index < orderedSandwich.vegetables.length; index++) {
      vegieTotalCost +=
        orderedSandwich.vegetables[index][(index == 0 ? 0 : 0) + 1];
    }
  }
  return (
    orderedSandwich.bun.pop() +
    orderedSandwich.cheese.pop() +
    parseFloat(orderedSandwich.meat.slice(-4)) +
    vegieTotalCost
  ).toFixed(2);
};
