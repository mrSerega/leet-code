// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const numberStack = [1];
  const strStack = [""];

  let numberTemplate = "";

  for (let i = 0; i < s.length; i++) {
    const code = s.charCodeAt(i);

    // check for numbers
    if (code >= 48 && code <= 57) {
      numberTemplate += s[i];
      continue;
    }

    // parse brackets
    if (code === 91) {
      numberStack.push(Number.parseInt(numberTemplate));
      strStack.push("");
      numberTemplate = "";
      continue;
    }

    if (code === 93) {
      const amount = numberStack.pop();
      const str = strStack.pop();
      for (let j = 0; j < amount; j++) {
        strStack[strStack.length - 1] += str;
      }
      continue;
    }

    strStack[strStack.length - 1] += s[i];
  }

  return strStack.pop();
};
