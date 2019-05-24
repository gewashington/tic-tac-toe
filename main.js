// const readlineSync = require('readline-sync');

// var userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!');
var Game = require('./Game');
var PlayerOne = require('./HumanPlayer');
var PlayerTwo = require('./HumanPlayer');

let ticTacToe = new Game();
ticTacToe.play(PlayerOne);


