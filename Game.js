var readlineSync = require('readline-sync');
var Board = require('./Board');
var HumanPlayer = require('./HumanPlayer');

class Game {
  constructor() {
    this.playerOne = '';
    this.playerTwo = ''
    this.board = '';
    this.turnsRemaining = 9;
    this.currentPlayer = true;
  }
  
  getPlayerOne() {
    let playerOneName = readlineSync.question('Player one, may I have your name? ');
    this.playerOne = new HumanPlayer(playerOneName);
  }

  getPlayerTwo() {
    let playerTwoName = readlineSync.question('Player two, may I have your name? ');
    this.playerTwo = new HumanPlayer(playerTwoName);
  }

  play() {
    //start prompt for game 
    console.log("Welcome to tic tac toe!")
    this.getPlayerOne();
    this.getPlayerTwo();
    this.board = new Board;
    this.board.displayBoard();
  }

  getCurrentPlayer() {
    //Return current player
    return  this.currentPlayer ? this.playerOne : this.playerTwo;
  }

  takeTurns() {
    while(this.turnsRemaining > 0) {
      this.getCurrentPlayer().getMove();
      this.board.makeMove(this.getCurrentPlayer().returnMove())
      this.turnsRemaining -= 1;
      this.currentPlayer = !this.currentPlayer;
    }
  }
}

module.exports = Game;