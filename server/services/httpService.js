import { showRiddles, addriddle, updateRiddle, deleteRiddle } from "./riddlesService.js";

async function operationGET(req, res) {
    if (req.url === "/riddles") {
        let response;
        try {
            response = await showRiddles();
        } catch (err) {
            res.writeHead(500, { "content-type": "application/json" });
            res.end(JSON.stringify({ err: "Faild read data." }));
        }
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify(response));
    }
    res.writeHead(404, { "content-type": "text/plain" });
    res.end(`Page not found!`);
}
async function operationPOST(req, res) {
    let data;
    
    if (req.url === "/riddles/addRiddle") {
        let response;

        const body = [];
        req.on("data", chunk => {
            body.push(chunk);
        });

        req.on("end", async () => {
            try {
                data = JSON.parse(Buffer.concat(body).toString());
                response = await addriddle(data)
            } catch (err) {
                res.writeHead(500, { "content-type": "application/json" });
                res.end(JSON.stringify({ err: "Faild read data." }));
                return
            }
            res.writeHead(200, { "content-type": "application/json" });
            res.end(JSON.stringify(response));
            return
        });
    }
    // res.writeHead(404, { "content-type": "text/plain" });
    // res.end(`Page not found!`);
}
async function operationDELETE(req, res) {
    if (false) {
        let response;
        try {
            response = await showRiddles();
        } catch (err) {
            res.writeHead(500, { "content-type": "application/json" });
            res.end(JSON.stringify({ err: "Faild read data." }));
        }
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify(response));
    }
    res.writeHead(404, { "content-type": "text/plain" });
    res.end(`Page not found!`);
}

export {
    operationGET,
    operationPOST,
    operationDELETE
}

function bodyreq(req) {
    return new Promise((resolve, reject) => {
        const body = [];

        req.on("data", chunk => {
            body.push(chunk);
        });

        req.on("end", () => {
            try {
                const data = JSON.parse(Buffer.concat(body).toString());
                resolve(data);
            } catch (err) {
                reject(new Error("Invalid JSON"));
            }
        });

        req.on("error", err => {
            reject(err);
        });
    });
}