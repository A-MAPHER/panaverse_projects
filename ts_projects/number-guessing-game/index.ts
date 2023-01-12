#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

function welcome() {
    chalkAnimation.rainbow("Welcome To Number Guessing Game")
}

type userType = {
    userGuess: number,
    restart: string
}
let number = Math.floor(Math.random() * 10);

async function main() {
    let takeGuessedInput: userType = await inquirer.prompt({
        type: "number",
        name: "userGuess",
        message: chalk.white("Enter your guessed number : ")
    })

    if (takeGuessedInput.userGuess == number) {
        console.log(chalk.green("You guessed it correct!"));

        let askRestart: userType = await inquirer.prompt({
            type: "list",
            name: "restart",
            choices: [chalk.green("Yeah, sure"), chalk.red("No, thanks")],
            message: chalk.white("Do you want to try again?"),
        })

        if (askRestart.restart == chalk.green("Yeah, sure")) {
            main()
        } else {
            console.log(chalk.cyan("See You Soon, Buddy"));
        }

    } else {
        console.log(chalk.red("Strive hard, better luck next time"));
        console.log(chalk.green("Correct Answer is : " + number));
        let askRestart: userType = await inquirer.prompt({
            type: "list",
            name: "restart",
            choices: [chalk.green("Yeah, sure"), chalk.red("No, thanks")],
            message: chalk.white("Do you want to try again?"),
        })

        if (askRestart.restart == chalk.green("Yeah, sure")) {
            main()
        } else {
            console.log(chalk.cyan("See You Soon, Buddy"))
        }

    }
}
main()