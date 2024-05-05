// A gene string can be represented by an 8-character long string, with choices from 'A', 'C', 'G', and 'T'.

// Suppose we need to investigate a mutation from a gene string startGene to a gene string endGene where one mutation is defined as one single character changed in the gene string.

// For example, "AACCGGTT" --> "AACCGGTA" is one mutation.
// There is also a gene bank bank that records all the valid gene mutations. A gene must be in bank to make it a valid gene string.

// Given the two gene strings startGene and endGene and the gene bank bank, return the minimum number of mutations needed to mutate from startGene to endGene. If there is no such a mutation, return -1.

// Note that the starting point is assumed to be valid, so it might not be included in the bank.

/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (startGene, endGene, bank) {
  const getMutations = (gen) => {
    const res = [];
    for (let i = 0; i < gen.length; i++) {
      const mutations = "ACGT".split("").filter((c) => c !== gen[i]);
      const genArr = gen.split("");
      for (let j = 0; j < mutations.length; j++) {
        const mutated = [
          ...genArr.slice(0, i),
          mutations[j],
          ...genArr.slice(i + 1, gen.length),
        ].join("");
        if (bank.includes(mutated)) {
          res.push(mutated);
        }
      }
    }
    return res;
  };

  const current = new Set();
  const visited = new Set();

  const dfs = (gen, step) => {
    if (gen === endGene) {
      return step;
    }

    if (current.has(gen)) {
      return null;
    }

    if (visited.has(gen)) {
      return null;
    }

    const mutations = getMutations(gen);

    let min = null;

    current.add(gen);

    for (let i = 0; i < mutations.length; i++) {
      const val = dfs(mutations[i], step + 1);
      if (val !== null && (val < min || min === null)) {
        min = val;
      }
    }

    current.delete(gen);
    visited.add(gen);

    return min;
  };

  const d = dfs(startGene, 0);

  if (d === null) {
    return -1;
  }

  return d;
};
