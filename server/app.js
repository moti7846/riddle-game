import http from "http"
import { operationDELETE, operationGET, operationPOST } from "./services/httpService.js";

const PORT = 3000;

const server = http.createServer(async (req, res) => {
    try {
        if (req.url === "/") {
            res.end("API runing!");
            return;
        } else if (req.method.toUpperCase() === "GET") {
            await operationGET(req, res)
            return;
        } else if (req.method.toUpperCase() === "POST") {
            await operationPOST(req, res)
            return;
        } else if (req.method.toUpperCase() === "DELETE") {
            await operationDELETE(req, res)
            return;
        }
        res.writeHead(404, { "content-type": "text/plain" });
        res.end(`Page not found!`);
    } catch (error) {
        res.writeHead(500, { "content-type": "text/plain" });
        res.end(`Page not found!: ${error}`);
    }
})

server.listen(PORT, () => {
    console.log(`Server runing on port: ${PORT}`);
})