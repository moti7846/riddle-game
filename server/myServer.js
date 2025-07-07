import http from "http"
import { readFile } from "../DAL/function.js";

const PORT = 3007;

const server = http.createServer((req, res) => {
    const body = [];
    req.on("data", (chunk => {
        console.log(chunk);
        body.push(chunk);
    }))
    req.on("end", () => {
        const data = JSON.parse(Buffer.concat(body).toString())
        console.log(data);
        res.end(JSON.stringify(data))
    })
})

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});