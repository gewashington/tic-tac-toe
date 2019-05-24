var readlineSync = require('readline-sync');

class HumanPlayer {
  constructor(name) {
    this.name = name;
    this.playerInput = '';
  }

  getMove() {
    return readlineSync.question(`${this.name} make your move.`)
  }
}

module.exports = HumanPlayer;