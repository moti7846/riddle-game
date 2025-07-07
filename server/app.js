import http from "http"
import { operationDELETE, operationGET, operationPOST } from "./services/httpService.js";

const PORT = 3000;

const server = http.createServer(async (req, res) => {
    if (req.url === "/") {
        res.end("API runing!");
    }
    if (req.method.toUpperCase() === "GET") {
        operationGET(req, res)
    } else if (req.method.toUpperCase() === "POST") {
        operationPOST(req, res)
    } else if (req.method.toUpperCase() === "DELETE") {
        operationDELETE(req, res)
    }
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Page not found!");
})

server.listen(PORT, () => {
    console.log(`Server runing on port: ${PORT}`);
})