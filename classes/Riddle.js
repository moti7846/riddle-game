import { question } from "readline-sync";
import r1 from "../riddles/r1.js";
import r2 from "../riddles/r2.js";

export let allplay = [r1,r2];
export let times = [];
export let idplay = 0;
export class riddle{
    ask(){
        const start = Date.now();
        console.log(`id: ${allplay[idplay].id} , ${allplay[idplay].name}`);
        const answer = question(allplay[idplay].taskDescription);
        if(answer === allplay[idplay].correctAnswer){
            const end = Date.now();
            times.push(Math.round(((end - start) / 1000)))
            idplay++;
        }
    }
}