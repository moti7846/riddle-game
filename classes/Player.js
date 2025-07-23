import { getRiddles } from "../api/riddle.js";
import {user} from "../config.js";
import { Riddle } from "./Riddle.js";
import { question } from "readline-sync";


const riddles = await getRiddles()

class Player {
    constructor() {
        this.times = [];
    }
    start() {
        riddles.forEach(item => {
            this.riddle = new Riddle(item);
            const time = this.riddle.askAndTime(() => this.riddle.ask());
            this.recordTime(time);
        });
        this.end();
    }
    hello() {
        console.log("===========================");
        console.log("----Welcome to the game----");
        if (user.role === 'guest')
            this.bestTime = 0;
        else{
            this.bestTime = "כאן יגיע הבקשה"
        }
        console.log(`hello ${this.name}, your best time is ${this.bestTime}`);
    }
    recordTime(time) {
        this.times.push(time);
    }
    showStats() {
        this.totalTime = 0;
        this.times.forEach(time => {
            this.totalTime += time
        });
        return this.totalTime
    }
    async end() {
        console.log("===========================");
        console.log(user.name)
        this.timePlay = this.showStats()
        console.log(`Playing time: ${this.timePlay}`)
        console.log(`Average per puzzle: ${this.showStats() / this.times.length}`)
        if (this.bestTime > this.timePlay)
            await fetch("")
        console.log("===========================");
    }
}

export default new Player();