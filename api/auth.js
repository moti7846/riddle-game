import { upUser } from "../config.js";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

export async function login(username,password) {
    const user = await fetch("http://localhost:3200/player/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    });
    if (user.ok) {
        jwt.verify(user.token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                console.error("Token verification failed:", err);
                return null;
            }
            upUser(decoded);
            return decoded;
        });
    }
    else {
        console.error("Login failed");
        return null;
    }
}

export async function signup(username,password) {
    const user = await fetch("http://localhost:3200/player/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    });
    console.log(user.status);
}

export function logout(username,password) {
    
}