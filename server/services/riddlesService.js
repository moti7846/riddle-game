import {writeDBFile, readDBFile} from "../DAL/function.js"

const path = "C:\\Users\\97253\\Desktop\\riddle-game\\server\\DB\\riddles.txt"

async function showRiddles(){
    return await readDBFile(path)
}

async function addriddle(riddle){
    let data;
    try {
        data = await readDBFile(path)
        await data.push(riddle)
    } catch (error) {
        console.log(`Error read riddles: ${error}`);
        return;
    }
    try {
        await writeDBFile(path, data)
    } catch (error) {
        console.log(`Error adding riddle: ${error}`);
    }
}

async function updateRiddle(riddle){
    let data;
    try {
        data = await readDBFile(path)
    } catch (error) {
        console.log(`Error read riddles: ${error}`)
        return
    }
    for (let i = 0; i < data.length; i++) {
        if(data[i].id === riddle.id){
            data[i] = riddle;
            break;
        }
    }
    try {
        writeDBFile(path, data)
    } catch (error) {
        console.log(error)
    }    
}

async function deleteRiddle(id){
    let data;
    let index;
    try {
        data = await readDBFile(path)
    } catch (error) {
        console.log(`Error read riddles: ${error}`)
        return;
    }
    for (let i = 0; i < data.length; i++) {
        if(data[i].id === id){
            index = i
            break;
        }
    }
    try {
        data.splice(index,1);
        writeDBFile(path, data);
    } catch (error) {
        console.log(error)
    }    
}

export{
    showRiddles,
    addriddle,
    updateRiddle,
    deleteRiddle
}