import { question } from "readline-sync";
import { allplay, times } from "./Riddle.js";

export class Player{
    start () {
        console.log("Welcome to the game");
        const name = question("What is your name? ")
        console.log(`hello ${name}`);
        
    }
    recordTime(start , end){
        return Math.round(((end - start) / 1000));
    }
    showStats(){
        let total = 0;
        times.forEach(time => {
            total += time
        });
        return total
    }
}