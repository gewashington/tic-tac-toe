/*
TODO: 
- extract function that gets columns (group numbers by index)
- Display a nice tic-tac-toe board 
*/ 

var readlineSync = require('readline-sync');

class Board {
  constructor(playerOne, playerTwo) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.boardGrid = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
    this.error = '';
  }

  displayBoard() {
    this.boardGrid.forEach((row, index) => {
      console.log(row.join(' | '))
      if (index !== this.boardGrid.length - 1) {
        console.log('----------');
      }
    });
  }

  isValidMove(playerInput) {
    /* 
    - Check if valid input
    - Check if the input has not been used already
    */
    let parsedPlayerInput = parseInt(playerInput);
    let isSpotAvailable = this.boardGrid.map((row) => {
      return row.includes(parsedPlayerInput)
    }).some((val) => val === true);
    let isInputNumberRegex = new RegExp(/^[1-9]$/)
    return isInputNumberRegex.test(parsedPlayerInput) && isSpotAvailable;
  }

  makeMove(playerInput, playerSymbol) {
    //Take player input and replace spot on board with x or o based on input 
    let input = playerInput;
    while(!this.isValidMove(input)) {
      input = readlineSync.question(`Please enter a number on the board that hasn't been used`)
      if(this.isValidMove(input)) {
        break
      }
    }
    this.boardGrid.map((row, index) => {
      if(row.includes(parseInt(input))) {
        let inputIndex = row.indexOf(parseInt(input))
        this.boardGrid[index][inputIndex] = playerSymbol;
        this.displayBoard();
      }
    })
  }

  isWin() {
    return this.isVerticalWin()|| this.isHorizontalWin() || this.isDiagonalWin(); 
  }

  isVerticalWin() {
    let columnValuesMatch = false;
    let column = [];
    let currentBoard = this.boardGrid;
    for (let i = 0; i < currentBoard.length; i++) {
      currentBoard.map((row) => {
        column.push(row[i])
      })
      columnValuesMatch = column.every((value) => value === column[0])
      if (columnValuesMatch) {
        break;
      }
      column = [];
    }
    return columnValuesMatch
  }

  isHorizontalWin() {
    return this.boardGrid.map((row) => {
      return row.every((value) => value === row[0]);
    }).some((val) => val === true);
  }

  isDiagonalWin() {
    let forwardDiagonal = []
    let reverseDiagonal = []
    let currentBoard = this.boardGrid;

    for (let i = 0; i < currentBoard.length; i++) {
      forwardDiagonal.push(currentBoard[i][i])
    }

    for (let i = 0; i < currentBoard.length; i++) {
      reverseDiagonal.push(currentBoard[2 - i][i])
    }

    let isForwardDiagonalWin = forwardDiagonal.every((value) => value === forwardDiagonal[0]);
    let isReverseDiagonal = reverseDiagonal.every((value) =>  value === reverseDiagonal[0]);

    return isForwardDiagonalWin || isReverseDiagonal
  }
}

module.exports = Board;