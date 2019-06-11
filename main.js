// const readlineSync = require('readline-sync');

// var userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!');
var Game = require('./Game');


function runGame() {
    let ticTacToe = new Game();
    ticTacToe.play();
    ticTacToe.takeTurns();
    ticTacToe.replay() && runGame();
}

runGame();

