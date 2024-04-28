// You are given two strings of the same length s and t. In one step you can choose any character of t and replace it with another character.

// Return the minimum number of steps to make t an anagram of s.

// An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
  const arr_s = new Array(26).fill(0);
  const arr_t = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    const relativeCode = s.charCodeAt(i) - "a".charCodeAt();
    arr_s[relativeCode]++;
  }

  for (let i = 0; i < t.length; i++) {
    const relativeCode = t.charCodeAt(i) - "a".charCodeAt();
    arr_t[relativeCode]++;
  }

  let sum = 0;

  for (let i = 0; i < arr_s.length; i++) {
    sum += Math.abs(arr_s[i] - arr_t[i]);
  }

  return sum / 2;
};
