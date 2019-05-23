var readlineSync = require('readline-sync');

class HumanPlayer {
  constructor() {
    name = '';
    playerInput = '';
  }

  getPlayerOneName() {
    return readlineSync.question(`${Player}, what is your name?`)
  }
  getPlayerTwoName() {
    return readlineSync.question(`${Player}, what is your name?`)
  }

  getMove() {
    return readlineSync.question(`${this.name} make your move.`)
  }
}

module.exports = HumanPlayer;