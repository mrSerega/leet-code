// There is a new alien language that uses the English alphabet. However, the order of the letters is unknown to you.

// You are given a list of strings words from the alien language's dictionary. Now it is claimed that the strings in words are
// sorted lexicographically
//  by the rules of this new language.

// If this claim is incorrect, and the given arrangement of string in words cannot correspond to any order of letters, return "".

// Otherwise, return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language's rules. If there are multiple solutions, return any of them.

/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function (words) {
  let graph = {};
  words.forEach((word) => {
    word.split("").forEach((char) => (graph[char] = []));
  }); // initialize graph entry for every character
  // build the relationship graph
  for (let i = 0; i < words.length - 1; i++) {
    let top = words[i];
    let down = words[i + 1];

    let minLength = Math.min(top.length, down.length);
    let flag = false;
    for (let j = 0; j < minLength; j++) {
      if (top[j] != down[j]) {
        graph[top[j]].push(down[j]);
        flag = true;
        break; // only need to find the first pair
      }
    }

    // test that longer words with the same letters can't be before shorter one
    if (top.length > down.length && !flag) {
      return "";
    }
  }
  let visiting = new Set(),
    visited = new Set(),
    result = [];
  // regular graph dfs
  var dfs = function (char) {
    if (visiting.has(char)) return false;
    if (visited.has(char)) return true;
    visiting.add(char);
    for (let n of graph[char]) {
      if (!dfs(n)) return false;
    }
    visiting.delete(char);
    visited.add(char);
    result.push(char);
    return true;
  };

  for ([key, val] of Object.entries(graph)) {
    if (!dfs(key)) return "";
  }
  return result.reverse().join("");
};
