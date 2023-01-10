#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation, { rainbow } from "chalk-animation";

const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    })
}
// welcome function
async function welcome() {
    let ranbowTItle = chalkAnimation.rainbow("Let's Start calculation")
    await sleep();
    ranbowTItle.stop();
    console.log(chalk.yellow(`     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`));
    console.log(chalk.whiteBright(`   ╔╦╗┌─┐┬  ┬┌─┐┬  ┌─┐┌─┐┌─┐┌┬┐  ┌┐ ┬ ┬  ╔═╗┬ ┬┌┬┐┌─┐┌┬┐
    ║║├┤ └┐┌┘├┤ │  │ │├─┘├┤  ││  ├┴┐└┬┘  ╠═╣├─┤│││├┤  ││
   ═╩╝└─┘ └┘ └─┘┴─┘└─┘┴  └─┘─┴┘  └─┘ ┴   ╩ ╩┴ ┴┴ ┴└─┘─┴┘`))
}
welcome();

// main function for taking inputs and performing operation
async function askQuestion() {
    let answers = await inquirer.prompt([
        {
            type: "list",
            name: "operation",
            message: "Which operation do you want to perform:",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter First Number : "
        },
        {
            type: "number",
            name: "num2",
            message: "Enter Second Number"
        }
    ])

    console.log(answers);
    if (answers.operation == "Addition") {
        console.log(chalk.green(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
    } else if (answers.operation == "Subtraction") {
        console.log(chalk.green(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
    } else if (answers.operation == "Multiplication") {
        console.log(chalk.green(`${answers.num1} x ${answers.num2} = ${answers.num1 * answers.num2}`));
    } else if (answers.operation == "Division") {
        console.log(chalk.green(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
    }
}

// for restarting the calculator
async function startAgain() {
    do {
        await askQuestion()
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue? Press y or n:"
        })
    } while (again.restart == 'y' || again.restart == 'Y')
}
startAgain()