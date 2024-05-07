// Given two strings s and t, return true if they are both one edit distance apart, otherwise return false.

// A string s is said to be one distance apart from a string t if you can:

// Insert exactly one character into s to get t.
// Delete exactly one character from s to get t.
// Replace exactly one character of s with a different character to get t.

var isOneEditDistance = function (s, t) {
  let i = 0;

  while (s[i] === t[i]) {
    i++;
    if (i >= s.length && i >= t.length) {
      return false;
    }
  }

  let j = 0;

  while (
    s[s.length - j - 1] === t[t.length - j - 1] &&
    i + j < s.length &&
    i + j < t.length // handle line made of one character
  ) {
    j++;
  }

  if (i + j === s.length && t.length - i - j === 1) {
    return true;
  }

  if (i + j === t.length && s.length - i - j === 1) {
    return true;
  }

  if (t.length - i - j === 1 && s.length - i - j === 1) {
    return true;
  }

  return false;
};
