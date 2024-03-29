var readlineSync = require('readline-sync');

class Player {
  constructor(name) {
    this.name = name;
    this.playerInput = '';
    this.playerSymbol = '';
  }

  getMove() {
    this.playerInput = readlineSync.question(`${this.name} make your move.`)
  }

  returnMove() {
    return this.playerInput;
  }
}

module.exports = Player;