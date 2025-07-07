import http from "http"
import { readFile } from "../DAL/function.js";

const PORT = 3000;

const server = http.createServer((req, res) => {
    readFile("C:\\Users\\97253\\Desktop\\riddle-game\\DAL\\riddles.txt").then(data => {
        if(req.method === 'GET' && req.url === '/all'){
            res.end(JSON.stringify(data))
        }
        else if(req.method === 'GET' && req.url === '/1'){
            res.end(JSON.stringify(data[0]))
        }
    })
})

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});