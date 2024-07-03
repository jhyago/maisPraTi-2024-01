// Função que verifica se é seguro colocar um número na posição especificada do tabuleiro
function isSafe(board, row, col, num) {
  // Verifica se o número já existe na linha ou na coluna
  for (let x = 0; x <= 3; x++) {
      if (board[row][x] === num || board[x][col] === num) {
          return false;
      }
  }

  // Calcula o início do sub-bloco 2x2
  let startRow = row - row % 2, startCol = col - col % 2;
  // Verifica se o número já existe no sub-bloco 2x2
  for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
          if (board[i + startRow][j + startCol] === num) {
              return false;
          }
      }
  }

  // Se não há conflitos, é seguro colocar o número
  return true;
}

// Função que resolve o Sudoku utilizando backtracking
function solveSudoku(board, n) {
  let row = -1;
  let col = -1;
  let isEmpty = true;
  // Procura uma célula vazia (valor 0) no tabuleiro
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

  // Se não há células vazias, o Sudoku está resolvido
  if (isEmpty) {
      return true;
  }

  // Tenta colocar números de 1 a n na célula vazia
  for (let num = 1; num <= n; num++) {
      if (isSafe(board, row, col, num)) {
          board[row][col] = num;
          // Recursivamente tenta resolver o restante do tabuleiro
          if (solveSudoku(board, n)) {
              return true;
          } else {
              // Se falhar, volta atrás (backtracking)
              board[row][col] = 0;
          }
      }
  }
  return false;
}

// Função que gera um Sudoku 4x4 vazio e resolve ele
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

// Função que imprime o Sudoku no console
function imprimirSudoku(sudoku) {
  sudoku.forEach(linha => console.log(linha.join(' ')));
}

// Gera e imprime um Sudoku 4x4 resolvido
const sudokuGrid = generateSudoku4x4();
imprimirSudoku(sudokuGrid);
