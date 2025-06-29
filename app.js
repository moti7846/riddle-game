import { Player } from "./classes/Player.js";
import { allplay, idplay, riddle } from "./classes/Riddle.js";

const play = new Player();
const a = new riddle();
play.start()

while(idplay != (allplay.length)){
    a.ask();
}
console.log(play.showStats());
console.log(play.showStats() / allplay.length);