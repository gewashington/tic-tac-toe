var Game = require('./Game');


function runGame() {
    let ticTacToe = new Game();
    ticTacToe.play();
    ticTacToe.takeTurns();
    ticTacToe.replay() && runGame();
}

runGame();

