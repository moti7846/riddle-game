
import { addRiddle, editRiddle, printAllRiddles } from "../service/menuApi.js"
import { question } from "readline-sync";
import Play from "../classes/Player.js"

const options_menu = [
    "1. Play the game",
    "2. Create a new riddle",
    "3. Read all riddles",
    "4. Update an existing riddle",
    "5. Delete a riddle",
    "6. View leaderboard",
    "7. Exit"
]

async function menu(choice){
    switch (choice){
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
        default:
            start()
    }
}

function printMenu(){
    options_menu.forEach(option => {
        console.log(option);
    });
}

function inputChoice(){
    const choice = question("Enter your choice: ");
    if(choice >= 1 && choice <= 7)
        return choice;
    console.log("Wrong choice, try again...");
    return inputChoice();
}

export async function start(){
    printMenu()
    const choice = inputChoice()
    await menu(choice);
}