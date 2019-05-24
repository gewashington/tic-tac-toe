var readlineSync = require('readline-sync');
var HumanPlayer = require('./HumanPlayer');

// function createGame() {
//   let playerOne = new HumanPlayer();
//   let playerTwo = new HumanPlayer();
//   let board = new Board(playerOne, playerTwo);
//   return new Game(playerOne, playerTwo, board);
// };

class Game {
  constructor() {
    this.playerOne = '';
    this.playerTwo = ''
  }
  
  getPlayerOneName() {
    let playerOneName = readlineSync.question('Player one, may I have your name? ');
    this.playerOne = new HumanPlayer(playerOneName);
  }

  getPlayerTwoName() {
    let playerTwoName = readlineSync.question('Player two, may I have your name? ');
    this.playerTwo = new HumanPlayer(playerTwoName);
  }

  play() {
    //start prompt for game 
    console.log("Welcome to tic tac toe!")
    this.getPlayerOneName();
    this.getPlayerTwoName();
    this.playerOne.getMove()
  }


  // switchPlayers(player) {
  //   //switch human player class?
  //   return player
  // }
}

module.exports = Game;