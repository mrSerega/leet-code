// You are given a list of preferences for n friends, where n is always even.

// For each person i, preferences[i] contains a list of friends sorted in the order of preference. In other words, a friend earlier in the list is more preferred than a friend later in the list. Friends in each list are denoted by integers from 0 to n-1.

// All the friends are divided into pairs. The pairings are given in a list pairs, where pairs[i] = [xi, yi] denotes xi is paired with yi and yi is paired with xi.

// However, this pairing may cause some of the friends to be unhappy. A friend x is unhappy if x is paired with y and there exists a friend u who is paired with v but:

// x prefers u over y, and
// u prefers x over v.
// Return the number of unhappy friends.

/**
 * @param {number} n
 * @param {number[][]} preferences
 * @param {number[][]} pairs
 * @return {number}
 */
var unhappyFriends = function (n, preferences, pairs) {
  const isUnhappy = (x) => {
    const y = pairs.find((p) => p[0] === x || p[1] === x).find((f) => f !== x);

    const x_preferences = preferences[x];
    for (let ui = 0; x_preferences[ui] !== y; ui++) {
      const u = x_preferences[ui];
      v = pairs.find((p) => p[0] === u || p[1] === u).find((f) => f !== u);
      if (preferences[u].indexOf(x) < preferences[u].indexOf(v)) {
        return true;
      }
    }

    return false;
  };

  let sum = 0;

  for (let i = 0; i < n; i++) {
    if (isUnhappy(i)) {
      sum++;
    }
  }

  return sum;
};
