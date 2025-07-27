import { question } from "readline-sync";
import {getTokenInfo, login, signup} from "../api/player.js"

export let user = { name: "guest", role: "guest" }

export async function upUser(token) {
    const response = await getTokenInfo(token);
    if (response) {
        user = { name: response.player.username, role: response.player.role, token };
    }
}

export async function loginService() {
    const name = question("enter your name: ");
    const password = question("enter your password: ");
    const response = await login(name, password);
    if (response) {
        await upUser(response);
        console.log('Login successful');
    } else {
        console.log('Login failed');
    }
}

export async function signupService() {
    const name = question("enter your name: ");
    const password = question("enter your password: ");
    const response = await signup(name, password);
    console.log("==========================");
    console.log(response);
    console.log("==========================");
}


export function signoutService() {
    user = { name: "guest", role: "guest" }
}
