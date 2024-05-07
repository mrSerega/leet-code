// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const I = grid.length;
  const J = grid[0].length;

  const step = (i, j) => {
    if (i < 0 || j < 0 || i >= I || j >= J) {
      return;
    }

    if (grid[i][j] === "0") {
      return;
    }

    grid[i][j] = "0";

    step(i - 1, j);
    step(i + 1, j);
    step(i, j - 1);
    step(i, j + 1);

    return;
  };

  let sum = 0;

  for (let i = 0; i < I; i++) {
    for (let j = 0; j < J; j++) {
      if (grid[i][j] === "1") {
        sum++;
        step(i, j);
      }
    }
  }

  return sum;
};
