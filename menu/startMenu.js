
import { question } from "readline-sync";
import { addRiddle, editRiddle, printAllRiddles } from "../service/riddle.js"
import Play from "../classes/Player.js"
import { loginService, signoutService, signupService } from "../service/user.js";

const options_menu = [
    "1.  Play the game",
    "2.  Create a new riddle",
    "3.  Read all riddles",
    "4.  Update an existing riddle",
    "5.  Delete a riddle",
    "6.  View leaderboard",
    "7.  Login",
    "8.  Signup",
    "9.  Sign out",
    "10. Exit"
]

async function menu(choice) {
    switch (choice) {
        case '1':
            await Play.start();
            break
        case '2':
            await addRiddle();
            break
        case '3':
            await printAllRiddles();
            break
        case '4':
            await editRiddle();
            break
        case '5':
            break
        case '6':
            break
        case '7':
            await loginService();
            break
        case '8':
            await signupService();
            break
        case '9':
            signoutService();
            break;
        case '10':
            console.log("goodbye...");
            return;
    }
    console.log("==============================");
    console.log("- - - - - -  menu  - - - - - -");
    console.log("==============================");
    start()
}

function printMenu() {
    options_menu.forEach(option => {
        console.log(option);
    });
}

function inputChoice() {
    while (true){
        console.log("------------------------------");
        const choice = question("Enter your choice: ");
        if (Number(choice) >= 1 && Number(choice) <= 10)
            return choice;
        console.log("------------------------------");
        console.log("Wrong choice, try again...");
    }
}

export async function start() {
    printMenu();
    const choice = inputChoice();
    await menu(choice);
}