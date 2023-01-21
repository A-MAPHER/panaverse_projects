#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { createSpinner } from "nanospinner"; //for loading animation
//timer function
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000)
    })

}

// welcome message
async function welcome() {
    let ranbowTitle = chalkAnimation.rainbow("Welcome to PIAIC ATM")
    await sleep();
    ranbowTitle.stop();
}
await welcome();
// ans types
type input = {
    userId: string,
    userPin: number,
    accType: string,
    options: string,
    fastCash: number,
    withdraw: number,
}
// user inputs
const inputs: input = await inquirer.prompt([
    {
        name: "userId",
        type: "string",
        message: chalk.blue("Kindly Enter Your User ID : ")
    },
    {
        name: "userPin",
        type: "number",
        message: chalk.blue("Kindly Enter your PIN : "),
        // when creates a condition that : userId is a must
        when(answer) {
            return answer.userId
        }
    },
    {
        name: "accType",
        type: "list",
        message: chalk.blue("Select your account type"),
        choices: [
            "Current",
            "Saving"
        ],
        when(answer) { // when is given
            return answer.userPin
        }
    },
    {
        name: "options",
        type: "list",
        message: chalk.blue("Choose option : "),
        choices: [
            "Fast Cash",
            "Cash Withdraw",
            "Balance Inquery",
        ]
    },
    {
        name: "fastCash",
        type: "list",
        message: chalk.blue("Choose Option : "),
        choices: [1000, 3000, 5000, 10000],
        when(answer) {
            return answer.options === "Fast Cash"
        }
    },
    {
        name: "withdraw",
        type: "number",
        message: chalk.blue("Enter amount : "),
        when(answer) {
            return answer.options === "Cash Withdraw"
        }
    }
])
// destructuring
const { userId, userPin, fastCash, withdraw } = inputs

// Random Balance Function
function randomBalance(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const Balance: number = randomBalance(100, 1000000);

// withdraw the amount

let transections = async () => {
    // spinner loading animation
    const spinner = createSpinner("Loading please wait!\n").start();
    await sleep()

    if (userId && userPin && withdraw) {
        if (Balance >= withdraw) {
            spinner.success({ text: `Transection Successfully Completed!` });
            let currentBalance = Balance - withdraw;
            console.log(chalk.whiteBright(`Your Current Balance is : ${currentBalance}`))
        } else {
            spinner.error({ text: `Insuficient Balance` });
            process.exit(1);
        }
    } else if (userId && userPin && fastCash) {
        if (Balance >= fastCash) {
            spinner.success({ text: "Transection Successfully Completed!" })
            let currentBalance = Balance - fastCash;
            console.log(chalk.whiteBright(`Your Current Balance is : ${currentBalance}`))
        } else {
            spinner.error({ text: `Insuficient Balance` });
            process.exit(1);
        }
    } else if (inputs.options === "Balance Inquery") {
        console.log(chalk.whiteBright(`Your Account Balance is ${Balance}`));
        process.exit(1);
    }
}
await transections()