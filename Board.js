function createBoard() {
  let playerOne = new HumanPlayer();
  let playerTwo = new HumanPlayer();
  return new Board(playerOne, playerTwo);
}

class Board {
  constructor(playerOne, playerTwo) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.boardGrid = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
    this.error = '';
  }

  displayBoard() {
    console.log('Board Grid', this.boardGrid);
  }

  validMove(playerInput) {
    /* 
    - Check if valid input
    - Check if the input has not been used already
    - Else, continue with 'makeMove
    */
    let numberInputRegex = new RegExp(/^[1-9]$/)
    return numberInputRegex.test(parseInt(playerInput));
  }

  makeMove(playerInput, playerSymbol) {
    //Take player input and replace spot on board with x or o based on input 
    this.boardGrid.map((row, index) => {
      if(row.includes(parseInt(playerInput))) {
        let inputIndex = row.indexOf(parseInt(playerInput))
        this.boardGrid[index][inputIndex] = playerSymbol;
        console.log(this.boardGrid)
      }
    })
  }

  isDraw() {
    return this.boardGrid.forEach((row) => row.some(isNaN));
  }

  isWin() {
    return this.isVerticalWin()|| this.isHorizontalWin() || this.isDiagonalWin(); 
  }

  isVerticalWin() {
    let column = [];
    let columnValuesMatch = false;
    let currentBoard = this.boardGrid;
    for (let i = 0; i < currentBoard.length; i++) {
      currentBoard.map((row) => {
        column.push(row[i])
      })
      columnValuesMatch = column.every((value) => value === column[0])
      if(columnValuesMatch) {
        break;
      }
      column = [];
    }
    return columnValuesMatch
  }

  isHorizontalWin() {
    let horizontalMatch = false;
    this.boardGrid.forEach((row) => {
      let isRowMatch = row.every((value) => value === row[0]);
      if (isRowMatch) { horizontalMatch = isRowMatch; return; }
    });
    return horizontalMatch
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