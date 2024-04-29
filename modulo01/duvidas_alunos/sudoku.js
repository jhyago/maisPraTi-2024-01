function isSafe(board, row, col, num) {
    for (let x = 0; x <= 3; x++) {
      if (board[row][x] === num || board[x][col] === num) {
        return false;
      }
    }

    let startRow = row - row % 2, startCol = col - col % 2;
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        if (board[i + startRow][j + startCol] === num) {
          return false;
        }
      }
    }
  
    return true;
  }
  
  function solveSudoku(board, n) {
    let row = -1;
    let col = -1;
    let isEmpty = true;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] === 0) {
          row = i;
          col = j;
          isEmpty = false;
          break;
        }
      }
      if (!isEmpty) {
        break;
      }
    }
  
    if (isEmpty) {
      return true;
    }
  
    for (let num = 1; num <= n; num++) {
      if (isSafe(board, row, col, num)) {
        board[row][col] = num;
        if (solveSudoku(board, n)) {
          return true;
        } else {
          board[row][col] = 0;
        }
      }
    }
    return false;
  }
  
  function generateSudoku4x4() {
    let board = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    solveSudoku(board, 4);
    return board;
  }
  
  function imprimirSudoku(sudoku) {
    sudoku.forEach(linha => console.log(linha.join(' ')));
  }
  
  const sudokuGrid = generateSudoku4x4();
  imprimirSudoku(sudokuGrid);
  