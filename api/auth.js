import { upUser } from "../userConnection/config.js";

export async function login(username, password) {
    const response = await fetch("http://localhost:3200/player/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    });
    if (response.status === 200) {
        const responseToken = await response.json()
        return responseToken.token;
    }
    return false;
}

export async function signup(username, password) {
    const response = await fetch("http://localhost:3200/player/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    });
    if(response.ok)
        return response.text()
    return await response.json()
}
