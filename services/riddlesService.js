import {writeFile, readFile} from "../DAL/function.js"

const path = "C:\\Users\\97253\\Desktop\\riddle-game\\DAL\\riddles.txt"

function readReddlesFromUser(){
    readFile(path).then(data => {
        data.forEach(reddle => {
            console.log(reddle);
        });
    }).catch(err => {
        console.log(err);
    })
}

async function addriddle(riddle){
    let data;
    try {
        data = await readFile(path)
        await data.push(riddle)
    } catch (error) {
        console.log(`Error read riddles: ${error}`);
        return;
    }
    try {
        await writeFile(path, data)
    } catch (error) {
        console.log(`Error adding riddle: ${error}`);
    }
}

async function updateRiddle(id,riddle){
    let data;
    let index;
    try {
        data = await readFile(path)
    } catch (error) {
        console.log(`Error read riddles: ${error}`)
        return
    }
    for (let i = 0; i < data.length; i++) {
        if(data[i].id === id){
            index = i
            break;
        }
    }
    try {
        data[index] = riddle;
        writeFile(path, data)
    } catch (error) {
        console.log(error)
    }    
}

async function deleteRiddle(id){
    let data;
    let index;
    try {
        data = await readFile(path)
    } catch (error) {
        console.log(`Error read riddles: ${error}`)
        return
    }
    for (let i = 0; i < data.length; i++) {
        if(data[i].id === id){
            index = i
            break;
        }
    }
    try {
        data.splice(index,1)
        writeFile(path, data)
    } catch (error) {
        console.log(error)
    }    
}

// readReddlesFromUser()
updateRiddle(3,{
        "id" : 4691,
        "name" : "moti"
    })
// readReddlesFromUser()
// deleteRiddle(4691)
readReddlesFromUser()