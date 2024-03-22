#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "UserGuessednumber",
        type: 'number',
        message: 'Please guess a number between 1-10:'
    }
]);
if (answer.UserGuessednumber === randomNumber) {
    console.log(chalk.bgBlack(chalk.green(" Congratulations! You have gueesed the correct number")));
}
else {
    console.log(chalk.bgBlack(chalk.redBright("Sorry you have guessed the wrong number. Please try again!.")));
}
