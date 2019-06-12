var readlineSync = require('readline-sync');
var Board = require('./Board');
var Player = require('./Player');

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
    this.playerOne = new Player(playerOneName);
    this.playerOne.playerSymbol = 'x'
  }

  getPlayerTwo() {
    let playerTwoName = readlineSync.question('Player two, may I have your name? ');
    this.playerTwo = new Player(playerTwoName);
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
    return this.currentPlayer ? this.playerOne : this.playerTwo;
  }
  
  takeTurns() {
    while(this.turnsRemaining > 0) {
      this.getCurrentPlayer().getMove();
      this.board.makeMove(this.getCurrentPlayer().returnMove(), this.getCurrentPlayer().playerSymbol)
      
      if(this.gameOver()) {
        break
      }
    }
  }

  gameOver() {
    if(this.turnsRemaining === 1 && !this.board.isWin()) {
      console.log('Draw')
      return true
    }

    if(this.board.isWin()) {
      console.log(`${this.getCurrentPlayer().name} wins`)
      return true
    } 

    else {
      this.turnsRemaining -= 1;
      this.currentPlayer = !this.currentPlayer;
      return false
    }
  }

  replay() {
    let willReplay = readlineSync.question('Would you like to play again? (Y / N)');
    return willReplay === 'Y' ? true : false; 
  }
}

module.exports = Game;