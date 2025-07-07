import fs from "fs"


function writeFile(path, data) {
    data = JSON.stringify(data)
    return new Promise((resolve, reject) => {
         fs.writeFile(path, data ,(err) => {
            if(err){
                reject(`Error adding riddle: ${err}`)
            }
            resolve("The riddle was added successfully.")
         })
    })
}

function readFile(path) {
    return new Promise((resolve, reject) => {
         fs.readFile(path, "utf-8", (err, data) => {
            if(err){
                reject(`Error read riddles: ${err}`)
            }
            resolve(JSON.parse(data))
         })
    })
}

export {writeFile, readFile}