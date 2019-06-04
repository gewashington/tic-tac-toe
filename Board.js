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
    let isNumberInput = new RegExp(/^[1-9]$/)
    return isNumberInput.test(parseInt(playerInput));
  }

  makeMove(playerInput, playerSymbol) {
    //Take player input and replace spot on board with x or o based on input 
    this.validMove(playerInput)
    this.boardGrid.map((row, index) => {
      if(row.includes(parseInt(playerInput))) {
        let inputIndex = row.indexOf(parseInt(playerInput))
        this.boardGrid[index][inputIndex] = 'x';
        console.log(this.boardGrid)
      }
    })
  }

  isGameOver() {
    return this.isVerticalWin()|| this.isHorizontalWin() || this.isDiagonalWin() 
  }

  isVerticalWin() {
    let column = [];
    let columnValuesMatch = false;
    let currentBoard = this.state.board;
    for (i = 0; i < currentBoard.length; i++) {
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
    this.state.board.forEach((row) => {
      return row.every((value) => value === row[0])
    });
  }

  isDiagonalWin() {
    let forwardDiagonal = []
    let reverseDiagonal = []
    let currentBoard = this.state.board;

    for (i = 0; i < currentBoard.length; i++) {
      forwardDiagonal.push(currentBoard[i][i])
    }

    for (i = 0; i < currentBoard.length; i++) {
      reverseDiagonal.push(currentBoard[2 - i][i])
    }

    let isForwardDiagonalWin = forwardDiagonal.every((value) => value === forwardDiagonal[0]);
    let isReverseDiagonal = reverseDiagonal.every((value) =>  value === reverseDiagonal[0]);

    return isForwardDiagonalWin || isReverseDiagonal
  }
}

module.exports = Board;