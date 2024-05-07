// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.

interface Node {
  key: number;
  value: number;
  next: Node;
  prev: Node;
}

class LRUCache {
  private dict: Map<number, Node>;
  private head: Node;
  private capacity: number;

  constructor(capacity: number) {
    this.dict = new Map();
    this.head = null;
    this.capacity = capacity;
  }

  private update = (node: Node) => {
    this.delete(node);
    this.add(node);
  };

  private delete = (node: Node) => {
    node.next.prev = node.prev;
    node.prev.next = node.next;

    if (node === this.head) {
      this.head = node.next;
    }

    this.dict.delete(node.key);
  };

  private add = (node: Node) => {
    if (this.head === null) {
      this.head = node;
      node.next = node;
      node.prev = node;
    } else {
      node.next = this.head;
      node.prev = this.head.prev;

      this.head.prev.next = node;
      this.head.prev = node;

      this.head = node;
    }

    this.dict.set(node.key, node);
  };

  get(key: number): number {
    const node = this.dict.get(key);

    if (node) {
      this.update(node);
      return node.value;
    }

    return -1;
  }

  put(key: number, value: number): void {
    const node = this.dict.get(key);

    if (node) {
      node.value = value;
      this.update(node);
      return;
    }

    if (this.dict.size >= this.capacity) {
      const tail = this.head.prev;
      this.delete(tail);
    }

    this.add({
      key,
      value,
      next: null,
      prev: null,
    });
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
