// Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).

// The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.
/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let maxScore = 0;

  let zeros = 0;
  let ones = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "0") {
      if (i !== s.length - 1) {
        zeros++;
      }
    } else {
      if (i !== 0) {
        ones++;
      }
    }

    const score = zeros - ones;
    if (score > maxScore) {
      maxScore = score;
    }
  }

  return maxScore + ones;
};
