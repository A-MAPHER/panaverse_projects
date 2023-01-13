#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";
import gradient from "gradient-string";
//To wait for welcome animations----------------------------
const wait = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
// greeting function---------------------------------------
async function welcome() {
    const ranbowTitle = chalkAnimation.rainbow(`Who Wants To Be A JavaScript Millionaire? \n`);
    await wait();
    ranbowTitle.stop();
    console.log(`
    ${chalk.bgBlue('HOW TO PLAY')}
    I am a process on your computer.
    If you get any question wrong I will be ${chalk.bgRed("Killed")}
    So get all the questions right...
    `);
}
//taking inputs for user name 
async function askName() {
    const playerName = await inquirer.prompt({
        type: "input",
        name: "uname",
        message: "Enter your Name : ",
        default() {
            return 'Player';
        }
    });
    return playerName.uname;
}
// asking the questions
const askQuestions = async () => {
    const answers = await inquirer.prompt([
        {
            name: "Q1",
            type: "list",
            message: "JavaSript was created in 10 days then released on\n",
            choices: [
                "May 23rd, 1995",
                "Nov 24th, 1995",
                "Dec 4th, 1995",
                "Dec 17th, 1996"
            ]
        },
        {
            name: "Q2",
            type: "list",
            message: "JavaScript is a _________ language?\n",
            choices: [
                "Programming",
                "Application",
                "Scripting",
                "None"
            ]
        },
        {
            type: "list",
            name: "Q3",
            message: "What is the alternate name for Java script?\n",
            choices: [
                "LimeScript",
                "ECMScipt",
                "Both a and b",
                "ECMAScript"
            ]
        },
        {
            type: "list",
            name: "Q4",
            message: "JavaScript is a ____-side scripting language",
            choices: [
                "Server-Side",
                "Client-Side",
                "Both",
                "None"
            ]
        }
    ]);
    return handleAnswers(answers.Q1 == "Dec 4th, 1995" && answers.Q2 == "Scripting" && answers.Q3 == "ECMAScript" && answers.Q4 == "Both");
};
// for creating animation after answering a question...
async function handleAnswers(isCorrect) {
    const spinner = createSpinner("Checking answer...").start();
    await wait();
    if (isCorrect) {
        spinner.success({ text: `Nice work ${Name}. That's a legit answer` });
    }
    else {
        spinner.error({ text: `Game over, you lose ${Name}!` });
        process.exit(1);
    }
}
function winner() {
    console.clear();
    const msg = `Congrats, ${Name} !\n $ 1 , 0 0 0 , 0 0 0`;
    figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(data));
    });
}
await welcome();
let Name = await askName();
console.log(Name);
await askQuestions();
winner();
