// A company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti], the cost of flying the ith person to city a is aCosti, and the cost of flying the ith person to city b is bCosti.

// Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.

/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
  costs.sort((a, b) => {
    const left = a[0] - a[1];
    const right = b[0] - b[1];

    return left - right;
  });

  let sum = 0;

  for (let i = 0; i < costs.length / 2; i++) {
    sum += costs[i][0];
    sum += costs[costs.length - i - 1][1];
  }

  return sum;
};
