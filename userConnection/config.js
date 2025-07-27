import { question } from "readline-sync";
import { login, signup } from "../api/auth.js";

export let user = { name: "guest", role: "guest" }

export function upUser(token) {
    user = token;
}

export async function loginService() {
    const name = question("enter your name: ");
    const password = question("enter your password: ");
    const response = await login(name, password);
    if (response) {
        user = { name, token: response }
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
