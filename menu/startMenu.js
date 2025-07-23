
import { addRiddle, editRiddle, loginService, printAllRiddles, signupService } from "../service/menuApi.js"
import { question } from "readline-sync";
import Play from "../classes/Player.js"
import { login } from "../api/auth.js";
import { user } from "../config.js";

const options_menu = [
    "1. Play the game",
    "2. Create a new riddle",
    "3. Read all riddles",
    "4. Update an existing riddle",
    "5. Delete a riddle",
    "6. View leaderboard",
    "7. Exit",
    "8. Login",
    "9. Signup",
    "10. View current user"
]

async function menu(choice) {
    switch (choice) {
        case '1':
            Play.start();
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
            console.log("goodbye...");
            return;
        case '8':
            loginService();
            break
        case '9':
            signupService();
            break
        case '10':
            console.log("You are logged in as: " + user.name);
            break;
    }
    start()
}

function printMenu() {
    options_menu.forEach(option => {
        console.log(option);
    });
}

function inputChoice() {
    while (true){
        const choice = question("Enter your choice: ");
        if (Number(choice) >= 1 && Number(choice) <= 10)
            return choice;
        console.log("Wrong choice, try again...");
    }
}

export async function start() {
    printMenu();
    const choice = inputChoice();
    await menu(choice);
}