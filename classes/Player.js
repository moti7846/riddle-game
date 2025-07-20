import { getRiddles } from "../api/riddle.js";
import { Riddle } from "./Riddle.js";
import { question } from "readline-sync";

const riddles = await getRiddles()

class Player{
    constructor(){
        this.times = [];
    }
    start(){
        riddles.forEach(item => {
            this.riddle = new Riddle(item);
            const time = this.riddle.askAndTime(()=> this.riddle.ask());
            this.recordTime(time);
        });
        this.end();
    }
    hello(){
        console.log("----Welcome to the game----");
        this.name = question("What is your name? ")
        this.playerDetails = fetch("");
        console.log(`hello ${this.name}, your best time is ${this.playerDetails.bestTime}`);
    }
    recordTime(time){
        this.times.push(time);
    }
    showStats(){
        this.totalTime = 0;
        this.times.forEach(time => {
            this.totalTime += time
        });
        return this.totalTime
    }
    end(){
        console.log(this.name)
        console.log(`Playing time: ${this.showStats()}`)
        console.log(`Average per puzzle: ${this.showStats() / this.times.length}`)
    }
}

export default new Player();