// Implement the RandomizedSet class:

// RandomizedSet() Initializes the RandomizedSet object.
// bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
// bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
// int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
// You must implement the functions of the class such that each function works in average O(1) time complexity.

class RandomizedSet {
  constructor() {}

  private hash = {};
  private storage = [];
  private availableIndexes = [];

  insert(val: number): boolean {
    let flag;

    if (this.hash[val] !== undefined) {
      flag = false;
    } else {
      flag = true;
      if (this.availableIndexes.length) {
        const index = this.availableIndexes.pop();
        this.storage[index] = val;
        this.hash[val] = index;
      } else {
        this.storage.push(val);
        this.hash[val] = this.storage.length - 1;
      }
    }

    return flag;
  }

  remove(val: number): boolean {
    let flag;

    if (this.hash[val] !== undefined) {
      flag = true;
      const index = this.hash[val];
      delete this.hash[val];
      this.storage[index] = undefined;
      this.availableIndexes.push(index);
    } else {
      flag = false;
    }

    return flag;
  }

  getRandom(): number {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * this.storage.length);
    } while (this.storage[randomIndex] === undefined);

    return this.storage[randomIndex];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
