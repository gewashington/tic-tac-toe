// const readlineSync = require('readline-sync');

// var userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!');
var Game = require('./Game');

let ticTacToe = new Game();
ticTacToe.play();
ticTacToe.takeTurns();


