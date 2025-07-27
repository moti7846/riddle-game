import { question } from "readline-sync";
import { createRiddle, getRiddles, updateRiddle } from "../api/riddle.js";

export async function printAllRiddles() {
    const riddles = await getRiddles()
    riddles.forEach(riddle => {
        console.log(riddle);
    });
}

export async function addRiddle() {
    const name = question("name riddle: ");
    const taskDescription = question("taskDescription: ");
    const correctAnswer = question("correctAnswer: ");
    const newRiddle = { name, taskDescription, correctAnswer }
    const response = await createRiddle(newRiddle)
    console.log(response);
}

export async function editRiddle() {
    const id = question("ID riddle: ");
    const name = question("name riddle: ");
    const taskDescription = question("taskDescription: ");
    const correctAnswer = question("correctAnswer: ");
    const newRiddle = { name, taskDescription, correctAnswer }
    const response = await updateRiddle(id, newRiddle)
    console.log(response);
}