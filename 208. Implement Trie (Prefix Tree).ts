// A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

// Implement the Trie class:

// Trie() Initializes the trie object.
// void insert(String word) Inserts the string word into the trie.
// boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
// boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

interface Node {
  next: Record<string, Node>;
  isEnd?: boolean;
}

class Trie {
  private head: Node;

  constructor() {
    this.head = {
      next: {},
    };
  }

  insert(word: string): void {
    let current = this.head;

    for (let c of word) {
      if (current.next[c]) {
        current = current.next[c];
      } else {
        current.next[c] = {
          next: {},
        };
        current = current.next[c];
      }
    }

    current.isEnd = true;
  }

  search(word: string): boolean {
    let current = this.head;

    for (let c of word) {
      if (current.next[c]) {
        current = current.next[c];
      } else {
        return false;
      }
    }

    return Boolean(current.isEnd);
  }

  startsWith(prefix: string): boolean {
    let current = this.head;

    for (let c of prefix) {
      if (current.next[c]) {
        current = current.next[c];
      } else {
        return false;
      }
    }

    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
