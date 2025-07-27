import { question } from "readline-sync";

export class Riddle {
    constructor(riddle) {
        this.id = riddle.id;
        this.name = riddle.name;
        this.taskDescription = riddle.taskDescription;
        this.correctAnswer = riddle.correctAnswer;
    }
    ask() {
        console.log(`id: ${this.id} , ${this.name}`);
        let answer;
        while (true) {
            answer = question(`${this.taskDescription} `);
            if (answer === this.correctAnswer) {
                 return
            }
            console.log("Wrong answer");
        }
    }
    askAndTime(fn) {
        const start = Date.now();
        fn();
        const end = Date.now();
        const tempTime = this.CalculationTime(start, end)
        return tempTime;
    }
    CalculationTime(start, end) {
        return Math.round(((end - start) / 1000));
    }
}
