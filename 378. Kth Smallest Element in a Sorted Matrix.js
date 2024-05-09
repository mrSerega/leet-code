// Given an n x n matrix where each of the rows and columns is sorted in ascending order, return the kth smallest element in the matrix.

// Note that it is the kth smallest element in the sorted order, not the kth distinct element.

// You must find a solution with a memory complexity better than O(n2).

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  let n = 0;
  let val = null;
  const J = new Array(matrix.length).fill(0);
  while (n < k) {
    let minIndex = undefined;
    let minVal = null;
    for (let i = 0; i < matrix.length; i++) {
      if (
        matrix[i][J[i]] !== undefined &&
        (minVal === null || matrix[i][J[i]] < minVal)
      ) {
        minVal = matrix[i][J[i]];
        minIndex = i;
      }
    }
    J[minIndex]++;
    n++;
    val = minVal;
  }
  return val;
};
