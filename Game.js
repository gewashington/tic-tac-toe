// import Board from '.Board';
// import HumanPlayer from '.HumanPlayer';

var readlineSync = require('readline-sync');

function createGame() {
  let playerOne = new HumanPlayer();
  let playerTwo = new HumanPlayer();
  let board = new Board(playerOne, playerTwo);
  return new Game(playerOne, playerTwo, board);
};

class Game {
  constructor() {
    this.playerOneName = '';
    this.playerTwoName = '';
  }
  
  getPlayerOneName() {
    this.playerOneName = readlineSync.question('Player one, may I have your name? ');
    console.log(`${this.playerOneName} is my name`)
  }

  play() {
    //start prompt for game 
    console.log("Welcome to tic tac toe!")
    this.getPlayerOneName();
  }

  getPlayerTwoName() {
    this.playerTwoName.readlineSync.question('Player two, can I have your name?')
  }


  // switchPlayers(player) {
  //   //switch human player class?
  //   return player
  // }
}

module.exports = Game;