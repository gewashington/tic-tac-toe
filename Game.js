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
    this.playerOne.playerSymbol = 'x'
  }

  getPlayerTwo() {
    let playerTwoName = readlineSync.question('Player two, may I have your name? ');
    this.playerTwo = new HumanPlayer(playerTwoName);
    this.playerTwo.playerSymbol = 'o'
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
      if (!this.board.validMove(this.getCurrentPlayer().returnMove())) { 
        console.log('Please enter a number on the board'); 
        continue; 
      }
      this.board.makeMove(this.getCurrentPlayer().returnMove(), this.getCurrentPlayer().playerSymbol)
      if(this.board.isWin()) {
        console.log('Winner')
        break
      }
      else {
        this.turnsRemaining -= 1;
        this.currentPlayer = !this.currentPlayer;
      }

    }
  }

  gameOver() {

  }
}

module.exports = Game;