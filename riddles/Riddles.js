import fs from "fs"

const path = "./db.txt"

function addRiddle(data) {
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

function readRiddle() {
    return new Promise((resolve, reject) => {
         fs.readFile(path, "utf-8", (err, data) => {
            if(err){
                reject(`Error read riddles: ${err}`)
            }
            resolve(JSON.parse(data))
         })
    })
}

function deleteRiddle() {

}


function add(riddle){
    readRiddle().then(res => {
        res.push(riddle)
        addRiddle(res).then(msg => {
            console.log(msg);
        }).catch(err => {
            console.log(err);
        })
    }).catch(err => {
        console.log(err);
    })
}

function readFromUser(){
    readRiddle().then(data => {
        data.forEach(element => {
            console.log(element);
        });
    }).catch(err => {
        console.log(err);
    })
}

function updateRiddle(id,riddle){
    readRiddle().then(data => {
        let index;
        for (let i = 0; i < data.length; i++) {
            if(data[i].id === id){
                index = i
                break;
            }
        }
        data[index] = riddle;
        addRiddle(data).then(msg => {
            console.log("up" + index);
        }).catch(err => {
            console.log(err);
        })
    }).catch(err => {
        console.log(err);
    })
}


async function add2(riddle){
    let data;
    try {
        data = await readRiddle()
        await data.push(riddle)
    } catch (error) {
        console.log(`Error read riddles: ${error}`);
        return;
    }
    try {
        await addRiddle(data)
    } catch (error) {
        console.log(`Error adding riddle: ${error}`);
    }
}
