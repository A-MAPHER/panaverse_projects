import inquirer from "inquirer";
// Greeting the user ---------------------------------------
console.log("Welcome To Number Guessing Game!");
const user = await inquirer.prompt({
    type: "input",
    name: "username",
    message: "Enter your name : "
})
console.log(`Welcome, ${user.username}`);

// Getting guessed number from the user----------------------
let main = async (): Promise<void> => {
    const inputs = await inquirer.prompt({
        type: "input",
        name: "guessedNumber",
        message: "Enter your guessed number : "
    })
    const number = Math.floor(Math.random() * 10);
    if (inputs.guessedNumber == number) {
        console.log("You Guessed it Right.!");
        type nextlevel = {
            nextlevel: string,
            play_quite: string,

        }
        // Asking for (level Up / Quite the game --- taking user inputs)
        const askNextLevel_quite: nextlevel = await inquirer.prompt([
            {
                type: "rawlist",
                name: "nextLevel",
                choices: ["Yes", "No"],
                message: "Do you want to proceed to next level? : "
            },
            {
                type: "rawlist",
                name: "play-quite",
                choices: ["Yes", "No"],
                message: "Do You Want play More? : "
            }
        ])
        if (askNextLevel_quite.nextlevel == "Yes") {
            console.log(`Coming Soon, please wait...`);

        } else {

        }
        if (askNextLevel_quite.play_quite == "Yes") {
            main();
        } else {

        }
    } else {
        console.log(`Your can guess it next time:
        Right Ans was ${number}`);
        const quite = await inquirer.prompt({
            type: "rawlist",
            name: "quitYN",
            choices: ["Yep", "Nope"],
            message: "Do you want to try again? :"
        })

        if (quite.quitYN == "Yep") {
            main();
        }

    }

}

main()
