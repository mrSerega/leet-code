// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const arr = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    const relativecode = s.charCodeAt(i) - `a`.charCodeAt();
    arr[relativecode]++;
  }

  for (let i = 0; i < s.length; i++) {
    const relativecode = s.charCodeAt(i) - `a`.charCodeAt();
    const amount = arr[relativecode];

    if (amount === 1) {
      return i;
    }
  }

  return -1;
};
