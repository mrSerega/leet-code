// Given the root of a binary tree, return the vertical order traversal of its nodes' values. (i.e., from top to bottom, column by column).

// If two nodes are in the same row and column, the order should be from left to right.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalOrder = function (root) {
  if (root === null) {
    return [];
  }

  const negative = [];
  const positive = [];
  const zero = [];

  const queue = [];

  queue.push([root, 0]);

  while (queue.length) {
    const [n, y] = queue.shift();

    if (n === null) {
      continue;
    }

    if (y === 0) {
      zero.push(n.val);
    } else if (y > 0) {
      if (positive[y - 1] !== undefined) {
        positive[y - 1].push(n.val);
      } else {
        positive.push([n.val]);
      }
    } else {
      if (negative[Math.abs(y) - 1] !== undefined) {
        negative[Math.abs(y) - 1].push(n.val);
      } else {
        negative.push([n.val]);
      }
    }

    queue.push([n.left, y - 1]);
    queue.push([n.right, y + 1]);
  }

  negative.reverse();
  negative.push(zero);
  negative.push(...positive);

  return negative;
};
