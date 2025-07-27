import { upBestTime } from "../api/player.js";
import { getRiddles } from "../api/riddle.js";
import { user } from "../service/user.js";
import { Riddle } from "./Riddle.js";


const riddles = await getRiddles()

class Player {
    constructor() {
        this.times = [];
    }
    async start() {
        this.hello()
        riddles.forEach(item => {
            this.riddle = new Riddle(item);
            const time = this.riddle.askAndTime(() => this.riddle.ask());
            this.recordTime(time);
        });
        await this.end();
    }
    hello() {
        console.log("==============================");
        console.log("-----Welcome to the game-----");
        console.log("==============================");
        if (user.role === 'guest')
            this.bestTime = 0;
        else {
            this.bestTime = 1000
        }
        console.log(`hello ${user.name}, your best time is ${this.bestTime}`);
        console.log("<<<<<<<<<<----->>>>>>>>>>")
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
        console.log("========== End Game ==========");
        this.timePlay = this.showStats()
        console.log(`Playing time: ${this.timePlay}`)
        console.log(`Average per puzzle: ${this.showStats() / this.times.length}`)
        if (user.role !== 'guest') {
            if (this.bestTime > 0) {
                const response = await upBestTime(this.timePlay);
                console.log(response);
            }
        }
        else {
            console.log("Guest user - best time not recorded.");
        }
        
        console.log("------------------------------");
    }
}

export default new Player();
