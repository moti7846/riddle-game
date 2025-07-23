export const user = { name: "guest", role: "guest" }

export function upUser(token){
    user = token;
}