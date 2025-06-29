import allplay from "../riddles/Riddles.js";
import { Riddle } from "./Riddle.js";
import { question } from "readline-sync";

export class Player{
    constructor(){
        this.times = [];
        this.hello()
    }
    start(){
        allplay.forEach(item => {
            this.riddle = new Riddle(item);
            const time = this.riddle.askAndTime(()=> this.riddle.ask());
            this.recordTime(time);
        });
        this.end();
    }
    hello(){
        console.log("----Welcome to the game----");
        this.name = question("What is your name? ")
        console.log(`hello ${this.name}`);
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