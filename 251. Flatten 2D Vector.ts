// Design an iterator to flatten a 2D vector. It should support the next and hasNext operations.

// Implement the Vector2D class:

// Vector2D(int[][] vec) initializes the object with the 2D vector vec.
// next() returns the next element from the 2D vector and moves the pointer one step forward. You may assume that all the calls to next are valid.
// hasNext() returns true if there are still some elements in the vector, and false otherwise.

class Vector2D {
  private vec: number[][];
  private next_i: number;
  private next_j: number;

  constructor(vec: number[][]) {
    this.vec = vec;
    this.next_i = 0;
    this.next_j = 0;
  }

  next(): number {
    if (this.hasNext()) {
      const toReturn = this.vec[this.next_i][this.next_j];
      if (this.next_j >= this.vec[this.next_i].length - 1) {
        this.next_i++;
        this.next_j = 0;
      } else {
        this.next_j++;
      }
      return toReturn;
    } else {
      return null;
    }
  }

  hasNext(): boolean {
    for (; this.next_i < this.vec.length; this.next_i++) {
      for (; this.next_j < this.vec[this.next_i].length; this.next_j++) {
        if (this.vec[this.next_i][this.next_j] !== undefined) {
          return true;
        }
      }
    }
    return false;
  }
}

/**
 * Your Vector2D object will be instantiated and called as such:
 * var obj = new Vector2D(vec)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
