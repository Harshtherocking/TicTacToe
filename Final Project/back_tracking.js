function bestMove() {
  // computer to make its turn
  let bestScore = -Infinity;
  let move;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      // Is the spot vacant?
      if (board[i][j] == '') {
        board[i][j] = computer;
        let score = minimax(board,false);
        board[i][j] = '';
        if (score > bestScore) {
          bestScore = score;
          move = { i, j };
        }
      }
    }
  }
  board[move.i][move.j] = computer;
  currentPlayer = player;
}

let scores = {
  X: 10,
  O: -10,
  tie: 0
};

function minimax(board, isMaximizing) {
  let result = checkWinner();
  if (result !== null) {
    return scores[result];
  }

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // Is the spot vacant?
        if (board[i][j] == '') {
          board[i][j] = computer;
          let score = minimax(board, false);
          board[i][j] = '';
          bestScore = max(score, bestScore);
        }
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // Is the spot vacant ?
        if (board[i][j] == '') {
          board[i][j] = player;
          let score = minimax(board, true);
          board[i][j] = '';
          bestScore = min(score, bestScore);
        }
      }
    }
    return bestScore;
  }
}
