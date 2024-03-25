#! /usr/bin/env node

import inquirer from "inquirer";

// 1) computer will generate a random nubmber

// 2) user input for guessing number

// 3) compare user input with computer

const randomNumber = Math.floor(Math.random()*10+1);

const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "please guess a number between 1 and 10:",
  },
]);

if (answer.userGuessedNumber === randomNumber) {
  console.log("Congratulations! You guessed right Number.");
} else {
  console.log("you guessed wrong number");
}
