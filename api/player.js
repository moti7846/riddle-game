import { user } from "../service/user.js";

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
    if (response.ok)
        return response.text()
    return await response.json()
}

export async function getTokenInfo(token) {
    const response = await fetch("http://localhost:3200/player/profile", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ token })
    });
    if (response.status === 200) {
        return await response.json();
    }
    return false;
}

export async function getBestTime() {

}

export async function upBestTime(time) {
    const response = await fetch("http://localhost:3200/player/submit-score", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: user.name, time, token: user.token })
    });
    if (response.status === 200) {
        return await response.json();
    }
    return false;
}