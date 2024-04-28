// Design a search autocomplete system for a search engine. Users may input a sentence (at least one word and end with a special character '#').

// You are given a string array sentences and an integer array times both of length n where sentences[i] is a previously typed sentence and times[i] is the corresponding number of times the sentence was typed. For each input character except '#', return the top 3 historical hot sentences that have the same prefix as the part of the sentence already typed.

// Here are the specific rules:

// The hot degree for a sentence is defined as the number of times a user typed the exactly same sentence before.
// The returned top 3 hot sentences should be sorted by hot degree (The first is the hottest one). If several sentences have the same hot degree, use ASCII-code order (smaller one appears first).
// If less than 3 hot sentences exist, return as many as you can.
// When the input is a special character, it means the sentence ends, and in this case, you need to return an empty list.
// Implement the AutocompleteSystem class:

// AutocompleteSystem(String[] sentences, int[] times) Initializes the object with the sentences and times arrays.
// List<String> input(char c) This indicates that the user typed the character c.
// Returns an empty array [] if c == '#' and stores the inputted sentence in the system.
// Returns the top 3 historical hot sentences that have the same prefix as the part of the sentence already typed. If there are fewer than 3 matches, return them all.

class AutocompleteSystem {
  private history: Record<string, number> = {};

  private type: string = "";

  private static LIMIT: number = 3;

  constructor(sentences: string[], times: number[]) {
    for (let i = 0; i < sentences.length; i++) {
      this.history[sentences[i]] = times[i];
    }
  }

  input(c: string): string[] {
    if (c === "#") {
      this.history[this.type] = this.history[this.type] || 0;
      this.history[this.type]++;
      this.type = "";
      return [];
    }

    this.type += c;
    const res = Object.entries(this.history)
      .filter(([key, _v]) => key.startsWith(this.type))
      .sort(([key_a, a], [key_b, b]) => {
        const diff = b - a;
        if (diff === 0) {
          return key_b > key_a ? -1 : 1;
        }
        return diff;
      })
      .slice(0, AutocompleteSystem.LIMIT)
      .map(([k, _v]) => k);

    return res;
  }
}

/**
 * Your AutocompleteSystem object will be instantiated and called as such:
 * var obj = new AutocompleteSystem(sentences, times)
 * var param_1 = obj.input(c)
 */
