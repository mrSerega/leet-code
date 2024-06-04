function countSubIslands(grid1: number[][], grid2: number[][]): number {
  const I = grid1.length;
  const J = grid1[0].length;

  function step(i, j) {
    if (i < 0 || j < 0 || i >= I || j >= J) {
      return true;
    }

    if (grid2[i][j] === 0) {
      return true;
    }

    grid2[i][j] = 0;

    const up = step(i - 1, j);
    const right = step(i, j + 1);
    const down = step(i + 1, j);
    const left = step(i, j - 1);

    return up && right && down && left && grid1[i][j] === 1;
  }

  let sum = 0;

  for (let i = 0; i < I; i++) {
    for (let j = 0; j < J; j++) {
      if (grid2[i][j] === 1 && step(i, j)) {
        sum++;
      }
    }
  }

  return sum;
}
