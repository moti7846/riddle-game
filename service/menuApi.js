import { login } from "../api/auth.js";
import { createRiddle, getRiddles, updateRiddle } from "../api/riddle.js";
import { question } from "readline-sync";
import { user } from "../config.js";

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

export async function loginService() {
    const name = question("enter your name: ");
    const password = question("enter your password: ");
    const user = await login(name, password);
    if (user) {
        console.log('Login successful');
    }else {
        console.log('Login failed');
    }
}

export async function signupService() {
    const name = question("enter your name: ");
    const password = question("enter your password: ");
    await signup(name, password);
}