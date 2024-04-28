// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const x = board.length;
  const y = board[0].length;

  const step = (i, j, visited, k) => {
    if (k === word.length) {
      return true;
    }

    if (i < 0 || j < 0 || i >= x || j >= y) {
      return false;
    }

    if (visited[i][j]) {
      return false;
    }

    if (board[i][j] !== word[k]) {
      return false;
    }

    visited[i][j] = true;

    if (
      step(i + 1, j, visited, k + 1) ||
      step(i - 1, j, visited, k + 1) ||
      step(i, j + 1, visited, k + 1) ||
      step(i, j - 1, visited, k + 1)
    ) {
      return true;
    }

    visited[i][j] = false;
    return false;
  };

  const visited = new Array(board.length)
    .fill(0)
    .map((item) => new Array(board[0].length).fill(false));

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (step(i, j, visited, 0)) {
        return true;
      }
    }
  }

  return false;
};
